import warnings, collections, pickle
from tqdm import tqdm
from tools_recall import cold_start_recommend, get_item_simEmb_dict, get_all_click_df, get_item_info_df, get_item_info_dict, get_hist_and_last_click, get_item_topk_click_list,  get_user_hist_item_info_dict, item_based_recommend, get_user_item_time_dict
from tools import DATAPATH, MIDPATH
warnings.filterwarnings('ignore')

# 读取数据

all_click_df = get_all_click_df(data_path=DATAPATH, sample=True)  # 用户点击物品日志数据框
item_info_df = get_item_info_df(data_path=DATAPATH)  # 物品信息数据框

item_created_time_dict, item_type_dict, item_words_dict = get_item_info_dict(item_info_df)
trn_hist_click_df, trn_last_click_df = get_hist_and_last_click(all_click_df)  # 分训练集和测试集
item_topk_click = get_item_topk_click_list(trn_hist_click_df, k=50)
user_item_time_dict = get_user_item_time_dict(trn_hist_click_df)
item_simEmb_dict = get_item_simEmb_dict(DATAPATH, topk=10)

trn_hist_click_df_ = trn_hist_click_df.copy()
trn_hist_click_df_ = trn_hist_click_df_.merge(item_info_df, how='left', on='click_article_id')
user_hist_item_typs_dict, user_hist_item_ids_dict, user_hist_item_words_dict, user_last_item_created_time_dict = get_user_hist_item_info_dict(trn_hist_click_df_)
click_article_ids_set = set(all_click_df['click_article_id'].values)

sim_item_topk = 150
recall_item_num = 100

itemBased_recall_dict = collections.defaultdict(dict)
for user_id in tqdm(trn_hist_click_df['user_id'].unique()):
    itemBased_recall_dict[user_id] = item_based_recommend(user_id, user_item_time_dict, item_simEmb_dict, sim_item_topk, recall_item_num, item_topk_click,item_created_time_dict, item_simEmb_dict)

coldStart_recall_dict = cold_start_recommend(itemBased_recall_dict, user_hist_item_typs_dict, user_hist_item_words_dict, user_last_item_created_time_dict, item_type_dict, item_words_dict, item_created_time_dict, click_article_ids_set, recall_item_num) # 这里使用了很多规则来筛选冷启动的文章，所以前面再召回的阶段就应该尽可能的多召回一些文章，否则很容易被删掉

pickle.dump(coldStart_recall_dict, open(MIDPATH + 'coldStart_recall_dict.pkl', 'wb'))
