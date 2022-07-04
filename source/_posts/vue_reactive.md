---
title: vue_reactive
toc: true
date: 2021-12-05 22:03:54
---
# 基本使用
[参考原文](https://v3.cn.vuejs.org/guide/reactivity-fundamentals.html)
`reactive`返回一个响应式的对象状态，
1. 该响应式转换是“深度转换”——它会影响传递对象的所有嵌套property
2. 响应式状态改变时视图会自动更新
```vue
<script setup>
import {reactive, toRefs} from "vue"
import _ from "lodash"
let test = reactive({
    a: "a",
    b: {bb: "b"},
    c: ["c", "c"],
})
/// 1. reactive中，当key对应的value是基本类型时， 直接变量赋值或解包都会失去响应式
// let a = test.a
let {a} = test //此时a是字符串，不再是响应式
// let {a} = toRefs(test) //此时a是RefImpl是响应式
console.log(a, test.a, a === test.a)
a = "aa"

/// 2. reactive中，当key对应的value是对象时，变量赋值和解包都不会失去响应式
/// 2.1 字典{}
// let b = test.b
let {b} = test // 和上一行是等价的
console.log(b, test.b, b === test.b) // 地址引用, 所以b仍然是响应式
b.bb = "bb" // 当改变b.bb的值时，也就是更改了test.b.bb

/// 2.2 列表[]
// let c = test.c
let {c} = test
console.log(c, test.c, c === test.c)
c.push("c")
setTimeout(() => {
    a = "aaa"
    b.bb = "bbb"
    c.push("c")
}, 1000)
setTimeout(() => {
    b = {bbbb: "bbbb"} //直接赋值，普通对象，没有响应式
}, 2000)
</script>
<template>
    {{ test.a }}
    <br />
    {{ test.b }}
    <br />
    {{ c }}
</template>
```


# ref和reactive转换
[参考原文](https://vuejs.org/api/reactivity-core.html#reactive)
```js
const count = ref(1)
const obj = reactive({ count })

// ref will be unwrapped
console.log(obj.count === count.value) // true

// it will update `obj.count`
count.value++
console.log(count.value) // 2
console.log(obj.count) // 2

// it will also update `count` ref
obj.count++
console.log(obj.count) // 3
console.log(count.value) // 3
```


# lodash 结合
lodash的`cloneDeep·可以用在watch里面

现在还没搞清楚这些赋值操作之间的区别。
```js
import {reactive} from "vue"
import _ from "lodash"
let test = reactive({
    a: "a",
    b: {c: "c"},
})

console.log(test, test.a, test.b)
let test2 = _.cloneDeep(test)
let a2 = _.cloneDeep(test.a)
let b2 = _.cloneDeep(test.b)
console.log(test2, a2, b2)

let test3 = test
let a3 = test.a
let b3 = test.b
console.log(test3, a3, b3)
```

# 易错点
基本常识：reactive中的最后一层，既基本类型，不是`reactive`对象
下例中:
1. `changeOne`方法证明，`reactive`中的成员作为参数传入仍然是`reactive`。
2. `changTwo`方法证明，`reactive`中的成员作为参数，仅更改其成员（不改变结构），则会继承响应式
3. `changeTwo`方法证明，如果改变`reactive`对象结构，比如直接赋值`{}`，则会失去响应式
3. `changeThree`方法证明，如果改变`reactive`成员的对象结构（直接赋值普通的object），比如直接赋值`[]`，不会失去响应式
总结起来：
1. 对`reactive`对象对应的变量直接赋值普通对象(非响应式对象)，则会失去响应式
2. 对`reactive`对象的成员变量直接赋值普通对象(非响应式对象)或做更改，不会失去响应式
```vue
<script setup>
import {reactive} from "vue"
let test = reactive({
    a: "a",
    b: ["b", "b"],
    c: {cc: "cc"},
})
console.log(test) //Proxy {a: 'a'}

function changeOne(n) {
    console.log(n) // Proxy {0: 'b', 1: 'b'}
}

function changeTwo(m) {
    m.b.push("b")
    console.log(m) // Proxy {a: 'a', b: Array(3), c: {…}}
    console.log(test) // Proxy {a: 'a', b: Array(3), c: {…}}

    m.c = {ccc: "cccc"}
    console.log(m) // Proxy {a: 'a', b: Array(3), c: {…}}
    console.log(test) // Proxy {a: 'a', b: Array(3), c: {…}}

    m = {
        a: "b",
    }
    console.log(m) // {a: 'b'}
    console.log(test) // Proxy {a: 'a'}
}

function changeThree(m) {
    m.c = ["dddd"]
    console.log(m) // Proxy {a: 'a', b: Array(3), c: {…}}
    console.log(m.c) //Proxy {0: 'dddd'}
    console.log(test) // Proxy {a: 'a', b: Array(3), c: {…}}
}
</script>
<template>
    <button @click="changeOne(test.b)">TestOne</button>
    <button @click="changeTwo(test)">TestTwo</button>
    <button @click="changeThree(test)">TestThree</button>
    {{ test }}
</template>



```


# reactive与props
1. props向子组件传递`reactive`对象的成员是引用传递。
2. 下例中使用`push`更改`list`, Vue Devtools不会自动更新，需要自己手动点击强制更新按钮

Parent.vue
```vue
<script setup>
import {reactive} from "vue"
import Child from "./Child.vue"

let data = reactive({
    a: "a",
    b: {bb: "bb"},
    c: ["c", "c"],
})
</script>
<template>
    <Child :parentProp="data.c"></Child>
</template>

```
Child.vue
```vue
<script setup>
let props = defineProps(["parentProp"])
</script>
<template>
    <button @click="props.parentProp.push('c')">Child</button>
</template>

```