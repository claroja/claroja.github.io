

# regplot


## 最佳实践
做出数据和回归曲线, 是axes-level. 对应的lmplot()是figure-level.

1. 1次回归曲线

    ```python
    sns.regplot(data=mpg, x="weight", y="acceleration")
    ```

2. 2次回归曲线

    ```python
    sns.regplot(data=mpg, x="weight", y="mpg", order=2)
    ```

3. 逻辑回归曲线

    ```python
    sns.regplot(x=mpg["weight"], y=mpg["origin"].eq("usa").rename("from_usa"), logistic=True)
    ```



## 基础

1. Axes-level 
2. 绘制回归曲线

## regplot


```python
seaborn.regplot(
    data=None,              # 
    *, 
    x=None,                 # string, series, or vector array. pandas的列
    y=None,                 # string, series, or vector array. pandas的列
    x_estimator=None,       # callable that maps vector -> scalar, optional
    x_bins=None,            # int or vector, optional
    x_ci='ci',              # “ci”, “sd”, int in [0, 100] or None, optional
    scatter=True,           # bool. 
    fit_reg=True,           # bool. 绘制x和y的曲线
    ci=95,                  # int in [0, 100] or None. 置信区间(confidence interval)
    n_boot=1000,            # int. bootstrap的采样次数
    units=None,             # variable name in data. 
    seed=None,              # int. numpy.random.Generator, or numpy.random.RandomState. 随机种子
    order=1,                # int. 多项式回归.
    logistic=False,         # bool. 逻辑回归.
    lowess=False,           # bool. 
    robust=False, 
    logx=False,             # bool. 对x转换成log(x)
    x_partial=None, 
    y_partial=None, 
    truncate=True, 
    dropna=True, 
    x_jitter=None, 
    y_jitter=None, 
    label=None, 
    color=None, 
    marker='o',             # matplotlib marker code. 散点图
    scatter_kws=None,       # dict. plt.scatter的参数
    line_kws=None,          # dict. plt.plot的参数
    ax=None                 # matplotlib Axes. 绘制的位置
)
```

返回

matplotlib Axes










