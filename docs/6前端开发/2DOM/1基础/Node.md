# Node

`Node`是一个基类，DOM中的`Element`，`Text`和`Comment`都继承于它。 换句话说，`Element`，`Text`和`Comment`是三种特殊的Node，它们分别叫做`ELEMENT_NODE`, `TEXT_NODE`和`COMMENT_NODE`。我们平时使用的HTML上的元素，即Element，是类型为ELEMENT_NODE的Node。

[参考官网](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/)


```html
html>
  <body>
    <h1>China</h1>
    <!-- My comment ...  -->
    <p>China is a popular country with...</p>
    <div>
      <button>See details</button>
    </div>
  </body>
</html>
```


```json
document.body.children
// HTMLCollection(3) [h1, p, div]
document.body.childNodes
// NodeList(9) [text, h1, text, comment, text, p, text, div, text]
```

`children`是`Element`的属性, 只会展示`<h1>`,`<p>`,`<div>`这样的标签
`childNodes`是`Node`的属性, 会展示`text`,`comment`以及`Element`的属性, 所以
会出现`[text, h1, text, comment, text, p, text, div, text]`. 注意这里的`text`其实是`换行符`, `comment`表示的是注释行.


## 属性

属性|描述
--|--
`Node.childNodes`|返回`NodeList`对象, 所有子节点
`Node.firstChild`|返回`Node`对象, 第一个子节点
`Node.lastChild`|返回`Node`对象, 最后一个子节点
`Node.nextSibling`|返回`Node`对象, 同级的下一个节点
`Node.previousSibling`|返回`Node`对象, 同级的上一个节点
`Node.parentNode`|返回`Node`, 父节点
`Node.parentElement`|返回`Element`, 仅返回父节点中的`Element`
`Node.nodeName`|返回类型根据节点类型判断, 返回节点的名称.`HTMLAudioElement`的就是`audio`, `Text`节点对应的是`#text`
`Node.nodeType`|返回整形, `ELEMENT_NODE`:1,`TEXT_NODE`:3,`COMMENT_NODE`:8
`Node.nodeValue`|返回字符串, 当前节点的值
`Node.textContent`|返回字符串, 后代的文本内容

## 方法
方法|描述
--|--
`Node.appendChild()`|在末尾添加一个子节点
`Node.insertBefore()`|在某个子节点之前添加一个子节点
`Node.removeChild()`|删除子节点
`Node.replaceChild()`|替换子节点
`Node.cloneNode()`|深拷贝一个节点
`Node.contains()`|是否包含某个后代节点
`Node.hasChildNodes()`|是否包含某个子节点

参考:
https://blog.csdn.net/HermitSun/article/details/95780601