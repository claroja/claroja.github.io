import numpy as np
import pandas as pd
import lightgbm as lgb
import warnings
from tools_model import norm_sim, submit
from tools import DATAPATH, MIDPATH
warnings.filterwarnings('ignore')

# 定义特征列
lgb_cols = ['sim0', 'time_diff0', 'word_diff0','sim_max', 'sim_min', 'sim_sum', 
            'sim_mean', 'score','click_size', 'time_diff_mean', 'active_level',
            'click_environment','click_deviceGroup', 'click_os', 'click_country', 
            'click_region','click_referrer_type', 'user_time_hob1', 'user_time_hob2',
            'words_hbo', 'category_id', 'created_at_ts','words_count']


# 做召回评估的一个标志, 如果不进行评估就是直接使用全量数据进行召回
offline = False


trn_df = pd.read_csv(MIDPATH + 'trn_user_item_feats_df.csv')
tst_df = pd.read_csv(MIDPATH + 'tst_user_item_feats_df.csv')



score_list = []
score_df = trn_df[['user_id', 'click_article_id','label']]
sub_preds = np.zeros(tst_df.shape[0])


k_fold = 5
user_ids = trn_df['user_id'].unique()
user_set = [user_ids[i::k_fold] for i in range(k_fold)]  # 每隔n取一个用户, 作为验证集


# 五折交叉验证，并将中间结果保存用于staking
for n_fold, valid_user in enumerate(user_set):
    train_idx = trn_df[~trn_df['user_id'].isin(valid_user)]  # 获取训练接用户id
    valid_idx = trn_df[trn_df['user_id'].isin(valid_user)]  # 获取验证集用户id
    
    # 训练集与验证集的用户分组
    train_idx.sort_values(by=['user_id'], inplace=True)
    g_train = train_idx.groupby(['user_id'], as_index=False).count()["label"].values
    
    valid_idx.sort_values(by=['user_id'], inplace=True)
    g_val = valid_idx.groupby(['user_id'], as_index=False).count()["label"].values
    
    # 定义模型
    lgb_ranker = lgb.LGBMRanker(boosting_type='gbdt', num_leaves=31, reg_alpha=0.0, reg_lambda=1, max_depth=-1, n_estimators=100, subsample=0.7, colsample_bytree=0.7, subsample_freq=1, learning_rate=0.01, min_child_weight=50, random_state=2018, n_jobs= 16)  
    
    # 训练模型
    lgb_ranker.fit(train_idx[lgb_cols], train_idx['label'], group=g_train, eval_set=[(valid_idx[lgb_cols], valid_idx['label'])], eval_group= [g_val], eval_at=[1, 2, 3, 4, 5], eval_metric=['ndcg', ] )
    
    # 预测验证集结果
    valid_idx['pred_score'] = lgb_ranker.predict(valid_idx[lgb_cols], num_iteration=lgb_ranker.best_iteration_)
    
    # 对输出结果进行归一化
    valid_idx['pred_score'] = valid_idx[['pred_score']].transform(lambda x: norm_sim(x))
    
    valid_idx.sort_values(by=['user_id', 'pred_score'])
    valid_idx['pred_rank'] = valid_idx.groupby(['user_id'])['pred_score'].rank(ascending=False, method='first')
    
    # 将验证集的预测结果放到一个列表中，后面进行拼接
    score_list.append(valid_idx[['user_id', 'click_article_id', 'pred_score', 'pred_rank']])
    
    # 如果是线上测试，需要计算每次交叉验证的结果相加，最后求平均
    if not offline:
        sub_preds += lgb_ranker.predict(tst_df[lgb_cols], lgb_ranker.best_iteration_)
    
score_df_ = pd.concat(score_list, axis=0)
score_df = score_df.merge(score_df_, how='left', on=['user_id', 'click_article_id'])
# 保存训练集交叉验证产生的新特征
score_df[['user_id', 'click_article_id', 'pred_score', 'pred_rank', 'label']].to_csv(MIDPATH + 'trn_lgb_ranker_feats.csv', index=False)
    
# 测试集的预测结果，多次交叉验证求平均,将预测的score和对应的rank特征保存，可以用于后面的staking，这里还可以构造其他更多的特征

tst_df['pred_score'] = sub_preds / k_fold
tst_df['pred_score'] = tst_df['pred_score'].transform(lambda x: norm_sim(x))
tst_df.sort_values(by=['user_id', 'pred_score'])
tst_df['pred_rank'] = tst_df.groupby(['user_id'])['pred_score'].rank(ascending=False, method='first')

# 保存测试集交叉验证的新特征
tst_df[['user_id', 'click_article_id', 'pred_score', 'pred_rank']].to_csv(MIDPATH + 'tst_lgb_ranker_feats.csv', index=False)


# 预测结果重新排序, 及生成提交结果
# 单模型生成提交结果
rank_results = tst_df[['user_id', 'click_article_id', 'pred_score']]
rank_results['click_article_id'] = rank_results['click_article_id'].astype(int)
submit(rank_results, topk=5, save_path=MIDPATH, model_name='lgb_ranker')
