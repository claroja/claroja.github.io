---
title: dom_domTree
toc: true
date: 2021-01-20 22:03:54
---
网页中的所有内容都是节点（标签、属性、文本、注释等），在DOM 中，节点使用 node 来表示。

节点至少拥有nodeType（节点类型）、nodeName（节点名称）和nodeValue（节点值）这三个基本属性.
元素节点  nodeType  为 1
属性节点  nodeType  为 2
文本节点  nodeType  为 3 （文本节点包含文字、空格、换行等）
我们在实际开发中，节点操作主要操作的是元素节点


# 节点操作
DOM 树可以把节点划分为不同的层级关系，常见的是父子兄层级关系。

## 父节点
`node.parentNode` 属性可返回某节点的父节点，注意是最近的一个父节点
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

## 子节点
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

## 兄弟节点
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

# 节点的增删改查
## 添加节点
`document.createElement('tagName')`
`node.appendChild(child)`方法将一个节点添加到指定父节点的子节点列表末尾。
`node.insertBefore(child, 指定元素)`方法将一个节点添加到父节点的指定子节点前面。
```html
<body>
    <ul>
        <li>123</li>
    </ul>
    <script>
        // 1. 创建节点元素节点
        var li = document.createElement('li');
        // 2. 添加节点 node.appendChild(child)  node 父级  child 是子级 后面追加元素  类似于数组中的push
        var ul = document.querySelector('ul');
        ul.appendChild(li);
        // 3. 添加节点 node.insertBefore(child, 指定元素);
        var lili = document.createElement('li');
        ul.insertBefore(lili, ul.children[0]);
        // 4. 我们想要页面添加一个新的元素 ： 1. 创建元素 2. 添加元素
    </script>
</body>

```

# 删除节点
`node.removeChild()`方法从 DOM 中删除一个子节点，返回删除的节点
```html
<body>
    <button>删除</button>
    <ul>
        <li>一</li>
        <li>二</li>
        <li>三</li>
    </ul>
    <script>
        // 1.获取元素
        var ul = document.querySelector('ul');
        // 2. 删除元素  node.removeChild(child)
        ul.removeChild(ul.children[0]);
    </script>
</body>
```
# 复制节点
`node.cloneNode()`方法返回调用该方法的节点的一个副本。 也称为克隆节点/拷贝节点
```html
<body>
    <ul>
        <li>1111</li>
        <li>2</li>
        <li>3</li>
    </ul>
    <script>
        var ul = document.querySelector('ul');
        // 1. node.cloneNode(); 括号为空或者里面是false 浅拷贝 只复制标签不复制里面的内容
        // 2. node.cloneNode(true); 括号为true 深拷贝 复制标签复制里面的内容
        var lili = ul.children[0].cloneNode(true);
        ul.appendChild(lili);
    </script>
</body>
```

## 创建元素的三种方法
1. document.write 是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘
2. innerHTML 是将内容写入某个 DOM 节点，不会导致页面全部重绘
3. innerHTML 创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂
4. createElement() 创建多个元素效率稍低一点点，但是结构更清晰
总结：不同浏览器下，innerHTML 效率要比 creatElement 高
