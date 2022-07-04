---
title: vue_hook
toc: true
date: 2021-10-25 22:03:54
---
`Demo.vue`
```vue
<template>
	<h2>当前点击时鼠标的坐标为：x：{{point.x}}，y：{{point.y}}</h2>
</template>

<script>
	import usePoint from './usePoint'
	export default {
		name: 'Demo',
		setup(){
			//数据
			let point = usePoint()
			//返回一个对象（常用）
			return {point}
		}
	}
</script>
```
`usePoint.js`
```js
import {reactive,onMounted,onBeforeUnmount} from 'vue'
export default function (){
	//实现鼠标“打点”相关的数据
	let point = reactive({
		x:0,
		y:0
	})

	//实现鼠标“打点”相关的方法
	function savePoint(event){
		point.x = event.pageX
		point.y = event.pageY
		console.log(event.pageX,event.pageY)
	}

	//实现鼠标“打点”相关的生命周期钩子
	onMounted(()=>{
		window.addEventListener('click',savePoint)
	})

	onBeforeUnmount(()=>{
		window.removeEventListener('click',savePoint)
	})

	return point
}

```