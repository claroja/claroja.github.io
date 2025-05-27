# stats


## 常见分布


## 正态连续随机变量
随机变量X可以取任何值的概率分布是连续随机变量。 location(loc)关键字指定平均值。 scale(scale)关键字指定标准偏差。

stats连续型随机变量的公共方法：

函数|描述
--|--
rvs|产生服从指定分布的随机数
pdf|概率密度函数
cdf|累计分布函数
ppf|分位点函数（CDF的逆）
sf|残存函数（1-CDF）
isf|逆残存函数（sf的逆）
fit|对一组随机取样进行拟合，最大似然估计方法找出最适合取样数据的概率密度函数系数。

***离散***分布的方法大多数与连续分布很类似，但是`pdf`被更换为密度质量函数`pmf`。


### pdf
求概率密度函数指定点的函数值

```python
import scipy.stats as st
st.norm.pdf(0, loc = 0,scale = 1)  # 0.3989422804014327
```


### CDF与PPF
累计分布函数指定点的函数值(查找X对应的概率):

```python
from scipy.stats import norm
import numpy as np
norm.cdf(np.array([-1, 0, 1, ]))  # array([0.15865525, 0.5, 0.84134475])
```

累计分布函数的逆函数(查找概率对应的X):
```python
from scipy.stats import norm
norm.ppf(0.5)  # 0.0
```

### 生成随机变量序列
`norm.rvs`通过`loc`和`scale`指定正态分布的期望和标准差,`size`得到随机数组的形状.


```python
import scipy.stats as st 
st.norm.rvs(loc = 0,scale = 0.1,size =4)  # array([0.05569008, 0.06281672, 0.02828948, 0.00240669])
st.norm.rvs(loc = 3,scale = 10, size=(2,2))
"""
array([[26.69398671,  7.53583643],
    [ 0.21224097, -0.92683034]])
"""
```






## 二项分布




参考:
https://docs.scipy.org/doc/scipy/tutorial/stats.html#