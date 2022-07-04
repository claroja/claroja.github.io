---
title: vue_emits
toc: true
date: 2021-10-25 22:03:54
---

1. 父定义了一个事件(`@parentEvent`), 指向了父的一个方法(`parentFunc`).
2. 子通过`emits("parentEvent", 666)`触发了父的`@parentEvent`事件, 进而调用了父的方法(`parentFunc`)

这样就可以实现，子组件中的变量通过emits，传递到父组件，从而改变父组件的变量



# script setup写法

```vue
// Parent.vue
<script setup>
import Child from "./Child.vue"
function parentFunc(value) {
    alert(`触发parentEvent事件，收到的参数是:${value}！`)
}
</script>
<template>
    <Child @parentEvent="parentFunc"></Child>
</template>

```


```vue
// Child.vue
<script setup>
let emits = defineEmits(["parentEvent"])
function childFunc() {
    emits("parentEvent", 666)
}
</script>
<template>
    <button @click="childFunc">我是Child组件，点我触发一下Parent组件的parentEvent事件</button>
</template>
```

# 通过props来传递
[参考文档](https://blog.csdn.net/qq449245884/article/details/106066381)
```vue
// Parent.vue
<script setup>
import Child from "./Child.vue"
function parentFunc(value) {
    alert(`触发parentEvent事件，收到的参数是:${value}！`)
}
</script>
<template>
    <Child :parentProp="parentFunc"></Child>
</template>

```

```vue
// Child.vue
<script setup>
let props = defineProps(["parentProp"])
</script>
<template>
    <button @click="props.parentProp(666)">我是Child组件，点我触发一下Parent组件的parentProp</button>
</template>

```

# props+bind
```vue
// Parent.vue
<script setup>
import Child from "./Child.vue"
let a = 10
let value = 1
function parentFunc(value) {
    alert(`触发parentEvent事件，收到的参数是:${value}！,parent中的参数a是${a}`)
}
</script>
<template>
    <Child :parentProp="parentFunc.bind(this, value)"></Child>
</template>

```


```vue
// Child.vue
<script setup>
let props = defineProps(["parentProp"])
</script>
<template>
    <button @click="props.parentProp()">我是Child组件，点我触发一下Parent组件的parentProp</button>
</template>
```


# 标准写法
App.vue
```vue
<template>
	<Demo @hello="showHelloMsg"></Demo>
</template>

<script>
	import Demo from './components/Demo'
	export default {
		name: 'App',
		components:{Demo},
		setup(){
			function showHelloMsg(value){
				alert(`触发hello事件，收到的参数是:${value}！`)
			}
			return {
				showHelloMsg
			}
		}
	}
</script>
```

Demo.vue

```vue
<template>
	<button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
	export default {
		name: 'Demo',
		emits:['hello'],
		setup(props, context){
			console.log('---setup---',context.emit) //触发自定义事件的。
			//方法
			function test(){
				context.emit('hello',666)
			}
			//返回一个对象（常用）
			return {
				test
			}
		}
	}
</script>
```

# 特性


## 继承性
子标签会继承父标签的某些样式，如文本颜色和字号。可以继承的属性包括:`text-*`，`font-*`，`line-*`等, 以及`color`.

下例中, `<p>`标签继承了`<div>`标签的css属性
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS继承性</title>
    <style>
        div {
            color: pink;
            font-size: 10px;
        }
    </style>
</head>
<body>
    <div>
        <p>龙生龙</p>
    </div>
</body>
</html>
```
## 层叠性
相同选择器给设置相同的样式，此时一个样式就会覆盖(层叠)另一个冲突的样式。遵循的原则是就近原则，哪个样式离结构近，就执行哪个样式
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS层叠性</title>
    <style>
       div {
           color: red;
       }
       div {
           color: pink;
       }
    </style>
</head>
<body>
    <div>最终显示的pink</div>
</body>
</html>
```
## 优先级
当同一个元素指定多个不同选择器，就会有优先级的产生, 根据选择器权重执行

选择器|权重
--|--
继承或*|0.0.0.0
元素选择器|0.0.0.1
类选择器|0.0.1.0
id选择器|0.1.0.0
行内样式`style=""`|1.0.0.0
`!import`|无穷大
1. 等级判断从左向右，如果某一位数值相同，则判断下一位数值。
2. 继承的权重是0， 如果该元素没有直接选中，不管父元素权重多高，子元素得到的权重都是 0。
3. 权重叠加：如果是复合选择器，则会有权重叠加，需要计算权重。
- div ul  li   ------>      0,0,0,3
- .nav ul li   ------>      0,0,1,2
- a:hover      -----—>   0,0,1,1
- .nav a       ------>      0,0,1,1


# 盒子模型
盒子模型: 把元素看作是一个矩形的盒子, 包括：**边框**、**外边距**、**内边距**、和 **实际内容**


## 边框(border)
边框有三部分组成: 边框宽度(粗细),边框样式,边框颜色.
1. border-width: 边框的宽度, 使用px作为单位
2. border-style:
	- none：没有边框即忽略所有边框的宽度（默认值）
	- solid：边框为单实线(最为常用的)
	- dashed：边框为虚线  
	- dotted：边框为点线
3. border-color: 边框的颜色

例子:
```css
	border: 1px solid red;  
```

也可以单独设置一个方向的边框, 比如上边框:
```css
	border-top: 1px solid red;  /* 只设定上边框， 其余同理 */   
```


### border-collapse

控制浏览器绘制表格边框的方式。
```css
 border-collapse:collapse; 
```
collapse 单词是合并的意思
border-collapse: collapse; 表示相邻边框合并在一起


### 边框与盒子的大小
边框会额外增加盒子的实际大小。
盒子的高度 = height + 2*border_width
盒子的宽度 = width + 2*border_width

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>边框会影响盒子的实际大小</title>
    <style>
        /* 这是一个200*200的盒子*/
        div {
            width: 180px;
            height: 180px;
            background-color: pink;
            border: 10px solid red;
        }
    </style>
</head>
<body>
    <div></div>
</body>
</html>
```


## 内边距(padding)
padding既是边框与内容之间的距离

语法:
1. 合起来写:
值的个数|表达的意思
--|--
1个值, padding: 5px|上下左右都是5px
2个值, padding: 5px 10px|上下是5px, 左右是10px
3个值, padding: 5px 10px 20px| 上是5px 左右是10px 下是20px
4个值, padding: 5px 10px 20px 30px| 是上下左右分别
2. 分开写:
属性|描述
--|--
padding-left|
padding-right|
padding-top|
padding-bottom|


### 内边距与盒子的大小
1. 当指定`width`和`height`时(无论是给具体像素值px, 还是百分比都包含在内),内边距会额外增加盒子的实际大小。
盒子的高度 = height + 2*padding
盒子的宽度 = width + 2*padding

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>内边距会影响盒子实际大小</title>
    <style>
        /* 下面是一个200*200的盒子 */
            div {
                width: 160px;
                height: 160px;
                background-color: pink;
                padding: 20px;
            }
         
        </style>
    </head>
    <body>
        <div>
            200*200的盒子
        </div>
       
</body>
</html>
```

2. 当为给元素指定`width`和`height`时, padding不会增加盒子的大小.

下例中, 由于没有指定`width`的值, 所以即使增加了padding, `<h1>`的宽度也不会改变, 和父元素`<body>`保持一致, 这是块级元素独享一行的特点, 不是继承.
但是, 但我们给`<h1>`增加了`width`属性后, padding属性就, 增加了`<h1>`的宽度
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>padding不会影响盒子大小的情况</title>
    <style>   
       h1 {
           /* width: 100%; */
           height: 200px;
           background-color: pink;
           padding: 30px;
       }
    </style>
</head>
<body>
   <h1></h1>
</body>
</html>
```

## 外边距(margin)
margin 属性用于设置外边距，即控制盒子和盒子之间的距离。

语法:
参考padding



### 外边距居中应用

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
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>块级盒子水平居中对齐</title>
    <style>
      .header {
          width: 900px;
          height: 200px;
          background-color: pink;
          margin: 100px auto;
      }
    </style>
</head>
<body>
    <div class="header"></div>
</body>
</html>
```

### 外边距合并
1. 相邻块元素垂直外边距的合
当上下相邻的两个块元素（兄弟关系）相遇时，如果上面的元素有下外边距 margin-bottom，下面的元素有上外边距 margin-top ，则他们之间的垂直间距不是 margin-bottom 与 margin-top 之和。取两个值中的较大者这种现象被称为相邻块元素垂直外边距的合并。

解决方案：尽量只给一个盒子添加 margin 值。

2. 对于两个嵌套关系（父子关系）的块元素，父元素有上外边距同时子元素也有上外边距，此时父元素会塌陷较大的外边距值。

解决方案：
- 可以为父元素定义上边框。
- 可以为父元素定义上内边距。
- 可以为父元素添加 overflow:hidden。

下例中, .father元素`margin-top: 50px`, 当给.son元素添加`margin-top: 60px;`, .son元素并没有, 向下移动60px, 而是.father向下移动了60px, 这个现象就是父元素塌陷.
打开注释的三个方法, 可以解决这个问题.

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
            margin-top: 60px;
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

## 清除内外边距
网页元素很多都带有默认的内外边距，而且不同浏览器默认的也不一致。因此我们在布局前，首先要清除下网页元素的内外边距。

```css
 * {
    padding:0;   /* 清除内边距 */
    margin:0;    /* 清除外边距 */
  }
```
注意：行内元素为了照顾兼容性，尽量只设置左右内外边距，不要设置上下内外边距。但是转换为块级和行内块元素就可以了


# 其他样式

## 圆角边框
border-radius 属性用于设置元素的外边框圆角。
语法：
```css
 border-radius:length;    
```
- 参数值可以为数值或百分比的形式
- 如果是正方形，想要设置为一个圆，把数值修改为高度或者宽度的一半即可，或者直接写为 50%
- 该属性是一个简写属性，可以跟四个值，分别代表左上角、右上角、右下角、左下角
- 分开写：border-top-left-radius、border-top-right-radius、border-bottom-right-radius 和border-bottom-left-radius

## 盒子阴影
使用 box-shadow 属性为盒子添加阴影。
语法：
```css
 box-shadow: h-shadow v-shadow blur spread color inset; 
```

值|描述
--|--
h-shadow|必须, 水平阴影的位置
v-shadow|必须, 垂直阴影的位置
blur|可选, 模糊距离
spread|可选, 阴影的尺寸
color|可选, 阴影的颜色
inset|可选, 将外部(outset)阴影改为内部阴影



# 浮动
​CSS 提供了三种传统布局方式(盒子如何进行排列顺序)：
- 标准流
	1. 块级元素会独占一行，从上向下顺序排列。常用元素：div、hr、p、h1~h6、ul、ol、dl、form、table
	2. 行内元素会按照顺序，从左到右顺序排列，碰到父元素边缘则自动换行。常用元素：span、a、i、em 等 
- 浮动
	​float 属性用于创建浮动框，将其移动到一边，直到左边缘或右边缘触及包含块或另一个浮动框的边缘。
- 定位


语法：
```css
 选择器 { float: 属性值; }
```
属性值可选:`right`,`left`,`none`



## 浮动的特性
1. 浮动元素会脱离标准流(脱标: 浮动的盒子不再保留原先的位置)
2. 浮动的元素会一行内显示并且元素顶部对齐
3. 浮动的元素是互相贴靠在一起的（不会有缝隙），如果父级宽度装不下这些浮动的盒子，多出的盒子会另起一行对齐。
4. 浮动的元素会具有`行内块元素`的特性
- 浮动元素的大小根据内容来决定
- 浮动的盒子中间是没有缝隙的

## 应用
1. 浮动主要是做块级元素的横向布局,(纵向布局还是使用标准流), 比如
浮动最典型的应用：可以让多个块级元素一行内排列显示。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>什么是浮动</title>
    <style>
        .left,
        .right {
            float: left;
            width: 200px;
            height: 200px;
            background-color: pink;
        }
        .right {
            float: right;
        }
    </style>
</head>
<body>
    <div class="left">左青龙</div>
    <div class="right">右白虎</div>
</body>
</html>
```

2. 浮动元素经常和标准流父级搭配使用
为了约束浮动元素位置, 我们网页布局一般采取的策略是:
先用标准流父元素排列上下位置, 之后内部子元素采取浮动排列左右位置.

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
清除浮动的本质是清除浮动元素造成的影响(浮动的子标签无法撑开父盒子的高度), 清除后父元素就会感知到浮动的子元素的高度, 父亲有了高度, 就不会影响下面的标准流了
清除浮动的策略是: 闭合浮动(只在父元素内部进行清理, 不影响父元素之外的其他元素)
语法：
```css
 选择器{clear:属性值;} 
```
属性值可选:`left`,`right`,`both`, 在实际开发中几乎只使用`both`


### 清除浮动的多种方式

#### 额外标签法
额外标签法也称为隔墙法，是 W3C 推荐的做法。
使用方式：
额外标签法会在浮动元素末尾添加一个空的标签。
```html
例如 <div style="clear:both"></div>，或者其他标签（如<br />等）。
```

优点： 通俗易懂，书写方便
缺点： 添加许多无意义的标签，结构化较差
注意： 要求这个新的空标签必须是块级元素。

总结:
1. 清除浮动本质是?
	清除浮动的本质是清除浮动元素脱离标准流造成的影响
2. 清除浮动策略是?
	合浮动.  只让浮动在父盒子内部影响,不影响父盒子外面的其他盒子.
3. 额外标签法?
	隔墙法, 就是在最后一个浮动的子元素后面添
4. 加一个额外标签, 添加 清除浮动样式.
实际工作可能会遇到,但是不常用

#### 父级添加after伪元素
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
代表网站： 百度、淘宝网、网易等

#### 4.4、父级添加双伪元素

给父元素添加
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
代表网站：小米、腾讯等

#### 父级添加 overflow 属性

可以给父级添加 overflow 属性，将其属性值设置为 hidden、 auto 或 scroll 。
例如：
```css
overflow:hidden | auto | scroll;
```
优点：代码简洁
缺点：无法显示溢出的部分
注意：是给父元素添加代码