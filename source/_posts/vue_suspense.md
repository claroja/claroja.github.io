---
title: vue_suspense
toc: true
date: 2021-10-25 22:03:54
tags:
---
# vue3-cli
等待异步组件时渲染一些额外内容，让应用有更好的用户体验
使用步骤：
    1. 异步引入组件
    ```js
    import {defineAsyncComponent} from 'vue'
    const Child = defineAsyncComponent(()=>import('./components/Child.vue'))
    ```
    2. 使用```Suspense```包裹组件，并配置好```default``` 与 ```fallback```

App.vue
```vue
<template>
	<div class="app">
		<h3>我是App组件</h3>
		<Suspense>
			<template v-slot:default>
				<Child/>
			</template>
			<template v-slot:fallback>
				<h3>稍等，加载中...</h3>
			</template>
		</Suspense>
	</div>
</template>

<script>
	// import Child from './components/Child'//静态引入
	import {defineAsyncComponent} from 'vue' 
	const Child = defineAsyncComponent(()=>import('./components/Child')) //异步引入
	export default {
		name:'App',
		components:{Child},
	}
</script>

<style>
	.app{
		background-color: gray;
		padding: 10px;
	}
</style>
```

Child.vue
```vue
<template>
	<div class="child">
		<h3>我是Child组件</h3>
		{{sum}}
	</div>
</template>

<script>
	import {ref} from 'vue'
	export default {
		name:'Child',
		async setup(){// 因为使用了<Suspense>, 所以可以使用async, 否则不可以
			let sum = ref(0)
			let p = new Promise((resolve,reject)=>{
				setTimeout(()=>{
					resolve({sum})
				},3000)
			})
			return await p
		}
	}
</script>

<style>
	.child{
		background-color: skyblue;
		padding: 10px;
	}
</style>
```