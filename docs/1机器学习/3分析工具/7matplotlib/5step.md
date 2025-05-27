# step

阶梯图

## 例子


```python
import matplotlib.pyplot as plt

fig, axs  = plt.subplots(2,1)

x = [1, 3, 4, 5, 7]
y = [1, 9, 16, 25, 49]
axs[0].plot(x, y)
lines = axs[1].step(x, y)

fig.show()
```
## API
[参考](https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.step.html#matplotlib.axes.Axes.step)
`Axes.step(x, y, *args, where='pre', data=None, **kwargs)`

### 参数
参数|描述
--|--
`x`: `array-like`|x轴的值
`y`: `array-like`|y轴的值



### 返回
`Line2D`对象的列表


参考:
https://www.geeksforgeeks.org/matplotlib-pyplot-step-function-in-python/