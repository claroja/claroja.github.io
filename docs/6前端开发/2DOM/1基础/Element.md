# Element

Element中包含了HTMLElement和SVGElement，其中HTMLElement是所有HTML的基本接口，SVGElement不在我们这次的讨论范围内。


## 属性
属性|描述
--|--
`Element.attributes`|elem的属性, 这里的属性是指写在html中的如`id`,`style`的属性
`Element.children`|子元素
`Element.className`|样式
`Element.id`|id
`Element.innerHTML`|元素内的HTML
`Element.outerHTML`|包含元素本身和元素内的HTML
`Element.tagName`|元素的标签名称

## 方法

属性|描述
--|--
`EventTarget.addEventListener()`|添加事件监听器
`Element.getAttribute()`|获得属性
`Element.getAttributeNames()`|获得所有的属性名, 仅展示html中添加的, 如`id`,`style`等
`Element.querySelector()`|通过选择器来获得元素


`Element.getAttribute("innerHTML")`可以获得`innerHTML`属性, 虽然在`Element.getAttributeNames()`方法中并不会展示`innerHTML`.
`Element.getAttribute("innerHTML")`在selenium中, 直接执行获得想要的element, 而不需要再使用bs4库

```python
elem = driver.execute_script(f'return document.querySelector("p")')
df_item = pd.read_html(elem.get_attribute('outerHTML'))[0]
```


## 事件





参考:
https://developer.mozilla.org/en-US/docs/Web/API/Element