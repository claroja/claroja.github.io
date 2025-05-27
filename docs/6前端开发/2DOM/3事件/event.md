# event


事件是可以被 JavaScript 侦测到的行为。例如，可以使用用户点击某按钮的事件，然后去执行某些操作。

事件三要素:
1. 事件源 
2. 事件类型
3. 事件处理

```html
<body>
    <button id="btn">警告</button>
    <script>
        //(1) 事件源 事件被触发的对象 -> 按钮
        var btn = document.getElementById('btn');
        //(2) 事件类型  -> 鼠标点击(onclick)
        // btn.onclick
        //(3) 事件处理程序 -> 一个方法
        btn.onclick = function() {
            alert('触发了onclick事件');
        }
    </script>
</body>
```



## 注册事件
给元素添加事件，称为注册事件或者绑定事件。


### 注册三种方式
1. 传统注册方式(常用): 利用 on 开头的事件 onclick
语法:
`<button onclick=“alert('hi~')”></button>`
`btn.onclick = function() {} `
特点：
同一个元素同一个事件只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数


2. `addEventListener`: w3c推荐: 标准写法
`eventTarget.addEventListener(type, listener[, useCapture]) `方法将指定的监听器注册到 eventTarget（目标对象）上，当该对象触发指定的事件时，就会执行事件处理函数。
- type：事件类型字符串，比如 click 、mouseover ，注意这里不要带 on
- listener：事件处理函数，事件发生时，会调用该监听函数
- useCapture：可选参数，是一个布尔值，默认是 false。
特点：同一个元素同一个事件可以注册多个监听器,按注册顺序依次执行

3. `attachEvent`: 过时, 了解即可
`eventTarget.attachEvent(eventNameWithOn, callback)`方法将指定的监听器注册到 eventTarget（目标对象） 上，当该对象触发指定的事件时，指定的回调函数就会被执行。
- eventNameWithOn：事件类型字符串，比如 onclick 、onmouseover ，这里要带 on
- callback： 事件处理函数，当目标触发事件时回调函数被调用


```html
<body>
    <button>传统注册事件</button>
    <button>方法监听注册事件</button>
    <button>ie9 attachEvent</button>
    <script>
        var btns = document.querySelectorAll('button');
        // 1. 传统方式注册事件
        btns[0].onclick = function() {
            alert('hi');
        }
        // 2. 事件侦听注册事件 addEventListener 
        // (1) 里面的事件类型是字符串 必定加引号 而且不带on
        // (2) 同一个元素 同一个事件可以添加多个侦听器（事件处理程序）
        btns[1].addEventListener('click', function() {
            alert(22);
        })
        // 3. attachEvent ie9以前的版本支持
        btns[2].attachEvent('onclick', function() {
            alert(11);
        })
    </script>
</body>
```


### 删除事件的方式

三种方式:
1. `onclick =null`
2. `removeEventListener`
3. `detachEvent`
```html
<body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <script>
        var divs = document.querySelectorAll('div');
        divs[0].onclick = function() {
                alert(11);
                // 1. 传统方式删除事件
                divs[0].onclick = null;
            }
            // 2. removeEventListener 删除事件
        divs[1].addEventListener('click', fn) // 里面的fn 不需要调用加小括号

        function fn() {
            alert(22);
            divs[1].removeEventListener('click', fn);
        }
        // 3. detachEvent
        divs[2].attachEvent('onclick', fn1);

        function fn1() {
            alert(33);
            divs[2].detachEvent('onclick', fn1);
        }
    </script>
</body>
```

## DOM事件流
事件流描述的是从页面中接收事件的顺序。如
```html
<div id="father" onclick='alert("father")'>
    <div id= "son" onclick='alert("son")'>
    </div>
</div>
```
在我们点击`son`时, 其实也点击了`father`, 那么是`son`先接收事件, 还是`father`先接收呢.如果是`son`先接收,`father`后接收, 就是冒泡. 如果是`father`先接收, `son`后接收就是捕获.


事件冒泡： IE 最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点的过程。
事件捕获： 网景最早提出，由 DOM 最顶层节点开始，然后逐级向下传播到到最具体的元素接收的过程。 
我们向水里面扔一块石头，首先它会有一个下降的过程，这个过程就可以理解为从最顶层向事件发生的最具体元素（目标点）的捕获过程；之后会产生泡泡，会在最低点（ 最具体元素）之后漂浮到水面上，这个过程相当于事件冒泡。 
注意:
1. JS 代码中只能执行捕获或者冒泡其中的一个阶段。
2. onclick 和 attachEvent 只能得到冒泡阶段。
3. addEventListener(type, listener[, useCapture])第三个参数如果是 true，表示在事件捕获阶段调用事件处理程序；如果是 false（不写默认就是false），表示在事件冒泡阶段调用事件处理程序。
4. 实际开发中我们很少使用事件捕获，我们更关注事件冒泡。
5. 有些事件是没有冒泡的，比如 onblur、onfocus、onmouseenter、onmouseleave

```html
<head>
    <style>
        .father {
            overflow: hidden;
            width: 300px;
            height: 300px;
            margin: 100px auto;
            background-color: pink;
            text-align: center;
        }
        
        .son {
            width: 200px;
            height: 200px;
            margin: 50px;
            background-color: purple;
            line-height: 200px;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">son盒子</div>
    </div>
    <script>
        // 1. 捕获阶段 如果addEventListener 第三个参数是 true 那么则处于捕获顺序  document -> html -> body -> father -> son
        // var son = document.querySelector('.son');
        // son.addEventListener('click', function() {
        //     alert('son');
        // }, true);
        // var father = document.querySelector('.father');
        // father.addEventListener('click', function() {
        //     alert('father');
        // }, true);
        // 2. 冒泡阶段 如果addEventListener 第三个参数是 false 或者 省略 那么则处于冒泡顺序  son -> father ->body -> html -> document
        var son = document.querySelector('.son');
        son.addEventListener('click', function() {
            alert('son');
        }, false);
        var father = document.querySelector('.father');
        father.addEventListener('click', function() {
            alert('father');
        }, false);
        document.addEventListener('click', function() {
            alert('document');
        })
    </script>
</body>
```


## 事件对象
跟事件相关的一系列信息数据的集合都放到这个对象里面，这个对象就是事件对象 event，它有很多属性和方法。比如：  
1. 谁绑定了这个事件。
2. 鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置。
3. 键盘触发事件的话，会得到键盘的相关信息，如按了哪个键。

语法:
```js
eventTarget.onclick = function(event) {
    // 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt 
} 
eventTarget.addEventListener('click', function(event) {
    // 这个 event 就是事件对象，我们还喜欢的写成 e 或者 evt 
})
```
例子:
```html
<body>
    <div>123</div>
    <script>
        // 事件对象
        var div = document.querySelector('div');
        div.onclick = function(e) {
                console.log(e);
            }
            // div.addEventListener('click', function(e) {
            //         console.log(e);

        //     })
        // 1. event 就是一个事件对象 写到我们侦听函数的 小括号里面 当形参来看
        // 2. 事件对象只有有了事件才会存在，它是系统给我们自动创建的，不需要我们传递参数
        // 3. 事件对象 是 我们事件的一系列相关数据的集合 跟事件相关的 比如鼠标点击里面就包含了鼠标的相关信息，鼠标坐标啊，如果是键盘事件里面就包含的键盘事件的信息 比如 判断用户按下了那个键
    </script>
</body>
```
## 常见的属性和方法
事件对象属性方法|说明
e.target|返回触发事件的对象 标准
e.type|返回事件的类型比如click mouseover 不带on
e.preventDefault()|该方法阻止默认事件(默认行为)标准比如不让链接跳转
e.stopPropagation()|阻止冒泡标准


### e.target 和 this
e.target 和 this 的区别：
e.target 点击了那个元素，就返回那个元素;this那个元素绑定了这个点击事件，那么就返回谁
```html
<body>
    <ul>
        <li>abc</li>
        <li>abc</li>
    </ul>
    <script>
        var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
                // 我们给ul 绑定了事件  那么this 就指向ul  
                console.log(this);
                // e.target 指向我们点击的那个对象 谁触发了这个事件 我们点击的是li e.target 指向的就是li
                console.log(e.target)
        })
    </script>
</body>
```


### 事件委托
事件委托的原理
不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用`e.target`来改变子。只操作了一次 DOM ，提高了程序的性能.

例子:
本例中, 只给`<ul>`添加了事件.
```html
<body>
    <ul>
        <li>改变颜色</li>
        <li>改变颜色</li>
    </ul>
    <script>
        // 事件委托的核心原理：给父节点添加侦听器， 利用事件冒泡影响每一个子节点
        var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
            // e.target 这个可以得到我们点击的对象
            e.target.style.backgroundColor = 'pink';
        })
    </script>
</body>
```



### 阻止默认行为
`preventDefault`: 阻止默认行为（事件） 让链接不跳转 或者让提交按钮不提交
```html
<body>
    <div>123</div>
    <a href="http://www.baidu.com">百度</a>
    <form action="http://www.baidu.com">
        <input type="submit" value="提交" name="sub">
    </form>
    <script>
        // 阻止默认行为（事件） 让链接不跳转 或者让提交按钮不提交
        var a = document.querySelector('a');
        a.addEventListener('click', function(e) {
                e.preventDefault(); //  dom 标准写法
            })
    </script>
</body>
```
### 阻止冒泡
事件冒泡：开始时由最具体的元素接收，然后逐级向上传播到到 DOM 最顶层节点。
我们只想触发子的事件, 这个时候就要阻止冒泡
`e.stopPropagation()`

```html
<body>
    <div class="father">
        <div class="son">son儿子</div>
    </div>
    <script>
        // 常见事件对象的属性和方法
        // 阻止冒泡  dom 推荐的标准 stopPropagation() 
        var son = document.querySelector('.son');
        son.addEventListener('click', function(e) {
            alert('son');
            e.stopPropagation(); // stop 停止  Propagation 传播
        }, false);
        var father = document.querySelector('.father');
        father.addEventListener('click', function() {
            alert('father');
        }, false);
        document.addEventListener('click', function() {
            alert('document');
        })
    </script>
</body>
```
