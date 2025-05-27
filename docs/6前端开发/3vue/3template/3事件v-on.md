# 事件绑定v-on


## 语法


### 直接在template中写方法体

```htm
<script setup>
import { ref } from 'vue'

const counter = ref(0)
</script>

<template>
	<button @click="counter++">Add 1</button>
	<p>The button above has been clicked {{ counter }} times.</p>
</template>
```

### 在script写方法体, 在template中调用



```htm
<script setup>
	function say(message, event) {
		alert(message)
		alert(event)
	}
</script>

<template>
	<button @click="say('hello', $event)">Say hello</button>
</template>
```


## 事件修饰符

如果在方法体中, 通过`$event`参数来控制`event.preventDefault()`等常用的事件参数会非常臃肿, 所以Vue 为 v-on 提供了事件修饰符。修饰符是用`.`表示的指令后缀，包含以下这些：

1. .stop: `<a @click.stop="doThis"></a>`, 单击事件将停止传递, stop阻止了冒泡, 如果没有stop, 当点击button元素时, 会弹出两次alert, 因为外层的div也会触发. 这就是冒泡, 从内层的元素向外层冒.
1. .prevent: `<form @submit.prevent="onSubmit"></form>`, 阻止了默认事件: 页面跳转
1. .self: `<div @click.self="doThat">...</div>`, 只有event.target是当前操作的元素时才触发事件, 点击button不会因为冒泡到外层元素时, 发现不是其自身点击触发的, 所以没有触发事件
1. .capture: `<div @click.capture="doThis">...</div>`, 添加事件监听器时，使用 `capture` 捕获模式
1. .once: `<a @click.once="doThis"></a>`, 点击事件最多被触发一次逆冒泡, 冒泡是由内向外, capture是由外向内.
所以每次是先触发外层的div事件, 再触发内层的div事件
1. .passive: `<div @scroll.passive="onScroll">...</div>`, 直接触发事件, 而不需要等待methods()里的方法执行完毕, 滚动事件的默认行为 (scrolling) 将立即发生而非等待 `onScroll` 完成


✨`<a @click.stop.prevent="doThat"></a>`,  修饰语可以使用链式书写

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>事件修饰符</title>
		<!-- 引入Vue -->
		<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
		<style>
			.stop{
				height: 50px;
				background-color: skyblue;
			}
			.box1{
				padding: 5px;
				background-color: skyblue;
			}
			.box2{
				padding: 5px;
				background-color: orange;
			}
			.list{
				width: 200px;
				height: 200px;
				background-color: peru;
				overflow: auto;
			}
			li{
				height: 100px;
			}
		</style>
	</head>
	<body>
		<div id="root">
			<!-- 阻止默认事件（常用） -->
			<a href="http://www.baidu.com" @click.prevent="showInfo">1. prevent 点击</a><hr/>
			<!-- 阻止事件冒泡（常用） -->
			<div class="stop" @click="showInfo">
				<button @click.stop="showInfo">2. stop 点击</button>
			</div><hr/>
			<!-- 事件只触发一次（常用） -->
			<button @click.once="showInfo">3. once 点击</button><hr/>
			<!-- 使用事件的捕获模式 -->
			<div class="box1" @click.capture="showMsg(1)">
				div1
				<div class="box2" @click="showMsg(2)">
					div2
				</div>
			</div><hr/>
			<!-- 只有event.target是当前操作的元素时才触发事件； -->
			<div class="demo1" @click.self="showInfo">
				<button @click="showInfo">点我提示信息</button>
			</div><hr/>
			<!-- 事件的默认行为立即执行，无需等待事件回调执行完毕； -->
			<ul @wheel.passive="demo" class="list">
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>4</li>
			</ul>
		</div>
	</body>
	<script>
		new Vue({
			el:'#root',
			methods:{
				showInfo(e){
					alert('hello')
				},
				showMsg(msg){
					console.log(msg)
				},
				demo(){
					for (let i = 0; i < 100000; i++) {
						console.log('#')
					}
				}
			}
		})
	</script>
</html>
```



## 按键修饰符

按键行为包含两个部分:
1. 行为, 如keydown(按键按下), keyup(按键抬起). 详细可查询[UI_Events](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events)
2. 名称, 如enter(会车键), page-down. 详细可查询[Keyboard_event_code_values](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values). ✨注意要把原始的驼峰格式`PageDown`, 改为横线格式`page-down`


```htm
<input @keyup.page-down="func" />
```


## 参考

1. https://cn.vuejs.org/guide/essentials/event-handling.html

