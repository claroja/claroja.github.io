



```python
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.model_selection import GridSearchCV
from lightgbm import LGBMClassifier


data_all = pd.read_csv(
    './data/train.csv', 
    usecols=['Survived', 'Pclass', 'Sex', 'Age', 'SibSp', 'Parch', 'Fare',  'Embarked'])

data_all = data_all.dropna()

data_all['Sex'] = data_all['Sex'].map({'male':0,'female':1}).astype('category')
data_all['Embarked'] = data_all['Embarked'].map({'S':0,'C':1,'Q':3 }).astype('category')

df_train = data_all.groupby('Survived', group_keys=False).apply(lambda x: x.sample(frac=0.8))
df_test = data_all.drop(df_train.index, axis=0)

params = {
    'n_estimators': range(1,100),
    # 'max_depth':  [None, 2, 4, 6, 8, 10],
    # 'criterion':  ['gini', 'entropy'],
    # 'max_features': [None, 'sqrt', 'log2', 0.2, 0.4, 0.6, 0.8],
}

clf_grid = GridSearchCV(
    estimator=LGBMClassifier(objective='binary', random_state=10),
    param_grid=params,
    cv=5,
    n_jobs=5,
    verbose=1,
)

clf_grid.fit(df_train.loc[:, df_train.columns != 'Survived'], df_train['Survived'])

print(accuracy_score(df_test['Survived'], clf_grid.predict(df_test.loc[:, df_test.columns != 'Survived'])))  # 0.7921348314606742
clf_grid.best_params_ 

```










