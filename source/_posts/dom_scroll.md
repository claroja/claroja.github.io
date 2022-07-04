---
title: dom_scroll
toc: true
date: 2021-01-20 22:03:54
---
使用scroll系列的相关属性可以动态的得到该元素的大小、滚动距离等。

[1.png](1.png)
scroll系列属性|作用
--|--
element.scrollTop|返回被卷去的上侧距离,返回数值不带单位
element.scrollLeft|返回被卷去的左侧距离，返回数值不带单位
element.scrollWidth|返回自身实际的宽度，不含边框，返回数值不带单位
element.scrollHeight|返回自身实际的高度，不含边框，返回数值不带单位


```html
<head>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            border: 10px solid red;
            padding: 10px;
            overflow: auto;
        }
    </style>
</head>

<body>
    <div>
        我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容 我是内容
    </div>
    <script>
        // scroll 系列
        var div = document.querySelector('div');
        console.log(div.scrollHeight);
        console.log(div.clientHeight);
        // scroll滚动事件当我们滚动条发生变化会触发的事件
        div.addEventListener('scroll', function() {
            console.log(div.scrollTop);

        })
    </script>
</body>
```