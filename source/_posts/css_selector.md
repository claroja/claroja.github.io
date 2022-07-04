---
title: css_selector
toc: true
date: 2021-01-20 22:03:54
---
# 基础选择器
- 选择器: 选择对应的标签, 总共有4类选择器
    1. 标签选择器, 如`p`, `h`
    2. 类选择器, 以`.`开头, 后面跟标签的`class`的值, 比如`<p class=new>`, 选择器就应该写`.new`
    3. id选择器, 以`#`开头, 后面跟标签的`id`的值, 比如`<p id=old>`, 选择器就医那个该写`#new`
    4. 通配符选择器, `*`, 表示选择所有的标签
- css样式的主题部分, 是字典(python, js)的形式, 区别在于, 不同item之间使用的是`;`隔开, 而不是`,`


## 标签选择器
css通过标签名称, 和标签对应生. 下例中, css分别通过`p`和`div`选择器对应了body中的`<p>`和`<div>`标签.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>标签选择器</title>
    <style>
    p {
        color: green;
    }
    div {
        color: pink;
    }
    </style>
</head>
<body>
    <p>男生</p>
    <div>女生</div>
</body>
</html>
```

## 类选择器
css 通过`class`属性, 选择一组标签.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基础选择器之类选择器</title>
    <style>
      .red {
          color: red;
      }
      .star {
        color: green;
      }
    </style>
</head>
<body>
    <ul>
        <li>没有类</li>
        <li class="red">red 类</li>
        <li class="star">star 类</li>
        <li class="star">star </li>
    </ul>
</body>
</html>
```

一个标签可以有多个类名
下例中, 三个`div`标签都有`box`类, 来控制大小和字体, 又各自有, 不同的颜色类, 来控制不同颜色
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>利用类选择器画三个盒子</title>
    <style>
        .box {
            width: 150px;
            height: 100px;
            font-size: 30px;
        }
        .red {
            background-color: red;
        }
        .green {
            background-color: green;
        }
    </style>
</head>
<body>
    <div class="box red">红色</div>
    <div class="box green">绿色</div>
    <div class="box red">红色</div>
</body>
</html>
```


## id选择器
使用`id`属性来选择标签, `id`属性在页面里全局唯一.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基础选择器之id选择器</title>
    <style>
      #pink {
          color: pink;
      }
    
    </style>
</head>
<body>
    <div id="pink">迈克尔</div>
</body>
</html>
```

## 通配符选择器
把所有的标签都选中
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>基础选择器之通配符选择器</title>
    <style>
     * {
         color: red;
     }
    </style>
</head>
<body>
    <div>我的</div>
    <span>我的</span>
    <ul>
        <li>还是我的</li>
    </ul>
</body>
</html>
```


# 复合选择器
## 后代选择器
选择父元素里面子孙元素, 表示选择父元素里的所有的子元素.
下例中: 
1. 是取所有子孙元素: `a`标签是`ol`标签的孙子元素, 使用`ol a`选择器可以取到.
2. 如果平级有多个, 则全部都选中
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>复合选择器之后代选择器</title>
    <style>
        ol a {
            color: red;
        }
        .nav li a {
            color: yellow;
        }
    </style>
</head>
<body>
    <ol>
        <li>我是ul 的孩子</li>
        <li><a href="#">ol li a</a></li>
    </ol>
    <ul class="nav">
        <li>我是ul的孩子</li>
        <li><a href="#">不.nav li a</a></li>
        <li><a href="#">不.nav li a</a></li>
    </ul>
</body>
</html>
```


## 子元素选择器
选择子元素, 包含子后面的后代元素.
下例中:
1. 子元素被选择了, 但是孙元素没有
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>复合选择器之子元素选择器</title>
    <style>
        .nav>a {
            color: red;
        }
    </style>
</head>

<body>
    <div class="nav">
        <a href="#">我是儿子</a>
        <p>
            <a href="#">我是孙子</a>
        </p>
    </div>
</body>
</html>
```

## 并集选择器
用`,`号隔开不同的选择器
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>复合选择器之并集选择器</title>
    <style>
        div,
        p,
        .pig li {
            color: pink;
        }
        /* 并集选择器一般竖着写 */
        /* 注意: 最后一个选择器, 不需要加逗号, 因为是子孙选择器 */
    </style>
</head>

<body>
    <div>div</div>
    <p>p</p>
    <ul class="pig">
        <li>li</li>
        <li>li</li>
        <li>li</li>
    </ul>
</body>
</html>
```

# 链接伪类选择器
- a:link	没有点击过的(访问过的)链接
- a:visited	点击过的(访问过的)链接
- a:hover	鼠标经过的那个链接
- a:active	鼠标正在按下还没有弹起鼠标的那个链接

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>复合选择器之链接伪类选择器</title>
    <style>
        /* 1.未访问的链接 a:link  把没有点击过的(访问过的)链接选出来 */
        a:link {
            color: #333;
            text-decoration: none;
        }
        /*2. a:visited 选择点击过的(访问过的)链接 */
        a:visited {
            color: orange;
        }
        /*3. a:hover 选择鼠标经过的那个链接 */
        a:hover {
            color: skyblue;
        }
        /* 4. a:active 选择的是我们鼠标正在按下还没有弹起鼠标的那个链接 */
        a:active {
            color: green;
        }
    </style>
</head>

<body>
    <a href="http://www.baidu.com">未知的网站</a>
</body>

</html>
```

# 焦点选择器

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>focus伪类选择器</title>
    <style>
        /* // 把获得光标的input表单元素选取出来 */
        #first:focus {
            background-color: pink;
            color: red;
        }
    </style>
</head>
<body>
    <input id = "first" type="text">
    <input id = "second" type="text">
</body>
</html>
```

# css3 属性选择器

```css
 /* 只选择 type =text 文本框的input 选取出来 */
input[type=text] {
    color: pink;
}
/* 选择首先是div 然后 具有class属性 并且属性值 必须是 icon开头的这些元素 */
div[class^=icon] {
    color: red;
}
/* 选择首先是section 然后 具有class属性 并且属性值 必须是 data结尾的这些元素 */
section[class$=data] {
    color: blue;
}
```

# 结构伪类选择器

first-child:匹配父元素的第一个子元素E
last-child:则是选择到了最后一个li标签
```html
 <style>
    ul li:first-child{
      background-color: red;
    }
  </style>

  <ul>
    <li>列表项一</li>
    <li>列表项二</li>
    <li>列表项三</li>
    <li>列表项四</li>
  </ul>
```

nth-child(n)匹配到父元素的第n个元素
    - 匹配到父元素的第2个子元素  
    `ul li:nth-child(2){}`
    - 匹配到父元素的序号为奇数的子元素
    `ul li:nth-child(odd){}`    **odd** 是关键字  奇数的意思（3个字母 ）
    - 匹配到父元素的序号为偶数的子元素
    `ul li:nth-child(even){}`   **even**（4个字母 ）
    - **匹配到父元素的前3个子元素**
    `ul li:nth-child(-n+3){}`    
    选择器中的  **n** 是怎么变化的呢？
    因为 n是从 0 ，1，2，3.. 一直递增
    所以 -n+3 就变成了   
    - n=0 时   -0+3=3
    - n=1时    -1+3=2
    - n=2时    -2+3=1
    - n=3时    -3+3=0 
    - ...

- `E:nth-of-type(n)` 匹配同类型中的第n个同级兄弟元素E，也就是说，对父元素里面指定子元素进行排序选择。 先去匹配E ，然后再根据E 找第n个孩子
- `E:nth-child(n)` 匹配父元素的第n个子元素E，也就是说，nth-child 对父元素里面所有孩子排序选择（序号是固定的）  先找到第n个孩子，然后看看是否和E匹配

```html
<style>
    ul li:nth-child(2){
      /* 字体变成红色 */
        color: red;
    }

    ul li:nth-of-type(2){
      /* 背景变成绿色 */
      background-color: green;
    }
  </style>


  <ul>
    <li>列表项一</li>
    <p>乱来的p标签</p>
    <li>列表项二</li>
    <li>列表项三</li>
    <li>列表项四</li>
  </ul>
```


# 伪元素选择器
伪元素选择器可以帮助我们利用CSS创建新标签元素，而不需要HTML标签，从而简化HTML结构

```html
<style>
    div {
        width: 200px;
        height: 200px;
        background-color: pink;
    }
    /* div::before 权重是2 */
    div::before {
        /* 这个content是必须要写的 */
        content: '我';
    }
    div::after {
        content: '小猪佩奇';
    }
</style>
<body>
    <div>
        是
    </div>
</body>
```
注意：
- before 和 after 创建一个元素，但是属于行内元素
- 新创建的这个元素在文档树中是找不到的，所以我们称为伪元素
- 语法：  element::before {}   
- before 和 after 必须有 content 属性 
- before 在父元素内容的前面创建元素，after 在父元素内容的后面插入元素伪元素选择器和标签选择器一样，权重为 1

## 应用场景一
**步骤：**

- 结构中定义div盒子
- 在style中先申明字体  @font-face
- 在style中定义after伪元素 div::after{...}
- 在after伪元素中 设置content属性，属性的值就是字体编码
- 在after伪元素中 设置font-family的属性
- 利用定位的方式，让伪元素定位到相应的位置；记住定位口诀：子绝父相

```html
<head>
    ...
    <style>
        @font-face {
            font-family: 'icomoon';
            src: url('fonts/icomoon.eot?1lv3na');
            src: url('fonts/icomoon.eot?1lv3na#iefix') format('embedded-opentype'),
                url('fonts/icomoon.ttf?1lv3na') format('truetype'),
                url('fonts/icomoon.woff?1lv3na') format('woff'),
                url('fonts/icomoon.svg?1lv3na#icomoon') format('svg');
            font-weight: normal;
            font-style: normal;
            font-display: block;
        }
        div {
            position: relative;
            width: 200px;
            height: 35px;
            border: 1px solid red;
        }

        div::after {
            position: absolute;
            top: 10px;
            right: 10px;
            font-family: 'icomoon';
            /* content: ''; */
            content: '\e91e';
            color: red;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div></div>
</body>
```


## 应用场景二:

回忆一下清除浮动的方式：
- 额外标签法也称为隔墙法，是 W3C 推荐的做法。
- 父级添加 overflow 属性
- 父级添加after伪元素
- 父级添加双伪元素