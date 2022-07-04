---
title: vue_v-bind
toc: true
date: 2021-10-25 22:03:54
tags:
---

# v-bind
## v-bind基本使用
1. `{{}}`只能渲染闭合标签的值, 比如`<p>{{ msg }}</p>`, 但不能绑定标签的属性. 绑定标签的属性需要使用`v-bind:`.
2. `v-bind:`绑定对应的属性值后, 属性等号后面的字符串会当成指令解析
3. `v-bind:`是单向绑定, 修改属性值会影响页面, 但是修改页面上的值不会影响属性值. 区别于`v-mode`的双向绑定.
4. `v-bind:`可以简写为`:`


## 示例
1. `<input>`元素的`value`属性是显示的值, 使用`v-bind:value`或`:value`来绑定
2. 绑定后, `v-bind:value="msg+'后拼贴字符串'"`中等号后面的`"msg+'后拼贴字符串'"`就编变成了表达式, 既msg是一个变量,执行拼贴字符串

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>v-bind</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>

<body>
    <div id="test">
        <input type="button" v-bind:value="msg+'后拼贴字符串'">
    </div>
    <script>
        var bind = new Vue({
            el: '#test',
            data: {
                msg: '绑定'
            }
        })
    </script>
</body>
</html>
```

# v-bind修改class
## 基础
1. class样式的是: `class="xxx"`,`"xxx"`可以是字符串/对象/数组; 
2. class可以有多个样式: `class="xxx yyy"`, 表示两个样式逻辑或关系
3. style样式和class写法相同

## 样例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>绑定样式</title>
		<style>
			.basic{
				width: 400px;
				height: 100px;
				border: 1px solid black;
			}
			.more{
				background-color: skyblue;
			}
		</style>
		<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<!-- class可以对应多个样式, 他们是逻辑或的关系 -->
			<div class="basic more">普通写法</div> <br/>
			<!-- 绑定class样式--字符串写法 -->
			<div class="basic" :class="classStr" >字符串写法</div> <br/>
			<!-- 绑定class样式--数组写法 -->
			<div class="basic" :class="classArr">数组写法</div> <br/>
			<!-- 绑定class样式--对象写法 -->
			<div class="basic" :class="classObj">对象写法</div> <br/>
		</div>
	</body>

	<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				classStr:'more',
				classArr:['more'],
				classObj:{
					more:true,
				},
			},
		})
	</script>
</html>
```