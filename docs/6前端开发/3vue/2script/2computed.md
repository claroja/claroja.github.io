# computed


- 与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
- 在computed里包含的变量,一但发生变化都会被监听到, computed可以看成是高级的watch, watch更看重数据改变的过程, computed更看重最终更改的结果

语法: `computed(get(),set())` 

```html
<template>
	姓：<input type="text" v-model="person.firstName">
	<br>
	名：<input type="text" v-model="person.lastName">
	<br>
	全名：<input type="text" v-model="person.fullName">
</template>

<script>
import {reactive,computed} from 'vue'
export default {
    name: 'Demo',
    setup(){
        //数据
        let person = reactive({
            firstName:'张',
            lastName:'三'
        })
        //计算属性——简写（没有考虑计算属性被修改的情况）
        /* person.fullName = computed(()=>{
            return person.firstName + '-' + person.lastName
        }) */
        //计算属性——完整写法（考虑读和写）
        person.fullName = computed({// 因为person是reactive定义的, 所以添加的属性也是reactive的
            get(){ //当在firstname和lastname修改时触发
                return person.firstName + '-' + person.lastName
            },
            set(value){  //当在fullname修改时触发
                const nameArr = value.split('-')
                person.firstName = nameArr[0]
                person.lastName = nameArr[1]
            }
        })

        //返回一个对象（常用）
        return {
            person
        }
    }
}
</script>
```


## 参考
1. https://cn.vuejs.org/guide/essentials/computed.html