# lmplot


## 最佳实践

figure-level方法, 整合了axes-level的regplot()和FacetGrid.

1. hui分组

    ```python
    sns.lmplot(data=penguins, x="bill_length_mm", y="bill_depth_mm", hue="species")
    ```

2. col分组
    ```python
    sns.lmplot(
        data=penguins, x="bill_length_mm", y="bill_depth_mm",
        hue="species", col="sex", height=4,
    )
    ```


## lmplot基础
1. Figure-level方法
1. 回归曲线图像
2. 底层方法是regplot()
3. 布局使用FacetGrid




## [lmplot](https://seaborn.pydata.org/generated/seaborn.lmplot.html#seaborn.lmplot)


```python
seaborn.lmplot(
    data,                   # 
    *, 
    x=None,                 #
    y=None,                 #
    hue=None,               #
    col=None,               # 
    row=None, 
    palette=None, 
    col_wrap=None,          #
    height=5,               #
    aspect=1,               #
    markers='o',            #
    sharex=None, 
    sharey=None, 
    hue_order=None,         #
    col_order=None,         #
    row_order=None,         #
    legend=True,            #
    legend_out=None,        #
    x_estimator=None, 
    x_bins=None, 
    x_ci='ci', 
    scatter=True, 
    fit_reg=True, 
    ci=95, 
    n_boot=1000, 
    units=None, 
    seed=None, 
    order=1, 
    logistic=False, 
    lowess=False, 
    robust=False, 
    logx=False, 
    x_partial=None, 
    y_partial=None, 
    truncate=True, 
    x_jitter=None, 
    y_jitter=None, 
    scatter_kws=None, 
    line_kws=None, 
    facet_kws=None
)
```

