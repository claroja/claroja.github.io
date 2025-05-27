# 正态分布均值检验

## 均值检验
### 总体方差已知
所谓总体平均值的检验, 是为了主张总体平均值不是$u_0$而进行的检验. 最简单的情况是假设总体服从正态分布, 其总体方差$\sigma^2$已知, 和主张薯条的"总体平均值不是130g"时的情况相同. 假设检验如下:
设$X_1,...,X_n \sim N(\mu,\sigma^2)$, 此时, 关于总体平均值$\mu$的显著性水平$\alpha$的双侧检验:
1. 零假设: $\mu = \mu_0$
2. 备选假设: $\mu \neq \mu_0$

检验统计量:$Z=(\overline{X}-\mu_0)/\sqrt{\frac{\sigma^2}{n}}$
$$
\begin{cases}
	Z < z_{1-\alpha/2} 或 z_{\alpha/2} < Z, 拒绝零假设 \\
	z_{1-\alpha/2} \leq Z \leq z_{\alpha/2}, 接受零假设
\end{cases}
$$
定义一个函数来实现:
```python
def pmean_test(sample, mean0, p_var, alpha=0.05):
    s_mean = np.mean(sample)
    n = len(sample)
    rv = stats.norm()
    interval = rv.interval(1-alpha)

    z = (s_mean - mean0) / np.sqrt(p_var/n)
    if interval[0] <= z <= interval[1]:
        print('接受归无假设')
    else:
        print('拒绝归无假设')

    if z < 0:
        p = rv.cdf(z) * 2
    else:
        p = (1 - rv.cdf(z)) * 2
    print(f'p值为{p:.3f}')

pmean_test(sample, 130, 9)  # 接受零假设
```


### 总体方差未知
总体方差未知的情况下, 正态分布的总体平均值的检验也称为单样本t检验(1-sample t-test), 使用被称为t检验统计量的$t=(\overline{X}-\mu_0)/\sqrt{\frac{s^2}{n}}$作为检验统计量, t检验统计量服从自由度为n-1的t分布.
设$X_1,...,X_n \sim^{iid} N(\mu,\sigma^2)$, 此时, 总体平均值$\mu$的显著性水平$\alpha$的双侧检验是:
1. 零假设: $\mu = \mu_0$
2. 备选假设: $\mu \neq \mu_0$

检验统计量是$t=(\overline{X}-\mu_0)/\sqrt{\frac{s^2}{n}}$,
$$
\begin{cases}
	t < t_{1-\alpha/2}(n-1),t_{\alpha/2}(n-1) < t, 拒绝零假设 \\
	t_{1-\alpha/2}(n-1) \leq t \leq t_{\alpha/2}(n-1), 接受零假设
\end{cases}
$$

使用python来实现:
```python
def pmean_test(sample, mean0, alpha=0.05):
    s_mean = np.mean(sample)
    u_var = np.var(sample, ddof=1)
    n = len(sample)
    rv = stats.t(df=n-1)
    interval = rv.interval(1-alpha)

    t = (s_mean - mean0) / np.sqrt(u_var/n)
    if interval[0] <= t <= interval[1]:
        print('接受归无假设')
    else:
        print('拒绝归无假设')

    if t < 0:
        p = rv.cdf(t) * 2
    else:
        p = (1 - rv.cdf(t)) * 2
    print(f'p值为{p:.3f}')

pmean_test(sample, 130)  # 接受归无假设, p值为0.169
```
单样本t检验在scipy.stats中可以使用ttest_lsamp函数来实现, 该函数的返回值是t检验统计量和p值.
```python
t, p = stats.ttest_1samp(sample, 130)
t, p  # (-1.455, 0.169)
```