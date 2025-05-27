# 曼恩惠特尼U检验

### 曼恩惠特尼U检验
**曼恩惠特尼U检验**(Mann-Whitney rank test)是在没有配对数据,<font style="background: yellow">无法假定两个独立样本的总体服从正态分布时对中位数差异的检验</font>, 简称U检验, 也称曼恩惠特尼秩和检验.
考虑与独立样本的t检验相同的情况, 使用前5行:

```python
import pandas as pd
df = pd.DataFrame(
    {
        "A":[47,50,37,60,39],
        "B":[49,52,54,48,51]
    }
)

```
使用U检验时, 首先需要将两个独立样本中的数据按值从小到达的顺序转化为其所在的合并样本中的名次, 然后检验基于两个样本名次计算出的U值, 以此来评估两组样本数据的平均名次间是否存在显著差异.
下面首先对全体数据按从小到大的顺序进行排序:
```python
rank = stats.rankdata(np.concatenate([toy_df['A'],
                                      toy_df['B']]))
rank_df = pd.DataFrame({'A': rank[:5],
                        'B': rank[5:10]}).astype(int)
rank_df
"""
A	B
0	3	5
1	6	8
2	1	9
3	10	4
4	2	7
"""
```
然后,使用A的名次之和(秩)作为检验统计量. 这里的A的名次和是3+6+1+10+2=22. 使用名次之和的理由是, 如果A中好的名次集中在一起的话, A的名次之和就会变小, 相反如果A中有不好的名次集中在一起, A的名次之和就会增大. 名次之和很好的反映了两个标本之间的数据偏差.
准确地说, U检验的检验统计量是从A的名次之中减去$nl(nl+l)/2$,其中$nl$是A中的元素个数.
```python
n1 = len(rank_df['A'])
u = rank_df['A'].sum() - (n1*(n1+1))/2
u  # 7.000
```
$nl(nl+l)/2$是将检验统计量的最小值设为0的数量, 也就是说, A的名次之和最小时对应于A中好的名次都集中在一起的情况, 这时的名次之和与$nl(nl+l)/2$一致. 在A中构造一个号的名次全部集中在一起的情况的数据来确认:
```python
rank_df = pd.DataFrame(np.arange(1, 11).reshape(2, 5).T,
                       columns=['A', 'B'])
rank_df
"""

A	B
0	1	6
1	2	7
2	3	8
3	4	9
4	5	10
"""
```
计算这时的检验统计量.
```python
u = rank_df['A'].sum() - (n1*(n1+1))/2
u  # 0.000
```
值很小.
如果A的名次不好会是怎样呢?
```python
rank_df = pd.DataFrame(np.arange(1, 11).reshape(2, 5)[::-1].T,
                       columns=['A', 'B'])
rank_df
"""
	A	B
0	6	1
1	7	2
2	8	3
3	9	4
4	10	5
"""
u = rank_df['A'].sum() - (n1*(n1+1))/2
u  # 25.000
```
这次的值很大. 不管在A上聚集的排名是好的还是坏的, 两个样本的中位数都不会有偏差. 因此U检验要进行双侧检验.
可以使用U检验表查找临界值, 这里使用`scipy.stats`, 通过`mannwhitneyu`函数执行U检验.
```python
u, p = stats.mannwhitneyu(training_ind['A'], training_ind['B'],
                          alternative='two-sided')
p  # 0.059
```
结果与独立样本的t检验相同, 接受零假设. 和威尔科克森符号秩检验时一样, U检验在总体服从正态分布的情况下, 其检验功效比独立样本的t检验低.