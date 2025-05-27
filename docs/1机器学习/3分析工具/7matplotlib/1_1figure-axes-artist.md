# word2vector

## 认识matplotlib对象

![](https://matplotlib.org/stable/_images/anatomy.png)

`matplotlib`组成对象:
1. 画框(Figure)画板里面包含了很多坐标系(Axes)
2. 每个坐标系(Axes)中又包含了很多艺术对象(artists), 比如: 标题(titles), 图例(legends), Line2D(直线)
3. 每个坐标系(Axes)还包含了多个轴(axis), 二维平面是是2个轴(axis), 三维是3个轴(axis)
4. 每个轴(axis)包含了一些列的Tick

这些对象统称为`artist`, 参考[matplotlib_artist](/matplotlib_artist/)

## matplotlib的两种作图风格

建议使用`object-oriented`风格来作图.作图的步骤为:
1. `fig, ax = plt.subplots() `创建画板和坐标系, 如果一个画板里包含多个坐标系则使用`fig, axs = plt.subplots(2, 2)`, 此时`axs`是一个列表包含了多个坐标系. 
2. 使用`ax`绘制图像主题, 比如`ax.plot()`, `ax.scatter()`
3. 使用`ax`绘制图像装饰, 比如`ax.set_xlabel`, `ax.set_ylabel`等

### object-oriented style
```python
x = np.linspace(0, 2, 100)  # Sample data.
fig, ax = plt.subplots()  # Create a figure and an axes. 后台使用`.pyplot.figure`创建fig对象
ax.plot(x, x, label='linear')  # Plot some data on the axes.
ax.plot(x, x**2, label='quadratic')  # Plot more data on the axes...
ax.set_xlabel('x label')  # Add an x-label to the axes.
ax.set_ylabel('y label')  # Add a y-label to the axes.
ax.set_title("Simple Plot")  # Add a title to the axes.
ax.legend()  # Add a legend.
```

### pyplot-style

```python
x = np.linspace(0, 2, 100)  # Sample data.
plt.plot(x, x, label='linear')  # Plot some data on the (implicit) axes.
plt.plot(x, x**2, label='quadratic')  # etc.
plt.xlabel('x label')
plt.ylabel('y label')
plt.title("Simple Plot")
plt.legend()
```

## 作图的案例
可以在这个[连接](https://matplotlib.org/stable/gallery/index.html)里找自己想要做的图形来参考.


参考:
https://matplotlib.org/stable/tutorials/introductory/usage.html