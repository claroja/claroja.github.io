# 样本统计量的性质



## 试验
试验可以在完全相同的条件下进行多次, 这叫***重复试验***. 1次模拟抽样就相当于1次试验. 反复进行模拟抽样就能增加试验次数.

## 样本分布
样本分布时样本的统计量所服从的概率分布. 例如, 进行1万次模拟抽样就能得到1万个样本. 我们可以计算这些样本的均值并得到1万个均值, 这1万个样本均值所服从的分布就是样本分布.

## 样本均值与总体均值

### 样本均值与总体均值
```python
import numpy as np
import pandas as pd
import scipy as sp
from scipy import stats
## 用于绘图的库
from matplotlib import pyplot as plt


## 总体服从均值为 4 标准差为 0.8 的正态分布, 包含无数个值
population = stats.norm(loc = 4, scale = 0.8)
## 存放均值的容器
sample_mean_array = np.zeros(10000)
## 抽取 10 个数据并计算均值, 此操作重复 10,000 次
np.random.seed(1)
for i in range(0, 10000):
    sample = population.rvs(size = 10)
    sample_mean_array[i] = sp.mean(sample)

## 样本均值的均值
sp.mean(sample_mean_array)  # 4.004 和总体的均值接近

## 样本均值的标准差
sp.std(sample_mean_array, ddof = 1)  # 0.2513 总体的标准差是0.8, 样本的计算的结果很小
```


### 样本容量越大, 样本均值越接近总体均值
```python
import numpy as np
import pandas as pd
import scipy as sp
from scipy import stats
from matplotlib import pyplot as plt


## 总体服从均值为 4 标准差为 0.8 的正态分布
population = stats.norm(loc = 4, scale = 0.8)

## 公差是 100 的样本容量, 范围是 10 到 100,010
size_array =  np.arange(
    start = 10, stop = 100010, step = 100)
size_array

## 存放样本均值的容器
sample_mean_array_size = np.zeros(len(size_array))

## 改变样本容量的同时计算样本均值
np.random.seed(1)
for i in range(0, len(size_array)):
    sample = population.rvs(size = size_array[i])
    sample_mean_array_size[i] = sp.mean(sample)

plt.plot(size_array, sample_mean_array_size, color = 'black')
plt.xlabel("sample size")
plt.ylabel("sample mean")
plt.show()
```


### 不同样本容量所得的样本均值的分布
使用小提琴图观察样本容量分别为10,20,30时样本均值的分布. 下面代码按照容量生成了`size_*`等3个数据帧. 每个数据帧的实验次数都是1万, 所以他们都有1万行. 把这些数据帧连接到一起就得到了`sim_result`这个3万行的数据帧.

```python
import numpy as np
import pandas as pd
import scipy as sp
from scipy import stats
from matplotlib import pyplot as plt


## 总体服从均值为 4 标准差为 0.8 的正态分布
population = stats.norm(loc = 4, scale = 0.8)

## 用于计算样本均值的函数
def calc_sample_mean(size, n_trial):
    sample_mean_array = np.zeros(n_trial)
    for i in range(0, n_trial):
        sample = population.rvs(size = size)
        sample_mean_array[i] = sp.mean(sample)
    return(sample_mean_array)

np.random.seed(1)
## 样本容量 10
size_10 = calc_sample_mean(size = 10, n_trial = 10000)
size_10_df = pd.DataFrame({
    "sample_mean":size_10,
    "size"       :np.tile("size 10", 10000)
})
## 样本容量 20
size_20 = calc_sample_mean(size = 20, n_trial = 10000)
size_20_df = pd.DataFrame({
    "sample_mean":size_20,
    "size"       :np.tile("size 20", 10000)
})
## 样本容量 30
size_30 = calc_sample_mean(size = 30, n_trial = 10000)
size_30_df = pd.DataFrame({
    "sample_mean":size_30,
    "size"       :np.tile("size 30", 10000)
})
fig,axe=plt.subplots(figsize=(16,9))

#绘制小提琴图
axe.violinplot([size_10,size_20,size_30],showmeans=True, showmedians=True)
axe.set_title("小提琴图")
plt.show()

```


### 样本均值的标准差小于总体标准差
重新观察一下:"样本容量越大, 样本均值越集中"
样本容量越大, 样本均值的标准差就越小. 增加样本容量就能得到更集中更可信的样本均值.



```python
import numpy as np
import pandas as pd
import scipy as sp
from scipy import stats
from matplotlib import pyplot as plt


## 总体服从均值为 4 标准差为 0.8 的正态分布
population = stats.norm(loc = 4, scale = 0.8)

## 用于计算样本均值的函数
def calc_sample_mean(size, n_trial):
    sample_mean_array = np.zeros(n_trial)
    for i in range(0, n_trial):
        sample = population.rvs(size = size)
        sample_mean_array[i] = sp.mean(sample)
    return(sample_mean_array)


## 公差为 2 的样本容量, 范围是 2 到 100
size_array =  np.arange(
    start = 2, stop = 102, step = 2)
size_array

## 存放样本均值的标准差的容器
sample_mean_std_array = np.zeros(len(size_array))

## 改变样本容量的同时计算样本均值的标准差
np.random.seed(1)
for i in range(0, len(size_array)):
    sample_mean = calc_sample_mean(size =size_array[i], 
                                   n_trial = 100)
    sample_mean_std_array[i] = sp.std(sample_mean, 
                                      ddof = 1)


plt.plot(size_array, sample_mean_std_array, 
         color = 'black')
plt.xlabel("sample size")
plt.ylabel("mean_std value")

```


### 均值的标准误差
样本均值的标准差的理论值可以通过数学公式计算出来, 这个值也叫标准误差(standard error, se), 公式如下:
$$
SE = \frac{\sigma}{\sqrt{N}}
$$
其中, $\sigma$是标准差, $N$是样本容量. 不难看出, 样本容量越大, 标准误差就越小. 下面使用程序模拟对比一下理论值(标准误差)和实际值(样本均值的标准差)

```python
## 样本均值的标准差的理论值：标准误差
standard_error = 0.8 / np.sqrt(size_array)
standard_error
plt.plot(size_array, sample_mean_std_array, 
         color = 'black')
plt.plot(size_array, standard_error, 
         color = 'black', linestyle = 'dotted')
plt.xlabel("sample size")
plt.ylabel("mean_std value")
```
可以看到样本平均值的标准误差与理论标准误差基本相等.




## 样本方差与总体方差
执行1万次"取出10个数据并求其方差"的试验, 得到样本方差的均值为0.575, 总体方差是0.8的平方0.64.可见这个数据过小的估计了总体方差.
```python
import numpy as np
import pandas as pd
import scipy as sp
from scipy import stats
from matplotlib import pyplot as plt
## 总体服从均值为 4 标准差为 0.8 的正态分布
population = stats.norm(loc = 4, scale = 0.8)
## 存放方差值的容器
sample_var_array = np.zeros(10000)
## 取出 10 个数据并求其方差, 执行 10,000 次
np.random.seed(1)
for i in range(0, 10000):
    sample = population.rvs(size = 10)
    sample_var_array[i] = sp.var(sample, ddof = 0)
## 样本方差的均值
sp.mean(sample_var_array)  # 0.5746
```


采用无偏方差能够消除上述的偏离, 设置`ddof=1`. 结果为0.639与0.64很接近, 所以无偏方差的均值可以看做总体方差.

```python
## 存放无偏方差的空间
unbias_var_array = np.zeros(10000)
## 进行 10,000 次计算10个数据的无偏方差操作
## 
np.random.seed(1)
for i in range(0, 10000):
    sample = population.rvs(size = 10)
    unbias_var_array[i] = sp.var(sample, ddof = 1)
## 无偏方差的均值
sp.mean(unbias_var_array)
```

### 样本容量越大, 其无偏方差越接近总体方差
样本容量越大, 无偏方差越接近总体方差.



```python
import numpy as np
import pandas as pd
import scipy as sp
from scipy import stats
from matplotlib import pyplot as plt
## 总体服从均值为 4 标准差为 0.8 的正态分布
population = stats.norm(loc = 4, scale = 0.8)
## 公差为 100 的样本容量, 范围是 10 到 100,010
size_array =  np.arange(
    start = 10, stop = 100100, step = 100)
size_array
## 存放无偏方差的容器
unbias_var_array_size = np.zeros(len(size_array))
## 在样本容量变化的同时反复计算样本的无偏方差
np.random.seed(1)
for i in range(0, len(size_array)):
    sample = population.rvs(size = size_array[i])
    unbias_var_array_size[i] = sp.var(sample, ddof = 1)
plt.plot(size_array, unbias_var_array_size, 
         color = 'black')
plt.xlabel("sample size")
plt.ylabel("unbias var")
```

## 无偏性
估计量的期望值相当于真正的参数的特性叫做无偏性

## 一致性
样本容量越大, 估计量越接近真正参数的特性称为一致性.

## 大数定律
样本容量越大, 样本均值越接近总体均值

## 中心极限定理
对任意总体分布, 样本容量越大, 随机变量的`和`的分布越接近正态分布. 例如, 投掷硬币的概率分布为0.5(正面和反面), 这显然不是正态分布. 但投掷1万次硬币得到正面的`次数`的分布却接近正态分布. 使用程序模拟如下:
```python
import numpy as np
import pandas as pd
import scipy as sp
from scipy import stats
from matplotlib import pyplot as plt
## 样本容量与试验次数
n_size  = 10000
n_trial = 50000
## 正面为 1, 背面为 0
coin = np.array([0,1])
## 出现正面的次数
count_coin = np.zeros(n_trial)
## 投 n_size 次硬币, 此实验进行 n_trial 次
np.random.seed(1)
for i in range(0, n_trial):
    count_coin[i] = sp.sum(
        np.random.choice(coin, size = n_size, replace = True))

fig = plt.figure(figsize=(6,6))
ax = fig.subplots()
n, bins, patches = ax.hist(count_coin,bins=100)
fig.show()
```
