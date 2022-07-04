---
title: vue-computed
toc: true
date: 2021-10-25 22:03:54
---
[官网](https://vuejs.org/api/reactivity-core.html#computed)




作用:要用的属性不存在，要通过已有属性计算得来，**相当于在data中添加了一个属性**。
语法: `computed(get(),set())`
备注: 
- 与methods实现相比，内部有缓存机制（复用），效率更高，调试方便。
- 在computed里包含的变量,一但发生变化都会被监听到, computed可以看成是高级的watch, watch更看重数据改变的过程, computed更看重最终更改的结果

```vue
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

# vue2-html
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>

<body>
    <div id="computed">
        <input type="text" v-model="firstname" >+
        <input type="text" v-model="lastname" >=
        <input type="text" v-model="fullname">
    </div>
    <script>
        var computed = new Vue({
            el: '#computed',
            data:{
                firstname: '',
                lastname: '',
            },
            computed:{
                //其他方法可以通过this.fullname来使用
                fullname: function(){
                    return this.firstname + this.lastname
                }
            }
        })
    </script>
</body>
</html>
```