# script

setup script 是vue3的一个新的语法糖。只需要在script标签中加上setup 关键字。

```htm
<script setup>
    export default {
        ...
    }
</script>
```

## 作用1: 子组件不需要注册

1. 不使用`setup`
    
    ```htm
    <script>
        import Child from '@/components/child.vue'
        export default {
            components:{
                Child
            },
        }
    </script>
    ```

2. 使用`setup`, script中不需要注册, 直接引入即可

    ```htm
    <script setup>
        // 组件只需要引入，不需要手动注册
        import Child from '@/components/child.vue'
    </script>
        ```


## 作用2: 不需要返回方法和属性

1. 不使用`setup`
    
    ```htm
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

1. 使用`setup` script中不需要返回

    ```htm
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

## 作用3: defineProps and defineEmits
    
```htm
<script setup>
    const props = defineProps({
    foo: String
    })
    
    const emit = defineEmits(['change', 'delete'])
</script>
```


## 作用4: useSlots and useAttrs

setupContext.slots和setupContext.attrs

```html
import { useSlots, useAttrs } from 'vue'
const slots = useSlots()
const attrs = useAttrs()
```

## 作用5: script setup 语法糖中reactive + toRefs+解构如何优雅呈现
    
比如下面这样，我定义了一个 reactive() 声明的对象，想在模板上响应式的使用其值，如果不使用 setup 语法糖，就可以使用 toRefs 然后配合解构 return 出去。使用 setup 语法糖的话，就可以这样

```ts
let starData = reactive({
total: 0,
stars: Array<Star>(),
})
const { total, stars } = toRefs(starData)
```


## 参考:
1. https://v3.vuejs.org/api/sfc-script-setup.html#typescript-only-features
2. https://www.cnblogs.com/goloving/p/15437343.html