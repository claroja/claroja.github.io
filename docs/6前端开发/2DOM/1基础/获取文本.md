# 获取文本

js获取element内容主要有:
1. `textContent`(`Node`类属性)
2. `innerHTML`和`outerHTML`(`Element`类属性)
3. `innerText`(`HTMLElement`类属性)








## innerHTML
1. 可获取标签中的所有的内容，包括标签、空格、文本、换行等。
2. 想要清空标签的内容，innerHTML = ""；即可
3. 如果想要设置标签中的内容，innerHTML = "填写想要设置的标签和内容"；设置内容时，会把原有的内容全部覆盖。
```js
var box = document.getElementById('box');
// 获取标签的内容
var box1 = box.innerHTML;
var box2 = document.getElementById('box').innerHTML;
console.log(box1);
```


## innerText
1. 获取标签(及其子标签)中的所有文本，不会获取标签（或者说可以过滤掉所有的标签）。如果有多个空格或者是换行，解析为一个空格。
2. 如果想要清空标签的内容，innerText = ""；即可
3. 如果想要设置标签中的内容，innerText = "填写想要设置的标签和内容"；设置内容时，会把原有的内容全部覆盖。但是标签不会被解析，会直接以文本的形式打印在页面中。

```js
//修改标签文本内容，内容中包含的标签不会被解析，会文本输出
var box = document.getElementById('box');
box.innerText = '<p>这里有个p，来看一下</p>'  //`<p>`会被当成字符串解析
```


## textContent
textContent来获取标签中的内容。但是textContent在过滤掉标签时，会保留标签结构。




## innerText和textContent的区别
innerText的值依赖于浏览器的显示，textContent依赖于代码的显示
```html
<div id="container">
    <span>666</span>
    <span>999</span>
</div>
<script>
    var oDiv=document.getElementById('container');
    console.log(oDiv.innerText,oDiv.textContent);
</script>

<!-- 
innerText:666 999
textContent:
        666
        999
-->
```
两种情况:
1. 如果一个元素之间包含了script标签或者style标签，innerText是获取不到这两个元素之间的文本的，而textContent可以
2. textContent会把空标签解析成换行（几个空标签就是几行），innerText只会把block元素类型的空标签解析换行，并且如果是多个的话仍看成是一个，而inline类型的原素则解析成空格，



参考:
https://www.jianshu.com/p/13096ec76ad2

