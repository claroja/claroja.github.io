# background



背景属性可以设置背景颜色、背景图片、背景平铺、背景图片位置、背景图像固定等。
- background-color: 元素的背景颜色, 默认是`transparent`(透明), 例子`background-color: transparent;`
- background-image: 元素的背景图片, 例子`background-image: url(images/logo.png);`(url函数中不能添加引号)
- background-repeat: 显示的方式, 默认是`no-repeat`,例子`background-repeat: repeat-x;`沿x轴平铺
- background-position: 图片在背景中的位置:
1. 参数是方位名词, 如`background-position: center top;`
    如果指定的两个值都是方位名词，则两个值前后顺序无关，比如 left  top 和 top  left 效果一致
    如果只指定了一个方位名词，另一个值省略，则第二个值默认居中对齐
2. 参数是精确单位, 如`background-position: 20px 50px;`
    如果参数值是精确坐标，那么第一个肯定是 x 坐标，第二个一定是 y 坐标
    如果只指定一个数值，那该数值一定是 x 坐标，另一个默认垂直居中
- background-attachment: 固定背景图片, 不随着滚动轴, 滚动


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>超大背景图片</title>
    <style>
        body {
            background-image: url(images/bg.jpg);
            background-repeat: no-repeat;
            background-position: center top;
            background-attachment: fixed;
            color: #fff;
            font-size: 20px;
        }
    </style>
</head>
<body>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>测试</p>
    <p>这里多复制p标签, 将scrollroll搞出来</p>
</body>

</html>
```