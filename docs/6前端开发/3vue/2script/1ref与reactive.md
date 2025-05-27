# 响应式ref

ref是reference的简称. `ref()`会自动推断参数的类型.
1. 如果是基础类型(num, str, bool), 在`<script>`脚本中, 需要使用`.value`来取值; 在`template`中, 则不需要
2. 如果是符合类型(object, list), 底层是调用`reactive()`

## 基础类型
```html
<script setup>
    import { ref } from 'vue'

    const count = ref(0)

    function increment() {
    count.value++
    }
</script>

<template>
    <button @click="count++">
        {{ count }}
    </button>
    
    <button @click="increment">
        {{ count }}
    </button>
</template>
```

## 复合类型

```js
import { ref } from 'vue'

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar']
})

function mutateDeeply() {
  // 以下都会按照期望工作
  obj.value.nested.count++
  obj.value.arr.push('baz')
}
```




# 参考:
1. https://cn.vuejs.org/guide/essentials/reactivity-fundamentals.html