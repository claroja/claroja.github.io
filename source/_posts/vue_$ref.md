---
title: vue_ref
toc: true
date: 2021-10-25 22:03:54
---
[官网](https://vuejs.org/guide/essentials/template-refs.html#accessing-the-refs)


ref属性是vue用来获得相应元素的设置的,免去了用getElementById方法,不直接操作dom,提高效率

例子:

首先在`setup()`中定义一个`ref`类型的变量`root`, 然后`return`出去, 会自动匹配`<template>`中的`ref`属性的值.
注意`root.value`是`element object`, 如果想获得其中的值，需要`root.value.text`
```vue
<script setup>
import {onMounted, ref} from "vue"

const el = ref()

onMounted(() => {
    console.log(el.value)
})
</script>
<template>
    <!-- 注意这里的ref是不需要v-bind的 -->
    <button ref="el">{{ el }}</button>
</template>
```

另一种写法：
```vue
<script setup>
import {onMounted} from "vue"

const state = {
    el: null,
}

onMounted(() => {
    console.log(state.el)
})
</script>
<template>
    <!-- 注意这里的ref是不需要v-bind的 -->
    <button
        :ref="
            (el) => {
                state.el = el
            }
        "
    ></button>
</template>

```


参考:
https://v3.vuejs.org/guide/composition-api-template-refs.html#usage-with-jsx


# vue2-html

# 样例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>

<body>
    <div id="app">
        <input type="button" value="获取元素" @click="getEle">
        <p ref='myp'>xxx</p>
    </div>

    <script>
        var vm = new Vue({
            el: '#app',
            methods: {
                getEle() {
                    alert(this.$refs.myp.innerText)
                }
            }
        })
    </script>
</body>

</html>
```