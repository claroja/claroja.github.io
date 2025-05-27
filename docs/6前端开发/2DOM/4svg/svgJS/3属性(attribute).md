# 属性(attribute)

## attr()

### 设置属性
```js
rect.attr({
  `fill`: null, // 删除属性
  'fill-opacity': 0.5, 
  `stroke`: '#000', 
  'stroke-width': 10
})

```


### 查询属性

```python
var x = rect.attr('x')
var attributes = rect.attr(['x', 'y'])
```



## 位置(position)
1. `move()`: 绝对位置移动, `rect.move(200, 350)`
    
    `x(), y()`
    
    1.  设置x坐标, `rect.x(200)`
    2.  获得x坐标, `var x = rect.x()`

2. `dmove()`: 相对位置移动, `rect.dmove(10, 30)`
    
    `dx(), dy()`
    
    1. 设置dx坐标, `rect.dx(200)`

3. `center()`: 通过中心移动

    `cx(), cy()`
    
    1. 设置cx坐标, `rect.cx(200)`
    2. 获得cx坐标, `var cx = rect.cx()`


## 缩放(Resizing)

1. `rect.size(200, 300)`
    
    `width(), height()`
    
    1. 设置宽度: `rect.width(200)`
    2. 获得宽度: `var width = rect.width()`

2. `radius()`, 设置圆角

    ```js
    circle.radius(10)
    ellipse.radius(10, 20)
    rect.radius(5)
    ```


## fill, stroke, opacity

1. `rect.fill({ color: '#f06', opacity: 0.6 })`
2. `rect.stroke({ color: '#f06', opacity: 0.6, width: 5 })`
3. `rect.opacity(0.5)`

## Transforming

1. 设置transform
    
    ```js
    element.transform({
    rotate: 125,
    translateX: 50,
    translateY: 100,
    scale: 3 
    })
    ```


    1. translation: 
        1. `translate: {x: 50, y: 50}`, 
        2. `translate: [50, 50]`, 
        3. `translateX: 50`, 
        4. `translateY: 50`, 
        5. `tx: 50`, 
        6. `ty: 50`
    2. rotate: `rotate: 50`
    3. scale: 
        1. `scale: 2`, 
        2. `scale: [2,2]`, 
        3. `scaleX: 2`, 
        4. `scaleY: 2`
    4. shear/skew: 
        1. `skew: [10, 10]`, 
        2. `skewX: 10`, 
        3. `skewY: 10`, 
        4. `shear: 3`
    5. flip: 
        1. `both`, 
        2. `true`, 
        3. `x`, 
        4. `y`
    6. origin: 
        1. `origin: {x: 50, y: 50}`, 
        2. `origin: [50, 50]`, 
        3. `origin: 50`, 
        4. `originX: 50`, 
        5. `originY: 50`, 
        6. `ox: 50`, 
        7. `oy: 50`
        8. origin can also be a up to 2 words speciying the corners of the element: center, top, bottom, left, right
    7. position: 
        1. `position: {x: 50, y: 50}`, 
        2. `position: [50, 50]`, 
        3. `positionX: 50`, 
        4. `positionY: 50`, 
        5. `px: 50`, 
        6. `py: 50`
        
        ✨absolute position of the origin after all transformations are applied

    8. relative: 
        1. `relative: {x: 50, y: 50}`, 
        2. `relative: [50, 50]`, 
        3. `relativeX: 50`, 
        4. `relativeY: 50`, 
        5. `rx: 50`, 
        6. `ry: 50`

        ✨relative position of the origin after all transformations are applied

2. 获得transform

    返回对象包含属性:
    
    1. translateX (translation on the x-axis)
    2. translateY (translation on the y-axis)
    3. skewX (calculated skew on x-axis)
    4. skewY (calculated skew on y-axis)
    5. shear (calculated sher on x-axix)
    6. scaleX (calculated scale on x-axis)
    7. scaleY (calculated scale on y-axis)
    8. rotate (calculated rotation)
    9. originX (0 for this usecase)
    10. originY (0 for this usecase)
    11. -a-f (matrix data)


## Styles


1. 设置css: `element.css({ cursor: 'pointer', fill: '#f03' })`
2. 获得css: `element.css()`

1. 隐藏元素: `element.hide()`
2. 显示元素: `element.show()`

## Class Names

1. 添加class: `element.addClass('pink-flower')`
2. 获得class列表: `element.classes()`
3. 判断是否包含class: `element.hasClass('purple-rain')`
4. 删除class: `element.removeClass('pink-flower')`
5. ??: `element.toggleClass('pink-flower')`





## Document Tree



1. add()

    ```js
    var rect = draw.rect(100, 100)
    var group = draw.group()
    group.add(rect) //-> returns group
    ```

2. addTo(), `rect.addTo(group) //-> returns rect`
3. clone(), `var clone = rect.clone()`
4. put(), `group.put(rect) //-> returns rect`
5. putIn(), `rect.putIn(group) //-> returns group`
6. remove(), `rect.remove()`
7. replace(), `rect.replace(draw.circle(100))`
8. toParent(), toRoot(), `rect.toParent(group) // looks the same as before`
9. ungroup()
    ```js
    group.rect(100, 200)
    group.circle(4)
    group.transform({rotate: 20}).ungroup()
    // group is deleted, rect and circle both have rotate: 20
    ```
10. flatten(), 删除内部的嵌套分组, `group.flatten(container)`


## Arranging
1. after(), 在后方加入元素, `rect.after(circle)`
2. before(), 在前方加入元素, `rect.before(circle)`
3. insertAfter(), , `rect.insertAfter(circle)`
4. insertBefore(), , `rect.insertBefore(circle)`
5. back(), 将元素移到最后, `rect.back()`
6. backward(), 将元素向后移动1位, `rect.backward()`
7. front(), 将元素移到最前, `rect.front()`
8. forward(), 将元素向前移动1位, `rect.forward()`
9. next(), 获得下一个兄弟元素, `rect.next()`
10. position(), 获得自己在兄弟元素的位置, `rect.position()`
11. previous(), 获得之前的兄弟元素, `rect.previous()`
12. siblings(), 获得所有的兄弟元素包括自己, `rect.siblings()`



## Geometry

1. point(), 将屏幕坐标转换为元素坐标, `var point = path.point(e.pageX, e.pageY) // {x, y}`
2. inside(), 判断点是否在元素内, 

    ```js
    var rect = draw.rect(100, 100).move(50, 50)

    rect.inside(25, 30) //-> returns false
    rect.inside(60, 70) //-> returns true
    ```
3. bbox(), 获得元素绝对位置边框, `element.bbox()`
4. rbox(), 获得元素相对位置边框, `element.rbox(drawing)`
5. viewbox()
    1. 设置viewbox, `drawing.viewbox(10, 10, 500, 600)`
    2. 获得viewbox, `drawing.viewbox()`









