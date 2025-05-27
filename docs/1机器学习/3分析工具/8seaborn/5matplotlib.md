


1. 通过axes_level方法, 返回的axes对象直接控制artist对象:
    
    ```python
    ax = sns.scatterplot(...)
    ax.set(
        xlabel="The x label",
        ylabel="The y label",
        title="The title"
        xlim=(xmin, xmax),
        xticks=[...],
        xticklabels=[...],
    )
    ```

2. 通过figure-level方法, 该方法不能直接调用axes对象, 而是返回一个FacetGrid对象, 其中包含了axes对象.
    1. 如果是单个axes:

        ```python
        g = sns.displot(...)
        g.ax.set(...)
        ```

    2. 如果是多个axes, 适用FacetGrid.axes(二维数组)来定位

        ```python
        g = sns.displot(..., col=...)
        g.axes
        ```


## 参考
1. https://seaborn.pydata.org/faq.html#how-can-i-can-i-change-something-about-the-figure
2. https://seaborn.pydata.org/faq.html#how-do-i-use-seaborn-with-matplotlib-s-object-oriented-interface