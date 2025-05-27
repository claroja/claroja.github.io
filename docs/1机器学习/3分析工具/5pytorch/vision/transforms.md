# transforms

## transforms
可以使用`transforms.Compose`将不同的`transformations`组成链式结构.


绝大多数transformations适用于PIL images和tensor images, 也有些只对其中一个格式有效, 这个时候可以使用[Conversion Transforms](https://pytorch.org/vision/stable/transforms.html?highlight=transforms#conversion-transforms)来进行转换.

transformations可以 应用于单个tensor images也可以用于batches tensor images.
1. 单个 tensor的形状是`(C, H, W)`, C: channel个个数, H: height高度, W: width宽度
2. batches tensor的形状是`(B, C, H, W)`, B: batch, 一个batch的大小(有多少张图片)

Randomized transformations对同一个batch的图片会做相同的转换.
常用的转换方法, 

参考:https://pytorch.org/vision/stable/auto_examples/plot_transforms.html#randomperspective
参考:https://pytorch.org/vision/stable/auto_examples/plot_scripted_tensor_transforms.html#sphx-glr-auto-examples-plot-scripted-tensor-transforms-py