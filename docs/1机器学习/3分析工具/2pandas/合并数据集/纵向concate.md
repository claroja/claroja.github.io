# 合并数据集_纵向concate


## 参数解释

### 测试数据集
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


### axis控制合并方向为纵向
    
```python
pd.concat([df1, df2], axis=0)

"""
    A   B    C   D    F
0   A0  B0   C0  D0  NaN
1   A1  B1   C1  D1  NaN
2   A2  B2   C2  D2  NaN
3   A3  B3   C3  D3  NaN
2  NaN  B2  NaN  D2   F2
3  NaN  B3  NaN  D3   F3
4  NaN  B6  NaN  D6   F6
5  NaN  B7  NaN  D7   F7
"""
```

### ignore_index索引处理

1. 默认ignore_index=False, 既不对索引处理
2. ignore_index=True, 重新生成索引, 相当于合并后进行`reset_index()`


```python
pd.concat([df1, df2], ignore_index=True, axis=0)
"""
    A   B    C   D    F
0   A0  B0   C0  D0  NaN
1   A1  B1   C1  D1  NaN
2   A2  B2   C2  D2  NaN
3   A3  B3   C3  D3  NaN
4  NaN  B2  NaN  D2   F2
5  NaN  B3  NaN  D3   F3
6  NaN  B6  NaN  D6   F6
7  NaN  B7  NaN  D7   F7
"""
```


### join相同索引处理
1. 默认join=outer, 列名不同数据丢弃


    ```python
    pd.concat([df1, df2], ignore_index=True,join="outer",axis=0)
    """
        A	B	C	D	F
    0	A0	B0	C0	D0	NaN
    1	A1	B1	C1	D1	NaN
    2	A2	B2	C2	D2	NaN
    3	A3	B3	C3	D3	NaN
    4	NaN	B2	NaN	D2	F2
    5	NaN	B3	NaN	D3	F3
    6	NaN	B6	NaN	D6	F6
    7	NaN	B7	NaN	D7	F
    """
    ```



2. join=inner仅保留列名相同的数据

    ```python
    pd.concat([df1, df2], ignore_index=True,join="inner",axis=0)
    """
        B   D
    0  B0  D0
    1  B1  D1
    2  B2  D2
    3  B3  D3
    4  B2  D2
    5  B3  D3
    6  B6  D6
    7  B7  D7
    """
    ```


## 拼贴Series
    ```python
    s = pd.Series(["X0", "X1", "X2", "X3"], index=["A", "B", "C", "D"])
    """
    A    X0
    B    X1
    C    X2
    D    X3
    """

    pd.concat([df1, s.to_frame().T], ignore_index=True)
    """
        A   B   C   D
    0  A0  B0  C0  D0
    1  A1  B1  C1  D1
    2  A2  B2  C2  D2
    3  A3  B3  C3  D3
    4  X0  X1  X2  X3
    """
    ```


## repeat rows

```python
import pandas as pd
df = pd.DataFrame({
    "a":[1,2,3,4,5],
    "b":[6,7,8,9,10]
})

pd.concat([df,*([df[df["b"] == 9]] *10)])
```

## append
已经废弃了