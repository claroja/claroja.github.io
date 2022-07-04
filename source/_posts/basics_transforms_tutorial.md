---
title: basics_transforms_tutorial
toc: true
date: 2021-10-25 22:03:54
tags:
---
# TRANSFORMS
数据个格式一般不是最终的训练需要的, 所以需要使用`torchvision.transforms`提供的方法进行转换.
`TorchVision`有两个参数:
1. `transform`转换特征
2. `target_transform`转换标签
二者都接收一个可调用的对象.
`FashionMNIST`中的特征是PIL Image格式, 标签是整型.为了训练, 我们需要将特征转换为normalized tensors, 将标签转换为one-hot encoded tensors.

```python
import torch
from torchvision import datasets
from torchvision.transforms import ToTensor, Lambda

ds = datasets.FashionMNIST(
    root="data",
    train=True,
    download=True,
    transform=ToTensor(),
    target_transform=Lambda(lambda y: torch.zeros(10, dtype=torch.float).scatter_(0, torch.tensor(y), value=1))
)
```

# ToTensor()
`ToTensor`将PIL `Image`或NumPy `ndarray`转换为`FloatTensor`, 并将图片的像素标准化到[0,1]

# Lambda()
我们定义了有一个将integer转换为one-hot编码的tensor.
首先创建一个长度为10(和我们标签的种类数量相同)的,初始值为0的tensor.
然后调用`scatter_`方法将y对应位置上的值设置为1
```python
target_transform = Lambda(lambda y: 
    torch.zeros(10, dtype=torch.float).
    scatter_(dim=0, index=torch.tensor(y), value=1))
```


参考:
https://pytorch.org/tutorials/beginner/basics/transforms_tutorial.html
https://pytorch.org/vision/stable/transforms.html