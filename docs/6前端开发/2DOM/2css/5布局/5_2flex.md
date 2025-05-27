# flex

flex 是 flexible Box 的缩写，意为"弹性布局"，任何一个容器都可以指定为 flex 布局。
当我们为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。



# flex_容器

## 最佳实践

1. 设置主轴, flex-direction, 水平排列row, 垂直排列column
2. 设置主轴的对齐方式, justify-content
    1. 左(上)对齐, flex-start
    2. 右(下)对齐, flex-end
    3. 居中对齐, center
    4. 第一个项目靠主轴起点，最后一个项目靠主轴终点，中间的项目等间距分布, space-around
    5. 在每个弹性项目两侧均匀分配剩余空间，使得项目之间的间隔是项目到容器边缘间隔的两倍, space-between
3. 设置交叉轴的对齐方式
    1. align-content
    2. align-items





## 父属性
1. flex-direction：设置主轴的方向
2. justify-content：设置主轴上的子元素排列方式
3. flex-wrap：设置子元素是否换行
4. align-content：设置侧轴上的子元素的排列方式（多行）
5. align-items：设置侧轴上的子元素排列方式（单行）
6. flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap


## flex-direction
在flex布局中，是分为主轴和侧轴两个方向, flex-direction 属性决定主轴的方向（即项目的排列方向）

属性|描述
--|--
row（默认值）|主轴为水平方向，起点在左端。项目沿水平方向从左到右排列。
row-reverse|主轴为水平方向，起点在右端。项目沿水平方向从右到左排列。
column|主轴为垂直方向，起点在上沿。项目沿垂直方向从上到下排列。
column-reverse|主轴为垂直方向，起点在下沿。项目沿垂直方向从下到上排列。


## justify-content

调整弹性项目在主轴方向上的对齐方式。

属性|描述
--|--
flex-start|默认值, 将弹性项目沿主轴起点对齐。如果主轴是水平方向，项目会靠容器的左侧对齐；如果主轴是垂直方向，项目会靠容器的顶部对齐。
flex-end|将弹性项目沿主轴终点对齐。如果主轴是水平方向，项目会靠容器的右侧对齐；如果主轴是垂直方向，项目会靠容器的底部对齐。
center|将弹性项目在主轴方向上居中对齐。
space-around|在弹性项目之间均匀分配剩余空间，使得第一个项目靠主轴起点，最后一个项目靠主轴终点，中间的项目等间距分布。
space-between|在每个弹性项目两侧均匀分配剩余空间，使得项目之间的间隔是项目到容器边缘间隔的两倍。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 300px;
            background-color: pink;
            flex-direction: row;
            justify-content: space-between;
        }
        div span {
            width: 150px;
            height: 100px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
    </div>
</body>

</html>
```


##  align-content

调整这些行在交叉轴方向上的对齐方式。

属性值|说明
--|--
flex-start| 默认值在侧轴的头部开始排列
flex-end |在侧轴的尾部开始排列
center |在侧轴中间显示
space-around |子项在侧轴平分剩余空间
space-between |子项在侧轴先分布在两头，再平分剩余空间
stretch |设置子项元素高度平分父元素高度

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            /* 换行 */
            flex-wrap: wrap;
            /* 因为有了换行，此时我们侧轴上控制子元素的对齐方式我们用 align-content */
            /* align-content: flex-start; */
            /* align-content: center; */
            /* align-content: space-between; */
            align-content: space-around;
        }
        
        div span {
            width: 150px;
            height: 100px;
            background-color: purple;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
    </div>
</body>

</html>
```







## align-items
是控制子项在侧轴（默认是y轴）上的排列方式, 注意 在子项为单项（单行）的时候使用

属性值|说明
--|--
stretch（默认值）|交叉轴方向上没有明确的尺寸限制，则项目会被拉伸以填满整个交叉轴方向的容器高度。
flex-start|将弹性项目在交叉轴的起点对齐。如果交叉轴是垂直方向，项目会靠容器顶部对齐；如果交叉轴是水平方向，项目会靠容器左侧对齐。
flex-end |将弹性项目在交叉轴的终点对齐。如果交叉轴是垂直方向，项目会靠容器底部对齐；如果交叉轴是水平方向，项目会靠容器右侧对齐。
center |将弹性项目在交叉轴方向上居中对齐。


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <style>
        div {
            display: flex;
            width: 800px;
            height: 400px;
            background-color: pink;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }
        
        div span {
            width: 150px;
            height: 100px;
            background-color: purple;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
    </div>
</body>
</html>
```

## flex-wrap

如果子项超过了容器的限制, 是否换行, 默认不换行(压缩子项), flex布局中默认是不换行的。

属性|描述
--|--
nowrap| 默认值，不换行
wrap |换行

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        div {
            display: flex;
            width: 600px;
            height: 400px;
            background-color: pink;
            flex-wrap: wrap;
        }
        
        div span {
            width: 150px;
            height: 100px;
            background-color: purple;
            color: #fff;
            margin: 10px;
        }
    </style>
</head>
<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
    </div>
</body>
</html>
```





## flex-flow
flex-flow 属性是flex-direction和flex-wrap 属性的复合属性

属性|描述
--|--
flex-direction|设置主轴的方向
justify-content|设置主轴上的子元素排列方式
flex-wrap|设置子元素是否换行
align-content|设置侧轴上的子元素的排列方式（多行）
align-items|设置侧轴上的子元素排列方式（单行）
flex-flow|复合属性，相当于同时设置了 flex-direction 和 flex-wrap
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        div {
            display: flex;
            width: 600px;
            height: 300px;
            background-color: pink;
            /* flex-direction: column;
            flex-wrap: wrap; */
            /* 把设置主轴方向和是否换行（换列）简写 */
            flex-flow: column wrap;
        }
        
        div span {
            width: 150px;
            height: 100px;
            background-color: purple;
        }
    </style>
</head>

<body>
    <div>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
    </div>
</body>

</html>
```


## 子项常见属性
属性|描述
--|--
flex|子项目占的份数
align-self|控制子项自己在侧轴的排列方式
order|定义子项的排列顺序（前后顺序）

## flex
属性定义子项目分配剩余空间，用flex来表示占多少份数。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <style>
        section {
            display: flex;
            width: 60%;
            height: 150px;
            background-color: pink;
            margin: 0 auto;
        }
        
        section div:nth-child(1) {
            width: 100px;
            height: 150px;
            background-color: red;
        }
        
        section div:nth-child(2) {
            flex: 1;
            background-color: green;
        }
        
        section div:nth-child(3) {
            width: 100px;
            height: 150px;
            background-color: blue;
        }
    </style>
</head>

<body>
    <section>
        <div></div>
        <div></div>
        <div></div>
    </section>
</body>
</html>
```

## align-self 
 控制子项自己在侧轴上的排列方式, 可覆盖 align-items 属性。
默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。
`align-self: flex-end;`

## order
数值越小，排列越靠前，默认为0。

`order: <number>;`