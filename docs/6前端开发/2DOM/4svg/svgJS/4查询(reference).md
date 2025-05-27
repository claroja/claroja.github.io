
# 查询


## css选择器

```js
var list = SVG.find('.someClass')
var list = SVG.find('.someClass', group)
var list = group.find('.someClass')
list.fill('#f06')
```


## 子元素查询

1. `children()`, 返回子元素列表
2. `first()`, 返回第1个子元素
3. `last()`, 返回最后1个子元素
4. `index()`, 返回子元素索引


## 父元素查询
1. `root()`, 获得svg元素
2. `parent()`

    ```js
    var draw   = SVG().addTo('#drawing')
    var nested = draw.nested().addClass('test')
    var group  = nested.group()
    var rect   = group.rect(100, 100)

    rect.parent()           //-> returns group
    rect.parent(SVG.Svg)    //-> returns nested
    nested.parent(SVG.Svg)  //-> returns draw
    rect.parent(SVG.G)      //-> returns group
    rect.parent('.test')    //-> returns nested
    ```

3. `parents()`

    ```js
    var group1 = draw.group().addClass('test')
    , group2 = group1.group()
    , rect   = group2.rect(100,100)

    rect.parents()        // returns [group2, group1, draw]
    rect.parents('.test') // returns [group2, group1]
    rect.parents(group2)   // returns [group2]
    rect.parents(group1)   // returns [group2, group1]
    ```



## 参考
1. https://svgjs.dev/docs/3.0/referencing-creating-elements/