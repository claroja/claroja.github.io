
# 数据准备
```python
import pandas as pd
df = pd.DataFrame({
    "account":["383080","383080","383080","412290","412290","412290","412290","412290","218895","218895","218895","218895"],
    "order":["10001","10001","10001","10005","10005","10005","10005","10005","10006","10006","10006","10006"],
    "ext price":[235.83,232.32,107.97,2679.36,286.02,832.95,3472.04,915.12,3061.12,518.65,216.9,-72.18]
    })
```
[原始](1.png)

# 聚合
## 基础理解
求每个order的总价
```python
df.groupby('order')["ext price"].sum()
"""
order
10001     576.12
10005    8185.49
10006    3724.49
"""
```
[聚合](2.png)

## DataFrameGroupBy与SeriesGroupBy对象
```python
df.groupby("order")  # <pandas.core.groupby.generic.DataFrameGroupBy 对象，注意是DataFrameGroupBy
df.groupby("order").sum()  
# 1. 因为account不能sum，所以结果自动忽略
# 2. goupby的column的value，作为index
"""
       ext price
order           
10001     576.12
10005    8185.49
10006    3724.49
"""
# 3. 可以从DataFrameGroupBy对象中按列名取出SeriesGroupBy
df.groupby("order")["ext price"]  #　pandas.core.groupby.generic.SeriesGroupBy 对象，注意是SeriesGroupBy
df.groupby("order")["ext price"].sum() # 分组列自动作为索引
"""
order
10001     576.12
10005    8185.49
10006    3724.49
"""
# 4. 不将分组列作为索引
df.groupby("A", as_index=False).sum() # 不将分组列作为索引
"""
  gender  score
0    boy  143.0
1   girl  114.0
"""
```
## 定制聚合结果

```python
df.groupby("order").agg(np.sum)
df.groupby("order").agg([np.sum, np.mean, np.std]) # 同时计算多个聚合
df.groupby("order").agg([lambda x: x.max() - x.min()]) # 自定义聚合函数
df.groupby("order").agg({'ext price': np.sum,
			         		'account': lambda x: len(x)}) # 对不同该类进行聚合,`ext price'列求和，'account`列计算个数
```


# 分组不聚合

## 只进行分组
group对象apply是对每个分组对象操作，既lambda中的x。
```python
df.groupby('order').apply(lambda x: x.sort_values('ext price')).reset_index(drop=True) # 分组后根据成绩排序
```


## transform

如何计算每个商品占订单的比例呢?使用`transform`则仅仅需要两步
```python
df["Order_Total"] = df.groupby('order')["ext price"].transform('sum')
"""
0      576.12
1      576.12
2      576.12
3     8185.49
4     8185.49
5     8185.49
6     8185.49
7     8185.49
8     3724.49
9     3724.49
10    3724.49
11    3724.49
"""
df["Percent_of_Order"] = df["ext price"] / df["Order_Total"]
```
[transform](3.png)

这相当于通过`merge`来实现
```python
order_total = df.groupby('order')["ext price"].sum().rename("Order_Total").reset_index()
"""
   order  Order_Total
0  10001       576.12
1  10005      8185.49
2  10006      3724.49
"""
df_1 = df.merge(order_total)
"""
   account  order  ext price  Order_Total
0   383080  10001     235.83       576.12
1   383080  10001     232.32       576.12
2   383080  10001     107.97       576.12
3   412290  10005    2679.36      8185.49
4   412290  10005     286.02      8185.49
5   412290  10005     832.95      8185.49
6   412290  10005    3472.04      8185.49
7   412290  10005     915.12      8185.49
8   218895  10006    3061.12      3724.49
9   218895  10006     518.65      3724.49
10  218895  10006     216.90      3724.49
11  218895  10006     -72.18      3724.49
"""
df_1["Percent_of_Order"] = df_1["ext price"] / df_1["Order_Total"]
"""
   account  order  ext price  Order_Total  Percent_of_Order
0   383080  10001     235.83       576.12          0.409342
1   383080  10001     232.32       576.12          0.403249
2   383080  10001     107.97       576.12          0.187409
3   412290  10005    2679.36      8185.49          0.327330
4   412290  10005     286.02      8185.49          0.034942
5   412290  10005     832.95      8185.49          0.101759
6   412290  10005    3472.04      8185.49          0.424170
7   412290  10005     915.12      8185.49          0.111798
8   218895  10006    3061.12      3724.49          0.821890
9   218895  10006     518.65      3724.49          0.139254
10  218895  10006     216.90      3724.49          0.058236
11  218895  10006     -72.18      3724.49         -0.019380
"""
```



# 过滤
```python
df.groupby('order').filter(lambda x: len(x) > 3) # 分组后个数大于2的组，只有girl
```
参考:
https://pbpython.com/pandas_transform.html
https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.groupby.html
https://pandas.pydata.org/pandas-docs/stable/user_guide/groupby.html#aggregation