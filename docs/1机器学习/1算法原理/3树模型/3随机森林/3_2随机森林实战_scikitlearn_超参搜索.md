



## 接口

### 构造参数

```python
class sklearn.ensemble.RandomForestClassifier(
    n_estimators=100,                   # int, 树的个数
    *,
    criterion='gini',                   # {“gini”, “entropy”, “log_loss”}, 分裂点选择指标
    max_depth=None,                     # int, 树的深度, 如果不设定, 则树会无限延伸直至纯净或达到min_samples_split的值
    min_samples_split=2,                # int or float, 节点最小分裂的数据量, 如果为float, 该值为该节点的样本量*该值
    min_samples_leaf=1,                 # int or float, 叶节点最少的样本量
    min_weight_fraction_leaf=0.0,       # float, 如果我们设置 min_weight_fraction_leaf 为0.1，这意味着每个叶节点在所有输入样本中的权重总和至少要达到10%
    max_features='sqrt',                # {“sqrt”, “log2”, None}, int or float, 每次分裂选择的特征数, 除了int外, 其他都是和数据总特征相关
    max_leaf_nodes=None,                # int, 最大叶子节点个数
    min_impurity_decrease=0.0,          # float, 节点的impurity值小于该值时, 将不再分裂
    bootstrap=True,                     # bool, bootstrap抽样
    oob_score=False,                    # bool or callable, 是否使用OOB_Score, 默认使用accuracy_score
    n_jobs=None,                        # int, 并行度
    random_state=None,                  # int, RandomState instance or None, 随机种子
    verbose=0,                          # int, 训练记录
    warm_start=False,                   # bool, 热启动, 如果为True, 重复使用配置, 降低训练时间
    class_weight=None,                  # {“balanced”, “balanced_subsample”}, dict or list of dicts, 样本的权重
    ccp_alpha=0.0,                      # non-negative float, Minimal Cost-Complexity Pruning
    max_samples=None,                   # int or float, bootstrap抽样时的样本数量, 默认和整体相同
    monotonic_cst=None                  # array-like of int of shape (n_features), 
)
```


### 对象属性
1. estimator_:
2. estimators_: list, 子树数组
3. classes_: ndarray of shape (n_classes,) or a list of such arrays, 目标数组
4. n_classes_: int or list, 目标个数
5. n_features_in_: int, 特征个数
6. feature_names_in_: ndarray of shape, 特征数组
7. n_outputs_: int
8. feature_importances_: ndarray of shape (n_features,), 特征重要程度
9. oob_score_: float, OOB得分
10. oob_decision_function_: 


### 方法
1. apply(X): 返回叶节点
2. decision_path(X): 返回决策路径
3. fit(X, y, sample_weight=None): 训练
4. get_metadata_routing()
5. get_params(deep=True)
6. predict(X): 预测
7. predict_log_proba(X): 
8. predict_proba(X): 预测概率
9. score(X, y, sample_weight=None): 计算得分
10. set_fit_request()
11. set_params(**params)
12. set_score_request()



## 实战




```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import GridSearchCV

data_all = pd.read_csv(
    './data/train.csv', 
    usecols=['Survived', 'Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare',  'Embarked'])

data_all = data_all.dropna()

data_all = pd.merge(data_all, pd.get_dummies(data_all[['Sex', 'Embarked']]), how="inner", left_index=True, right_index=True)
data_all = data_all.drop(['Sex', 'Embarked'], axis=1)

data_y = data_all['Survived']
data_x = data_all.drop('Survived', axis=1)


X_train, X_test, y_train, y_test = train_test_split(data_x, data_y, random_state = 100)

params = {
    'n_estimators': range(1,201),
    'max_depth':  [None, 2, 4, 6, 8, 10],
    'criterion':  ['gini', 'entropy'],
    'max_features': [None, 'sqrt', 'log2', 0.2, 0.4, 0.6, 0.8],
    'random_state': [10]
    
}

clf_grid = GridSearchCV(
    estimator=RandomForestClassifier(),
    param_grid=params,
    cv=5,
    n_jobs=5,
    verbose=0,
)

clf_grid.fit(X_train, y_train)
print(accuracy_score(y_test, clf_grid.predict(X_test)))  # 0.79
clf_grid.best_params_ 

```










## 参考
1. https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html
2. https://stackabuse.com/random-forest-algorithm-with-python-and-scikit-learn/
3. https://towardsdatascience.com/random-forest-in-python-24d0893d51c0
4. https://towardsdatascience.com/random-forest-explained-a-visual-guide-with-code-examples-9f736a6e1b3c













