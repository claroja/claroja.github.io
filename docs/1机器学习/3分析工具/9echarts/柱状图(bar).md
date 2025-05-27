# 柱状图(bar)


## 设置图形类型

1. 类型: `type = 'bar'`, 类型`string`


## 序列与legend
2. 名称: `name`, 类型`string`, 用于`legend`的图例筛选
4. 悬停在legend上时变色: `legendHoverLink = true`, 类型`boolean`


## 柱条样式设置

1. 柱条背景
    1. 每个柱条显示背景: `showBackground`, 类型`boolean`
    2. 每个柱条的背景样式: `backgroundStyle`

2. 柱条样式
    1. 取色策略: `colorBy = 'series'`, 可选`series`(每个系列相同颜色), `data`(每个数据项相同颜色)
    2. 每个柱条的样式:`itemStyle`, [参考官网](https://echarts.apache.org/zh/option.html#series-bar.itemStyle)
    3.  柱条的宽度，不设时自适应: `barWidth`
    4.  柱条的最大宽度: `barMaxWidth`
    5.  柱条的最小宽度: `barMinWidth`
    6.  柱条最小高度: `barMinHeight`
    7.  不同系列的柱间距离: `barGap`
    8.  同一系列的柱间距离: `barCategoryGap`

3. 柱条标签
    
    1. 每个柱条显示标签: `label`, [参考官网](https://echarts.apache.org/zh/option.html#series-bar.label)


## 堆叠柱状图

默认多个序列, 会横向依次展示, 使用`stack = 'total'`, 可以将相同的X轴坐标的不同系列堆叠展示

✨echarts的API文档中并没有详细说明`stack`的参数都有哪些

## 数据映射

17. 维度映射到X轴, Y轴或tooltips: `encode`.
19. 数据项: `data`. `dataset`优先级高


## 其他

16. 定义每个维度的信息: `dimensions`. 优先级高于`dataset.dimensions`和`dataset.source`第一行给出的维度信息
18. 行作为维度, 还是列作为维度: `seriesLayoutBy`, 可选`column`(列作为维度), `row`(行作为维度)
20. 该系列的: tooltip

## 参考
1. https://echarts.apache.org/zh/option.html