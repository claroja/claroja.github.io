
import warnings, pickle
from tensorflow.python.keras.models import Model
from tools_recall import get_all_click_df, get_hist_and_last_click, item_user_recommend, metrics_recall, get_userItem_sim_list
from tools import DATAPATH, MIDPATH

warnings.filterwarnings('ignore')

all_click_df = get_all_click_df(data_path = DATAPATH, sample = True)  # 用户点击物品日志数据框
trn_hist_click_df, trn_last_click_df = get_hist_and_last_click(all_click_df)  

# youtubeDnn召回
userItem_sim_list, user_labelId_2_rawId, item_labelId_2_rawId, user_rawId_emb_dict, item_rawId_emb_dict = get_userItem_sim_list(trn_hist_click_df, embedding_dim=16, topk=20)


userItems_recall_dict = item_user_recommend(userItem_sim_list, user_labelId_2_rawId, item_labelId_2_rawId)

metrics_recall(userItems_recall_dict, trn_last_click_df, topk=20)
pickle.dump(userItems_recall_dict, open(MIDPATH + 'userItems_recall_dict.pkl', 'wb'))