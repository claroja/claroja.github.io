
# 准备数据

```python
import pandas as pd
df = pd.DataFrame({'a': [1, 2, 3], 'b': ['a', 'b', 'c'],'c': ["A","B","C"]})
print(df)
   a  b  c
0  1  a  A
1  2  b  B
2  3  c  C
```


# 行操作

## 索引

```python
df = pd.DataFrame({"A": [1, 2, 3], "B": [4, 5, 6]})
df = df.rename(index={0:3,1:4,2:5}, columns={"A": "a", "C": "c"}) # 修改索引名

df = df.set_index("A") # 将A列做为索引
df = df.reset_index() #将索引删除，作为普通列，并从新使用[0,1,2...n]作为索引 
```

## 插入行

1. 在中间插入

    ```python
    import pandas as pd
    line = pd.DataFrame({df.columns[0]:"--",df.columns[1]:"--",df.columns[2]:"--"},index=[1])
    df = pd.concat([df.loc[:0],line,df.loc[1:]]).reset_index(drop=True)#df.loc[:0]这里不能写成df.loc[0]，因为df.loc[0]返回的是series
        a  b  c
    0  1.0  a  A
    1  --  -- --
    2  2.0  b  B
    3  3.0  c  C
    4  4.0  4  4
    ```

2. 在末尾插入
参考[pandas_concate](/pandas_concate/)


## 删除行

```python
df.drop(index=labels)
```


# 列操作
## columns
```python
df = pd.DataFrame({"A": [1, 2, 3], "B": [4, 5, 6]})
df.rename(index={0:3,1:4,2:5}, columns={"A": "a", "C": "c"})
df.columns = df.columns.str.strip() # 把columns当成series看待
df.columns = df.columns.map(lambda x:x) # 使用map函数
```



## 增加列

```python
df["new"]=[]
```

## 删除列

```python
df.drop(solumns=labels)
```