# 窗口

## 窗口打开, 关闭和停止

### window.open()
window.open方法用于新建另一个浏览器窗口，类似于浏览器菜单的新建窗口选项。它会返回新窗口的引用，如果无法新建窗口，则返回null。
```javascript
var popup = window.open('somefile.html');
```
上面代码会让浏览器弹出一个新建窗口，网址是当前域名下的somefile.html。

open方法一共可以接受三个参数。
```javascript
window.open(url, windowName, [windowFeatures])
```

- url：字符串，表示新窗口的网址。如果省略，默认网址就是about:blank。
- windowName：字符串，表示新窗口的名字。如果该名字的窗口已经存在，则占用该窗口，不再新建窗口。如果省略，就默认使用_blank，表示新建一个没有名字的窗口。另外还有几个预设值，_self表示当前窗口，_top表示顶层窗口，_parent表示上一层窗口。
- windowFeatures：字符串，内容为逗号分隔的键值对（详见下文），表示新窗口的参数，比如有没有提示栏、工具条等等。如果省略，则默认打开一个完整 UI 的新窗口。如果新建的是一个已经存在的窗口，则该参数不起作用，浏览器沿用以前窗口的参数。
    - left：新窗口距离屏幕最左边的距离（单位像素）。注意，新窗口必须是可见的，不能设置在屏幕以外的位置。
    - top：新窗口距离屏幕最顶部的距离（单位像素）。
    - height：新窗口内容区域的高度（单位像素），不得小于100。
    - width：新窗口内容区域的宽度（单位像素），不得小于100。
    - outerHeight：整个浏览器窗口的高度（单位像素），不得小于100。
    - outerWidth：整个浏览器窗口的宽度（单位像素），不得小于100。
    - menubar：是否显示菜单栏。
    - toolbar：是否显示工具栏。
    - location：是否显示地址栏。
    - personalbar：是否显示用户自己安装的工具栏。
    - status：是否显示状态栏。
    - dependent：是否依赖父窗口。如果依赖，那么父窗口最小化，该窗口也最小化；父窗口关闭，该窗口也关闭。
    - minimizable：是否有最小化按钮，前提是dialog=yes。
    - noopener：新窗口将与父窗口切断联系，即新窗口的window.opener属性返回null，父窗口的window.open()方法也返回null。
    - resizable：新窗口是否可以调节大小。
    - scrollbars：是否允许新窗口出现滚动条。
    - dialog：新窗口标题栏是否出现最大化、最小化、恢复原始大小的控件。
    - titlebar：新窗口是否显示标题栏。
    - alwaysRaised：是否显示在所有窗口的顶部。
    - alwaysLowered：是否显示在父窗口的底下。
    - close：新窗口是否显示关闭按钮。

```javascript
var popup = window.open(
  'somepage.html',
  'DefinitionsWindows',
  'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'
);
```

### window.close()
`window.close`方法用于关闭当前窗口，一般只用来关闭`window.open`方法新建的窗口。
```javascript
popup.close()
```
该方法只对顶层窗口有效，iframe框架之中的窗口使用该方法无效。

### window.stop()
`window.stop()`方法完全等同于单击浏览器的停止按钮，会停止加载图像、视频等正在或等待加载的对象。
```javascript
window.stop()
```


```js
window.closed // false
```
`window.closed`检查当前窗口是否关闭。这种检查意义不大，因为只要能运行代码，当前窗口肯定没有关闭。这个属性一般用来检查，使用脚本打开的新窗口是否关闭。
```js
var popup = window.open();
if ((popup !== null) && !popup.closed) {
  // 窗口仍然打开着
}
```
`window.opener`属性表示打开当前窗口的父窗口。如果当前窗口没有父窗口（即直接在地址栏输入打开），则返回null。
```js
window.open().opener === window // true
```
上面表达式会打开一个新窗口，然后返回true。

通过opener属性，可以获得父窗口的全局属性和方法，但只限于两个窗口同源的情况，且其中一个窗口由另一个打开。`<a>`元素添加`rel="noopener"`属性，可以防止新打开的窗口获取父窗口，减轻被恶意网站修改父窗口 URL 的风险。
```js
<a href="https://an.evil.site" target="_blank" rel="noopener">
恶意网站
</a>
```

## focus blur
`window.focus()`方法会激活窗口，使其获得焦点，出现在其他窗口的前面。
```javascript
var popup = window.open('popup.html', 'Popup Window');

if ((popup !== null) && !popup.closed) {
  popup.focus();
}  //上面代码先检查popup窗口是否依然存在，确认后激活该窗口。
```

`window.blur()`方法将焦点从窗口移除。
当前窗口获得焦点时，会触发focus事件；当前窗口失去焦点时，会触发blur事件。