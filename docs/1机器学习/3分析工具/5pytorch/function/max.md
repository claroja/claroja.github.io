# max

## torch.max()
在分类问题中, 通常需要使用`torch.max()`函数对`softmax()`函数的输出值进行操作, 求出预测值的索引, 然后与标签进行比对.

### 输入
参数|描述
--|--
input|softmax函数输出的一个tensor
dim|是max函数索引的维度: 0是每列的最大值，1是每行的最大值

### 输出
函数返回两个tensor, 第一个tensor是每行的最大值, 第二个tensor是每行最大值的索引.
在多分类任务中, 我们不需要知道各个类别的预测概率, 所以返回值的第一个tensor没有太大意义.我们关心的是第二个tensor.


```python
import torch
a = torch.tensor([[1,2,3,4],[8,7,6,5]])
print(a)
torch.max(a, 0)  # 按列取最大值
torch.max(a, 1)  # 按行取最大值
torch.max(a, 1)[1].numpy()  # 取每行最终的预测结果
```

### 应用
计算准确率

```python
pred_y = torch.max(predict, 1)[1].numpy()
label_y = torch.max(label, 1)[1].data.numpy()
accuracy = (pred_y == label_y).sum() / len(label_y)
```