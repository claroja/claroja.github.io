# catplot


## 最佳实践




## catplot基础


1. Figure-level方法
1. 类别统计图
2. 通过kind控制底层方法
    1. Categorical scatterplots: 分类散点图
        1. stripplot() (with kind="strip"), 在另外一个轴上加扰动, 方便查看
        2. swarmplot() (with kind="swarm"), 在另外一个轴上适应调整, 方便查看

    2. Categorical distribution plots: 箱线图
        1. boxplot() (with kind="box")
        1. violinplot() (with kind="violin")
        1. boxenplot() (with kind="boxen")
    3. Categorical estimate plots: 分类估计图
        1. pointplot() (with kind="point"), 点表示数量
        2. barplot() (with kind="bar"), 两变量, 第一个变量分组后求第二个变量的均值, 并绘制误差线
        3. countplot() (with kind="count"), 单变量分类计数

3. 布局使用FacetGrid


## [catplot](https://seaborn.pydata.org/generated/seaborn.catplot.html)