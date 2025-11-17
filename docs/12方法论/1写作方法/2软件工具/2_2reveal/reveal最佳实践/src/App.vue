<script setup>

import Reveal from 'reveal.js'
import { onMounted } from 'vue'
import RevealZoom from 'reveal.js/plugin/zoom/zoom.js';
import '/node_modules/reveal.js/dist/reveal.css'
import '/node_modules/reveal.js/dist/theme/black.css'
import listAndImg from "./components/listAndImg.vue";
import data from "@/assets/test.json"

// 适应不同屏幕的分辨率
var screenWidth = screen.width
var screenHeight = screen.height


onMounted(() => {
  let deck = new Reveal(
    document.querySelector('.reveal'),
  );

  deck.initialize({
    width: screenWidth,
    height: screenHeight,
    center: false,
    disableLayout: true,
    plugins: [RevealZoom],
  })
})

</script>

<template>
  <div class="reveal" :style="{ width: screenWidth + 'px', height: screenHeight + 'px' }">
    <div class="slides">
      <listAndImg :data="data"></listAndImg>
    </div>
  </div>
</template>

<style scoped></style>