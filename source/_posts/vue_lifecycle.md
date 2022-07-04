---
title: vue_lifecycle
toc: true
date: 2021-10-25 22:03:54
---
[官方文档](https://vuejs.org/guide/essentials/lifecycle.html)
组件的运行顺序是：
1. 先顺序执行setup里面的代码。
2. 遇到lifecycle 钩子函数，会注册其中的函数（注意，钩子函数中的函数此时并未执行，会在生命周期具体时间段调用）。
2.1. onBeforeMount：完成setup中的代码后，Dom tree创建之前
2.1. onMounted：1. 所有子组件全部挂载完毕；2. 它自己的Dom tree已经创建完成，且挂载到父组件
	主要用来获得dom中的元素，因为在setup中的代码运行时，Dom tree还没加载，无法获得。

注意：
1. setup中如果有异步代码，可使用await变成同步。[参考官方文档](https://vuejs.org/guide/built-ins/suspense.html#async-setup)
2. 当setup中存在await时，会导致此组件渲染出现问题，需要在父组件中使用`<suspend>`标签嵌套，[参考文档](https://www.trpkovski.com/2021/09/25/suspense-feature-in-vue-3-with-sfc-script-setup/)
3. 钩子函数中的函数此时并未执行，会在生命周期具体时间段调用
4. 钩子函数的第一个函数参数，可以使用async修饰，里面调用的方法可以使用await保持同步


注意[2]样例

Child.vue
```vue
<script setup>
let data = await axios.get("localhost/data")
</script>
<template>
<div>{{data}}</div>
</template>
```

Parent.vue
```vue
<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<Suspense>
  <HelloWorld />
</Suspense>
</template>
```


# vue3-cli
常用的生命周期钩子：
    1.onMounted: 发送ajax请求、启动定时器、绑定自定义事件、订阅消息等【初始化操作】。
    2.onBeforeUnmount: 清除定时器、解绑自定义事件、取消订阅消息等【收尾工作】。

- Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有有两个被更名：
  - ```beforeDestroy```改名为 ```beforeUnmount```
  - ```destroyed```改名为 ```unmounted```
- Vue3.0也提供了 Composition API 形式的生命周期钩子，与Vue2.x中钩子对应关系如下：
  - `beforeCreate`===>`setup()`
  - `created`=======>`setup()`
  - `beforeMount` ===>`onBeforeMount`
  - `mounted`=======>`onMounted`
  - `beforeUpdate`===>`onBeforeUpdate`
  - `updated` =======>`onUpdated`
  - `beforeUnmount` ==>`onBeforeUnmount`
  - `unmounted` =====>`onUnmounted`

```vue
<template>
	<h2>当前求和为：{{sum}}</h2>
	<button @click="sum++">点我+1</button>
</template>

<script>
	import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			console.log('---setup---')
			//数据
			let sum = ref(0)
			//通过组合式API的形式去使用生命周期钩子
			onBeforeMount(()=>{
				console.log('---onBeforeMount---')
			})
			onMounted(()=>{
				console.log('---onMounted---')
			})
			onBeforeUpdate(()=>{
				console.log('---onBeforeUpdate---')
			})
			onUpdated(()=>{
				console.log('---onUpdated---')
			})
			onBeforeUnmount(()=>{
				console.log('---onBeforeUnmount---')
			})
			onUnmounted(()=>{
				console.log('---onUnmounted---')
			})
			//返回一个对象（常用）
			return {sum}
		},
	}
</script>
```



# 样例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>生命周期</title>
		<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2 :style="{opacity}">Vue</h2>
			<button @click="opacity = 1">透明度设置为1</button>
			<button @click="stop">点我停止变换</button>
		</div>
	</body>

	<script type="text/javascript">
		new Vue({
			el:'#root',
			data:{
				opacity:1
			},
			methods: {
				stop(){
					this.$destroy()
				}
			},
			mounted(){
				console.log('mounted',this)
				this.timer = setInterval(() => {//lambda中的this会向外面
					console.log('setInterval')
					this.opacity -= 0.01
					if(this.opacity <= 0) this.opacity = 1
				},16)
			},
			beforeDestroy() {
				clearInterval(this.timer)
				console.log('beforeDestroy')
			},
		})

	</script>
</html>
```