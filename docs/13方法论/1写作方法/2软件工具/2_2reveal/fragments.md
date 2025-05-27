# fragments


1. 使用class="fragment"定义碎片动画.
2. 每一页幻灯片的每个碎片动画会依次展现.
3. 默认的碎片动画是fade in.
4. 官方提供了若干[碎片动画样式](https://revealjs.com/fragments/)

## [自定义碎片动画](https://revealjs.com/fragments/#custom-fragments-4.5.0)

1. 在CSS中定义动画
    1. .fragment.name定义初始状态
    2. .fragment.blur.visible定义激活状态
2. 在html中给元素添加样式. class = "fragment custom name"
    
    ✨custom是为了避免默认的fade-in碎片动画

## [嵌套碎片动画](https://revealjs.com/fragments/#nested-fragments)

需要再外围新建元素


## [碎片动画顺序](https://revealjs.com/fragments/#fragment-order)
1. 默认碎片动画按DOM中的顺序依次展示
2. 通过在class中设置data-fragment-index="1"可以自定义展示顺序



## [碎片动画事件](https://revealjs.com/fragments/#events)

每次动画触发和消失, 都会触发事件



























