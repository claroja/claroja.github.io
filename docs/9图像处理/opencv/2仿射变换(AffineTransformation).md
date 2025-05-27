# 仿射变换(AffineTransformation)

仿射变换（Affine Transformation）是两种简单变换的叠加:
- 线性变换(linear transformation), 除了平移变换都是线性变换, 特点是原点位置不变，多次线性变换的结果仍是线性变换
- 平移变换



仿射变换中集合中的一些性质保持不变：
- 凸性
- 共线性：若几个点变换前在一条线上，则仿射变换后仍然在一条线上
- 平行性：若两条线变换前平行，则变换后仍然平行
- 共线比例不变性：变换前一条线上两条线段的比例，在变换后比例不变




图像的几何变换包含很多变换，其中有一些基本变换，而仿射变换和透视变换就是对这些基本变换进行组合实现的。


## 基础变换
基本变换具体包括：平移（Translation）、旋转（Rotation）、缩放（scaling）、翻转（反射, Reflection）和错切（Shear）。

平移（translation）和旋转（rotation）顾名思义。放缩（scaling）可进一步分为uniform scaling和non-uniform scaling，前者每个坐标轴放缩系数相同（各向同性），后者不同；如果放缩系数为负，则会叠加上反射（reflection）可以看成是特殊的scaling；剪切变换（shear mapping）将所有点沿某一指定方向成比例地平移.


![](./仿射变换(AffineTransformation)/1.png)






## 原理
没有平移的仿射变换用如下变换矩阵描述：
$$
\left[ \begin{array}{l}{x'} \\ {y'}\end{array}\right]=\left[ \begin{array}{ll}{a} & {b} \\ {c} & {d}\end{array}\right] \left[ \begin{array}{l}{x} \\ {y}\end{array}\right]
$$

为了涵盖平移，引入齐次坐标，在原有2维坐标的基础上，增广1个维度，如下所示：

$$
\left[ \begin{array}{l}{x^{\prime}} \\ {y^{\prime}} \\ {1}\end{array}\right] 
=\left[ \begin{array}{lll}{a} & {b} & {c}\\ {d} & {e} & {f} \\ {0} & {0} & {1} \end{array}\right] \left[ \begin{array}{l}{x} \\ {y} \\ {1}\end{array}\right]
$$

用矩阵表示图像变换:



![](./仿射变换(AffineTransformation)/2.png)








## 参考
- [仿射变换（Affine Transformation）原理及应用](https://blog.csdn.net/u011681952/article/details/98942207)
- [仿射变换及其变换矩阵的理解](https://www.cnblogs.com/shine-lee/p/10950963.html)
- [Affine_transformation](https://wiki2.org/en/Affine_transformation)
- [](https://zhuanlan.zhihu.com/p/80852438)