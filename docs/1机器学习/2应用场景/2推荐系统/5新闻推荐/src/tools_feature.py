import numpy as np
import pandas as pd
import pickle
from tqdm import tqdm
import os
import logging
from gensim.models import Word2Vec
from sklearn.preprocessing import MinMaxScaler
import warnings
from tools_recall import saveOrLoad_middle_result, MIDPATH
warnings.filterwarnings('ignore')

# 获取当前数据的历史点击和最后一次点击
def get_hist_and_last_click(click_df):
    """获取用户历史点击和最后1次点击

    Args:
        click_df (DataFrame): 用户点击日志

    Returns:
        tuple: 
    """
    click_df = click_df.sort_values(by=['user_id', 'click_timestamp'])
    click_last_df = click_df.groupby('user_id').tail(1)

    
    def hist_func(user_df):  # 如果用户只有一个点击，hist为空了，会导致训练的时候这个用户不可见，此时默认泄露一下
        if len(user_df) == 1:
            return user_df
        else:
            return user_df[:-1]

    click_hist_df = click_df.groupby('user_id').apply(hist_func).reset_index(drop=True)

    return click_hist_df, click_last_df



def get_embedding(save_path, all_click_df):
    # 可以通过字典查询对应的item的Embedding
    if os.path.exists(save_path + 'get_item_emb_dict.pkl'):
        item_content_emb_dict = pickle.load(open(save_path + 'get_item_emb_dict.pkl', 'rb'))
    else:
        item_content_emb_dict = None
        print('item_content_emb.pkl 文件不存在...')
        
    # w2v Embedding是需要提前训练好的
    if os.path.exists(save_path + 'item_w2v_emb.pkl'):
        item_embW2V_dict = pickle.load(open(save_path + 'item_w2v_emb.pkl', 'rb'))
    else:
        item_embW2V_dict = get_item_embW2V_dict(all_click_df)
        
    if os.path.exists(save_path + 'get_userItem_sim_list.pkl'):
        youtube_emb_list = pickle.load(open(save_path + 'get_userItem_sim_list.pkl', 'rb'))
        
        item_youtube_emb_dict = youtube_emb_list[4]
        user_youtube_emb_dict = youtube_emb_list[3]
    else:
        item_youtube_emb_dict = None
        print('item_youtube_emb.pkl 文件不存在...')
        user_youtube_emb_dict = None
        print('user_youtube_emb.pkl 文件不存在...')
    
    return item_content_emb_dict, item_embW2V_dict, item_youtube_emb_dict, user_youtube_emb_dict


@saveOrLoad_middle_result(MIDPATH)
def get_item_embW2V_dict(click_df):
    """训练用户前后文章的关联性

    Args:
        click_df (_type_): _description_
        embed_size (int, optional): _description_. Defaults to 64.
        save_name (str, optional): _description_. Defaults to 'item_w2v_emb.pkl'.
        split_char (str, optional): _description_. Defaults to ' '.

    Returns:
        _type_: _description_
    """
    
    click_df = click_df.sort_values('click_timestamp')
    click_df['click_article_id'] = click_df['click_article_id'].astype(str)  # 只有转换成字符串才可以进行训练
    docs = click_df.groupby(['user_id'])['click_article_id'].apply(lambda x: list(x)).reset_index()  # 转换成句子的形式
    docs = docs['click_article_id'].values.tolist()
    logging.basicConfig(format='%(asctime)s:%(levelname)s:%(message)s', level=logging.INFO)# 为了方便查看训练的进度，这里设定一个log信息
    # 这里的参数对训练得到的向量影响也很大,默认负采样为5
    w2v = Word2Vec(docs, vector_size=16, sg=1, window=1,min_count=1, seed=2020)
    
    # 保存成字典的形式
    item_embW2V_dict = {k: w2v.wv[k] for k in click_df['click_article_id']}
    
    return item_embW2V_dict

# 将召回列表转换成df的形式
def recall_dict_2_df(recall_list_dict):
    df_row_list = [] # [user, item, score]
    for user, recall_list in tqdm(recall_list_dict.items()):
        for item, score in recall_list:
            df_row_list.append([user, item, score])
    
    col_names = ['user_id', 'sim_item', 'score']
    recall_list_df = pd.DataFrame(df_row_list, columns=col_names)
    
    return recall_list_df





@saveOrLoad_middle_result(MIDPATH)
def get_user_recall_item_label_df(click_trn_hist, click_tst_hist, click_trn_last, recall_list_df):

    
    trn_user_items_df = recall_list_df[recall_list_df['user_id'].isin(click_trn_hist['user_id'].unique())]# 获取训练数据的召回列表
    trn_user_item_label_df = get_rank_label_df(trn_user_items_df, click_trn_last, is_test=False)# 训练数据打标签
    trn_user_item_label_df = neg_sample_recall_data(trn_user_item_label_df)  # 训练数据负采样
        
    # 测试数据不需要进行负采样，直接对所有的召回商品进行打-1标签
    tst_user_items_df = recall_list_df[recall_list_df['user_id'].isin(click_tst_hist['user_id'].unique())]
    tst_user_item_label_df = get_rank_label_df(tst_user_items_df, None, is_test=True)
    
    return trn_user_item_label_df, tst_user_item_label_df


def get_rank_label_df(recall_list_df, label_df, is_test=False):
    """将召回数据框与训练集最后一次点击数据框merge, 如果有点击时间, 则将召回数据框数据打上标签1

    Args:
        recall_list_df (DataFrame): 召回的, 使用字段是user_id, sim_item, score
        label_df (DataFrame): 用户最后点击文章, 使用user_id, sim_item, click_timestamp列
        is_test (bool, optional): 测试集是没有标签了，为了后面代码同一一些，这里直接给一个负数替代 Defaults to False.

    Returns:
        _type_: _description_
    """

    if is_test:
        recall_list_df['label'] = -1
        return recall_list_df
    label_df = label_df.rename(columns={'click_article_id': 'sim_item'})
    recall_list_df_ = recall_list_df.merge(label_df[['user_id', 'sim_item', 'click_timestamp']], how='left', on=['user_id', 'sim_item'])  # 召回的文章里, 用户有没有点击
    recall_list_df_['label'] = recall_list_df_['click_timestamp'].apply(lambda x: 0.0 if np.isnan(x) else 1.0)  # 没有点击时间戳, 即没有点击标注为0, 有时间戳标注为1
    del recall_list_df_['click_timestamp']
    
    return recall_list_df_

def neg_sample_recall_data(recall_items_df, sample_rate=0.001):
    
    # 负采样函数，这里可以控制负采样时的比例, 这里给了一个默认的值
    pos_data = recall_items_df[recall_items_df['label'] == 1]
    neg_data = recall_items_df[recall_items_df['label'] == 0]

    def neg_sample_func(group_df): # 分组采样函数
        neg_num = len(group_df)
        sample_num = max(int(neg_num * sample_rate), 1) # 取采样值, 或者1, 保证最少采样1个值
        sample_num = min(sample_num, 5) # 取采样值, 保证最多不超过5个
        return group_df.sample(n=sample_num, replace=True)
    
    # 对用户进行负采样，保证所有用户都在采样后的数据中
    neg_data_user_sample = neg_data.groupby('user_id', group_keys=False).apply(neg_sample_func)
    # 对文章进行负采样，保证所有文章都在采样后的数据中
    neg_data_item_sample = neg_data.groupby('sim_item', group_keys=False).apply(neg_sample_func)
    
    # 将上述两种情况下的采样数据合并
    neg_data_new = pd.concat([neg_data_user_sample, neg_data_item_sample], ignore_index=True, axis=0)
    # 由于上述两个操作是分开的，可能将两个相同的数据给重复选择了，所以需要对合并后的数据进行去重
    neg_data_new = neg_data_new.sort_values(['user_id', 'score']).drop_duplicates(['user_id', 'sim_item'], keep='last')
    # 将正样本数据合并
    data_new = pd.concat([pos_data, neg_data_new], ignore_index=True)
    
    return data_new


def make_tuple_func(group_df):
    """将最终的召回的df数据转换成字典的形式做排序特征

    Args:
        group_df (_type_): 按user_id分组, 第一列是相似物品sim_item, 第2列是得分score, 第3列是标签label

    Returns:
        二维列表: 返回二维列表
    """
    row_data = []
    for group_name, row_df in group_df.iterrows():
        row_data.append((row_df['sim_item'], row_df['score'], row_df['label']))
    
    return row_data

"""
基于用户的历史行为做相关特征
:param users_id: 用户id
:param recall_list: 对于每个用户召回的候选文章列表
:param click_hist_df: 用户的历史点击信息
:param articles_info: 文章信息
:param articles_emb: 文章的embedding向量, 这个可以用item_content_emb, item_w2v_emb, item_youtube_emb
:param user_emb: 用户的embedding向量， 这个是user_youtube_emb, 如果没有也可以不用， 但要注意如果要用的话， articles_emb就要用item_youtube_emb的形式， 这样维度才一样
:param N: 最近的N次点击  由于testA日志里面很多用户只存在一次历史点击， 所以为了不产生空值，默认是1
"""

# 下面基于data做历史相关的特征
def create_featureAct(users_id, recall_list, click_hist_df,  articles_info, articles_emb, user_emb=None, N=1):
    """创建用户与文章交互特征. 遍历用户所有召回的文章, 根据召回的文章和历史点击的文章做出特征数据(这里N=1表示只和最后一个历史点击文章做特征.)

    Args:
        users_id (str): 用户id
        recall_list (list): 用户召回文章的列表
        click_hist_df (DataFrame): 用户历史点击日志数据框
        articles_info (DataFrame): 用户文章信息
        articles_emb (_type_): _description_
        user_emb (_type_, optional): _description_. Defaults to None.
        N (int, optional): _description_. Defaults to 1.

    Returns:
        DataFrame: 
        1. user_id: 用户id
        2. click_article_id: 召回的用户文章
        3. sim0: 召回物品与最后一次点击物品的相似度, 由用向量表示内容点积得来
        4. time_diff0: 召回物品与最后1次点击物品的时间差
        5. word_diff0: 召回物品与最后1次点击物品的字数差
        6. sim_max: 相似度的最大值
        7. sim_min: 相似度的最小值
        8. sim_sum: 相似度求和
        9. sim_mean: 相似度平均
        10. score: 召回文章得分
        11. rank: 召回文章排名
        12. label: 召回文章是否被点击
    
        当参数N=1时, sim_max, sim_min, sim_sum, sim_mean是相同的
    """
    
    # 建立一个二维列表保存结果， 后面要转成DataFrame
    all_user_feas = []
    for user_id in tqdm(users_id):
        hist_user_items = click_hist_df[click_hist_df['user_id']==user_id]['click_article_id'][-N:] # 该用户的最后N次点击的物品
        # 遍历该用户的召回列表
        for rank, (article_id, score, label) in enumerate(recall_list[user_id]):  # 遍历召回物品列表
            a_create_time = articles_info[articles_info['article_id']==article_id]['created_at_ts'].values[0]  # 建立时间
            a_words_count = articles_info[articles_info['article_id']==article_id]['words_count'].values[0]  # 字数
            
            single_user_fea = [user_id, article_id]
            
            # 计算与最后点击的商品的相似度的和, 最大值和最小值, 均值
            sim_fea = []
            time_fea = []
            word_fea = []
            for hist_item in hist_user_items:  # 遍历用户的最后N次点击文章
                b_create_time = articles_info[articles_info['article_id']==hist_item]['created_at_ts'].values[0]
                b_words_count = articles_info[articles_info['article_id']==hist_item]['words_count'].values[0]
                
                sim_fea.append(np.dot(articles_emb[hist_item], articles_emb[article_id]))  # 用户召回物品和历史物品向量表示点积计算相似reduce
                time_fea.append(abs(a_create_time-b_create_time))  # 用户召回物品创建时间减去用户历史文章创建时间
                word_fea.append(abs(a_words_count-b_words_count))  # 用户召回物品字数减去用户历史文章字数
                
            single_user_fea.extend(sim_fea)     # 相似性特征
            single_user_fea.extend(time_fea)    # 时间差特征
            single_user_fea.extend(word_fea)    # 字数差特征
            single_user_fea.extend([max(sim_fea), min(sim_fea), sum(sim_fea), sum(sim_fea) / len(sim_fea)])  # 相似性的统计特征
            
            if user_emb:  # 如果用户向量有的话， 这里计算该召回文章与用户的相似性特征 
                single_user_fea.append(np.dot(user_emb[user_id], articles_emb[article_id]))

            single_user_fea.extend([score, rank, label])    
            # 加入到总的表中
            all_user_feas.append(single_user_fea)
    
    # 定义列名
    id_cols = ['user_id', 'click_article_id']
    sim_cols = ['sim' + str(i) for i in range(N)]
    time_cols = ['time_diff' + str(i) for i in range(N)]
    word_cols = ['word_diff' + str(i) for i in range(N)]
    sat_cols = ['sim_max', 'sim_min', 'sim_sum', 'sim_mean']
    user_item_sim_cols = ['user_item_sim'] if user_emb else []  # 如果用户向量有的话， 这里计算该召回文章与用户的相似性特征
    user_score_rank_label = ['score', 'rank', 'label']
    cols = id_cols + sim_cols + time_cols + word_cols + sat_cols + user_item_sim_cols + user_score_rank_label
            
    # 转成DataFrame
    df = pd.DataFrame(all_user_feas, columns=cols)
    
    return df

def active_level(click_df, cols):
    """计算用户的活跃度, 评价指标有:
    1. 用户点击文章的个数
    2. 用户点击文章的时间间隔
    3. 用户活跃度 = 点击文章个数 + 时间间隔

    Args:
        click_df (DataFrame): 用户点击日志
        cols (list): 所使用的列

    Returns:
        DataFrame: 
        1. click_article_id: 文章id
        2. user_num: 文章被多少个用户点击
        3. time_diff_mean: 被点击的时间间隔
        4. hot_level: 热度等级
    """
    click_df = click_df[cols]  # 使用user_id, click_article_id, click_timestamp
    click_df.sort_values(['user_id', 'click_timestamp'], inplace=True)
    user_act = pd.DataFrame(click_df.groupby('user_id', as_index=False)[['click_article_id', 'click_timestamp']].agg({'click_article_id':np.size, 'click_timestamp': {list}}).values, columns=['user_id', 'click_size', 'click_timestamp'])  # click_size: 点击了几篇文章, click_timestamp: 点击文章的时间戳
    
    def time_diff_mean(l):
        """计算两篇文章点击的时间间隔的平均值

        Args:
            l (_type_): _description_

        Returns:
            _type_: _description_
        """
        if len(l) == 1:
            return 1
        else:
            return np.mean([j-i for i, j in list(zip(l[:-1], l[1:]))])
        
    user_act['time_diff_mean'] = user_act['click_timestamp'].apply(lambda x: time_diff_mean(x))  # 计算点击文章的时间均值
    user_act['click_size'] = 1 / user_act['click_size']# 点击次数取倒数
    
    # 两者归一化
    user_act['click_size'] = (user_act['click_size'] - user_act['click_size'].min()) / (user_act['click_size'].max() - user_act['click_size'].min())
    user_act['time_diff_mean'] = (user_act['time_diff_mean'] - user_act['time_diff_mean'].min()) / (user_act['time_diff_mean'].max() - user_act['time_diff_mean'].min())     
    user_act['active_level'] = user_act['click_size'] + user_act['time_diff_mean']
    user_act['user_id'] = user_act['user_id'].astype('int')
    del user_act['click_timestamp']
    
    return user_act


def hot_level(all_data, cols):
    """计算文章的热度, 参考用户活跃度的计算

    Args:
        click_df (DataFrame): 用户点击日志
        cols (list): 所使用的列

    Returns:
        _type_: _description_
    """
    data = all_data[cols]
    data.sort_values(['click_article_id', 'click_timestamp'], inplace=True)
    article_hot = pd.DataFrame(data.groupby('click_article_id', as_index=False)[['user_id', 'click_timestamp']].agg({'user_id':np.size, 'click_timestamp': {list}}).values, columns=['click_article_id', 'user_num', 'click_timestamp'])
    
    # 计算被点击时间间隔的均值
    def time_diff_mean(l):
        if len(l) == 1:
            return 1
        else:
            return np.mean([j-i for i, j in list(zip(l[:-1], l[1:]))])
        
    article_hot['time_diff_mean'] = article_hot['click_timestamp'].apply(lambda x: time_diff_mean(x))
    
    # 点击次数取倒数
    article_hot['user_num'] = 1 / article_hot['user_num']
    
    # 两者归一化
    article_hot['user_num'] = (article_hot['user_num'] - article_hot['user_num'].min()) / (article_hot['user_num'].max() - article_hot['user_num'].min())
    article_hot['time_diff_mean'] = (article_hot['time_diff_mean'] - article_hot['time_diff_mean'].min()) / (article_hot['time_diff_mean'].max() - article_hot['time_diff_mean'].min())     
    article_hot['hot_level'] = article_hot['user_num'] + article_hot['time_diff_mean']
    
    article_hot['click_article_id'] = article_hot['click_article_id'].astype('int')
    
    del article_hot['click_timestamp']
    
    return article_hot



def device_fea(all_data, cols):
    """
    制作用户的设备习惯,  这里取最常用的设备（众数）
    
    :param all_data: 数据集
    :param cols: 用到的特征列
    """
    user_device_info = all_data[cols]
    
    # 用众数来表示每个用户的设备信息
    user_device_info = user_device_info.groupby('user_id').agg(lambda x: x.value_counts().index[0]).reset_index()
    
    return user_device_info

def user_time_hob_fea(all_data, cols):
    """用户点击时间习惯
    1. 用户点击文章的时间习惯
    2. 用户所点击文章创建时间习惯

    Args:
        all_data (DataFrame): 点击日志
        cols (list): 所使用的列

    Returns:
        DataFrame: 
        1. user_time_hob1: click_timestamp
        2. user_time_hob2: created_at_ts
    """
    user_time_hob_info = all_data[cols]
    
    # 先把时间戳进行归一化
    mm = MinMaxScaler()
    user_time_hob_info['click_timestamp'] = mm.fit_transform(user_time_hob_info[['click_timestamp']])
    user_time_hob_info['created_at_ts'] = mm.fit_transform(user_time_hob_info[['created_at_ts']])

    user_time_hob_info = user_time_hob_info.groupby('user_id').agg('mean').reset_index()
    
    user_time_hob_info.rename(columns={'click_timestamp': 'user_time_hob1', 'created_at_ts': 'user_time_hob2'}, inplace=True)
    return user_time_hob_info

def user_cat_hob_fea(all_data, cols):
    """用户的主题爱好, 这里先把用户点击的文章属于的主题转成一个列表， 后面再总的汇总的时候单独制作一个特征， 就是文章的主题如果属于这里面， 就是1， 否则就是0

    Args:
        all_data (_type_): _description_
        cols (_type_): _description_

    Returns:
        DataFrame:
        1. user_id: 用户id
        1. cate_list: 文章分类
    """
    user_category_hob_info = all_data[cols]
    user_category_hob_info = user_category_hob_info.groupby('user_id').agg({list}).reset_index()
    
    user_cat_hob_info = pd.DataFrame()
    user_cat_hob_info['user_id'] = user_category_hob_info['user_id']
    user_cat_hob_info['cate_list'] = user_category_hob_info['category_id']
    
    return user_cat_hob_info