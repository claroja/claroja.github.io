 ## API

LGBMModel是LGBMClassifier, LGBMRegressor,LGBMRanker的父类, 不建议直接使用. 而建议使用LGBMClassifier, LGBMRegressor,LGBMRanker, 因为他们提供了合适的损失函数, 以及合适的输出, 比如而建议使用LGBMClassifier可以输出概率.


### LGBMClassifier

1. 构造参数

    ```python
    lightgbm.LGBMClassifier(
        boosting_type='gbdt',           # str, ‘gbdt’, traditional Gradient Boosting Decision Tree. ‘dart’, Dropouts meet Multiple Additive Regression Trees. ‘rf’, Random Forest.
        num_leaves=31,                  # int, 每棵基树最大叶子节点个数
        max_depth=-1,                   # int, 每棵基树的深度
        learning_rate=0.1,              # float, 学习速率
        n_estimators=100,               # int, 子树的个数
        subsample_for_bin=200000,       # int, 构建列直方图时，每个特征都会被分箱，此参数控制单个特征的单个箱子所能容纳的最多样本数。
        objective=None,                 # str, 目标类型, Default: ‘regression’ for LGBMRegressor, ‘binary’ or ‘multiclass’ for LGBMClassifier, ‘lambdarank’ for LGBMRanker.
        class_weight=None,              # dict, 'balanced' or None, balanced则自动，比如三类，0类10个，1类90个，2类900个，则自动将0类权重设为1000/10=100,1类为1000/90,2类为1000/900,很大的系数，会被优先照顾，一般设置了权重，则模型会重点找全这个类别，但隐患是可能会增加误判，简称召回棒棒哒、精确率血崩。如果传字典就要一一对应，比如{'0':100,'1':11,'2':1.1}，默认无，大家都是1。
        min_split_gain=0.0,             # float, 分裂要求最小的增益
        min_child_weight=0.001,         # float, 叶子节点要求的样本最小权重之和
        min_child_samples=20,           # int, 叶子节点要求样本最小个数
        subsample=1.0,                  # float, 行采样比例，0-1之间，一般设个0.6~0.8左右，有助于加快速度和控制过拟合，也是不放回抽样。
        subsample_freq=0,               # int, 0表示不适用bagging采样, 正数表示没k个迭代 做一次bagging采样.
        colsample_bytree=1.0,           # float, 每棵基树的列采样比例
        reg_alpha=0.0,                  # float, L1正则
        reg_lambda=0.0,                 # float, L2正则
        random_state=None,              # int, 随机种子
        n_jobs=None,                    # int or None, 并行度
        importance_type='split',        # str, 特征重要性计算方式，一个是算用到过多少次，一个是算分裂带来的增益，树模型在此处有个问题，就是一个特征一旦被使用，特别是第一个，往往会造成很高的增益，比如feature-A实际上只比feature-B，划分增益高一点，但模型肯定选了A，那么下一步B带来的增益会减很多，实际上B只比A稍微弱一点，但算gain的话，B会比A少很多，虽然随机抽列会降低这个影响，但并不能完全消除。
    )
    ```

2. 实例方法
    1. fit(X, y[, sample_weight, init_score, ...])
    2. get_params([deep])
    3. predict(X[, raw_score, start_iteration, ...])
    4. predict_proba(X[, raw_score, ...])
    5. score(X, y[, sample_weight])

3. 实例属性
    1. best_iteration_: 迭代中最好表现的模型, 前提要设置early_stopping()回调函数
    2. classes_: 目标数组
    3. feature_importances_: 特征重要程度
    4. feature_name_: 特征数组
    5. n_classes_: 目标个数
    6. n_estimators_: 模型个数
    7. n_features_: 特征个数
    8. n_features_in_:
    9. n_iter_: 迭代次数



4. fit(X, y[, sample_weight, init_score, ...])

    ```python
    fit(
        X,                          # numpy array, pandas DataFrame, scipy.sparse, 二维数组[n_samples, n_features], 元素是int或者float
        y,                          # numpy array, pandas DataFrame or Series, [n_samples], 元素是int或float
        sample_weight=None,         # numpy array, pandas Series, [n_samples], 元素是int或float, 或者为None
        init_score=None,            # 训练集样本初始得分
        eval_set=None,              # list or None, A list of (X, y) tuple, 作为验证集
        eval_names=None,            # list of str, or None, 验证集的名字
        eval_sample_weight=None,    # 验证集样本权重
        eval_class_weight=None,     # 验证集特征权重
        eval_init_score=None,       # 验证集样本初始得分
        eval_metric=None,           # str, callable, list or None, 评估模型的好坏的指标, 默认‘l2’ for LGBMRegressor, ‘logloss’ for LGBMClassifier, ‘ndcg’ for LGBMRanker.
        feature_name='auto',        # list of str, or 'auto', 特征名字, 'auto'表示使用dataframe的列名
        categorical_feature='auto', # list of str or int, or 'auto', 如果是'auto'则会自动检测并使用dataframe的unordered categorical columns. 建议从0开始编码, float将会直接取整, 负数当成缺失值处理.
        callbacks=None,             # list of callable, or None, 每次迭代后调用
        init_model=None             # str, pathlib.Path, Booster, LGBMModel or None, 使用预训练的模型
    )
    ```





group：每个查询组的大小，必须在 fit 方法中提供。
eval_at=[1, 2, 3]：评估排序性能时使用的排名位置。



### boosting_type='gbdt'


提升树的类型，常用的梯度提升方法包括gbdt、dart、goss、rf。可以尝试运行不同类型的渐变增强提升方法。

1. gbdt：这是传统的梯度提升决策树，也是基于XGBoost和pGBRT等优秀库背后的算法。gbdt精度高、效率高、稳定性好，目前已得到广泛的应用。但是，它的主要缺点是，在每个树节点中找到最佳分割点非常耗时，而且会消耗内存。下边其它的提升方法试图解决这个问题。

2. dart：即Dropouts meet Multiple Additive Regression Trees，dart利用dropout技巧(源自深度神经网络)解决过拟合的Regression Trees，改进模型正则化。gbdt存在过度专门化（over-specialization）的问题，这意味着在以后的迭代中添加的树往往只会影响对少数实例的预测，而对其余实例的贡献则可以忽略不计。添加dropout会使树在以后的迭代中更加难以专门化那些少数的示例，从而提高性能。

    它的原理是随机丢弃生成的决策树，然后再从剩下的决策树集中迭代优化提升树。它的特点是
    1. 训练慢：因为随机dropout不使用用于保存预测结果的buffer，所以训练会更慢。
    2. 随机导致不稳定：因为随机，早停可能不够稳定。

    dart与gbdt的不同点：计算下一棵树要拟合的梯度的时，仅仅随机从已经生成的树中选取一部分。

3. goss ：基于梯度的单边采样，该方法命名为lightgbm的最重要原因就是其使用了基于Goss方法。goss的基本思想是首先对训练集数据根据梯度排序，预设一个比例划分梯度大小，保留在所有样本中梯度大的数据样本；再设置一个采样比例，从梯度小的样本中按比例抽取样本。为了弥补对样本分布造成的影响，goss算法在计算信息增益时，会对较小梯度的数据集乘以一个系数，用来放大。这样，在计算信息增益时，算法可以更加关注“未被充分训练”的样本数据。         goss通过对较小的样本数据集估算增益，大大的减少了计算量。而且通过证明，goss算法不会过多的降低训练的精度。

    标准的gbdt是可靠的，但在大型数据集上速度不够快。因此goss提出了一种基于梯度的采样方法来避免搜索整个搜索空间。其实，对于每个数据实例，当梯度很小时，这意味着不用担心数据是经过良好训练的，而当梯度很大时，应该重新训练。数据实例有大的和小的渐变。因此，goss以一个大的梯度保存所有数据，并对一个小梯度的数据进行随机抽样(这就是为什么它被称为单边抽样)。这使得搜索空间更小，goss的收敛速度更快。
4. rf ：随机森林。切记，如果将增强设置为rf，那么lightgbm算法表现为随机森林而不是增强树。根据文档可知，要使用rf，必须使用bagging_fraction和feature_fraction小于1。

## 超参调整

1. 通用参数：
    1. n_estimators：提升树的数量。初始值可以设为 100，然后根据模型性能逐步增加或减少。
    2. learning_rate：学习率。初始值可以设为 0.1，如果模型过拟合，可以尝试降低学习率。
    3. max_depth：树的最大深度。初始值可以设为 5 或 6，然后根据模型性能进行调整。
    4. num_leaves：每棵树的最大叶子数。初始值可以设为 31，然后根据模型性能进行调整。
    5. min_child_samples：叶子节点的最小样本数。初始值可以设为 20，如果数据集中有少量样本，可以适当减少这个值。
2. 正则化参数：
    reg_alpha：L1 正则化系数。初始值可以设为 0，如果模型过拟合，可以尝试增加这个值。
    reg_lambda：L2 正则化系数。初始值可以设为 0，如果模型过拟合，可以尝试增加这个值。
3. 子采样参数：
    subsample：每棵树训练时使用的样本比例。初始值可以设为 1.0，如果数据集较大，可以尝试减小这个值（例如 0.8）。
    colsample_bytree：每棵树训练时使用的特征比例。初始值可以设为 1.0，如果特征数量较多，可以尝试减小这个值（例如 0.8）。
4. 特定任务：
    类别不平衡：如果数据集中类别不平衡，可以使用 class_weight='balanced' 或者手动设置 scale_pos_weight。
    多分类：对于多分类任务，可以尝试增加 n_estimators 和 max_depth，因为多分类任务通常需要更复杂的模型。








## 参考
1. https://lightgbm.readthedocs.io/en/latest/pythonapi/lightgbm.LGBMClassifier.html
1. https://datascience.stackexchange.com/questions/45356/what-is-the-difference-between-lightgbm-lgbmmodel-and-lightgbm-lgbmclassifier
2. https://blog.csdn.net/TravelLight92/article/details/136624270
3. https://www.cnblogs.com/dzqdzq/p/14055567.html
4. https://bbs.huaweicloud.com/blogs/252840
5. https://blog.csdn.net/m0_73972962/article/details/131387816
6. https://coderzcolumn.com/tutorials/machine-learning/lightgbm-an-in-depth-guide-python
