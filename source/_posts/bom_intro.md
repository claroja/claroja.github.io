---
title: bom_intro
toc: true
date: 2021-01-20 22:03:54
---
BOM（Browser Object Model）即浏览器对象模型，它提供了独立于内容而与浏览器窗口进行交互的对象，其核心对象是 window。

DOM:
- 文档对象模型 
- DOM 就是把「文档」当做一个「对象」来看待
- DOM 的顶级对象是 document
- DOM 主要学习的是操作页面元素
- DOM 是 W3C 标准规范

BOM:
- 浏览器对象模型
- 把「浏览器」当做一个「对象」来看待
- BOM 的顶级对象是 window
- BOM 学习的是浏览器窗口交互的一些对象
- BOM 是浏览器厂商在各自浏览器上定义的，兼容性较差

BOM包含:document/location/navigation/screen/history

```html
<body>
    <script>
        // window.document.querySelector()
        var num = 10;
        console.log(num);
        console.log(window.num);

        function fn() {
            console.log(11);
        }
        fn();
        window.fn();
        // alert(11);
        // window.alert(11)
        console.dir(window);
        // var name = 10;
        console.log(window.name);
    </script>
</body>
```





