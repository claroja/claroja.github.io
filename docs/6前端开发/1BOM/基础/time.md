# time


## setTimeout() 定时器
setTimeout() 方法用于设置一个定时器，该定时器在定时器到期后执行调用函数。
语法:
`window.setTimeout(调用函数, [延迟的毫秒数]);` 创建定时器
`clearTimeout()` 删除定时器
注意：
1. window 可以省略。
2. 延迟的毫秒数省略默认是 0，如果写，必须是毫秒。
3. 因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。


```html
<body>
    <script>
        function callback() {
            console.log('爆炸了');

        }
        var timer1 = setTimeout(callback, 3000);
        var timer2 = setTimeout(callback, 5000);
        clearTimeout(timer2); //删除定时器
    </script>
</body>
```

## setInterval 间隔定时器
setInterval() 方法重复调用一个函数，每隔这个时间，就去调用一次回调函数。
语法:
`window.setInterval(回调函数, [间隔的毫秒数]);` 创建定时器
`clearInterval(timer)` 清除定时器
注意：
1. window 可以省略。
2. 间隔的毫秒数省略默认是 0，如果写，必须是毫秒，表示每隔多少毫秒就自动调用这个函数。
3. 因为定时器可能有很多，所以我们经常给定时器赋值一个标识符。
4. 第一次执行也是间隔毫秒数之后执行，之后每隔毫秒数就执行一次。

```html
<body>
    <script>
        // 1. setInterval 
        // 语法规范：  window.setInterval(调用函数, 延时时间);
        var timer = setInterval(function() {
            console.log('继续输出');

        }, 1000);
        // clearInterval(timer) 清除定时器
    </script>
</body>
```