---
title: distance
toc: true
date: 2021-11-13 21:01:11
---
# 1.闵可夫斯基距离(Minkowski Distance)
闵氏距离不是一种距离，而是一组距离的定义。
## 定义
两个n维变量$A(x_{11},x_{12},...,x_{1n})$与$B(x_{21},x_{22},...,x_{2n})$:
$$d_{12}=\sqrt[p]{\sum_{k=1}^n(x_{1k}-x_{2k})^p}$$

当$p=1$时, 是曼哈顿距离
当$p=2$时, 是欧氏距离
当$p=\infin$, 是切比雪夫距离

## 缺点
无法考虑量纲(scale)问题, 比如身高1.8米和体重80kg, 1.8和80在计算时

## 实现

```python
import numpy as np
x=np.random.random(10)
y=np.random.random(10)

#方法一：根据公式求解,p=2
d1=np.sqrt(np.sum(np.square(x-y)))
print('d1:',d1)

#方法二：根据scipy库求解
from scipy.spatial.distance import pdist
X=np.vstack([x,y])
d2=pdist(X,'minkowski',p=2)[0]
print('d2:',d2)
```

# 2.欧氏距离(Euclidean Distance)
欧氏空间中两点间的距离公式
## 定义
二维空间上两点$A(x_1,y_1),B(x_1,y_1)$的欧式距离:
$d_{12}=\sqrt{(x_1-y_1)^2+(x_2-y_2)^2}$
n维空间上的两点$A(x_{11},x_{12},...,x_{1n})$与$A(x_{21},x_{22},...,x_{2n})$的欧氏距离:
$d_{12}=\sqrt{\sum_{k=1}^n(x_{1k}-x_{2k})^2}$
向量的形式可写成:
$d_{12}=\sqrt{(A-B)(A-B)^T}$


## 实现
```python
# -*- coding: utf-8 -*-
from numpy import *

vector1 = mat([1,2,3])
vector2 = mat([4,5,6])
print (sqrt((vector1-vector2)*((vector1-vector2).T)))


import numpy as np

x = np.random.random(10)
y = np.random.random(10)
# solution1
dist1 = np.linalg.norm(x - y)
# solution2
dist2 = np.sqrt(np.sum(np.square(x - y)))
print('x', x)
print('y', y)
print('dist1:', dist1)
print('dist2:', dist2)

# solution3
from scipy.spatial.distance import pdist

X=np.vstack([x,y])
d2=pdist(X)[0]
print('d2:',d2)
```


## 标准化欧式距离
为了解决量纲不同的问题, 使先进行标准化再计算距离

```python
# -*- coding: utf-8 -*-
import numpy as np
x=np.random.random(10)
y=np.random.random(10)

X=np.vstack([x,y])

#方法一：根据公式求解
sk=np.var(X,axis=0,ddof=1)
d1=np.sqrt(((x - y) ** 2 /sk).sum())
print('d1:',d1)

#方法二：根据scipy库求解
from scipy.spatial.distance import pdist
d2=pdist(X,'seuclidean')[0]
print('d2:',d2)

```

# Manhattan Distance(曼哈顿距离)

想象从给一个十字路口开车到另外一个十字路口, 驾驶距离不是两点之间的支线距离, 而实际驾驶距离就是曼哈顿距离(L1范数), 也称为城市距离(City Block Distance)


n维空间上的两点$A(x_{11},x_{12},...,x_{1n})$与$A(x_{21},x_{22},...,x_{2n})$的欧氏距离:
$d_{12}=\sum_{k=1}^n|x_{1k}-x_{2k}|$


## 实现

```python
from numpy import *

vector1 = mat([1,2,3])
vector2 = mat([4,5,6])
print (sum(abs(vector1-vector2)))

import numpy as np

x=np.random.random(10)
y=np.random.random(10)
#方法一：根据公式求解
d1=np.sum(np.abs(x-y))
print('d1:',d1)

#方法二：根据scipy库求解
from scipy.spatial.distance import pdist

X=np.vstack([x,y])
d2=pdist(X,'cityblock')[0]
print('d2:',d2)

```


# Chebyshev Distance(切比雪夫距离)
在国际象棋中, 国王每次都能移动到相邻的8个方格中的任意一个, 那么国王从一个格子, 走到另外一个格子最少需要多少步?

n维空间上的两点$A(x_{11},x_{12},...,x_{1n})$与$A(x_{21},x_{22},...,x_{2n})$的切比雪夫距离:
$d_{12}=max_i(|x_{1k}-x_{2k}|)$

## 实现
```python
# -*- coding: utf-8 -*-
from numpy import *

vector1 = mat([1,2,3])
vector2 = mat([4,7,5])
print (abs(vector1-vector2).max())

import numpy as np

x=np.random.random(10)
y=np.random.random(10)
#方法一：根据公式求解
d1=np.max(np.abs(x-y))
print('d1:',d1)

#方法二：根据scipy库求解
from scipy.spatial.distance import pdist

X=np.vstack([x,y])
d2=pdist(X,'chebyshev')[0]
print('d2:',d2)
```



# Mahalanobis Distance(马氏距离)
[一些参考文献](https://www.machinelearningplus.com/statistics/mahalanobis-distance/)

Mahalanobis distance用来衡量point(vector)和distribution的距离.
Euclidean distance使用两个point的直线距离. 如果两个点在two-dimensional的plane(二维的平面), 既数据集中有两列(p,q).那么points $(p_1,q_1), (p_2,q_2)$的Euclidean distance就是:
$$d(p,q)=\sqrt{(p_1-q_1)^2+(p_2-q_2)^2}$$
当然公式也可以扩充到n dimensions:
$$d(p,q)=\sqrt{(p_1-q_1)^2+(p_2-q_2)^2+...+(p_n-q_n)^2}$$
Euclidean distance在 dimensions有相同weighted且互相independent时会有较好的表现. 这句话的含义是:

1. 当量纲不同, 既有不同的weighted时

身高(m)|体重(kg)
--|--
1.2|60
1.8|80

身高(mm)|体重(g)
--|--
1200|600000
1800|800000

表1中的两条数据, 和表2中的两条数据表示相同. 但是由于单位不同, 所以根据表1计算的Euclidean距离和根据表2计算的距离也不相同.

这种情况, 我们可以通过计算`z-score`($\frac{x-\bar{x}}{\sigma}$)来解决.

但是, 还有另外一个问题

2. 当随机变量不独立时
如果dimensions(column)是相关的, 那么一个point和center of the points (distribution)的Euclidean distance就可能带来误导了.
![1.jpg](1.jpg)

右边的图中, 两个变量是positively correlated, 既变量X(x-axis)增加, 变量Y(y-axis)也会增加.
其中中紫色的点(point1)和红色的点(point2), 距离黑色点分布的中心的Euclidean distance是相同的. 但是紫色点更解决黑色点的cluster.
这是因为Euclidean distance仅仅比较了两个点之家的距离, 而没有考虑到两个随机变量剩余点的, 或者说没有整体考虑两个随机变量的分布.


Mahalonobis distance是衡量一个点(point)和一个分布(distribution)之间的距离, 而不是一个点和另一个点之间的距离. 他和Euclidean的区别:
1. 将随机变量转换为不相关
2. 将随机变量的方差都变为1
3. 然后计算Euclidean distance

计算公式:
$$D^2=(x-\bar{x})^T\cdot C^{-1}\cdot (x-\bar{x})$$

1. $D^2$ square of the Mahalanobis distance
2. $x$ vector of the observation (row in a dataset)
3. $m$ vector of mean values of independent variables (mean of each column)
4. $C^{-1}$ inverse covariance matrix of independent variables

公式的理解:
首先来看,
$$(x-\bar{x})^T\cdot C^{-1}$$
$(x – \bar{x})$是点到均值的距离. 然后除以covariance matrix(或者说乘以inverse of the covariance matrix)
这其实是一个regular standardization($z=(x-\bar{x})/\sigma$), 写作矩阵就是$z=\frac{(x\ vector)-(mean\ vector)}{(covariance\ matrix)}$
除以协方差矩阵起到了什么效果?
如果两个随机变量strongly correlated, 那么covariance就会大, 而除以covariance则会减少distance
如果两个随机变量not correlated, 那么covariance就不会大, 而除以covariance不会太多影响distance

所以Mahalonobis解决了Euclidean的scale和 correlation两个问题.

## python计算Mahalonobis Distance


```python
import pandas as pd
import scipy as sp
import numpy as np

filepath = 'https://raw.githubusercontent.com/selva86/datasets/master/diamonds.csv'
df = pd.read_csv(filepath).iloc[:, [0,4,6]]
df.head()

def mahalanobis(x=None, data=None, cov=None):
    """Compute the Mahalanobis Distance between each row of x and the data  
    x    : vector or matrix of data with, say, p columns.
    data : ndarray of the distribution from which Mahalanobis distance of each observation of x is to be computed.
    cov  : covariance matrix (p x p) of the distribution. If None, will be computed from data.
    """
    x_minus_mu = x - np.mean(data)
    if not cov:
        cov = np.cov(data.values.T)
    inv_covmat = sp.linalg.inv(cov)
    left_term = np.dot(x_minus_mu, inv_covmat)
    mahal = np.dot(left_term, x_minus_mu.T)
    return mahal.diagonal()

df_x = df[['carat', 'depth', 'price']].head(500)
df_x['mahala'] = mahalanobis(x=df_x, data=df[['carat', 'depth', 'price']])
df_x.head()
```
## 应用
### 1.Multivariate outlier detection(异常值检测)
假设测试数据服从自由度为n的chi-square distributed, critical value at a 0.01 significance level and 2 degrees of freedom:

```python
# Critical values for two degrees of freedom
from scipy.stats import chi2
chi2.ppf((1-0.01), df=2)
#> 9.21
```
这意味着, 如果观测值的Mahalanobis distance超过9.21则被当成异常值
如果想使用P-value来决定是不是异常值,则可以:
```python
# Compute the P-Values
df_x['p_value'] = 1 - chi2.cdf(df_x['mahala'], 2)

# Extreme values with a significance level of 0.01
df_x.loc[df_x.p_value < 0.01].head(10)
```



# Cosine(夹角余弦)
几何中描述两个向量方向的差异


n维空间上的两点$A(x_{11},x_{12},...,x_{1n})$与$A(x_{21},x_{22},...,x_{2n})$的夹角余弦定理:
$\cos(\theta)=\frac{\sum_{k=1}^nx_{1k}x_{2k}}{\sqrt{\sum_{k=1}^nx_{1k}^2\sum_{k=1}^nx_{2k}^2}}$

向量的表示为:

$cos(\theta)=\frac{AB}{|A||B|}$


## 应用
```python
import numpy as np
from scipy.spatial.distance import pdist

'''
x: [0.05627679 0.80556938 0.48002662 0.24378563 0.75763754 0.15353348
 0.54491664 0.1775408  0.50011986 0.55041845]
y: [0.50068882 0.12200178 0.79041352 0.07332715 0.017892   0.57880032
 0.56707591 0.48390753 0.631051   0.20035466]
'''
x = np.random.random(10)
y = np.random.random(10)
# solution1
dist1 = 1 - np.dot(x, y) / (np.linalg.norm(x) * np.linalg.norm(y))
# solution2
dist2 = pdist(np.vstack([x, y]), 'cosine')[0]
print('x', x)
print('y', y)
print('dist1:', dist1)
print('dist2:', dist2)
```

# Edit Distance(编辑距离)
又称Levenshtein距离, 指两个字符串之间, 由一个转成零一二所需的最少的编辑次数.



## 应用
1. 直接掉包
```python
# -*- coding:utf-8 -*-
import Levenshtein
texta = 'abc'
textb = 'acb'
print Levenshtein.distance(texta,textb)

```
2. 实现

```python
# -*- coding:utf-8 -*-
import numpy as np

# 方法1
def edit_distance(word1, word2):
    len1 = len(word1)
    len2 = len(word2)
    dp = np.zeros((len1 + 1 ,len2 + 1))
    for i in range(len1 + 1):
        dp[i][0] = i
    for j in range(len2 + 1):
        dp[0][j] = j

    for i in range(1, len1 + 1):
        for j in range(1, len2 + 1):
            delta = 0 if word1[ i -1] == word2[ j -1] else 1
            dp[i][j] = min(dp[i - 1][j - 1] + delta, min(dp[ i -1][j] + 1, dp[i][j - 1] + 1))

    return dp[len1][len2]


# 方法2
def edit_distance_2(word1, word2):
        if not word1:
            return len(word2 or '') or 0
        if not word2:
            return len(word1 or '') or 0

        size1 = len(word1)
        size2 = len(word2)
        tmp = list(range(size2 + 1))
        value = None

        for i in range(size1):
            tmp[0] = i + 1
            last = i
            # print(word1[i], last, tmp)
            for j in range(size2):
                if word1[i] == word2[j]:
                    value = last
                else:
                    value = 1 + min(last, tmp[j], tmp[j + 1])
                    # print(last, tmp[j], tmp[j + 1], value)
                last = tmp[j + 1]
                tmp[j + 1] = value
            # print(tmp)
        return value


def edit_distance_3(str1, str2):
    m, n = len(str1) + 1, len(str2) + 1
    j=1
    # 初始化矩阵
    matrix = [[0] * n for i in range(m)]
    matrix[0][0] = 0
    for i in range(1, m):
        matrix[i][0] = matrix[i - 1][0] + 1
        for j in range(1, n):
            matrix[0][j] = matrix[0][j - 1] + 1
    # 动态规划计算ld值
    for i in range(1, m):
        for j in range(1, n):
            if str1[i - 1] == str2[j - 1]:
                matrix[i][j] = matrix[i - 1][j - 1]
            else:
                matrix[i][j] = min(matrix[i - 1][j - 1], matrix[i - 1][j], matrix[i][j - 1]) + 1

    return matrix[m - 1][j - 1]

word1,word2='111','222'
print(edit_distance_2(word1,word2))

```

# 夹角余弦与欧式距离区别
https://stackoverflow.com/questions/53173654/

参考:
https://stackoverflow.com/questions/53173654/best-way-to-identify-dissimilarity-euclidean-distance-cosine-distance-or-simp
https://blog.csdn.net/xc_zhou/article/details/81535033
https://www.cnblogs.com/shine-lee/p/11779514.html
https://blog.csdn.net/mrdonghe/article/details/105475763
https://blog.csdn.net/qq_36393962/article/details/99972710
https://machinelearningmastery.com/standardscaler-and-minmaxscaler-transforms-in-python/