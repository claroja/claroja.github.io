

# 顺序编码(OrdinalEncoder)


序号编码通常用于处理类别间具有大小关系的数据。如产品等级分为高、中、低三档，存在“高>中>低”的排序关系, 则高表示为3，中表示为2，低表示为1

## 最佳实践


1. 打比赛中, 测试集是批量给出的, 使用pandas的map方法更快
2. 真实应用中, 用于生产是单条, 单条处理, 适用scikit进行单调转换(虽然也可以用map转换, 但是one-hot编码pandas对单条处理不友好, 为了和onehot保持一致, 所以建议使用scikit)



## OrdinalEncoder


### 最佳实践

```python
from sklearn.preprocessing import OrdinalEncoder
import pandas as pd
df = pd.DataFrame({
    'Grade':['High', None,'Medium','Low', 'other'],
    })
enc = OrdinalEncoder(categories = [['Low', 'Medium', 'High']], handle_unknown= 'use_encoded_value', unknown_value=-1, encoded_missing_value=-1)

df['Grade_ord'] = enc.fit_transform(df[['Grade']])
```


### 构造参数

```python
class sklearn.preprocessing.OrdinalEncoder(
    *, 
    categories='auto',                  # categories: ‘auto’ or a list of array-like, auto: 从训练集自定义映射; list: 根据元素索引进行映射
    dtype=<class 'numpy.float64'>,      # dtype: number type, 输出的数据类型
    handle_unknown='error',             # {‘error’, ‘use_encoded_value’}, 遇到没有指定的分类, error: 会报错; ‘use_encoded_value’会根据unknown_value的值来表示
    unknown_value=None,                 # int or np.nan, 
    encoded_missing_value=nan,          # int or np.nan, 缺失值的处理
    min_frequency=None,                 # int or float, 大于该阈值的才会被编码. int: 直接比较大小; float: min_frequency * n_samples
    max_categories=None                 # int, 最大的分类编码个数
)
```

### 属性
1. categories_: list of arrays
2. n_features_in_: int
3. feature_names_in_: ndarray of shape (n_features_in_,)
4. infrequent_categories_: list of ndarray





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

✨另一种是使用pandas的Categorical类型

```python
edu = ['Uneducated','High School', 'College', 'Graduate']
test['cat'] = pd.Categorical(test['Education'], categories=edu, ordered=True)
test['cat'].cat.codes
```


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
3. https://datascience.stackexchange.com/questions/72343/encoding-with-ordinalencoder-how-to-give-levels-as-user-input