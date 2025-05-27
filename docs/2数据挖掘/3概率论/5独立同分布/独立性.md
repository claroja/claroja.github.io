# 独立性

所谓随机变量独立, 是表示一个随机变量不影响其他随机变量的概念.为什么特别关心独立的多维随机变量呢?因为统计分析中处理的数据大多是独立的多维随机变量.
A同学因为想知道全部400名学生的平均分, 所以向偶然遇到的20人询问了考试的分数, 从询问结果推断了全部学生的平均分. 其中, 偶然遇到的每一个学生的分数, 是服从全体学生分数分布的一维随机变量. 同时, 偶然遇到的每一个学生并不受之前偶然遇到的学生的影响. 因此偶然遇到的20个人的分数($X_1,X_2,...,X_{20}$)可以被认为是相互独立的20维随机变量.
将相互独立且各自服从相同概率分布的多维随机变量称为独立同分布(independently and identically distribution, iid).如果将他们服从的概率分布设为$F$, 则可以表示为$X_1,X_2,...,X_{20} \sim^{iid} F$

导入程序库:
```python
import numpy as np
import matplotlib.pyplot as plt
from scipy import stats
def E(XY, g):
    x_set, y_set, f_XY = XY
    return np.sum([g(x_i, y_j) * f_XY(x_i, y_j)
                   for x_i in x_set for y_j in y_set])

def Cov(XY):
    x_set, y_set, f_XY = XY
    mean_X = E(XY, lambda x, y: x)
    mean_Y = E(XY, lambda x, y: y)
    return np.sum([(x_i-mean_X) * (y_j-mean_Y) * f_XY(x_i, y_j)
                    for x_i in x_set for y_j in y_set])

def f_X(x):
    return np.sum([f_XY(x, y_k) for y_k in y_set])

def f_Y(y):
    return np.sum([f_XY(x_k, y) for x_k in x_set])

```

## 独立性
随机变量的独立性(independence)是表示两个以上的随机变量互不影响, 互不相干的概念. 对于二维随机变量$(X,Y)$, 若以下关系成立, 则称X和Y独立:
$$
f_{X,Y}(x,y)=f_X(x)f_Y(y)
$$
也就是说, 当随机变量独立时, 联合概率可以写为边际概率的乘积.
作为具体例子, 再次使用掷骰子试验. 掷A,B两个骰子, A出现的点数是随机变量X, B出现的点数是随机变量Y. 不管A的结果如何都不会影响B的结果, 反之亦然, 所以可以说X和Y是独立的. 这个二维随机变量(X,Y)的联合概率分布函数是:
$$
f_{XY}(x,y)=
\begin{cases}
    xy/441 & x \in(1,2,3,4,5,6), y\in(1,2,3,4,5,6) \\
    0 & otherwise
\end{cases}
$$
随机变量X和Y是骰子出现点数, 其概率质量函数分别是:
$$
f_X(x)=
\begin{cases}
    x/21 & x \in (1,2,3,4,5,6) \\
    0 & otherwise
\end{cases}
$$
$$
f_Y(y)=
\begin{cases}
    y/21 & y \in(1,2,3,4,5,6)  \\
    0 & otherwise
\end{cases}
$$
因此可以确定$f_{X,Y}(x,y)=f_X(x)f_Y(y)$成立. 可以更一般的拓展到n维随机变量来定义独立性.
$$
n个随机变量X_1, X_2, ..., X_n满足:  \\
f_{X_1,...,X_n}(x_1,...,x_n)=f_{X_1}(x_1)f_{X_2}(x_2)...f_{X_n}(x_n)  \\
就称X_1,...,X_n相互独立. \\
但是, 函数f对离散型随机变量表示概率函数, 对连续型随机变量则表示密度函数.
$$

### 独立性和无关性
协方差和相关系数为0时表示不想管, 表示两个随机变量之间没有相关性, 即没有线性关系. 而独立性是比无相关性更强的概念. 也就是说两个随机变量X和Y独立时一定不相关, 但是X和Y不相关时不一定独立. 两个随机变量之间虽然没有线性关系, 但也可能有相互影响的其他情况.
使用python确认一下这个结论. 作为独立随机变量的例子, 使用刚才掷骰子的例子:
```python
x_set = np.array([1, 2, 3, 4, 5, 6])
y_set = np.array([1, 2, 3, 4, 5, 6])

def f_XY(x, y):
    if x in x_set and y in y_set:
        return x * y / 441
    else:
        return 0
    
XY = [x_set, y_set, f_XY]
```
这个二维随机变量X和Y是独立的, 随意应该是不相关的. 使用协方差来确认:
```python
Cov(XY)
```
协方差为0, 确实不相关.这个结果不限于这个例子, 如果两个随机变量是独立的, 则一定是不相关的.

接下来考虑两个不相关的随机变量. 正如刚才所说的, 随机变量即使不相关也不一定是独立的. 作为不相关也不独立的例子, 我们使用二维随机变量(X,Y), 其中可取值的集合为[(0,0),(1,1,),(1,-1)],该随机变量的联合概率分布函数用以下公式表示:
$$
f_{XY}(x,y)=
\begin{cases}
    1/3 & (x,y) \in [(0,0),(1,1),(1,-1)]  \\
    0 & otherwise
\end{cases}
$$
用python代码实现:
```python
x_set = np.array([0, 1])
y_set = np.array([-1, 0, 1])

def f_XY(x, y):
    if (x, y) in [(0, 0), (1, 1), (1, -1)]:
        return 1 / 3
    else:
        return 0
    
XY = [x_set, y_set, f_XY]
```
计算协方差
```python
Cov(XY)  # 0.000
```
因为协方差为0, 所以可以确定随机变量X和Y是不相关的.那么随机变量X和Y是独立的吗?独立性的定义是对于所有x,y都满足:
$$
f_{X,Y}(x,y)=f_X(x)f_Y(y)
$$
这里带入x=0,y=0, 确认一下:
$$
f_{X,Y}(0,0)=f_X(0)f_Y(0)
$$
能否成立
```python
f_X(0) * f_Y(0), f_XY(0, 0)  # (0.111, 0.333)
```
因为等式不成立, 所以X和Y不独立. 由此可以断定, 两个随机变量即使不相关也有可能不独立.