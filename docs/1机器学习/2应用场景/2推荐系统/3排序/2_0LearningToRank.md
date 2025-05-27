# LearningToRank

1. 搜索引擎(Search Engines): 提供用户的信息(年龄, 性别, 位置), 请求(query), 根据相似度排序返回结果
2. 推荐系统(Recommender Systems): 提供用户的信息, 购买的物品, 返回用户感兴趣的商品


排序模型根据, 搜索返回的二元组`x = (q, d)`(query, document), 计算其相关度得分`s = f(x)`. 一旦我们获得所有搜索返回二元组的相关度得分, 就可以据此来进行排序.


排序模型的方法主要有:

1. 向量空间模型(Vector Space Models), 计算每一个query和document的嵌入向量(`Tf-Idf` 或 `BERT`), 然后计算两者的余弦相似度f(x) = f(q, d)

2. 机器学习模型(Learning to Rank): 输入x = (q, d), 计算损失.

本文主要介绍机器学习模型(Learning to Rank).


## 评估(Evaluation)

创建排序的机器学习模型, 我们要定义好输入(inputs), 输出(outputs)和损失函数(loss function).


1. 输入(Input): 对于一个询问q, 有n个文档d, 并根据相关度进行排序, `D = {d₁, …, dₙ}`. 元组 `xᵢ = (q, dᵢ)`, 就是输入

2. 输出(Output): 对于一个输入`xᵢ = (q, dᵢ)`, 模型会预测相关度得分 `sᵢ = f(xᵢ)`.

3. 损失函数(loss function):

    所有的排序模型都是使用基础的机器学习模型, 比如决策树, 神经网络, 来计算相似度得分$s=f(x)$. 但是损失函数是排序模型特有的, 有3种:
    
    1. Pointwise Methods: 计算一个询问中的每个文档$d_i$的模型输出相关度$s_i$和真实相关度$y_i$之间的差值. 这样就将排序问题转化成了回归问题.
    2. Pairwise Methods: 计算一个询问中的某一对文档$d_i, d_j$的排序, 既是否$y_i > y_j$. 这样就将排序问题转化成了二分类问题.
    3. Listwise Methods: 计算一个询问中, 所有文档的排名顺序.

    ![](https://miro.medium.com/max/1400/1*s3CQuNRWcQNkQKd8Met-MA.png)


## Pointwise Methods

例如, [Subset Ranking](https://link.springer.com/chapter/10.1007/11776420_44) 适用Mean Square Error (MSE) loss.


## Pairwise Methods
pointwise模型的问题是需要真实的相关性得分, 但是很多场景是用户一个请求中的所有文档中仅选择1个文档, 我们不知道未选择文档的相关度, 因为他们都是0.

因此Pairwise方法, 不需要绝对的相关度, 而是使用相对的相关度: 给定两个文档, 我们要预测的是第1个文档是否比第2个文档更相关. 这样我们仅需要真实的$y_{ij}=1$如果$y_i > y_j$.模型输出的是$s_{ij} = \sigma(s_i - s_j)$. 

[RankNet](https://icml.cc/Conferences/2015/wp-content/uploads/2015/06/icml_ranking.pdf)使用的就是这个方法, 损失函数是Binary Cross Entropy (BCE)


$$
L(s, y) = - \sum_{i,j = 1}^{n} y_{ij} \log(s_{ij}) + (1 - y_{ij}) \log(1 - s_{ij})
$$

RankNet相较于pointwise方法有了提升, 但是在训练中没有考虑文档的排序, 我们希望给排序靠前的文档更高的权重(DCG度量就是这样做的).

不幸的是, 排位(rank)信息只能在排序(sort)后获得, 而且排序是不可导的(non differentiable). 然而, 梯度下降优化不需要损失函数, 我们仅仅需要梯度.[LambdaRank](https://www.microsoft.com/en-us/research/publication/learning-to-rank-with-non-smooth-cost-functions/)定义了高排位的文档有更高的梯度的隐式损失函数(implicit loss function).

$$
\lambda_j := \frac{\partial L}{\partial s_j} = \frac{1}{G_{\text{max}}} \sum_{i \neq j} \sigma(s_i - s_j) \| G_i - G_j \| \| D_i - D_j \|
$$



## Listwise Methods
Pointwise和pairwise方法将排序问题转换成了回归和分类问题. 相反, Listwise则是直接最大化评估的度量. 直觉上, 这个方法需要给出最佳的结果, 但是损失函数Loss = 1 – NDCG需要计算discounts $D_k$, 只能在排序后得出, 而且其不可导. 解决这个问题的方法有4个:

1. 每次迭代更新, 这种方法介于pairwise和listwise. LambdaRank和LambdaMART在使用.
2. 估算近似目标, 让其可导. [SoftRank](https://www.researchgate.net/publication/221520227_SoftRank_optimizing_non-smooth_rank_metrics)在使用.
3. [ListNet](https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/tr-2007-40.pdf)
4. [LambdaLoss](https://research.google/pubs/the-lambdaloss-framework-for-ranking-metric-optimization/)


## 参考
1. https://towardsdatascience.com/learning-to-rank-a-complete-guide-to-ranking-using-machine-learning-4c9688d370d4
2. https://queirozf.com/entries/evaluation-metrics-for-ranking-problems-introduction-and-examples
