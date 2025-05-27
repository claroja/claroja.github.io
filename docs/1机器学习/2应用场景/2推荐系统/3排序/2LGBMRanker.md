LGBMRanker模型和LambdaMART的原理很像。

```python
classlightgbm.LGBMRanker(
    boosting_type='gbdt',
    num_leaves=31,
    max_depth=-1,
    learning_rate=0.1,
    n_estimators=100,
    subsample_for_bin=200000,
    objective=None,
    class_weight=None,
    min_split_gain=0.0,
    min_child_weight=0.001,
    min_child_samples=20,
    subsample=1.0,
    subsample_freq=0,
    colsample_bytree=1.0,
    reg_alpha=0.0,
    reg_lambda=0.0,
    random_state=None,
    n_jobs=None,
    importance_type='split',
    **kwargs
)
```




```python
fit(
    X,
    y,
    sample_weight=None,
    init_score=None,
    group=None,                     # 指的是每个query，在新闻推荐中就是user对应得item列表得长度
    eval_set=None,
    eval_names=None,
    eval_sample_weight=None,
    eval_init_score=None,
    eval_group=None,                # 与group类似，只不过这个是用在验证集合中得用户item列表长度
    eval_metric=None,               # 这里得eval_metric指的就是上面提到得用于优化排序模型得评估指标，默认是使用ndcg
    eval_at=(1, 2, 3, 4, 5),        # eval_at:这个指的是排序指标中得参数，例如NDCG@5,NDCG@10
    feature_name='auto',
    categorical_feature='auto',
    callbacks=None,
    init_model=None
)
```

之所以分组，是为了在优化得时候对于每个用户只优化其相关得item，这里需要我们给定数据集中总共有哪些用户，以及每个用户需要优化多少个item.所以我们传入进去得group参数其实是一个列表。

以推荐为例，每条sample是uid,iid,label,label=1则代表用户uid点击了物品iid，反之未点击。那么每个group就是同一个uid对应的samples,也就是以uid来划分group。这样的话，优化目标就是优化同一个group内的list序，也就是同一个用户，其点击的item越靠前越好，未点击的越靠后越好。

以搜索为例，比如KDD CUP 2020 MultiModal Recall 赛道，给定一个query以及对应的30个candidate product images, 30个中有若干个匹配的正样本，其余为负样本，这样就可以将同一个query以及对应的candidate images看作是1个group，来优化group内的序。具体代码实现时，以推荐为例，其中一种使用方式如下，先对数据按照uid排序，这样同一个group的数据时挨在一起的。然后直接去统计每个group内的samples的数量，传入或者数量数组即可。eval_groups设置同理。另外，推断预测predict的时候，不需要传入group参数。





LGBMRanker

| session_id | search_results | best_results |
| --- | --- | --- |
| A | a b c d e | c e d |
| B | b a f g | g a |
| C | e f g d c | e f c d g |


| session_id | search_results | rank |
| --- | --- | --- |
| A | a | 4 |
| A | b | 4 |
| A | c | 1 |
| A | d | 3 |
| A | e | 2 |
| B | b | 3 |
| B | a | 2 |
| B | f | 3 |
| B | g | 1 |
| C | e | 1 |
| C | f | 2 |
| C | g | 3 |
| C | d | 3 |
| C | c | 3 |







## 参考
1. https://lightgbm.readthedocs.io/en/latest/pythonapi/lightgbm.LGBMRanker.html#lightgbm.LGBMRanker
2. https://www.zhihu.com/question/341082668
3. https://www.kaggle.com/code/alexandremarquis/kaggle-days-x-lvmh-lgbmranker-solution/notebook