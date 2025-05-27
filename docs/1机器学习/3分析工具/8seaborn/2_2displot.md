# displot


## 最佳实践



## displot基础
1. Figure-level方法
1. 分布图像
2. 通过kind控制底层方法
    1. histplot() (with kind="hist")
    2. kdeplot() (with kind="kde")
    3. ecdfplot() (with kind="ecdf")
3. 布局使用FacetGrid




```python
seaborn.displot(
    data=None,          # pandas.DataFrame, numpy.ndarray, mapping, or sequence. 
    *, 
    x=None,             # vectors or keys in data. 在x轴绘制
    y=None,             # vectors or keys in data. 在y轴绘制 
    hue=None,           # vector or key in data, 不同分类用不同颜色表示
    row=None,           # vectors or keys in data, 不同分类多列展示
    col=None,           # vectors or keys in data, 不同分类多行展示
    weights=None,       # vector or key in data, 就散分布时用的权重
    kind='hist',        # {“hist”, “kde”, “ecdf”}, 分布, 密度, 累积
    rug=False,          # bool. True: 使用rugplot()绘制
    rug_kws=None,       # dict. rugplot()的方法
    log_scale=None,     # bool or number, or pair of bools or numbers. 对数缩放.
    legend=True,        # bool. False: 不显示
    palette=None,       # string, list, dict, or matplotlib.colors.Colormap. hue所使用的调色盘. string: 传入color_palette(); list和dict对应不同的分类.
    hue_order=None,     # vector of strings. hue的顺序
    hue_norm=None,      # tuple or matplotlib.colors.Normalize. 
    color=None,         # matplotlib color. 当没有hue映射时, 使用.
    col_wrap=None,      # int. 每一行包含的列数, 超过自动换行.
    row_order=None,     # vector of strings. 图行指定顺序.
    col_order=None,     # vector of strings. 图列指定顺序.
    height=5,           # scalar. 每个facet的高度
    aspect=1,           # scalar. width = aspect * height
    facet_kws=None,     # dict. FacetGrid()的参数
    **kwargs
)
```

返回

FacetGrid











