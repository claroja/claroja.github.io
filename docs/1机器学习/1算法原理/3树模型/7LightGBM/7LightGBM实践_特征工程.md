
## 缺失值

将缺失值当成一个类别处理

所以:
1. scikitlearn决策树模型, 可以接收缺失值做输入, 按照以上方法进行处理
2. 但是处理方法过于简单, 建议在特征工程时进行缺失值的填充

参考[还有人不懂XGBoost的缺失值处理](https://zhuanlan.zhihu.com/p/382253128)


## 特征编码

1. 分类数据

    1. 需要将分类数据进行labelencode, 既将字符串, 转换为数字, 0, 1, 2
    2. 需要告诉模型哪些特征当成类别特征处理, 在调用fit方法时:
        1. 通过指定feature_name和categorical_feature来确定
        2. 在pandas进行数据处理时, 指定分类变量列的类型为category. 

        建议使用pandas处理, 因为: 可以和lable编码一起进行, 代码较为简洁

        ```python
        data_all['Sex'] = data_all['Sex'].map({'male':0,'female':1}).astype('category')
        ```
    
    1. 不要使用one-hot编码
    2. 树模型不区分分类变量和排序变量

1. 排序数据

    树模型不区分分类变量和排序变量

3. 数值数据

    不需要处理


## 归一化

    决策树不需要进行归一化




