---
title: vue_mixin
toc: true
date: 2021-10-25 22:03:54
---

# 基础
提取模块的公共方法

# 样例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>mixin</title>
        <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
	</head>
	<body>
		<div id="root"></div>
	</body>

	<script type="text/javascript">
        const hunhe = {
            methods: {
                showName(){
                    alert(this.name)
                }
            },
        }
		//定义student组件
		const student = Vue.extend({
            template:`
				<div>
					<h2 @click="showName">student</h2>
				</div>
			`,
			data(){
				return {
					name:'student',
				}
			},
            mixins:[hunhe]
		})
		
		//定义school组件
		const school = Vue.extend({
            template:`
				<div>
					<h2 @click="showName">school</h2>
				</div>
			`,
			data(){
				return {
					name:'school',
				}
			},
            mixins:[hunhe]
		})
		
		//定义app组件
		const app = Vue.extend({
			template:`
				<div>	
					<student></student>
					<school></school>
				</div>
			`,
			components:{
				school,
				student
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