import pandas as pd  
from tqdm import tqdm  
import warnings, math, pickle
warnings.filterwarnings('ignore')
from tqdm import tqdm
import collections
from tensorflow.python.keras.models import Model

from tools_recall import get_item_simEmb_dict, get_all_click_df, get_item_info_df, get_item_emb_dict, get_item_info_dict, get_hist_and_last_click, get_item_topk_click_list,  get_item_simAct_dict, get_item_user_time_dict, get_user_activate_degree_dict, get_userItem_sim_list, metrics_recall, user_based_recommend, get_user_simAct_dict,get_user_item_time_dict, get_user_simEmb_dict
from tools import DATAPATH, MIDPATH


all_click_df = get_all_click_df(data_path=DATAPATH, sample=True)  # 用户点击物品日志数据框
item_info_df = get_item_info_df(data_path=DATAPATH)  # 物品信息数据框
item_emb_dict = get_item_emb_dict(data_path=DATAPATH)  # 使用向量表示的物品
trn_hist_click_df, trn_last_click_df = get_hist_and_last_click(all_click_df)  # 分训练集和测试集

# 处理相关信息
user_item_time_dict = get_user_item_time_dict(trn_hist_click_df)
item_user_time_dict = get_item_user_time_dict(trn_hist_click_df)

item_topk_click = get_item_topk_click_list(trn_hist_click_df, k=50)
item_created_time_dict, item_type_dict, item_words_dict = get_item_info_dict(item_info_df)

i2i_sim_dict = get_item_simAct_dict(item_created_time_dict, user_item_time_dict)
i2i_emb_sim_dict = get_item_simEmb_dict(DATAPATH, topk=10)
user_activate_degree_dict = get_user_activate_degree_dict(trn_hist_click_df)
u2u_sim_dict = get_user_simAct_dict(item_user_time_dict, user_activate_degree_dict)

# emb_usercf_sim召回


userItem_sim_list, user_labelId_2_rawId, item_labelId_2_rawId, user_rawId_emb_dict, item_rawId_emb_dict = get_userItem_sim_list(trn_hist_click_df, embedding_dim=16, topk=20)

trn_hist_click_df, trn_last_click_df = get_hist_and_last_click(all_click_df)
user_recall_items_dict = collections.defaultdict(dict)
user_item_time_dict = get_user_item_time_dict(trn_hist_click_df)
user_simEmb_dict = get_user_simEmb_dict(user_rawId_emb_dict, topk=10)
sim_user_topk = 20
recall_item_num = 10

userBasedEmb_recall_dict = collections.defaultdict(dict)
for user in tqdm(trn_hist_click_df['user_id'].unique()):
    userBasedEmb_recall_dict[user] = user_based_recommend(user, user_item_time_dict, u2u_sim_dict, sim_user_topk, recall_item_num, item_topk_click, item_created_time_dict, i2i_emb_sim_dict)

metrics_recall(userBasedEmb_recall_dict, trn_last_click_df, topk=recall_item_num)
pickle.dump(userBasedEmb_recall_dict, open(MIDPATH + 'userBasedEmb_recall_dict.pkl', 'wb'))