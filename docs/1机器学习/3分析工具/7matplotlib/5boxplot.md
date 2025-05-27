# boxplot

箱形图（Box plot）一般用来展现数据的分布（如上下四分位值、中位数等），同时，也可以用箱线图来反映数据的异常情况。因图形如箱子，且在上下四分位数之外常有线条像胡须延伸出去而得名。

箱型图主要包含六个数据节点，将一组数据从大到小排列，分别计算出上边缘，上四分位数Q3，中位数，下四分位数Q1，下边缘，还有异常值。


下四分位数Q1：是数据集下半部分的中位数。
中位数media：数据集中的中间值
上四分位数Q3：数据集上半部分的中位数
四分位距（IQR, Inter-Quartile Range） ：上下四分位数之间的距离
边缘（晶须）边界的另一个流行选择是基于 1.5IQR 值。从上四分位数(Q3)上方，测量出IQR的1.5倍的距离为上边缘；从下四分位数（Q1）下方，测量出IQR的1.5倍距离为下边缘



在matplotlib中对于箱型图的绘制采用1.5倍IQR的方式进行绘制，如下图所示：
```python
     Q1-1.5IQR   Q1   median  Q3   Q3+1.5IQR
                  |-----:-----|
  o      |--------|     :     |--------|    o  o
                  |-----:-----|
异常值             <----------->            异常值
                       IQR
```

## 应用

```python
import matplotlib.pyplot as plt
import numpy as np

np.random.seed(19900108)  # 设置随机数生成器的种子,使每次生成的随机数相同方便后续的复现

"""
生成随机数randomData,以及异常数据outlier_low，outlier_high
rand()返回的随机数是大于等于 0 及小于 1 的均匀分布随机实数
ones()返回为1的随机数
"""
randomData= np.random.rand(50) * 100
outlier_high = np.random.rand(10) * 100 + 100
outlier_low = np.random.rand(10) * -100

"""
数据拼接，将上面产生的三组随机数进行拼接
"""
data = np.concatenate((randomData,outlier_high, outlier_low))

fig,ax = plt.subplots(figsize=(10,10))
#创建箱型图
ax.boxplot(data)
plt.show()


```


## API
`matplotlib.pyplot.boxplot(x, notch=None, sym=None, vert=None, whis=None, positions=None, widths=None, patch_artist=None, bootstrap=None, usermedians=None, conf_intervals=None, meanline=None, showmeans=None, showcaps=None, showbox=None, showfliers=None, boxprops=None, labels=None, flierprops=None, medianprops=None, meanprops=None, capprops=None, whiskerprops=None, manage_ticks=True, autorange=False, zorder=None, *, data=None)
`
### 参数
参数|描述
--|--
x|指定要绘制箱线图的数据；
labels|为箱线图添加标签，类似于图例的作用；
notch|是否是凹口的形式展现箱线图，默认非凹口；
sym|指定异常点的形状，默认为+号显示；
vert|是否需要将箱线图垂直摆放，默认垂直摆放；
whis|指定上下须与上下四分位的距离，默认为1.5倍的四分位差；
positions|指定箱线图的位置，默认为[0,1,2…]；
widths|指定箱线图的宽度，默认为0.5；
patch_artist|是否填充箱体的颜色；
meanline|是否用线的形式表示均值，默认用点来表示；
showmeans|是否显示均值，默认不显示；
showcaps|是否显示箱线图顶端和末端的两条线，默认显示；
showbox|是否显示箱线图的箱体，默认显示；
showfliers|是否显示异常值，默认显示；
boxprops|设置箱体的属性，如边框色，填充色等；
filerprops|设置异常值的属性，如异常点的形状、大小、填充色等；
medianprops|设置中位数的属性，如线的类型、粗细等；
meanprops|设置均值的属性，如点的大小、颜色等；
capprops|设置箱线图顶端和末端线条的属性，如颜色、粗细等；
whiskerprops|设置须的属性，如颜色、粗细、线的类型等；



### 返回
返回包含箱型图各个部分的字典, 它的key为:
1. `boxes`:
2. `medians`
3. `whiskers`
4. `caps`
5. `fliers`
6. `means`


## 多组数据

```python
import matplotlib.pyplot as plt
import numpy as np
import matplotlib

"""
font:设置中文
unicode_minus:显示负好
"""
matplotlib.rcParams['font.family'] = ['Heiti TC']
matplotlib.rcParams['axes.unicode_minus']=False     # 正常显示负号

"""
设置随机数生成器的种子,使每次生成的随机数相同方便后续的复现
"""
np.random.seed(19900108)

"""
生成三组随机数进行多组数据的展示
numpy.random.normal()函数来创建一组基于正态分布的随机数据，该函数有三个参数，分别是正态分布的平均值、标准差以及期望值的数量
"""
data_1 = np.random.normal(100, 10, 200)
data_2 = np.random.normal(70, 30, 200)
data_3 = np.random.normal(80, 20, 200)
data_to_plot=[data_1,data_2,data_3]

fig,ax = plt.subplots(figsize=(10,10))
#创建箱型图
ax.boxplot(data_to_plot)
plt.show()
```



## 小提琴图

```python
import matplotlib.pyplot as plt
import numpy as np
import matplotlib

"""
font:设置中文
unicode_minus:显示负号
"""
matplotlib.rcParams['font.family'] = ['Heiti TC']
matplotlib.rcParams['axes.unicode_minus']=False     # 正常显示负号
"""
设置随机数生成器的种子,使每次生成的随机数相同方便后续的复现
"""
np.random.seed(19900108)
"""
生成随机数data
numpy.random.normal()函数来创建一组基于正态分布的随机数据，该函数有三个参数，分别是正态分布的平均值、标准差以及期望值的数量
"""
data = np.random.normal(70, 40, 1000)
fig,axes=plt.subplots(1,2,figsize=(16,9))
#绘制箱型图
axes[0].boxplot(data)
axes[0].set_title("箱型图")
#绘制小提琴图
axes[1].violinplot(data,showmeans=True, showmedians=True)
axes[1].set_title("小提琴图")
plt.show()

```

参考：
https://blog.csdn.net/zhulove86/article/details/124764644
https://matplotlib.org/stable/api/_as_gen/matplotlib.axes.Axes.boxplot.html