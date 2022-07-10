---
title: pytorch_gpu
toc: true
date: 2021-11-26 22:03:54
tags:
---

# 基础
```python
torch.cuda.is_available()  # GPU是否可用
torch.cuda.device_count()  # 查看有几个GPU, 后续的device名称可以指定第几块GPU, 比如 tensor.to("cuda:0")
device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")

tensor.to(dev)
```

```sh
nvidia-smi # 查看GPU的使用
watch -n 10 nvidia-smi # 定时查看
```

# CPU和GPU交换tensor

`pytorch`中的`Tensor`和`nn.Module`(`layer`,`loss function`等)分为`CPU`和`GPU`两个版本. 都带有`.to()`和`.cuda()`方法.

- `tensor.cuda()`会拷贝`CPU`上的数据到`GPU`上, 并返回(之前`CPU`上的`tensor`不变).

```python
import torch
a = torch.Tensor(3, 4)
b = a.cuda(0)  # 将CPU上a的数据拷贝到b上, 此时a在CPU上, b在GPU上
a.is_cuda  # False
b.is_cuda  # True
```

- `nn.module.cuda()`则会剪切`CPU`上的数据到`GPU`上, 并返回自己(之前`CPU`上的`tensor`没了), 所以`module = module.cuda()`和`module.cuda()`所起的作用是一致的.

```python
from torch import nn
module = nn.Linear(3, 4)
module.cuda()
module.weight.is_cuda # True
```

本质是将`nn.Module`下所有的`parameter`转移到`GPU`(`parameter`本质是`tensor`).

# 转换方法

```python
a = np.random.randn(1, 1, 2, 3)

t1 = torch.tensor(a)
t1 = t3.to(torch.device('cuda'))

t2 = torch.tensor(a)
t2 = t2.cuda() 

t3 = torch.tensor(a, device=torch.device('cuda'))
```

- t1和t2 都是在CPU创建tensor, 然后将它移动到GPU
`.to(device)`使用起来更方便, 因为可以在开头设定好
```python
device = torch.device("cuda:<id>") if torch.cuda.is_available() else torch.device("cpu")
```
然后再任何地方使用, `.cuda(<id>)`则需要每次都进行验证, 比较麻烦

- t3是直接在GPU上创建tensor, 所以更高效


如果想把GPU的tensor转换成Numpy的array时, 需要先将tensor转换到CPU中区, 因为Numpy是CPU-only. 另外需要根据是不是需要求导(`requires_grad=True`), 而选择使用`detach()`

```python
x  = torch.rand([3,3], device='cuda')
x_ = x.cpu().numpy()

y  = torch.rand([3,3], requires_grad=True, device='cuda').
y_ = y.cpu().detach().numpy()
```

# 应用
## 在`DataLoader`取出时, 转到`GPU`

这个是主流的方法

```python
import torch.utils.data
Data = torch.tensor([[1, 2], [3, 4],[5, 6], [7, 8]])
Label = torch.tensor([[0], [1], [0], [2]])
torch_dataset = torch.utils.data.TensorDataset(Data, Label)
torch_dataloader = torch.utils.data.DataLoader(
    dataset=torch_dataset,
    batch_size=2,
    shuffle=False,
    num_workers=2,
    pin_memory=True
)

for step, (x,y) in enumerate(torch_dataloader):
    print(x.to("cuda"))
    print(y.to("cuda"))
```

## 在创建数据时就转到`GPU`

在这种情况下, `DataLoader`不能开启多进程, 不建议使用, 因为将batch传给GPU并不是`DataLoader`的作用.

```python
import torch.utils.data

Data = torch.tensor([[1, 2], [3, 4],[5, 6], [7, 8]])
Label = torch.tensor([[0], [1], [0], [2]])

Data = Data.cuda()
Label = Label.cuda()

torch_dataset = torch.utils.data.TensorDataset(Data, Label)
torch_dataloader = torch.utils.data.DataLoader(
    dataset=torch_dataset,
    batch_size=2,
    shuffle=False,
    num_workers=0,
)
for step, (x,y) in enumerate(torch_dataloader):
    print(x)
    print(y)

```

## 多GPU并行运算

### 单机多卡
比如有4块GPU, 其中一个是主GPU, 当其拿到数据后, 假设为16个样本. 那么它会把数据分成4份, 16/4=4, 自己留一份, 其余3分分发到另外3块GPU上进行计算. 等其他GPU计算完成后, 主GPU把结果回收并进行整合.
pytorch中主要通过`torch.nn.DataParallel(module, device_ids=None, output_device=None, dim=0)`模块, 实现并行计算.
参数|描述
--|--
module: 需要并行计算的模型
device_ids: 可使用的GPU们
output_device: 结果输出设备, 默认就是在device_ids[0]，也就是第一块卡上, 因此它的显存会占用的多一些

```python
if torch.cuda.device_count() > 1:#判断是不是有多个GPU
    model = nn.DataParallel(model,device_ids=range(torch.cuda.device_count()))
```


### 多机多卡


## sava 与 load

1. GPU上保存, CPU上加载

```python
model.to("cuda:0")
torch.save(model.state_dict(), PATH) # 保存
model.load_state_dict(torch.load(PATH, map_location="cpu"))
```

2. CPU上保存, GPU上加载

```python
model.to("cpu")
torch.save(model.state_dict(), PATH) # 保存
model.load_state_dict(torch.load(PATH, map_location="cuda:0"))
```

3. 多GPU
使用上述方法会报错:`KeyError: ‘unexpected key “module.conv1.weight” in state_dict’`, 原因是使用多GPU时, 会使用`torch.nn.DataParallel`, 所以checkpoint中有module字样
解决方法1:
```python
# 保存checkpoint时不保存module
torch.save(model.module.state_dict(), PATH)
```

解决方法2:
```python
# 创建一个不包含`module.`的新OrderedDict
from collections import OrderedDict
new_state_dict = OrderedDict()
for k, v in state_dict.items():
    name = k[7:] # 去掉 `module.`
    new_state_dict[name] = v
# 加载参数
model.load_state_dict(new_state_dict)
```

参考:
https://stackoverflow.com/questions/53331247/pytorch-0-4-0-there-are-three-ways-to-create-tensors-on-cuda-device-is-there-s
https://blog.csdn.net/weixin_39533659/article/details/111173642
https://blog.csdn.net/joyce_peng/article/details/104133594