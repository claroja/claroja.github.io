# 抽样

随机抽样, 可以设置有放回或无放回, 以及每个样本的权重.


## 抽样方法
随机抽样(random sampling)是一种消除抽样偏差的方法, 但随机抽样的结果包含了有偏差的样本的可能性.
多次选择同一样本的抽样方法称为有放回抽样(sampling with replacement)
同一个样本值选择一次的抽样方法称为无放回抽样(sampling without replacement)

```python
np.random.choice([1, 2, 3], 3)  # 默认有放回抽样
np.random.choice([1, 2, 3], 3, replace=False)  # replace=False为无放回抽样
np.random.seed(0)  # 设置随机种子可以保证代码的可复现性
np.random.choice([1, 2, 3], 3)
```

## 应用
```python
aa_milne_arr = ['pooh', 'rabbit', 'piglet', 'Christopher']
np.random.choice(aa_milne_arr, 5, p=[0.5, 0.1, 0.1, 0.3])
```

## API
`random.choice(a, size=None, replace=True, p=None)`

### 参数
参数|描述
--|--
`a: 1-D array-like or int`|要随机收取的数组(如果为int, 则使用`np.arange(int)`生成数组)
`size: int or tuple of ints, optional`|随机抽样的结果的形状
`replace: boolean, optional`|默认为true, 既有放回的抽取
`p: 1-D array-like, optional`|随机抽样时, 每个样本被抽取的权重, 默认是均匀分布(uniform distribution), 每个样本权重一样

### 返回
返回抽样的结果, 可以是一个元素, 也可以是一个数组(`ndarray`)

参考:
https://numpy.org/doc/stable/reference/random/generated/numpy.random.choice.html