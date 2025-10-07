
# [初始化](https://revealjs.com/initialization/)



## 最佳实践

1. 使用默认模式, 不要使用嵌入模式, 嵌入模式的Css和Zoom插件都有异常.


## 默认情况下


使用`<body>`. 该模式下不需要创建`Reveal()`对象.

被绑定的reveal.js绑定的元素决定了整个展示的大小:

```html
<html>
<head>
    <link rel="stylesheet" href="dist/reveal.css" />
    <link rel="stylesheet" href="dist/theme/white.css" />
</head>
<body>
    <div class="reveal">
    <div class="slides">
        <section>Slide 1</section>
        <section>Slide 2</section>
    </div>
    </div>
    <script src="dist/reveal.js"></script>
    <script>
    Reveal.initialize();
    </script>
</body>
</html>

```

## 嵌入模式下

使用`<div class="reveal">`

```htm
<div class="reveal deck1">...</div>
<div class="reveal deck2">...</div>

<script src="dist/reveal.js"></script>
<script>
    let deck1 = new Reveal(document.querySelector('.deck1'), {
        embedded: true,
        keyboardCondition: 'focused', // only react to keys when focused
    });
    deck1.initialize();

    let deck2 = new Reveal(document.querySelector('.deck2'), {
        embedded: true,
    });
    deck2.initialize();
</script>
```



