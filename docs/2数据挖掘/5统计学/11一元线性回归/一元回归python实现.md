# 一元回归

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

## 读入数据
beer = pd.read_csv("data")
## 建模, 使用statsmodels建模
lm_model = smf.ols(formula = "beer ~ temperature", 
                   data = beer).fit()
```

代码中用到了`smf.ols`函数. OLS是普通个最小二乘法英文Oridinary least Squares的缩写. 它与假设总体服从正态分布时的最大似然法的结果相等.
定义模型结构的参数是`formula`.$beer \sim temperature$代表模型的响应变量为`beer`, 解释变量为`temperature`. 通过改变`formula`的值, 我们可以定义多种模型
`fit()`方法用来估算参数.


```python
## 打印估计的结果
lm_model.summary()
"""
## 表格1
OLS Regression Results
Dep. Variable:	beer	R-squared:	0.504
Model:	OLS	Adj. R-squared:	0.486
Method:	Least Squares	F-statistic:	28.45
Date:	Mon, 26 Feb 2018	Prob (F-statistic):	1.11e-05
Time:	15:04:17	Log-Likelihood:	-102.45
No. Observations:	30	AIC:	208.9
Df Residuals:	28	BIC:	211.7
Df Model:	1		
Covariance Type:	nonrobust	


## 表格2
coef	std err	t	P>|t|	[0.025	0.975]
Intercept	34.6102	3.235	10.699	0.000	27.984	41.237
temperature	0.7654	0.144	5.334	0.000	0.471	1.059
## 表格3
Omnibus:	0.587	Durbin-Watson:	1.960
Prob(Omnibus):	0.746	Jarque-Bera (JB):	0.290
Skew:	-0.240	Prob(JB):	0.865
Kurtosis:	2.951	Cond. No.	52.5
"""
```
在表格2中, `Intercept`和`Temperature`对应以下模型中的$\beta_0,\beta_1$:
$$
\text{啤酒销售额} \sim N(\beta_0 + \beta_1 \times \text{气温,} \sigma^2)
$$
其中, `Intercept`是截距, $\beta_1$也叫斜率. `Coef`列是系数的值, 右边的列依次为系数的标准误差, t值, 零假设为"系数为0"的p值, 95%置信区间下置信界限.
p值很小, 此时认为气温的系数与0之间存在显著性差异.
通过上表可知 ,气温会影响啤酒销售额. 系数的值为0.7654为正数, 说明气温越高, 啤酒的销售额越高.

在表格1中:
1. `Dep.Variable`: 响应变量的名称,`Dep`为`Depended`的缩写
2. `Model/Method`: 表示这里使用了普通最小二乘法(OLS)
3. `Date/Time`: 对模型进行估计的日期和时间
4. `No.Observations`: 样本容量
5. `Df Residuals`: 样本容量减去参与估计的参数个数
6. `Df Model`: 用到的解释变量的个数(不是参数个数)
7. `Covariance Type`: 协方差类型, 默认为`nonrobust`
8. `R-squared/Adj.R-squared`: 决定系数与修正决定系数
9. `F-statistic/Prob(F-statistic)`: 方差分析的结果
10. `Log-Likelihood`: 最大对数似然
11. `AIC`: 赤池信息量准则
12. `BIC`: 贝叶斯信息量准则

### 使用AIC进行模型选择
模型里只有气温这一个解释变量, 我们不妨对比一下它和空模型的AIC.
建立一个空模型, 当没有解释变量时, 定义为$beer \sim 1$.

```python
## 空模型
null_model = smf.ols("beer ~ 1", data = beer).fit()
## 空模型的 AIC
null_model.aic  # 227.942
## 含有解释变量的模型的 AIC
lm_model.aic  # 208.909
```
含有解释变量的模型的AIC更小, 所以认为"包含解释变量(气温)的模型预测精度更高", 即用来预测啤酒销售额的模型应该考虑气温因素.

下面分析计算AIC的值, 以加深印象.
回顾一下AIC的计算式:
$$
AIC = -2 \times (最大对数似然 - 参与估计的参数个数)
$$
```python
## 对数似然度
lm_model.llf
## 解释变量的个数
lm_model.df_model
## AIC
-2*(lm_model.llf - (lm_model.df_model + 1))  # 208.909
```


### 进行预测
```python
## 预测
lm_model.predict(pd.DataFrame({"temperature":[0]}))
```

### 获取残差
模型的评估以分析残差为主. 正态线性模型的残差应该服从均值为0的正态分布, 所以这里我们要检查残差是否满足这个条件.
```python
## 获得残差
resid = lm_model.resid
resid.head(3)
"""
0   -5.001481
1    5.554095
2   -1.864491
dtype: float64
"""
```
为了加深印象, 我们手动计算一下残差:
$$
residual = y - \hat{y}
$$
其中, $\hat{y}=\beta_0 + \beta_1 \times 气温$.
```python
## 计算拟合值
y_hat = beta0 + beta1 * beer.temperature
## 获得拟合值
lm_model.fittedvalues.head(3)
## 手动计算残差
(beer.beer - y_hat).head(3)
```

### 决定系数
在`summary`函数的输出中, R-squared叫做决定系数. 决定系数用来评估模型与已知数据的契合度:
$$
R^2 = \frac{\sum_{i=1}^n(\hat{y}-\mu)^2}{\sum_{i=1}^n(y-\mu)^2}
$$
其中,$y$是响应变量, $\hat{y}$是模型的预测值, $\mu$是$y$的均值. 如果响应变量的预测值和真实值相等, $R^2$就为1.
使用python计算决定系数.
```python
## 决定系数
mu = sp.mean(beer.beer)
y = beer.beer
yhat = lm_model.predict()
 
sp.sum((yhat - mu)**2) / sp.sum((y - mu)**2)  # 0.504
## 也可以直接获取
lm_model.rsquared  # 0.504
```

下面介绍决定系数的具体含义.
残杀的计算公式是$residual = y - \hat{y}$, 变形可得$y=\hat{y}+residual$, 决定系数的分母可以变形为:
$$
\sum_{i=1}^n(y-\mu)^2 = \sum_{i=1}^n(\hat{y}-\mu)+\sum_{i=1}^n residual^2
$$
响应变量的差异等于模型可以预测的差异加上模型不可预测的残差平方和. 因此, 模型可以预测的差异在整体差异中所占的比例就是决定系数.
```python
## 计算模型可以预测的差异与模型不可预测的残差平方和的总和
sp.sum((yhat - mu)**2) + sum(resid**2) # 3277.115
## 等于总体的差异
sp.sum((y - mu)**2)  # 3277.115
## 验证
1 - sp.sum(resid**2) / sp.sum((y - mu)**2)  # 0.504
```

### 修正决定系数
修正决定系数考虑了解释变量过多的惩罚指标, 通过自由度修正了决定系数.
解释变量越多, 决定系数越大. 决定系数过大会导致过拟合, 因此需要对决定系数进行修正.修正决定系数的数学公式如下:
$$
R^2 = 1 - \frac{\sum_{i=1}^n residual^2/(N-s-1)}{\sum_{i=1}^n(y-\mu)^2/(N-1)}
$$
其中, s为解释变量的个数.

```python
## 1. 修正决定系数的实现
n = len(beer.beer)
s = 1
1 - ((sp.sum(resid**2) / (n - s - 1)) / 
    (sp.sum((y - mu)**2) / (n - 1)))  # 0.486

## 2. 直接调用
lm_model.rsquared_adj  # 0.486
```
### 分位图
分位图用来比较理论分位数(theoretical quantiles)与实际分位数(sample quantiles)的散点图, 也叫QQ图. Q是quantile的缩写

```python
## 分位图
fig = sm.qqplot(resid, line = "s")


## 递增排列
resid_sort = resid.sort_values()
resid_sort.head()
## 最小的数据所在位置
1 / 31
## 按样本容量变换为 0 到 1 的范围, 得到理论累积概率
## 
nobs = len(resid_sort)
cdf = np.arange(1, nobs + 1) / (nobs + 1)
cdf
## 累积概率对应的百分位数
ppf = stats.norm.ppf(cdf)
ppf
## 参考: 横轴为理论分位数, 纵轴为已排序的实际数据, 绘出的散点图就是分位图
fig = sm.qqplot(resid, line = "s")

plt.plot(stats.norm.ppf(cdf), resid_sort, "o", color = "black")
```


### 根据summary函数的输出分析残差
观察第3个表
`Prob(Omnibus)`和`Prob(JB)`是残差的正态性检验结果.
1. 零假设: 残差服从正态分布
2. 备选假设: 残差不服从正态分布

这里p值大于0.05. 表示服从正态分布, 但此处的检验只能用来判断结果是否存在明显问题.
要判断残差是否服从正态分布, 还要观察Skew(偏度)和Kurtosis(峰度)的值.

偏度表示直方图左右非对称性的方向和程度. 偏度大于0, 图形右侧更宽. 正态分布左右对称, 所以偏度为0. 偏度的数学公式如下:
$$
Skew = E[\frac{(x-\mu)^3}{\sigma^3}]
$$
其中, `E()`为求期望值的函数, x为随机变量(此处为残差),$\mu$为x的均值, $\sigma$为x的样本标准差.

峰度表示直方图中心附近的尖锐程度. 峰度越高, 图形显得越尖锐. 正态分布的峰度为3. 峰度的计算公式为:
$$
Kurtosis = E[\frac{(x-\mu)^4}{\sigma^4}]
$$

`Durbin-Watson`表示残差的自相关程度, 如果它的值在2附近, 就说明没有什么问题. 在分析时间序列的数据时必须判断它是否在2附近.




