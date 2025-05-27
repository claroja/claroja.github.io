# 动态创建svg元素



当用`document.createElement`方法动态生成svg节点，没有显示。但审查元素时，看到节点确实已经生成了，就是不显示. 将动态生成元素直接拷贝到html中就能生效.

用`document.createElement`创建出来的节点是属于`html dom`，而`svg`的节点是`svg dom`。所以需要用`createElementNS`函数并传入节点名称的命名空间。

```js
let div = document.querySelector('#app')

// 创建svgDom
var svgDom = document.createElementNS('http://www.w3.org/2000/svg','svg');
svgDom.setAttribute('width','1000');
svgDom.setAttribute('height','1000');
document.body.appendChild(svgDom);


// 创建svg元素
let newRect = document.createElementNS('http://www.w3.org/2000/svg',"rect");
newRect.setAttribute("x", "100");
newRect.setAttribute("y", "100");
newRect.setAttribute("width", "100");
newRect.setAttribute("height", "100");
newRect.setAttribute("fill", "#5cceee");
svgDom?.appendChild(newRect)

```


## 参考

- [createElementNS()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElementNS)
- [creating-dynamic-svg-elements-with-javascript](https://www.motiontricks.com/creating-dynamic-svg-elements-with-javascript/)