# 层次聚类(hierarchical_clustering)

层次聚类(Hierarchical Clustering)，也叫做系统聚类。层次聚类通过生成一系列嵌套的簇而形成层次树，常常用树状图（dendrogram）来显示，该树状图能够记录簇的合并和分裂的次序。如下图所示:
![](./层次聚类(hierarchical%20clustering)/1.png)

生成层次聚类有两种基本方法：

- 凝聚的(Agglomerative):从单个点作为个体簇开始，每步合并两个最近的簇，直到所有的点合并成一个簇（或者直到得到K个簇为止）
- 分裂的(Divisive)：从一个包含所有点的簇开始，每步分裂一个簇，直到每个簇只包含一个点（或者直到得到K个簇为止）。

这里主要讲解凝聚层次聚类技术


## 聚类的步骤:
1. 使所有点各自作为一个簇, 计算出相似矩阵（可以是距离或相似度）
    ![](./层次聚类(hierarchical%20clustering)/2.png)
2. 将最小距离（相似度越高）的两个簇合并为一个簇
    ![](./层次聚类(hierarchical%20clustering)/3.png)

3. 然后更新相似矩阵（注：合并后只需更新，新的簇 与 其它簇 的相似度）

    ![](./层次聚类(hierarchical%20clustering)/4.png)

4. 重复以上步骤，直到只剩一个簇

## 合并距离计算

### 单链(MIN or Single Link)

    
![](./层次聚类(hierarchical%20clustering)/5.png)

d表示距离distance, $C_i,C_j$表示第$i$个簇和第$j$个簇, $p$表示$C_i$簇中的任一点, $q$表示$C_j$簇中的任一点

### 全链(MAX or Complete Link)

![](./层次聚类(hierarchical%20clustering)/6.png)

### 组平均(Group Average or Average Link)

![](./层次聚类(hierarchical%20clustering)/7.png)

### 质心(Centroid Distance)

使用质心之间的邻近度，来定义不同的簇之间的邻近度。

![](./层次聚类(hierarchical%20clustering)/8.png)

### Ward法

假定质心为簇代表，但使用合并两个簇时SSE(误差平方和)的增加量来定义不同的簇之间的邻近度。（使用误差的平方和作为目标函数，与K均值很相似）

原始记录, 有6个点(A,B,C,D,E), 坐标X轴, Y轴分别为(X,Y)

--|X|Y
--|--|--
A|6|5
B|7|6
C|2|4
D|4|2
E|2|1




如果AB被归为一类, 则组内离差的平方和为:
$$
SS = (6-\frac{6+7}{2})^2 + (7-\frac{6+7}{2})^2 + (5-\frac{5+6}{2})^2 + (6-\frac{5+6}{2})^2 = 1
$$

同理可计算出AC, AD, AE, BC, ..., DE被归为一类的组内离差平方和:

序号|1|2|3|4|组内SS
--|--|--|--|--|--
1|AB|C|D|E|1.00
2|AC|B|D|E|8.50
3|AD|B|C|E|6.50
4|AE|B|C|D|16.00
5|BC|A|D|E|14.50
6|BD|A|C|E|12.50
7|BE|A|C|D|25.00
8|CD|A|B|D|4.00
9|CE|A|B|D|4.50
10|DE|A|B|C|2.50

可见, AB被归为1类是最优的. 这与点的距离是一致的. 计算, 两两样本的欧氏距离的平方
|||||||
--|--|--|--|--|--
--|A|B|C|D|E
A|
B|2
C|17|29
D|13|25|8
E|32|50|9|5

AB的距离最短, 将AB作为一簇, 组内离差也最短




同理, 计算聚合成三类的组内离差平方和

序号|1|2|3|组内SS
--|--|--|--|--
1|ABC|D|E|16.00
2|ABD|C|E|13.33
3|ABE|C|D|28.00
4|AB|CD|E|5.00
5|AB|CE|D|5.50
6|AB|DE|C|3.50

可见, AB, DE, C组合最优

同理, 计算聚合成二类的组内离差平方和

序号|1|2|组内SS
--|--|--|--
1|ABC|DE|18.50
2|AB|CDE|8.33

可见, AB, CDE组合最优

同理, 计算聚合成一类的组内离差平方和

序号|1|组内SS
--|--|--
1|ABCDE|38.00


## 参考:
- [Basic Concepts and Algorithms -- Part 3 Hierarchical Clustering](https://blog.csdn.net/weixin_44594823/article/details/125195947)
- 《Introduction to Data Mining (Second Edition)》，2018，Tan, Pang-Ning；Steinbach, Michael；Karpatne, Anuj；Kumar, Vipin;
- 范明 范宏建 等译《数据挖掘导论（完整版）》，2011
- [机器学习之聚类](https://zhuanlan.zhihu.com/p/43237839)
- [几何直观 理解层次聚类(Hierarchical clustering)](https://zhuanlan.zhihu.com/p/534451955)
- [Hierarchical Clustering](https://cs-people.bu.edu/evimaria/cs565-16/lect6.pdf)
- [clustering_hierarchical](https://cse.buffalo.edu/~jing/cse601/fa12/materials/clustering_hierarchical.pdf)