---
title: dom_offset
toc: true
date: 2021-01-20 22:03:54
---
offset 翻译过来就是偏移量， 我们使用 offset 系列相关属性可以动态的得到该元素的位置（偏移）、大小等。
1. 获得元素距离带有定位父元素的位置
2. 获得元素自身的大小（宽度高度）
注意： 返回的数值都不带单位


# offset系列属性
offset系列属性|作用
--|--
element.offsetParent|返回作为该元素带有定位的父级元素如果父级都没有定位则返回body
element.offsetTop|返回元素相对带有定位父元素上方的偏移
element.offsetLeft|返回元素相对带有定位父元素左边框的偏移
element.offsetWidth|返回自身包括padding边框、内容区的宽度, 返回数值不带单位
elementoffsetHeight|返回自身包括padding边框、内容区的高度, 返回数值不带单位

# offset 与 style 区别 
offset|style
--|--
offset 可以得到任意样式表中的样式值|style 只能得到行内样式表中的样式值
offset 系列获得的数值是没有单位的||style.width 获得的是带有单位的字符串
offsetWidth 包含padding+border+width|style.width 获得不包含padding和border 的值
offsetWidth 等属性是只读属性，只能获取不能赋值|style.width 是可读写属性，可以获取也可以赋值
所以，我们想要获取元素大小位置，用offset更合适|所以，我们想要给元素更改值，则需要用style改变



# 应用
获取鼠标在盒子里的距离
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        .box {
            width: 300px;
            height: 300px;
            background-color: pink;
            margin: 200px;
        }
    </style>
</head>

<body>
    <div class="box"></div>
    <script>
        // 我们在盒子内点击， 想要得到鼠标距离盒子左右的距离。
        // 1. 首先得到鼠标在页面中的坐标（ e.pageX, e.pageY）
        // 2. 其次得到盒子在页面中的距离(box.offsetLeft, box.offsetTop)
        // 3. 用鼠标距离页面的坐标减去盒子在页面中的距离， 得到 鼠标在盒子内的坐标
        var box = document.querySelector('.box');
        box.addEventListener('mousemove', function(e) {
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            this.innerHTML = 'x坐标是' + x + ' y坐标是' + y;
        })
    </script>
</body>

</html>
```

应用: 拖动元素


```js
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
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
    <div id="div"></div>
    <script>
        var title = document.querySelector('#div');
        // (1) 当我们鼠标按下， 就获得鼠标在盒子内的坐标
        title.addEventListener('mousedown', function(e) {
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
        // (2) 鼠标移动的时候，把鼠标在页面中的坐标，减去 鼠标在盒子内的坐标就是模态框的left和top值
            document.addEventListener('mousemove', move)
            function move(e) {
                console.log(this)
                title.style.left = e.pageX - x + 'px'; //这里的this不是title
                title.style.top = e.pageY - y + 'px';
            }
        // (3) 鼠标弹起，就让鼠标移动事件移除
            document.addEventListener('mouseup', function() {
                document.removeEventListener('mousemove', move);
            })
        })
    </script>
</body>

</html>
```






