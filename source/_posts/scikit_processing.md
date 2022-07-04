---
title: scikit_processing
toc: true
date: 2021-11-26 22:03:54
tags:
---

原始数据处理:
1. 分清哪些数据是连续的, 哪些是离散的
2. 缺失值处理
3. 连续的数值特征进行标准化, 均值为0, 方差为1.
4. 对离散变量进行one-hot编码
5. 将需要转换为离散数据的连续型数据进行二值化
6. 防止过拟合, 对数据进行正则化
7. 在对数据探索后, 返现效果不加, 可以使用多项式方法, 寻找线性关系





# 

## 1. Standardization(标准化)
将特征数据调整为标准正泰分布, 也叫高斯分布, 使得数据的均值为0, 方差为1.
$$z = (x - \mu) / s$$

标准化的原因在于如果有些特征的方差过大, 会使得收敛过程放慢.
另外比如RBF和SVM算法都假设所有的特征的均值为0, 方差为1.

preprocessing这个模块提供了一个实用类StandarScaler，它可以在训练数据集上做了标准转换操作之后，把相同的转换应用到测试训练集中。
这是相当好的一个功能。可以对训练数据，测试数据应用相同的转换，以后有新的数据进来也可以直接调用，不用再重新把数据放在一起再计算一次了。

```python
from sklearn import preprocessing
import numpy as np
# 创建一组特征数据，每一行表示一个样本，每一列表示一个特征
x = np.array([[1., -1., 4.],
              [2., 0., 0.],
              [3., 1., 4.]])
# 另外，StandardScaler()中可以传入两个参数：with_mean,with_std. 默认情况下都是true,但也可以自定义成false.即不要均值中心化或者不要方差规模化为1.
# 调用fit方法，根据已有的训练数据创建一个标准化的转换器
scaler = preprocessing.StandardScaler().fit(x)
# 进行转换
scaler.transform(x)
# array([[-1.22474487, -1.22474487,  0.70710678],
#        [ 0.        ,  0.        , -1.41421356],
#        [ 1.22474487,  1.22474487,  0.70710678]])
# 现在又来了一组新的样本，也想得到相同的转换
new_x = [[-1., 1., 0.]]
scaler.transform(new_x)
```

## 尺度
如果对稀疏数据进行去均值的中心化就会破坏稀疏的数据结构。MaxAbsScaler 和 maxabs_scale这两个方法是专门为稀疏数据的规模化所设计的。
如果你的数据有许多异常值，那么使用数据的均值与方差去做标准化就不行了。
在这里，你可以使用robust_scale 和 RobustScaler这两个方法。它会根据中位数或者四分位数去中心化数据。

### MinMaxScaler [0,1]标准化
将特征分布限定在[0,1]区间内, 最大值为1.
之所以需要将特征规模化到一定的[0,1]范围内，是为了对付那些标准差相当小的特征并且保留下稀疏数据中的0值。

X_std = (X - X.min(axis=0)) / (X.max(axis=0) - X.min(axis=0))
X_scaled = X_std * (max - min) + min

```python
from sklearn.preprocessing import MinMaxScaler
data = [[-1, 2], [-0.5, 6], [0, 10], [1, 18]]
scaler = MinMaxScaler()
print(scaler.fit(data))
# MinMaxScaler()
print(scaler.data_max_)
# [ 1. 18.]
print(scaler.transform(data))
# [[0.   0.  ]
#  [0.25 0.25]
#  [0.5  0.5 ]
#  [1.   1.  ]]
print(scaler.transform([[2, 2]]))
# [[1.5 0. ]]
```

### MaxAbsScaler [-1,1]
将数据尺度化到[-1,1]之间, 这个方法对均值为0或者稀疏矩阵有意义.

```python
max_abs_scaler = preprocessing.MaxAbsScaler()
x_train_maxsbs = max_abs_scaler.fit_transform(x)
x_train_maxsbs
# array([[ 0.5, -1. ,  1. ],
#        [ 1. ,  0. ,  0. ],
#        [ 0. ,  1. , -0.5]])
```


# 2. Non-linear transformation



# 3. ormalization(规范化)
Normalization is the process of scaling individual samples to have unit norm.是将样本在向量空间模型上的一个转换将范数归一.
```python
# X = [[ 1., -1.,  2.],
#      [ 2.,  0.,  0.],
#      [ 0.,  1., -1.]]
X_normalized = preprocessing.normalize(X, norm='l2')
X_normalized
# array([[ 0.40..., -0.40...,  0.81...],
#        [ 1.  ...,  0.  ...,  0.  ...],
#        [ 0.  ...,  0.70..., -0.70...]])
```



4. Encoding categorical features(分类特征编码)
## OrdinalEncoder
将数字化理算变量

```python
from sklearn import preprocessing
import numpy as np
X = [['male', 'from US', 'uses Safari'], ['female', 'from Europe', 'uses Firefox'],['female', 'from China', 'uses 360']]
enc = preprocessing.OrdinalEncoder().fit(X)
enc.transform(X)

# array([[1., 2., 2.],
#        [0., 1., 1.],
#        [0., 0., 0.]])

```


## OneHotEncoder
one-hot或者称为dummy encoding.
OrdinalEncoder离散变量使用integer来表示, 在数据中有有些不妥. 比如['apple','orange','banana']标为[0,1,2]. 那么`apple`和`bannana`的距离为2, 大于`apple`和`orange`的距离1. 而实际上, 三者两两之间的距离应该是相同的.

```python
from sklearn import preprocessing
import numpy as np
X = [['male', 'from US', 'uses Safari'], ['female', 'from Europe', 'uses Firefox'],['female', 'from China', 'uses 360']]
enc = preprocessing.OneHotEncoder().fit(X)

enc.categories_  # 查看编码的分类
# [array(['female', 'male'], dtype=object),
#  array(['from China', 'from Europe', 'from US'], dtype=object),
#  array(['uses 360', 'uses Firefox', 'uses Safari'], dtype=object)]

result = enc.transform(X).toarray()  # transform转换出来的是稀疏矩阵, 使用toarray转换
# array([[0., 1., 0., 0., 1., 0., 0., 1.],
#        [1., 0., 0., 1., 0., 0., 1., 0.],
#        [1., 0., 1., 0., 0., 1., 0., 0.]])

enc.inverse_transform(result)  # 反编码
# array([['male', 'from US', 'uses Safari'],
#        ['female', 'from Europe', 'uses Firefox'],
#        ['female', 'from China', 'uses 360']], dtype=object)
```

另外`fit(X).transform(X)`可以简写为`fit_transform(X)`, 既:
```python
result =preprocessing.OneHotEncoder().fit_transform(X).toarray()
```









# Discretization(离散化)
将连续型数据转换为离散数据.

## KBinsDiscretizer

```python
X = np.array([[ -3., 5., 15 ],
              [  0., 6., 14 ],
              [  6., 3., 11 ]])
est = preprocessing.KBinsDiscretizer(n_bins=[3, 2, 2], encode='ordinal').fit(X)
est.transform(X)

# array([[0., 1., 1.],
#        [1., 1., 1.],
#        [2., 0., 0.]])
```

feature 1: ${[-\infty, -1), [-1, 2), [2, \infty)}$
feature 2: ${[-\infty, 5), [5, \infty)}$
feature 3: ${[-\infty, 14), [14, \infty)}$

默认是使用`one-hot`编码, 可以通过encode来指定为`ordinal`, 比如学生的成绩劣,良,优是逐级递升的, 则使用`ordinal`更好.

## binarization
Feature binarization is the process of thresholding numerical features to get boolean values. 

```python
X = [[ 1., -1.,  2.],
     [ 2.,  0.,  0.],
     [ 0.,  1., -1.]]
binarizer = preprocessing.Binarizer().fit(X)  # fit does nothing
binarizer.transform(X)
# array([[1., 0., 1.],
#        [1., 0., 0.],
#        [0., 1., 0.]])
```


# 缺失值处理
https://scikit-learn.org/stable/modules/impute.html#impute

# polynomial features(多项式特征)

## PolynomialFeatures
线性的特征并不能做出美的模型，于是我们会去尝试非线性。
比如将两个特征 $(X_1, X_2)$,它的平方展开式便转换成5个特征$(1, X_1, X_2, X_1^2, X_1X_2, X_2^2)$. 代码案例如下：

```python
# 自建一组3*2的样本
x = np.arange(6).reshape(3, 2)
# 比如将两个特征 (X_1, X_2)，它的平方展开式便转换成5个特征(1, X_1, X_2, X_1^2, X_1X_2, X_2^2). 代码案例如下：
poly = PolynomialFeatures(2).fit_transform(x)
# array([[ 1.,  0.,  1.,  0.,  0.,  1.],
#        [ 1.,  2.,  3.,  4.,  6.,  9.],
#        [ 1.,  4.,  5., 16., 20., 25.]])
```

# 自定义特征转换函数


参考:
https://scikit-learn.org/stable/modules/preprocessing.html#preprocessing