from tqdm import tqdm  
import collections, pickle, warnings
warnings.filterwarnings('ignore')
from tools_recall import get_item_simEmb_dict, get_all_click_df, get_item_info_df,  get_item_info_dict, get_hist_and_last_click, get_item_topk_click_list, item_based_recommend, get_item_simAct_dict, metrics_recall, get_user_item_time_dict
from tools import DATAPATH, MIDPATH

all_click_df = get_all_click_df(data_path=DATAPATH, sample=False)
item_info_df = get_item_info_df(DATAPATH)
trn_hist_click_df, trn_last_click_df = get_hist_and_last_click(all_click_df) 

user_item_time_dict = get_user_item_time_dict(trn_hist_click_df)
item_topk_click_list = get_item_topk_click_list(trn_hist_click_df, k=50)
item_created_time_dict, item_type_dict, item_words_dict = get_item_info_dict(item_info_df)

item_simAct_dict = get_item_simAct_dict(item_created_time_dict, user_item_time_dict)
item_simEmb_dict = get_item_simEmb_dict(DATAPATH, topk=10)

sim_item_topk = 20
recall_item_num = 10


itemBasedAct_recall_dict = collections.defaultdict(dict)
for user_id in tqdm(trn_hist_click_df['user_id'].unique()):
    itemBasedAct_recall_dict[user_id] = item_based_recommend(user_id, user_item_time_dict, item_simAct_dict, sim_item_topk, recall_item_num, item_topk_click_list, item_created_time_dict, item_simEmb_dict)

metrics_recall(itemBasedAct_recall_dict, trn_last_click_df, topk=recall_item_num)
pickle.dump(itemBasedAct_recall_dict, open(MIDPATH + 'itemBasedAct_recall_dict.pkl', 'wb'))  # 存储物品协同过滤结果
