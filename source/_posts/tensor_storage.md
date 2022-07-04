---
title: tensor_storage
toc: true
date: 2021-11-26 22:03:54
tags:
---

`tensor`由头信息区(`Tensor`)和存储区(`Storage`).
- 头信息区主要保存着`Tensor`的形状(size),步长(stride),数据类型(type)等信息
- 存储区则保存真正的数据, 是连续的数组


```python
import torch
a = torch.arange(0, 6)  # tensor([0, 1, 2, 3, 4, 5])
a.storage()
#  0
#  1
#  2
#  3
#  4
#  5
# [torch.LongStorage of size 6]
b = a.view(2,3)
# tensor([[0, 1, 2],
#         [3, 4, 5]])
b.storage()
#  0
#  1
#  2
#  3
#  4
#  5
# [torch.LongStorage of size 6]
id(a) == id(b)  # False
id(a.storage) == id(b.storage)  # True

c = a[2:]  # tensor([2, 3, 4, 5])
# c.storage()
#  0
#  1
#  2
#  3
#  4
#  5
# [torch.LongStorage of size 6]
id(a.storage) == id(c.storage)  # True
```

绝大多数操作, 如`view()`, 不会修改`tensor`的存储区, 而是修改了`tensor`的头信息. 这种方法更节省内存, 计算更高效.
如果有些操作导致`tensor`的存储区不连续, 只需要调用`torch.contiguous`方法将其编程连续的数据, 该方法会复制数据到新的内存.