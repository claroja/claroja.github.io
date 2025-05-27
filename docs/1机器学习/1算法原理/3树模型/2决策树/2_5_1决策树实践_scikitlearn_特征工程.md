



## 缺失值
scikitlearn官网[Missing Values Support](https://scikit-learn.org/stable/modules/tree.html#missing-values-support)中提到决策树模型处理缺失值的方法:
1. 把缺失值当成一个类别
2. 如果缺失值同时被预测为两个目标值, 且目标值权重相同, 则该缺失值会被分配给右侧节点
3. 如果缺失值同时被越策为两个目标值, 且目标值权重不同, 则缺失值会预测权重更高的值

所以:
1. scikitlearn决策树模型, 可以接收缺失值做输入, 按照以上方法进行处理
2. 但是处理方法过于简单, 建议在特征工程时进行缺失值的填充


## 特征编码

1. 分类数据

    1. 决策树理论上不需要对分类数据进行数字编码, 但scikitlearn尚未实现, 所以需要对分类数据进行编码, 编码成数值即可
    2. 不要使用one-hot编码
    3. 树模型不区分分类变量和排序变量

2. 排序数据

    树模型不区分分类变量和排序变量

3. 数值数据

    不需要处理


## 归一化

    决策树不需要进行归一化



## 实战
### 实战
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
```

注意, 'Sex', 'Embarked'是string类型. 直接送入模型会报错系统提示, ValueError: could not convert string to float: 'female', 不能将字符串转换成浮点型.
```python

data_y = data_all['Survived']
data_x = data_all.drop('Survived', axis=1)


X_train, X_test, y_train, y_test = train_test_split(data_x, data_y, random_state = 100)

params_default ={
    'criterion': 'gini',
    'splitter': 'best',
    'max_depth': None,
    'max_features': None,
    'random_state': 10
}


clf = DecisionTreeClassifier(**params_default)
clf.fit(X_train, y_train)
print(accuracy_score(y_test, clf.predict(X_test)))
```


对分类数据类型进行one-hot编码

```python

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
    'random_state': 10
}


clf = DecisionTreeClassifier(**params_default)
clf.fit(X_train, y_train)
print(accuracy_score(y_test, clf.predict(X_test)))  # 0.7921348314606742

```




### ordinal VS onehot
适用ordinal和onehot编码, 通过超参搜索后, 准确率相当.



```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
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
    'criterion':  ['gini', 'entropy'],
    'splitter': ['best', 'random'],
    'max_depth':  [None, 2, 4, 6, 8, 10],
    'max_features': [None, 'sqrt', 'log2', 0.2, 0.4, 0.6, 0.8],
    'random_state': [10]
    
}

clf_grid = GridSearchCV(
    estimator=DecisionTreeClassifier(),
    param_grid=params,
    cv=5,
    n_jobs=5,
    verbose=0,
)

clf_grid.fit(X_train, y_train)
print(accuracy_score(y_test, clf_grid.predict(X_test)))  # 0.7921348314606742
clf_grid.best_params_ 

```