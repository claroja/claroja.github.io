# scatter


绘制散点图

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.set(
    xlim=(0, 4),
    ylim=(0, 4),
)


x = [1,2,3]
y = [1,2,3]
sizes = [10,20,30]
colors = ["red", "yellow", "green"]
scatters = ax.scatter(x, y, s=sizes, c=colors)
scatters.set(color="red")  # 可以再次操作颜色
fig.show()
```


## API
[参考](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.scatter.html#matplotlib.axes.Axes.scatter)
`Axes.scatter(x, y, s=None, c=None, marker=None, cmap=None, norm=None, vmin=None, vmax=None, alpha=None, linewidths=None, *, edgecolors=None, plotnonfinite=False, data=None, **kwargs)`
### 参数
参数|描述
--|--
`x, y`: `float or array-like, shape (n, )`|点的位置
`s`: `float or array-like, shape (n, ), optional`|点的大小
`c`: `array-like or list of colors or color, optional`|点的颜色
`marker`: `MarkerStyle default: 'o'`|点的形状
`cmap`: `str or Colormap default: 'viridis'`|颜色映射
`norm`: `str or Normalize, optional`|将标量数据映射到$[0,1]$, 然后使用cmap来映射
`vmin, vmax`: `float, optional`|
`alpha`: `float, default: None`|
`linewidths`: `float or array-like, default: 1.5`|marker的边缘宽度
`edgecolors`: `{'face', 'none', None} or color or sequence of color default: 'face'`|marker的边缘颜色

### 返回
1. 路径的集合对象[PathCollection](https://matplotlib.org/stable/api/collections_api.html#matplotlib.collections.PathCollection)


参考:
https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.scatter.html