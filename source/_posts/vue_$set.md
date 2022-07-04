---
title: vue_$set
toc: true
date: 2021-10-25 22:03:54
tags:
---

# 基本
Vue监视数据的原理：
1. vue会监视data中所有层次的数据。既student->name/hobby/friends这些key对应的值改变, 都会被检测
2. 如何监测对象中的数据？
    1.对象中后追加的属性，Vue默认不做响应式处理
    2.如需给后添加的属性做响应式，请使用如下API：
        Vue.set(target，propertyName/index，value) 或 
        vm.$set(target，propertyName/index，value)
3. 如何监测数组中的数据？
    1.对数组元素直接操作比如:list[0]=1, 不会被检测
    2.使用这些API(更新了整个数组):push()、pop()、shift()、unshift()、splice()、sort()、reverse()
    3.Vue.set() 或 vm.$set()
特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象 添加属性

# 样例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>深层监测</title>
		<script type="text/javascript" src="../js/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<h1>学生信息</h1>
			<button @click="addSex">添加性别属性，默认值：男</button> <br/>
			<button @click="student.sex = '未知' ">修改性别</button> <br/>
			<button @click="addFriend">列表首位添加一个朋友</button> <br/>
			<button @click="updateFirstFriendName">修改第一个朋友的名字为：张三</button> <br/>
			<button @click="addHobby">添加一个爱好</button> <br/>
			<button @click="updateHobby">修改第一个爱好为：开车</button> <br/>
			<button @click="removeSmoke">过滤掉爱好中的抽烟</button> <br/>
			<h3>姓名：{{student.name}}</h3>
			<h3>年龄：{{student.age}}</h3>
			<h3 v-if="student.sex">性别：{{student.sex}}</h3>
			<h3>爱好：</h3>
			<ul>
				<li v-for="(h,index) in student.hobby" :key="index">
					{{h}}
				</li>
			</ul>
			<h3>朋友们：</h3>
			<ul>
				<li v-for="(f,index) in student.friends" :key="index">
					{{f.name}}--{{f.age}}
				</li>
			</ul>
		</div>
	</body>

	<script type="text/javascript">
		const vm = new Vue({
			el:'#root',
			data:{
				student:{
					name:'tom',
					hobby:['抽烟','喝酒','烫头'],
					friends:[
						{name:'jerry',age:35},
						{name:'tony',age:36}
					]
				}
			},
			methods: {
				addSex(){
					// 错误的做法, vue不能检测到更新
					// this.student.sex='男'
					// 正确的做法:
					// Vue.set(this.student,'sex','男')
					this.$set(this.student,'sex','男')
				},
				addFriend(){
					this.student.friends.unshift({name:'jack',age:70})
				},
				updateFirstFriendName(){
					//如果是直接修改数组的元素, vue无法检测
					//this.student.friends[0] = {}
					//如果是修改数组元素的内部属性, 可以
					this.student.friends[0].name = '张三'
				},
				addHobby(){
					this.student.hobby.push('学习')
				},
				updateHobby(){
					// 错误的做法:
					// this.student.hobby[0]="开车"
					// 正确的做法:
					// 1. 使用更新数组的方法
					// this.student.hobby.splice(0,1,'开车')
					// 2. 使用Vue.set和this.$set
					// Vue.set(this.student.hobby,0,'开车')
					this.$set(this.student.hobby,0,'开车')
				},
				removeSmoke(){
					// 对于filter使用暴力的替换, 这样vue就能检测到了
					this.student.hobby = this.student.hobby.filter((h)=>{
						return h !== '抽烟'
					})
				}
			}
		})
	</script>
</html>
```