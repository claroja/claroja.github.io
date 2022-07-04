
# 准备数据

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

# 普通选择

- 如果[x,y]中,x,y都是普通数值,则返回一个普通值
- 如果[x,y]中,x和y有一个是列表类型(`:`或`[]`)则返回的是`Series`对象
- 如果[x,y]中,x和y都是列表类型,则返回的是`DataFrame`对象

1. 选择一行一列,返回的是一个`numpy.int64`对象

   ```python
   df.loc[1,'a']
   """
   2
   """
   ```

2. 选择一行多列数据, 注意此时返回的是一个`pandas.core.series.Series`对象

   ```python
   df.loc[1,:]
   """
   a    2
   b    b
   c    B
   """
   ```

3. 选择多行一列数据, 此时返回的是一个`pandas.core.series.Series`对象

   ```python
   df.loc[1:2,'a']
   ```

4. 选择多行多列数据, 此时返回的是一个`pandas.core.frame.DataFrame`对象

   ```python
   df.loc[1:2,['a','b']]
   ```

# 条件选择

## 基础操作

1. 首先设置条件

   ```python
   condition = df.loc[:,"a"]>2 # 值判断, 等价于df["a"]>2
   condition = df["a"].isin([4,5]) # 包含关系判断
   ```

2. 然后使用`loc`进行选择

   ```python
   df.loc[condition,:] # 这一步就是给[x,y],中的x传入的一个boolean的列表
   ```

3. 给条件筛选加上逻辑判断
符号|描述
--|--
`|` | or
`&` | and
`~` | not

   ```python
   df.loc[(df["a"]>2)&(df["a"]<4),:]
   ```

# 步长选择

```python
print(df.loc[1:2,:])#选择1:2行，slice为1
   a  b  c
1  2  b  B
2  3  c  C
print(df.loc[::-1,:])#选择所有行，slice为-1，所以为倒序
   a  b  c
2  3  c  C
1  2  b  B
0  1  a  A
print(df.loc[0:2:2,:])#选择0至2行，slice为2，等同于print(df.loc[0:2:2,:])因为只有3行
   a  b  c
0  1  a  A
2  3  c  C
```


