

# 顺序编码(LabelEncoder)

对于特征, 有顺序无顺序都是进行LabelEncoder



## pandas

```python
import category_encoders as ce
import pandas as pd
df = pd.DataFrame({
    'Grade':['High', None,'Medium','Low', 'other'],
    'haha':['a','b','c','d', 'e']
    })

df['Grade'].map({'Low':0, 'Medium':1, 'High':2})

# 0    2.0
# 1    NaN
# 2    1.0
# 3    0.0
# 4    NaN
# Name: Grade, dtype: float64
```

✨缺失值(missing)和未知值(unknown)被当成NaN对待


## [category_encoders](https://contrib.scikit-learn.org/category_encoders/index.html)


```python
class category_encoders.ordinal.OrdinalEncoder(
    verbose=0,                  # int, 输出信息的详细程度
    mapping=None,               # list of dicts, key是要编码的特征名字, value是字典, 子key是原始分类, 子value是编码分类[{‘col’: ‘col1’, ‘mapping’: {None: 0, ‘a’: 1, ‘b’: 2}}, {‘col’: ‘col2’, ‘mapping’: {None: 0, ‘x’: 1, ‘y’: 2}}]
    cols=None,                  # list, 要编码的列名, 如果为None则所有的string列都会被编码. ✨当提供mapping时, 优先使用mapping中的列, 而不是全部列
    drop_invariant=False,       # bool, 是否丢弃方差为0的特征
    return_df=True,             # bool, 为True时, 返回DataFrame; 为False时, 返回numpy ndarray 
    handle_unknown='value',     # str, 将mapping中的未知分类编码成'value', 编码为-1
    handle_missing='value'      # str, 将缺失值编码成'value`,
)
```

```python

import category_encoders as ce
import pandas as pd
df = pd.DataFrame({
    'Grade':['High', None,'Medium','Low', 'other'],
    'haha':['a','b','c','d', 'e']
    })

ce.OrdinalEncoder(
    # cols=['Grade'], 
    mapping=[{'col':'Grade','mapping':{'Low':0, 'Medium':1, 'High':2}}],
    handle_missing = 'return_nan'
).fit_transform(df)

#    Grade haha
# 0    2.0    a
# 1   -1.0    b
# 2    1.0    c
# 3    0.0    d
# 4   -1.0    e

```
1. ✨handle_missing参数没有起作用
2. ✨在mapping参数存在的情况下, 不需要传入cols



✨功能上是一致的, 区别在于:
1. label encoder是给目标类别编码的, 所以输入的数据形状是一维的, (n_samples,)
2. ordinal encoder是给特征类别编码的, 所以输入的数据形状是多维的, (n_samples, n_features)








## 参考
1. https://datascience.stackexchange.com/questions/39317/difference-between-ordinalencoder-and-labelencoder
2. https://www.cnblogs.com/dangui/p/15836197.html