import pandas as pd  
import numpy as np
from collections import Counter
from tqdm import tqdm  
from collections import defaultdict  
import os, math, warnings, math, pickle
from tqdm import tqdm
import faiss
import collections
import random
from sklearn.preprocessing import MinMaxScaler
from sklearn.preprocessing import LabelEncoder
from datetime import datetime
from deepctr.feature_column import SparseFeat, VarLenSparseFeat
from sklearn.preprocessing import LabelEncoder
from tensorflow.python.keras import backend as K
from tensorflow.python.keras.models import Model
from tensorflow.keras.preprocessing.sequence import pad_sequences
from deepmatch.utils import sampledsoftmaxloss, NegativeSampler
from deepmatch.models import *
from deepmatch.utils import sampledsoftmaxloss
warnings.filterwarnings('ignore')
import tensorflow._api.v2.compat.v1 as tf
tf.disable_v2_behavior()  # 解决版本兼容问题

from pathlib import Path

from tools import DATAPATH, MIDPATH

def saveOrLoad_middle_result(mid_path):
    """保存方法的结果, 如果已有该结果, 下次运行时直接加载该结果, 省去计算的时间

    Args:
        save_path (str): 中间结果的保存路径
    """
    def wrap(func):
        def dec(*args,**kwargs):
            if Path(f'{mid_path}{func.__name__}.pkl').exists():
                func_result = pickle.load(open(f'{mid_path}{func.__name__}.pkl','rb'))
            else:
                func_result = func(*args,**kwargs)  
                pickle.dump(func_result, open(f'{mid_path}{func.__name__}.pkl', 'wb'))
            return func_result
        return dec
    return wrap

@saveOrLoad_middle_result(MIDPATH)
def get_all_click_df(data_path, sample=True):
    """按用户ID随机采样部分数据, 采样100个用户数据. 目的是用少量数据跑通整个流程

    由于进行归一化, 最小的时间戳变为0, 最大时间戳变为1.

    | user_id | click_article_id | click_timestamp | click_environment | click_deviceGroup | click_os | click_country | click_region | click_referrer_type |
    | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
    | 199402 | 336476 | 0.000000 | 4 | 1 | 17 | 1 | 20 | 2 |
    | 198392 | 285343 | 0.000399 | 4 | 1 | 17 | 1 | 18 | 1 |
    | 71679 | 206415 | 1.000000 | 4 | 3 | 2 | 1 | 25 | 2 |


    Args:
        load_path (str): csv文件存放的路径
        sample (bool, optional): 采样100个用户作为debug数据

    Returns:
        DataFrame: 采样的数据框, 并且去重, 以及对时间戳归一化
    """
    trn_click = pd.read_csv(data_path + 'train_click_log.csv')
    tst_click = pd.read_csv(data_path + 'testA_click_log.csv')
    all_click = pd.concat([trn_click, tst_click], ignore_index=True)
    
    if sample:  # 如果sample是正数, 则进行采样
        sample_user_ids = all_click['user_id'].value_counts()[::2500].index  # 按用户点击次数计数后, 步长2000采样100个用户, 保证点击次数按技术后均匀分布
        all_click = all_click[all_click['user_id'].isin(sample_user_ids)]
    else:  # 如果sample是False或None, 则读取全量数据. 既不做采样. (这里else可以省略, 但是加上更有助于理解)
        pass
    all_click = all_click.drop_duplicates((['user_id', 'click_article_id', 'click_timestamp']))  # 去掉重复数据
    all_click['click_timestamp'] = all_click[['click_timestamp']].apply(lambda x : (x-np.min(x))/(np.max(x)-np.min(x)))  # 对时间戳进行归一化,用于在关联规则的时候计算权重
    return all_click


@saveOrLoad_middle_result(MIDPATH)
def get_item_info_df(data_path):
    """获取物品信息, 将article_id更名为click_article_id, 是为了和train_click_log.csv做关联
    
    | click_article_id | category_id | created_at_ts | words_count |
    | ---- | ---- | ---- | ---- |
    | 0 | 0 | 1513144419000 | 168 |
    
    Args:
        load_path (str): csv文件存放的路径

    Returns:
        DataFrame: 文章信息数据框
    """
    item_info_df = pd.read_csv(data_path + 'articles.csv')
    item_info_df = item_info_df.rename(columns={'article_id': 'click_article_id'})# 为了方便与训练集中的click_article_id拼接，需要把article_id修改成click_article_id
    return item_info_df

@saveOrLoad_middle_result(MIDPATH)
def get_item_emb_dict(data_path):
    """读取向量表示文章, 并横向归一化向量

    `{0: array([-0.02118425, -0.12580893, -0.01813001,  0.00668391,  0.10909397, ...])}`

    Args:
        data_path (str): csv存放路径

    Returns:
        dict: {article_id: item_emp}
    """

    item_emb_df = pd.read_csv(data_path + 'articles_emb.csv')
    item_emb_cols = [x for x in item_emb_df.columns if 'emb' in x]  # 过滤掉'article_id'列
    item_emb_np = np.ascontiguousarray(item_emb_df[item_emb_cols])  # 一个内存不连续存储的数组转换为内存连续存储的数组，使得运行速度更快。
    item_emb_np = item_emb_np / np.linalg.norm(item_emb_np, axis=1, keepdims=True)  # 横向, 归一化
    item_emb_dict = dict(zip(item_emb_df['article_id'], item_emb_np))  # key是article_iD, value是归一化后的特征
    return item_emb_dict


@saveOrLoad_middle_result(MIDPATH)
def get_hist_and_last_click(all_click):
    """获得按时间顺序的历史(history)点击和最后一次(last)点击. 
    1. 用户最后1次点击是最后1次点击
    2. 用户最后1次点击之前的点击是历史点击
    3. 如果用户只有1个点击, 则该点击既是历史点击, 也是最后1次点击.

    历史点击`click_hist_df`, 以`user_id = 199402`为例, 可以看到时间戳是逐渐增大

    | user_id | click_article_id | click_timestamp | click_environment | click_deviceGroup | click_os | click_country | click_region | click_referrer_type |
    | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
    | 199402 | 29766 | 0.232846 | 4 | 1 | 17 | 1 | 20 | 2 |
    | 199402 | 31836 | 0.451853 | 4 | 1 | 17 | 1 | 20 | 2 |
    | 199402 | 59057 | 0.452933 | 4 | 1 | 17 | 1 | 20 | 2 |
    | 199402 | 133160 | 0.452958 | 4 | 1 | 17 | 1 | 20 | 2 |
    | 199402 | 289090 | 0.587928 | 4 | 1 | 17 | 1 | 20 | 2 |


    最后点击`click_last_df`, 以`user_id = 199402`为例, 可以看到时间戳比利是点击`click_hist_df`大

    | user_id | click_article_id | click_timestamp | click_environment | click_deviceGroup | click_os | click_country | click_region | click_referrer_type |
    | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
    | 199402 | 336220 | 0.587953 | 4 | 1 | 17 | 1 | 20 | 2 |

    推荐的问题, 就是用用户的历史点击行为, 来预测用户下一次的点击.



    Args:
        click_df (DataFrame): 点击日志数据框 

    Returns:
        (DataFrame, DataFrame): click_last_df是用户最后1次点击, click_hist_df是除最后一次点击外的历史点击(当只有1次点击时, 和最后1次点击相同)
    """
    
    all_click = all_click.sort_values(by=['user_id', 'click_timestamp'])  # 按user_id和时间戳排序
    click_hist_df = all_click.groupby('user_id').apply(lambda df: df if len(df) == 1 else df[:-1]).reset_index(drop=True) # 如果只有一个点击, 就取该用户的一个点击, 如果有多个点击, 则取除了最后一次以外的所有点击. 因为如果用户只有一个点击，数据框为空会导致训练的时候这个用户不可见
    click_last_df = all_click.groupby('user_id').tail(1)  # 取用户最后一次点击

    return click_hist_df, click_last_df


@saveOrLoad_middle_result(MIDPATH)
def get_user_item_time_dict(click_df):
    """根据点击时间获取用户的点击文章序列

    `12029: [(331116, 0.9019040886428195), (214753, 0.9020599098807888)]`

    Args:
        click_df (DataFrame): 点击日志数据框 

    Returns:
        dict: 形如{user1: [(item1, time1), (item2, time2)..]...}
    """
    click_df = click_df.sort_values('click_timestamp')  # 按时间顺序排序
    user_item_time_df = click_df.groupby('user_id')[['click_article_id', 'click_timestamp']].apply(lambda x: list(zip(x['click_article_id'], x['click_timestamp']))).reset_index().rename(columns={0: 'item_time_list'})

    user_item_time_dict = dict(zip(user_item_time_df['user_id'], user_item_time_df['item_time_list']))

    return user_item_time_dict


@saveOrLoad_middle_result(MIDPATH)
def get_item_user_time_dict(click_df):
    """根据点击时间获取文章的点击用户序列

    Args:
        click_df (DataFrame): 点击日志数据框 

    Returns:
        dict: 形如{item1: [(user1, time1), (user2, time2)..]...}
    """
    
    click_df = click_df.sort_values('click_timestamp')
    item_user_time_df = click_df.groupby('click_article_id')[['user_id', 'click_timestamp']].apply(lambda df: list(zip(df['user_id'], df['click_timestamp']))).reset_index().rename(columns={0: 'user_time_list'})
    item_user_time_dict = dict(zip(item_user_time_df['click_article_id'], item_user_time_df['user_time_list']))
    
    return item_user_time_dict


@saveOrLoad_middle_result(MIDPATH)
def get_item_topk_click_list(click_df, k):
    """获取近期点击最多的文章

    `Index([289003, 168623, 235616, 272143,...])`

    Args:
        all_click (DataFrame): 用户点击日志数据框
        k (int): topk

    Returns:
        Index: 点击最多的article_id的索引
    """
    topk_click = click_df['click_article_id'].value_counts().index[:k]
    return topk_click

@saveOrLoad_middle_result(MIDPATH)
def get_item_info_dict(item_info_df):
    """获取文章id对应的基本属性，保存成字典的形式，方便后面召回阶段，冷启动阶段直接使用

    1. `item_created_time_dict`: `{0: 0.9784319658749242, ...}`
    2. `item_type_dict`: `{0: 0, ...}`
    3. `item_words_dict`: `{0: 168, ...}`

    Args:
        item_info_df (DataFrame): 物品的基本属性

    Returns:
        (dict, dict, dict): item_created_time_dict: 文章创建时间, item_type_dict: 文章类别; item_words_dict: 文章字数; 
    """
    
    item_info_df['created_at_ts'] = item_info_df[['created_at_ts']].apply(lambda x : (x-np.min(x))/(np.max(x)-np.min(x)))  # 文章创建时间归一化
    item_created_time_dict = dict(zip(item_info_df['click_article_id'], item_info_df['created_at_ts']))
    item_type_dict = dict(zip(item_info_df['click_article_id'], item_info_df['category_id']))
    item_words_dict = dict(zip(item_info_df['click_article_id'], item_info_df['words_count']))
    
    return item_created_time_dict, item_type_dict, item_words_dict


@saveOrLoad_middle_result(MIDPATH)
def get_item_simAct_dict(item_created_time_dict, user_item_time_dict):
    """获得物品相似度字典

    `{289003: {233688: 0.0766225630879281, 183176: 0.1702720178431832, ...}}`
    
    Args:
        all_click (DataFame): 用户点击日志数据框
        item_created_time_dict (dict): {item_id: create_time}
        data_path (str): 数据存放路径

    Returns:
        dict: {article_id: {other_article_id: sim}}
    """

    i2i_sim = {}  # 计算物品相似度
    item_cnt = defaultdict(int)
    for user, item_time_list in tqdm(user_item_time_dict.items()): # 遍历{用户:[(物品, 点击时间)]}
        # 在基于商品的协同过滤优化的时候可以考虑时间因素
        for loc1, (i, i_click_time) in enumerate(item_time_list):  # 遍历[(物品id, 点击时间)], 其中 loc1:user_id; i:物品id; i_click_time:物品点击时间
            item_cnt[i] += 1  # 物品计数
            i2i_sim.setdefault(i, {})  # 
            for loc2, (j, j_click_time) in enumerate(item_time_list):  # 遍历[(物品id, 点击时间)]
                if(i == j):
                    continue
                loc_alpha = 1.0 if loc2 > loc1 else 0.7  # 某人点的物品1在物品2前, 给物品1赋值1, 否则赋值0.7. 考虑的是两个物品的相对前后关系.
                loc_weight = loc_alpha * (0.9 ** (np.abs(loc2 - loc1) - 1))  # 位置信息权重，其中的参数可以调节
                click_time_weight = np.exp(0.7 ** np.abs(i_click_time - j_click_time))  # 点击时间权重，其中的参数可以调节
                created_time_weight = np.exp(0.8 ** np.abs(item_created_time_dict[i] - item_created_time_dict[j]))  # 两篇文章创建时间的权重，其中的参数可以调节
                i2i_sim[i].setdefault(j, 0)
                i2i_sim[i][j] += loc_weight * click_time_weight * created_time_weight / math.log(len(item_time_list) + 1)# 考虑多种因素的权重计算最终的文章之间的相似度
                
    i2i_sim_ = i2i_sim.copy()
    for i, related_items in i2i_sim.items():
        for j, wij in related_items.items():
            i2i_sim_[i][j] = wij / math.sqrt(item_cnt[i] * item_cnt[j])
    return i2i_sim_


@saveOrLoad_middle_result(MIDPATH)
def get_user_activate_degree_dict(all_click):
    """用户活跃度: 使用用户点击数评估

    `{5017: 0.0, 12029: 0.0041841004184100415, ... }`

    Args:
        all_click (DataFrame): 用户点击日志数据框

    Returns:
        _type_: _description_
    """
    
    all_click_ = all_click.groupby('user_id')['click_article_id'].count().reset_index()
    mm = MinMaxScaler()
    all_click_['click_article_id'] = mm.fit_transform(all_click_[['click_article_id']])
    user_activate_degree_dict = dict(zip(all_click_['user_id'], all_click_['click_article_id']))
    
    return user_activate_degree_dict

@saveOrLoad_middle_result(MIDPATH)
def get_user_simAct_dict(item_user_time_dict, user_activate_degree_dict):
    """用户相似性矩阵计算

    `{178758: {178758: 0.0, 174345: 0.33062619978900554, 179939: 0.31019157885515364, ...}, ...}`

    Args:
        all_click_df (DataFrame): 用户点击日志数据框
        user_activate_degree_dict (dict): 用户活跃度的字典

    Returns:
        dict: {user_id: {other_user_id: sim}}
    """
    
    u2u_sim = {}  # user和user的相似度
    user_cnt = defaultdict(int)  # user计数
    for item, user_time_list in tqdm(item_user_time_dict.items()):  # 遍历所有物品
        for u, click_time in user_time_list:  # 遍历该物品, 所有作为key的用户
            user_cnt[u] += 1  # 
            u2u_sim.setdefault(u, {})
            for v, click_time in user_time_list:  # 锁定作为key的用户前提下, 遍历剩余用户作为value
                u2u_sim[u].setdefault(v, 0)
                if u == v:
                    continue
                # 用户平均活跃度作为活跃度的权重，这里的式子也可以改善
                activate_weight = 100 * 0.5 * (user_activate_degree_dict[u] + user_activate_degree_dict[v])   
                u2u_sim[u][v] += activate_weight / math.log(len(user_time_list) + 1)
    
    u2u_sim_ = u2u_sim.copy()
    for u, related_users in u2u_sim.items():
        for v, wij in related_users.items():
            u2u_sim_[u][v] = wij / math.sqrt(user_cnt[u] * user_cnt[v])
    return u2u_sim_


@saveOrLoad_middle_result(MIDPATH)
def get_item_simEmb_dict(load_path, topk):
    """对于每一篇文章， 基于embedding的相似性返回topk个与其最相似的文章， 只不过由于文章数量太多，这里用了faiss进行加速

    `{0: {77608: 0.8903070688247681, 77965: 0.8881016969680786, 77610: 0.8859948515892029, ...,}, ...}`

    Args:
        item_emb_df (DataFrame): 向量表示的物品
        save_path (str): 数据存储路径
        topk (int): topk

    Returns:
        dict: {article_id: {other_article_id: sim}}
    """
    item_emb_df = pd.read_csv(load_path + '/articles_emb.csv')
    item_idx_2_rawid_dict = dict(zip(item_emb_df.index, item_emb_df['article_id']))  # 文章索引与文章id的字典映射
    item_emb_cols = [x for x in item_emb_df.columns if 'emb' in x]
    item_emb_np = np.ascontiguousarray(item_emb_df[item_emb_cols].values, dtype=np.float32)
    item_emb_np = item_emb_np / np.linalg.norm(item_emb_np, axis=1, keepdims=True)  # 向量进行单位化
    # 建立faiss索引
    item_index = faiss.IndexFlatIP(item_emb_np.shape[1])
    item_index.add(item_emb_np)
    # 相似度查询，给每个索引位置上的向量返回topk个item以及相似度
    sim, idx = item_index.search(item_emb_np, topk) # 返回的是列表
    # 将向量检索的结果保存成原始id的对应关系
    item_sim_dict = collections.defaultdict(dict)
    for target_idx, sim_value_list, rele_idx_list in tqdm(zip(range(len(item_emb_np)), sim, idx)):
        target_raw_id = item_idx_2_rawid_dict[target_idx]
        # 从1开始是为了去掉商品本身, 所以最终获得的相似商品只有topk-1
        for rele_idx, sim_value in zip(rele_idx_list[1:], sim_value_list[1:]): 
            rele_raw_id = item_idx_2_rawid_dict[rele_idx]
            item_sim_dict[target_raw_id][rele_raw_id] = item_sim_dict.get(target_raw_id, {}).get(rele_raw_id, 0) + sim_value
    return item_sim_dict




def metrics_recall(user_recall_items_dict, trn_last_click_df, topk=50):
    # 依次评估召回的前10, 20, 30, 40, 50个文章中的击中率
    last_click_item_dict = dict(zip(trn_last_click_df['user_id'], trn_last_click_df['click_article_id']))
    user_num = len(user_recall_items_dict)
    
    for k in range(10, topk+1, 10):
        hit_num = 0
        for user, item_list in user_recall_items_dict.items():
            # 获取前k个召回的结果
            tmp_recall_items = [x[0] for x in user_recall_items_dict[user][:k]]
            if last_click_item_dict[user] in set(tmp_recall_items):
                hit_num += 1
        
        hit_rate = round(hit_num * 1.0 / user_num, 5)
        
        print(' topk: ', k, ' : ', 'hit_num: ', hit_num, 'hit_rate: ', hit_rate, 'user_num : ', user_num)

@saveOrLoad_middle_result(MIDPATH)
def item_based_recommend(user_id, user_item_time_dict, item_simAct_dict, sim_item_topk, recall_item_num, item_topk_click_list, item_created_time_dict, item_simEmb_dict):
    """基于物品的协同过滤的召回

    Args:
        user_id (_type_): 用户id
        user_item_time_dict (dict): 字典, 根据点击时间获取用户的点击文章序列   {user1: [(item1, time1), (item2, time2)..]...}
        i2i_sim (_type_): 字典，文章相似性矩阵
        sim_item_topk (int): 选择与当前文章最相似的前k篇文章
        recall_item_num (int): 最后的召回文章数量
        item_topk_click (list): 点击次数最多的文章列表，用户召回补全
        item_created_time_dict (_type_): _description_
        emb_i2i_sim (_type_): 字典基于内容embedding算的文章相似矩阵

    Returns:
        list: 召回的文章列表 [(item1, score1), (item2, score2)...]
    """
    
    # 获取用户历史交互的文章
    user_hist_items = user_item_time_dict[user_id]  # 该用户历史点击[(商品, 时间),(...)]列表
    user_hist_items_ = {item_id for item_id, _ in user_hist_items}  # 用户历史点击商品的集合(set) (商品1, 商品2,...)
    item_rank = {}
    for loc, (i, click_time) in enumerate(user_hist_items):  # 遍历该用户历史所有点击的物品和时间. loc表示点击物品的顺序, i表示历史点击过的物品item_id, 
        for j, wij in sorted(item_simAct_dict[i].items(), key=lambda x: x[1], reverse=True)[:sim_item_topk]:  # 该物品相似物品列表按相似度排序, j表示相似物品的item_id, wij表示相似度
            if j in user_hist_items_:  # 如果相似物品item_id在历史点击中, 则不处理
                continue
            created_time_weight = np.exp(0.8 ** np.abs(item_created_time_dict[i] - item_created_time_dict[j]))# 历史文章与相似文章创建时间差权重, 时间间隔越短权重越大
            loc_weight = (0.9 ** (len(user_hist_items) - loc))# 相似文章对应历史点击文章在历史文章序列中所在的位置权重. 排名越靠前, 权重越大
            
            # 适用向量表示的文章内容相似度
            content_weight = 1.0
            if item_simEmb_dict.get(i, {}).get(j, None) is not None:
                content_weight += item_simEmb_dict[i][j]
            if item_simEmb_dict.get(j, {}).get(i, None) is not None:
                content_weight += item_simEmb_dict[j][i]
                
            item_rank.setdefault(j, 0)
            item_rank[j] += created_time_weight * loc_weight * content_weight * wij  # 每次历史点击文章, 查到相同的相似文章都会累加权重
    
    # 不足10个，用热门商品补全
    if len(item_rank) < recall_item_num:
        for i, item in enumerate(item_topk_click_list):
            if item in item_rank.items(): # 填充的item应该不在原来的列表中
                continue
            item_rank[item] = - i - 100 # 热门物品用负数表示, 随便给个就行
            if len(item_rank) == recall_item_num:
                break
    
    item_rank = sorted(item_rank.items(), key=lambda x: x[1], reverse=True)[:recall_item_num]
        
    return item_rank


def gen_data_set(click_df, negsample=0):
    """获取双塔召回时的训练和验证数据

    Args:
        click_df (DataFrame): 点击日志数据框
        negsample (int, optional): 通过滑窗构建样本的时候，负样本的数量

    Returns:
        tuple: train_set, test_set
    """
    click_df = click_df.sort_values("click_timestamp")  # 按时间降序排列
    item_ids = click_df['click_article_id'].unique()  # 所有文章的编码id

    train_set = []
    test_set = []
    for user_id, subset_df in tqdm(click_df.groupby('user_id')):  # reviewerID是user_id, hist是历史所有的点击日志
        pos_article_list = subset_df['click_article_id'].tolist()  # 历史点击的文章编码id列表, 按点击时间从近到远
        
        if negsample > 0:
            candidate_set = list(set(item_ids) - set(pos_article_list))   # 用户没看过的文章里面选择负样本
            neg_list = np.random.choice(candidate_set,size=len(pos_article_list)*negsample,replace=True)  # 对于每一个个正样本，选择negsample个负样本, 
            
        # 长度只有一个的时候，需要把这条数据也放到训练集中，不然的话最终学到的embedding就会有缺失
        if len(pos_article_list) == 1:
            train_set.append((user_id, [pos_article_list[0]], pos_article_list[0], 1, len(pos_article_list)))
            test_set.append((user_id, [pos_article_list[0]], pos_article_list[0], 1, len(pos_article_list)))

        # 滑窗构造正负样本
        for i in range(1, len(pos_article_list)):  # 从下标为1开始, 而不是0
            hist_article_list = pos_article_list[:i]  # 从0到i的历史点击文章的序列
            
            if i != len(pos_article_list) - 1:  # 最长距离-1序列作为训练数据
                train_set.append((user_id, hist_article_list[::-1], pos_article_list[i], 1, len(hist_article_list[::-1])))  # 正样本 [user_id, his_item, pos_item, label, len(his_item)], ?为什么hist要倒序排列
                for negi in range(negsample):
                    train_set.append((user_id, hist_article_list[::-1], neg_list[i*negsample+negi], 0,len(hist_article_list[::-1]))) # 负样本 [user_id, his_item, neg_item, label, len(his_item)]
            else:
                # 将最长的那一个序列长度作为测试数据
                test_set.append((user_id, hist_article_list[::-1], pos_article_list[i],1,len(hist_article_list[::-1])))
                
    random.shuffle(train_set)
    random.shuffle(test_set)
    
    return train_set, test_set

def gen_model_input(train_set, seq_max_len):
    """转换成模型需要的结构

    Args:
        train_set (list): 训练集
        seq_max_len (num): padding的长度

    Returns:
        tuple: 模型的输入和输出
    """
    train_uid = np.array([line[0] for line in train_set])  # uid
    train_seq = [line[1] for line in train_set]  # 历史点击文章序列
    train_iid = np.array([line[2] for line in train_set])  # 历史点击文章序列对应的下1次点击文章
    train_label = np.array([line[3] for line in train_set])  # label
    train_hist_len = np.array([line[4] for line in train_set])  # 总长度

    train_seq_pad = pad_sequences(train_seq, maxlen=seq_max_len, padding='post', truncating='post', value=0)  # 补充长度
    train_model_input = {
        "user_id": train_uid, 
        "hist_article_id": train_seq_pad, 
        "click_article_id": train_iid, 
        "hist_len": train_hist_len
    }

    return train_model_input, train_label

@saveOrLoad_middle_result(MIDPATH)
def get_userItem_sim_list(click_df, embedding_dim, topk):    
    """双塔模型

    Args:
        click_df (DataFrame): 用户点击日志
        embedding_dim (num): 嵌入向量的长度
        topk (num): 获得每个用户topk个相似文章

    Returns:
        tuple: _description_
    """
    SEQ_LEN = 30 # 用户点击序列的长度，短的填充，长的截断
    click_df = click_df.copy()  # 深拷贝, 避免影响原始数据框
    user_rawId_df = click_df[["user_id"]].drop_duplicates('user_id')  # 原始的user_id
    item_rawId_df = click_df[["click_article_id"]].drop_duplicates('click_article_id')  # 原始的article_id
    
    # 类别编码
    features = ["click_article_id", "user_id"]
    feature_max_idx = {}  # 最大的文章和用户的id编号+1
    
    for feature in features:
        lbe = LabelEncoder()
        click_df[feature] = lbe.fit_transform(click_df[feature])  # 对article和item的id进行label编码
        feature_max_idx[feature] = click_df[feature].max() + 1
    
    # 提取user和item的画像，这里具体选择哪些特征还需要进一步的分析和考虑
    user_labelId_df = click_df[["user_id"]].drop_duplicates('user_id')  # label编码后的user_id
    item_labelId_df = click_df[["click_article_id"]].drop_duplicates('click_article_id')   # label编码后的article_id
    
    user_labelId_2_rawId = dict(zip(user_labelId_df['user_id'], user_rawId_df['user_id']))  # label编码后的id与原始id对应
    item_labelId_2_rawId = dict(zip(item_labelId_df['click_article_id'], item_rawId_df['click_article_id']))  # label编码后的id与原始id对应

    # 划分训练和测试集
    train_set, test_set = gen_data_set(click_df, 0)
    
    # 整理输入数据，具体的操作可以看上面的函数
    train_input, train_label = gen_model_input(train_set, SEQ_LEN)
    test_input, test_label = gen_model_input(test_set, SEQ_LEN)

    # 将数据整理成模型可以直接输入的形式
    user_feature_columns = [
        SparseFeat('user_id', feature_max_idx['user_id'], embedding_dim),
        VarLenSparseFeat(SparseFeat('hist_article_id', feature_max_idx['click_article_id'], embedding_dim,embedding_name="click_article_id"), SEQ_LEN, 'mean', 'hist_len'),
    ]
    
    item_feature_columns = [SparseFeat('click_article_id', feature_max_idx['click_article_id'], embedding_dim)]
    
    # 模型的定义 
    train_counter = Counter(train_input['click_article_id'])
    item_count = [train_counter.get(i, 0) for i in range(item_feature_columns[0].vocabulary_size)]
    sampler_config = NegativeSampler('frequency', num_sampled=5, item_name='click_article_id', item_count=item_count)
    
    model = YoutubeDNN(user_feature_columns, item_feature_columns, sampler_config=sampler_config, user_dnn_hidden_units=(64, embedding_dim))
    
    # 模型编译
    model.compile(optimizer="adam", loss=sampledsoftmaxloss)  
    
    # 模型训练，这里可以定义验证集的比例，如果设置为0的话就是全量数据直接进行训练
    model.fit(train_input, train_label, batch_size=256, epochs=1, verbose=1, validation_split=0.0)
    
    # 训练完模型之后,提取训练的Embedding，包括user端和item端
    all_item_model_input = {"click_article_id": item_labelId_df['click_article_id'].values}

    user_embedding_model = Model(inputs=model.user_input, outputs=model.user_embedding)
    item_embedding_model = Model(inputs=model.item_input, outputs=model.item_embedding)
    
    # 保存当前的item_embedding 和 user_embedding 排序的时候可能能够用到，但是需要注意保存的时候需要和原始的id对应
    user_embs = user_embedding_model.predict(test_input, batch_size=2 ** 12)
    item_embs = item_embedding_model.predict(all_item_model_input, batch_size=2 ** 12)
    
    # embedding保存之前归一化一下
    user_embs = user_embs / np.linalg.norm(user_embs, axis=1, keepdims=True)
    item_embs = item_embs / np.linalg.norm(item_embs, axis=1, keepdims=True)
    
    # 将Embedding转换成字典的形式方便查询
    user_rawId_emb_dict = {user_labelId_2_rawId[k]: v for k, v in zip(user_labelId_df['user_id'], user_embs)}
    item_rawId_emb_dict = {item_labelId_2_rawId[k]: v for k, v in zip(item_labelId_df['click_article_id'], item_embs)}

    # faiss紧邻搜索，通过user_embedding 搜索与其相似性最高的topk个item
    index = faiss.IndexFlatIP(embedding_dim)
    index.add(item_embs) # 将item向量构建索引
    sim, idx = index.search(np.ascontiguousarray(user_embs), topk) # 通过user向量, 去查询最相似的topk个item, sim是相似度列表, 每个user_id对应10个相似度, 和10个物品  
    userItem_sim_list = zip(test_input['user_id'], sim, idx)
    return userItem_sim_list, user_labelId_2_rawId, item_labelId_2_rawId, user_rawId_emb_dict, item_rawId_emb_dict


@saveOrLoad_middle_result(MIDPATH)
def item_user_recommend(userItem_sim_list, user_labelId_2_rawId, item_labelId_2_rawId):
    """根据双塔模型进行召回

    Args:
        userItem_sim_list (list): 用户相似度最高的10个物品
        user_labelId_2_rawId (dict): 用户的编码id和原始id对应
        item_labelId_2_rawId (dict): 物品的编码id和原始id对应

    Returns:
        dict: 用户文章的召回结果
    """
    userItems_recall_dict = collections.defaultdict(dict)
    for user_labelId, sim_list, itemLabelId_list in tqdm(userItem_sim_list):
        user_rawId = user_labelId_2_rawId[user_labelId]
        # 从1开始是为了去掉商品本身, 所以最终获得的相似商品只有topk-1
        for itemLabelId, sim in zip(itemLabelId_list[1:], sim_list[1:]): 
            item_rawId = item_labelId_2_rawId[itemLabelId]
            userItems_recall_dict[user_rawId][item_rawId] = userItems_recall_dict.get(user_rawId, {}).get(item_rawId, 0) + sim

    userItems_recall_dict = {k: sorted(v.items(), key=lambda x: x[1], reverse=True) for k, v in userItems_recall_dict.items()}  # 将召回的结果进行排序
    return userItems_recall_dict

def get_user_simEmb_dict(user_simEmb_dict, topk):
    """使用Embedding的方式获取u2u的相似性矩阵

    Args:
        user_simEmb_dict (dict): {user_id: emb, ...}
        topk (num): topk

    Returns:
        dict: {user_id: {userSim_id: sim, ...}, ...}
    """
    user_list = []
    user_emb_list = []
    for user_id, user_emb in user_simEmb_dict.items():
        user_list.append(user_id)
        user_emb_list.append(user_emb)
        
    user_index_2_rawid_dict = {k: v for k, v in zip(range(len(user_list)), user_list)}    
    
    user_emb_np = np.array(user_emb_list, dtype=np.float32)
    
    # 建立faiss索引
    user_index = faiss.IndexFlatIP(user_emb_np.shape[1])
    user_index.add(user_emb_np)
    # 相似度查询，给每个索引位置上的向量返回topk个item以及相似度
    sim, idx = user_index.search(user_emb_np, topk) # 返回的是列表

    # 将向量检索的结果保存成原始id的对应关系
    user_simEmb_dict = collections.defaultdict(dict)
    for target_idx, sim_value_list, rele_idx_list in tqdm(zip(range(len(user_emb_np)), sim, idx)):
        target_raw_id = user_index_2_rawid_dict[target_idx]
        # 从1开始是为了去掉商品本身, 所以最终获得的相似商品只有topk-1
        for rele_idx, sim_value in zip(rele_idx_list[1:], sim_value_list[1:]): 
            rele_raw_id = user_index_2_rawid_dict[rele_idx]
            user_simEmb_dict[target_raw_id][rele_raw_id] = user_simEmb_dict.get(target_raw_id, {}).get(rele_raw_id, 0) + sim_value
    
    return user_simEmb_dict


def user_based_recommend(user_id, user_item_time_dict, user_simAct_dict, sim_user_topk, recall_item_num, item_topk_click, item_created_time_dict, item_simEmb_dict):
    """
        基于文章协同过滤的召回
        :param user_id: 用户id
        :param user_item_time_dict: 字典, 根据点击时间获取用户的点击文章序列   {user1: [(item1, time1), (item2, time2)..]...}
        :param u2u_sim: 字典，文章相似性矩阵
        :param sim_user_topk: 整数， 选择与当前用户最相似的前k个用户
        :param recall_item_num: 整数， 最后的召回文章数量
        :param item_topk_click: 列表，点击次数最多的文章列表，用户召回补全
        :param item_created_time_dict: 文章创建时间列表
        :param emb_i2i_sim: 字典基于内容embedding算的文章相似矩阵
        
        return: 召回的文章列表 [(item1, score1), (item2, score2)...]
    """
    # 历史交互
    user_item_time_list = user_item_time_dict[user_id]    #  [(item1, time1), (item2, time2)..]
    user_hist_items = set([i for i, t in user_item_time_list])   # (item1, item2, ...)
    
    items_rank = {}
    for sim_u, wuv in sorted(user_simAct_dict[user_id].items(), key=lambda x: x[1], reverse=True)[:sim_user_topk]:  # 遍历topk相似用户
        for i, click_time in user_item_time_dict[sim_u]: # 遍历相似用户的物品
            if i in user_hist_items: # 如果相似用户的物品, 在当前用户历史点击中, 则不处理
                continue
            items_rank.setdefault(i, 0)  # 物品推荐值默认设置为0
            
            loc_weight = 1.0
            content_weight = 1.0
            created_time_weight = 1.0
            
            # 当前文章与该用户看的历史文章进行一个权重交互
            for loc, (j, click_time) in enumerate(user_item_time_list):
                loc_weight += 0.9 ** (len(user_item_time_list) - loc)# 点击时的相对位置权重
                # 内容相似性权重
                if item_simEmb_dict.get(i, {}).get(j, None) is not None:
                    content_weight += item_simEmb_dict[i][j]
                if item_simEmb_dict.get(j, {}).get(i, None) is not None:
                    content_weight += item_simEmb_dict[j][i]
                
                
                created_time_weight += np.exp(0.8 * np.abs(item_created_time_dict[i] - item_created_time_dict[j]))  # 创建时间差权重
                
            items_rank[i] += loc_weight * content_weight * created_time_weight * wuv
        
    # 热度补全
    if len(items_rank) < recall_item_num:
        for i, item in enumerate(item_topk_click):
            if item in items_rank.items(): # 填充的item应该不在原来的列表中
                continue
            items_rank[item] = - i - 100 # 随便给个复数就行
            if len(items_rank) == recall_item_num:
                break
        
    items_rank = sorted(items_rank.items(), key=lambda x: x[1], reverse=True)[:recall_item_num]    
    
    return items_rank


def get_user_hist_item_info_dict(all_click):
    """用户历史点击的文章信息

    Args:
        all_click (DataFrame): 用户点击日志数据框

    Returns:
        (dict, dict, dict, dict): 
        1. user_hist_item_types_dict: 用户点击文章类别集合; 
        2. user_hist_item_ids_dict用户点击文章id集合; 
        3. user_hist_item_words用户点击平均字数;
        4. user_last_item_created_time_dict用户最后一次点击文章的创建时间
    """

    # key是user_id, value是文章类别category_id的集合(set)
    user_hist_item_typs = all_click.groupby('user_id')['category_id'].agg(set).reset_index()
    user_hist_item_typs_dict = dict(zip(user_hist_item_typs['user_id'], user_hist_item_typs['category_id']))
    
    # key是user_id, value是文章id的集合(set)
    user_hist_item_ids_dict = all_click.groupby('user_id')['click_article_id'].agg(set).reset_index()
    user_hist_item_ids_dict = dict(zip(user_hist_item_ids_dict['user_id'], user_hist_item_ids_dict['click_article_id']))
    
    # key是user_id, value历史点击的文章的平均字数
    user_hist_item_words = all_click.groupby('user_id')['words_count'].agg('mean').reset_index()
    user_hist_item_words_dict = dict(zip(user_hist_item_words['user_id'], user_hist_item_words['words_count']))
    
    # key是user_id, value是最后一次点击的文章的创建时间
    all_click_ = all_click.sort_values('click_timestamp')
    user_last_item_created_time = all_click_.groupby('user_id')['created_at_ts'].apply(lambda x: x.iloc[-1]).reset_index()
    max_min_scaler = lambda x : (x-np.min(x))/(np.max(x)-np.min(x))
    user_last_item_created_time['created_at_ts'] = user_last_item_created_time[['created_at_ts']].apply(max_min_scaler)
    user_last_item_created_time_dict = dict(zip(user_last_item_created_time['user_id'], user_last_item_created_time['created_at_ts']))
    
    return user_hist_item_typs_dict, user_hist_item_ids_dict, user_hist_item_words_dict, user_last_item_created_time_dict





def cold_start_recommend(user_recall_items_dict, user_hist_item_typs_dict, user_hist_item_words_dict, user_last_item_created_time_dict, item_type_dict, item_words_dict, item_created_time_dict, click_article_ids_set, recall_item_num):

    cold_start_user_items_dict = {}
    for user, item_list in tqdm(user_recall_items_dict.items()):
        cold_start_user_items_dict.setdefault(user, [])
        for item, score in item_list:  # 遍历item_simEmb推荐的所有物品
            # 获取历史文章信息
            hist_item_type_set = user_hist_item_typs_dict[user]  # 获得用户历史物品的类型集合
            hist_mean_words = user_hist_item_words_dict[user]  # 获得用户物品的平均字数
            hist_last_item_created_time = user_last_item_created_time_dict[user]  # 获得用户最后点击物品的创建时间
            hist_last_item_created_time = datetime.fromtimestamp(hist_last_item_created_time)
            
            # 获取当前召回文章的信息
            curr_item_type = item_type_dict[item]  # 获得当前物品物品的类型
            curr_item_words = item_words_dict[item]  # 获得当前物品的字数
            curr_item_created_time = item_created_time_dict[item]  # 获得当前物品的创建时间
            curr_item_created_time = datetime.fromtimestamp(curr_item_created_time)

            # 首先，文章不能出现在用户的历史点击中， 然后根据文章主题，文章单词数，文章创建时间进行筛选
            if curr_item_type not in hist_item_type_set or item in click_article_ids_set or abs(curr_item_words - hist_mean_words) > 200 or abs((curr_item_created_time - hist_last_item_created_time).days) > 90:  # 如果当前物品类型不在用户历史点击物品类型中;或者当前点击物品在历史点击物品中;或当前物品字数减去用户点击物品平均字数超过200;或者当前物品创建时间大于最后点击物品创建90天, 则过滤掉
                continue
                
            cold_start_user_items_dict[user].append((item, score))      # {user1: [(item1, score1), (item2, score2)..]...}
    
    # 需要控制一下冷启动召回的数量
    cold_start_user_items_dict = {k: sorted(v, key=lambda x:x[1], reverse=True)[:recall_item_num] for k, v in cold_start_user_items_dict.items()}

    return cold_start_user_items_dict


def multiRoad_recommend(user_multi_recall_dict, weight_dict=None, topk=25):
    final_recall_items_dict = {}
    """根据没路召回的权重, 从新计算召回物品的相似度权重

    Returns:
        dict: _description_
    """
    
    
    # 对每一种召回结果按照用户进行归一化，方便后面多种召回结果，相同用户的物品之间权重相加
    def norm_user_recall_items_sim(sorted_item_list):
        # 如果冷启动中没有文章或者只有一篇文章，直接返回，出现这种情况的原因可能是冷启动召回的文章数量太少了，
        # 基于规则筛选之后就没有文章了, 这里还可以做一些其他的策略性的筛选
        if len(sorted_item_list) < 2:
            return sorted_item_list
        
        min_sim = sorted_item_list[-1][1]
        max_sim = sorted_item_list[0][1]
        
        norm_sorted_item_list = []
        for item, score in sorted_item_list:
            if max_sim > 0:
                norm_score = 1.0 * (score - min_sim) / (max_sim - min_sim) if max_sim > min_sim else 1.0
            else:
                norm_score = 0.0
            norm_sorted_item_list.append((item, norm_score))
            
        return norm_sorted_item_list
    
    for method, user_recall_items in tqdm(user_multi_recall_dict.items()):
        print(method + '...')
        # 在计算最终召回结果的时候，也可以为每一种召回结果设置一个权重
        if weight_dict == None:
            recall_method_weight = 1
        else:
            recall_method_weight = weight_dict[method]
        
        for user_id, sorted_item_list in user_recall_items.items(): # 进行归一化
            user_recall_items[user_id] = norm_user_recall_items_sim(sorted_item_list)
        
        for user_id, sorted_item_list in user_recall_items.items():
            # print('user_id')
            final_recall_items_dict.setdefault(user_id, {})
            for item, score in sorted_item_list:
                final_recall_items_dict[user_id].setdefault(item, 0)
                final_recall_items_dict[user_id][item] += recall_method_weight * score  
    
    multiRoad_recall_dict = {}
    # 多路召回时也可以控制最终的召回数量
    for user, recall_item_dict in final_recall_items_dict.items():
        multiRoad_recall_dict[user] = sorted(recall_item_dict.items(), key=lambda x: x[1], reverse=True)[:topk]

    return multiRoad_recall_dict

























