# premodel

## models
[官方文档](https://pytorch.org/vision/stable/models.html)

官方预置了一些经典的模型, 比如`ResNet`.

### 载入预置模型
载入的方式有两种:
1. 通过方法来调用
```python
import torchvision.models as models
resnet18 = models.resnet101()
```
2. 通过字典来调用, 在脚本传参的时候, 可以动态指定模型
```python
import torchvision.models as models
model = models.__dict__["resnet101"]
```

### 使用预训练模型
[官方文档](https://pytorch.org/vision/stable/models.html)
通过`pretrained=True`来使用预训练模型
```python
resnet101 = models.resnet101(pretrained=True)
model = models.__dict__["resnet101"]((pretrained=True))
```
pre-trained model将会下载weights在一个缓存文件夹, 可以通过`TORCH_MODEL_ZOO environment`来设置.

一些模型在training和evaluation时有不同的表现, 比如batch normalization, dropout.根据具体的模型说明, 使用`model.train()`和`model.eval()`来进行调整.

所有的`pre-trained`模型期望输入的图片,进行相同的标准化, 比如3通道的RGB图像(3 x H x W), H和W希望最少是224, 像素范围在`[0,1]`,使用`mean=[0.485, 0.456, 0.406] std = [0.229, 0.224, 0.225]`进行标准化.
```python
normalize = transforms.Normalize(mean=[0.485, 0.456, 0.406],
                                 std=[0.229, 0.224, 0.225])
```
