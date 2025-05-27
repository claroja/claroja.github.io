# axis

`matplotlib.axis.Axis` container artist用来控制`tick lines, grid lines, tick labels, axislabel`

1. 每个`Axis`对象中都包含了`label`属性(`axes`中使用`xlabel`和`ylabel`设置)
2. 每个`Axis`对象中都包含了`line`, `ticks`, `ticklabels`还可以通过`axis.Axis.get_major_ticks`, `axis.Axis.get_minor_ticks`分别获得`长刻度线`和`短刻度线`

一般不直接操作`axis`对象, 而是通过以下方法直接设置:
1. `Axes.get_x,yaxis()`
2. `Axes.get,set_x,ylim()`
3. `Axes.get,set_x,ylabel()`
4. `Axes.get,set_x,yscale()`






## API
`class matplotlib.axis.Axis(axes, *, pickradius=15)`
[参考官网](https://matplotlib.org/stable/api/axis_api.html#matplotlib.axis.Tick)










参考:
https://matplotlib.org/stable/tutorials/intermediate/artists.html#axis-containers