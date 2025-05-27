# Markdown Preview Enhanced


## 生成侧边目录的html

1. 在文章顶部插入, 注意缩进是四个空格
    ```
    ---
    html:
        toc: true
    ---
    ```

2. 开启`Enable Script Execution`
    preferences(首选项) -> settings(设置) -> 打开Enable Script Execution


3. 在Markdown Preview Enhanced预览阶段中输出`html`
    export -> HTML -> HTML


## 设置html样式
[参考](https://www.cnblogs.com/zxyfrank/p/17040967.html)


## codeChunk


### 概览
用来渲染代码, 需要在设置中打开enableScriptExecution, 参考[codeChunk](https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/code-chunk)


### 语法
```lang {cmd=lang opt1=value1 opt2=value2 ...}

```

### 参数


- `cmd`: `cmd`将要被运行的命令, 如`node`, `javascript`, `python`, 建议提供.
- `output`: `html`将会添加输出结果为`html`。`markdown`将会添加输出结果为`markdown`。`png`将会添加输出结果到`base64`图片。`none`将会隐藏输出结果。
- `args`: 运行解释器时, 需要传入的参数, 如
    ```python {cmd=true args=["-v"]}
    print("Verbose will be printed first")
    ```
- `stdin`: 如果`stdin`被设置为`true`, 代码将会被传递到`stdin`而不是作为文件。
- `hide`: `hide`将会隐藏代码块但是会显示运行结果，默认为`false`
- `continue`: 如果设置 continue: true，那么这个 code chunk 将会继续运行上一个 code chunk 的内容。 如果设置continue: id，那么这个 code chunk 从拥有这个 id 的 code chunk 运行。
- `id`: Code chunk 的 id。这个选项可以配合 continue 选项使用。
- `class`: 设置代码的样式, 如`class="line-numbers"`
- `element`: 添加html标签
- `run_on_save`: 当 markdown 文件被保存时，自动运行 code chunk。默认 false
- `modify_source`: 插入 code chunk 的运行结果直接到 markdown 文件。默认 false。


### 最佳实践
🍐在markdown中显示echarts
```md

@import "echarts.min.js"

```javascript {cmd="javascript" element="<div id='haha' style='width: 600px;height:400px;'></div>"}
// 基于准备好的dom，初始化echarts实例
console.log(document.getElementById('haha'))
var myChart = echarts.init(document.getElementById('haha'));
// 绘制图表
myChart.setOption({
title: {
    text: 'ECharts 入门示例'
},
tooltip: {},
xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
},
yAxis: {},
series: [
    {
    name: '销量',
    type: 'bar',
    data: [5, 20, 36, 10, 10, 20]
    }
]
});
```



## 参考
- https://shd101wyy.github.io/markdown-preview-enhanced/#/
- https://blog.csdn.net/yqahx/article/details/119785262