
# 模型评估
## 基础概念
- P（Positive）：预测为正样本
- N（Negative）：预测为负样本
- T（True）：预测正确
- F（False）：预测错误
- TP: True Positive: T表示预测值和真实值一样, P是指预测为正样本, 即label也是正样本
- FP: False Positive: F表示预测值和真实值相反, P是指预测为正样本, 即label是负样本
- TN: True Negative: T表示预测值和真实值一样, N是指预测为负样本, 即label也是负样本
- FN: False Negative: F表示预测值和真实值相反, N是指预测为负样本, 即label是正样本



## 混淆矩阵(Confusion Matrix)
根据以上概念, 可以构建混淆矩阵:

合计|Predict Positive|Predict Negative|合计
--|--|--|--
Actual Positive|A(命中, TP)|B(漏报, FN)|A+B, Actual Positive
Actual Negative|C(虚报, FP)|D(正确否定, TN)|C+D, Actual Negative
合计|A+C, Predict Positive|B+D, Predict Negative|


## 指标

### 强调预测精准度的指标
- 准确度(Accuracy): $\frac{TP+FN}{TP+FN+FP+TN}$

    > accuracy就是预测正确的结果占总样本的百分比.  
    > 缺点: 在样本不均衡的情况下, 不能作为很好的指标来衡量结果. 比如在一个总样本中, 正样本占比90%, 负样本占比10%. 即使负样本全部预测错, 最后的整体准确率也是90%.

- 精准度(Precision/Positive Predictive Value): $\frac{TP}{TP+FP}$

    > precision就是在全部被预测为正样本(P)的数据中, 有多少label是正样本(TP). 通俗就是模型预测出的正样本的准确率是多少, 既查准率.


- 提升度(Lift): $\frac{TP/(TP+FP)}{(TP+FN)/(TP+FP+FN+TN)}$


### 强调预测覆盖度的指标
- 灵敏度, 召回率(Sensitivity, Recall, True Positive Rate): $TPR = \frac{TP}{TP+FN}$

    > recall就是在全部lable为正样本(TP+FN)数据中, 有多少label是正样本(TP). 通俗就是模型发现的正样本, 占所有正样本的比例, 既查全率.  


- 特异度(Specificity, True Negative Rate): $TNR=\frac{TN}{FP+TN}$
- 假正率(1-Specificity, False Positive Rate): $FPR=\frac{FP}{FP+TN}$

### 既强调预测覆盖度又强调预测精准度的指标, F1 Score

F1 Score是recall和precision的调和平均数.
$$
F_1=\frac2{recall^{-1}+precision^{-1}}=2\cdot \frac{precision\cdot recall}{precision+recall}=\frac{2TP}{2TP+FP+FN}
$$

更通用的的F Score是$F_\beta$,添加了一个因子$\beta$,含义是recall的权重是precision的$\beta$倍:

- $\beta=2$recall的重要性是precision的2倍
- $\beta=0.5$recall的重要性是precision的0.5倍

$$F_\beta=\frac{1+\beta^2}{\frac{\beta^2}{recall}+\frac{1}{precision}}=(1+\beta^2)\cdot\frac{precision\cdot recall}{(\beta^2\cdot precision)+recall}$$



## 如何记忆上述指标

重要的是记住混淆矩阵

- axis=1, 即按行来看, 第一行之和实际为正样本的总数.

$$TPR(recall)=\frac{TP}{TP+FN}=\frac{TP}{P_{row}}$$

- axis=1, 即按行来看, 第二行之和是实际为负样本的总数.

$$FPR=\frac{FP}{FP+TN}=\frac{FP}{N_{row}}$$

- axis=0, 即按列来看,第一列列之和是预测为正样本的总数

$$precision=\frac{TP}{TP+FP}=\frac{TP}{P_{column}}$$

- 从整体来看
$$accuracy=\frac{TP+TN}{TP+TN+FP+FN}=\frac{T}{T+F}$$

## 参考
- [F-score](https://en.wikipedia.org/wiki/F-score)
- [【机器学习笔记】：一文让你彻底理解准确率，精准率，召回率，真正率，假正率，ROC/AUC](https://zhuanlan.zhihu.com/p/46714763)


