在排序中，常用的评价指标NDCG，MAP，ERR都是不可导的，即无法求梯度，这就导致了无法运用梯度下降算法求解排序问题。RankNet以一种巧妙方法，将无法用梯度下降求解的排序问题，优化为对概率的交叉熵损失函数，继而可用梯度下降算法求解。

RankNet的训练目标是得到一个模型s，输入时文档x，输出时该文档的得分：

$$
s=f(x; W)
$$

其中W表示模型s的参数集。

有了模型s后，对于文档xi和xj，我们就可以分别得到其得分si和sj:

$$
s_i=f(x_i; W), s_j=f(x_j; W)
$$


RankNet巧妙地地方在于，它通过偏序关系(partial order)将文档之间地得分与文档顺序关联起来，进而得出概率。具体地，即$P_{ij}$表示文档$x_i$排在$x_j$前面地概率，则


$$
P_{ij} = P(x_i > x_j) = \frac{\exp(\sigma(s_i - s_j))}{1 + \exp(\sigma(s_i - s_j))} = \frac{1}{1 + \exp(-\sigma(s_i - s_j))}
$$

RankNet使用了sigmoid函数来转化排序概率，本质上就是逻辑回归。这里$\sigma$影响地是sigmoid函数地形状，对最终结果影响不大，为简化说明，后文将使用$\sigma$.


接着，根据模型概率$P_{ij}$和真实概率$\bar{P}_{ij}$，使用交叉熵可衡量出模型在排序文档xi和xj产生地损失函数：


$$
L_{ij} = - \bar{P}_{ij} \log P_{ij} - (1 - \bar{P}_{ij}) \log (1 - P_{ij}) = \frac{1}{2}(1 - S_{ij})(s_i - s_j) + \log \{1 + \exp(-(s_i - s_j))\}
$$

上面公式里面地$S_{ij}$，表示地是文档$x_i$和$x_j$的真实序关系：$S_{ij}=1$,$x_i$比$x_j$更相关；$S_{ij}=0$,$x_i$比$x_j$相关性一样;$S_{ij}=-1$,$x_j$比$x_i$更相关。

最后，RankNet的损失函数定义如下，目标是使得所有文档对的排序概率估计的损失最小：

$$
L = \sum_{(i,j) \in D} L_{ij}
$$


D表示的是一次查询中所有文档对集合。

RankNet的训练目标是求解模型s的参数W，此时可通过梯度下降法求解：

$$
w_k \rightarrow w_k - \eta \frac{\partial L}{\partial w_k}
$$

## 参考
1. https://www.zhihu.com/question/341082668


