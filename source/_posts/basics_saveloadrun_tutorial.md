---
title: basics_saveloadrun_tutorial
toc: true
date: 2021-10-25 22:03:54
tags:
---


# Saving and Loading Model Weights
只保留state dictionary, 既`state_dict`


1. 保存
```python
model = models.vgg16(pretrained=True)
torch.save(model.state_dict(), 'model_weights.pth')
```

2. 载入, 需要先实例化网络对象
```python
model = models.vgg16() # we do not specify pretrained=True, i.e. do not load default weights
model.load_state_dict(torch.load('model_weights.pth'))
model.eval()
```

# Saving and Loading Models with Shapes
可以将网络结构和权重一起保存

1. 保存
```python
torch.save(model, 'model.pth')
```

2. 载入
```python
model = torch.load('model.pth')
```


# 也可以保存为ONNX
ONNX(Open Neural Network Exchange), 由于在导出ONNX时需要执行一遍网络, 所以要创建一个输入.

```python
input_image = torch.zeros((1,3,224,224))
onnx.export(model, input_image, 'model.onnx')
```


参考:
https://pytorch.org/tutorials/beginner/basics/saveloadrun_tutorial.html
https://pytorch.org/tutorials/beginner/basics/saveloadrun_tutorial.html

