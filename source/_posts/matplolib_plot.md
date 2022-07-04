---
title: matplolib_plot
toc: true
date: 2021-11-26 22:03:54
tags:
---


做线图

方法 :`matplotlib.pyplot.plot(*args, scalex=True, scaley=True, data=None, **kwargs)`
返回 : [Line2D对象](https://matplotlib.org/stable/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D)


# 应用
```python
import numpy as np
import matplotlib.pyplot as plt
t = np.arange(0., 5., 0.2)
fig, axe = plt.subplots()
axe.plot(t, t, 'r--o') # 等价于axe.plot(t, t, c='r', ls='--', marker='o')
```



# 参数

参数|描述
--|--
x| x axis
y| y axis
alpha| 透明度
color or c| 颜色
fillstyle | 填充样式
label | 标签, 名称, 和legend关联
linestyle or ls | '-' or 'solid' , '--' or 'dashed', '-.' or 'dashdot', ':' or 'dotted'
linewidth or lw | 线宽
marker|数据对应点的形状,具体[参考](https://matplotlib.org/stable/api/markers_api.html#module-matplotlib.markers)
markeredgecolor or mec| 
markeredgewidth or mew|
markerfacecolor or mfc|
markersize or ms|
fmt|maker, line, with的快捷方法, 详细见下面的小节`[marker][line][color]`

# fmt


## Markers
[参考](https://matplotlib.org/stable/api/markers_api.html#module-matplotlib.markers)
参数|描述
--|--
'.'|point marker
','|pixel marker
'o'|circle marker
'v'|triangle_down marker
'^'|triangle_up marker
'<'|triangle_left marker
'>'|triangle_right marker

## Line Styles
参数|描述
--|--
'-'|solid line style
'--'|dashed line style
'-.'|dash-dot line style
':'|dotted line style


## colors
[参考](https://matplotlib.org/stable/tutorials/colors/colormaps.html)
可以使用简称'b',或全称'blue', 或'#008000'

参数|描述
--|--
'b'|blue
'g'|green
'r'|red
'c'|cyan
'm'|magenta
'y'|yellow
'k'|black
'w'|white






参考:
https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.plot.html#matplotlib.pyplot.plot