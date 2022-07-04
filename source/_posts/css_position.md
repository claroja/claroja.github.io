---
title: css_position
toc: true
date: 2021-01-20 22:03:54
---
为什么使用定位, 标准流或浮动都无法实现:
1. 某个元素可以自由的在一个盒子内移动位置，并且压住其他盒子.
2. 当我们滚动窗口的时候，盒子是固定屏幕某个位置的。

总结: 
1. 浮动可以让多个块级盒子一行没有缝隙排列显示， 经常用于横向排列盒子。
2. 定位则是可以让盒子自由的在某个盒子内移动位置或者固定屏幕中某个位置，并且可以压住其他盒子。

定义: 
定位 = 定位模式 + 边偏移 
1. **定位模式**用于指定一个元素在文档中的定位方式。
在 CSS 中，通过 `position` 属性定义元素的**定位模式**，语法如下：
语法:
```css
选择器 { 
    position: 属性值; 
}
```
属性值有四个:
值|语义|
--|--
`static`   **静态**定位 |几乎不用, 标准流特性摆放位置, 
`relative` **相对**定位 |相对于原来的位置
`absolute` **绝对**定位 |相对于祖先元素
`fixed`    **固定**定位 |相对于浏览器窗口


2. **边偏移**则决定了该元素的最终位置。

**边偏移** 就是定位的盒子移动到最终位置。有 top、bottom、left 和 right  4 个属性。

| 边偏移属性    | 示例             | 描述                               |
| -------- | :------------- | -------------------------------- |
| `top`    | `top: 80px`    | **顶端**偏移量，定义元素相对于其父元素**上边线的距离**。 |
| `bottom` | `bottom: 80px` | **底部**偏移量，定义元素相对于其父元素**下边线的距离**。 |
| `left`   | `left: 80px`   | **左侧**偏移量，定义元素相对于其父元素**左边线的距离**。 |
| `right`  | `right: 80px`  | **右侧**偏移量，定义元素相对于其父元素**右边线的距离**  |



# 相对定位
相对于它自己原来的位置移动
语法：
```
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


# 绝对定位
**绝对定位**是是相对于它**祖先元素**来说的。
语法：
```css
选择器 { 
position: absolute; 
}
```
特点:
1. **完全脱标** 完全不占位置；  
2. 如果**父元素没有定位**, 则会跳过父元素,以**浏览器(document, 可以理解为body标签)**为准定位。下例中, 子元素`.son`是相对于浏览器定位的, 而不是相对于父元素`.father`定位, 因为父亲没有定位
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>绝对定位-无父亲或者父亲无定位</title>
    <style>
        .father {
            width: 500px;
            height: 500px;
            background-color: skyblue;
        }
        .son {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 200px;
            height: 200px;
            background-color: pink;
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

3. 如果`父元素要有定位`, 元素将依据`最近`的已经定位（绝对、固定或相对定位）的祖先进行定位。下面的例子中, `.son`元素是根据`.yeye`元素进行定位的, 因为`.yeye`是距离它最近的有定位的祖先元素. 如果我们放开`.father`的`position: relative;`注释, 则`.son`会相对于`.father`来定位. 也就是说遵循就近原则.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>绝对定位-父级有定位</title>
    <style>
        .yeye {
            position: relative;
            width: 800px;
            height: 800px;
            background-color: hotpink;
            padding: 50px;
        }
        .father {
            /* position: relative; */
            width: 500px;
            height: 500px;
            background-color: skyblue;
        }
        .son {
            position: absolute;
            left: 30px;
            bottom: 10px;
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div class="yeye">
        <div class="father">
            <div class="son"></div>
        </div>
    </div>
</body>
</html>
```


注意:
1. 子级绝对定位，不会占有位置，可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子。
2. 父盒子需要加定位限制子盒子在父盒子内显示。
3. 父盒子布局时，需要占有位置，因此父亲只能是相对定位。
这就是子绝父相的由来，所以**相对定位经常用来作为绝对定位的父级**。


# 固定定位
元素**固定于浏览器可视区的位置**。主要使用场景: 可以在浏览器页面滚动时元素的位置不会改变。

语法：
```css
选择器 { 
position: fixed; 
}
```
特点:
1. 以浏览器的可视窗口为参照点移动元素。
    - 跟父元素没有任何关系
    - 不随滚动条滚动。
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


# 定位(position)的拓展
## 绝对定位的盒子居中
**注意**：加了**绝对定位/固定定位的盒子**不能通过设置 `margin: auto` 设置**水平居中**。
但是可以通过以下计算方法实现水平和垂直居中，可以按照下图的方法：
1. `left: 50%;`：让**盒子的左侧**移动到**父级元素的水平中心位置**；
2. `margin-left: -100px;`：让盒子**向左**移动**自身宽度的一半**。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>绝对定位水平垂直居中</title>
    <style>
        .box {
            position: absolute;
            /* 1. left 走 50%  父容器宽度的一半 */
            left: 50%;
            /* 2. margin 负值 往左边走 自己盒子宽度的一半 */
            margin-left: -100px;
            top: 50%;
            margin-top: -100px;
            width: 200px;
            height: 200px;
            background-color: pink;
            /* margin: auto; */
        }
    </style>
</head>
<body>
    <div class="box"></div>
</body>
</html>
```

## 定位特殊特性
绝对定位和固定定位也和浮动类似。

1.行内元素添加绝对或者固定定位，可以直接设置高度和宽度。
2.块级元素添加绝对或者固定定位，如果不给宽度或者高度，默认大小是内容的大小。

前面我们讲过， display 是 显示模式， 可以改变显示模式有以下方式:
- 可以用inline-block  转换为行内块
- 可以用浮动 float 默认转换为行内块（类似，并不完全一样，因为浮动是脱标的）
- 绝对定位和固定定位也和浮动类似， 默认转换的特性 转换为行内块。
所以说， 一个行内的盒子，如果加了**浮动**、**固定定位**和**绝对定位**，不用转换，就可以给这个盒子直接设置宽度和高度等。

## 脱标的盒子不会触发外边距塌陷
浮动元素、**绝对定位(固定定位）**元素的都不会触发外边距合并的问题。 （我们以前是用padding border overflow解决的）
也就是说，我们给盒子改为了浮动或者定位，就不会有垂直**外边距合并的问题**了。

## 绝对定位（固定定位）会完全压住盒子

浮动元素不同，只会压住它下面标准流的盒子，但是不会压住下面标准流盒子里面的文字（图片）
但是绝对定位（固定定位） 会压住下面标准流所有的内容。
浮动之所以不会压住文字，因为浮动产生的目的最初是为了做文字环绕效果的。 文字会围绕浮动元素
