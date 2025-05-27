# zerograd


```python
import torch
import torch.nn as nn

class Simple(nn.Module):
    def __init__(self):
        super().__init__()
        self.linear = nn.Linear(3,1,bias=False)

    def forward(self, x):
        x = self.linear(x)
        return x


model = Simple()


for m in model.parameters():
    print(m)  # tensor([[-0.1925, -0.1296,  0.1730]], requires_grad=True)
    m.detach().fill_(0.1)  # tensor赋值时必须先使用detach()方法脱离图(但是共享空间), 然后再赋值
    print(m)  # tensor([[0.1000, 0.1000, 0.1000]], requires_grad=True)

criterion = nn.MSELoss()
optimizer = torch.optim.SGD(model.parameters(), lr=1.0)

model.train()

images = torch.ones(8, 3)
targets = torch.ones(8, 1)

output = model(images)
print(output.shape)  # torch.Size([8, 1])

loss = criterion(output, targets)
print(model.linear.weight.grad)  # None, 此时还未进行反向传播, 所以为None
loss.backward()
print(model.linear.weight.grad)  # tensor([[-1.4000, -1.4000, -1.4000]]), 通过一次反向传播，计算出网络参数的导数，
optimizer.step()
print(model.linear.weight)  #tensor([[1.5000, 1.5000, 1.5000]], requires_grad=True), 原始权重减去梯度, 对应上0.1 - (-1.4) = 1.5
optimizer.zero_grad()  # 等价于调用`model.zero_grad()`, 但`optimizer.zero_grad()`更符合逻辑
print(model.linear.weight.grad)  # tensor([[0., 0., 0.]]), 将权重的梯度重置为0, 不然会累加
```



```python
## 下面验证累加
output = model(images)
loss = criterion(output, targets)
print(model.linear.weight.grad)  # tensor([[0., 0., 0.]]), 由于上面调用了zero_grad(), 所以重置为0了
loss.backward()
print(model.linear.weight.grad)  # tensor([[7.0000, 7.0000, 7.0000]]), 第一次梯度的计算结果

## 第二轮
output = model(images)
loss = criterion(output, targets)
loss.backward()
print(model.linear.weight.grad)  # tensor([[14.0000, 14.0000, 14.0000]])  # 第二次的梯度累加在第一次梯度上, 所以是2倍
```