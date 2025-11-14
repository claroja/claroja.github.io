# [句柄(handle)](https://vueflow.dev/guide/handle.html)

句柄是通常放置在节点边框上的小圆圈。它们用于通过将连接线从一个句柄拖到另一个句柄来连接节点，从而在节点之间建立连接 (边缘)。

常用于自定义节点.



```htm
<script setup>
import { Position, Handle } from '@vue-flow/core'

// props were passed from the slot using `v-bind="customNodeProps"`
const props = defineProps(['label'])
</script>

<template>
  <div>
    <Handle type="target" :position="Position.Top" />
    <div>{{ label }}</div>
    <Handle type="source" :position="Position.Bottom" />
  </div>
</template>


```


































