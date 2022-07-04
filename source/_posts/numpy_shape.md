---
title: numpy_shape
toc: true
date: 2021-11-04 23:08:53
tags:
---
# 更改形状1: shape
使用reshape来更改数组的形状, 包含了flatten的操作
```python
z = np.array([[1, 2, 3, 4],
          [5, 6, 7, 8]])
z.shape
# (2, 4)
z.reshape(-1)  # 将z变成1维, 行自动计算
# array([1, 2, 3, 4, 5, 6, 7, 8])
z.reshape(-1, 1)  # 将z变成1维, ?行1列, 行自动计算
# array([[1],
#         [2],
#         [3],
#         [4],
#         [5],
#         [6],
#         [7],
#         [8]])
z.reshape(-1, 2)  # 将z变成2维,  ?行2列, 行自动计算
# array([[1, 2],
#        [3, 4],
#        [5, 6],
#        [7, 8]])
```



# 更改形状2: expand_dims和unsqueeze

(1) 增加维度
`expand_dims(a, axis)`: 在指定维度的左边增加一个维度.
```python
import numpy as np
x = np.array([1,2,3])  # array([1, 2, 3])
x.shape  # 1dim

y = np.expand_dims(x,axis=0)  # array([[1, 2, 3]])
y.shape  # (1,3) 2dim, 在原有的1dim左边添加一个维度

z = np.expand_dims(x,axis=1)
# array([[1],
#        [2],
#        [3]])
z.shape  # (3, 1) 2dim, 在原有的1dim右边边添加一个维度
```

(2) 减少维度
`squeeze(a, axis=None)`去掉长度为1的维度

```python
import numpy as np
x = np.array([[[0], [1], [2]]])
x.shape  # (1, 3, 1)
y = np.squeeze(x)  # array([0, 1, 2]), 去掉所有长度为1的维度
y.shape  # (3,)

z = np.squeeze(x, axis=0) # 仅去掉dim=0的维度
# array([[0],
#        [1],
#        [2]])
z.shape # (3, 1)
```


# 拼合
`vstack`
```python
a = np.array([[1], [2], [3]])
b = np.array([[4], [5], [6]])
np.vstack((a,b))
# array([[1],
#        [2],
#        [3],
#        [4],
#        [5],
#        [6]])
```
`hstack`
```python
a = np.array([[1],[2],[3]])
b = np.array([[4],[5],[6]])
np.hstack((a,b))
# array([[1, 4],
#        [2, 5],
#        [3, 6]])
```


# 转置
```python
import numpy as np
a = np.array([[1,2,3],[4,5,6]])
a.T # 转置
a.transpose((1,0)) # transpose进行的操作其实是将各个维度重置，原来的维度的排序是(0,1), 转换成(1,0)相当于进行了转置
```