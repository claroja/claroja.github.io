---
title: pytorch_nn_linear
toc: true
date: 2021-11-26 22:03:54
tags:
---

$y=xA^T+b$

# 参数
参数|描述
--|--
in_features|输入特征的大小
out_features|输出特征的大小
bias|默认为True, 添加偏置

# 输入
输入|描述
--|--
Input|shape为(batch_size,in_features)


# 输出
输出|描述
--|--
output|shape为(batch_size,out_features)



# 样例

```python
m = nn.Linear(20, 30)
input = torch.randn(128, 20)
output = m(input)
print(output.size())
# torch.Size([128, 30])
```



参考:
https://pytorch.org/docs/stable/generated/torch.nn.Linear.html?highlight=linear#torch.nn.Linear