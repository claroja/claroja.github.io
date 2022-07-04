---
title: pytorch_nn_lstm
toc: true
date: 2021-11-26 22:03:54
tags:
---


```python
input_size = 5
hidden_size = 10
num_layers = 1
lstm_layer = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)
```


# 参数
参数|描述
--|--
input_size | 每个时间点上的特征数, 比如如果是自然语言处理的话, 就是词向量的特征数. 如果是时序数据, 就是某个时刻包含的特征数(某天的[温度, 湿度, ..等])
hidden_size | 每个时间上的hidden state和cell state的特征数
num_layers |竖向叠加的层数, 一般设为1或2.

如果我们的`input_size = 5`, 
1. 我就需要创建一个shape(batch size, sequence length, input dimension)为(1, 1, 5)的tensor.
2. 我们还需要初始化hidden state和cell state, 二者结合成一个tuple作为LSTM的输入.




# 输入
输入|描述
--|--
input: 当batch_first=True时, shape为(batch size, seq_len, input_size)的tensor
h_0: batch中每条数据的初始化hidden_state, shape为(D*num_layers, batch_size, hidden_size), 双向时(bidirectional=true)D=2, 其余为1
c_0: batch中每条数据的初始化cell_state, shape为(D*num_layers, batch_size, hidden_size), 双向时(bidirectional=true)D=2, 其余为1

```python
batch_size = 1
seq_len = 1
input = torch.randn(batch_size, seq_len, input_size)
hidden_state = torch.randn(num_layers, batch_size, hidden_size)
cell_state = torch.randn(num_layers, batch_size, hidden_size)
hidden = (hidden_state, cell_state)
```

input详解:
在我们的LSTM时间序列预测任务中：
seq_len 时间序列的长度，
batch_size 同个批次中输入的序列条数
inp_dim 输入数据的维度

如果是自然语言处理 (NLP) ，那么：
seq_len 将对应句子的长度
batch_size 同个批次中输入的句子数量
inp_dim 句子中用来表示每个单词（中文分词）的矢量维度


# 输出
将input, hidden_state, cell_state喂入LSTM
```python
output, (h_n, c_n) = lstm_layer(input, hidden)
```
输出|描述
--|--
output|最上层的layer的每个时刻的输出特征, shape为(batch_size, seq_len, D*hidden_size), 双向时(bidirectional=true)D=2, 其余为1
h_n|batch中, 每条序列, 所有layer的最后时刻的hidden_state, shape为(D*num_layers, batch_size, hidden_size), 双向时(bidirectional=true)D=2, 其余为1
c_n|batch中, 每条序列, 所有layer的最后时刻的cell_state, shape为(D*num_layers, batch_size, hidden_size), 双向时(bidirectional=true)D=2, 其余为1



- many2one
我们需要最后一个事件点的输出, 比如分类问题, 时间序列预测, 仅仅将最后一个时间点的输入喂入全连接层.
![1.png](1.png)
```python
import torch
from torch import nn, optim

input_size = 2
hidden_size = 1
num_layers = 1
lstm_layer = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)


batch_size =4
seq_len = 3
input = torch.randn(batch_size, seq_len, input_size)
output, (h_n, c_n) = lstm_layer(input)
output = output[:, -1, :]  # 或者使用output = h_n[-1,:,:]
print(output.shape)  # torch.Size([4, 1])
```




# 可变长
LSTM可以接受不同长度的序列, 在每个时间点上输出.
```python
seq_len = 3
input = torch.randn(batch_size, seq_len, input_size)
output, (h_n, c_n) = lstm_layer(input, hidden)
print(output.shape)
```
这次, 第二个维度是3, 就是指时间序列的长度为3. 

- many2many
我们需要每个时间点的输出, 比如文本生成, 每个时间点的输出可以被放入全连接层.
![1.png](1.png)


参考:
https://blog.floydhub.com/long-short-term-memory-from-zero-to-hero-with-pytorch/
https://blog.floydhub.com/a-beginners-guide-on-recurrent-neural-networks-with-pytorch/
https://github.com/malhamid/LSTM/blob/main/LSTM.ipynb
https://towardsdatascience.com/lstm-and-bidirectional-lstm-for-regression-4fddf910c655



https://curiousily.com/posts/time-series-forecasting-with-lstm-for-daily-coronavirus-cases/
https://zhuanlan.zhihu.com/p/94757947
https://cnvrg.io/pytorch-lstm/
https://www.crosstab.io/articles/time-series-pytorch-lstm



这篇文章是错误的, 和全连接没有区别
https://github.com/L1aoXingyu/code-of-learn-deep-learning-with-pytorch/blob/master/chapter5_RNN/time-series/lstm-time-series.ipynb

