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

参考：
https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
https://www.youtube.com/watch?v=zBRqnSiq_VM
https://gist.github.com/prof3ssorSt3v3/2eb051730690a810b53dac14b3a273ed
