# select

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

## 行选择


### 普通选择

1. 如果[x,y]中,x,y都是普通数值,则返回一个普通值, 例如:选择一行一列,返回的是一个`numpy.int64`对象
   
   ```python
   df.loc[1,'a']
   """
   2
   """
   ```
2. 如果[x,y]中,x和y有一个是列表类型(`:`range列表或`[]`lable列表或`[true,false]`布尔列表),则返回的是`Series`对象, 例如:选择一行多列数据, 注意此时返回的是一个`pandas.core.series.Series`对象
   
   ```python
   df.loc[1,:] # 等价于df.loc[1]
   """
   a    2
   b    b
   c    B
   """
   ```
   
   选择多行一列数据, 此时返回的是一个`pandas.core.series.Series`对象
   
   ```python
   df.loc[1:2,'a']
   ```

3. 如果[x,y]中,x和y都是列表类型,则返回的是`DataFrame`对象, 例如: 选择多行多列数据, 此时返回的是一个`pandas.core.frame.DataFrame`对象
   
   ```python
   df.loc[1:2,['a','b']]
   ```

4. 如果y,不给出,既[x]形式, 则默认选择所有y, 等价于`[x,:]`


### 条件选择

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
   
   ```python
   df.loc[(df["a"]>2)&(df["a"]<4),:]
   ```

   符号|描述
   --|--
   `|` | or
   `&` | and
   `~` | not



### 步长选择

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


## pandas的值引用与地址引用

`df[mask]` 返回了一个新的`DataFrame`对象
`df[mask]["c"] = 0`仅仅更改了新`DataFrame`对象的值, 而没有改变最初的`df`的值
```python
import pandas as pd
df = pd.DataFrame({"a":[1,2,3],"b":[4,5,6],"c":[7,8,9]})
mask = df["c"] < 8
"""
0     True
1    False
2    False
"""
df[mask]["c"] = 0  # 这里没有更改原df的值, 会抛出warn：SettingWithCopyWarning
df
"""
   a  b  c
0  1  4  7
1  2  5  8
2  3  6  9
"""
```

`df["z"]` 返回一个地址, 指向`df`的`z`列
`df["z"][mask] = 0` 更改了`df`的`z`列的值
```python
df["z"][mask] = 0  # 更改了原df的值
df
"""
   a  b  c
0  1  4  0
1  2  5  8
2  3  6  9
"""
```

为例便面无解, 建议使用 `.loc`

```python
df.loc[mask, "z"] = 0
df
"""
   a  b  c
0  1  4  0
1  2  5  8
2  3  6  9
"""
```

## 总结summary

action|return|assign
--|--|--
`df.loc[mask, column_name]`| return copy|assign value to copy
`df[mask][column_name]`| return copy|assign value to copy
`df[column_name][mask]`| return copy|assign value to df

[参考](https://realpython.com/pandas-settingwithcopywarning/)