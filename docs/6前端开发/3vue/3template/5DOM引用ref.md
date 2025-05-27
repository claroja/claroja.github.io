





```htm
<script setup>
    import { useTemplateRef, onMounted } from 'vue'

    // 第一个参数必须与模板中的 ref 值匹配
    const input = useTemplateRef('my-input')

    onMounted(() => {
    input.value.focus()
    })
</script>

<template>
    <input ref="my-input" />
</template>
```









## 参考
1. https://cn.vuejs.org/guide/essentials/template-refs.html

