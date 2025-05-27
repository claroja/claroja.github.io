# agg聚合

## 最佳实践

1. 原理和SQL的`group by`一样
2. 同时应用多个聚合函数



## 测试数据


```python
import pandas as pd
df = pd.DataFrame({
                "name": ["wang","wei","zhao","li","wu"],
                "gender": ["boy","girl","girl","boy","girl"],
                "score": [56,67,47,87,None]
                })

"""

name	gender	score
0	wang	boy	56.0
1	wei	girl	67.0
2	zhao	girl	47.0
3	li	boy	87.0
4	wu	girl	Na
"""


```



## [内置的快捷函数](https://pandas.pydata.org/docs/user_guide/groupby.html#built-in-aggregation-methods)

1. 查看非空的值
    ```python
    df.groupby('gender').sum().reset_index()
    df.groupby('gender').agg('sum').reset_index()

    """
	gender	score
    0	boy	143.0
    1	girl	114.0
    """
    ```


## [自定义函数](https://pandas.pydata.org/docs/user_guide/groupby.html#aggregation-with-user-defined-functions)

```python
df.groupby('gender').agg(lambda x: x.sum())

"""

gender	name	score
0	boy	wangli	143.0
1	girl	weizhaowu	114.0
"""

```
✨和内置的`sum()`函数不一样的地方是, 自定义的`x.sum()`的结果对`object`类型也起到的作用. 说明pandas内置的`sum()`函数是排除了类型为`object`列的

## 同时应用多个聚合函数

`agg()`方法的
1. 形参是聚合后的列名
2. 实参元组
    1. 第一位, 是要应用的方法对应的列
    2. 第二位, 是分组应用的方法

```python

df.groupby('gender').agg(
    count_gender =("gender", lambda x: len(x)/len(df)),
    proportion_gender = ("gender", lambda x: len(x))
    ).reset_index()

"""
	gender	count_gender	proportion_gender
0	boy	0.4	2
1	girl	0.6	3
"""

```


二次分组求占比.

```python
df_all_count = df_all.groupby(['Deck', 'Pclass']).count()[['Name']].rename(columns={'Name': 'Count'}).reset_index()
df_all_count['deck_sum'] = df_all_count.groupby('Deck')['Count'].transform(sum)
df_all_count['deck_ratio'] = df_all_count['Count']/df_all_count['deck_sum']
```


本小节同时参考:
1. https://pandas.pydata.org/docs/user_guide/groupby.html#applying-multiple-functions-at-once
2. https://pandas.pydata.org/docs/user_guide/groupby.html#named-aggregation





