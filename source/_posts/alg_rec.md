推荐系统

# 原始数据

1. 文章表，记录了文章的基本信息，只取目前还在分享的文章，既`eventType==CONTENT SHARED`
articles_df: 
    - timestamp：文章发表的时间
    - eventType：共两个分类，CONTENT SHARED（文章正在被分享） CONTENT REMOVED（文章已经被删除）
    - contentId：文章的Id
    - authorPersonId：作者的Id
    - authorSessionId：作者回话Id
    - authorUserAgent：作者单位
    - authorRegion：作者地区
    - authorCountry：作者国家
    - contentType：共 个份额里，HTML（网页）
    - url：文章的链接
    - title：文章标题
    - text：文章内容
    - lang：文章语言

2. 交互表，记录了用户与文章的交互信息
interactions_df：交互表
    - timestamp：交互时间
    - eventType：公有5分类，VIEW（查看）LIKE（喜欢）COMMENT CREATED（评论）BOOKMARK（收藏）FOLLOW（关注）
    - contentId：文章的Id
    - personId：用户的Id
    - sessionId：回话Id
    - userAgent：客户端类型
    - userRegion：用户地区
    - userCountry：用户国家


# 用户行为数学转化

给`eventType`进行权重定义，这就是一个自然问题转换为数学问题的过程。不同的event有不同的评分，我们认为评论是的用户对文章的最大认可。
```
{
   'VIEW': 1.0,
   'LIKE': 2.0, 
   'BOOKMARK': 2.5, 
   'FOLLOW': 3.0,
   'COMMENT CREATED': 4.0,  
}
```


# 模型评估

在测试集取用户交互的一个item, 放在随机抽取的100个用户没有交互的item中, 然后进行排序. 看测试集这个item在第几位.

1. 遍历每一个user
    2. 遍历测试集中user交互的每个item
        3.1 抽取100个该user没有交互的item(这里假设没有交互的item就是和user不相关的，因为user可能仅仅是因为没有注意的该item)
        3.2 从1次交互和100个未交互的item中，让模型产出一个推荐的排序
        3.3 从推荐的排序中计算Top-N accuracy metrics
2. 汇总global Top-N accuracy metrics

Top-N accuracy 衡量的是交互的item命中top N item的概率

# 模型

## Popularity model

计算最受欢迎的item

## Content-Based Filtering model

用一个用所有的item的profile的平均数, 作为该用户的profile. 然后用该profile和所有item比较距离, 排序.

## colaboratory filter model

svd 矩阵分解


## hybridization model

就是将不同的排序给权重, 然后融合, 给出综合的排序

kaggle里面代码的流程图
![1.png](1.png)

参考:
https://www.kaggle.com/code/gspmoreira/recommender-systems-in-python-101/notebook
https://www.cxymm.net/article/qq_45531594/108899674

