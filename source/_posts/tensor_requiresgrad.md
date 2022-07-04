---
title: tensor_requiresgrad
toc: true
date: 2021-11-26 22:03:54
tags:
---

tensor被创建的时候, 默认`tensor.requires_grad`为`False`, 既不需要求导.

在tensor的计算中, 如果输入中, 有一个输入需要求导`tensor.requires_grad=True`, 输出一定会需要求导. 只有当所有输入都不需要求导的时候, 输出才会不需要求导.

比如我们喂给模型的数据(`DataLoader`取出的数据), 这些数据是不需要求导的. 网络的输出也是不需要求导的. 但是, 损失值loss是自动求导的, 因为虽然输入的训练数据是默认不求导的, 而model中的所有参数是默认求导的, 正是, 只要输入一个需要求导, 那么输出的网络结果必定会需要求导.

```python
import torch
import torch.nn as nn

input = torch.randn(10,3)
print(input.requires_grad)
# False

net = nn.Sequential(nn.Linear(3,1))
for param in net.named_parameters():
    print(param[0], param[1].requires_grad)
# 0.weight True
# 0.bias True

output = net(input)
print(output.requires_grad)
# True
```

注意, 不要把网络的输入的`requires_grad`设置为`True`. 虽然不会影响反向传播, 但是需要额外计算导数, 会增加运算量. 只需要模型中的参数求导, 来更新网络即可.


# Finetuning
如果我们想进行Finetuning(迁移学习), 既在训练过程中冻结部分网络, 部分网络的参数不再更新. 就可通过设置`requires_grad=False`来实现.[官网参考](https://pytorch.org/tutorials/beginner/blitz/autograd_tutorial.html#exclusion-from-the-dag)
下面的代码中, 冻结了 resnet 前边的所有层，在训练过程中只更新最后的fc层中的参数。
```python
model = torchvision.models.resnet18(pretrained=True)
for param in model.parameters():
    param.requires_grad = False
# 用一个新的 fc 层来取代之前的全连接层, 默认 requires_grad=True
model.fc = nn.Linear(512, 100)
# 只更新 fc 层的参数
optimizer = optim.SGD(model.fc.parameters(), lr=1e-2, momentum=0.9)
```

# torch.no_grad
`require_grad=False`的上下文函数, 可以简单实现暂时不需要追踪参数导数的目的.
```python
import torch

x = torch.randn(3, requires_grad = True)
y = x*x
print(x.requires_grad)  # True
print(y.requires_grad)  # True
print((x*x).requires_grad)  # True

with torch.no_grad():
    print(x.requires_grad)  # True
    print(y.requires_grad)  # True
    print((x * x).requires_grad)  # False

print(x.requires_grad)  # True
print(y.requires_grad)  # True
print((x * x).requires_grad)  # True
```