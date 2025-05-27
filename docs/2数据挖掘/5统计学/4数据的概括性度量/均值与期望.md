# 均值与期望

## 均值
某大学女生身高的样本如下：
$$
\begin{array}{c|c}
    \hline
    \qquad 姓名\qquad &\qquad 身高\qquad\\
    \hline
    \\
    \text{Angel} &  166\\
    \text{Micheal} &  160\\
    \text{Emma} &  153\\
    \text{Olivia} &  153\\
    \text{Ava} &  160\\
    \text{Isabella} &  171\\
    \text{Charlotte} &  154\\
    \text{Mia} & 154\\
    \text{Amelia} &  158\\
    \text{Evelyn} &  143\\
    \\
    \hline
\end{array}
$$
我们可以求取它的算术平均数：
$$
\overline{X}=\frac{166+160+\cdots+143}{10}=157.2
$$

>设$X_1,X_2,\cdots,X_n$为取自某总体的样本，则其算术平均数：
$$
\overline{X}=\frac{X_1+X_2+\cdots+X_n}{n}
$$
称为`样本均值`。也可表示为:
$$
\overline{X} = \frac{1}{n}\sum_{i=1}^n X_i
$$

## 期望
我们观察到有一些同学的身高是一样的, 比如**Angel**,**Micheal**和**Ava**的身高都是160, 我们可以将同样身高同学合并:
$$
E(X) = \frac{3}{10}160 + \frac{2}{10}153 + \frac{1}{10}171 + \frac{2}{10}154 + \frac{1}{10}158 + \frac{1}{10}143
$$
我们可以将$\frac{3}{10}$理解为身高出现的概率.

$$
E(X) = \sum P(X)X
$$


## python实现
```python
import numpy as np
## 1. 手动计算均值
hight = [166, 160, 153,153, 160, 171, 154, 154, 158,143]
n = len(hight)
sum_value = sum(hight)
sum_value / n  # 157.2

## 2. 使用函数计算
np.mean(hight)  # 157.2
```
`sum(height)`和$\sum_{i=1}^n X_i$对应, `len(height)`和$n$对应
