---
title: vue_watch
toc: true
date: 2021-10-25 22:03:54
tags:
---
# vue3-cli

## 简单使用

```js
watch(props, () => {
    console.log(props)
})
```
- props是要监听的对象
- () 是变动后回调的方法

## 场景应用
1. 监听组件传入参数变化, 做到动态传参
```js
// <MyComponent greeting-message="hello" />
import {watch} from "vue"
const props = defineProps(["greeting-message"])
watch(props, () => {
    console.log(props)
	console.log(props.greeting-message)
})
```


## 详细解释
- 作用: 当监视的数据发生变化时, 触发对应的方法
- 语法: `watch(sum,(newValue,oldValue)=>{},options)`
	- 参数1: 要监视的数据, 如果是多个可以传入列表
	- 参数2: 回调函数, 可以对新数据和老数据进行处理
	- 参数3: 选项, 比如immediate:true, 表示加载后就立即调用一次
- 备注:
	- computed和watch之间的区别：
		1.computed能完成的功能，watch都可以完成。
		2.watch能完成的功能，computed不一定能完成，例如：watch可以进行异步操作。
	- 两个小“坑”：
		- 监视reactive定义的响应式数据时：oldValue无法正确获取、强制开启了深度监视（deep配置失效）。
		- 监视reactive定义的响应式数据中某个属性时：deep配置有效。
- 拓展:
	- Vue2中的watch默认不监测对象内部值的改变（一层）
	- Vue2配置deep:true可以监测对象内部值改变（多层, 深度监视）

```vue
<template>
	<h2>当前求和为：{{sum}}</h2>
	<button @click="sum++">点我+1</button>
	<hr>
	<h2>当前的信息为：{{msg}}</h2>
	<button @click="msg+='！'">修改信息</button>
	<hr>
	<h2>姓名：{{person.name}}</h2>
	<h2>年龄：{{person.age}}</h2>
	<h2>薪资：{{person.job.j1.salary}}K</h2>
	<button @click="person.name+='~'">修改姓名</button>
	<button @click="person.age++">增长年龄</button>
	<button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
import {ref,reactive,watch} from 'vue'
export default {
    name: 'Demo',
    setup(){
        //数据
        let sum = ref(0)
        let msg = ref('你好啊')
        let person = reactive({
            name:'张三',
            age:18,
            job:{
                j1:{
                    salary:20
                }
            }
        })

        //情况一：监视ref所定义的一个响应式数据, 注意没有使用value
        // watch(sum,(newValue,oldValue)=>{
        // 	console.log('sum变了',newValue,oldValue)
        // },{immediate:true})

        //情况二：监视ref所定义的多个响应式数据
        // watch([sum,msg],(newValue,oldValue)=>{
        // 	console.log('sum或msg变了',newValue,oldValue)
        // },{immediate:true}) 

        
        // 情况三：监视reactive所定义的一个响应式数据的全部属性
        // 	1.注意：此处无法正确的获取oldValue
        // 	2.注意：强制开启了深度监视（deep=false配置无效）
        // watch(person,(newValue,oldValue)=>{
        // 	console.log('person变化了',newValue,oldValue)
        // },{deep:false}) //此处的deep配置无效

        // 情况三：补充，使用lodash获得oldValue
		// import _ from "lodash";
        // watch(() => _.cloneDeep(person),(newValue,oldValue)=>{
        // 	console.log('person变化了',newValue,oldValue)
        // },{deep:false}) //此处的deep配置无效
	

        //情况四：监视reactive所定义的一个响应式数据中的某个属性
        // watch(()=>person.name,(newValue,oldValue)=>{
        // 	console.log('person的name变化了',newValue,oldValue)
        // })

        //情况五：监视reactive所定义的一个响应式数据中的某些属性
        // watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
        // 	console.log('person的name或age变化了',newValue,oldValue)
        // })

        //特殊情况
        // watch(()=>person.job,(newValue,oldValue)=>{
        // 	console.log('person的job变化了',newValue,oldValue)
        // },{deep:true}) //此处由于监视的是reactive素定义的对象中的某个属性，所以deep=true配置有效

        //返回一个对象（常用）
        return {
            sum,
            msg,
            person
        }
    }
}
</script>
```



# vue2-html
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>watch</title>
        <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
	</head>
	<body>
		<div id="root">
			姓：<input type="text" v-model="firstName"> <br/><br/>
			名：<input type="text" v-model="lastName"> <br/><br/>
			全名：<span>{{fullName}}</span> <br/><br/>
		</div>
	</body>

	<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				firstName:'wang',
				lastName:'xin',
				fullName:'wang-xin'
			},
			watch:{
				firstName(val){
					setTimeout(()=>{
						console.log(this)
						this.fullName = val + '-' + this.lastName
					},1000);
				},
				lastName(val){
					this.fullName = this.firstName + '-' + val
				}
			}
		})
	</script>
</html>
```