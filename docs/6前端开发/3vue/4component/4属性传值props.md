# props

通过子组件的属性进行传值

`defineProps`是一个仅`<script setup>`中可用的编译宏命令，并不需要显式地导入。`defineProps`会返回一个对象，其中包含了可以传递给组件的所有`props`：


1. 父组件:
	```htm
	<BlogPost title="My journey with Vue" />
	```

2. 子组件`BlogPost.vue`
	
	```htm
	<script setup>
		defineProps(['title'])  //直接暴露title, 也可以写成const props = defineProps(['title'])
	</script>

	<template>
		<h4>{{ title }}</h4>
	</template>
	```


## 参考
1. https://cn.vuejs.org/guide/essentials/component-basics.html
2. https://cn.vuejs.org/guide/components/props.html

