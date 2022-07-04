参考：https://vuejs.org/api/sfc-css-features.html

# vue控制style的两种写法
1. 引用变量的方式，注意是普通对象的写法
    - 间隔符号是`,`
    - 所有的值(value)都是字符串
    - 多字母的属性遵循的是驼峰命名 `backgroundColor`
2. 直接书写`style`
    - 间隔符号是`;`
    - 所有的值都不需要用引号，既不是字符串
    - 多字母的属性遵循的是横杠命名
而无论哪种方式都遵循`key:value`的写法 `background-color`
```vue
<script setup>
let style = reactive({
    width: "50px", // 不能写成 width:50, 纯数字无法解析
    backgroundColor: "red",
})
</script>
<template>
<div :style="style">
<div style="width: 50px; background-color: red;">
</template>
```




# 数字与px
vue中
- `div`等普通元素 不能将width的`数字`自动转为css中的`数字+px`，形式，需要自己手动处理
- `svg`元素及其内部元素 可以将width`数字`自动转换为`数字+px`
```vue
<script setup>
import {reactive} from "vue"
let style = reactive({
    width: "50px", // 不能写成 width:50, 纯数字无法解析
    backgroundColor: "red",
})
</script>
<template>
    <div :style="style">haha</div>
</template>
```

3. `<style>`中可以使用`v-bing`来绑定`script`中的变量

```vue
<script setup>
import {reactive} from "vue"
let style = reactive({
    width: "50px", // 不能写成 width:50, 纯数字无法解析
    backgroundColor: "red",
})

let num = reactive({
    height: 50,
})
</script>
<template>
    <div class="test" :style="style">haha</div>
</template>
<style scoped>
.test {
    /* height: v-bind("num.height") px; */
    height: v-bind("num.height+'px'");
}
</style>

```