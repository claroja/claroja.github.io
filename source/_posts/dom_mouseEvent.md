---
title: dom_mouseEvent
toc: true
date: 2021-01-20 22:03:54
---
# 常见的鼠标事件:
鼠标事件	|触发条件
--|--
onclick	|鼠标点击左键触发
onmouseover	|鼠标经过触发, 子盒子也会触发
mouseenter|鼠标经过触发, 子盒子不会触发
onmouseout	|鼠标离开触发
onfocus	|获得鼠标焦点触发
onblur	|失去鼠标焦点触发
onmousemove	|鼠标移动触发
onmouseup	|鼠标弹起触发
onmousedown	|鼠标按下触发
contextmenu| 禁止鼠标右键菜单
selectstart| 禁止鼠标选中

应用: 禁止鼠标右键
```html
<body>
    我是一段不愿意分享的文字
    <script>
        // 1. contextmenu 我们可以禁用右键菜单
        document.addEventListener('contextmenu', function(e) {
                e.preventDefault();
            })
        // 2. 禁止选中文字 selectstart
        document.addEventListener('selectstart', function(e) {
            e.preventDefault();

        })
    </script>
</body>
```

mouseover和mouseenter
两者之间的差别是mouseover 鼠标经过自身盒子会触发，经过子盒子还会触发。 
mouseenter 只会经过自身盒子触发之所以这样，就是因为mouseenter不会冒泡

```html

<head>
    <title>Document</title>
    <style>
        .father {
            width: 300px;
            height: 300px;
            background-color: pink;
            margin: 100px auto;
        }
        
        .son {
            width: 200px;
            height: 200px;
            background-color: purple;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <script>
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        father.addEventListener('mouseenter', function() {
            console.log(11);
        })
    </script>
</body>
```




# 鼠标事件对象
鼠标事件对象|说明
--|--
e.pageX**（重点）**	|返回鼠标相对于文档页面的X坐标IE9+支持
e.pageY**（重点）**	|返回鼠标相对于文档页面的Y坐标IE9+支持
e.clientX|返回鼠标相对于浏览器窗口可视区的X坐标
e.clientY|返回鼠标相对于浏览器窗口可视区的Y坐标
e.screenX|返回鼠标相对于电脑屏幕的X坐标
e.screenY|返回鼠标相对于电脑屏幕的Y坐标

```html
<body>
    <script>
        // 鼠标事件对象 MouseEvent
        document.addEventListener('click', function(e) {
            // 1. client 鼠标在可视区的x和y坐标
            console.log(e.clientX);
            console.log(e.clientY);
            console.log('---------------------');
            // 2. page 鼠标在页面文档的x和y坐标
            console.log(e.pageX);
            console.log(e.pageY);
            console.log('---------------------');
            // 3. screen 鼠标在电脑屏幕的x和y坐标
            console.log(e.screenX);
            console.log(e.screenY);
        })
    </script>
</body>
```
应用: 元素随着鼠标移动 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        div {
            position: absolute;
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
        var pic = document.querySelector('div');
        document.addEventListener('mousemove', function(e) {
            // 1. mousemove只要我们鼠标移动1px 就会触发这个事件
            // 2.核心原理： 每次鼠标移动，我们都会获得最新的鼠标坐标， 把这个x和y坐标做为图片的top和left 值就可以移动图片
            var x = e.pageX;
            var y = e.pageY;
            console.log('x坐标是' + x, 'y坐标是' + y);
            //3 . 千万不要忘记给left 和top 添加px 单位
            pic.style.left = x - 50 + 'px';
            pic.style.top = y - 40 + 'px';
        });
    </script>
</body>
</html>
```

