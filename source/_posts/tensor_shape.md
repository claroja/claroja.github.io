---
title: tensor_shape
toc: true
date: 2021-11-26 22:03:54
tags:
---
# 更改形状1: shape(view)

```python
z = torch.tensor([[1, 2, 3, 4],
          [5, 6, 7, 8]])


z.shape
# torch.Size([2, 4])

z.reshape(-1)  # 将z变成 1维, 行自动计算
# tensor([1, 2, 3, 4, 5, 6, 7, 8])

z.reshape(-1, 1)  # 将z变成2维, ?行1列, 行自动计算
# tensor([[1],
#         [2],
#         [3],
#         [4],
#         [5],
#         [6],
#         [7],
#         [8]])
z.reshape(-1, 2)  # 将z变成2维, ?行2列, 行自动计算
# tensor([[1, 2],
#         [3, 4],
#         [5, 6],
#         [7, 8]])

```

.view()方法也可以实现.shape()的功能, 二者的区别[参考](https://blog.csdn.net/Flag_ing/article/details/109129752)



# 更改形状2: squeeze和unsqueeze

## 增加维度
torch.unsqueeze()对应了np.expand_dims()
```python
x = torch.tensor([1,2,3])

x.shape  # 1dim

y = torch.unsqueeze(x,axis=0)  # array([[1, 2, 3]])
y.shape  # (1,3) 2dim, 在原有的1dim左边添加一个维度

z = torch.unsqueeze(x,axis=1)
# tensor([[1],
#        [2],
#        [3]])
z.shape  # (3, 1) 2dim, 在原有的1dim右边边添加一个维度

```

## 减少维度

torch.squeeze()对应了np.squeeze()
```python
x = torch.tensor([[[0], [1], [2]]])
x.shape  # (1, 3, 1)
y = torch.squeeze(x)  # tensor([0, 1, 2]), 去掉所有长度为1的维度
y.shape  # (3,)

z = torch.squeeze(x, axis=0) # 仅去掉dim=0的维度
# tensor([[0],
#         [1],
#         [2]])
z.shape # (3, 1)
```


# 拼合

## 垂直方向vstack

torch.vstack()对应np.vstack()
```python
a = torch.tensor([[1], [2], [3]])
b = torch.tensor([[4], [5], [6]])
torch.vstack((a,b))
# tensor([[1],
#         [2],
#         [3],
#         [4],
#         [5],
#         [6]])

```

## 水平方向hstack
torch.hstack()对应np.hstack()
```python
a = torch.tensor([[1],[2],[3]])
b = torch.tensor([[4],[5],[6]])
torch.hstack((a,b))
# tensor([[1, 4],
#        [2, 5],
#        [3, 6]])
```


# 转置
和numpy的ndarray对象相同
```python
a = torch.tensor([[1,2,3],[4,5,6]])
a.T # 转置
# tensor([[1, 4],
#         [2, 5],
#         [3, 6]])
```