
# 最佳实践

## vue + vite + reveal

通过对比[`vuepress`](https://theme-hope.vuejs.press/zh/guide/markdown/content/revealjs.html#%E6%BC%94%E7%A4%BA)的reveal幻灯片, 摸索出vue和reveal结合的最佳模式.


1. `main.js`正常
  @[code](./reveal最佳实践/src/main.js)

1. `App.vue`作为包裹标签, 要设置宽和高

  @[code](./reveal最佳实践/src/App.vue)


3. `Slide1.vue`
  1. reveal对象初始化时, 设置嵌套模式(embedded), 并指定模板(template)的嵌套对象, 嵌套对象的`class`必须是`reveal **`. 详细可参考官网对嵌套的[说明](https://revealjs.com/initialization/).

  另外, 嵌套模式会默认使用滚轮模式(scroll), 需要设置`scrollActivationWidth: null`, 使用默认模式, [参考](https://revealjs.com/scroll-view/)
  
  2. `template`中需注意最外层的是`class= "reveal **"`

    @[code](./reveal最佳实践/src(vue+vite)/components/Slide1.vue)






## vite
使用vite管理项目

```js
import 'reveal.js/dist/reveal.css'
import 'reveal.js/dist/theme/sky.css'
import './style.css'


import 'reveal.js-plugins/fullscreen/plugin'


import Reveal from 'reveal.js'
import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';

const deck = new Reveal()
deck.initialize({plugins: [ Zoom, RevealFullscreen] })

```

1. html写内容
2. main.js来导入插件, css, 以及写方法
3. styl.css来写样式

## 样式修改

### 样式导入

在`main.js`中直接导入: `import './style.css'`


### 来进行布局

```css
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 230px 230px 230px;
  grid-gap: 5px;
}



.wrapper > div {
  background-color: rgb(207, 232, 220);
}
```


## 插件
1. 本地插件导入, 有具体插件名: `import Zoom from 'reveal.js/plugin/zoom/zoom.esm.js';`

2. 三方插件导入, 没有具体插件名: `import 'reveal.js-plugins/fullscreen/plugin'`


插件的初始化统一使用:
```js
const deck = new Reveal()
deck.initialize({plugins: [ Zoom, RevealFullscreen] })

```


## 配合fullscreen来全屏



图片等元素自带了样式, 可以再`style.css`中进行个性化修改, 下面的例子是结合`import 'reveal.js-plugins/fullscreen/plugin'`插件, 图片全屏展示的例子
```css
#test {
  margin: 0;
  max-width: 100%;
  max-height: 100%;

}
```


## vue+vite+reveal(修改html, 不建议)

html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <link rel="icon" href="/favicon.ico">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
  
  </head>
  <body>
    <div class="reveal" id="app">

    </div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>


```


```vue
<script setup>

import Reveal from 'reveal.js'
import { onMounted } from 'vue'



onMounted(() => {
  console.log(`the component is now mounted.`)
  let deck = new Reveal()
  deck.initialize()
})


</script>

<template>

    <div class="slides">
        <section>Single Horizontal Slide</section>
        <section>
          <section>Vertical Slide 1</section>
          <section>Vertical Slide 2</section>
        </section>
    </div>

</template>

<style scoped>

</style>


```

```js
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import '/node_modules/reveal.js/dist/reveal.css'
import '/node_modules/reveal.js/dist/theme/sky.css'

createApp(App).mount('#app')

```


## 参考
- https://codepen.io/yoyojoma/pen/OezgbE