# tutorial

gpu则用gpu, 否则使用cpu.
```python
device = 'cuda' if torch.cuda.is_available() else 'cpu'
print('Using {} device'.format(device))
```
## Define the Class

1. 自己创建的模型要继承`nn.Module`
2. 在`__init__`方法中定义网络结构
3. 在`forward(self, x)`方法中, 定义数据如何通过网络

```python
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
```

创建实例, 并将其和cpu或gpu绑定.
```python
model = NeuralNetwork().to(device)
print(model)
```

使用模型进行预测
```python
X = torch.rand(1, 28, 28, device=device)
logits = model(X)
pred_probab = nn.Softmax(dim=1)(logits)
y_pred = pred_probab.argmax(1)
print(f"Predicted class: {y_pred}")
```



## Model Layers
我们将`FashionMNIST`的模型进行拆解, 以minibatch=3, 图片大小为28*28来看数据通过每一层网络, 到底发生了什么.
```python
input_image = torch.rand(3,28,28)
print(input_image.size()) # torch.Size([3, 28, 28])
```
### nn.Flatten
`nn.Flatten`层将2D的 28x28的图片转换为1D的784(28x28)数组

```python
flatten = nn.Flatten()
flat_image = flatten(input_image)
print(flat_image.size()) # torch.Size([3, 784])
```

### nn.Linear
`nn.Linear`会使用他自己的weights and biases, 将输入做线性变换
```python
layer1 = nn.Linear(in_features=28*28, out_features=20) #in_f 决定了一组方程有多少个w, out_决定了有几组方程
hidden1 = layer1(flat_image)
print(hidden1.size()) # torch.Size([3, 20])
```
### nn.ReLU
`nn.ReLU`作用是将线性变换转换非线性变换
```python
print(f"Before ReLU: {hidden1}\n\n")
hidden1 = nn.ReLU()(hidden1)
print(f"After ReLU: {hidden1}")
```
### nn.Sequential
`nn.Sequential`将各个layer按顺序组合起来

```python
seq_modules = nn.Sequential(
    flatten,
    layer1,
    nn.ReLU(),
    nn.Linear(20, 10)
)
input_image = torch.rand(3,28,28)
logits = seq_modules(input_image)
```

### nn.Softmax
1. 最后的linear layer会返回logits(正无穷和负无穷之期间的自然数), 键入输入到`nn.Softmax`中.
2. `nn.Softmax`会将logits scale到[0,1], 来表示每个分类的可能性.
3. `dim=1`表示dimension为1的数字求和必须为1.
```python
softmax = nn.Softmax(dim=1)
pred_probab = softmax(logits)
```

## Model Parameters
模型中的每一层都有自己的weights 和 biases, 在训练的时候会被优化.`nn.Module`会跟踪这些参数, 使用`parameters()`或`named_parameters()`来访问他们.

```python
print("Model structure: ", model, "\n\n")

for name, param in model.named_parameters():
    print(f"Layer: {name} | Size: {param.size()} | Values : {param[:2]} \n")
```



参考:
https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html