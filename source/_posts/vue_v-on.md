---
title: vue_v-on
toc: true
date: 2021-10-25 22:03:54
tags:
---
# 基础
## 基本使用
1. 使用v-on:xxx 或 @xxx 绑定事件，其中xxx是事件名
2. 事件的回调需要配置在methods对象中，最终挂在vm上
3. methods中配置的函数，都是被Vue所管理的函数，this的指向是vm 或 组件实例对象
methods中配置的函数，不要用箭头函数！否则this就不是vm
两个重要的小原则：
    1.所被Vue管理的函数，最好写成普通函数，这样this的指向才是vm 或 组件实例对象。
    2.所有不被Vue所管理的函数（定时器的回调函数、ajax的回调函数等、Promise的回调函数），最好写成箭头函数(这时this会跳出该函数的范围)，这样this的指向才是vm 或 组件实例对象。
4. @click="demo" 和 @click="demo($event)" 效果一致，但后者可以传参；
5. `event.target` 就是触发事件的元素


## 样例
1. v-on用来给标签绑定事件,事件的方法要在vue的methods定义
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>

<body>
    <p>1.1 v-on用来给标签绑定事件,事件的方法要在vue的methods定义</p>
    <div id="on">
        <input type="button" v-on:click="show">
    </div>
    <hr>

    <script>
        //v-on用来给标签绑定事件,事件的方法要在vue的methods定义
        var on = new Vue({
            el: '#on',
            methods: {
                show(){alert('hello')}
            },
        })
    </script>
</body>
```
2. 函数默认有一个参数, 是事件event
注意`v-on:click="show"`中, show并没有传入任何参数, 完整写法是`v-on:click="show($event)"`
```html
<div id="para_event">
    <input type="button" v-on:click="show">
    <!-- 完整的写法是 -->
    <!-- <input type="button" v-on:click="show($event)"> -->
</div>
<hr>

<script>
    var para_event = new Vue({
        el: '#para_event',
        methods: {
            show(event){alert(event.target) }
        },
    })
</script>
```

3. 如果需要传参, 又需要调用event, 需在传参时使用`$event`站位
```html
<div id="para_custom">
    <input type="button" v-on:click="show(1,$event)">
</div>
<hr>

<script>
    var para_custom = new Vue({
        el: '#para_custom',
        methods: {
            show(num,event){
                alert(num)
                alert(event.target)
            }
        },
    })
</script>
```

4. `methods`中的方法中的`this`指向的是`vue`对象, 可以直接操作`data`中的数据
不能使用lambda形式, lambda形式的this是window对象
```html
<div id="this">
    <input type="button" v-bind:value="msg" v-on:click="sub">
</div>
<hr>
<script>
    var _this = new Vue({
        el: '#this',
        data: {
            msg: 9
        },
        methods: {
            sub() {
                this.msg = this.msg -1
            }
        },
    })
</script>
```



# 时间修饰符
## 基础
1. prevent：阻止默认事件（常用）
2. stop：阻止事件冒泡（常用）
3. once：事件只触发一次（常用）
4. capture：使用事件的捕获模式
5. self：只有event.target是当前操作的元素时才触发事件
6. passive：事件的默认行为立即执行，无需等待事件回调执行完毕

## 样例:
1. prevent阻止了默认事件: 页面跳转
2. stop阻止了冒泡, 如果没有stop, 当点击button元素时, 会弹出两次alert, 因为外层的div也会触发. 这就是冒泡, 从内层的元素向外层冒.
3. once只触发一次
4. capture: 逆冒泡, 冒泡是由内向外, capture是由外向内.
所以每次是先触发外层的div事件, 再触发内层的div事件
5. 只有event.target是当前操作的元素时才触发事件
点击button不会因为冒泡到外层元素时, 发现不是其自身点击触发的, 所以没有触发事件
6. 直接触发事件, 而不需要等待methods()里的方法执行完毕

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

# 键盘事件
## 基础
1. Vue中常用的按键别名：
    回车 => enter
    删除 => delete (捕获“删除”和“退格”键)
    退出 => esc
    空格 => space
    换行 => tab (特殊，必须配合keydown去使用)
    上 => up
    下 => down
    左 => left
    右 => right
2. 系统修饰键（用法特殊）：ctrl、alt、shift、meta
            (1).配合keyup使用：按下修饰键的同时，再按下其他键，随后释放其他键，事件才被触发。
            (2).配合keydown使用：正常触发事件。
3. 也可以使用keyCode查看具体的案件编码`console.log(event.keyCode)`
4. Vue.config.keyCodes.自定义键名 = 键码，可以去定制按键别名

## 样例
```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8" />
		<title>键盘事件</title>
		<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
	</head>
	<body>
		<div id="root">
			<input type="text" placeholder="回车触发" @keydown.huiche="showInfo">
		</div>
	</body>

	<script type="text/javascript">
		Vue.config.keyCodes.huiche = 13 //定义了一个别名按键
		new Vue({
			el:'#root',
			data:{
				name:'wang'
			},
			methods: {
				showInfo(e){
					// console.log(e.key,e.keyCode)
					console.log(e.target.value)// 输出元素的值, e.targe就是对应的元素
				}
			},
		})
	</script>
</html>
```