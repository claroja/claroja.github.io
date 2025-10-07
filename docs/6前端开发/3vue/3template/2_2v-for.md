# v-for

## 最佳实践

### [基础使用](https://cn.vuejs.org/guide/essentials/list#v-for)

```htm
<script>
    const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
</script>

<template>
    <li v-for="item in items">
        {{ item.message }}
    </li>
</template>


```


```htm


<script>
    const items = ref([{ message: 'Foo' }, { message: 'Bar' }])
</script>

<template>
    <li v-for="(item, index) in items">
    {{ parentMessage }} - {{ index }} - {{ item.message }}
    </li>
</template>




```











## 参考

1. <https://cn.vuejs.org/guide/essentials/list.html>
2. <https://github.com/vuejs/core/issues/1172>
3. <https://stackoverflow.com/questions/43999618/how-to-define-a-temporary-variable-in-vue-js-template>
