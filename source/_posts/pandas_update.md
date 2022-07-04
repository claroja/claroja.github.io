
# 直接赋值

1. 根据[pandas_select](/pandas_select/)先进行选择
2. 直接使用`=`号赋值

# apply

映射替换一列的所有数据

```python
fruitToPrice = {
    "apple":10,
    "banana":4,
    "watermelon":20
}

df["fruit"].apply(lambda x:fruitToPrice[x])
```


