
在x轴或y轴绘制刻度线表示边缘分布(marginal distributions). 可以看清每个观测值的位置.


## 最佳实践

不仅能看到每个类型的数量, 还能看到每个类型, 具体观测值的位置.

```python
import seaborn as sns
penguins = sns.load_dataset("penguins")
sns.displot(data=penguins, y="flipper_length_mm", rug=True)
```

## 基础
1. Axes-level 
2. 绘制变缘分布


## [rugplot](https://seaborn.pydata.org/generated/seaborn.rugplot.html)

1. 参数
    ```python
    seaborn.rugplot(
        data=None,                  # pandas.DataFrame, numpy.ndarray, mapping, or sequence
        *, 
        x=None,                     # vectors or keys in data. x轴绘制
        y=None,                     # vectors or keys in data. y轴绘制
        hue=None,                   # vector or key in data. 不同分类不同颜色
        height=0.025,               # float. 高度
        expand_margins=True,        # bool.
        palette=None,               # string, list, dict, or matplotlib.colors.Colormap. 
        hue_order=None,             # vector of strings. 
        hue_norm=None,              # tuple or matplotlib.colors.Normalize
        legend=True,                # bool
        ax=None,                    # matplotlib.axes.Axes
        **kwargs                    # matplotlib.collections.LineCollection()的参数
    )
    ```

2. 返回

    matplotlib.axes.Axes



