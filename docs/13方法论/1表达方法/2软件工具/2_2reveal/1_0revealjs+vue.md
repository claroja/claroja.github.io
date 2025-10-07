# revealjs+vue

## 最佳实践

```html
<script setup>

import Reveal from 'reveal.js'
import { onMounted } from 'vue'
import RevealZoom from 'reveal.js/plugin/zoom/zoom.js';
import '/node_modules/reveal.js/dist/reveal.css'
import '/node_modules/reveal.js/dist/theme/sky.css'

onMounted(() => {
    let deck = new Reveal(document.querySelector('.reveal'));

    deck.initialize({ 
        scrollActivationWidth: null,
        embedded: true,  //嵌入模式
        keyboardCondition: 'focused', // 当聚焦时快捷键有效
        width: 1080,
        height: 720,
        plugins: [RevealZoom],
    })
})

</script>

<template>
    <div class="reveal">
        <div class="slides">
          <section>Slide 1</section>
          <section>
              <section>Slide 2.1</section>
              <section>Slide 2.2</section>
          </section>
        </div>
    </div>
</template>

<style scoped>
    .reveal {
        width: 1080px;
        height: 720px;
    }
</style>

```


    





