
# FacetGrid

在figure中规划多个网格用于绘图


## 最佳实践

```python
import seaborn as sns
tips = sns.load_dataset("tips")
g = sns.FacetGrid(tips, col="time",  row="sex")
g.map_dataframe(sns.scatterplot, x="total_bill", y="tip")
```

## [FacetGrid](https://seaborn.pydata.org/generated/seaborn.FacetGrid.html#seaborn.FacetGrid)

```python
class seaborn.FacetGrid(
    data,                       # DataFrame
    *, 
    row=None,                   # strings
    col=None,                   # strings
    hue=None,                   # strings
    col_wrap=None,              # int. 每行的列数, 超过换行
    sharex=True,                # bool, ‘col’, or ‘row’ optional
    sharey=True,                # bool, ‘col’, or ‘row’ optional
    height=3,                   # scalar. facet的高度.
    aspect=1,                   # scalar. width = aspect * height
    palette=None,               # palette name, list, or dict
    row_order=None,             # lists
    col_order=None,             # lists
    hue_order=None,             # lists
    hue_kws=None,               # dictionary of param -> list of values mapping
    dropna=False, 
    legend_out=True,            # bool. 在facet外绘制
    despine=True,               # boolean.
    margin_titles=False,        # bool.
    xlim=None,                  # tuples. 当share{x, y}起作用, 设置每个facet的刻度范围
    ylim=None,                  # tuples. 当share{x, y}起作用, 设置每个facet的刻度范围
    subplot_kws=None,           # dict. matplotlib subplot(s) 的参数
    gridspec_kws=None           # dict.  matplotlib.gridspec.GridSpec()的参数
)
```


2. 对象方法
    1. add_legend([legend_data, title, ...]): 添加legend
    2. apply(func, *args, **kwargs)
    3. despine(**kwargs)
    4. facet_axis(row_i, col_j[, modify_state])
    5. facet_data()
    6. map(func, *args, **kwargs): 参数只能固定位置传值
    7. map_dataframe(func, *args, **kwargs): 参数可以根据参数名传值
    8. pipe(func, *args, **kwargs)
    9. refline(*[, x, y, color, linestyle]): 添加相关性线
    10. savefig(*args, **kwargs): 保存图
    11. set(**kwargs): 给每个facet设置参数
    12. set_axis_labels([x_var, y_var, clear_inner]): 左侧和西面设置刻度标签
    13. set_titles([template, row_template, ...]): 每个facet上设置标题
    14. set_xlabels([label, clear_inner]): x轴轴标签
    15. set_xticklabels([labels, step]): x轴刻度标签
    16. set_ylabels([label, clear_inner]): y轴轴标签
    17. set_yticklabels([labels]): y轴刻度标签
    18. tick_params([axis]): 刻度参数
    19. tight_layout(*args, **kwargs)

3. 对象属性
    1. ax: matplotlib.axes.Axes 
    2. axes: matplotlib.axes.Axes
    3. axes_dict: key是facet的名称, value是matplotlib.axes.Axes
    4. figure: matplotlib.figure.Figure
    5. legend: matplotlib.legend.Legend