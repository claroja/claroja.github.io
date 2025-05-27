# font


## font-*属性
- font-size : 文字的大小, 用px像素作为单位, 谷歌浏览器默认的文字大小为16px, 比如`font-size: 16px;`
- font-style : 设置文字的风格, 比如`font-style: italic;`
- font-weight : 文字的粗细, 比如`font-weight: 700;`
- font-family : 文字的字体, 比如`font-family: 'Microsoft yahei';`


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS字体属性之复合属性</title>
    <style>
       /* 想要div文字变倾斜 加粗 字号设置为16像素 并且 是微软雅黑 */
       div {
           /* font-style: italic;
           font-weight: 700;
           font-size: 16px;
           font-family: 'Microsoft yahei'; */

           /* 上述四个属性也可以合并写为 font: font-style  font-weight  font-size  font-family;
               font: italic 700 16px 'Microsoft yahei'; */
       }
    </style>
</head>
<body>
   <div>字体属性</div>
</body>
</html>
```

## 其他字体属性
- color 定义文本的颜色, 常用的是十六进制表示, 比如`color: #ffff`
- text-align 文本水平对齐方式`text-align: center;`
- text-decoration 文本装饰, 比如下划线`text-decoration：underline;`
- text-indent 文本缩进, 比如空两个字符`text-indent：2em;`
- line-height 文本行高, 注意: `line-height=font-size+上间距+下间距`, 比如`line-height: 26px`, 如果默认`font-size: 16px;`, 那么上间距就是`5px`, 下间距也是`5px`

