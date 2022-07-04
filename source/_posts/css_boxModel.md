---
title: css_boxModel
toc: true
date: 2021-01-20 22:03:54
---

盒子模型：把 HTML 页面中的布局元素看作是一个矩形的盒子，也就是一个盛装内容的容器。它包括：**边框**、**外边距**、**内边距**、和 **实际内容**


# 边框
border可以设置元素的边框。边框有三部分组成：边框宽度(粗细)/边框样式/边框颜色

## border属性
语法：
```css
 border : border-width || border-style || border-color;   
```

border-style 可以设置如下值：
    - none：没有边框即忽略所有边框的宽度（默认值）
    - solid：边框为单实线(最为常用的)
    - dashed：边框为虚线  
    - dotted：边框为点线

例子:
一般写法
```css
border: 1px solid red;  
```
分开写法
```css
border-top: 1px solid red;  /* 只设定上边框， 其余同理 */   
```

## border-collapse属性
border-collapse它控制相邻单元格的边框, 是否合并.
语法
```css
border-collapse:collapse; 
```
表示相邻边框合并在一起

# 内边距


## padding
padding 属性用于设置内边距，即边框与内容之间的距离。
语法:
一般写法:
值个数|含义
--|--
1个,`padding: 5px;`|上下左右
2个,`padding: 5px 10px;`|上下 和 左右
3个,`padding: 5px 10px 20px;`|上 左右 下
4个,`padding: 5px 10px 20px 30px;`|上 右 下 左
分开写法:
属性|描述
--|--
padding-left|
padding-right|
padding-top|
padding-bottom|

注意:
1. 当我们给盒子指定 padding 值之后，发生了 2 件事情：
    1. 内容和边框有了距离，添加了内边距。
    2. padding影响了盒子实际大小。
2. 内边距对盒子大小的影响：
    - 如果盒子已经有了宽度和高度，此时再指定内边框，会撑大盒子。
    - 如何盒子本身没有指定width/height属性, 则此时padding不会撑开盒子大小。


# 外边距

## margin属性
margin 属性用于设置外边距，即控制盒子和盒子之间的距离。
语法:
参考`padding`属性


## 外边距合并

使用 margin 定义块元素的垂直外边距时，可能会出现外边距的合并。
主要有两种情况:
1. 相邻块元素垂直外边距的合并
当上下相邻的两个块元素（兄弟关系）相遇时，如果上面的元素有下外边距 margin-bottom，下面的元素有上外边距 margin-top ，则他们之间的垂直间距不是 margin-bottom 与 margin-top 之和。取两个值中的较大者这种现象被称为相邻块元素垂直外边距的合并。
解决方案：
	尽量只给一个盒子添加 margin 值。

2. 嵌套块元素垂直外边距的塌陷
对于两个嵌套关系（父子关系）的块元素，父元素有上外边距同时子元素也有上外边距，此时父元素会塌陷较大的外边距值。
解决方案：
- 可以为父元素定义上边框。
- 可以为父元素定义上内边距。
- 可以为父元素添加 overflow:hidden。

下例中, 父亲元素的`margin-top`塌陷为子的`200px`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>外边距合并-嵌套块级元素垂直外边距塌陷</title>
    <style>
        .father {
            width: 400px;
            height: 400px;
            background-color: purple;
            margin-top: 50px;
            /* border: 1px solid transparent; */
            /* padding: 1px; */
            /* overflow: hidden; */
        }
        .son {
            width: 200px;
            height: 200px;
            background-color: pink;
            margin-top: 200px;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son"></div>
    </div>
</body>
</html>
```


## 块级元素水平居中
外边距可以让块级盒子水平居中的两个条件：
- 盒子必须指定了宽度（width）。
- 盒子左右的外边距都设置为 auto 。

常见的写法，以下三种都可以：
```css
margin-left: auto;   margin-right: auto;
margin: auto;
margin: 0 auto;
```

注意：以上方法是让块级元素水平居中，行内元素或者行内块元素水平居中给其父元素添加 text-align:center 即可。


## 清除内外边距
网页元素很多都带有默认的内外边距，而且不同浏览器默认的也不一致。因此我们在布局前，首先要清除下网页元素的内外边距。
```css
 * {
    padding:0;   /* 清除内边距 */
    margin:0;    /* 清除外边距 */
  }
```