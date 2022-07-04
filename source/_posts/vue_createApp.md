---
title: vue_createApp
toc: true
date: 2021-10-25 22:03:54
---

# vue3-cli
`main.js`引入了工厂函数
```js
//引入的不再是Vue构造函数了，引入的是一个名为createApp的工厂函数
import { createApp } from 'vue'
import App from './App.vue'
//创建应用实例对象——app(类似于之前Vue2中的vm，但app比vm更“轻”)
const app = createApp(App)
//挂载
app.mount('#app')
```

`App.vue`
```vue
<template>
    <p>{{ msg }}</p>
    <button @click="test">test</button>
</template>

<script>
	export default {
		name: 'App',
		//此处只是测试一下setup，暂时不考虑响应式的问题。
        setup(){
            let msg = 'hello world'
            function test(){
                console.log("helo")
                alert(`${msg}`)
            }
            return {
                msg,
                test,
            }
        }
	}
</script>
```




# vue3-html
1. 导入vue包
`<script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.26/vue.global.min.js"></script>`
2. 配置vue的选项`options`, 在`setup`中定义变量和方法并返回
3. 创建vue对象并挂载`Vue.createApp(options).mount('#hello')`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.26/vue.global.prod.min.js"></script>
</head>

<body>
    <div id="hello">
        <p>{{ msg }}</p>
        <button @click="test">test</button>
    </div>

    <script>
        const demo = {
            setup(){
                let msg = 'hello world'
                function test(){
                    console.log("helo")
                    alert(`${msg}`)
                }
                return {
                    msg,
                    test,
                }
            }
        }
        Vue.createApp(demo).mount('#hello')
    </script>
</body>
</html>
```



# 拓展阅读
vue2的使用步骤
## 基础
1. 导入vue包
`<script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>`
2. 创建vue对象(`new Vue`)
3. 传入对象参数(`{el,data}`)
    1. el: element的缩写, 值是css选择器. 比如id选择器'#xxx`或class选择器'.class'. 
        Vue实例和容器是一一对应的
    2. data: 是数据, 在页面使用`{{}}`可直接渲染
        data中的数据发生改变，那么页面中用到该数据的地方也会自动更新
4. `{{xxx}}`中的xxx要写js表达式，且xxx可以自动读取到data中的所有属性


## 样例
创建Vue对象, 通过`el`属性绑定了`id="hello"`的元素,通过`{{}}`将`data`中的数据渲染出来.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>

<body>
    <p id="hello">{{ msg }}</p>
    <script>
        var vueEl = new Vue({
            el: '#hello',
            data: {
                msg: 'hello world'
            }
        })
    </script>
</body>
</html>
```

# el
## el有2种写法
1.  new Vue时候配置el属性。
2. 先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。


## 样例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>

<body>
    <p id="hello">{{ msg }}</p>
    <script>
        var vueEl = new Vue({
            el: '#hello',
            // data: {
            //     msg: 'hello world'
            // }
            data: {
                console.log("@@",this)
                return{
                    msg: "hello world"
                }
            }
        })

    </script>
</body>
</html>
```

# data
## data有2种写法
1. 对象式
2. 函数式, 组件时，data必须使用函数式，否则会报错。


## 样例
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <script src="https://cdn.bootcss.com/vue/2.6.10/vue.js"></script>
</head>

<body>
    <p id="hello">{{ msg }}</p>
    <script>
        var vueEl = new Vue({
            el: '#hello',
            // data: {
            //     msg: 'hello world'
            // }
            data(){
                console.log("@@",this)
                return{
                    msg: "hello world"
                }
            }
        })

    </script>
</body>
</html>
```