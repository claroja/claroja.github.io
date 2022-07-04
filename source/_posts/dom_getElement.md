---
title: dom_getElement
toc: true
date: 2021-01-20 22:03:54
---
获取元素的五种方法:
1. 根据ID获取`document.getElementById`, 返回元素对象
```html
<body>
    <div id="time">2019-9-9</div>
    <script>
        var timer = document.getElementById('time');
        console.log(timer);
        console.log(typeof timer);
    </script>
</body>
```
2. 根据标签名获取, `document.getElementsByTagName` 返回对象集合
```html
<body>
    <ol id="ol">
        <li>生僻字</li>
        <li>生僻字</li>
    </ol>
    <script>
        var lis = document.getElementsByTagName('li');
        console.log(lis);
        console.log(lis[0]);
    </script>
</body>
```
3. 根据class获取, `document.getElementsByClassName` 返回对象集合
```js
// 1. getElementsByClassName 根据类名获得某些元素集合
var boxs = document.getElementsByClassName('box');
console.log(boxs);
```

4. 通过样式选择器来获取`document.querySelector`或`document.querySelectorAll`

```js
// 1. querySelector 返回指定选择器的第一个元素对象  切记 里面的选择器需要加符号 .box  #nav
var firstBox = document.querySelector('.box');
console.log(firstBox);
var nav = document.querySelector('#nav');
console.log(nav);
var li = document.querySelector('li');
console.log(li);
// 2. querySelectorAll()返回指定选择器的所有元素对象集合
var allBox = document.querySelectorAll('.box');
console.log(allBox);
var lis = document.querySelectorAll('li');
console.log(lis);
```

5. 通过dom树结构获取
```js
doucumnet.body  // 返回body元素对象
document.documentElement  // 返回html元素对象
```


注意:
以上的`document.`都可以换成`Element`对象, 来缩小查找范围