# JointGrid



## 最佳实践

1. 分别绘制联合分布和边缘分布

    ```python
    import seaborn as sns
    penguins = sns.load_dataset("penguins")
    
    g = sns.JointGrid(data=penguins, x="bill_length_mm", y="bill_depth_mm")
    g.plot_joint(sns.scatterplot, s=100, alpha=.5)
    g.plot_marginals(sns.histplot, kde=True)
    ```


2. 自定义边缘分布

    ```python
    import seaborn as sns
    penguins = sns.load_dataset("penguins")
    g = sns.JointGrid()
    x, y = penguins["bill_length_mm"], penguins["bill_depth_mm"]
    sns.scatterplot(x=x, y=y, ec="b", fc="none", s=100, linewidth=1.5, ax=g.ax_joint)
    sns.histplot(x=x, fill=False, linewidth=2, ax=g.ax_marg_x)
    sns.kdeplot(y=y, linewidth=2, ax=g.ax_marg_y)
    ```


## [JointGrid](https://seaborn.pydata.org/generated/seaborn.JointGrid.html#seaborn.JointGrid)


1. 构造参数

    ```python
    class seaborn.JointGrid(
        data=None,                  # pandas.DataFrame, numpy.ndarray, mapping, or sequence
        *, 
        x=None,                     # vectors or keys in data
        y=None,                     # vectors or keys in data
        hue=None,                   # 
        height=6,                   # number
        ratio=5,                    # number. 边缘坐标系的高度比率
        space=0.2,                  # number. 联合坐标系和边缘坐标系的间隔
        palette=None,               # string, list, dict, or matplotlib.colors.Colormap
        hue_order=None,             # vector of strings
        hue_norm=None,              # tuple or matplotlib.colors.Normalize
        dropna=False, 
        xlim=None,                  # pairs of numbers
        ylim=None,                  # pairs of numbers
        marginal_ticks=False        # bool
    )
    ```

2. 对象方法

    1. apply(func, *args, **kwargs)
    2. apply(func, *args, **kwargs)
    3. plot(joint_func, marginal_func, **kwargs)
    4. ✨plot_joint(func, **kwargs): 联合分布绘图
    5. ✨plot_marginals(func, **kwargs): 边缘分布绘图
    6. ✨refline(*[, x, y, joint, marginal, color, ...]): 相关曲线
    7. ✨savefig(*args, **kwargs): 保存
    8. set(**kwargs)
    9. set_axis_labels([xlabel, ylabel])

3. 对象属性
    1. figure: matplotlib.figure.Figure

















