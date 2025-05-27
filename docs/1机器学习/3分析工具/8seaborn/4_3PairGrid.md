
绘制成对相关性图


## 最佳实践

1. 对角线 - 非对角线
    ```python
    import seaborn as sns
    penguins = sns.load_dataset("penguins")
    g = sns.PairGrid(penguins, hue="species")
    g.map_diag(sns.histplot)
    g.map_offdiag(sns.scatterplot)
    g.add_legend()
    ```

1. 对角线 - 上三角 - 下三角
    ```python
    import seaborn as sns
    penguins = sns.load_dataset("penguins")
    g = sns.PairGrid(penguins, diag_sharey=False, hue="species")
    g.map_diag(sns.histplot)
    g.map_upper(sns.scatterplot)
    g.map_lower(sns.kdeplot)
    g.add_legend()
    ```


2. figure_level

    ```python
    import seaborn as sns
    iris = sns.load_dataset("iris")
    sns.pairplot(iris, hue="species", height=2.5)
    ```


## [PairGrid](https://seaborn.pydata.org/generated/seaborn.PairGrid.html#seaborn.PairGrid)

1. 构造参数
    
    ```python
    class seaborn.PairGrid(
        data,                   # DataFrame. 
        *, 
        hue=None,               # string (variable name). 
        vars=None,              # list of variable names. 使用哪些变量, 如果不指定, 则使用所有列, 每列类型被转换为数字类型
        x_vars=None,            # lists of variable names. 指定x轴的顺序
        y_vars=None,            # lists of variable names. 指定y轴的顺序
        hue_order=None,         # list of strings
        palette=None,           # dict or seaborn color palette
        hue_kws=None,           # dictionary of param -> list of values mapping
        corner=False,           # bool. True: 不显示上三角
        diag_sharey=True, 
        height=2.5,             # scalar
        aspect=1,               # scalar
        layout_pad=0.5,         # scalar. 坐标空间的间隔
        despine=True,           # boolean.
        dropna=False            # boolean.
    )
    ```


2. 对象方法
    1. add_legend([legend_data, title, ...]): 添加标识
    2. apply(func, *args, **kwargs)
    3. map(func, **kwargs)
    4. map_diag(func, **kwargs)
    5. map_lower(func, **kwargs)
    6. map_offdiag(func, **kwargs)
    7. map_upper(func, **kwargs)
    8. pipe(func, *args, **kwargs)
    9. savefig(*args, **kwargs): 保存图片
    10. set(**kwargs)
    11. tick_params([axis])
    12. tight_layout(*args, **kwargs)

3. 对象属性
    1. figure: matplotlib.figure.Figure
    2. legend: matplotlib.legend.Legend







