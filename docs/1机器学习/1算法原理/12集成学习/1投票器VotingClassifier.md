


## 最佳实践

```python
from sklearn import svm, linear_model, neighbors, naive_bayes, ensemble, gaussian_process
from xgboost import XGBClassifier
from sklearn import datasets
from sklearn import model_selection

data = datasets.load_iris()

# 以下模型均带有predict_proba方法, 均适应soft投票模式

vote_est = [
    ('ada', ensemble.AdaBoostClassifier()),
    ('bc', ensemble.BaggingClassifier()),
    ('etc',ensemble.ExtraTreesClassifier()),
    ('gbc', ensemble.GradientBoostingClassifier()),
    ('rfc', ensemble.RandomForestClassifier()),
    ('gpc', gaussian_process.GaussianProcessClassifier()),
    ('lr', linear_model.LogisticRegressionCV()),
    ('bnb', naive_bayes.BernoulliNB()),
    ('gnb', naive_bayes.GaussianNB()),
    ('knn', neighbors.KNeighborsClassifier()),
    ('svc', svm.SVC(probability=True)),
    ('xgb', XGBClassifier())
]
# Hard Vote or majority rules

vote_hard = ensemble.VotingClassifier(estimators = vote_est , voting = 'hard')
vote_hard_cv = model_selection.cross_validate(vote_hard, data['data'], data['target'],)
vote_hard.fit(data['data'], data['target'])

# Soft Vote or weighted probabilities
vote_soft = ensemble.VotingClassifier(estimators = vote_est , voting = 'soft')
vote_soft_cv = model_selection.cross_validate(vote_soft, data['data'], data['target'],)
vote_soft.fit(data['data'], data['target'])



```




## [VotingClassifier](https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.VotingClassifier.html)API


1. 构造参数

    ```python
    class sklearn.ensemble.VotingClassifier(
        estimators,                 # estimatorslist of (str, estimator) tuples, 
        *, 
        voting='hard',              # {‘hard’, ‘soft’}, hard: 少数服从多数; soft: 模型的权重*预测的概率
        weights=None,               # array-like of shape (n_classifiers,), 每个模型的投票权重
        n_jobs=None,                # int, 并行度
        flatten_transform=True,     # bool, 
        verbose=False               # bool, 
    )
    ```


2. 对象属性

    1. estimators_: list of classifiers, 分类器组成的列表
    2. named_estimators_: Bunch, 通过名字获取子分类器
    3. le_: LabelEncoder, 训练的时候编码, 预测的时候解码
    4. classes_: ndarray of shape (n_classes,), 目标变量
    5. n_features_in_: int, fit过程使用的特征数
    6. feature_names_in_: ndarray of shape (n_features_in_,), fit过程使用的特征名称
