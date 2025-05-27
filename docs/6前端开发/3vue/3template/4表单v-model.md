# v-model




## 原理

下面的代码, 将`<template>`中`input`标签输入的值, 传递给`<script>`. 
```htm
<input
  :value="text"
  @input="event => text = event.target.value">
```

`vue`提供`v-model`来简化这个实现

```htm
<input v-model="text">
```

完整的代码如下
```htm
<script setup>
import { ref } from 'vue'

const message = ref('')
</script>

<template>
    <p>Message is: {{ message }}</p>
    <input v-model="message" placeholder="edit me" />
</template>

```



## 参考
1. https://cn.vuejs.org/guide/essentials/forms.html