# 获取Element

## 元素选择器(建议)
通过样式选择器来获取`document.querySelector`或`document.querySelectorAll`.

```js
// 1. querySelector 返回指定选择器的第一个元素对象  切记 里面的选择器需要加符号 .box  #nav
var firstBox = document.querySelector('.box');
console.log(firstBox);
var nav = document.querySelector('#nav');
console.log(nav);
var li = document.querySelector('li');
console.log(li);
// 2. querySelectorAll()返回指定选择器的所有元素对象集合
var allBox = document.querySelectorAll('.box');
console.log(allBox);
var lis = document.querySelectorAll('li');
console.log(lis);
```


## DOM树结构获取
```js
doucumnet.body  // 返回body元素对象
document.documentElement  // 返回html元素对象
```
DOM 树可以把节点划分为不同的层级关系，常见的是父子兄层级关系。
### 父节点
`node.parentNode` 属性可返回某节点的父节点
```html
<body>
    <div class="demo">
        <div class="box">
            <span class="erweima">×</span>
        </div>
    </div>
    <script>
        // 1. 父节点 parentNode
        var erweima = document.querySelector('.erweima');
        // var box = document.querySelector('.box');
        // 得到的是离元素最近的父级节点(亲爸爸) 如果找不到父节点就返回为 null
        console.log(erweima.parentNode);
    </script>
</body>
```

### 子节点
`parentNode.childNodes` 返回包含指定节点的子节点的集合，该集合为即时更新的集合。
注意：返回值里面包含了所有的子节点，包括元素节点，文本节点等。
如果只想要获得里面的元素节点，则需要专门处理。 所以我们一般不提倡使用`childNodes`, 而使用`children`
`parentNode.children` 是一个只读属性，返回所有的子元素节点。它只返回子元素节点，其余节点不返回。

```html
<body>
    <!-- 节点的优点 -->
    <div>我是div</div>
    <span>我是span</span>
    <ul>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <script>
        // DOM 提供的方法（API）获取
        var ul = document.querySelector('ul');
        var lis = ul.querySelectorAll('li');
        // 1. 子节点  childNodes 所有的子节点 包含 元素节点 文本节点等等
        console.log(ul.childNodes);
        console.log(ul.childNodes[0].nodeType);
        console.log(ul.childNodes[1].nodeType);
        // 2. children 获取所有的子元素节点 也是我们实际开发常用的
        console.log(ul.children);
    </script>
</body>
```

`parentNode.firstChild/parentNode.lastChild`

```html
<script>
    var ol = document.querySelector('ol');
    // 1. firstChild 第一个子节点 不管是文本节点还是元素节点
    console.log(ol.firstChild);
    console.log(ol.lastChild);
    // 2. firstElementChild 返回第一个子元素节点 ie9才支持
    console.log(ol.firstElementChild);
    console.log(ol.lastElementChild);
    // 3. 实际开发的写法  既没有兼容性问题又返回第一个子元素
    console.log(ol.children[0]);
    console.log(ol.children[ol.children.length - 1]);
</script>
```

### 兄弟节点

```html
<body>
    <div>我是div</div>
    <span>我是span</span>
    <script>
        var div = document.querySelector('div');
        // 1.nextSibling 下一个兄弟节点 包含元素节点或者 文本节点等等
        console.log(div.nextSibling);
        console.log(div.previousSibling);
        // 2. nextElementSibling 得到下一个兄弟元素节点
        console.log(div.nextElementSibling);
        console.log(div.previousElementSibling);
    </script>
</body>
```











## document方法获取
1. 根据ID获取`document.getElementById`, 返回元素对象
```html
<body>
    <div id="time">2019-9-9</div>
    <script>
        var timer = document.getElementById('time');
        console.log(timer);
        console.log(typeof timer);
    </script>
</body>
```
2. 根据标签名获取, `document.getElementsByTagName` 返回对象集合
```html
<body>
    <ol id="ol">
        <li>生僻字</li>
        <li>生僻字</li>
    </ol>
    <script>
        var lis = document.getElementsByTagName('li');
        console.log(lis);
        console.log(lis[0]);
    </script>
</body>
```
3. 根据class获取, `document.getElementsByClassName` 返回对象集合
```js
// 1. getElementsByClassName 根据类名获得某些元素集合
var boxs = document.getElementsByClassName('box');
console.log(boxs);
```
