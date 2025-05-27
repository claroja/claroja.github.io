from deepctr.models import DIN
from sklearn.preprocessing import MinMaxScaler
import tensorflow as tf
import pandas as pd
import numpy as np
import warnings

from tools_model import get_din_feats_columns, norm_sim
from tools import DATAPATH, MIDPATH

warnings.filterwarnings('ignore')


trn_data = pd.read_csv(DATAPATH+'train_click_log.csv')
tst_data = pd.read_csv(DATAPATH+'testA_click_log.csv')
all_data = pd.concat([trn_data, tst_data], ignore_index=True)

hist_click =all_data[['user_id', 'click_article_id']].groupby('user_id').agg({list}).reset_index()
his_behavior_df = pd.DataFrame()
his_behavior_df['user_id'] = hist_click['user_id']
his_behavior_df['hist_click_article_id'] = hist_click['click_article_id']


trn_user_item_feats_df = pd.read_csv(MIDPATH + 'trn_user_item_feats_df.csv')
tst_user_item_feats_df = pd.read_csv(MIDPATH + 'tst_user_item_feats_df.csv')

trn_user_item_feats_df = trn_user_item_feats_df.merge(his_behavior_df, on='user_id')
tst_user_item_feats_df = tst_user_item_feats_df.merge(his_behavior_df, on='user_id')


# 把特征分开, 为了简化选取最少得特征
sparse_fea = ['user_id', 'click_article_id']  # ['user_id', 'click_article_id', 'category_id', 'click_environment', 'click_deviceGroup', 'click_os', 'click_country', 'click_region', 'click_referrer_type', 'is_cat_hab']

behavior_fea = ['click_article_id']  # ['click_article_id']

hist_behavior_fea = ['hist_click_article_id']  # ['hist_click_article_id']

dense_fea = ['sim0']  # ['sim0', 'time_diff0', 'word_diff0', 'sim_max', 'sim_min', 'sim_sum', 'sim_mean', 'score', 'rank','click_size','time_diff_mean','active_level','user_time_hob1','user_time_hob2', 'words_hbo','words_count']

# dense特征进行归一化, 神经网络训练都需要将数值进行归一化处理
mm = MinMaxScaler()
for feat in dense_fea:
    trn_user_item_feats_df[feat] = mm.fit_transform(trn_user_item_feats_df[[feat]])
    tst_user_item_feats_df[feat] = mm.fit_transform(tst_user_item_feats_df[[feat]])

x_tst, dnn_feature_columns = get_din_feats_columns(tst_user_item_feats_df, dense_fea, sparse_fea, behavior_fea, hist_behavior_fea, max_len=50)

k_fold = 5
user_ids = trn_user_item_feats_df['user_id'].unique()
user_set = [user_ids[i::k_fold] for i in range(k_fold)]  # 每隔n取一个用户, 作为验证集

score_list = []
score_df = trn_user_item_feats_df[['user_id', 'click_article_id', 'label']]
sub_preds = np.zeros(tst_user_item_feats_df.shape[0])


# 建立模型
model = DIN(dnn_feature_columns, behavior_fea)
model.compile('adam', 'binary_crossentropy',metrics=['binary_crossentropy', tf.keras.metrics.AUC()])


# 五折交叉验证，并将中间结果保存用于staking
for n_fold, valid_user in enumerate(user_set):
    train_idx = trn_user_item_feats_df[~trn_user_item_feats_df['user_id'].isin(valid_user)] # add slide user
    valid_idx = trn_user_item_feats_df[trn_user_item_feats_df['user_id'].isin(valid_user)]
    
    # 准备训练数据
    x_trn, dnn_feature_columns = get_din_feats_columns(train_idx, dense_fea, sparse_fea, behavior_fea, hist_behavior_fea, max_len=50)
    y_trn = train_idx['label'].values

    # 准备验证数据
    x_val, dnn_feature_columns = get_din_feats_columns(valid_idx, dense_fea, sparse_fea, behavior_fea, hist_behavior_fea, max_len=50)
    y_val = valid_idx['label'].values
    
    history = model.fit(x_trn, y_trn, verbose=1, epochs=2, validation_data=(x_val, y_val) , batch_size=256)
    
    # 预测验证集结果
    valid_idx['pred_score'] = model.predict(x_val, verbose=1, batch_size=256)   
    
    valid_idx.sort_values(by=['user_id', 'pred_score'])
    valid_idx['pred_rank'] = valid_idx.groupby(['user_id'])['pred_score'].rank(ascending=False, method='first')
    
    # 将验证集的预测结果放到一个列表中，后面进行拼接
    score_list.append(valid_idx[['user_id', 'click_article_id', 'pred_score', 'pred_rank']])
    
    # 如果是线上测试，需要计算每次交叉验证的结果相加，最后求平均

    sub_preds += model.predict(x_tst, verbose=1, batch_size=256)[:, 0]   
    
score_df_ = pd.concat(score_list, axis=0)
score_df = score_df.merge(score_df_, how='left', on=['user_id', 'click_article_id'])
# 保存训练集交叉验证产生的新特征
score_df[['user_id', 'click_article_id', 'pred_score', 'pred_rank', 'label']].to_csv(MIDPATH + 'trn_din_cls_feats.csv', index=False)
    
# 测试集的预测结果，多次交叉验证求平均,将预测的score和对应的rank特征保存，可以用于后面的staking，这里还可以构造其他更多的特征
tst_user_item_feats_df['pred_score'] = sub_preds / k_fold
tst_user_item_feats_df['pred_score'] = tst_user_item_feats_df['pred_score'].transform(lambda x: norm_sim(x))
tst_user_item_feats_df.sort_values(by=['user_id', 'pred_score'])
tst_user_item_feats_df['pred_rank'] = tst_user_item_feats_df.groupby(['user_id'])['pred_score'].rank(ascending=False, method='first')

# 保存测试集交叉验证的新特征
tst_user_item_feats_df[['user_id', 'click_article_id', 'pred_score', 'pred_rank']].to_csv(MIDPATH + 'tst_din_cls_feats.csv', index=False)