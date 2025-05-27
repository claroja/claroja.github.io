# 固定定位(fixed)

元素**固定于浏览器可视区的位置**。主要使用场景: 可以在浏览器页面滚动时元素的位置不会改变。

语法：

```css
选择器 { 
position: fixed; 
}
```

特点:
1. 以浏览器的可视窗口为参照点移动元素。
    1. 跟父元素没有任何关系
    2. 不随滚动条滚动。
2. 固定定位**完全脱标**—— 完全不占位置；

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>固定定位</title>
    <style>
        .dj {
            position: fixed;
            top: 100px;
            right: 40px;
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div class="dj">aaa</div>
    <p>召唤下拉条</p>
    <!-- ....多复制`</p>`标签, 搞出下拉条 -->
</body>
</html>
```