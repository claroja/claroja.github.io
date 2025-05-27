# 容器(container)

1. SVG.Svg: 
    1. SVG(): `var draw = SVG().addTo('#drawing')  # 创建svg元素`  
    2. nested(): `var nested = draw.nested()  # 在svg中创建嵌套svg元素`

2. SVG.G
    
    可以将元素加入到一个组(group)内一起控制. 注意组没有`x`, `y`等属性, 如果需要控制`x`, `y`属性可以使用`nested()`方法.
    
    
    ```js
    var group = draw.group()
    group.path('M10,20L30,40')  # 在组里创建一个元素
    group.add(rect)  # 添加一个元素进组
    ```
3. SVG.Symbol

    创建Symbol分组, 和g不同的是, symbol只有在使用时才显示.

    ```js
    var symbol = draw.symbol()
    symbol.rect(100, 100).fill('#f09')

    var use  = draw.use(symbol).move(200, 200)
    ```

4. SVG.Defs

    `var defs = draw.defs()`


5. SVG.A
    
    创建一个超链接

    ```js
    var link = draw.link('http://svgdotjs.github.io/')
    var rect = link.rect(100, 100)
    ```

## 参考
1. https://svgjs.dev/docs/3.0/container-elements











