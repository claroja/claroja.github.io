# index

通过`dataFrame.index`可以获得数据框的索引
## 准备数据

```python
import pandas as pd
df = pd.DataFrame({'a': [1, 2, 3], 'b': ['a', 'b', 'c'],'c': ["A","B","C"],'d':[3,2,1]})
"""
   a  b  c  d
0  1  a  A  3
1  2  b  B  2
2  3  c  C  1
"""
```


## set_index

### 将单列设置成索引

```python
df1 = df.set_index('c')
"""
   a  b  d
c         
A  1  a  3
B  2  b  2
C  3  c  1
"""
df1.loc['B']
"""
a    2
b    b
d    2
"""
```

### 将多列设置成索引

```python
df2 = df.set_index(['b','c'])  #　将两列设置成索引
"""
     a  d
b c      
a A  1  3
b B  2  2
c C  3  1
"""

df2.loc[('b','B')] # 双列索引取值

"""
a    2
d    2
"""

df2.loc[('b')]
"""
   a  d
c      
B  2  2
"""
```

参数|描述
--|--
keys|type:list of labels, 作为索引的列
deop|type:bool;default:True, 是否丢弃作为索引的列


## reset_index
`reset_index`是`set_index`的逆向操作, 索引列被重新使用数字排序, 之前的索引列, 被当成一个一个普通列对待.

```python
df1.reset_index()
"""
   c  a  b  d
0  A  1  a  3
1  B  2  b  2
2  C  3  c  1
"""
```

参数|描述
--|--
drop|default False, 是否丢弃索引列


参考:
https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.reset_index.html#pandas.DataFrame.reset_index