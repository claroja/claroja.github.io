# slot

给组件标元素的元素预先安排站位(挖个坑, 等待传入的元素占有)

1. 子组件
	
	```html
	<template>
	<button>
		<slot/> <!-- slot outlet -->
	</button>
	</template>
	```

2. 父组件

	```html
	<!-- App.vue -->
	<script setup>
		import FancyButton from './FancyButton.vue'
	</script>

	<template>
		<FancyButton>
			Click me <!-- slot content -->
		</FancyButton>
	</template>
	```


## 参考:
1. https://cn.vuejs.org/guide/components/slots.html