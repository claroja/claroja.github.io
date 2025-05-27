LambdaMART是常被使用的一种ListWise算法，在各大搜索引擎中均有应用。从其名称上，可以知道其由Lambda和MART两部分组合成，其中MART(Multiple Additive Regression Tree)表示的是底层训练模型，而Lambda表示的是MART求解过程中使用的梯度。

LambdaMART模型结果有许多棵决策树通过Boosting思想组成，每棵树的拟合目标是拟合函数的梯度，这里的梯度采用Lambda方法计算。


MART(Multiple Additive Regression Tree)本质上就是梯度提升决策树GBDT(Gradient Boosting Decision Tree), 所以具有以下特征:

1. 基于多个决策树来预测结果
2. 决策树之间通过加法模型叠加结果
3. 每棵决策树都是针对之前决策树的不足进行改进




















