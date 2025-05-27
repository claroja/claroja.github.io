
# figure-level和axes-level


1. axes-level: 在单个的subplot上绘图, 在调用时可以不存在subplot可以不存在
2. figure-level: 已经创建了matplotlib figure, 并包含多个subplot. 

    figure-level会结合多个axes-level方法, 比如
    1. relplot(), 结合了scatterplot()和lineplot()以及FaceGrid
    2. jointplot(), 集合了scatterplot()和histplot()以及JointGrid



1. relplot(relational)
    1. scatterplot
    2. lineplot
2. displot(distributions)
    1. histplot
    2. kdeplot
    3. ecdfplot
    4. rugplot
3. catplot(categorical)
    1. stripplot
    2. swarmplot
    3. boxplot
    4. violinplot
    5. pointplot
    6. barplot
