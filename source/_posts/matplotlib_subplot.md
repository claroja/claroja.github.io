---
title: matplotlib_subplot
toc: true
date: 2021-11-26 22:03:54
tags:
---

`matplotlib.pyplot.subplots(nrows=1, ncols=1, *, sharex=False, sharey=False, squeeze=True, subplot_kw=None, gridspec_kw=None, **fig_kw)`

# 应用

```python
import numpy as np
import matplotlib.pyplot as plt

# First create some toy data:
x = np.linspace(0, 2*np.pi, 400)
y = np.sin(x**2)


# Create two subplots and unpack the output array immediately
f, (ax1, ax2) = plt.subplots(1, 2, sharey=True)
ax1.plot(x, y)
ax2.scatter(x, y)
```

# 参数

参数|描述
--|--
nrows| 几行
ncols| 几列
sharex| bool, 默认false, 共享x轴
sharey| bool, 默认false, 共享y轴
squeeze| bool, 默认True, 如果为False, 则返回值都是2D array



# 返回

返回|描述
--|--
fig|Figure
ax|array of Axes


参考:
https://matplotlib.org/stable/api/_as_gen/matplotlib.pyplot.subplots.html