<!-- # jointplot

## 最佳实践

1. 绘制联合分布和边缘分布

    ```python
    import seaborn as sns
    penguins = sns.load_dataset("penguins")
    sns.jointplot(data=penguins, x="bill_length_mm", y="bill_depth_mm", hue="species")
    ```

2. 自定义联合分布和边缘分布

    ```python
    import seaborn as sns
    penguins = sns.load_dataset("penguins")
    g = sns.jointplot(data=penguins, x="bill_length_mm", y="bill_depth_mm")
    g.plot_joint(sns.kdeplot, color="r", zorder=0, levels=6)
    g.plot_marginals(sns.rugplot, color="r", height=-.15, clip_on=False)
    ```

## jointplot

1. Figure-level
2. 绘制联合和边缘分布
3. 底层通过kind控制, 可选{ “scatter”, “kde”, “hist”, “hex”, “reg”, “resid” }
3. 布局使用JointGrid


## [jointplot](https://seaborn.pydata.org/generated/seaborn.jointplot.html)

```python
seaborn.jointplot(
    data=None,                  # pandas.DataFrame, numpy.ndarray, mapping, or sequence
    *, 
    x=None,                     # vectors or keys in data
    y=None,                     # vectors or keys in data
    hue=None,                   # vector or key in data
    kind='scatter',             # { “scatter”,  “kde”,  “hist”,  “hex”,  “reg”, “resid” }
    height=6,                   # numeric. figture的高度, 正方形, 所以没有宽度
    ratio=5,                    # numeric. 边缘坐标轴的高度比率
    space=0.2,                  # numeric. 联合坐标轴和边缘坐标轴的间隔.
    dropna=False,               # bool.
    xlim=None,                  # pairs of numbers
    ylim=None,                  # pairs of numbers
    color=None,                 # matplotlib color
    palette=None,               # string, list, dict, or matplotlib.colors.Colormap
    hue_order=None,             # vector of strings
    hue_norm=None,              # tuple or matplotlib.colors.Normalize
    marginal_ticks=False,       # bool
    joint_kws=None,             # dicts
    marginal_kws=None,          # dicts
    **kwargs
)
```

返回:

JointGrid











 -->
