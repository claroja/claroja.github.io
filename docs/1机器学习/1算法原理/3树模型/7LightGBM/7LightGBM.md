LightGBM是微软推出的boosting框架,


## 优点

1. 速度更快
    1. LightGBM 采用了直方图算法将`遍历样本`转变为`遍历直方图`，极大的降低了时间复杂度
    2. LightGBM 在训练过程中采用单边梯度算法过滤掉梯度小的样本，减少了大量的计算
    3. LightGBM 采用了基于 `Leaf-wise` 算法的增长策略构建树，减少了很多不必要的计算量
    4. LightGBM 采用优化后的特征并行、数据并行方法加速计算，当数据量非常大的时候还可以采用投票并行的策略
    5. LightGBM 对缓存也进行了优化，增加了缓存命中率
2. 内存更小
    1. XGBoost使用预排序后需要记录特征值及其对应样本的统计值的索引，而 LightGBM 使用了直方图算法将特征值转变为 bin 值，且不需要记录特征到样本的索引，将空间复杂度从 O(2*data) 降低为 O(bin) ，极大的减少了内存消耗
    2. LightGBM 采用了直方图算法将存储特征值转变为存储 bin 值，降低了内存消耗
    3. LightGBM 在训练过程中采用互斥特征捆绑算法减少了特征数量，降低了内存消耗

## 缺点

1. 可能会长出比较深的决策树，产生过拟合。因此LightGBM在Leaf-wise之上增加了一个最大深度限制，在保证高效率的同时防止过拟合
2. Boosting族是迭代算法，每一次迭代都根据上一次迭代的预测结果对样本进行权重调整，所以随着迭代不断进行，误差会越来越小，模型的偏差（bias）会不断降低。由于LightGBM是基于偏差的算法，所以会对噪点较为敏感
3. 在寻找最优解时，依据的是最优切分变量，没有将最优解是全部特征的综合这一理念考虑进去









## LightGBM调参

### 控制参数

| Control Parameters     | 含义                                                         | 用法                                        |
| ---------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| `max_depth`            | 树的最大深度                                                 | 当模型过拟合时,可以考虑首先降低 `max_depth` |
| `min_data_in_leaf`     | 叶子可能具有的最小记录数                                     | 默认20，过拟合时用                          |
| `feature_fraction`     | 例如 为0.8时，意味着在每次迭代中随机选择80％的参数来建树     | boosting 为 random forest 时用              |
| `bagging_fraction`     | 每次迭代时用的数据比例                                       | 用于加快训练速度和减小过拟合                |
| `early_stopping_round` | 如果一次验证数据的一个度量在最近的`early_stopping_round` 回合中没有提高，模型将停止训练 | 加速分析，减少过多迭代                      |
| lambda                 | 指定正则化                                                   | 0～1                                        |
| `min_gain_to_split`    | 描述分裂的最小 gain                                          | 控制树的有用的分裂                          |
| `max_cat_group`        | 在 group 边界上找到分割点                                    | 当类别数量很多时，找分割点很                |

### 核心参数

| CoreParameters    | 含义                                                         | 用法                                                         |
| ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Task              | 数据的用途                                                   | 选择 train 或者 predict                                      |
| application       | 模型的用途                                                   | 选择 regression: 回归时，binary: 二分类时，multiclass: 多分类时 |
| boosting          | 要用的算法                                                   | gbdt， rf: random forest， dart: Dropouts meet Multiple Additive Regression Trees， goss: `Gradient-based One-Side Sampling` |
| `num_boost_round` | 迭代次数                                                     | 通常 100+                                                    |
| `learning_rate`   | 如果一次验证数据的一个度量在最近的 `early_stopping_round` 回合中没有提高，模型将停止训练 | 常用 0.1, 0.001, 0.003…                                      |
| num_leaves        |                                                              | 默认 31                                                      |
| device            |                                                              | cpu 或者 gpu                                                 |
| metric            |                                                              | mae: mean absolute error ， mse: mean squared error ， binary_logloss: loss for binary classification ， multi_logloss: loss for multi classification |

### IO参数

| IO parameter          | 含义                                                         |
| --------------------- | ------------------------------------------------------------ |
| `max_bin`             | 表示 feature 将存入的 bin 的最大数量                         |
| `categorical_feature` | 如果 `categorical_features = 0,1,2`， 则列 0，1，2是 categorical 变量 |
| `ignore_column`       | 与 `categorical_features` 类似，只不过不是将特定的列视为categorical，而是完全忽略 |
| `save_binary`         | 这个参数为 true 时，则数据集被保存为二进制文件，下次读数据时速度会变快 |

### 调参

| IO parameter       | 含义                                                         |
| ------------------ | ------------------------------------------------------------ |
| `num_leaves`       | 取值应 `<= 2 ^（max_depth）`， 超过此值会导致过拟合          |
| `min_data_in_leaf` | 将它设置为较大的值可以避免生长太深的树，但可能会导致 underfitting，在大型数据集时就设置为数百或数千 |
| `max_depth`        | 这个也是可以限制树的深度                                     |

下表对应了 Faster Speed ，better accuracy ，over-fitting 三种目的时，可以调的参数：

| Faster Speed                              | better accuracy                                 | over-fitting                                           |
| ----------------------------------------- | ----------------------------------------------- | ------------------------------------------------------ |
| 将 `max_bin` 设置小一些                   | 用较大的 `max_bin`                              | `max_bin` 小一些                                       |
|                                           | `num_leaves` 大一些                             | `num_leaves` 小一些                                    |
| 用 `feature_fraction` 来做 `sub-sampling` |                                                 | 用 `feature_fraction`                                  |
| 用 `bagging_fraction 和 bagging_freq`     |                                                 | 设定 `bagging_fraction 和 bagging_freq`                |
|                                           | training data 多一些                            | training data 多一些                                   |
| 用 `save_binary` 来加速数据加载           | 直接用 categorical feature                      | 用 `gmin_data_in_leaf 和 min_sum_hessian_in_leaf`      |
| 用 parallel learning                      | 用 dart                                         | 用 `lambda_l1, lambda_l2 ，min_gain_to_split` 做正则化 |
|                                           | `num_iterations` 大一些，`learning_rate` 小一些 | 用 `max_depth` 控制树的深度                            |

























## 应用

LightGBM有两大类接口：LightGBM原生接口 和 scikit-learn接口 ，并且LightGBM能够实现分类和回归两种任务。


### 基于LightGBM原生接口的分类

```python
import numpy as np
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_auc_score, accuracy_score
import lightgbm as lgb

# 加载数据
iris = datasets.load_iris()

# 划分训练集和测试集
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.3)

# 转换为Dataset数据格式
train_data = lgb.Dataset(X_train, label=y_train)
validation_data = lgb.Dataset(X_test, label=y_test)

# 参数
params = {
    'learning_rate': 0.1,
    'lambda_l1': 0.1,
    'lambda_l2': 0.2,
    'max_depth': 4,
    'objective': 'multiclass',  # 目标函数
    'num_class': 3,
}

# 模型训练
gbm = lgb.train(params, train_data, valid_sets=[validation_data])

# 模型预测
y_pred = gbm.predict(X_test)
y_pred = [list(x).index(max(x)) for x in y_pred]
print(y_pred)

# 模型评估
print(accuracy_score(y_test, y_pred))

```




### 基于Scikit-learn接口的分类

```python
from lightgbm import LGBMClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import GridSearchCV
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.externals import joblib

# 加载数据
iris = load_iris()
data = iris.data
target = iris.target

# 划分训练数据和测试数据
X_train, X_test, y_train, y_test = train_test_split(data, target, test_size=0.2)

# 模型训练
gbm = LGBMClassifier(num_leaves=31, learning_rate=0.05, n_estimators=20)
gbm.fit(X_train, y_train, eval_set=[(X_test, y_test)], early_stopping_rounds=5)

# 模型存储
joblib.dump(gbm, 'loan_model.pkl')
# 模型加载
gbm = joblib.load('loan_model.pkl')

# 模型预测
y_pred = gbm.predict(X_test, num_iteration=gbm.best_iteration_)

# 模型评估
print('The accuracy of prediction is:', accuracy_score(y_test, y_pred))

# 特征重要度
print('Feature importances:', list(gbm.feature_importances_))
# Feature importances: [28, 6, 97, 61]

# 网格搜索，参数优化
estimator = LGBMClassifier(num_leaves=31)
param_grid = {
    'learning_rate': [0.01, 0.1, 1],
    'n_estimators': [20, 40]
}
gbm = GridSearchCV(estimator, param_grid)
gbm.fit(X_train, y_train)
print('Best parameters found by grid search are:', gbm.best_params_)
# Best parameters found by grid search are: {'learning_rate': 0.1, 'n_estimators': 20}

```


### 基于LightGBM原生接口的回归

对于LightGBM解决回归问题，我们用Kaggle比赛中回归问题：House Prices: Advanced Regression Techniques，地址：https://www.kaggle.com/c/house-prices-advanced-regression-techniques 来进行实例讲解。

该房价预测的训练数据集中一共有列，第一列是Id，最后一列是label，中间列是特征。这列特征中，有列是分类型变量，列是整数变量，列是浮点型变量。训练数据集中存在缺失值。

```python
import pandas as pd
from sklearn.model_selection import train_test_split
import lightgbm as lgb
from sklearn.metrics import mean_absolute_error
from sklearn.preprocessing import Imputer

# 1.读文件
data = pd.read_csv('./dataset/train.csv')

# 2.切分数据输入：特征 输出：预测目标变量
y = data.SalePrice
X = data.drop(['SalePrice'], axis=1).select_dtypes(exclude=['object'])

# 3.切分训练集、测试集,切分比例7.5 : 2.5
train_X, test_X, train_y, test_y = train_test_split(X.values, y.values, test_size=0.25)

# 4.空值处理，默认方法：使用特征列的平均值进行填充
my_imputer = Imputer()
train_X = my_imputer.fit_transform(train_X)
test_X = my_imputer.transform(test_X)

# 5.转换为Dataset数据格式
lgb_train = lgb.Dataset(train_X, train_y)
lgb_eval = lgb.Dataset(test_X, test_y, reference=lgb_train)

# 6.参数
params = {
    'task': 'train',
    'boosting_type': 'gbdt',  # 设置提升类型
    'objective': 'regression',  # 目标函数
    'metric': {'l2', 'auc'},  # 评估函数
    'num_leaves': 31,  # 叶子节点数
    'learning_rate': 0.05,  # 学习速率
    'feature_fraction': 0.9,  # 建树的特征选择比例
    'bagging_fraction': 0.8,  # 建树的样本采样比例
    'bagging_freq': 5,  # k 意味着每 k 次迭代执行bagging
    'verbose': 1  # <0 显示致命的, =0 显示错误 (警告), >0 显示信息
}

# 7.调用LightGBM模型，使用训练集数据进行训练（拟合）
# Add verbosity=2 to print messages while running boosting
my_model = lgb.train(params, lgb_train, num_boost_round=20, valid_sets=lgb_eval, early_stopping_rounds=5)

# 8.使用模型对测试集数据进行预测
predictions = my_model.predict(test_X, num_iteration=my_model.best_iteration)

# 9.对模型的预测结果进行评判（平均绝对误差）
print("Mean Absolute Error : " + str(mean_absolute_error(predictions, test_y)))
# Mean Absolute Error : 55355.984107934746

```



### 基于Scikit-learn接口的回归

```python
import pandas as pd
from sklearn.model_selection import train_test_split
import lightgbm as lgb
from sklearn.metrics import mean_absolute_error
from sklearn.preprocessing import Imputer

# 1.读文件
data = pd.read_csv('./dataset/train.csv')

# 2.切分数据输入：特征 输出：预测目标变量
y = data.SalePrice
X = data.drop(['SalePrice'], axis=1).select_dtypes(exclude=['object'])

# 3.切分训练集、测试集,切分比例7.5 : 2.5
train_X, test_X, train_y, test_y = train_test_split(X.values, y.values, test_size=0.25)

# 4.空值处理，默认方法：使用特征列的平均值进行填充
my_imputer = Imputer()
train_X = my_imputer.fit_transform(train_X)
test_X = my_imputer.transform(test_X)

# 5.调用LightGBM模型，使用训练集数据进行训练（拟合）
# Add verbosity=2 to print messages while running boosting
my_model = lgb.LGBMRegressor(objective='regression', num_leaves=31, learning_rate=0.05, n_estimators=20,
                             verbosity=2)
my_model.fit(train_X, train_y, verbose=False)

# 6.使用模型对测试集数据进行预测
predictions = my_model.predict(test_X)

# 7.对模型的预测结果进行评判（平均绝对误差）
print("Mean Absolute Error : " + str(mean_absolute_error(predictions, test_y)))
# Mean Absolute Error : 29071.590700672827

```
## 参考
1. https://mayuanucas.github.io/xgboost-lightgbm/
2. https://www.analyticsvidhya.com/blog/2020/02/4-boosting-algorithms-machine-learning/













