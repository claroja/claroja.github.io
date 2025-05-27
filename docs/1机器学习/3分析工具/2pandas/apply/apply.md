# apply

`apply()`遍历行(`axis=1`)或遍历列(`axis=0`)对其应用某个函数(`lambda`).


## 数据
```python
df=pd.DataFrame([[4,9]]*3,columns = ['A','B'])
df
##    A  B
## 0  4  9
## 1  4  9
```

## 行遍历操作(axis=1)
```python
df.apply(lambda row: row.mean(),axis = 1)  # lambda row: row.mean() 可以写成  np.meam
## 0    6.5
## 1    6.5
```


## 列遍历操作(axis=0)
```python
df.apply(lambda col: col.mean())  # lambda row: row.mean() 可以写成  np.meam
## A    4.0
## B    9.0
```