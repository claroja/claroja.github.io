

# 数据准备
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
    s = pd.Series(["X0", "X1", "X2", "X3"], index=["A", "B", "C", "D"])
    ```

```python
pd.concat(
    objs,
    axis=0,
    join="outer",
    ignore_index=False,
    keys=None,
    levels=None,
    names=None,
    verify_integrity=False,
    copy=True,
)
```

# 纵向拼贴 axis = 0

1. axis控制拼贴的方向

    ```python
    pd.concat([df1, df2], ignore_index=False,axis=0)
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

2. `ignore_index`相当于合并后进行`reset_index()`, 重新生成索引

    ```python
    pd.concat([df1, df2], ignore_index=True,axis=0)
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

3. `join`控制拼贴的方式,和`merge`一样 

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

4. 拼贴Series

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



# 横向拼贴(推荐使用join)
`concate`只有`inner`和`outer`, 而`join`还可以实现`left`和`right`
1. axis=1 横向拼贴

    ```python
    pd.concat([df1, df2], ignore_index=False,axis=1)
    """
        A    B    C    D    B    D    F
    0   A0   B0   C0   D0  NaN  NaN  NaN
    1   A1   B1   C1   D1  NaN  NaN  NaN
    2   A2   B2   C2   D2   B2   D2   F2
    3   A3   B3   C3   D3   B3   D3   F3
    4  NaN  NaN  NaN  NaN   B6   D6   F6
    5  NaN  NaN  NaN  NaN   B7   D7   F7
    """
    ```

2. `ignore_index`相当于合并后进行`reset_index()`, 重新生成索引, coloum全部置换了

```python
"""
     0    1    2    3    4    5    6
0   A0   B0   C0   D0  NaN  NaN  NaN
1   A1   B1   C1   D1  NaN  NaN  NaN
2   A2   B2   C2   D2   B2   D2   F2
3   A3   B3   C3   D3   B3   D3   F3
4  NaN  NaN  NaN  NaN   B6   D6   F6
5  NaN  NaN  NaN  NaN   B7   D7   F7
"""
```

3.`join`控制拼贴的方式,和`merge`一样 

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

``

参考:
https://pandas.pydata.org/docs/user_guide/merging.html#concatenating-objects