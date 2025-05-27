# tick

`matplotlib.axis.Tick`是一个容器类型, 包含了`tick`, `label`对象. 一般不直接操作`Tick`对象, 而是通过:
1. `ax.set_xticks`来设置tick的坐标(`ticks`)和标签(`labels`)
2. `ax.get_xticks`来获得设置好的ticks的坐标, 少用.
3. `ax.get_xticklabels()`来获得标签`labels`, 本质上是包含多个`matplotlib.text.Text`对象的列表
4. `get_ticklines()`来获得刻度线, 本质上是包含多个`matplotlib.lines.Line2D`对象的列表

## 调整刻度显示

```python
import numpy as np
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
x = np.arange(0, 2*np.pi, 0.01)
ax.set_xticks(
    ticks =  [0., .5*np.pi, np.pi, 1.5*np.pi, 2*np.pi],
    labels=["$0$", r"$\frac{1}{2}\pi$",r"$\pi$", r"$\frac{3}{2}\pi$", r"$2\pi$"]
)
ax.plot(x, np.sin(x))
ax.get_xticks()  # array([0.        , 1.57079633, 3.14159265, 4.71238898, 6.28318531])
xticklabels = ax.get_xticklabels()
xticklabels[0].set(color="red")  # 更改x轴第一个刻度标签为红色

## xticklines = ax.get_xticklines() # 有问题, 偶数的下标对应图片显示, 奇数的不知道是什么
## xticklines[4].set(color="red",markersize=20,markeredgewidth=20)  # 颜色不对
fig.show()
```

## API
[参考](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.set_xticks.html)
`Axes.set_xticks(ticks, labels=None, *, minor=False, **kwargs)`
### 参数
参数|描述
--|--
`ticks: list of floats`| 设置刻度显示的位置
`labels: list of str, optional`|设置刻度显示的标签
`minor: bool, default: False`|



参考:
https://matplotlib.org/stable/tutorials/intermediate/artists.html#tick-containers
https://matplotlib.org/stable/gallery/axes_grid1/simple_axisline4.html#sphx-glr-gallery-axes-grid1-simple-axisline4-py