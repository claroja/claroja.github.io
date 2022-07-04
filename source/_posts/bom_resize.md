---
title: bom_resize
toc: true
date: 2021-01-20 22:03:54
---
# 调整窗口大小事件
`window.onresize` 是调整窗口大小加载事件, 当触发时就调用的处理函数。
语法:
`window.onresize = function(){}`
`window.addEventListener("resize",function(){});`
注意：
1. 只要窗口大小发生像素变化，就会触发这个事件。
2. 我们经常利用这个事件完成响应式布局。 window.innerWidth 当前屏幕的宽度


```html
<head>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <script>
        window.addEventListener('load', function() {
            var div = document.querySelector('div');
            window.addEventListener('resize', function() {
                console.log(window.innerWidth);
                console.log('变化了');
                if (window.innerWidth <= 800) {
                    div.style.display = 'none';
                } else {
                    div.style.display = 'block';
                }
            })
        })
    </script>
    <div></div>
</body>
```