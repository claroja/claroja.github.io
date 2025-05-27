
# 特征工程_特征选择_RFECV



## 最佳实践
1. RFE和RFECV的关系
    1. RFE, 要指定最终选择的特征数量
    2. RFECV, 通过交叉验证的得分选择最优的特征, 实践中选择
2. 特征选择的过程
    1. 挑选树模型或者逻辑回归模型, 作为特征选择模型. 
    2. 获得最优的特征, 进行超参调整

```python
from sklearn import feature_selection, model_selection
from sklearn import datasets
from sklearn import tree
import pandas as pd

data = datasets.load_iris()

df = pd.DataFrame(
    data = data['data'],
    columns= data['feature_names']
)

df['target'] = data['target']

dtree = tree.DecisionTreeClassifier(random_state = 0)

dtree_rfe = feature_selection.RFECV(dtree, step = 1, scoring = 'accuracy')
dtree_rfe.fit(df.loc[:,~df.columns.isin(['target'])], data['target'])
features_rfe = dtree_rfe.feature_names_in_[dtree_rfe.get_support()]

param_grid = {
    'criterion': ['gini', 'entropy'], 
    'splitter': ['best', 'random'],
    'max_depth': [None, 2,4,6,8,10],
    'min_samples_split': [1, 3, 5,10,15,20,25],
    'max_features': [None, 'auto', 'sqrt', 'log2']
}


rfe_tune_model = model_selection.GridSearchCV(
    tree.DecisionTreeClassifier(), 
    param_grid=param_grid, 
    scoring = 'accuracy'
)

rfe_tune_model.fit(df[features_rfe], df['target'])
```





## API

### [RFE](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFECV.html#sklearn.feature_selection.RFECV)


1. 最佳实践

    ```python
    from sklearn.datasets import make_friedman1
    from sklearn.feature_selection import RFE
    from sklearn.svm import SVR
    X, y = make_friedman1(n_samples=50, n_features=10, random_state=0)
    estimator = SVR(kernel="linear")
    selector = RFE(estimator, n_features_to_select=5, step=1)
    selector = selector.fit(X, y)
    selector.support_  # array([ True,  True,  True,  True,  True, False, False, False, False,False])
    selector.ranking_  # array([1, 1, 1, 1, 1, 6, 4, 3, 2, 5])
    ```



1. 构造参数:

    ```python
    class sklearn.feature_selection.RFE(
        estimator,                      # Estimator instance, 实现fit方法, 并提供coef_和feature_importances_属性的模型
        *,                              
        n_features_to_select=None,      # int or float, 选择多少个特征. int: 特征个数; float: 特征占整体的比率
        step=1,                         # int or float, 每次丢弃的特征个数. int: 个数; float: 特征占整体的比率
        verbose=0, 
        importance_getter='auto'        # str or callable, 特征重要程度衡量标准. 'auto': 适用coef_或feature_importances_.
    )
    ```

1. 对象属性:
    1. classes_: ndarray of shape (n_classes,), 目标变量
    2. estimator_: Estimator instance, 用于筛选特征的模型
    3. n_features_: int, 要选择的特征个数
    4. n_features_in_: int, fit过程中特征个数
    5. feature_names_in_: ndarray of shape (n_features_in_,), fit过程中特征名字
    6. ranking_: ndarray of shape (n_features,), 最优特征的排序, 被选择的特征会标记为1
    7. support_: ndarray of shape (n_features,), 所选特征遮罩

2. 对象方法:
    1. fit(X, y, **fit_params): 进行特征选择
    2. transform(X): 将原特征矩阵, 转换为新特征矩阵
    3. fit_transform(X, y=None, **fit_params): 


### [RFECV](https://scikit-learn.org/stable/modules/generated/sklearn.feature_selection.RFE.html)


1. 最佳实践


    ```python
    from sklearn.datasets import make_friedman1
    from sklearn.feature_selection import RFECV
    from sklearn.svm import SVR
    X, y = make_friedman1(n_samples=50, n_features=10, random_state=0)
    estimator = SVR(kernel="linear")
    selector = RFECV(estimator, step=1, cv=5)
    selector = selector.fit(X, y)
    selector.cv_results_
    selector.support_
    selector.ranking_

    ```

1. 构造函数

    ```python
    class sklearn.feature_selection.RFECV(
        estimator,                      # Estimator instance, Estimator instance, 实现fit方法, 并提供coef_和feature_importances_属性的模型
        *, 
        step=1,                         # int or float, 每次丢弃的特征个数. int: 个数; float: 特征占整体的比率
        min_features_to_select=1,       # int, 最小选择的特征数
        cv=None,                        # int, cross-validation generator or an iterable, None: 默认5折StratifiedKFold; int, 指定折数StratifiedKFold; generator: CV spliter; iterable: ?.
        scoring=None,                   # str, callable or None, 
        verbose=0,                      # int
        n_jobs=None,                    # int or None, 并行度
        importance_getter='auto'        # str or callable, 特征重要程度衡量标准. 'auto': 适用coef_或feature_importances_.
    )
    ```

2. 对象属性:
    1. classes_: ndarray of shape (n_classes,), 目标变量
    2. estimator_: Estimator instance, 模型实例
    3. cv_results_: dict of ndarrays, 字典, key是具体统计项, 包含每折的测试得分, 所有折的测试得分的平均值, 所有折测试侧分的标准差, 使用了多少个特征. value是数组, 第1位是使用了1个特征, 最后一个是使用了所有特征
        1. split(k)_test_score: ndarray of shape (n_subsets_of_features,)
        2. mean_test_score: ndarray of shape (n_subsets_of_features,)
        3. std_test_score: ndarray of shape (n_subsets_of_features,)
        4. n_features: ndarray of shape (n_subsets_of_features,)
    4. n_features_: int, 被选择的特征数
    5. n_features_in_: int, fit过程中使用的特征数
    6. feature_names_in_: ndarray of shape (n_features_in_,), fit过程中使用的特征名称
    7. ranking_: ndarray of shape (n_features,), 最优特征的排序, 被选择的特征会标记为1
    8. support_: ndarray of shape (n_features,), 所选特征遮罩

3. 对象方法:
    1. fit(X, y, *, groups=None, **params)
    2. fit_transform(X, y=None, **fit_params)
    3. predict(X, **predict_params)
    4. predict_log_proba(X)
    5. predict_proba(X)
    6. score(X, y, **score_params)
    7. transform(X)


## 多个模型求均值确定特征的重要程度

有[文章](https://www.kaggle.com/code/expclaroja/introduction-to-ensembling-stacking-in-python/edit)提到, 用多个模型的均值来判断特征的重要程度.





