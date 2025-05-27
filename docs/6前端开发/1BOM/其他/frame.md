

`window.frames`属性返回一个类似数组的对象，成员为页面内所有框架窗口，包括`frame`元素和`iframe`元素。`window.frames[0]`表示页面中第一个框架窗口。

如果`iframe`元素设置了`id`或`name`属性，那么就可以用属性值，引用这个`iframe`窗口。比如`<iframe name="myIFrame">`可以用`frames['myIFrame']`或者`frames.myIFrame`来引用。

`frames`属性实际上是`window`对象的别名。
```js
frames === window // true
```
因此，`frames[0]`也可以用`window[0]`表示。但是，从语义上看，`frames`更清晰，而且考虑到`window`还是全局对象，因此推荐表示多窗口时，总是使用`frames[0]`的写法。

`window.length`属性返回当前网页包含的框架总数。如果当前网页不包含`frame`和`iframe`元素，那么`window.length`就返回0。
等价于`window.frames.length`
```js
window.frames.length === window.length // true
```

`window.top`属性指向最顶层窗口，主要用于在框架窗口（frame）里面获取顶层窗口。
`window.parent`属性指向父窗口。如果当前窗口没有父窗口，window.parent指向自身。
```js
if (window.parent !== window.top) {
  // 表明当前窗口嵌入不止一层
}
```


对于iframe嵌入的窗口，document.getElementById方法可以拿到该窗口的 DOM 节点，然后使用contentWindow属性获得iframe节点包含的window对象。
```javascript
var frame = document.getElementById('theFrame');
var frameWindow = frame.contentWindow;
```
上面代码中，frame.contentWindow可以拿到子窗口的window对象。然后，在满足同源限制的情况下，可以读取子窗口内部的属性。
```javascript
// 获取子窗口的标题
frameWindow.title
```
`<iframe>`元素的contentDocument属性，可以拿到子窗口的document对象。
```javascript
var frame = document.getElementById('theFrame');
var frameDoc = frame.contentDocument;

// 等同于
var frameDoc = frame.contentWindow.document;
```


window.frames属性返回一个类似数组的对象，成员是所有子窗口的window对象。可以使用这个属性，实现窗口之间的互相引用。比如，frames[0]返回第一个子窗口，frames[1].frames[2]返回第二个子窗口内部的第三个子窗口，parent.frames[1]返回父窗口的第二个子窗口。

注意，window.frames每个成员的值，是框架内的窗口（即框架的window对象），而不是iframe标签在父窗口的 DOM 节点。如果要获取每个框架内部的 DOM 树，需要使用window.frames[0].document的写法。

另外，如果`<iframe>`元素设置了name或id属性，那么属性值会自动成为全局变量，并且可以通过window.frames属性引用，返回子窗口的window对象。

```javascript
// HTML 代码为 <iframe id="myFrame">
window.myFrame // [HTMLIFrameElement]
frames.myframe === myFrame // true
```

另外，name属性的值会自动成为子窗口的名称，可以用在window.open方法的第二个参数，或者`<a>`和`<frame>`标签的target属性。
