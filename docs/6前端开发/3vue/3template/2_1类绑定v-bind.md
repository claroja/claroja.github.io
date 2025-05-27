# v-bind绑定class和style




## 绑定值

```htm

<script>
const isActive = ref(true)
</script>

<div
    class="static"
    :class="{ 'active': isActive }"
>
</div>
```

`'active'`是class的名称, `isActive`是布尔值, 表示要不要绑定`active`这个class. 如果`isActive`为真, 渲染的结果是:

```htm
<div class="static active"></div>
```



## 绑定数组

```htm
<script>
const activeClass = ref('active')
const errorClass = ref('text-danger')
</script>


<template>
<div :class="[{ [activeClass]: isActive }, errorClass]"></div>
</template>
```












