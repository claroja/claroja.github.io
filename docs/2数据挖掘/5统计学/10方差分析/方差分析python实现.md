# 方差分析

响应变量是啤酒的销售额(sales), 解释变量只有天气(weather). 天气分为(cloudy), 雨(rainy), 晴(sunny)3个水平.我们来检验天气变化会不会显著的影响啤酒的销售额.

## 方差分析
方差分析是用来**检验均值差**的方法. <font style="background: hotpink">我们可以使用t检验进行均值检验, 但在某些情况下, 单纯使用t检验是行不通的. 如果解释变量的水平大于2个, 要检验各个水平的均值之间是否存在显著性差异, 就要使用方差分析.</font>

在介绍t检验时, 我们研究的问题是服药前后体温是否存在显著性变化, 这时水平为2个的数据. 本节研究的问题是能否认为晴, 雨, 阴着3种天气变化显著影响了啤酒的销售额, 这时水平大于2个的数据.

要使用方差分析, 数据的总体必须服从正态分布, 另外各个水平内部的方差必须相等.

### 多重假设检验
反复检验导致显著性结果更易出现的问题叫做多重假设检验问题.
设显著性水平为0.05, 则出现第一类错误的概率就是5%.
现在连续进行2次检验, 每次检验的显著性水平都为0.05. 检验的规则是"如果至少有1次检验拒绝了零假设, 就接受备选假设". 在这种情况下, 出现第一类错误的概率就是1-0.95 x 0.95 = 0.0975, 约为10%, 超过了5%. 检验次数越多越容易拒绝零假设, 也就容易出现第一类错误.
以例题来说, 要检验晴, 雨, 阴3个水平中销售额的差, 就要分别对"晴,雨","雨,阴","晴,阴"这3个组合进行t检验, 这就导致了多重假设检验的问题.
而在方差分析中, 我们可以通过整体的家宴一次完成天气是否显著影响啤酒销售额的判断, 无需分别考察各个分类的情况.

### 方差的直观分析
方差分析的零假设和备选假设如下:
1. 零假设: 各水平之间均值相等
2. 备选假设: 个水平之间均值不相等

像天气状况, 鱼的种类等分类变量就叫做水平.
方差分析将数据的变化分为误差和效应, 并据此计算统计量F比:
$$
F比 = \frac{效应的方差}{误差的方差}
$$
在本例中, 效应就是"天气导致的销售额变化", 误差就是"无法通过天气这个变量解释的销售额变化"

我们使用方差来量化影响的大小."天气变化导致的数据方差"就是"天气导致的销售额变化". 误差的影响大小也可以通过计算残差的方差得到. 求这两个方差的比值, 并对它进行检验, 就是方差分析. 方差分析的英文是 Analysis of variance, 缩写为anova.

如果F比的值大, 就认为效应比误差的影响大. 当总体服从同方差正态分布时, F比的样本分布就叫做F分布. 通过F分布的累积分布函数计算p值, 当p值小于0.05时就拒绝零假设, 这个流程与t检验是一样的.


### 显著性差异与小提琴图
```python
## 用于数值计算的库
import numpy as np
import pandas as pd
import scipy as sp
from scipy import stats
## 用于绘图的库
from matplotlib import pyplot as plt
## 用于估计统计模型的库 (部分版本会报出警告信息)
import statsmodels.formula.api as smf
import statsmodels.api as sm

## 定义一组示例数据
weather = [
    "cloudy","cloudy",
    "rainy","rainy",
    "sunny","sunny"
]
beer = [6,8,2,4,10,12]

## 转换成数据帧
weather_beer = pd.DataFrame({
    "beer"   : beer,
    "weather": weather
})
print(weather_beer)
"""
   beer weather
0     6  cloudy
1     8  cloudy
2     2   rainy
3     4   rainy
4    10   sunny
5    12   sunny
"""

## 绘出箱形图
sns.boxplot(x = "weather",y = "beer",
            data = weather_beer, color='gray')

## 每种天气下销售额的均值
print(weather_beer.groupby("weather").mean())
"""
         beer
weather      
cloudy      7
rainy       3
sunny      11
"""


```


### 反差分析的手动实现

#### 计算组间偏差平方和和组内偏差平方和
偏差是平方和, 方差是偏差(平方和)的平均数.
首先计算效应, 即组间差异. 我们已经得到阴天的销售额均值是7(阴天时销售额的期望值是7万元).同理雨天的期望值是3万元, 晴天的期望值是11万元.

阴,雨,晴3中天气各有2天.在只考虑天气因素的情况下, 销售额的期望值如下:
```python
## 天气的影响 (对应 weather 变量)
effect = [7,7,3,3,11,11]
```
`effect`的方差可以用来计算组间差异. 下面计算组间偏差平方和, 它们是组间差异的分子.
```python
## 组间偏差平方和
mu_effect = sp.mean(effect)
squares_model = sp.sum((effect - mu_effect) ** 2 )
squares_model  # 64.000
```
从原始数据减掉效应, 就是组间的偏差, 计算组内偏差平方和:
```python
## 无法用天气来解释的部分, 即误差
resid = weather_beer.beer - effect
resid
"""
0   -1
1    1
2   -1
3    1
4   -1
5    1
"""
## 组内偏差平方和
squares_resid = sp.sum(resid ** 2)
squares_resid  # 6
```

#### 计算组间方差与组内方差
样本方差就是样本的偏差平方和除以样本容量得到的数值. 无偏方差的除数为样本容量减1. 同理, 方差分析中的组间方差和组内方差的分母也不是样本容量, 而是自由度.
组间差异的自由度取决于水平数量. 本例中有阴,雨,晴3个水平, 从中减去1, 得到自由度为2.
组内差异的自由度取决于样本容量和水平数量. 本例中样本容量为6, 从中减去水平数量3, 得到自由度3.
`df_model`为组间差异的自由度, `df_resid`为组内差异的自由度.
```python
df_model = 2 # 组间差异的自由度
df_resid = 3 # 组内差异的自由度
## 组间均方 (方差)
variance_model = squares_model / df_model
variance_model  # 32.000
## 组内均方 (方差)
variance_resid = squares_resid / df_resid
variance_resid  # 2.000

```

#### 方差分析: F比和P值
F比就是组间方差和组内方差的比
```python
## F 比
f_ratio = variance_model / variance_resid
f_ratio  # 0.025
```
通过`sp.stats.f.cdf`函数使用F分布的累积分布函数计算p值. 参数为F比的值和2个自由度:
```python
## p 值
1 - sp.stats.f.cdf(x=f_ratio,dfn=df_model,dfd=df_resid)
```
p值小于0.05, 所以可以认为天气显著影响了啤酒销售额.

方差分析把数据的效应和误差分离开来, 并将二者量化为方差. 效应为组间差异, 误差为组内差异.
组间方差与组内方差的比值就是统计量F比. 当总体服从正态分布时, F比服从F分布. 此时, 可以使用F分布的累积分布函数计算p值, 并与0.05比较.



### 解释变量为分类变量的正态线性模型
从正态线性模型的角度解释方差分析.
根据天气预测销售额的模型如下:
$$
啤酒销售额 \sim N(\beta_0 + \beta_1 \times 雨 + \beta_2 \times 晴, \sigma^2)
$$
变量`雨`在雨天时为1, 在其余天气时为0. 变量`晴`同理. 参数$\beta_1$代表雨天的影响程度, 参数$\beta_2$代表晴天的影响程度. 雨天和晴天之外的情况就是阴天, 当二者为0时只剩下$\beta_0$, 它代表阴天的影响程度.

使用`statsmodels`建模的操作过程与一元回归模型类似, 因而我们很少会意识到虚拟变量的存在.


### statsmodels中的方差分析
```python
## 建立正态线性模型
anova_model = smf.ols("beer ~ weather", 
                      data = weather_beer).fit()
```
使用`sm.stats.anova_lm`函数进行方差分析:
```python
## 方差分析的结果
print(sm.stats.anova_lm(anova_model, typ=2))
"""
          sum_sq   df     F    PR(>F)
weather     64.0  2.0  16.0  0.025095
Residual     6.0  3.0   NaN       NaN
"""
```
`sum_sq`表示组间偏差平方和与组内偏差平方和, df为自由度, 另外还有F值和P值. 根据自由度可以计算出样本容量和水平数量.

```python
anova_model.params
"""
Intercept           7.0
weather[T.rainy]   -4.0
weather[T.sunny]    4.0
dtype: float64
"""
```
把上述代码和数据公式放在一次观察:
$$
啤酒销售额 \sim N(\beta_0 + \beta_1 \times 雨 + \beta_2 \times 晴, \sigma^2)
$$
`Intercept`对应的就是$\beta_0$.阴天的销售额均值为7, 雨天的销售额均值为阴天的结果加上系数`weather[T.rainy]`, 即7-4=3. 同理, 晴天的销售额均值为 7 + 4 = 11.


### 使用模型分离效应和误差
```python
## 拟合值
fitted = anova_model.fittedvalues
fitted
"""
0     7.0
1     7.0
2     3.0
3     3.0
4    11.0
5    11.0
dtype: float64
"""
```
拟合值与各个水平的均值相等. 解释变量为分类变量的正态线性模型的预测值就是各水平的均值.

拟合值与真实值的差就是残差, 可以使用`anova_model.resid`获得残差
```python
## 残差
anova_model.resid
"""
0   -1.0
1    1.0
2   -1.0
3    1.0
4   -1.0
5    1.0
dtype: float64
"""
```


### 回归模型中的方差分析
正态线性模型中广泛应用了方差分析, 当解释变量为连续变量时, 方差分析依然有效.
```python
"""
beer	temperature
45.3	20.5
59.3	25
40.4	10
38	26.9
37	15.8
40.9	4.2
60.2	13.5
63.3	26
51.1	23.3
44.9	8.5
47	26.2
53.2	19.1
43.5	24.3
53.2	23.3
37.4	8.4
59.9	23.5
41.5	13.9
75.1	35.5
55.6	27.2
57.2	20.5
46.5	10.2
35.8	20.5
51.9	21.6
38.2	7.9
66	42.2
55.3	23.9
55.3	36.9
43.3	8.9
70.5	36.4
38.8	6.4
"""
## 读取数据
beer = pd.read_csv("data")

## 估计模型
lm_model = smf.ols(formula = "beer ~ temperature", 
                   data = beer).fit()
```
与解释变量为分类变量的模型类似, 我们可以用模型的拟合值与残差计算F比.
在求F比之前, 要定义自由度. 当解释变量为连续变量时, 组间差异的叫法变为模型自由度, 组内差异的叫法变为残差自由度.
当解释变量为分类变量时, 水平数减去1, 与此类似, 模型自由度为参与估计的参数个数减去1. 一元回归模型的系数只有截距和斜率2个, 因此模型自由度为1.
样本容量减去参与估计的参数个数就是残差自由度. 样本容量为30, 从中减去参数个数2, 得到残差的自由度为28.
```python
df_lm_model = 1  # 模型自由度
df_lm_resid = 28 # 残差自由度
```
计算F比:
```python
## 拟合值
lm_effect = lm_model.fittedvalues
## 残差
lm_resid = lm_model.resid
## 气温的影响力度
mu = sp.mean(lm_effect)
squares_lm_model = sp.sum((lm_effect - mu) ** 2)
variance_lm_model = squares_lm_model / df_lm_model
## 残差的方差
squares_lm_resid = sp.sum((lm_resid) ** 2)
variance_lm_resid = squares_lm_resid / df_lm_resid
## F 比
f_value_lm = variance_lm_model / variance_lm_resid
f_value_lm  # 28.447
```
打印方差分析表
```python
## 参考: p 值 (结果在截断后约等于 0)
1 - sp.stats.f.cdf(
    x=f_value_lm,dfn=df_lm_model,dfd=df_lm_resid)

"""
                  sum_sq    df          F    PR(>F)
temperature  1651.532489   1.0  28.446984  0.000011
Residual     1625.582178  28.0        NaN       NaN
"""
```







