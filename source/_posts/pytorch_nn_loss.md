---
title: pytorch_nn_loss
toc: true
date: 2021-11-26 22:03:54
tags:
---



# 回归问题
batch_x和batch_y都要求是FloatTensor类型

## MSELoss
多用于回归问题, 也可用于softmax输出+one_hot编码形式的分类问题

$$l_n=(x_n-y_n)^2$$

当`reduction`参数为`none`时:
$$l(x,y)={l_1,...,l_N}^T$$
当`reduction`参数为`sumn`时:
$$l(x,y)=sum(l_1+...+l_n)$$
当`reduction`参数为`mean`时:
$$l(x,y)=mean(sum(l_1+...+l_n))$$

# 分类问题
注意分类问题中的batch_y要求为LongTensor(torch.int64 or torch.long)类型


## Softmax
对输入的每个元素求e的指数, 然后再除以他们指数的和:
$$Softmax(x_i)=\frac{exp(x_i)}{\sum_jexp(x_j)}$$

```python
import torch
from torch import nn

output = torch.tensor(
    [[2,4,1],
    [7,2,1],
    [3,3,5]],dtype=torch.float64)
```
假设模型的输出有3条数据, 每条数据有3列, 每列代表一个分类的结果. 每条数据中, 值最大的列就是分类的最终结果, 也就是说分类的结果是:
```python
[[1],
[0],
[2]]
```
下面使用softmax算法, 计算
```python
sfm = nn.Softmax(dim=1) # 每一行求softmax
sfm(output)
# tensor([[0.1142, 0.8438, 0.0420],
#         [0.9909, 0.0067, 0.0025],
#         [0.1065, 0.1065, 0.7870]], dtype=torch.float64)
```
按照之前的说法, 最大值就为最终分类. 可见softmax并没有改变最终结果, 而仅仅是将经过softmax求出来的值都在[0,1]区间,且每一行的和边为1, 这样就可以将每列的数值理解为概率值.





## LogSoftmax
就是对Softmax求出来的值再求一次log值:
$$LogSoftmax(x_i)=log\left(\frac{exp(x_i)}{\sum_jexp(x_j)}\right)$$

经过softmax求出来的值都在[0,1]区间,再log求值之后的值域为负无穷到1。

```python
logsfm = nn.LogSoftmax(dim=1)
logsfm(output)
# tensor([[-2.1698, -0.1698, -3.1698],
#         [-0.0092, -5.0092, -6.0092],
#         [-2.2395, -2.2395, -0.2395]], dtype=torch.float64)

torch.log(sfm(output)) # 验证
# tensor([[-2.1698, -0.1698, -3.1698],
#         [-0.0092, -5.0092, -6.0092],
#         [-2.2395, -2.2395, -0.2395]], dtype=torch.float64)
```
验证和我们自己使用`log()`函数来求的结果一致



## NLLLoss
就是将`LogSoftmax`于对应的Label的分类取出来, 并去掉负号, 求均值.
假设, 我们真正的分类是:
```python
[[2],
[0],
[2]]
```

将上面的`logsfm(output)`复制到这里, 方便说明:
```python
tensor([[-2.1698, -0.1698, -3.1698],
        [-0.0092, -5.0092, -6.0092],
        [-2.2395, -2.2395, -0.2395]], dtype=torch.float64)
```


那么NLLloss就是取, 第一条数据label为2对应值的相反数, 既第2列(从0开始数)值的相反数; 第二条数据label为0对应值的相反数, 既第0列值的相反数; 同理第三条数据取值的相反数.并计算他们的平均值:
(3.1698+0.0092+0.2395)/3=1.1395
代码实现验证:
```python
loss = nn.NLLLoss()
target = torch.tensor(
    [2,
     0,
     2]
)
loss(logsfm(output),target) # tensor(1.1395, dtype=torch.float64)
```


## CrossEntropyLoss
CrossEntropyLoss = softmax+log+NLLLoss

```python
loss = nn.CrossEntropyLoss()
loss(output, target)  # tensor(1.1395, dtype=torch.float64)
```

`nn.CrossEntropyLoss`的target参数是integer, 他不是使用one-hot编码, 而是直接使用target的integer来索引output中的值, 然后进行计算(并不是所想象的使用one-hot, 然后点乘). 所以不需要对target进行one-hot编码.


## BCELoss
Binary Cross Entropy Loss:
$$BCE=-\frac{1}{n}\sum(y_n*lnx_n+(1-y_n)*ln(1-x_n))$$
在使用BCELoss之前, 一般将y的值都算到0-1之间(一般使用sigmoid), 既正样本概率为y, 负样本的概率为1-y, 其实就是逻辑回归的损失函数.
使用这个损失函数要求模型的输出层要使用sigmoid进行激活.


### 二分类中的单标签
比如判断图像是不是狗, 是狗为1, 不是狗为0. 每条数据的target是一维的, 只有0或1取值

```python
import torch
from torch import nn

x = torch.tensor([[0.3], [0.9]]) # 两条样本模型输出(输出层有sigmoid)
y = torch.tensor([[1.], [0.]])  # 两条样本真实的标签
loss = nn.BCELoss()
loss(x,y)  # tensor(1.7533)
```
根据公式验证一下

```python
import math
res1 = 1 * math.log(0.3)+(1-1)*math.log(1-0.3)
res2 = 0 * math.log(0.9)+(1-0)*math.log(1-0.9)
res=-(res1+res2)/2  # 1.753278948659991
```

### 二分类中的多标签
如果不仅要判断, 图片中有没有狗, 还要判断有没有猫, 那么就是多标签问题了. 这时, target就是二维的, 第一维度表示有没有狗, 第二维度表示有没有猫.
0,0 表示没有狗也没有猫
1,0 表示只有狗没有猫
0,1 表示只有猫没有狗
1,1 表示既有猫又有狗


```python
import torch
from torch import nn

x = torch.tensor([[0.3,0.4], [0.9,0.1]]) # 两条样本模型输出(输出层有sigmoid)
y = torch.tensor([[1.0,0], [0,1.0]])  # 两条样本真实的标签
loss = nn.BCELoss()
loss(x,y)  # tensor(1.5800)
```
验证一下
```python
import math

res11 = 1 * math.log(0.3)+(1-1)*math.log(1-0.3)
res12 = 0 * math.log(0.4)+(1-0)*math.log(1-0.4)
res21 = 0 * math.log(0.9)+(1-0)*math.log(1-0.9)
res22 = 1 * math.log(0.1)+(1-1)*math.log(1-0.1)
res1 = (res11+res12)/2
res2 = (res21+res22)/2

res=-(res1+res2)/2  # 1.5799921535200045
```


## BCEWithLogitsLoss
BCEWithLogitsLoss = sigmoid+BCELoss. 就是将sigmoid加进去了, 所以就不需要在模型的输出层再加入sigmoid了





参考:
https://blog.csdn.net/qq_22210253/article/details/85222093
https://www.jianshu.com/p/ac3bec3dde3e
http://shomy.top/2021/05/21/torch-loss/
https://blog.csdn.net/zhangxb35/article/details/72464152
https://www.zdaiot.com/MLFrameworks/Pytorch/Pytorch%E6%8D%9F%E5%A4%B1%E5%87%BD%E6%95%B0%E6%80%BB%E7%BB%93/
https://medium.com/udacity-pytorch-challengers/a-brief-overview-of-loss-functions-in-pytorch-c0ddb78068f7