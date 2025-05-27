# 操作Element

利用 DOM 操作元素来改变元素里面的内容 、属性等。主要应用:
1. 操作元素内容: innerText/innerHTML
2. 操作常见属性: src/href/title/alt
3. 操作表单属性: value/type/disabled
4. 操作元素样式: element.style/className


## 操作元素内容

### innerText和innerHTML
1. innerText 不识别html标签, 去除空格和换行
2. innerHTML 识别html标签 W3C标准 保留空格和换行的
3. 这两个属性是可读写的, 可以获取元素里面的内容

```html
<body>
    <div></div>
    <p>
        我是文字
        <span>123</span>
    </p>
    <script>
        // innerText 和 innerHTML的区别 
        // 1. innerText 不识别html标签, 去除空格和换行
        var div = document.querySelector('div');
        // div.innerText = '<strong>今天是：</strong> 2019';
        // 2. innerHTML 识别html标签 W3C标准 保留空格和换行的
        div.innerHTML = '<strong>今天是：</strong> 2019';
        // 这两个属性是可读写的, 可以获取元素里面的内容
        var p = document.querySelector('p');
        console.log(p.innerText);
        console.log(p.innerHTML);
    </script>
</body>
```

### 表单input.value
1. 表单里面的值 文字内容是通过 value 来修改的
2. this 指向的是事件函数的调用者
```html
<body>
    <button>按钮</button>
    <input type="text" value="输入内容">
    <script>
        // 1. 获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        // 2. 注册事件 处理程序
        btn.onclick = function() {
            // input.innerHTML = '点击了';  这个是 普通盒子 比如 div 标签里面的内容
            // 表单里面的值 文字内容是通过 value 来修改的
            input.value = '被点击了';
            // 如果想要某个表单被禁用 不能再点击 disabled  我们想要这个按钮 button禁用
            // btn.disabled = true;
            this.disabled = true;
            // this 指向的是事件函数的调用者 btn
        }
    </script>
</body>
```

## 操作元素样式
1. element.style     行内样式操作
2. element.className 类名样式操作
    - class因为是个保留字，因此使用className来操作元素类名属性
    - className 会直接更改元素的类名，会覆盖原先的类名。

```html
<body>
<body>
    <div></div>
    <script>
        // 1. 获取元素
        var div = document.querySelector('div');
        // 2. 注册事件 处理程序
        div.onclick = function() {
            // div.style里面的属性 采取驼峰命名法 
            this.style.backgroundColor = 'purple';
            this.style.width = '250px';
            this.style.height = '250px';
        }
    </script>
</body>
</body>

```



## 操作属性

### 常见属性


```html
<body>
    <img src="images/1.jpg" alt="" title="wang">
    <script>
        var img = document.querySelector('img');
        img.src = 'images/2.jpg';
        img.title = 'li';
    </script>
</body>
```





### 自定义属性
element.属性  获取内置属性值（元素本身自带的属性）
element.getAttribute(‘属性’);  主要获得自定义的属性 （标准） 我们程序员自定义的属性
element.属性  设置内置属性值
element.setAttribute(‘属性’);  主要设置自定义的属性 （标准）
element.removeAttribute('属性');
```html
<body>
    <div id="demo" index="1" class="nav"></div>
    <script>
        var div = document.querySelector('div');
        // 1. 获取元素的属性值
        // (1) element.属性
        console.log(div.id);
        //(2) element.getAttribute('属性') 
        console.log(div.getAttribute('id'));
        console.log(div.getAttribute('index'));
        // 2. 设置元素属性值
        // (1) element.属性= '值'
        div.id = 'test';
        div.className = 'navs';
        // (2) element.setAttribute('属性', '值');  主要针对于自定义属性
        div.setAttribute('index', 2);
        div.setAttribute('class', 'footer'); // class 特殊  这里面写的就是class 不是className
        // 3 移除属性 removeAttribute(属性)    
        div.removeAttribute('index');
    </script>
</body>
```