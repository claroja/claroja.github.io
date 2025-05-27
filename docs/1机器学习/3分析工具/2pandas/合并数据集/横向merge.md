# 合并数据集_横向merge

## 数据准备
```python
df1 = pd.DataFrame(
    {
        "A": ["A0", "A1", "A2", "A3"],
        "B": ["B0", "B1", "B2", "B3"],
        "C": ["C0", "C1", "C2", "C3"],
        "D": ["D0", "D1", "D2", "D3"],
    },
    index=[0, 1, 2, 3],
)

df2 = pd.DataFrame(
    {
        "B": ["B2", "B3", "B6", "B7"],
        "D": ["D2", "D3", "D6", "D7"],
        "F": ["F2", "F3", "F6", "F7"],
    },
    index=[2, 3, 6, 7],
)
```

## 横向合并

Merge method|SQL Join Name|Description
--|--|--
left|LEFT OUTER JOIN|Use keys from left frame only
right|RIGHT OUTER JOIN|Use keys from right frame only
outer|FULL OUTER JOIN|Use union of keys from both frames
inner|INNER JOIN|Use intersection of keys from both frames
cross|CROSS JOIN|Create the cartesian product of rows of both frames

### LEFT OUTER JOIN

#### 按column

1. `B0,B1`在右表中查询不到, 所以`D_y,F`为`NaN`
2. `D_x`是左表的`D`列, `D_y`是右表的`D`列
```python
pd.merge(left, right, how="left", on="B")
##     A   B   C D_x  D_y    F
## 0  A0  B0  C0  D0  NaN  NaN
## 1  A1  B1  C1  D1  NaN  NaN
## 2  A2  B2  C2  D2   D2   F2
## 3  A3  B3  C3  D3   D3   F3
```

#### 按index
```python
pd.merge(left, right, how="left", left_index=True, right_index=True)
left.join(right,how="left",lsuffix='_x', rsuffix='_y')  # 等价
##     A B_x   C D_x  B_y  D_y    F
## 0  A0  B0  C0  D0  NaN  NaN  NaN
## 1  A1  B1  C1  D1  NaN  NaN  NaN
## 2  A2  B2  C2  D2   B2   D2   F2
## 3  A3  B3  C3  D3   B3   D3   F3
```

### RIGHT OUTER JOIN

#### 按column
1. `B6,B7`在左表中查询不到, 所以`D_y,F`为`NaN`
2. `D_x`是左表的`D`列, `D_y`是右表的`D`列
```python
pd.merge(left, right, how="right", on="B")
##      A   B    C  D_x D_y   F
## 0   A2  B2   C2   D2  D2  F2
## 1   A3  B3   C3   D3  D3  F3
## 2  NaN  B6  NaN  NaN  D6  F6
## 3  NaN  B7  NaN  NaN  D7  F7
```


#### 按index
```python
pd.merge(left, right, how="right",left_index=True, right_index=True)
left.join(right,how="right",lsuffix='_x', rsuffix='_y')  # 等价
##      A  B_x    C  D_x B_y D_y   F
## 2   A2   B2   C2   D2  B2  D2  F2
## 3   A3   B3   C3   D3  B3  D3  F3
## 6  NaN  NaN  NaN  NaN  B6  D6  F6
## 7  NaN  NaN  NaN  NaN  B7  D7  F7
```


### FULL OUTER JOIN

#### 按column
```python
pd.merge(left, right, how="outer", on="B")
pd.concat([left,right], ignore_index=True, join = "outer",axis=1) # 等价
##      A   B    C  D_x  D_y    F
## 0   A0  B0   C0   D0  NaN  NaN
## 1   A1  B1   C1   D1  NaN  NaN
## 2   A2  B2   C2   D2   D2   F2
## 3   A3  B3   C3   D3   D3   F3
## 4  NaN  B6  NaN  NaN   D6   F6
## 5  NaN  B7  NaN  NaN   D7   F7
```

#### 按index
```python
pd.merge(left, right, how="outer",left_index=True, right_index=True)
left.join(right,how="outer",lsuffix='_x', rsuffix='_y')
##      A  B_x    C  D_x  B_y  D_y    F
## 0   A0   B0   C0   D0  NaN  NaN  NaN
## 1   A1   B1   C1   D1  NaN  NaN  NaN
## 2   A2   B2   C2   D2   B2   D2   F2
## 3   A3   B3   C3   D3   B3   D3   F3
## 6  NaN  NaN  NaN  NaN   B6   D6   F6
## 7  NaN  NaN  NaN  NaN   B7   D7   F7
```


### INNER JOIN

#### 按column
```python
pd.merge(left, right, how="inner", on="B")
pd.concat([left,right], ignore_index=True, join = "inner",axis=1)  # 等价
##     A   B   C D_x D_y   F
## 0  A2  B2  C2  D2  D2  F2
## 1  A3  B3  C3  D3  D3  F3
```

#### 按索引
```python
pd.merge(left, right, how="inner", left_index=True, right_index=True)
left.join(right,how="inner",lsuffix='_x', rsuffix='_y')  # 等价
##     A B_x   C D_x B_y D_y   F
## 2  A2  B2  C2  D2  B2  D2  F2
## 3  A3  B3  C3  D3  B3  D3  F3
```


### CROSS JOIN

```python
pd.merge(left, right, how="cross")
##      A B_x   C D_x B_y D_y   F
## 0   A0  B0  C0  D0  B2  D2  F2
## 1   A0  B0  C0  D0  B3  D3  F3
## 2   A0  B0  C0  D0  B6  D6  F6
## 3   A0  B0  C0  D0  B7  D7  F7
## 4   A1  B1  C1  D1  B2  D2  F2
## 5   A1  B1  C1  D1  B3  D3  F3
## 6   A1  B1  C1  D1  B6  D6  F6
## 7   A1  B1  C1  D1  B7  D7  F7
## 8   A2  B2  C2  D2  B2  D2  F2
## 9   A2  B2  C2  D2  B3  D3  F3
## 10  A2  B2  C2  D2  B6  D6  F6
## 11  A2  B2  C2  D2  B7  D7  F7
## 12  A3  B3  C3  D3  B2  D2  F2
## 13  A3  B3  C3  D3  B3  D3  F3
## 14  A3  B3  C3  D3  B6  D6  F6
## 15  A3  B3  C3  D3  B7  D7  F7
```