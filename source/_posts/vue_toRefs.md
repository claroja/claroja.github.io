---
title: vue_toRefs
toc: true
date: 2021-10-25 22:03:54
tags:
---
# vue3-cli
- 应用: 要将响应式对象中属性单独提供给外部使用时
- 作用: 创建一个 ref 对象，其value值指向另一个对象中的某个属性。
- 语法: ```const name = toRef(person,'name')```
- 扩展: ```toRefs``` 与```toRef```功能一致，但可以批量创建多个 ref 对象，语法：```toRefs(person)```



```vue
<template>
	<h4>{{person}}</h4>
	<h2>姓名: {{name}}</h2>
	<h2>年龄: {{age}}</h2>
	<h2>薪资: {{job.j1.salary}}K</h2>
	<button @click="name+='~'">修改姓名</button>
	<button @click="age++">增长年龄</button>
	<button @click="salary++">涨薪(不使用refs)</button>
	<button @click="job.j1.salary++">涨薪(使用refs)</button>
</template>

<script>
	import {ref,reactive,toRef,toRefs} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
			let person = reactive({
				name:'张三',
				age:18,
				job:{
					j1:{
						salary:20
					}
				}
			})
			// const name1 = person.name
			// console.log('%%%',name1)
			// const name2 = toRef(person,'name')
			// console.log('####',name2)
			//返回一个对象（常用）
			return {
				person,
				// name:toRef(person,'name'),
				// age:toRef(person,'age'),
				// salary:toRef(person.job.j1,'salary'),
				...toRefs(person) // ...相当于python中的**, 就是将字典展开
			}
		}
	}
</script>
```

# 深入理解
`toRefs`是将一个`reactive({})`里面的第一层级转换成了RefImpl对象.
实践中在`<script>`, 中我们还是使用`object.key`来处理响应式数据, 而 不要用RefImpl.value来处理.
在`return`时使用`toRefs`来简化渲染, 而不使用`object.key`

```vue
<template>
<input type="text" v-model="name"> 
<p v-text="name"></p>
</template>

<script lang="ts">
    import {reactive, toRefs} from 'vue'
    export default {
        name: "test",
        setup(){
            let data = reactive({
                lis:[],
            })
            const { lis} = toRefs(data)
            console.log(lis) //已经转换成了:ObjectRefImpl {_object: Proxy, _key: 'lis', _defaultValue: undefined, __v_isRef: true}
            lis.value.push() //所以需要使用.value来访问列表的具体的值
            data.lis.push() //当使用data外层的对象时, 则不需要使用value
            return {
                ...toRefs(data) //在页面渲染时, 不需要使用.value
            }
        },
    }
</script>
```


# 错误
```vue
<template>
<input type="text" v-model="name"> 
<p v-text="name"></p>
</template>

<script lang="ts">
    import {reactive, toRefs} from 'vue'
    export default {
        name: "test",
        setup(){
            let name = "wang"
            let age = 10
            console.log({name})
			watch(age,()=>{})//此处报错， 因为不是响应式的
            return {
                ...toRefs(reactive({
                    name,
                    age
                }))
            }
        },
    }
</script>
```
