---
title: numpy_element
toc: true
date: 2021-11-04 23:08:53
tags:
---
# 索引
## 一维
```python
import numpy as np
data=np.array([1,2,3,4])
data[0]  # 1 单个索引, 传入整型
data[[1,3]]  # array([2, 4]), 多个索引传入列表
data[[True,False,True,False]]  # array([1, 3]), 多个索引, 传入等长的Boolean数组
data[0:2]  # array([1,2]) 切片索引, 使用":"号, 注意是左闭右开的
data[-2:]  # 从倒数第二个数开始切片
```

## 二维
```python
import numpy as np
data = np.array([[1,2,3],[4,5,6],[7,8,9]])

data[1,1]  # 5, 索引单值, 第一个是第一维下标, 第二个是第二维下标. 等价于data[1][1]
data[[1,2], 1] # array([5, 8]),  索引多值, 取第一行和第二行, 取第一列
data[[True,False,True],[False,False,True]]  # array([3, 9])
data[0:2,1] # array([2, 5]),  索引多行单列, ":"用法参考一维
data[:,1]  # array([2, 5, 8]), 取所有行, 和第一列
data[1,:]  # array([4, 5, 6]), 取第一行, 和所有列
```

## 步长索引
```python
import numpy as np
data=np.array([1,2,3,4])
data[::-1]  # array([4, 3, 2, 1])
data[2:0:-1]  # array([3, 2]), 此时第一位的1, 是从反转后的数组array([4, 3, 2, 1]), 右边边开始数, 仍然是闭区间. 第二维是从右边开始数, 仍然是开区间
```


# 排序
`np.sort()` 返回排序后的数组
```python
import numpy as np
x = np.array([[3,7],[9,1]])
np.sort(x,axis=0)  # 行方向排序
np.sort(x,axis=1)  # 列方向排序
```

kind参数是排序的算法:'quicksort'(快排), 'mergesort'(归并), 'heapsort'(堆排序), 'stable'(稳定排序)


`np.argsort()`返回元素的排名
```python
x = np.array([3, 1, 2])
np.argsort(x)
# array([1, 2, 0])
```


`np.flipud()`反向排序

```python
import numpy as np
a = np.array([1,2,3,4,5,6])
b = np.flipud(a)  # [6 5 4 3 2 1]

b=a[::-1] # 另外一个简单的方法
```



# 最大值最小值

```python
import numpy as np
a=np.array([1,2,3,2])
a.max()
a.argmax() #返回第一个最大值的索引
a.min()
a.argmin() #返回第一个最小值的索引
```

# 条件筛选

```python
import numpy as np
x=np.array([1,2,3,2])
np.where(x>1)  # 返回大于1元素的下标 (array([1, 2, 3], dtype=int64),) 注意这里返回的是二元数组, 取得下标还需要使用索引np.where(x>1)[0]
x[np.where(x>1)]  # 取出大于1的元素, 真奇怪, 这个不用索引就可以用
```