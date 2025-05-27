# requestAnimationFrame

1. 每次页面刷新时就会调用该方法（按屏幕的刷新频率）
2. 当切换页面时，将阻塞该方法

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      #box {
        background-color: cornflowerblue;
        width: 1rem;
        height: 1rem;
      }
    </style>
  </head>
  <body>
    <main>
      <p id="box"></p>
    </main>
    <script>
      let box = document.getElementById('box');
      let number = 0;
      let xpos = 0;
      function move(timmy) {
        if (timmy) {
          let diff = timmy - number;
          console.log('frame', diff); //因为屏幕的刷新率在60hz，所以间隔为16ms左右
          number = timmy; //highResTimeStamp
        }
        xpos = xpos + 1;
        box.style.transform = `translateX(${xpos}px)`;
        if (xpos < 500) {
          requestAnimationFrame(move);
        }
      }
      requestAnimationFrame(move);
    </script>
  </body>
</html>
```


## requestAnimationFrame()
`window.requestAnimationFrame()`方法跟setTimeout类似，都是推迟某个函数的执行。不同之处在于，setTimeout必须指定推迟的时间，`window.requestAnimationFrame()`则是推迟到浏览器下一次重流时执行，执行完才会进行下一次重绘。重绘通常是 16ms 执行一次，不过浏览器会自动调节这个速率，比如网页切换到后台 Tab 页时，requestAnimationFrame()会暂停执行。

如果某个函数会改变网页的布局，一般就放在`window.requestAnimationFrame()`里面执行，这样可以节省系统资源，使得网页效果更加平滑。因为慢速设备会用较慢的速率重流和重绘，而速度更快的设备会有更快的速率。

该方法接受一个回调函数作为参数。

```javascript
window.requestAnimationFrame(callback)
```
上面代码中，callback是一个回调函数。callback执行时，它的参数就是系统传入的一个高精度时间戳（performance.now()的返回值），单位是毫秒，表示距离网页加载的时间。

window.requestAnimationFrame()的返回值是一个整数，这个整数可以传入window.cancelAnimationFrame()，用来取消回调函数的执行。

下面是一个window.requestAnimationFrame()执行网页动画的例子。

```javascript
// 定义了一个网页动画，持续时间是2秒，会让元素向右移动。
var element = document.getElementById('animate');
element.style.position = 'absolute';

var start = null;

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  // 元素不断向左移，最大不超过200像素
  element.style.left = Math.min(progress / 10, 200) + 'px';
  // 如果距离第一次执行不超过 2000 毫秒，
  // 就继续执行动画
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

参考：
https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
https://www.youtube.com/watch?v=zBRqnSiq_VM
https://gist.github.com/prof3ssorSt3v3/2eb051730690a810b53dac14b3a273ed
