import pandas as pd
import pickle
import warnings

from tools_feature import active_level, create_featureAct, device_fea, get_embedding, get_hist_and_last_click, get_user_recall_item_label_df, hot_level, make_tuple_func, recall_dict_2_df, user_cat_hob_fea, user_time_hob_fea
from tools import DATAPATH, MIDPATH
warnings.filterwarnings('ignore')

click_trn = pd.read_csv(DATAPATH+'train_click_log.csv')
click_trn_hist, click_trn_last = get_hist_and_last_click(click_trn)
click_tst_hist = pd.read_csv(DATAPATH+'testA_click_log.csv')
all_click = pd.concat([click_trn, click_tst_hist]).reset_index(drop=True)

article_info_df = pd.read_csv(DATAPATH + 'articles.csv')

recall_list_dict = pickle.load(open(f'{MIDPATH}itemBasedAct_recall_dict.pkl', 'rb'))
recall_list_df = recall_dict_2_df(recall_list_dict) # 将召回数据转换成df

item_content_emb_dict, item_w2v_emb_dict, item_youtube_emb_dict, user_youtube_emb_dict = get_embedding(MIDPATH, all_click)



# 给训练数据打标签，并负采样（这一部分时间比较久）
trn_user_item_label_df, tst_user_item_label_df = get_user_recall_item_label_df(
    click_trn_hist, 
    click_tst_hist,
    click_trn_last, 
    recall_list_df
)

trn_user_item_label_tuples = trn_user_item_label_df.groupby('user_id').apply(make_tuple_func).reset_index()
trn_user_item_label_tuples_dict = dict(zip(trn_user_item_label_tuples['user_id'], trn_user_item_label_tuples[0]))  # 数据框两列, 转换为字典

tst_user_item_label_tuples = tst_user_item_label_df.groupby('user_id').apply(make_tuple_func).reset_index()
tst_user_item_label_tuples_dict = dict(zip(tst_user_item_label_tuples['user_id'], tst_user_item_label_tuples[0]))


# 创建用户行为特征
trn_user_item_feats_df = create_featureAct(trn_user_item_label_tuples_dict.keys(), trn_user_item_label_tuples_dict, click_trn_hist, article_info_df, item_content_emb_dict)

tst_user_item_feats_df = create_featureAct(tst_user_item_label_tuples_dict.keys(), tst_user_item_label_tuples_dict, click_tst_hist, article_info_df, item_content_emb_dict)


# 创建用户特征
all_click = all_click.merge(article_info_df, left_on='click_article_id', right_on='article_id')

# 活跃特征
user_act_fea = active_level(all_click, ['user_id', 'click_article_id', 'click_timestamp'])
article_hot_fea = hot_level(all_click, ['user_id', 'click_article_id', 'click_timestamp'])  

# 设备特征(这里时间会比较长)
user_device_info = device_fea(all_click, ['user_id', 'click_environment', 'click_deviceGroup', 'click_os', 'click_country', 'click_region', 'click_referrer_type'])

# 时间特征
user_time_hob_info = user_time_hob_fea(all_click, ['user_id', 'click_timestamp', 'created_at_ts'])

# 类别特征
user_cat_hob_info = user_cat_hob_fea(all_click, ['user_id', 'category_id'])

# 用户的字数偏好特征
user_wcou_info = all_click.groupby('user_id')['words_count'].agg('mean').reset_index()
user_wcou_info.rename(columns={'words_count': 'words_hbo'}, inplace=True)

# 所有表进行合并

user_info = pd.merge(user_act_fea, user_device_info, on='user_id')
user_info = user_info.merge(user_time_hob_info, on='user_id')
user_info = user_info.merge(user_cat_hob_info, on='user_id')
user_info = user_info.merge(user_wcou_info, on='user_id')
trn_user_item_feats_df = trn_user_item_feats_df.merge(user_info, on='user_id', how='left')
tst_user_item_feats_df = tst_user_item_feats_df.merge(user_info, on='user_id',how='left')


# 召回的文章是否在用户爱好里面
trn_user_item_feats_df = trn_user_item_feats_df.merge(article_info_df, left_on='click_article_id', right_on='article_id')

tst_user_item_feats_df = tst_user_item_feats_df.merge(article_info_df, left_on='click_article_id', right_on='article_id')

trn_user_item_feats_df['is_cat_hab'] = trn_user_item_feats_df.apply(lambda x: 1 if x.category_id in set(x.cate_list) else 0, axis=1)
tst_user_item_feats_df['is_cat_hab'] = tst_user_item_feats_df.apply(lambda x: 1 if x.category_id in set(x.cate_list) else 0, axis=1)


del trn_user_item_feats_df['cate_list']
del tst_user_item_feats_df['cate_list']
del trn_user_item_feats_df['article_id']
del tst_user_item_feats_df['article_id']

# 训练验证特征
trn_user_item_feats_df.to_csv(MIDPATH + 'trn_user_item_feats_df.csv', index=False)
tst_user_item_feats_df.to_csv(MIDPATH + 'tst_user_item_feats_df.csv', index=False)