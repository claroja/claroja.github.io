# 映射编码(encode)



```js
option = {
  dataset:{  //原始数据
    source: {
      '汉字日期': ['一', '二', '三', '四', '五', '六', '日'],
      '数字日期': ['1', '2', '3', '4', '5', '6', '0'],
      '苹果': [100, 100, 100, 100, 100, 100, 100, ],
      '香蕉': [50, 100, 150, 200, 250, 300, 350, ]
    }
  },
  xAxis: {  //显示X轴
    type: 'category',
  },
  yAxis: {  //显示Y轴
  },
  series: [  //映射数据, 可以有多个序列, 每个序列可指定dataset中的数据
    {  //第一个序列
      type: 'bar',  // 图形的类型
      encode: {  // 坐标轴的映射
        x: '数字日期',  //映射到X轴的数据, 可以不填, 默认使用dataset.source中第一行的数据
        y: '香蕉'  //映射到Y轴的数据
      }
    },
  ]
};
```



## 参考
1. https://echarts.apache.org/handbook/zh/concepts/dataset