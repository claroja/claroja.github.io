

# 哈希编码(HashingEncoder)

1. 哈希编码是使用二进制对标签编码做哈希映射。好处在于哈希编码器不需要维护类别字典，且输出长度是固定的。若后续出现训练集未出现的类别，哈希编码还能接受新值。
2. 对于类别取值较多的特征，哈希法编码可以将原始的高维特征向量压缩成较低维特征向量，且尽量不损失原始特征的表达能力。但按位分开哈希编码，模型学习相对比较困难。

## pandas


## [category_encoders](https://contrib.scikit-learn.org/category_encoders/index.html)

```python
import category_encoders as ce
import pandas as pd
data = pd.DataFrame({
    'Sex':['F','M','M','F','M',None,'F','M']
    })

ce.HashingEncoder(cols=['Sex']).fit_transform(data)


#    col_0  col_1  col_2  col_3  col_4  col_5  col_6  col_7
# 0      0      0      1      0      0      0      0      0
# 1      0      0      0      0      1      0      0      0
# 2      0      0      0      0      1      0      0      0
# 3      0      0      1      0      0      0      0      0
# 4      0      0      0      0      1      0      0      0
# 5      0      0      0      0      0      0      0      0
# 6      0      0      1      0      0      0      0      0
# 7      0      0      0      0      1      0      0      0

```


## 参考
1. https://datascience.stackexchange.com/questions/39317/difference-between-ordinalencoder-and-labelencoder
2. https://www.cnblogs.com/dangui/p/15836197.html