<!--
适用于展示有序的列表, 整个展示流程是:
1. 仅显示列表中的文字
2. 文字向右滑动
3. 循环展示列表中的每一个子项内容, 每一个子项会变绿, 且在左侧对应显示图片, 图片可点击.

该组件需要传入的参数是:
1. 标题名
2. 列表, 元素是字符串和对应的图片

-->

<script setup>

const { data } = defineProps(['data'])
var { title, subTitles } = data

</script>

<template>
  <section>
    <div
      style="width: 100%;height: 100%; padding-top: 2.5%; display: grid;grid-template-columns: 2fr 1fr;grid-template-rows: 10% 80%;row-gap: 0%;justify-items: center;align-items: center;">

      <!-- 标题 -->
      <div style="grid-column: 1/3;">
        <h3>{{ title }}</h3>
      </div>

      <!-- 左侧图片 -->
      <div class="r-stack" style="width:100%; height: 100%;">
        <img v-for="(subTitle, index) in subTitles" data-preview-image data-preview-fit="contain" class="fragment"
          :data-fragment-index="index + 1" :src="subTitle.imgUrl"
          :style="{ position: 'relative', top: 5 * index + '%', width: '90%', height: '70%' }" />
        <img style="visibility: hidden;" />
      </div>

      <!-- 右侧文字 -->
      <div>
        <ul class="fragment custom moveRight" data-fragment-index="0">
          <li v-for="(subTitle, index) in subTitles" class="fragment highlight-current-green"
            :data-fragment-index="index + 1">{{ subTitle.name }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>



<style scoped>
.fragment.moveRight {
  position: relative;
  right: 220%;
}

.fragment.moveRight.visible {
  position: relative;
  right: 0%;
}

section {
  height: 100%;
  width: 100%;
}
</style>
