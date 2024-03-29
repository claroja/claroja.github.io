# rank

Learning to rank (LTR) 在信息检索(IR)，CTR，以及推荐系统中都有广泛的应用。


检索问题可以看做是给定 query 后，系统对文档集合中的候选 doc 进行检索，并对其排序，返回得分最高的 doc。


其中排序任务使用一个排序模型f(q,d)对doc进行排序，其中q表示查询，d表示候选doc。

实际上这里的特征按照与 query/doc 的关系大体上可以分为 {query 端特征, doc 端特征，query-doc 相关特征} 三类。 query 特征是指与 doc 无关的特征，例如 query 自身 embedding 或者在一些场景下可以是 query 的 id 特征，同理 doc 端特征是指与 query 无关的特征，例如 doc 的embedding 或者 id 特征。 而 query-doc 相关特征则可以是将 query-doc 进行联系的特征，例如 BM25 等文本匹配特征、后文会说到的使用 deep match 模型计算的 query-doc 相似特征，以及可以人工生成的 query-doc 之间的交叉特征。

## LTR分类
LTR 通常被划分为 Pointwise、Pairwise 和 Listwise 三大类，三者分别有着不同的输入输出空间，基于不同的假设条件，使用不同的损失函数。
LTR 里的训练数据是由 `<query,doc>` 构成的，每一个训练样本都表示的是一条 query 和一个对应 query 的 doc。

如果把 每条训练数据独立来看，针对每条训练数据优化模型使其能够准确预测对应的标签，就是 Pointwise 
如果把 M 个 list 分别来看，针对每个 query 对应的 list 考虑其内部两两样本之间的顺序关系，就是 Pairwise  
如果把 M 个 list 分别来看，针对每个 query 对应的 list 考虑其内部所有样本之间的顺序关系，就是 Listwise





refs:
