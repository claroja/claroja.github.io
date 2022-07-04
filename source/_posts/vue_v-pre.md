---
title: vue_v-pre
toc: true
date: 2021-10-25 22:03:54
tags:
---

# 基础
vue会对每个元素进行编译, 检测有没有`{{}}`或其他指令, 如果确定没有vue指令可以使用`v-pre`跳过这个元素和它的子元素的编译过程。一些静态的内容不需要编辑加这个指令可以加快编辑
```html
<span v-pre>{{ this will not be compiled }}</span>   显示的是{{ this will not be compiled }}
```

# 样例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-pre指令</title>
		<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2 v-pre>Vue其实很简单</h2>
			<h2 v-pre>当前的n值是:{{n}}</h2>
		</div>
	</body>

	<script type="text/javascript">
		new Vue({
			el:'#root',
			data:{
				n:1
			}
		})
	</script>
</html>
```