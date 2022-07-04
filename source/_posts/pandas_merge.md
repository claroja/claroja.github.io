# merge
```python
pd.merge(
    left,
    right,
    how="inner",
    on=None,
    left_on=None,
    right_on=None,
    left_index=False,
    right_index=False,
    sort=True,
    suffixes=("_x", "_y"),
    copy=True,
    indicator=False,
    validate=None,
)
```

# 可以是单个key,也可以是多个key
## 单key
```python
left = pd.DataFrame(
    {
        "key": ["K0", "K1", "K2", "K3"],
        "A": ["A0", "A1", "A2", "A3"],
        "B": ["B0", "B1", "B2", "B3"],
    }
)


right = pd.DataFrame(
    {
        "key": ["K0", "K1", "K2", "K3"],
        "C": ["C0", "C1", "C2", "C3"],
        "D": ["D0", "D1", "D2", "D3"],
    }
)
pd.merge(left, right, on="key")
```
[1.png](1.png)


# 多个key

```python
left = pd.DataFrame(
    {
        "key1": ["K0", "K0", "K1", "K2"],
        "key2": ["K0", "K1", "K0", "K1"],
        "A": ["A0", "A1", "A2", "A3"],
        "B": ["B0", "B1", "B2", "B3"],
    }
)


right = pd.DataFrame(
    {
        "key1": ["K0", "K1", "K1", "K2"],
        "key2": ["K0", "K0", "K0", "K0"],
        "C": ["C0", "C1", "C2", "C3"],
        "D": ["D0", "D1", "D2", "D3"],
    }
)

result = pd.merge(left, right, on=["key1", "key2"])

```

[2.png](2.png)




# 关联查询


Merge method|SQL Join Name|Description
--|--|--
left|LEFT OUTER JOIN|Use keys from left frame only
right|RIGHT OUTER JOIN|Use keys from right frame only
outer|FULL OUTER JOIN|Use union of keys from both frames
inner|INNER JOIN|Use intersection of keys from both frames
cross|CROSS JOIN|Create the cartesian product of rows of both frames


```python
result = pd.merge(left, right, how="left", on=["key1", "key2"])
```

[3.png](3.png)

```python
result = pd.merge(left, right, how="right", on=["key1", "key2"])
```
[4.png](4.png)
```python
result = pd.merge(left, right, how="outer", on=["key1", "key2"])
```
[5.png](5.png)

```python
result = pd.merge(left, right, how="inner", on=["key1", "key2"])
```
[6.png](6.png)

```python
result = pd.merge(left, right, how="cross")
```
[7.png](7.png)

# 使用索引进行merge
推荐使用`concate`, 


```python
left = pd.DataFrame(
    {"A": ["A0", "A1", "A2"], "B": ["B0", "B1", "B2"]}, index=["K0", "K1", "K2"]
)


right = pd.DataFrame(
    {"C": ["C0", "C2", "C3"], "D": ["D0", "D2", "D3"]}, index=["K0", "K2", "K3"]
)
```

left merge on index
```python
result = left.join(right)
```
[8.png](8.png)


left outer merge on index
```python
result = left.join(right, how="outer")
# 等价
result = pd.merge(left, right, left_index=True, right_index=True, how="outer")


```
[9.png](9.png)


left inner merge on indexes
```python
result = left.join(right, how="inner")
# 等价
result = pd.merge(left, right, left_index=True, right_index=True, how="inner")

```
[9.png](9.png)


参考:
https://pandas.pydata.org/docs/user_guide/merging.html#database-style-dataframe-or-named-series-joining-merging
