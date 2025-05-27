# localStorage-sessionStorage

[参考官网](https://developer.mozilla.org/en-US/docs/Web/API/Storage)


本地存储特性
1、数据存储在用户浏览器中
2、设置、读取方便、甚至页面刷新不丢失数据
3、容量较大,sessionStorage约5M、localStorage约20M
4、只能存储字符串,可以将对象JSON.stringify() 编码后存储


### sessionStorage
1. 生命周期为关闭浏览器窗口(页面关闭就没了)
2. 在同一个窗口(页面)下数据可以共享
3. 以键值对的形式存储使用

语法:
`sessionStorage.setltem(key, value)`
`sessionStorage.getltem(key)`
`sessionStorage.removeltem(key)`
`sessionStorage.clear()`
```html
<body>
    <input type="text">
    <button class="set">存储数据</button>
    <button class="get">获取数据</button>
    <button class="remove">删除数据</button>
    <button class="del">清空所有数据</button>
    <script>
        console.log(localStorage.getItem('username'));

        var ipt = document.querySelector('input');
        var set = document.querySelector('.set');
        var get = document.querySelector('.get');
        var remove = document.querySelector('.remove');
        var del = document.querySelector('.del');
        set.addEventListener('click', function() {
            // 当我们点击了之后，就可以把表单里面的值存储起来
            var val = ipt.value;
            sessionStorage.setItem('uname', val);
            sessionStorage.setItem('pwd', val);
        });
        get.addEventListener('click', function() {
            // 当我们点击了之后，就可以把表单里面的值获取过来
            console.log(sessionStorage.getItem('uname'));

        });
        remove.addEventListener('click', function() {
            // 
            sessionStorage.removeItem('uname');

        });
        del.addEventListener('click', function() {
            // 当我们点击了之后，清除所有的
            sessionStorage.clear();

        });
    </script>
</body>
```

## localStorage
1. 生命周期永久生效,除非手动删除否则关闭页面也会存在
2. 可以多窗口(页面)共享(同-浏览器可以共享)
3. 以键值对的形式存储使用

语法:
`localStorage.setltem(key, value)`
`localStorage.getltem(key)`
`localStorage.removeltem(key)`
`localStorage.clear()`

```html
<body>
    <input type="text">
    <button class="set">存储数据</button>
    <button class="get">获取数据</button>
    <button class="remove">删除数据</button>
    <button class="del">清空所有数据</button>
    <script>
        var ipt = document.querySelector('input');
        var set = document.querySelector('.set');
        var get = document.querySelector('.get');
        var remove = document.querySelector('.remove');
        var del = document.querySelector('.del');
        set.addEventListener('click', function() {
            var val = ipt.value;
            localStorage.setItem('username', val);
        })
        get.addEventListener('click', function() {
            console.log(localStorage.getItem('username'));

        })
        remove.addEventListener('click', function() {
            localStorage.removeItem('username');

        })
        del.addEventListener('click', function() {
            localStorage.clear();

        })
    </script>
</body>
```