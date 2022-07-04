

首先获得文章表和交互表
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


2. 给`eventType`进行权重定义，这就是一个自然问题转换为数学问题的过程。不同的event有不同的评分，我们认为评论是的用户对文章的最大认可。
```
{
   'VIEW': 1.0,
   'LIKE': 2.0, 
   'BOOKMARK': 2.5, 
   'FOLLOW': 3.0,
   'COMMENT CREATED': 4.0,  
}
```



参考:
https://www.kaggle.com/code/gspmoreira/recommender-systems-in-python-101/notebook
https://medium.com/nanonets/evaluating-models-using-the-top-n-accuracy-metrics-c0355b36f91b