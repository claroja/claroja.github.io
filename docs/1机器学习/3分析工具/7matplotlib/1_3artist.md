# artist

有两种`Artists`:`primitives`和`containers`
1. `primitives`指的是基本的图像对象, 比如`Line2D`, `Rectangle`, `Text`...
2. `containers`指的是`Figure`, `Axes`, `Axis` 

基本的绘图流程是:
1. 创建`Figure`对象, `matplotlib.pyplot.figure()`
2. 使用`Figure`创建`Axes`对象, `fig.add_subplot(2, 1, 1)` 或 `fig.add_axes`
3. 使用`Axes`创建`primitives`对象

```python
fig = plt.figure()  # 创建fig
ax = fig.add_axes([0.15, 0.1, 0.7, 0.3])  # 使用`add_axes`创建`axes`对象(实际中进场使用`subplot`,`subplot`是`Axes`的子类)
line, = ax.plot([1,2,3]) # 创建primitives对象, 这里创建的是Line2D对象
```

`ax.plot`创建了`Line2D`对象, 并将其加入到`Axes`. 可以使用`Axes.lines`获得刚刚创建的`Line2D`对象

```python
ax.lines[0]  # <matplotlib.lines.Line2D at 0x19a95710>
line  # <matplotlib.lines.Line2D at 0x19a95710>
line.remove()  # 移除对象
```





参考:
https://matplotlib.org/stable/tutorials/intermediate/artists.html