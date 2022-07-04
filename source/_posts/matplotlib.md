---
title: matplotlib
toc: true
date: 2021-11-26 22:03:54
tags:
---



![](https://matplotlib.org/stable/_images/anatomy.png)

1. 画框(Figure)里面包含了很多画(Axes)
2. 每幅画(Axes)中又包含了很多艺术对象(artists), 比如:标题(titles), 图例(legends), Line2D(直线)
3. 每幅画(Axes)还包含了多个轴(axis), 二维平面是是2个轴(axis), 三维是3个轴(axis)


有两种作图方法:
- object-oriented style
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

- pyplot-style

```python
x = np.linspace(0, 2, 100)  # Sample data.
plt.plot(x, x, label='linear')  # Plot some data on the (implicit) axes.
plt.plot(x, x**2, label='quadratic')  # etc.
plt.xlabel('x label')
plt.ylabel('y label')
plt.title("Simple Plot")
plt.legend()
```


# 常用命令

参数|描述
--|--
subplot()|多个图
plot()|线图
hist()|直方图
legent()|图例
grid()|[参考](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.grid.html#matplotlib.pyplot.grid)
x,ylabel()|x-axis的名称
x,ylim()|x轴的长度
x,yscale()|[参考](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.xscale.html#matplotlib.pyplot.xscale)
x,yticks()|[参考](https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.xticks.html#matplotlib.pyplot.xticks)



参考:
https://matplotlib.org/stable/tutorials/introductory/usage.html