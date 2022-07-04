---
title: deeplearn_lstmlm
toc: true
date: 2021-11-13 21:01:11
---

实现参考rnnlm
可以优化的三个方向:
# 多层化
加深LSTM层数,提高精度.

# Dropout抑制过拟合
抑制过拟合的方法:
1. 增加训练数据
2. 降低模型的复杂度, 添加dropout(不能再时间方向上添加, 而在深度方向上添加)
3. 给与正则化惩罚