# 多路合并召回

import pickle

from tools_recall import multiRoad_recommend
from tools import DATAPATH, MIDPATH
itemBasedAct_recall_dict = pickle.load(open(f'{MIDPATH}itemBasedAct_recall_dict.pkl','rb'))
itemBasedEmb_recall_dict = pickle.load(open(f'{MIDPATH}itemBasedEmb_recall_dict.pkl','rb'))
userItems_recall_dict = pickle.load(open(f'{MIDPATH}userItems_recall_dict.pkl','rb'))
userBasedAct_recall_dict = pickle.load(open(f'{MIDPATH}userBasedAct_recall_dict.pkl','rb'))
userBasedEmb_recall_dict = pickle.load(open(f'{MIDPATH}userBasedEmb_recall_dict.pkl','rb'))
coldStart_recall_dict = pickle.load(open(f'{MIDPATH}coldStart_recall_dict.pkl','rb'))





user_multi_recall_dict =  {
    'itemBasedAct_recall_dict': itemBasedAct_recall_dict,
    'itemBasedEmb_recall_dict': itemBasedEmb_recall_dict,
    'userItems_recall_dict': userItems_recall_dict,
    'userBasedAct_recall_dict': userBasedAct_recall_dict,
    'userBasedEmb_recall_dict': userBasedEmb_recall_dict,
    'coldStart_recall_dict': coldStart_recall_dict,
} # 定义一个多路召回的字典，将各路召回的结果都保存在这个字典当中

weight_dict = {
    'itemBasedAct_recall_dict': 1,
    'itemBasedEmb_recall_dict': 1,
    'userItems_recall_dict': 1,
    'userBasedAct_recall_dict': 1,
    'userBasedEmb_recall_dict': 1,
    'coldStart_recall_dict': 1,
}  # 这里直接对多路召回的权重给了一个相同的值，其实可以根据前面召回的情况来调整参数的值

multiRoad_recall_dict = multiRoad_recommend(user_multi_recall_dict, weight_dict, topk=150) # 最终合并之后每个用户召回150个商品进行排序


pickle.dump(multiRoad_recall_dict, open(MIDPATH + 'multiRoad_recall_dict.pkl', 'wb'))
