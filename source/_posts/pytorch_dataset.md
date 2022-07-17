---
title: pytorch_dataset
toc: true
date: 2021-11-26 22:03:54
tags:
---


# torch.utils.data.Dataset
代表这一数据的抽象类, 使用时需要继承`Dataset`并重写`__len__`和`__getitem__`这个两个函数.

```python
# 导入需要的包
import torch
import torch.utils.data.dataset as Dataset
import numpy as np

Data = np.asarray([[1, 2], [3, 4],[5, 6], [7, 8]])
Label = np.asarray([[0], [1], [0], [2]])

#创建子类
class subDataset(Dataset.Dataset):
    #初始化，定义数据内容和标签
    def __init__(self, Data, Label):
        self.Data = Data
        self.Label = Label
    #返回数据集大小
    def __len__(self):
        return len(self.Data)
    #得到数据内容和标签
    def __getitem__(self, index):
        data = torch.Tensor(self.Data[index])
        label = torch.IntTensor(self.Label[index])
        return data, label
data = subDataset(Data,Label)
```

- `__init__`方法用来载入数据
- `__len__`方法返回数据的长度
- `__getitem__`方法接收下标index, 并返回相应的数据, 注意是tuple类型, 元素是tensor类型


# torch.utils.data.TensorDataset
`torch.utils.data.TensorDataset` 继承自 `torch.utils.data.dataset`, 参数直接输入即可.

```python
import torch
import torch.utils.data as Data
Data = torch.tensor([[1, 2], [3, 4],[5, 6], [7, 8]])
Label = torch.tensor([[0], [1], [0], [2]])
torch_dataset = Data.TensorDataset(x, y)
```

# torchvision.datasets.ImageFolder
另外在`torchvison`这个包中还有一个更高级的有关于计算机视觉的数据读取类：`ImageFolder`，主要功能是处理图片，且要求图片是下面这种存放形式：
[官网API解释](https://pytorch.org/vision/stable/datasets.html#torchvision.datasets.ImageFolder)
按照以下的方式来组织训练集和测试集:
```sh
root/dog/xxx.png
root/dog/xxy.png
root/dog/[...]/xxz.png

root/cat/123.png
root/cat/nsdf3.png
root/cat/[...]/asd932_.png
```

## 输入
参数|描述
--|--
root|图片存储的根目录
transform|对图片类别进行预处理的操作
loader|表示数据集加载方式，通常默认加载方式即可。
is_valid_file|获取图像文件的路径并检查该文件是否为有效文件的函数(用于检查损坏文件)

## 输出
参数|描述
self.classes|用一个 list 保存类别名称
self.class_to_idx|类别对应的索引，与不做任何转换返回的 target 对应
self.imgs|保存(img-path, class) tuple的 list

## 样例
```python
from torchvision.datasets import ImageFolder
dataset=ImageFolder('./data')
print(dataset.classes)  #根据分的文件夹的名字来确定的类别
print(dataset.class_to_idx) #按顺序为这些类别定义索引为0,1...
print(dataset.imgs) #返回从所有文件夹中得到的图片的路径以及其类别
```

'''
输出：
```python
['cat', 'dog']
{'cat': 0, 'dog': 1}
[('./data\\cat\\1.jpg', 0), 
 ('./data\\cat\\2.jpg', 0), 
 ('./data\\dog\\1.jpg', 1), 
 ('./data\\dog\\2.jpg', 1)]
```