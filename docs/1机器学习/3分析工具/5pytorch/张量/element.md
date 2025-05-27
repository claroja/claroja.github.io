# element




## 索引
### 一维
```python
data=torch.tensor([1,2,3,4])
data[0]  # 1 单个索引, 传入整型
data[[1,3]]  # array([2, 4]), 多个索引传入列表
data[[True,False,True,False]]  # array([1, 3]), 多个索引, 传入等长的Boolean数组
data[0:2]  # array([1,2]) 切片索引, 使用":"号, 注意是左闭右开的
data[-2:]  # 从倒数第二个数开始切片
```

### 二维
```python
data = torch.tensor([[1,2,3],[4,5,6],[7,8,9]])

data[1,1]  # 5, 索引单值, 第一个是第一维下标, 第二个是第二维下标. 等价于data[1][1]
data[[1,2], 1] # array([5, 8]),  索引多值, 取第一行和第二行, 取第一列
data[[True,False,True],[False,False,True]]  # array([3, 9])
data[0:2,1] # array([2, 5]),  索引多行单列, ":"用法参考一维
data[:,1]  # array([2, 5, 8]), 取所有行, 和第一列
data[1,:]  # array([4, 5, 6]), 取第一行, 和所有列
```

### 步长索引
```python
data=torch.tensor([1,2,3,4])
data[::-1]  # array([4, 3, 2, 1])
data[2:0:-1]  # array([3, 2]), 此时第一位的1, 是从反转后的数组array([4, 3, 2, 1]), 右边边开始数, 仍然是闭区间. 第二维是从右边开始数, 仍然是开区间
```


## 排序