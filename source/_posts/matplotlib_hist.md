---
title: matplotlib_hist
toc: true
date: 2021-11-26 22:03:54
tags:
---

分布直方图

# 应用

```python
import numpy as np
import matplotlib.pyplot as plt

mu, sigma = 100, 15
x = mu + sigma * np.random.randn(10000)

# the histogram of the data
n, bins, patches = plt.hist(x, 50, density=1, facecolor='g', alpha=0.75)

print(n)
print(bins)
```


# 参数

参数|描述
--|--
x | sequence,
bins| int or sequence, 如果是int则直接在range中划分成int个bins. 如果是sequence, 比如[1,2,3,4], 第一个bin是`[1,2)`,第二个是`[2,3)`, 最后一个是`[3,4]`注意只有最后是个右闭的
range| tuple, 默认是`(x.min(), x.max())`
density| boole, 默认是False, 如果为True, 则返回probability density: 每个bin将数量除以总数量
weights| sequence, 默认为None,  每个bin的权重
cumulative| bool, 默认为False
bottom| array-like or scalar, 每个bin的位置, 每个bin的位置是bottom to bottom + hist(x, bins). 如果是scalar, 所有的同时移动
histtype| {'bar', 'barstacked', 'step', 'stepfilled'}, default: 'bar'
align| {'left', 'mid', 'right'}, default: 'mid'
orientation| {'vertical', 'horizontal'}, default: 'vertical'
color|color or array-like of colors, 默认为None
label|str, 默认为None
stackedbool| default: False


# 返回

返回|描述
--|--
n|array, 每个bin的值
bins|array, bins的边缘
patches|一些artists
