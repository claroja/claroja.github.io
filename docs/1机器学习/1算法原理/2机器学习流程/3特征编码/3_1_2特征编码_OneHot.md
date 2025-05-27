

# 独热编码(OneHotEncoder)

处理类别间不具有大小关系的特征。例如血型，一共4个值，独热编码将其变成4维的稀疏向量。独热编码的特征向量只有一维取值为1，其余为0。

缺点是它处理不好类别取值多的特征，类别数越大会带来过很多列的稀疏特征。对于类别取值较多的情况要注意通过特征选择降低维度。



## pandas


```python
import pandas as pd
data = pd.DataFrame({
    'BloodType':['A','AB','O','B', None,],
    })

pd.get_dummies(data, dummy_na=True)

#    BloodType_A  BloodType_AB  BloodType_B  BloodType_O  BloodType_nan
# 0            1             0            0            0              0
# 1            0             1            0            0              0
# 2            0             0            0            1              0
# 3            0             0            1            0              0
# 4            0             0            0            0              1
```



## [category_encoders](https://contrib.scikit-learn.org/category_encoders/index.html)


```python

import category_encoders as ce
import pandas as pd
data = pd.DataFrame({
    'BloodType':['A','AB','O','B', None,],
    })

ce.OneHotEncoder(cols=['BloodType'], use_cat_names=True).fit_transform(data)

#    BloodType_A  BloodType_AB  BloodType_O  BloodType_B  BloodType_nan
# 0            1             0            0            0              0
# 1            0             1            0            0              0
# 2            0             0            1            0              0
# 3            0             0            0            1              0
# 4            0             0            0            0              1
```








✨功能上是一致的, 区别在于:
1. label encoder是给目标类别编码的, 所以输入的数据形状是一维的, (n_samples,)
2. ordinal encoder是给特征类别编码的, 所以输入的数据形状是多维的, (n_samples, n_features)








## 参考
1. https://datascience.stackexchange.com/questions/39317/difference-between-ordinalencoder-and-labelencoder
2. https://www.cnblogs.com/dangui/p/15836197.html