---
title: css_float
toc: true
date: 2021-01-20 22:03:54
---
​CSS 提供了三种传统布局方式:
- 标准流
    1. 块级元素会独占一行，从上向下顺序排列。常用元素：div、hr、p、h1~h6、ul、ol、dl、form、table
    2. 行内元素会按照顺序，从左到右顺序排列，碰到父元素边缘则自动换行。常用元素：span、a、i、em 等 
- 浮动
- 定位

浮动最典型的应用：可以让多个块级元素一行内排列显示。

语法：
```css
 选择器 { float: 属性值; }
```

性质:
1. 浮动元素会脱离标准流(脱标：浮动的盒子不再保留原先的位置)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>浮动特性1</title>
    <style>
        /* 设置了浮动（float）的元素会：
        1. 脱离标准普通流的控制（浮）移动到指定位置（动）。
        2. 浮动的盒子不在保留原先的位置 */
        .box1 {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }

        .box2 {
            width: 300px;
            height: 300px;
            background-color: rgb(0, 153, 255);
        }
    </style>
</head>

<body>
    <div class="box1">浮动的盒子</div>
    <div class="box2">标准流的盒子</div>
</body>

</html>
```
2. 浮动的元素会一行内显示并且元素顶部对齐
3. 浮动的元素是互相贴靠在一起的（不会有缝隙），如果父级宽度装不下这些浮动的盒子，多出的盒子会另起一行对齐。
4. 浮动的元素会具有行内块元素的特性
    - 浮动元素的大小根据内容来决定
    - 浮动的盒子中间是没有缝隙的


## 浮动元素经常和标准流父级搭配使用
为了约束浮动元素位置, 我们网页布局一般采取的策略是:
先用标准流父元素排列上下位置, 之后内部子元素采取浮动排列左右位置.  符合网页布局第一准侧

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>浮动元素搭配标准流父盒子1</title>
    <style>
        .box {
            width: 1200px;
            height: 460px;
            background-color: pink;
            margin: 0 auto;
        }

        .left {  
            float: left;
            width: 230px;
            height: 460px;
            background-color: purple;
        }

        .right {
            float: left;
            width: 970px;
            height: 460px;
            background-color: skyblue;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="left">左侧</div>
        <div class="right">右侧</div>
    </div>
</body>

</html>
```

## 清除浮动
由于父级盒子很多情况下，不方便给高度，但是子盒子浮动又不占有位置，最后父级盒子高度为 0 时，就会影响下面的标准流盒子。
注意：
- 如果父盒子本身有高度，则不需要清除浮动
- 清除浮动之后，父级就会根据浮动的子盒子自动检测高度。

语法:
```css
 选择器{clear:属性值;} 
```
我们实际工作中， 几乎只用 clear: both;

### 额外标签法
额外标签法也称为隔墙法，是 W3C 推荐的做法。在浮动元素末尾添加一个空的标签。注意：要求这个新的空标签必须是块级元素。
```html
<div style="clear:both"></div>，或者其他标签（如<br />等）。
```
优点： 通俗易懂，书写方便
缺点： 添加许多无意义的标签，结构化较差
例子:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        .box {
            width: 800px;
            border: 1px solid blue;
            margin: 0 auto;
        }

        .floatdiv {
            float: left;
            width: 300px;
            height: 200px;
            background-color: purple;
        }

        .clear {
            clear: both;
        }
    </style>
</head>

<body>
    <div class="box">
        <div class="floatdiv">浮动元素</div>
        <div class="clear"></div>
        <!-- 这个新增的盒子要求必须是块级元素不能是行内元素 -->
    </div>
</body>

</html>
```
### 父级添加after伪元素
:after 方式是额外标签法的升级版。给父元素添加：
```css
 .clearfix:after {  
   content: ""; 
   display: block; 
   height: 0; 
   clear: both; 
   visibility: hidden;  
 } 
 .clearfix {  /* IE6、7 专有 */ 
   *zoom: 1;
 }   
```
优点：没有增加标签，结构更简单
缺点：照顾低版本浏览器

### 父级添加双伪元素

```css
 .clearfix:before,.clearfix:after {
   content:"";
   display:table; 
 }
 .clearfix:after {
   clear:both;
 }
 .clearfix {
    *zoom:1;
 }   
```

优点：代码更简洁
缺点：照顾低版本浏览器

### 父级添加 overflow 属性
可以给父级添加 overflow 属性，将其属性值设置为 hidden、 auto 或 scroll 。
例如：
```css
overflow:hidden | auto | scroll;
```
优点：代码简洁
缺点：无法显示溢出的部分
