# v-bind绑定style

## 绑定值
`:style`对应的是 HTML 元素的 style 属性. 

注意`template`中的`fontSize`
1.  在CSS标准中是kebab-cased, 既`font-size`, 这里Vue做了自动转换, 当然可以写成`font-size`

```htm
<script>
    const activeColor = ref('red')
    const fontSize = ref(30)
</script>

<template>
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
</template>
```

## 绑定对象


```htm
<script>
    const styleObject = reactive({
    color: 'red',
    fontSize: '30px'
    })
</script>

<template>
    <div :style="styleObject"></div>
</template>
```







## 数字与px

1.  `div`等普通元素 不能将width的`数字`自动转为css中的`数字+px`，形式，需要自己手动处理
2.  `svg`元素及其内部元素 可以将width`数字`自动转换为`数字+px`

```htm
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


## 引入全局样式

1. 通过public文件夹下的`index.html`引入: `<link rel="stylesheet" href="/reset.css">`
2. 在`main.js`中直接使用`import 'element-plus/dist/index.css'`来引入



## 参考
1. https://vuejs.org/api/sfc-css-features.html
2. https://cn.vuejs.org/guide/essentials/class-and-style









