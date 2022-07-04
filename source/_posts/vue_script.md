---
title: vue_script
toc: true
date: 2021-10-25 22:03:54
tags:
---
setup script 是vue3的一个新的语法糖，用起来特别简单。只需要在script标签中加上setup 关键字。
```vue
<script setup>
    export default {
        ...
    }
</script>
```

1. 子组件不需要注册

```vue
    <script>
        import Child from '@/components/child.vue'
        export default {
            components:{
                Child
            },
        }
    </script>
```
setup script中不需要注册, 直接引入即可

```vue
<script setup>
    // 组件只需要引入，不需要手动注册
    import Child from '@/components/child.vue'
</script>
```

2. 不需要返回方法和属性

```vue
<script>
    import { reactive } from 'vue';
    export default { 
        setup(){
            const state = reactive({
                count:0;
            })
            const handleClick = () => {
                state.count++
            }
            return {
                state,
                handleClick
            }
        }
    }
</script>
```
setup script中不需要返回

```vue
<script setup>
    import { reactive,ref,watch } from 'vue';
    const state = reactive({
        count:0;
    })
    const handleClick = () => {
        state.count++;
    }
</script>
```

3. defineProps and defineEmits
```vue
<script setup>
const props = defineProps({
  foo: String
})
const emit = defineEmits(['change', 'delete'])
</script>
```
4. useSlots and useAttrs
setupContext.slots and setupContext.attrs
```vue
import { useSlots, useAttrs } from 'vue'

const slots = useSlots()
const attrs = useAttrs()
```
5. script setup 语法糖中reactive + toRefs+解构如何优雅呈现
比如下面这样，我定义了一个 reactive() 声明的对象，想在模板上响应式的使用其值，如果不使用 setup 语法糖，就可以使用 toRefs 然后配合解构 return 出去。使用 setup 语法糖的话，就可以这样
```ts
let starData = reactive({
  total: 0,
  stars: Array<Star>(),
})
const { total, stars } = toRefs(starData)
```
参考:
https://v3.vuejs.org/api/sfc-script-setup.html#typescript-only-features
https://www.cnblogs.com/goloving/p/15437343.html