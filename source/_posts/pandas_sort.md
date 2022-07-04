# 1.sort_values应用
1）单行排序
```python
df.sort_values(by=['col1'])
```
2）多行排序
```python
df.sort_values(by=['col1', 'col2'])
```


# 2.sort_index应用
index不能通过sort_values传入，所以有单独的方法
```python
df = pd.DataFrame([1, 2, 3, 4, 5], index=[100, 29, 234, 1, 150],
                  columns=['A'])
df.sort_index()
```