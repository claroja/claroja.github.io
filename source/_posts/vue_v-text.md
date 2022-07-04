---
title: vue_v-text
toc: true
date: 2021-10-25 22:03:54
tags:
---
# vue2-html
v-text指令：
    1.作用：向其所在的节点中渲染文本内容。
    2.与插值语法的区别：v-text会替换掉节点中的内容，{{xx}}则不会。
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-text指令</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<div>你好，{{name}}</div>
			<div v-text="name"></div>
			<div v-text="str"></div>
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
		new Vue({
			el:'#root',
			data:{
				name:'wang',
				str:'<h3>你好啊！</h3>'
			}
		})
	</script>
</html>
```