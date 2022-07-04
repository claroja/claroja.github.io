[官网](https://pinia.vuejs.org/)

1. state和getters 可以使用`storeToRefs`来解构. 注意pinia中的actions不能解构出来.
2. getter和computed很像, 都是由其他值计算出来的值. 他本质是个值, 不是方法.


```js
// counter.js
import {defineStore} from "pinia"

export const useCounterStore = defineStore("counter", {
    state: () => ({count: 0}),
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
        increment() {
            this.count++
        },
    },
})
```

```vue
// test.vue
<script setup>
import {reqUserLogin} from "@/api"
import {useCounterStore} from "@/stores/counter"
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const {count,double} = storeToRefs(store) //结构state和getter, 不能结构action

function testStore() { 
    store.increment()
}

</script>
<template>
    <button @click="test">test</button>
    <button @click="testStore">{{ count }}</button>
    <button>{{ double }}</button>
</template>
<style></style>
```



https://pinia.vuejs.org/core-concepts/#using-the-store