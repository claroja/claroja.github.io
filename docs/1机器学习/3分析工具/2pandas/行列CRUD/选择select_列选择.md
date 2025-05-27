# 选择select_列选择

## 数据准备
```python
import pandas as pd
df = pd.DataFrame({'a': [1, 2, 3], 'b': ['a', 'b', 'c'],'c': ["A","B","C"]})
"""
   a  b  c
0  1  a  A
1  2  b  B
2  3  c  C
"""
```
## 列选择

```python
df.loc[:,'a']
df['a']


df.loc[:,['a']]
df[['a']]


df.loc[:,~df.columns.isin(['b','c'])]
df[~df.columns.isin(['b','c'])]
```

在列选择中df.loc[,]方法有简写的形式df[]形式, 但是df[[True, False, False]]返回的是行, 和df.loc[:,[True, False, False]]不一致. 具体来说:

1. df.loc[:,'a']和df['a']都返回Series对象, 形状是(3, ), 一维数据
2. df.loc[:,['a']]和df[['a']]返回DataFrame对象, 形状是(3, 1), 二维数据
3. df.loc[:,~df.columns.isin(['b','c'])]返回DataFrame对象, 形状是(3, 1), 二维数据
4. df[~df.columns.isin(['b','c'])]返回返回DataFrame对象, 形状是(1,3), 二维数据

## 参考
1. https://realpython.com/pandas-settingwithcopywarning/