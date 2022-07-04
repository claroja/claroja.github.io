---
title: vue_v-once
toc: true
date: 2021-10-25 22:03:54
tags:
---

# 基础
1. v-once节点在初次动态渲染后，就视为静态内容了。
2. 以后数据的改变不会引起v-once所在结构的更新。

# 样例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>v-once指令</title>
		<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h2 v-once>初始化的n值是:{{n}}</h2>
			<h2>当前的n值是:{{n}}</h2>
			<button @click="n++">点我n+1</button>
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