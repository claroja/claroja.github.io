# 事件



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


## 事件
### load
`load`事件发生在文档在浏览器窗口加载完毕时。`window.onload`属性可以指定这个事件的回调函数。

```javascript
// 在网页加载完毕后，获取指定元素并进行处理。
window.onload = function() {
  var elements = document.getElementsByClassName('example');
  for (var i = 0; i < elements.length; i++) {
    var elt = elements[i];
    // ...
  }
};
```


### error
浏览器脚本发生错误时，会触发window对象的error事件。我们可以通过`window.onerror`属性对该事件指定回调函数。

```javascript
window.onerror = function (message, filename, lineno, colno, error) {
  console.log("出错了！--> %s", error.stack);
};
```
由于历史原因，window的error事件的回调函数不接受错误对象作为参数，而是一共可以接受五个参数，它们的含义依次如下。

- 出错信息
- 出错脚本的网址
- 行号
- 列号
- 错误对象


并不是所有的错误，都会触发 JavaScript 的error事件（即让 JavaScript 报错）。一般来说，只有 JavaScript 脚本的错误，才会触发这个事件，而像资源文件不存在之类的错误，都不会触发。

下面是一个例子，如果整个页面未捕获错误超过3个，就显示警告。
```javascript
window.onerror = function(msg, url, line) {
  if (onerror.num++ > onerror.max) {
    alert('ERROR: ' + msg + '\n' + url + ':' + line);
    return true;
  }
}
onerror.max = 3;
onerror.num = 0;
```

