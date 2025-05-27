

# 计数编码(CountEncoder)

对于给定的分类特征，按照每个类别分组，统计组计数，将每个类别都映射到该类别的样本数。清晰地反映了类别在数据集中的出现次数，缺点是忽略类别的物理意义，比如说两个类别出现频次相当，但是在业务意义上，模型的重要性也许不一样。这个编码可以指示每个类别的“可信度”，例如，机器学习算法可以决定仅考虑其类别计数高于某个阈值的类别所带来的信息



## pandas
```python
ce.BinaryEncoder(cols=['BloodType']).fit_transform(data)


import category_encoders as ce
import pandas as pd
data = pd.DataFrame({
    'Sex':['F','M','M','F','M',None,'F','M']
    })


data.groupby(['Sex']).transform('size')

# 0    3.0
# 1    4.0
# 2    4.0
# 3    3.0
# 4    4.0
# 5    NaN
# 6    3.0
# 7    4.0
# dtype: float64


```


## [category_encoders](https://contrib.scikit-learn.org/category_encoders/index.html)


```python

import category_encoders as ce
import pandas as pd
data = pd.DataFrame({
    'Sex':['F','M','M','F','M',None,'F','M']
    })

ce.CountEncoder(cols=['Sex']).fit_transform(data)

#    Sex
# 0    3
# 1    4
# 2    4
# 3    3
# 4    4
# 5    1
# 6    3
# 7    4

```



## 参考
1. https://datascience.stackexchange.com/questions/39317/difference-between-ordinalencoder-and-labelencoder
2. https://www.cnblogs.com/dangui/p/15836197.html