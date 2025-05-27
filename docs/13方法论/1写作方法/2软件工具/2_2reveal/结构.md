# 结构

参考[markup](https://revealjs.com/markup/)
ppt的结构是`class="reveal"`>`class="slides"`>`<section>`. 在`<section>`中是每页幻灯片.


```html
<div class="reveal">
    <div class="slides">
    <section>Slide 1</section>
    <section>Slide 2</section>
    </div>
</div>
```

`<section>`可以分为横向的和纵向的

- 横向的幻灯片

    ```html
    <div class="reveal">
        <div class="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
        </div>
    </div>
    ```

- 纵向的幻灯片

    ```html
    <div class="reveal">
    <div class="slides">
        <section>Horizontal Slide</section>
        <section>
        <section>Vertical Slide 1</section>
        <section>Vertical Slide 2</section>
        </section>
    </div>
    </div>
    ```





## 其他
- 幻灯片: slides
- 纵向的: vertical