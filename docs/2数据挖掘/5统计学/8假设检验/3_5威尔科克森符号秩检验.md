# 威尔科克森符号秩检验

### 威尔科克森符号秩检验
**威尔科克森符号秩检验**(Wilcoxon signed-rank test)是对配对样本<font style="background: yellow">不能假定**中位数差值服从正态分布时的中位数差值的检验.</font> 需要注意的是, 与配对样本的t检验不同, 这里是对中位数之差的检验.
作为具体的例子, 我们使用与配对t检验相同的数据的前6行:
```python
import pandas as pd
df = pd.DataFrame(
    {
        "前":[59,52,55,61,59,45],
        "后":[41,63,68,59,84,37]
    }
)
```
因为是配对数据, 所以还是重点关注数据的差异值
```python
diff = toy_df['后'] - toy_df['前']
toy_df['差'] = diff
toy_df
"""
	前	后	差
0	59	41	-18
1	52	63	11
2	55	68	13
3	61	59	-2
4	59	84	25
5	45	37	-8
"""
```
从这里开始, 将与之前的方法完全不同. 在威尔科克森符号秩检验中, 是按照名次的顺序进行检验的.
首先, 按差的绝对值从小到大排序, 使用`scipy.stats`的`rankdata`函数可以方便的排序:
```python
rank = stats.rankdata(abs(diff)).astype(int)
toy_df['名次'] = rank
toy_df
"""
	前	后	差	名次
0	59	41	-18	5
1	52	63	11	3
2	55	68	13	4
3	61	59	-2	1
4	59	84	25	6
5	45	37	-8	2
"""
```
然后, 求出差的符号为负的名次之和, 以及差的符号为正的名词之和, 分别用`r_minus`和`r_plus`表示. 这里`r_minus`为5+1+2=8,`r_plus`为3+4+6=13.
```python
r_minus = np.sum((diff < 0) * rank)
r_plus = np.sum((diff > 0) * rank)

r_minus, r_plus  # (8, 13)
```

`r_minus`和`r_plus`中较小的是检验统计量. 这里`r_minus`比较小, 所以检验统计量是8. 威尔科克森符号秩检验是单侧检验, 当检验统计量比临界值小时拒绝零假设.

为什么可以用这样的检验统计量进行中位数之差的检验呢? 我们用稍微极端的例子验证一下. 下面的数据是肌肉锻炼后的测试结果, 所有人都提高了, 这时的中位数存在明显的差异.
```python
toy_df['后'] = toy_df['前'] + np.arange(1, 7)
diff = toy_df['后'] - toy_df['前']
rank = stats.rankdata(abs(diff)).astype(int)
toy_df['差'] = diff
toy_df['名次'] = rank
toy_df
"""
前	后	差	名次
0	59	60	1	1
1	52	54	2	2
2	55	58	3	3
3	61	65	4	4
4	59	64	5	5
5	45	51	6	6
"""
```
试着分别计算差为负的名次之和以及差为正的名次之和.
```python
r_minus = np.sum((diff < 0) * rank)
r_plus = np.sum((diff > 0) * rank)

r_minus, r_plus  # (0, 21)
```
因为没有一个数据是负的, 所以检验统计量是0. 如果差异存在偏差, 检验统计量就会变小.
另外, 还要考虑到肌肉锻炼后, 有的人的测试结果提高了, 有的人的测试结果下降了的情况.
```python
toy_df['后'] = toy_df['前'] + [1, -2, -3, 4, 5, -6]
diff = toy_df['后'] - toy_df['前']
rank = stats.rankdata(abs(diff)).astype(int)
toy_df['差'] = diff
toy_df['名次'] = rank
toy_df
"""
	前	后	差	名次
0	59	60	1	1
1	52	50	-2	2
2	55	52	-3	3
3	61	65	4	4
4	59	64	5	5
5	45	39	-6	6
"""
```
试着分别计算差为负的名次之和以及差为正的名次之和
```python
r_minus = np.sum((diff < 0) * rank)
r_plus = np.sum((diff > 0) * rank)

r_minus, r_plus  # (11, 10)
```
因为提高的人和下降的人差值差不多, 所以`r_minus`和`r_plus`的值很接近. 也就是说, 检验统计量是相当大的值.
像这样, 肌肉锻炼前后的差值越大, `r_minus`和`r_plus`的差值也越大, 检验统计量越小. 根据这个理论, 如果检验统计量低于临界值, 则中位数有差异.
在手工计算的情况下, 可以从符号秩检验临界值表中查找临界值后, 再与检验统计量进行比较完成检验. `scipy.stats`可以用`wilcoxon`函数进行威尔科克森符号秩检验, 该函数在计算符号秩之后进行标准化, 并以正态分布进行检验, 因此会得到与这里说明的检验统计量不同的结果, 但基本原理没有差异.
对`trainning_rel`试着执行`wilcoxon`函数. `wilcoxon`函数的参数可以是两个样本数据, 也可以是差的数据, 两种情况都可以输出相同的结果:
```python
T, p = stats.wilcoxon(training_rel['前'], training_rel['后'])
p  # 0.038
T, p = stats.wilcoxon(training_rel['后'] - training_rel['前'])
p  # 0.038
```
结果是拒绝零假设, 这和配对样本的t检验时的结论是一样的.
威尔科克森符号秩检验即使在总体服从正态分布的情况下也可以使用. 但是, 如果总体服从正态分布, 则威尔D的检验功效比配对样本的t检验要低. 我们来通过模拟确认这件事.
假设差值服从$N(3,4^2)$, 我们准备1万组样本容量为20的样本数据.
```python
n = 10000
diffs = np.round(stats.norm(3, 4).rvs(size=(n, 20)))
```
因为差值不是0, 所以希望结果能拒绝零假设. 首先试着考察配对样本的t检验的检验功效:
```python
cnt = 0
alpha = 0.05
for diff in diffs:
    t, p = stats.ttest_1samp(diff, 0)
    if p < alpha:
        cnt += 1
cnt / n  # 0.883
```
然后进行威尔科克森符号秩检:
```python
cnt = 0
alpha = 0.05
for diff in diffs:
    T, p = stats.wilcoxon(diff)
    if p < alpha:
        cnt += 1
cnt / n  # 0.874
```
配对样本的t检验的检验功效稍微大一些.记住, 如果总体服从正态分布, 使用配对样本的t检验的检验功效更高.