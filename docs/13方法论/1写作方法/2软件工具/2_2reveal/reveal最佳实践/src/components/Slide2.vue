<script setup>

    import Reveal from 'reveal.js'
    import { onMounted } from 'vue'
    import '/node_modules/reveal.js/dist/reveal.css'
    import '/node_modules/reveal.js/dist/theme/sky.css'

    onMounted(() => {
    console.log(`the component is now mounted.`)
    let deck = new Reveal(
        document.querySelector('.deck2'),
        {
        scrollActivationWidth: null,
        embedded: true,
        keyboardCondition: 'focused' // only react to keys when focused
        }
    );

    deck.initialize()
    })


</script>

<template>
    <div class="reveal deck2">

      <div class="slides">
          <section>Single Horizontal Slide</section>
          <section>
            <section>Vertical Slide 1</section>
            <section>Vertical Slide 2</section>
          </section>
      </div>

    </div>

</template>

<style scoped>



</style>
