



## GBDT

### 导入依赖

```python
import lightgbm as lgb
import numpy as np
import pandas as pd
from sklearn import preprocessing
from sklearn.linear_model import LogisticRegression
```

### 数据集及预处理
选用[kaggle:avazu-ctr-prediction](https://links.jianshu.com/go?to=https%3A%2F%2Fwww.kaggle.com%2Fc%2Favazu-ctr-prediction),由于样本量过大，这里仅使用10条数据做测试。

字段解释：
```
id: ad identifier
click: 0/1 for non-click/click
hour: format is YYMMDDHH, so 14091123 means 23:00 on Sept. 11, 2014 UTC.
C1 -- anonymized categorical variable
banner_pos
site_id
site_domain
site_category
app_id
app_domain
app_category
device_id
device_ip
device_model
device_type
device_conn_type
C14-C21 -- anonymized categorical variables
```

```python
df = pd.read_csv("./ctr_data.csv")
## 为了方便演示，只选择部分特征进行演示
cols = ['C1','banner_pos', 'site_domain',  'site_id', 'site_category','app_id', 'app_category',  'device_type',  'device_conn_type', 'C14', 'C15','C16']
cols_all = ['id']
cols_all.extend(cols)

y = df['click']  
y_train = y.iloc[:-2] # training label
y_test = y.iloc[-2:]  # testing label
X = df[cols_all[1:]]  # training dataset

## label encode，将分类特生进行数字编码
lbl = preprocessing.LabelEncoder()
X['site_domain'] = lbl.fit_transform(X['site_domain'].astype(str))#将提示的包含错误数据类型这一列进行转换
X['site_id'] = lbl.fit_transform(X['site_id'].astype(str))
X['site_category'] = lbl.fit_transform(X['site_category'].astype(str))
X['app_id'] = lbl.fit_transform(X['app_id'].astype(str))
X['app_category'] = lbl.fit_transform(X['app_category'].astype(str))

X_train = X.iloc[:-2] # testing dataset
X_test = X.iloc[-2:]  # testing dataset
```

### 模型训练

```python
## create dataset for lightgbm
lgb_train = lgb.Dataset(X_train, y_train)
lgb_eval = lgb.Dataset(X_test, y_test, reference=lgb_train)
params = {
    'task': 'train',
    'boosting_type': 'gbdt',
    'objective': 'binary',
    'metric': {'binary_logloss'},
    'num_leaves': 64,  # 叶子的个数，也是LR的输入的元素
    'num_trees': 100,  # 数据的个数，也是LR的输入的特征向量
    'learning_rate': 0.01,
    'feature_fraction': 0.9,
    'bagging_fraction': 0.8,
    'bagging_freq': 5,
    'verbose': 0
}

## number of leaves,will be used in feature transformation
num_leaf = 64
print('Start training...')
## train
gbm = lgb.train(params,
                lgb_train,
                num_boost_round=100,
                valid_sets=lgb_train)

## 用训练好的模型预测训练集
y_pred_train = gbm.predict(X_train, pred_leaf=True)
## 观察y_pred_train的形状，共有8000个样本，100棵树，（在上面的参数中 num_trees=100)
y_pred_train.shape  # (8000, 100)
## 观察第 1 个样本y_pred_train[0]的前10个值：第一个数 31 表示这个样本落到了第一颗树的 31 叶子节点，29 表示落到了第二棵树的 29 叶子节点，注意31 、29表示节点编号，从0开始到63。
y_pred_train[0][:10]  # array([31, 29, 29, 32, 38, 46, 35, 36, 36, 42])


```


## LR

### 数据处理
将叶子节点编号转化为OneHot编码
```python
## train data
transformed_training_matrix = np.zeros([len(y_pred_train), len(y_pred_train[0]) * num_leaf],dtype=np.int64)  # N * num_tress * num_leafs
for i in range(0, len(y_pred_train)):
    temp = np.arange(len(y_pred_train[0])) * num_leaf + np.array(y_pred_train[i])
    transformed_training_matrix[i][temp] += 1

## test data
transformed_testing_matrix = np.zeros([len(y_pred_test), len(y_pred_test[0]) * num_leaf], dtype=np.int64)
for i in range(0, len(y_pred_test)):
    temp = np.arange(len(y_pred_test[0])) * num_leaf + np.array(y_pred_test[i])
    transformed_testing_matrix[i][temp] += 1


lm = LogisticRegression(penalty='l2',C=0.05)
lm.fit(transformed_training_matrix,y_train) 
y_pred_lr_test = lm.predict_proba(transformed_testing_matrix) 
```

### 模型训练

```python
lm = LogisticRegression(penalty='l2',C=0.05)
lm.fit(transformed_training_matrix,y_train) 
y_pred_lr_test = lm.predict_proba(transformed_testing_matrix) 
```

在Kaggle指明的评价指标是NE(Normalized Cross-Entropy):
$$ 
NE=\frac{-\frac{1}{N}\sum_(i=1)^n(\frac{1+y_i}{2}log(p_i)+\frac{1-y_i}{2}log(1-p_i))}{-(p*log(p)+(1-p)*log(1-p))}
$$


### 评估

···python
NE = (-1) / len(y_pred_lr_test) * sum(((1+y_test)/2 * np.log(y_pred_lr_test[:,1]) +  (1-y_test)/2 * np.log(1 - y_pred_lr_test[:,1])))
print("Normalized Cross Entropy " + str(NE))
···

GBDT+LR只是对历史的记忆，并不是真正适合现在的大多数业务数据，现在的业务数据是大量离散特征导致的高维度离散数据。而树模型对这样的离散特征，是不能很好处理的，因为这容易导致过拟合。



## 参考

1. https://www.jianshu.com/p/73adce3fd975
2. https://www.jianshu.com/p/96173f2c2fb4