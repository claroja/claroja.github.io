# show

## 基础
1.v-if
    写法：
        (1).v-if="表达式" 
        (2).v-else-if="表达式"
        (3).v-else="表达式"
    适用于：切换频率较低的场景。
    特点：不展示的DOM元素直接被移除。
    注意：v-if可以和:v-else-if、v-else一起使用，但要求结构不能被“打断”。

2.v-show
    写法：v-show="表达式"
    适用于：切换频率较高的场景。
    特点：不展示的DOM元素未被移除，仅仅是使用样式隐藏掉(将标签的display设置为none)

## 样例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>条件渲染</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<input type="text" v-model="n"> 
			<!-- 使用v-if做条件渲染 -->
			<!-- <h2 v-if="false">v-if</h2> -->
			<!-- <h2 v-if="1 === 1">v-if</h2> -->

			<!-- v-else和v-else-if -->
			<div v-if="n === '1'">Angular</div>
			<div v-else-if="n === '2'">React</div>
			<div v-else-if="n === '3'">Vue</div>
			<div v-else>哈哈</div>


			<!-- 使用v-show做条件渲染 -->
			<!-- <h2 v-show="false">v-show</h2> -->
			<!-- <h2 v-show="1 === 1">v-show</h2> -->
		</div>
	</body>

	<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				n:0
			}
		})
	</script>
</html>
```

## 参考
1. https://cn.vuejs.org/guide/essentials/conditional.html