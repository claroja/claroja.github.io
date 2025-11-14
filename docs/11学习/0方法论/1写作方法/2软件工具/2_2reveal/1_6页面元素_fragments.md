# fragments

## 最佳实践

1. 移动的动画可以使用`position:relative`, 必要使用`grid`+reveal翻页动画的组合.

## 基础

使用class="fragment"定义碎片动画. 默认的碎片动画是fade in. 官方提供了若干[碎片动画样式](https://revealjs.com/fragments/)

    ```htm
    <p class="fragment">Fade in</p>
    <p class="fragment fade-out">Fade out</p>
    <p class="fragment highlight-red">Highlight red</p>
    <p class="fragment fade-in-then-out">Fade in, then out</p>
    <p class="fragment fade-up">Slide up while fading in</p>
    ```

## [自定义碎片动画](https://revealjs.com/fragments/#custom-fragments-4.5.0)

1. 在CSS中定义动画
    1. `.fragment.name`定义激活前的状态
    2. `.fragment.blur.visible`定义激活后的状态
    3. `.fragment.blur.current-fragment`定义激活时的状态
2. 在html中给元素添加样式. class = "fragment custom name"

    ✨custom是为了避免默认的fade-in碎片动画

下面的代码是:

1. 激活前在左侧, 不透明度为0
2. 激活后在左侧, 不透明度为0(和激活前相同)
3. 激活时在原位置, 不透明度为100%

✨并且通过transition设置了动画的效果

```css
.fragment.move {
    transform: translate(-50%, 0);
    opacity: 0%;
    transition: all 5s ease;
}

.fragment.move.visible {
    transform: translate(-50%, 0);
    opacity: 0%;

}

.fragment.move.current-fragment {
    transform: translate(0%, 0);
    opacity: 100%;
}
```

## [嵌套碎片动画](https://revealjs.com/fragments/#nested-fragments)

可以连续播放多个动画, 如果只有两个动画还是使用自定义的fragment比较方便

## [碎片动画顺序](https://revealjs.com/fragments/#fragment-order)

1. 默认碎片动画按DOM中的顺序依次展示
2. 通过在class中设置`data-fragment-index="1"`可以自定义展示顺序

## [碎片动画事件](https://revealjs.com/fragments/#events)

每次动画触发和消失, 都会触发事件

## [全局控制页面内容元素的动画](https://revealjs.com/config/)

在`Reveal.initialize()`中配置如下参数:

1. `fragments: true`. 打开全局的fragments.
2. `fragmentInURL: true`. 将当前的fragment添加到URL中.

## markdown

在MD中直接使用html的标签.

- 在行内重点展示词语, 使用`<span>`标签

    ```markdown
    测试<span class="fragment">Fade in</p>
    ```

- 重点展示某段话, 使用`<p>`标签

    ```markdown
    <p class="fragment">Fade in</p>
    ```
