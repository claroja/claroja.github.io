



## 缺失值

[随机森林理论_模型](./5_1随机森林理论_模型.md)中介绍了异常值的处理方法, 但是scikitlearn官网[ensemble](https://scikit-learn.org/stable/modules/ensemble.html#ensemble), 并未对randomforest的缺失值处理方法做详细说明, 所以暂时按照[Missing Values Support](https://scikit-learn.org/stable/modules/tree.html#missing-values-support)理解:
1. 把缺失值当成一个类别
2. 如果缺失值同时被预测为两个目标值, 且目标值权重相同, 则该缺失值会被分配给右侧节点
3. 如果缺失值同时被越策为两个目标值, 且目标值权重不同, 则缺失值会预测权重更高的值

所以:
1. scikitlearn决策树模型, 可以接收缺失值做输入, 按照以上方法进行处理
2. 但是处理方法过于简单, 建议在特征工程时进行缺失值的填充


## 特征编码

1. 分类数据

    1. 决策树理论上不需要对分类数据进行数字编码, 但scikitlearn尚未实现, 所以需要对分类数据进行编码, 编码成数值即可
    2. 不要使用onehot编码
    3. 决策树模型从理论上是不区分分类变量和排序变量的

2. 排序数据

    决策树模型从理论上是不区分分类变量和排序变量的

3. 数值数据

    不需要处理


## 归一化

    随机森林不需要进行归一化



## 实战

ordinal vs onehot

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

# data_all['Sex'] = data_all['Sex'].map({'male':1,'female':2})
# data_all['Embarked'] = data_all['Embarked'].map({'S':1,'C':2,'Q':3 })



data_y = data_all['Survived']
data_x = data_all.drop('Survived', axis=1)


X_train, X_test, y_train, y_test = train_test_split(data_x, data_y, random_state = 100)

params = {
    'n_estimators': range(1,20),
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
print(accuracy_score(y_test, clf_grid.predict(X_test)))  # 0.7921348314606742
clf_grid.best_params_ 

```

另有[One-Hot Encoding is making your Tree-Based Ensembles worse, here’s why?](https://towardsdatascience.com/one-hot-encoding-is-making-your-tree-based-ensembles-worse-heres-why-d64b282b5769)文章印证这个观点