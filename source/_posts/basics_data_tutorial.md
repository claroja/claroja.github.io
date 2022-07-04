---
title: basics_data_tutorial
toc: true
date: 2021-10-25 22:03:54
tags:
---


PyTorch有两个处理数据的类:
1. torch.utils.data.DataLoader
2. torch.utils.data.Dataset
Dataset包含了样本和对应的标签
DataLoader将Dataset包装成可迭代的对象

PyTorch将数据工具分为三类TorchText(自然语言),TorchVision(图像), TorchAudio(音频). 这里我们使用TorchVision的DataSet.

# Loading a Datase
这里使用TorchVision预置的[Fashion-MNIST](https://research.zalando.com/project/fashion_mnist/fashion_mnist/)作为例子, 其中有60000训练样本和10000测试样本, 每个图片是28*28的灰度图, 总共有10个分类.
`FashionMNIST`方法, 有四个参数:
1. root: 下载图片存放的路径
2. train: 指定是训练还是测试数据集
3. download: 如果本地不存在, 则下载数据集
4. transform/target_transform: 指定特征和标签的格式转换方式

```python
import torch
from torch.utils.data import Dataset
from torchvision import datasets
from torchvision.transforms import ToTensor
import matplotlib.pyplot as plt


training_data = datasets.FashionMNIST(
    root="data",
    train=True,
    download=True,
    transform=ToTensor()
)

test_data = datasets.FashionMNIST(
    root="data",
    train=False,
    download=True,
    transform=ToTensor()
)
```


# Iterating and Visualizing the Dataset
```python
labels_map = {
    0: "T-Shirt",
    1: "Trouser",
    2: "Pullover",
    3: "Dress",
    4: "Coat",
    5: "Sandal",
    6: "Shirt",
    7: "Sneaker",
    8: "Bag",
    9: "Ankle Boot",
}
figure = plt.figure(figsize=(8, 8))
cols, rows = 3, 3
for i in range(1, cols * rows + 1):
    sample_idx = torch.randint(len(training_data), size=(1,)).item()
    img, label = training_data[sample_idx]
    figure.add_subplot(rows, cols, i)
    plt.title(labels_map[label])
    plt.axis("off")
    plt.imshow(img.squeeze(), cmap="gray")
plt.show()
```


# Creating a Custom Dataset for your files
一个定制的DataSet必须实现三个方法:`__init__`, `__len__`, and `__getitem__`.
下面的例子中:
1. FashionMNIST图片保存在路径`img_dir`中
2. 他们的标签保存在CSV文件(`annotations_file`)中
```csv
tshirt1.jpg, 0
tshirt2.jpg, 0
......
ankleboot999.jpg, 9
```


```python
import os
import pandas as pd
from torchvision.io import read_image

class CustomImageDataset(Dataset):
    def __init__(self, annotations_file, img_dir, transform=None, target_transform=None):
        self.img_labels = pd.read_csv(annotations_file)
        self.img_dir = img_dir
        self.transform = transform
        self.target_transform = target_transform

    def __len__(self):
        return len(self.img_labels)

    def __getitem__(self, idx):
        img_path = os.path.join(self.img_dir, self.img_labels.iloc[idx, 0]) # 从csv地址列和图片文件夹, 拼贴出图片的地址. pandas的下标和dataset的下标对应
        image = read_image(img_path)
        label = self.img_labels.iloc[idx, 1]  # 读取csv文件中的label列
        if self.transform:
            image = self.transform(image)  # 图片转换成需要的格式, 一般是tensor
        if self.target_transform:
            label = self.target_transform(label) # 标签转换为需要的格式, 一般是tensor
        return image, label
```



# Preparing your data for training with DataLoaders

`DataLoaders`的主要作用有三个:
1. `Dataset`每次获得一个样本的特征和标签, 而在训练时, 我们需要一组样本,既`minibatches`. 
2. 在每个epoch中需要对数据进行`shuffle`来防止过拟合
3. 可以通过`multiprocessing`来加速数据的获取

注意:`DataLoaders`是在`torch.utils.data`包里, 而不是`TorchVision`中.所以它是可以处理来自`Image Datasets`, `Text Datasets`, `Audio Datasets`的`Dataset`的


```python
from torch.utils.data import DataLoader
train_dataloader = DataLoader(training_data, batch_size=64, shuffle=True)
test_dataloader = DataLoader(test_data, batch_size=64, shuffle=True)
```

# Iterate through the DataLoader
每一次迭代都会返回一组`train_features`和`train_labels`(准确的说是64个为一组, 因为batch_size=64).
因为我们指定了`shuffle=True`,在遍历所有batches后,会打乱所有数据.

```python
# Display image and label.
train_features, train_labels = next(iter(train_dataloader))
print(f"Feature batch shape: {train_features.size()}")
print(f"Labels batch shape: {train_labels.size()}")
img = train_features[0].squeeze()
label = train_labels[0]
plt.imshow(img, cmap="gray")
plt.show()
print(f"Label: {label}")
```




特征: feature
标签: label
样本: samples

参考:
https://pytorch.org/tutorials/beginner/basics/data_tutorial.html