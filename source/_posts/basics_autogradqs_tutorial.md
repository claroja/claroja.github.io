---
title: basics_autogradqs_tutorial
toc: true
date: 2021-10-25 22:03:54
tags:
---


在训练网络上时, 我们使用`back propagation`的算法, parameters(模型的weights), 通过`gradient` of the `loss function`来调整.
PyTorch通过内置的`torch.autograd`来计算`gradients`
考虑一层的神经网络, 输入是$$x$$, parameters是$$w$$和$$b$$:
```python
import torch

x = torch.ones(5)  # input tensor
y = torch.zeros(3)  # expected output
w = torch.randn(5, 3, requires_grad=True)
b = torch.randn(3, requires_grad=True)
z = torch.matmul(x, w)+b
loss = torch.nn.functional.binary_cross_entropy_with_logits(z, y)
```
上面的代码创建的网络结构如下:
![](https://pytorch.org/tutorials/_images/comp-graph.png)
$$w$$和$$b$$是parameters, 我们需要optimize.通过loss function来计算这些variables的gradients, 所以要`requires_grad`为`true`

每个tensor都有一个`grad_fn`来计算`forward direction`和`backward propagation`

```python
print('Gradient function for z =', z.grad_fn)
print('Gradient function for loss =', loss.grad_fn)
```

# Computing Gradients
我们需要计算$$x$$和$$y$$对应的梯度$$\frac{\partial loss}{\partial w}$$和$$\frac{\partial loss}{\partial b}$$.为了计算这些derivatives, 我们可以使用`loss.backward()`,然后通过`w.grad`和`b.grad`来获取具体的值.

```python
loss.backward()
print(w.grad)
print(b.grad)
```
注意, 
1. 只有parameters设置了`requires_grad=true`
2. 只能在graph中使用一次`backward()`来进行gradient calculations.如果需要多次计算, 则需要`backward(retain_graph=True)`


# Disabling Gradient Tracking
默认所有`requires_grad=True`的`tensor`都会保留计算的历史和支持gradient计算.但是有些情况不需要这些属性, 比如计算`forward`可以提高计算速度, 或`finetuning a pretrained network`需要frozen parameters的时候.

```python
z = torch.matmul(x, w)+b
print(z.requires_grad)

with torch.no_grad():
    z = torch.matmul(x, w)+b
print(z.requires_grad)
```

另一种方式是:
```python
z = torch.matmul(x, w)+b
z_det = z.detach()
print(z_det.requires_grad)
```

# Optional Reading: Tensor Gradients and Jacobian Products


参考:

https://pytorch.org/tutorials/beginner/basics/autogradqs_tutorial.html#automatic-differentiation-with-torch-autograd