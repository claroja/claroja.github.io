
# faiss


## 简介
Faiss全称[Facebook AI Similarity Search](https://link.zhihu.com/?target=https%3A//github.com/facebookresearch/faiss)，是FaceBook的AI团队针对大规模向量 进行 TopK 相似向量 检索 的一个工具，使用C++编写，有python接口，对10亿量级的索引可以做到毫秒级检索的性能。

Faiss的主要原理是构建base vectors向量数据的index索引，然后利用索引对search vectors 实现 TopK 相似向量检索。

Faiss支持许多不同的构建索引的方式，以下是一些较推荐使用的类型。

1. "Flat"：暴力精确检索，全局最优，适合数十万级。
2. "IVF100,Flat"：倒排暴力检索(100聚类后暴力检索)，非全局最优但召回高，适合数百万级。
3. ”HNSW64": 图网络检索，Hierarchical NSW(Navigable Small World)，检索复杂度log(logn)，适合千万上亿规模以及更大规模的图索引，缺点是构建索引过程较慢，占用很大的存储。


## 最佳实践


```python
import faiss
import numpy as np 


# 创建数据
d = 128  # 向量的维度
n = 10000  # 向量的数量
data = np.random.random((n, d)).astype('float32')  # 创建随机向量

# 创建索引
index = faiss.IndexFlatL2(d)  # L2距离度量的平面索引

# 创建索引后，我们需要将向量数据添加到索引中。
index.add(data)  # 将数据添加到索引中

k = 5  # 查找最相似的前5个向量
query_vector = np.random.random((1, d)).astype('float32')  # 创建一个查询向量
distances, indices = index.search(query_vector, k)  # 搜索, indices是与查询向量最相似的向量的索引, distances是对应的L2距离。

```


## 参考
1. https://blog.csdn.net/weixin_43114209/article/details/141716443
2. https://zhuanlan.zhihu.com/p/357414033
3. https://zhuanlan.zhihu.com/p/379372268
4. https://github.com/facebookresearch/faiss/wiki/Getting-started


