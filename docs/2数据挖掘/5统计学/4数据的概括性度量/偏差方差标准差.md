# 偏差方差标准差

全班都得50分和全班一半得0分一半得100分, 均值和中位数都是50分. 但后者偏离程度更大.
## 偏差
偏差是表示各个数据与平均值相差多少的指标. 比如A的分数是42分, 10个人的平均分是55分, A的偏差是42-55=-13分

```python
scores = [50, 60, 58, 54, 51, 56, 57, 53, 52, 59]
mean = np.mean(scores)
deviation = scores - mean
deviation
```


## 方差(样本方差)

使用偏差作为变化指标私服不错, 但是由于偏差有正负, 平均值总是趋于0, 所以结果并不理想. 为了避免这种情况, 我们使用偏差平方的平均值, 即方差(variance)来衡量数据的偏离程度.

$$
S^2 = \frac{1}{n}\sum_{i=1}^n(X_i-\overline X)^2
$$



```python
## 1. 手动计算
np.mean(deviation ** 2)  # 11.0
## 2. 使用函数
np.var(scores)  # 11.0 默认ddof =0

## 3. pandas
import pandas as pd
pd.Series(scores).var(ddof=0)  # 11.0
```

## 无偏方差
在学习无偏方差之前首先要了解三个概念: 样本方差, 总体方差 ,无偏方差, 他们的关系是:
1. 样本方差是样本本身的方差, 使用$S^2$表示.
2. 无偏方差是使用样本`ddof=1`时的方差来估算总体的方差, 是样本估算总体的桥梁.
3. 总体方法是总体本身的方差, 使用$\sigma^2$表示.

样本方差是用样本均值计算出来, 这个结果过小地土断了总体方差. 无偏方差则去除了这个偏差.
无偏方差就是使用了`n-1`代替了`n`
$$
\sigma^2 = \frac{1}{n-1}\sum^n_{i=1}(X_i-\overline X)^2
$$

在代码实现中, `ddof=1`就是`n-1`. 注意在`np.var()`中的默认`ddof`是0, 即默认是样本方差, 而`pd.Series().var()`默认`ddof`是1, 即默认是无偏方差(整体方差)
```python
np.var(scores,ddof=1)  # 12.22
pd.Series(scores).var()  # 12.22 默认ddof=1
```


##### 无偏方差的应用
有两个篮球运动员, 下表记录了他们10场比赛的得分，以便教练挑选：
$$
\begin{array}{c|cc}
    \hline
    \\
    篮球运动员A\quad &\quad 7 & 8 & 9 & 9 & 10 & 10 & 11 & 11 & 12 & 13\\
    篮球运动员B & 3 & 3 & 3 & 7 & 10 & 10 & 10 & 11 & 13 & 30\\
    \\
    \hline
\end{array}
$$
根据这些样本可以算出两个篮球运动员的中位数和均值都是10，既然都相同，那教练就希望从两者中选出更稳定的运动员，这可以通过样本方差来计算：

设$X_1,X_2,\cdots,X_n$为取自某总体的样本，则称：
$$
\begin{aligned}
    \sigma^2
        &=\frac{1}{n-1}\sum_{i=1}^{n}\left(X_i-\overline{X}\right)^2\\
        \\
        &=\frac{1}{n-1}\left(\sum_{i=1}^{n}X_i^2-n\overline{X}^2\right)
\end{aligned}
$$
为`无偏方差`，其算术平方根$S=\sqrt{S^2}$称为`无偏标准差`。
计算下之前两个选手的无偏方差：
$$
\sigma_A^2\approx 3.33,\quad \sigma_B^2\approx 62.89
$$
可以看到篮球运动员A无偏方差更小，也就意味着更稳定，可以建议教练挑选他。

## 为什么分母是n-1

可能不少同学会疑惑为什么无偏方差：
$$
S^2=\frac{1}{n-1}\sum_{i=1}^{n}\left(X_i-\overline{X}\right)^2
$$
的分母是n-1，而不是n，这是因为：
$$
E\left(\frac{1}{n}\sum_{i=1}^{n}\left(X_i-\overline{X}\right)^2\right)=\sigma^2-\frac{1}{n}\sigma^2
$$

根据刚才的分析，可知如果分母为n的话，这样去推算出来的方差要比真实的总体方差小$\frac{1}{n}\sigma^2$。不过在实践中，如果n足够大的话，也可以用：
$$
\frac{1}{n}\sum_{i=1}^{n}\left(X_i-\overline{X}\right)^2
$$
来作为样本方差，这个时候n和n-1的相差基本可以忽略。



## 标准差
方差由分数的平方这个单位($分^2$), 这样不好理解, 所以我们将方差(variance)进行开方就可以得到正常的单位($分$), 而这个开方后的结果我们称为标准差(standard deviation).

$$
S =\sqrt{\frac{1}{n}\sum_{i=1}^n(X_i-\overline X)^2} 
$$

```python
np.sqrt(np.var(scores, ddof=0))  # 3.31
np.std(scores, ddof=0)  # 3.31
```