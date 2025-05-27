# 广义线性模型的评估


### 模型偏差
模型偏差(deviance)是评估模型契合度的指标. 模型的偏差越大, 契合度越差.
logistic回归的对数似然为$ln\zeta(\beta_0,\beta_1;n,m)$. 系数$\beta_0,\beta_1$改变, 则似然改变. 这里, 将通过最大似然法估计的系数所对应的对数似然记作$ln\zeta(\beta_{glm};y)$, 将完美预测所有考试合格情况的对数似然记作$ln\zeta(\beta_{max};y)$.

模型偏差的计算方式如下:
$$
deviance = 2[ln\zeta(\beta_{max};y)-ln\zeta(\beta_{glm};y)]
$$


### 模型偏差的含义
模型偏差用似然的方式表现了残差的平方和, 做大似然法所得的结果等于使得模型偏差最小的参数估计的结果.
$ln\zeta(\beta_{max};y)$是完美预测了响应变量时的对数似然, 也就是说, 如果合格(1), 就预测成功概率为100%;如果不合格(0), 就预测成功概率为0%. 不存在比这个值更大的对数似然. 模型的预测能力与这个值之间的差异就是模型偏差.


### 模型偏差与似然比检验
在计算模型偏差时, 取对数似然的2倍是为了方便进行似然比检验.
模型偏差的含义就是广义线性模型中的残差平方和. 对两个模型偏差的差值进行检验的含义和方差分析相同. 按模型偏差的定义, 两个模型偏差的差值近似于卡方分布.
模型偏差的差值检验也叫似然比检验.


### 偏差残差
二项分布的偏差残差的平方和就是模型偏差. 使用python实现:
```python
"""
hours	result
0	0
0	0
0	0
0	0
0	0
0	0
0	0
0	0
0	0
0	0
1	0
1	0
1	0
1	0
1	0
1	0
1	0
1	0
1	0
1	0
2	0
2	1
2	0
2	0
2	0
2	0
2	0
2	0
2	0
2	0
3	0
3	0
3	1
3	0
3	0
3	0
3	0
3	0
3	0
3	0
4	1
4	1
4	0
4	1
4	0
4	0
4	1
4	0
4	0
4	0
5	0
5	1
5	0
5	0
5	0
5	0
5	1
5	0
5	1
5	1
6	1
6	1
6	1
6	1
6	1
6	1
6	1
6	1
6	0
6	1
7	0
7	1
7	1
7	1
7	1
7	1
7	0
7	1
7	1
7	1
8	1
8	1
8	1
8	1
8	1
8	1
8	1
8	0
8	1
8	1
9	1
9	1
9	1
9	1
9	1
9	1
9	1
9	1
9	1
9	1

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
test_result = pd.read_csv("data")

## 模型化
mod_glm = smf.glm("result ~ hours", data = test_result, 
                  family=sm.families.Binomial()).fit()
## 计算偏差残差

## 预测的成功概率
pred = mod_glm.predict()
## 响应变量 (合格情况)
y = test_result.result

## 与完美预测了合格情况时的对数似然度的差值
resid_tmp = 0 - sp.log(
    sp.stats.binom.pmf(k = y, n = 1, p = pred))
## 偏差残差
deviance_resid = sp.sqrt(
    2 * resid_tmp
) * np.sign(y - pred)
## 打印结果
deviance_resid.head(3)
"""
0   -0.144369
1   -0.144369
2   -0.144369
Name: result, dtype: float64
"""
## 直接使用模型获取偏差残差
"""
0   -0.144369
1   -0.144369
2   -0.144369
dtype: float64
"""
## 偏差残差的平方和就是模型偏差deviance
sp.sum(mod_glm.resid_deviance ** 2)  # 68.028
```

### 交叉熵误差
在很多机器学习的语境中, 求logistic回归就是求使得交叉熵误差最小的参数.
二项分布的概率质量函数的数学式为:
$$
Bin(m|n,p)=C_n^m \cdot p^m \cdot (1-p)^{n-m}
$$
对于每个数据, 试验次数n都是1, 所以数学式可变形为:
$$
Bin(m|1,p) = p^m \cdot (1-p) ^{1-m}
$$
注意, m只能取0或1.
结合例题, 合格情况为y(0或1), 预测的合格率为$\hat{p}$, 则
$$
Bin(y|1,\hat{p})=\hat{p}^y \cdot (1-\hat{p})^{1-y}
$$
似然函数如下:
$$
\prod_{i=1}^T\hat{p}_i^{y_i}\cdot (1-\hat{p}_i)^{1-y_i}
$$
其中, T为样本容量.
对数似然的相反数如下:
$$
-\sum_{i=1}^T[y_iln\hat{p}_i + (1-y_i)ln(1-\hat{p}_i)]
$$
上式就是交叉熵误差.当假设总体服从二项分布时, 它的含义与模型偏差相同. 让交叉熵误差最小就是让模型偏差最小, 也就是让logistic回归的对数似然最大.



参考:
