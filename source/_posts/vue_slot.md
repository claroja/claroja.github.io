---
title: vue_slot
toc: true
date: 2021-10-25 22:03:54
tags:
---


Demo.vue
```vue
<template>
	<slot name="qwe"></slot>
	<p>上面会显示插槽</p>
</template>

<script>
	export default {
		name: 'Demo',
		setup(props, context){
			console.log('---setup---',props)
			console.log('---setup---',context.slots) //插槽
		}
	}
</script>
```

App.vue
```vue
<template>
	<Demo>
		<template v-slot:qwe>
			<p>插槽值</p>
		</template>
	</Demo>
</template>

<script>
	import Demo from './components/Demo'
	export default {
		name: 'App',
		components:{Demo},
	}
</script>
```


# 基础
给组件标元素的元素预先安排站位(挖个坑, 等待传入的元素占有)


# 样例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>slot</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>

<body>
    <div id="app1">
        <h1>slot插槽-单个</h1>
        <p>slot插槽可以在使用组件时,向组件里传入值,优点像函数的传参\n
            首先我们在script里创建了名为navigation的组件,并预留了slot标签,在html里调用时,我们在组件标签里填入值,该值就会替换slot.\n
            本例中slot标签被替换为 Your profile.\n
            组件中若含有标签,标签不会替代slot.
        </p>
        <navigation>
            <p>haha</p>
            Your Profile
        </navigation>
    </div>

    <script>
        var vm = new Vue({
            el: '#app1',
            components: {
                navigation: {
                    template: '<p><slot></slot></p>'
                }
            }
        })
    </script>

    <div id="app2">
        <h1>slot插槽-多个</h1>
        <p>一个组件中如果有多个插槽则需要给插槽命名.\n
            如果slot没有给name属性,此时name是default.
        </p>
        <navigation>
            <template v-slot:slot1>
                slot1
            </template>
            <template v-slot:slot2>
                slot2
            </template>
        </navigation>
    </div>

    <script>
        var vm = new Vue({
            el: '#app2',
            components: {
                navigation: {
                    template: '<p>这是第一个插槽:<slot name="slot1"></slot>\n这是第二个插槽:<slot name="slot2"></slot></p>'
                }
            }
        })
    </script>
</body>

</html>
```