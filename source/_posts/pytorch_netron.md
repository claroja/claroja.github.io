---
title: pytorch_netron
toc: true
date: 2021-11-02 8:14:54
tags:
---
```python
import torchvision.models
import torch.onnx
import netron

model = torchvision.models.__dict__["resnet101"](pretrained=True)  # 获得预训练的resnet101
x = torch.randn(64, 3, 224, 224, requires_grad=True)
# Export the model
torch.onnx.export(model,               # model being run
                  x,                         # model input (or a tuple for multiple inputs)
                  "super_resolution.onnx",   # where to save the model (can be a file or file-like object)
                  export_params=True,        # store the trained parameter weights inside the model file
                  opset_version=10,          # the ONNX version to export the model to
                  do_constant_folding=True,  # whether to execute constant folding for optimization
                  input_names = ['input'],   # the model's input names
                  output_names = ['output'], # the model's output names
                  dynamic_axes={'input' : {0 : 'batch_size'},    # variable length axes
                                'output' : {0 : 'batch_size'}})

netron.start("./super_resolution.onnx")
```
https://github.com/lutzroeder/netron