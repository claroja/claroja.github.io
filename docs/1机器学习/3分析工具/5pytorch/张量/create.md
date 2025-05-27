# create



## 使用列表创建
```python
torch.tensor([[1, 2, 3], [4, 5, 6]])

## tensor([[1, 2, 3],
##         [4, 5, 6]])
```

## 内置函数创建

```python
torch.full(size=(2, 2), fill_value=2)  # 使用指定的fill_value来初始化, numpy中第一个参数是shape
## tensor([[2, 2],
##         [2, 2]])
torch.zeros(size=(2,2))  # 使用0来初始化数组, numpy中第一个参数是shape
## tensor([[0., 0.],
##         [0., 0.]])
torch.ones(size=(2,2))  # 使用0来初始化数组, numpy中第一个参数是shape
## tensor([[1., 1.],
##         [1., 1.]])
torch.empty(size=(2,2))  # 随机初始化元素, 速度不计较快, numpy中第一个参数是shape
## tensor([[0.0000e+00, 1.8750e+00],
##         [2.2421e-44, 0.0000e+00]])
```


## 序列生成创建

```python
torch.arange(10,30,5)  # 从10到30每隔5生成一个数
## tensor([10, 15, 20, 25])
torch.linspace( 0, 2, 4 )  # 从0-2中间生成9个数
## tensor([0.0000, 0.6667, 1.3333, 2.0000])
torch.linspace( 0, 2, 4 ).reshape(2, 2)  # 转换形状成2维数组
## tensor([[0.0000, 0.6667],
##         [1.3333, 2.0000]])
```


## numpy
### numpy->torch
```python
import torch
import numpy as np

x = np.ones([3,3])
torch.from_numpy(x).type(torch.float32)
## tensor([[1., 1., 1.],
##         [1., 1., 1.],
##         [1., 1., 1.]])

torch.from_numpy(x).to("cuda")
## tensor([[1., 1., 1.],
##         [1., 1., 1.],
##         [1., 1., 1.]], device='cuda:0', dtype=torch.float64)
```


### torch->numpy
torch转换成numpy时要考虑两点:
- tensor可能在不同的设备上, 比如GPU(numpy只能在CPU)
- tensor可能支持automatic differentiation,既`requires_grad=True`

#### torch在CPU, 且没有自动求导
```python
import torch
import numpy as np

x = torch.ones([3,3])

x.numpy()
## array([[1., 1., 1.],
## #        [1., 1., 1.],
## #        [1., 1., 1.]], dtype=float32)
```

#### torch在CPU, 有自动求导

```python
import torch
import numpy as np

x = torch.ones([3,3])
x.requires_grad = True

x.detach().numpy()
## array([[1., 1., 1.],
## #        [1., 1., 1.],
## #        [1., 1., 1.]], dtype=float32)
```

#### torch在GPU, 有自动求导
`detach()`和`to()`没有前后顺序的要求
```python
import torch
import numpy as np

x = torch.ones([3,3])
x.requires_grad = True
x = x.to("cuda")
x.to("cpu").detach().numpy()
x.detach().to("cpu").numpy()

## array([[1., 1., 1.],
##        [1., 1., 1.],
##        [1., 1., 1.]], dtype=float32)

```
参考:
https://sparrow.dev/pytorch-numpy-conversion/