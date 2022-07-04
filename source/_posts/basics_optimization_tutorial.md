---
title: basics_optimization_tutorial
toc: true
date: 2021-10-25 22:03:54
tags:
---


# 获得数据和创建网络
```python
import torch
from torch import nn
from torch.utils.data import DataLoader
from torchvision import datasets
from torchvision.transforms import ToTensor, Lambda

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

train_dataloader = DataLoader(training_data, batch_size=64)
test_dataloader = DataLoader(test_data, batch_size=64)

class NeuralNetwork(nn.Module):
    def __init__(self):
        super(NeuralNetwork, self).__init__()
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(28*28, 512),
            nn.ReLU(),
            nn.Linear(512, 512),
            nn.ReLU(),
            nn.Linear(512, 10),
        )

    def forward(self, x):
        x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        return logits

model = NeuralNetwork()
```


# Hyperparameters
Hyperparameters是用来控制模型optimization过程的.主要3个:
1. Number of Epochs: 要遍历dataset几次
2. Batch Size: 每次向网络中传输多少样本
3. Learning Rate: 每次batch/epoch学习速率

```python
learning_rate = 1e-3
batch_size = 64
epochs = 5
```

# Optimization Loop
Each iteration of the optimization loop is called an epoch. 每个epoch包含两个部分:
1. The Train Loop: 训练集
2. The Validation/Test Loop: 看测试集的表现

# Loss Function
`Loss function`用来衡量模型输出的结果和目标结果之间的差距.
1. `nn.MSELoss`(Mean Square Error): 用来做regression任务
2. `nn.NLLLoss`(Negative Log Likelihood): 用来做classification
3. `nn.CrossEntropyLoss`则结合了`nn.LogSoftmax`和`nn.NLLLoss`

```python
# Initialize the loss function
loss_fn = nn.CrossEntropyLoss()
```

# Optimizer
Optimizer就是调整模型的参数来减少模型的loss. 所有的优化方法都在`torch.optim`中
```python
optimizer = torch.optim.SGD(model.parameters(), lr=learning_rate)
```
在训练循环中, 优化分为三个部分:
1. 调用`optimizer.zero_grad()`, 来重置模型的参数的gradients(Gradients默认是累加的, 所以每次迭代都要重置为0)
2. 调用`loss.backwards()`, 将loss进行反向传播.
3. 当得到gradients后, 调用`optimizer.step()`来调整parameters.


# 完整的实现
```python
def train_loop(dataloader, model, loss_fn, optimizer):
    size = len(dataloader.dataset)
    for batch, (X, y) in enumerate(dataloader):
        # Compute prediction and loss
        pred = model(X)
        loss = loss_fn(pred, y)
        # Backpropagation
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
        if batch % 100 == 0:
            loss, current = loss.item(), batch * len(X)
            print(f"loss: {loss:>7f}  [{current:>5d}/{size:>5d}]")


def test_loop(dataloader, model, loss_fn):
    size = len(dataloader.dataset)
    num_batches = len(dataloader)
    test_loss, correct = 0, 0
    with torch.no_grad():
        for X, y in dataloader:
            pred = model(X)
            test_loss += loss_fn(pred, y).item()
            correct += (pred.argmax(1) == y).type(torch.float).sum().item()
    test_loss /= num_batches
    correct /= size
    print(f"Test Error: \n Accuracy: {(100*correct):>0.1f}%, Avg loss: {test_loss:>8f} \n")
```



```python
loss_fn = nn.CrossEntropyLoss()
optimizer = torch.optim.SGD(model.parameters(), lr=learning_rate)

epochs = 10
for t in range(epochs):
    print(f"Epoch {t+1}\n-------------------------------")
    train_loop(train_dataloader, model, loss_fn, optimizer)
    test_loop(test_dataloader, model, loss_fn)
print("Done!")
```


参考:
https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html