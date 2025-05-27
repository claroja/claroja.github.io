from tqdm import tqdm  
import warnings, pickle, collections
from tools_recall import get_item_simEmb_dict, get_all_click_df, get_item_info_df,  get_item_info_dict, get_hist_and_last_click, get_item_topk_click_list, item_based_recommend,  metrics_recall, get_user_item_time_dict
from tools import DATAPATH, MIDPATH

warnings.filterwarnings('ignore')


all_click_df = get_all_click_df(data_path=DATAPATH, sample=True)  # 用户点击物品日志数据框
item_info_df = get_item_info_df(data_path=DATAPATH)  # 物品信息数据框

trn_hist_click_df, trn_last_click_df = get_hist_and_last_click(all_click_df)  # 分训练集和测试集
user_item_time_dict = get_user_item_time_dict(trn_hist_click_df)
item_topk_click_list = get_item_topk_click_list(trn_hist_click_df, k=50)
item_created_time_dict, item_type_dict, item_words_dict = get_item_info_dict(item_info_df)

item_simEmb_dict = get_item_simEmb_dict(DATAPATH, topk=10)

sim_item_topk = 20
recall_item_num = 10

itemBasedEmb_recall_dict = collections.defaultdict(dict)
for user_id in tqdm(trn_hist_click_df['user_id'].unique()):
    itemBasedEmb_recall_dict[user_id] = item_based_recommend(user_id, user_item_time_dict, item_simEmb_dict, sim_item_topk, recall_item_num, item_topk_click_list, item_created_time_dict, item_simEmb_dict)

metrics_recall(itemBasedEmb_recall_dict, trn_last_click_df, topk=recall_item_num)
pickle.dump(itemBasedEmb_recall_dict, open(MIDPATH + 'itemBasedEmb_recall_dict.pkl', 'wb'))

