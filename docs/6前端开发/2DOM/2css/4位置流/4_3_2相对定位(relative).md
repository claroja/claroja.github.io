# 相对定位(relative)

相对于它自己原来的位置移动


语法：

```css
选择器 { 
	position: relative; 
}
```

相对定位的特点：（务必记住）

- 它是相对于自己原来的位置来移动的（移动位置的时候参照点是自己原来的位置）。
- **原来**在标准流的**位置**继续占有，后面的盒子仍然以标准流的方式对待它。因此，**相对定位并没有脱标**。它最典型的应用是**相对定位经常用来作为绝对定位的父级**.


例子:

下例中, `.box1`相对原来的位置(浏览器左上角), 距上边距移动100px, 左边距移动100px.`.box2`还是按照标准流来排列, 将`.box1`看成还在原来的位置(没有受`.box1`相对定位的影响)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>相对定位</title>
    <style>
        .box1 {
            position: relative;
            top: 100px;
            left: 100px;
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        .box2 {
            width: 200px;
            height: 200px;
            background-color: deeppink;
        }
    </style>
</head>
<body>
    <div class="box1"></div>
    <div class="box2"></div>
    
</body>
</html>

```