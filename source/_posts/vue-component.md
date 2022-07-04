---
title: vue-component
toc: true
date: 2021-10-25 22:03:54
tags:
---

# 基础
Vue中使用组件的三大步骤：
## vue-cli中:
1. 定义组件: 之间创建`.vue`文件, 文件分为3个部分`template`(用于写html), `script`(用来写vue的属性), `style`(用来写样式)
2. 注册组件: 在其他`.vue`文件中的`components`属性中填入即可, 如`components:{app}`
3. 使用组件: 直接使用组件名作为标签名, `<component></component>`


## 在html文件中:
1. 如何定义一个组件？
    1. 使用`Vue.extend(options)`创建，其中`options和new Vue(options)`时传入的那个options几乎一样，但也有点区别
		- el不要写, 最终所有的组件都要经过一个vm的管理，由vm中的el决定服务哪个容器。
		- data必须写成函数, 避免组件被复用时，数据存在引用关系。
		- 简写形式: `const school = Vue.extend(options)` 可简写为：`const school = options`
2. 如何注册组件？
    1.局部注册：靠new Vue的时候传入components选项
    2.全局注册：靠`Vue.component('组件名',组件)`
3. 使用组件：`<school></school>`
    template:'<school></school>',在Vue对象中使用template可以不必在标签中再次使用该标签,既可渲染.

# 样例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>组件</title>
        <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<!-- 第三步：编写组件标签 -->
			<school></school>
		</div>
	</body>
	<script type="text/javascript">
		//第一步：创建school组件
		const school = Vue.extend({//Vue.extend可以省略
			template:`
				<div>
					<h2>学校名称：{{schoolName}}</h2>
					<button @click="showName">点我提示学校名</button>	
				</div>
			`,
			// el:'#root', //组件定义时，不要写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器。
			data(){// 每次都返回一个新的数据对象, 避免了组件复用时, 引用同一个数据地址
				return {
					schoolName:'wang',
				}
			},
			methods: {
				showName(){
					alert(this.schoolName)
				}
			},
		})
		
		//创建vm
		new Vue({
			el:'#root',
			data:{
				msg:'你好啊！'
			},
			// template:'<school></school>',在Vue对象中使用template可以不必在标签中再次使用该标签,既可渲染.
			//第二步：注册组件（局部注册）, 组件只能在该对象绑定的元素内使用
			components:{
				school,
			}
		})

	</script>
</html>
```



# 全局与局部
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>component局部与全局</title>
        <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<hello></hello>
		</div>
		<div id="root2">
			<hello></hello>
		</div>
	</body>
	<script type="text/javascript">
		//第一步：创建hello组件
		const hello = Vue.extend({
			template:`
				<div>	
					<h2>你好啊！{{name}}</h2>
				</div>
			`,
			data(){
				return {
					name:'Tom'
				}
			}
		})
		
		//第二步：全局注册组件
		Vue.component('hello',hello)

		//创建vm
		new Vue({
			el:'#root',
			data:{
				msg:'你好啊！'
			},
			//第二步：注册组件（局部注册）
			components:{
				// hello, //不需要注册, 因为hello现在是全局的, 不需要在局部再次注册
			}
		})

		new Vue({
			el:'#root2',
		})
	</script>
</html>
```


# 组件嵌套

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>组件的嵌套</title>
		<!-- 引入Vue -->
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<!-- 准备好一个容器-->
		<div id="root">
			
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。

		//定义student组件
		const student = Vue.extend({
			name:'student',
			template:`
				<div>
					<h2>学生姓名：{{name}}</h2>	
					<h2>学生年龄：{{age}}</h2>	
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					age:18
				}
			}
		})
		
		//定义school组件
		const school = Vue.extend({
			name:'school',
			template:`
				<div>
					<h2>学校名称：{{name}}</h2>	
					<h2>学校地址：{{address}}</h2>	
					<student></student>
				</div>
			`,
			data(){
				return {
					name:'尚硅谷',
					address:'北京'
				}
			},
			//注册组件（局部）
			components:{
				student
			}
		})

		//定义hello组件
		const hello = Vue.extend({
			template:`<h1>{{msg}}</h1>`,
			data(){
				return {
					msg:'欢迎来到尚硅谷学习！'
				}
			}
		})
		
		//定义app组件
		const app = Vue.extend({
			template:`
				<div>	
					<hello></hello>
					<school></school>
				</div>
			`,
			components:{
				school,
				hello
			}
		})

		//创建vm
		new Vue({
			template:'<app></app>',//template键会直接在绑定的元素里生成, 而不需要再写<app></app>标签
			el:'#root',
			//注册组件（局部）
			components:{app}
		})
	</script>
</html>
``` 