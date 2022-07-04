flex 是 flexible Box 的缩写，意为"弹性布局"，任何一个容器都可以指定为 flex 布局。
当我们为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。

# 父属性
flex-direction：设置主轴的方向
justify-content：设置主轴上的子元素排列方式
flex-wrap：设置子元素是否换行
align-content：设置侧轴上的子元素的排列方式（多行）
align-items：设置侧轴上的子元素排列方式（单行）
flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

## flex-direction
属性|描述
--|--
row|
column|

在 flex 布局中，是分为主轴和侧轴两个方向，同样的叫法有 ： 行和列、x 轴和y 轴
flex-direction 属性决定主轴的方向（即项目的排列方向）
- 默认主轴方向就是 x 轴方向，水平向右
- 默认侧轴方向就是 y 轴方向，水平向下

## justify-content
设置主轴上的子元素排列方式
属性|描述
--|--
flex-start|默认值 从头部开始 如果主轴是x轴，则从左到右
flex-end|从尾部开始排列
center|在主轴居中对齐（如果主轴是x轴则 水平居中）
space-around|平分剩余空间
space-between|先两边贴边 再平分剩余空间（重要）
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
            /* 默认的主轴是 x 轴 row */
            flex-direction: row;
            /* justify-content: 是设置主轴上子元素的排列方式 */
            /* justify-content: flex-start; */
            /* justify-content: flex-end; */
            /* 让我们子元素居中对齐 */
            /* justify-content: center; */
            /* 平分剩余空间 */
            /* justify-content: space-around; */
            /* 先两边贴边， 在分配剩余的空间 */
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

## flex-wrap
设置子元素是否换行, flex布局中默认是不换行的。

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
            /* flex布局中，默认的子元素是不换行的， 如果装不开，会缩小子元素的宽度，放到父元素里面  */
            /* flex-wrap: nowrap; */
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

## align-items
是控制子项在侧轴（默认是y轴）上的排列方式, 注意 在子项为单项（单行）的时候使用

属性值|说明
--|--
flex-start| 默认值 从上到下
flex-end |从下到上
center |挤在一起居中（垂直居中）
stretch |拉伸

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
            /* 默认的主轴是 x 轴 row */
            flex-direction: column;
            justify-content: center;
            /* 我们需要一个侧轴居中 */
            /* 拉伸，但是子盒子不要给高度 */
            /* align-items: stretch; */
            align-items: center;
            /* align-content: center; */
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

##  align-content
设置子项在侧轴上的排列方式 并且只能用于子项出现 换行 的情况（多行, `flex-wrap: wrap`），在单行下是没有效果的。

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

## flex-flow
flex-flow 属性是 flex-direction 和 flex-wrap 属性的复合属性
`flex-flow:row wrap;`
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

# 子项常见属性
属性|描述
--|--
flex 子项目占的份数
align-self 控制子项自己在侧轴的排列方式
order属性定义子项的排列顺序（前后顺序）

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