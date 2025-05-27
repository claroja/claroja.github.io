# lifecycle


组件的运行顺序是：
1. 先顺序执行setup里面的代码。
2. 遇到lifecycle 钩子函数，会注册其中的函数（注意，钩子函数中的函数此时并未执行，会在生命周期具体时间段调用）。
	2. onBeforeMount：完成setup中的代码后，Dom tree创建之前
	2. onMounted：
		1. 所有子组件全部挂载完毕；
		2. 它自己的Dom tree已经创建完成，且挂载到父组件主要用来获得dom中的元素，因为在setup中的代码运行时，Dom tree还没加载，无法获得。

注意：
1. setup中如果有异步代码，可使用await变成同步。[参考官方文档](https://vuejs.org/guide/built-ins/suspense.html#async-setup)
2. 当setup中存在await时，会导致此组件渲染出现问题，需要在父组件中使用`<suspend>`标签嵌套，[参考文档](https://www.trpkovski.com/2021/09/25/suspense-feature-in-vue-3-with-sfc-script-setup/)
3. 钩子函数中的函数此时并未执行，会在生命周期具体时间段调用
4. 钩子函数的第一个函数参数，可以使用async修饰，里面调用的方法可以使用await保持同步

```htm
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

## 参考
1. https://cn.vuejs.org/guide/essentials/lifecycle.html