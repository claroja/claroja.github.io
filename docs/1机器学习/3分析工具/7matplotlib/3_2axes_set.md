# axex_set


## 最佳实践

Axes.set的参数, 都对应了set_xxx()方法, 比如Axes.set(xlabel=)等价于Axes.set_xlabel(), 当然也对应有Axes.get_xlabel()方法




## [参数](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.set.html)
```python
Axes.set(
    *, 
    adjustable=<UNSET>,                         # 
    agg_filter=<UNSET>, 
    alpha=<UNSET>,                              # scalar or None, 透明度
    anchor=<UNSET>, 
    animated=<UNSET>, 
    aspect=<UNSET>, 
    autoscale_on=<UNSET>, 
    autoscalex_on=<UNSET>, 
    autoscaley_on=<UNSET>, 
    axes_locator=<UNSET>, 
    axisbelow=<UNSET>, 
    box_aspect=<UNSET>,                         # float or None, axes的高宽比
    clip_box=<UNSET>, 
    clip_on=<UNSET>, 
    clip_path=<UNSET>, 
    facecolor=<UNSET>,                          # color, axes的背景颜色
    figure=,                                    # Figure, 设置figrue
    forward_navigation_events=<UNSET>, 
    frame_on=<UNSET>, 
    gid=<UNSET>, 
    in_layout=<UNSET>, 
    label=<UNSET>,                              # object, 在legend中展示的label
    mouseover=<UNSET>, 
    navigate=<UNSET>, 
    path_effects=<UNSET>, 
    picker=<UNSET>, 
    position=<UNSET>, 
    prop_cycle=<UNSET>, 
    rasterization_zorder=<UNSET>, 
    rasterized=<UNSET>, 
    sketch_params=<UNSET>, 
    snap=<UNSET>, 
    subplotspec=<UNSET>, 
    title=<UNSET>,                              # str, 设置标题
    transform=<UNSET>, 
    url=<UNSET>,                                # str. 设置超链接
    visible=<UNSET>,                            # bool. 是否可见
    xbound=<UNSET>,                             # (lower: float, upper: float). x轴范围
    xlabel=<UNSET>,                             # str. x轴名称
    xlim=<UNSET>,                               # (left: float, right: float). x轴刻度范围
    xmargin=<UNSET>, 
    xscale=<UNSET>,                             # {"linear", "log", "symlog", "logit", ...} or ScaleBase. x轴缩放
    xticklabels=<UNSET>,                        # sequence of str or of Texts. x轴刻度名
    xticks=<UNSET>,                             # 1D array-like. x轴刻度(显示哪些刻度)
    ybound=<UNSET>, 
    ylabel=<UNSET>, 
    ylim=<UNSET>, 
    ymargin=<UNSET>, 
    yscale=<UNSET>, 
    yticklabels=<UNSET>, 
    yticks=<UNSET>, 
    zorder=<UNSET>
)
```











