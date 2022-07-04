---
title: tensor_item
toc: true
date: 2021-11-26 22:03:54
tags:
---

 loss 取纯数值，会用到`loss.item()`, 返回的是python number类型. 此方法不需要考虑tensor是再GPU还是CPU, 也不需要考虑`requires_grad=True`而需要调用`detach()`, `item()`会自动处理这些.

 `item()`只适用于tensor只包含一个元素的时候(大多数时loss就只有一个值). 如果是多个值可以使用`tolist()`


 ```python
import torch

x = torch.tensor([0.1], requires_grad=True, device='cuda')
print(x)  # tensor([-0.4717], device='cuda:0', requires_grad=True)

y = x.item()
print(y, type(y))
# -0.4717346727848053 <class 'float'>

x = torch.tensor([0.1,0.2], requires_grad=True, device='cuda')
y = x.tolist()
print(y, type(y))

 ```