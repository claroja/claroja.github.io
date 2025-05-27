# 元素(element)


## 创建元素

两种方式

```js
var rect = SVG('<rect width="100" height="100">')
var rect = new SVG.Rect()
```

## 元素类型

1. 矩形: SVG.Rect: `var rect = draw.rect(100, 100)`
2. 圆形: SVG.Circle: `var circle = draw.circle(100)`
3. 椭圆: SVG.Ellipse: `var ellipse = draw.ellipse(200, 100)`
4. 直线: SVG.Line, `var line = draw.line(0, 0, 100, 150)`
5. 折线: SVG.Polyline, `var polyline = draw.polyline('0,0 100,50 50,100')`
6. 多边形: SVG.Polygon, `var polygon = draw.polygon('0,0 100,50 50,100')`
7. 路径: SVG.Path, `draw.path('M0 0 H50 A20 20 0 1 0 100 50 v25 C50 125 0 85 0 85 z')`
8. 文字: 
    1. SVG.Text, `var text = draw.text("Lorem.")`
    2.  路径文字: SVG.TextPath, `var textpath = draw.textPath('Some Text along a path', 'M 100 200 C 200 100 300 0 400 100 C 500 200 600 300 700 200 C 800 100 900 100 900 100')`
    3.  文字格子: SVG.Tspan, `text.tspan('spannened')`
9. 图片: SVG.Image, `var image = draw.image('/path/to/image.jpg')`
10. 渐变: SVG.Gradient

    ```js
    var gradient = draw.gradient('linear', function(add) {
    add.stop(0, '#333')
    add.stop(1, '#fff')
    })
    rect.fill(gradient)  // rect.attr({ fill: gradient })
    ```

11. :SVG.Pattern

    ```python
    var pattern = draw.pattern(20, 20, function(add) {
    add.rect(20,20).fill('#f06')
    add.rect(10,10)
    add.rect(10,10).move(10,10)
    })

    rect.fill(pattern)  # rect.attr({ fill: pattern })
    ```

12. 遮罩: SVG.Mask

    ```javascript
    var ellipse = draw.ellipse(80, 40).move(10, 10).fill('#fff')
    var mask = draw.mask().add(ellipse)
    rect.maskWith(mask)
    ```

13. 裁剪: SVG.ClipPath

    ```javascript
    var ellipse = draw.ellipse(80, 40).move(10, 10)
    rect.clipWith(ellipse)
    ```

14. 快捷方式: SVG.Use

    源元素变化时, 快捷方式会跟着变化

    ```python
    var rect = draw.rect(100, 100).fill('#f09')
    var use  = draw.use(rect).move(200, 200)
    ```

15. 箭头: SVG.Marker


## 参考
1. https://svgjs.dev/docs/3.0/referencing-creating-elements/
2. 