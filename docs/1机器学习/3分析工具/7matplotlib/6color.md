# color

## artist的颜色设置

### 1维对象
比如折线图, 通常使用`color`参数来设置

### 2维对象
比如散点图, 通常使用`facecolor`来设置背景颜色, `edgecolor`来设置边框颜色



## color bar
颜色渐变指示器
```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()

sc = ax.scatter([1, 2], [1, 2], c=[1, 2])
ax.set_ylabel('YLabel', loc='top')
ax.set_xlabel('XLabel', loc='left')
cbar = fig.colorbar(sc)
cbar.set_label("ZLabel", loc='top')

plt.show()
```


## 教程
### 指定颜色的格式
[参考](https://matplotlib.org/stable/tutorials/colors/colors.html).
Matplotlib可以通过以下格式来指定颜色:
Format|例子
--|--
RGB or RGBA (red, green, blue, alpha) tuple of float values in a closed interval [0, 1].|`(0.1, 0.2, 0.5, 0.3)`
Case-insensitive hex RGB or RGBA string.|`#0f0f0f80`
Case-insensitive RGB or RGBA string equivalent hex shorthand|`#fb1` as `#ffbb11`
String representation of float value in closed interval [0, 1] for grayscale values.|`0` as black, `1` as white
Single character shorthand notation for some basic colors.|'b' as blue

### Colorbars
将标量(scalar)和颜色映射起来, [参考](https://matplotlib.org/stable/tutorials/colors/colorbar_only.html)
#### continuous colorbar
绘制连续的渐变色
```python
import matplotlib.pyplot as plt
import matplotlib as mpl

fig, ax = plt.subplots(figsize=(6, 1))
fig.subplots_adjust(bottom=0.5)

cmap = mpl.cm.cool  # 冷色系颜色组(从天蓝色变成紫色)
norm = mpl.colors.Normalize(vmin=5, vmax=10)  # 标准化, 5为最小值对应的颜色, 10为最大值对应的颜色

fig.colorbar(mpl.cm.ScalarMappable(norm=norm, cmap=cmap),
            cax=ax, orientation='horizontal', label='Some Units')
fig.show()
```

####  discrete colorbar
绘制离散的渐变色
```python
import matplotlib.pyplot as plt
import matplotlib as mpl

fig, ax = plt.subplots(figsize=(6, 1))
fig.subplots_adjust(bottom=0.5)

cmap = mpl.cm.viridis # 翠绿色系, 颜色从深蓝色变成黄绿色
bounds = [-1, 2, 5, 7, 12, 15]
norm = mpl.colors.BoundaryNorm(bounds, cmap.N, extend='both')  # 离散标准化

fig.colorbar(mpl.cm.ScalarMappable(norm=norm, cmap=cmap),
            cax=ax, orientation='horizontal',
            label="Discrete intervals with extend='both' keyword")
            
fig.show()
```



### colormaps
数值(scalar)和颜色的映射
#### ListedColormap
`ListedColormap`在`.color`属性下存储颜色的值.
```python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib as mpl
from matplotlib.colors import ListedColormap, LinearSegmentedColormap

viridis = mpl.colormaps['viridis'].resampled(8)  # 选取8个颜色
print(viridis(0.56))  # 0.56对应的色值
print('viridis.colors', viridis.colors)  # 查看所有颜色
print('viridis(range(8))', viridis(range(8)))  # 
print('viridis(np.linspace(0, 1, 8))', viridis(np.linspace(0, 1, 8)))
```
#### LinearSegmentedColormap
没有`.color`属性
```python
copper = mpl.colormaps['copper'].resampled(8)

print('copper(range(8))', copper(range(8)))
print('copper(np.linspace(0, 1, 8))', copper(np.linspace(0, 1, 8)))
```









https://matplotlib.org/stable/tutorials/introductory/quick_start.html#color-mapped-data

[参考官网]()