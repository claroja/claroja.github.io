---
title: bom_onload
toc: true
date: 2021-01-20 22:03:54
---

window.onload 是窗口 (页面）加载事件,当文档内容完全加载完成会触发该事件(包括图像、脚本文件、CSS 文件等), 就调用的处理函数。
语法:
`window.onload = function(){}`
或者 
`window.addEventListener("load",function(){});`

注意：
1. 有了 window.onload 就可以把 JS 代码写到页面元素的上方，因为 onload 是等页面内容全部加载完毕，再去执行处理函数。
2. window.onload 传统注册事件方式 只能写一次，如果有多个，会以最后一个 window.onload 为准。
3. 如果使用 addEventListener 则没有限制


```html
<script>
    window.onload = function() {
        alert(22);
    }
    window.addEventListener('load', function() {

        alert(22);
    })
    document.addEventListener('DOMContentLoaded', function() {
            alert(33);
        })
    // load 等页面内容全部加载完毕，包含页面dom元素 图片 flash  css 等等
    // DOMContentLoaded 是DOM 加载完毕，不包含图片 falsh css 等就可以执行 加载速度比 load更快一些
</script>
```