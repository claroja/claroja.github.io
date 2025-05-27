# 其他


## css

`window.devicePixelRatio`属性返回一个数值，表示一个 CSS 像素的大小与一个物理像素的大小之间的比率。也就是说，它表示一个 CSS 像素由多少个物理像素组成。它可以用于判断用户的显示环境，如果这个比率较大，就表示用户正在使用高清屏幕，因此可以显示较大像素的图片。


## getSelection()
`window.getSelection`方法返回一个Selection对象，表示用户现在选中的文本。

```javascript
var selObj = window.getSelection();
var selectedText = selObj.toString(); //使用Selection对象的toString方法可以得到选中的文本。
```



## requestIdleCallback()
window.requestIdleCallback()跟setTimeout类似，也是将某个函数推迟执行，但是它保证将回调函数推迟到系统资源空闲时执行。也就是说，如果某个任务不是很关键，就可以使用window.requestIdleCallback()将其推迟执行，以保证网页性能。

它跟window.requestAnimationFrame()的区别在于，后者指定回调函数在下一次浏览器重排时执行，问题在于下一次重排时，系统资源未必空闲，不一定能保证在16毫秒之内完成；window.requestIdleCallback()可以保证回调函数在系统资源空闲时执行。

该方法接受一个回调函数和一个配置对象作为参数。配置对象可以指定一个推迟执行的最长时间，如果过了这个时间，回调函数不管系统资源有无空虚，都会执行。

```javascript
window.requestIdleCallback(callback[, options])
```
callback参数是一个回调函数。该回调函数执行时，系统会传入一个IdleDeadline对象作为参数。IdleDeadline对象有一个didTimeout属性（布尔值，表示是否为超时调用）和一个timeRemaining()方法（返回该空闲时段剩余的毫秒数）。

options参数是一个配置对象，目前只有timeout一个属性，用来指定回调函数推迟执行的最大毫秒数。该参数可选。

window.requestIdleCallback()方法返回一个整数。该整数可以传入window.cancelIdleCallback()取消回调函数。

```javascript
requestIdleCallback(myNonEssentialWork);

function myNonEssentialWork(deadline) {
  while (deadline.timeRemaining() > 0) {
    doWorkIfNeeded();
  }
}
```
上面代码中，requestIdleCallback()用来执行非关键任务myNonEssentialWork。该任务先确认本次空闲时段有剩余时间，然后才真正开始执行任务。

下面是指定timeout的例子。
```javascript
requestIdleCallback(processPendingAnalyticsEvents, { timeout: 2000 });
```

面代码指定，processPendingAnalyticsEvents必须在未来2秒之内执行。
如果由于超时导致回调函数执行，则deadline.timeRemaining()返回0，deadline.didTimeout返回true。
如果多次执行window.requestIdleCallback()，指定多个回调函数，那么这些回调函数将排成一个队列，按照先进先出的顺序执行。

## https
`window.isSecureContext`属性返回一个布尔值，表示当前窗口是否处在加密环境。如果是 HTTPS 协议，就是true，否则就是false。


