---
title: vue_router
toc: true
date: 2021-10-25 22:03:54
tags:
---
[官网](https://router.vuejs.org/)

[router-link](https://router.vuejs.org/guide/#router-link)代替`<a>`对组件进行渲染, 可以不用重新加载页面(reload)
[router-view](https://router.vuejs.org/guide/#router-view)组件渲染的位置
`this.$router`等价于`createRouter()`创建的实例, `this.$router`的写法优势在于不需要在每个组件中实例化`router`
在component api中我们无法使用`this`来获得`this.$router`和`this.$route`, 所以我们需要使用`useRouter()`
```js
    const router = useRouter()
    const route = useRoute()
    router.push({
        name: 'search',
        query: {route.query},

```

路由就是一组映射关系(key:value). key是路径, value是组件
## 配置路由

- 在router文件夹下创建`index.js`, 全局注册VueRouter模块
```js
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
```
- 导入组件并配置路由
导入组件: `import Home from "@/views/Home";`
注意:
components文件夹放置的是非路由组件, 或者是全局组件
views文件夹放置路由组件

配置组件路由:
```js
routes: [
    {
        path: "/home",
        component: Home,
    }
]
```

- 在`main.js`中挂在配置好的路由对象
区别于上一步, 上一步是全局注册路由, 而这里是挂在路由对象.

```js
import router from '@/router';
new Vue({
  render: h => h(App),
  //需要把router进行注册
  //可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
  //$route(路由)：可以获取到路由信息（path、query、params）
  //$router:进行编程式导航路由跳转push||replace
  router
}).$mount('#app')
```

- 在App.vue中的`<template>`中放置路由展示的位置
`<router-view></router-view>`

## 路由的跳转
路由的跳转有两种形式:
- 声明式导航`router-link`, 使用`to`属性指向跳转的url
在`Header`组件中, 写声明式导航

`<router-link to="/login">登录</router-link>`
`<router-link to="/register" class="register">免费注册</router-link>`
```html
<router-link class="logo" to="/home">
    <img src="./images/logo.png" alt="" />
</router-link>
```
- 编程式导航`push|replace`, 相比声明式导航, 还可以做一些业务逻辑
下面是用户点击搜索按钮, 通过函数跳转到`/search`, 在真实的场景中, 我们需要通过编程式方法获得search传递过来的参数

## 传参(编程式导航路由):
第一种是params参数 params参数属于路径当中一部分
在`router`中配置:
```python
{
    path: "/search/:keyword?",
    component: Search,
    meta: { isShow: true }
}
```
这里`:keyword?`是占位符, `?`代表该参数可传, 可不传
当浏览器中输入`localhost:8080/search/abc`, `abc`就会被当成`keyword`变量的值, 使用`$route.params.keyword`来获取

第二种是query参数 query参数 ?k=v & k=v 形式
当浏览器中输入`localhost:8080/search?big=cba`, `cba`聚会被当成`big`变量的值, 使用`<h1>query参数展示{{$route.query.big}}</h1>`


```html
<button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">
```

```js
methods: {
    goSearch() {
        this.$router.push("/search"); //向search页面跳转
    },
},
```

除了拼贴字符串以外, `push`方法还可以通过对象来传递param与query.
在`router`中定义路由的名称`name`:
```js
routes: [
    {
        name: "search",
        path: "/search/:keyword",
        component: Search,
        meta: { isShow: true }
    }
]
```
在vue文件中, 使用
```js
  methods: {
    goSearch() {
      this.$router.push({
        name: "search",
        params: { keyword: this.keyword || undefined },
        query: { big: this.keyword.toUpperCase() },
      });
    },
  },
```
`|| undefined`用来解决params参数可以传递|者不传递，万一传递空字符串的情况
