
决策树是无参(non-parametric)的监督学习方法.
优点:
1. 可解释, 可视化, 易理解
2. 需要较少的数据准备. 其他的算法需要标准化(normalization), 热编码(one-hot, dummy), 去除缺失值. 一些树可以直接处理缺失值.
3. The cost of using the tree (i.e., predicting data) is logarithmic in the number of data points used to train the tree.
4. 支持数值型(numerical)和分类型(categorical)数据. 但是目前scikit-learn尚未支持分类数据.
5. 可以处理多输出问题(multi-output)
6. 白盒模型,可解释, 可视话, 易理解


缺点:
1. 容易过拟合, 可以通过设置超参控制.
2. 方差大的数据, 或者异常值敏感. 可以通过组合树, 如随机森林解决.
3. 决策树的预测是非连续型
4. 可以局部最优, 但不能保证全局最优. 可以通过集成学习解决.
5. 要做数据平衡.


## API

### 构造参数

```python
from sklearn.tree import DecisionTreeClassifier
DecisionTreeClassifier(
    *, 
    criterion='gini',               # 特征分裂的标准, {“gini”, “entropy”, “log_loss”}
    splitter='best',                # 最优的分裂的策略, {“best”, “random”}, best表示在所有特征上递归，适用于数据集较小的时候，random表示随机选择一部分特征进行递归，适用于数据集较大的时候
    max_depth=None,                 # 树的深度, 如果为None, 叶节点将趋向于纯净(只有单一变量). 该参量受min_samples_split参数影响
    min_samples_split=2,            # 子数据集再切分需要的最小样本量，默认是2，如果子数据样本量小于2时，则不再进行下一步切分。如果数据量较小，使用默认值就可，如果数据量较大，为降低计算量，应该把这个值增大，即限制子数据集的切分次数。
    min_samples_leaf=1,             # 叶节点（子数据集）最小样本数，如果子数据集中的样本数小于这个值，那么该叶节点和其兄弟节点都会被剪枝（去掉）
    min_weight_fraction_leaf=0.0,   # 如果我们设置 min_weight_fraction_leaf 为0.1，这意味着每个叶节点在所有输入样本中的权重总和至少要达到10%
    max_features=None,              # 每次选取多少个特征决定最优分裂, int, float, auto(所有点特征数量的开方), sqrt(和auto相同), log2(所有特征数的对数), None(所有特征数)
    random_state=None,              # 随机种子
    max_leaf_nodes=None,            # 最大叶子节点数
    min_impurity_decrease=0.0,      # 这个值限制了决策树的增长，如果某节点的不纯度(基尼系数，信息增益，均方差，绝对差)小于这个阈值则该节点不再生成子节点。即为叶子节点 。
    class_weight=None,              # 指定样本各类别的的权重，主要是为了防止训练集某些类别的样本过多导致训练的决策树过于偏向这些类别。这里可以自己指定各个样本的权重，如果使用“balanced”，则算法会自己计算权重，样本量少的类别所对应的样本权重会高。
    ccp_alpha=0.0                   # Minimal Cost-Complexity Pruning的参数
)
```



1. max_features每次分裂所选择的特征数, 比如当max_features=10时, 你的数据50个特征, 第一次分裂随机选择10个特征, 从这个10个特整理选1个最佳的分裂特征. 第二次分裂, 再选择10个, 依次类推.
2. splitter='best', 选择最佳分裂特征后, best是指选择该特征的最佳分裂点, random是随机选择该特征的分裂点


参考:
https://datascience.stackexchange.com/questions/41417/how-max-features-parameter-works-in-decisiontreeclassifier
https://datascience.stackexchange.com/questions/115359/splitter-in-decision-trees-in-sklearn-implementation


### 属性
1. classes_: 分类模型的类别，如array([0, 1, 2])
2. feature_importances_: 特征重要性，以列表的形式输出每个特征的重要性
3. max_features_:最大特征数
4. n_classes_:类别数，与classes_对应，classes_输出具体的类别
5. n_features_:特征数，当数据量小时，一般max_features和n_features_相等
6. n_outputs_:输出结果数
7. tree_:输出整个决策树,用于生成决策树的可视化


### 方法

1. decision_path(X):返回X的决策路径
1. fit(X, y):在数据集(X,y)上使用决策树模型
1. get_params([deep]):获取模型的参数
1. predict(X):预测数据值X的标签
1. predict_log_proba(X):返回每个类别的概率值的对数
1. predict_proba(X):返回每个类别的概率值（有几类就返回几列值）
1. score(X,y):返回给定测试集和对应标签的平均准确率

## 相同数据, 相同参数, 结果不同的原因

以下代码, 相同的数据, 相同的参数, 每次结果不同. 而设置了random_state后就会一致.
```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import GridSearchCV

data_all = pd.read_csv(
    './data/test/titanic.csv', 
    usecols=['Survived', 'Pclass', 'Age', 'SibSp', 'Parch', 'Fare', 'Sex', 'Embarked'])

data_all = data_all.dropna()

data_all = pd.merge(data_all, pd.get_dummies(data_all[['Sex', 'Embarked']]), how="inner", left_index=True, right_index=True)
data_all = data_all.drop(['Sex', 'Embarked'], axis=1)

data_y = data_all['Survived']
data_x = data_all.drop('Survived', axis=1)


X_train, X_test, y_train, y_test = train_test_split(data_x, data_y, random_state = 100)

params_default ={
    'criterion': 'gini',
    'splitter': 'best',
    'max_depth': None,
    'max_features': None,
    # 'random_state': 10
}

clf = DecisionTreeClassifier(**params_default)
clf.fit(X_train, y_train)
print(accuracy_score(y_test, clf.predict(X_test)))

```

每次决策树分叉时，所有的特征都是随机排序的，随机种子就是random_state
如果你的max_features小于你总特征数n_features，那么每个分叉必须采样，随机性很大
即使你的max_features = n_features，表现相同的分叉还是会选第一个，所以依然有随机性
sklearn的算法大多有random_state，如果需要复盘或是需要模型稳定不变必须设置











## 参考
1. https://scikit-learn.org/stable/modules/tree.html#complexity
2. https://scikit-learn.org/stable/modules/generated/sklearn.tree.DecisionTreeClassifier.html#sklearn.tree.DecisionTreeClassifier
3. https://datagy.io/sklearn-decision-tree-classifier/
4. https://scikit-learn.org/stable/modules/tree.html
5. https://www.zhihu.com/tardis/bd/art/339380585
6. https://www.zhihu.com/question/54370722?sort=created
7. https://zhuanlan.zhihu.com/p/39780305







