

## 最佳实践

1. 使用plt.subplots(figsize=(9, 6))来调整画布的大小
2. cmap = sns.diverging_palette(220, 10, as_cmap = True)参数调整颜色变化
3. ax.xaxis.tick_top()调整标签的位置

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Load the example flights dataset and convert to long-form
flights_long = sns.load_dataset("flights")
flights = (
    flights_long
    .pivot(index="month", columns="year", values="passengers")
)

# Draw a heatmap with the numeric values in each cell
f, ax = plt.subplots(figsize=(9, 6))
ax = sns.heatmap(
    flights, 
    cmap = sns.diverging_palette(220, 10, as_cmap = True),
    annot=True, 
    fmt="d", 
    linewidths=.5, 
    ax=ax
)
ax.xaxis.tick_top()
```

[代码参考](https://seaborn.pydata.org/examples/spreadsheet_heatmap.html)



## 基础
1. Axes-level 
2. 绘制热力图


## API


### [heatmap](https://seaborn.pydata.org/generated/seaborn.heatmap.html#seaborn.heatmap)

1. 参数
    ```python
    seaborn.heatmap(
        data,                   # DataFrame, index和column会作为label
        *, 
        vmin=None,              # floats, 颜色空间的最大值最小值映射
        vmax=None, 
        cmap=None,              # matplotlib colormap name or object, or list of colors, 颜色空间映射. 默认会依赖center参数
        center=None,            # float, 颜色的中心值
        robust=False,           # bool, 如果为True, 且vmin和vmax不存在, 颜色映射将使用分位数而不是极值
        annot=None,             # bool or rectangular dataset, True: 每个单元格显示数据; dataset: 用dataset数据替换元数据
        fmt='.2g',              # str, 数字格式化
        annot_kws=None,         # dict of key, value mappings, 当annot为True时, 传入matplotlib.axes.Axes.text()的参数
        linewidths=0,           # float, 单元格边框的宽度
        linecolor='white',      # color, 单元格边框的颜色
        cbar=True,              # bool, 是否画出color bar
        cbar_kws=None,          # dict of key, value mappings, matplotlib.figure.Figure.colorbar().的参数
        cbar_ax=None,           # matplotlib Axes, 在那个坐标系绘制colorbar, 默认在主坐标系中绘制
        square=False,           # bool, 单元格设置为正方形
        xticklabels='auto',     # “auto”, bool, list-like, or int, auto: 自动调整; bool: 是否使用dataframe的index和column; list-like: 自定义; int: 仅使用dataframe指定个数的index和column
        yticklabels='auto', 
        mask=None,              # bool array or DataFrame, 被遮罩的数据将不显示, 缺失值默认不显示
        ax=None,                # matplotlib Axes, 在哪个坐标系绘制
        **kwargs
    )
    ```

2. 返回

    matplotlib Axes

### [diverging_palette](https://seaborn.pydata.org/generated/seaborn.diverging_palette.html#seaborn-diverging-palette)

1. 参数

    ```python
    seaborn.diverging_palette(
        h_neg,              # float in [0, 359], 负值极值的颜色
        h_pos,              # float in [0, 359], 正值极值的颜色
        s=75,               # float in [0, 100], 饱和度
        l=50,               # float in [0, 100], 亮度
        sep=1,              # int, 
        n=6,                # int, 
        center='light',     # {“light”, “dark”},
        as_cmap=False       # bool, 
    )
    ```



2. 返回

    palette: list of RGB tuples or matplotlib.colors.ListedColormap