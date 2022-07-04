---
title: vue_props
toc: true
date: 2021-10-25 22:03:54
---


下面的例子中：
x是直接传值，所有的都认为是string
y是bind绑定，此时传值是number
z是bind绑定，此时传值是string
Parent.vue
```vue
<script setup>
import Child from "./Child.vue"
</script>
<template>
    <Child x="10" :y="10" :z="'10'"></Child>
</template>
```

Child.vue
```vue
<script setup>
let props = defineProps(["x", "y", "z"])

console.log(typeof props.x) // string
console.log(typeof props.y) // number
console.log(typeof props.z) // string
</script>
```

## 应用子向父传值
子组件调用父组件的方法(父组件通过props将它的方法传入给子组件), 来让父组件的方法, 使用子组件的值.
App.vue
```vue
<template>
		<!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
		<Demo :getDemoValue="getDemoValue"/>
</template>

<script>
	import Demo from './components/Demo'
	export default {
		name: 'App',
		components:{Demo},
		setup(){
			function getDemoValue(name){
				console.log('App受到子组件的传值: ', name)
			}
			return {
				getDemoValue
			}
		}
	}
</script>
```
Demo.vue
```vue
<template>
	<button @click="test">Demo组件的test方法, 该方法调用了父组件</button>
</template>

<script>
	export default {
		name:'School',
		props:['getDemoValue'],
		setup(props, context){
			let demo="demo"
			function test(){ //f
				props.getDemoValue(demo)
			}
			//返回一个对象（常用）
			return {
				test
			}
		}
	}
</script>
```




# vue2-html
1. 组件中使用`props`属性, 向外暴露属性, 以便外部向组件内传值.
2. `props`里的属性可以直接使用, 默认就已经放在`data()`中

# 样例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>组件</title>
        <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<!-- 第三步：编写组件标签 -->
			<Student name="wang" sex="man" :age="19"></Student>
		</div>
	</body>
	<script type="text/javascript">
		//第一步：创建school组件
		const Student = Vue.extend({//Vue.extend可以省略
            name:'Student',
			template:`
                <div>
                    <h1>{{msg}}</h1>
                    <h2>学生姓名：{{name}}</h2>
                    <h2>学生性别：{{sex}}</h2>
                    <h2>学生年龄：{{myAge+1}}</h2>
                    <button @click="updateAge">修改年龄</button>
                </div>
			`,
            data() {
                console.log(this)
                return {
                    msg:'学生',
                    myAge:this.age
                }
            },
            methods: {
                updateAge(){
                    this.myAge++
                }
            },
            //简单声明接收
            props:['name','age','sex'] 

            //接收的同时对数据进行类型限制
            /* props:{
                name:String,
                age:Number,
                sex:String
            } */

            //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制
            // props:{
            //     name:{
            //         type:String, //name的类型是字符串
            //         required:true, //name是必要的
            //     },
            //     age:{
            //         type:Number,
            //         default:99 //默认值
            //     },
            //     sex:{
            //         type:String,
            //         required:true
            //     }
            // }
		})
		
		//创建vm
		new Vue({
			el:'#root',
			data:{
				msg:'你好啊！'
			},
			components:{
				Student,
			}
		})

	</script>
</html>
```