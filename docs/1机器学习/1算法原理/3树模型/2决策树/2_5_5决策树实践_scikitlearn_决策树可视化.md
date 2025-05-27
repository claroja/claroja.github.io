## 绘制决策树图

```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier, plot_tree
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
from matplotlib import pyplot as plt
plt.figure(figsize=(100,80))
plot_tree(clf, filled = True)
plt.savefig('./tree.jpg')

```