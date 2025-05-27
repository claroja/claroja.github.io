# 增删Element

## 节点的增删改查

### 添加节点
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

### 删除节点
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

### 复制节点
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
1. `document.write` 是直接将内容写入页面的内容流，但是文档流执行完毕，则它会导致页面全部重绘
2. `innerHTML` 是将内容写入某个 DOM 节点，不会导致页面全部重绘. `innerHTML` 创建多个元素效率更高（不要拼接字符串，采取数组形式拼接），结构稍微复杂
3. `createElement()` 创建多个元素效率稍低一点点，但是结构更清晰

总结：不同浏览器下，innerHTML 效率要比 creatElement 高


## 其他
网页中的所有内容(DOM)都是节点(node)（标签、属性、文本、注释等）。
节点至少拥有三种属性:

1. nodeType（节点类型）
    1. 元素节点  nodeType  为 1
    2. 属性节点  nodeType  为 2
    3. 文本节点  nodeType  为 3 （文本节点包含文字、空格、换行等）
2. nodeName（节点名称）
3. nodeValue（节点值）



