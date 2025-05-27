# vhline

## 绘制垂直线

```python
import matplotlib.pyplot as plt

fig, ax = plt.subplots()
ax.set(
    xlim=(0, 4),
    ylim=(0, 4),
)

ax.axhline(y=2)
ax.axvline(x=2)
fig.show()
```


## API
[参考](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.axhline.html)
`Axes.axhline(y=0, xmin=0, xmax=1, **kwargs)`

### 参数
参数|描述
--|--
y,x|当绘制水平线hline时, 设置y参数. 但桂枝垂直线vline时, 设置x参数
x,ymin|
x,ymax|

### 返回
[Line2D](https://matplotlib.org/stable/api/_as_gen/matplotlib.lines.Line2D.html#matplotlib.lines.Line2D)对象.