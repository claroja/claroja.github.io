---
title: basics_quickstart_tutorial
toc: true
date: 2021-10-25 22:03:54
tags:
---
# 数据预处理 
PyTorch有两个处理数据的类:
1. torch.utils.data.DataLoader
2. torch.utils.data.Dataset
Dataset包含了样本和对应的标签
DataLoader将Dataset包装成可迭代的对象

PyTorch将数据工具分为三类TorchText(自然语言),TorchVision(图像), TorchAudio(音频). 这里我们使用TorchVision的DataSet.


## 1.创建dataset
```python
from torch.utils.data import DataLoader
from torchvision import datasets
from torchvision.transforms import ToTensor, Lambda, Compose
# Download training data from open datasets.
training_data = datasets.FashionMNIST(
    root="data",
    train=True,
    download=True,
    transform=ToTensor(),
)

# Download test data from open datasets.
test_data = datasets.FashionMNIST(
    root="data",
    train=False,
    download=True,
    transform=ToTensor(),
)
```

## 2. 创建DataLoader
DataLoader会完成batching, sampling, shuffling和 multiprocess data loading.

```python
batch_size = 64
# Create data loaders.
train_dataloader = DataLoader(training_data, batch_size=batch_size)
test_dataloader = DataLoader(test_data, batch_size=batch_size)
for X, y in test_dataloader:
    print("Shape of X [N, C, H, W]: ", X.shape)
    print("Shape of y: ", y.shape, y.dtype)
    break
```

# 创建模型
1. 自己创建的模型要继承`nn.Module`
2. 在`__init__`方法中定义网络结构
3. 在`forward(self, x)`方法中, 定义数据如何通过网络
4. 使用`model.to("gpu")`来使用GPU加速

```python


# Define model
class NeuralNetwork(nn.Module):
    def __init__(self):
        super(NeuralNetwork, self).__init__()
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(28*28, 512),
            nn.ReLU(),
            nn.Linear(512, 512),
            nn.ReLU(),
            nn.Linear(512, 10)
        )

    def forward(self, x):
        x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        return logits



device = "cuda" if torch.cuda.is_available() else "cpu" # 如果有gpu就用gpu, 否则用cpu
print("Using {} device".format(device))
model = NeuralNetwork().to(device)
print(model)
```


# Optimizing the Model Parameters

使用`loss function`和`optimizer`来训练模型.
```python
loss_fn = nn.CrossEntropyLoss()
optimizer = torch.optim.SGD(model.parameters(), lr=1e-3)
```

```python
def train(dataloader, model, loss_fn, optimizer):
    size = len(dataloader.dataset)
    model.train()
    for batch, (X, y) in enumerate(dataloader):
        X, y = X.to(device), y.to(device)

        # Compute prediction error
        pred = model(X)
        loss = loss_fn(pred, y)

        # Backpropagation
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        if batch % 100 == 0:
            loss, current = loss.item(), batch * len(X)
            print(f"loss: {loss:>7f}  [{current:>5d}/{size:>5d}]")
```
我们也可以观察测试集的表现, 来确定模型正在学习.

```python
def test(dataloader, model, loss_fn):
    size = len(dataloader.dataset)
    num_batches = len(dataloader)
    model.eval()
    test_loss, correct = 0, 0
    with torch.no_grad():
        for X, y in dataloader:
            X, y = X.to(device), y.to(device)
            pred = model(X)
            test_loss += loss_fn(pred, y).item()
            correct += (pred.argmax(1) == y).type(torch.float).sum().item()
    test_loss /= num_batches
    correct /= size
    print(f"Test Error: \n Accuracy: {(100*correct):>0.1f}%, Avg loss: {test_loss:>8f} \n")
```

训练过程可以分为几个epochs, 每个epochs都会过一遍数据. 每次epoch模型都会做更准确的预测.
```python
epochs = 5
for t in range(epochs):
    print(f"Epoch {t+1}\n-------------------------------")
    train(train_dataloader, model, loss_fn, optimizer)
    test(test_dataloader, model, loss_fn)
print("Done!")
```

# Saving Models
一般保存模型的方式是序列化state dictionary(containing the model parameters)
```python
torch.save(model.state_dict(), "model.pth")
print("Saved PyTorch Model State to model.pth")
```
# Loading Models
首先要创建模型, 然后载入state dictionary

```python
model = NeuralNetwork()
model.load_state_dict(torch.load("model.pth"))
```


```python
classes = [
    "T-shirt/top",
    "Trouser",
    "Pullover",
    "Dress",
    "Coat",
    "Sandal",
    "Shirt",
    "Sneaker",
    "Bag",
    "Ankle boot",
]

model.eval() # 非训练时, 使用
x, y = test_data[0][0], test_data[0][1]
with torch.no_grad():
    pred = model(x)
    predicted, actual = classes[pred[0].argmax(0)], classes[y]
    print(f'Predicted: "{predicted}", Actual: "{actual}"')
```

样本: samples
标签: labels

参考:
https://pytorch.org/tutorials/beginner/basics/quickstart_tutorial.html