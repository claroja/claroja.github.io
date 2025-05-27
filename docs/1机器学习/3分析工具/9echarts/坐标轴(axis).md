# 坐标轴(axis)




1. 是否显示X轴: `xAxis.show = true`, 参数可选`true`和`false`
2. X轴的位置: `xAxis.position`, 参数可选`top`和`bottom`
3. X轴的偏移位置: `xAxis.offset`, 参数类型`number`, 正值表示上移, 负值表示下移


## X轴的名称设置


5. X轴的名称: `xAxis.name`, 参数类型`string`
6. X轴名称的位置: `xAxis.nameLocation = 'end'`, 参数可选, `start`, `middle`, `end`
7. X轴名称的样式: `xAxis.nameTextStyle`, [具体参考官网](https://echarts.apache.org/zh/option.html#xAxis.nameTextStyle)
8. X轴名称与坐标线的距离: `xAxis.nameGap`, 参数类型`number`
9.  X轴名称的旋转角度: `xAxis.nameRotate`, 参数类型`number`

## X轴刻度设置

4. X轴刻度的类型: `xAxis.type`, 参数可选:
    1. 连续数据, `value` 
    2. 离散数据, `category`
    3. 时间数据, `time`
    4. 对数数据, `log`
11. X轴最小值: `xAxis.min`, 数值类型, 在分类数据中, 会按从左到右按序号排列
12. X轴最大值: `xAxis.max`, 数值类型, 在分类数据中, 会按从左到右按序号排列
13. X轴对数底数: `xAxis.logBase = 10`, 参数类型`number`, 仅在`type: 'log'`时有效.

## X轴刻度线设置

15. X轴刻度设置: `xAxis.axisTick`, [具体参考官网](https://echarts.apache.org/zh/option.html#xAxis.axisTick)
16. X轴刻度标签设置: `xAxis.axisLabel`, [具体参考官网](https://echarts.apache.org/zh/option.html#xAxis.axisLabel)


## X轴的数据设置
18. X轴类目: `xAxis.data`, 仅在`type: 'category'`时有效. 默认使用`dataset`第一个维度作为X轴的值, [具体参考官网](https://echarts.apache.org/zh/option.html#xAxis.data)
10. X轴数据反向: `xAxis.inverse`, 参数类型`boolean`



## 其他
17. X轴背景分隔线: `xAxis.splitLine`, [具体参考官网](https://echarts.apache.org/zh/option.html#xAxis.splitLine)
14. X轴轴线设置: `xAxis.axisLine`, [具体参考官网](https://echarts.apache.org/zh/option.html#xAxis.axisLine)





## 参考
1. https://echarts.apache.org/zh/option.html#xAxis