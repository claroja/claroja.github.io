# 正态分布方差检验






## 总体方差检验
总体方差的检验是为了主张总体方差不是$\sigma^2_0$而进行的检验. 这个检验使用$Y=(n-1)s^2\sigma^2$作为检验统计量, 利用$Y \sim \chi^2(n-1)$的结论进行计算.
设$X_1,...,X_n \sim^{iid} N(\mu,\sigma^2)$, 此时, 关于总体方差$\sigma^2$的显著性水平$\alpha$双侧检验是:
1. 零假设: $\sigma^2 = \sigma^2_0$
2. 备选假设: $\sigma^2 \neq \sigma^2_0$

检验统计量是$Y=(n-1)s^2/\sigma_0^2$,
$$
\begin{cases}
	Y < \chi^2_{1-\alpha/2}(n-1),\chi^2_{\alpha/2}(n-1) < Y, 拒绝零假设  \\
	\chi^2_{1-\alpha/2}(n-1) \leq Y \leq \chi^2_{\alpha/2}(n-1), 接受零假设
\end{cases}
$$
使用python实现:
```python
def pvar_test(sample, var0, alpha=0.05):
    u_var = np.var(sample, ddof=1)
    n = len(sample)
    rv = stats.chi2(df=n-1)
    interval = rv.interval(1-alpha)
    
    y = (n-1) * u_var / var0
    if interval[0] <= y <= interval[1]:
        print('接受归无假设')
    else:
        print('拒绝归无假设')

    if y < rv.isf(0.5):
        p = rv.cdf(y) * 2
    else:
        p = (1 - rv.cdf(y)) * 2
    print(f'p值为{p:.3f}')

pvar_test(sample, 9)  # 接受0假设
```
