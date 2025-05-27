# 泊松回归

概率分布为泊松分布, 联系函数为对数函数的广义线性模型叫做泊松回归. 解释变量可以有多个, 连续型和分类型的解释变量也可以同时存在.
分析不同气温与啤酒销量的关系. 构造不同气温下的销量和数学模型, 其线性预测算子如下:
$$
\beta_0 + \beta_1 \times 气温
$$

### 泊松回归的推导
如果联系函数为对数函数, 则啤酒销量与气温的关系如下:
$$
ln 啤酒销量 = \beta_0 + \beta_1 \times 气温
$$

对两边取指数, 变形如下:
$$
啤酒销量 = exp(\beta_0 + \beta_1 \times 气温)
$$

指数函数的值不可能是负数, 因此飞铲格式处理计数型数据. 下面通过上式进行销量均值的预测.
假设我们得到了一份相关数据, 需要分析气温是否影响啤酒销量.
啤酒向量Y服从强度$\lambda$(即均值)的泊松分布:
$$
啤酒销量: Y \sim Pois[y|exp(\beta_0 + \beta_1 \times 气温)]
$$
泊松分布的概率质量函数如下:
$$
Pois(y|\lambda)= \frac{e^{-\lambda}\lambda^y}{y!}
$$

### python实现

```python
"""
beer_number	temperature
6	17.5
11	26.6
2	5
4	14.1
2	9.4
2	7.8
3	10.6
5	15.4
6	16.9
7	21.2
6	17.6
11	25.6
4	11.1
16	31.3
4	5.8
13	25.1
5	17.5
7	21.8
3	9.2
5	10.9
14	29
22	34
7	14.4
11	25.8
18	31.3
17	31.8
2	7.6
2	6.2
4	10.1
16	31.3
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

## 读取数据
beer = pd.read_csv("data")
## 建模
mod_pois = smf.glm("beer_number ~ temperature", beer, 
                   family=sm.families.Poisson()).fit()
mod_pois.summary()
```


### 模型选择
```python
## 空模型
mod_pois_null = smf.glm(
    "beer_number ~ 1", data = beer, 
    family=sm.families.Poisson()).fit()

## 对比 AIC
print("空模型　：", mod_pois_null.aic.round(3))  # 空模型　： 223.363
print("气温模型：", mod_pois.aic.round(3))  # 气温模型： 119.343
```


### 回归系数的含义
当联系函数不是恒等函数时, 回归系数的含义就会不同. 这里介绍联系函数为对数函数时系数的含义.

对数的一个性质就是把加法变为乘法. 在正态线性模型中, 回归系数的含义是"气温每升高1度, 销售额增加y元", 这里的含义则是"气温每升高1度, 销量变为y倍".
下面计算气温每升高1度时 销量变为多少倍, 比较当气温为1度和2度时销量的预测值:
```python
## 气温为 1 度时销售数量的期望
exp_val_1 = pd.DataFrame({"temperature": [1]})
pred_1 = mod_pois.predict(exp_val_1)

## 气温为 2 度时销售数量的期望
exp_val_2 = pd.DataFrame({"temperature": [2]})
pred_2 = mod_pois.predict(exp_val_2)

## 气温每升高 1 度, 销量变为多少倍
pred_2 / pred_1  # 1.079045

## e 的指数为回归系数
sp.exp(mod_pois.params["temperature"])  # 1.079

```













参考:










