---
title: vuecli_router
toc: true
date: 2021-10-25 22:03:54
tags:
---
# 安装路由依赖

`npm install --save vue-router`

router中主要放置的路由, 创建`index.js`文件作为router的主程序.
# 配置路由
1. 在`index.js`中全局注册VueRouter模块
```js
import VueRouter from "vue-router";
import Vue from "vue";
Vue.use(VueRouter);
```
2. 导入组件并配置路由
导入组件: `import Home from "@/views/Home";`
注意:
    - components文件夹放置的是非路由组件, 或者是全局组件
    - views文件夹放置路由组件


3. 配置组件路由:
```js
routes: [
    {
        path: "/home",
        component: Home,
    }
]
```

4. 在`main.js`中挂在配置好的路由对象
区别于上一步, 上一步是全局注册路由, 而这里是挂在路由对象.
vue2的挂载方法
```js
import router from '@/router';
new Vue({
  render: h => h(App),
  //需要把router进行注册
  //可以让全部的组件（非路由|路由组件）都可以获取到$route|$router属性
  router
}).$mount('#app')
```

5. 在App.vue中的`<template>`中放置路由展示的位置
`<router-view></router-view>`


# 路由跳转
1. 声明式导航`router-link`, 使用`to`属性指向跳转的url
```html
<router-link class="logo" to="/home">
    <img src="./images/logo.png" alt="" />
</router-link>
```
2. 编程式导航`push|replace`, 相比声明式导航, 还可以做一些业务逻辑
下面是用户点击搜索按钮, 通过函数跳转到`/search`路由.

```js
methods: {
    goSearch() {
        this.$router.push("/search"); //向search路由跳转
    },
},
```


# 传参
## 两种方式传参params和query
1. params参数 params参数属于路径当中一部分, 在`router`中配置
```python
{
    path: "/search/:keyword?",
    component: Search,
    meta: { isShow: true }
}
```
这里`:keyword?`是占位符, `?`代表该参数可传, 可不传
当浏览器中输入`localhost:8080/search/abc`, `abc`就会被当成`keyword`变量的值, 使用`$route.params.keyword`来获取

2. query参数 query参数 ?k=v & k=v 形式, 不需要在`router`中配置
当浏览器中输入`localhost:8080/search?big=cba`, `cba`聚会被当成`big`变量的值, 使用`<h1>query参数展示{{$route.query.big}}</h1>`

```js
  methods: {
    goSearch() {
    //   进行路由跳转并且路由传递参数:同时传递params参数与query参数
      this.$router.push(
        "/search/" + this.keyword + "?big=" + this.keyword.toUpperCase()
      );
    },
  },
```

## 传参的形式
1. 拼贴字符串及格式化字符串
除了拼贴字符串以外, `push`方法还可以通过对象来传递param与query.
```js
this.$router.push(
`/search/${this.keyword}?big=${this.keyword.toUpperCase()}`
);
```


2. 对象模式
```js
  methods: {
    goSearch() {
      this.$router.push({
        name: "search", //路由名称
        params: { keyword: this.keyword || undefined },
        query: { big: this.keyword.toUpperCase() },
      });
    },
  },
```
`|| undefined`用来解决params参数可以传递|者不传递，万一传递空字符串的情况


这种情况下需要, 在`router`中定义路由的名称`name`:
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

# 总结
```js
methods: {
goSearch() {
    //进行路由跳转并且路由传递参数:同时传递params参数与query参数
    // 第一种语法: 拼贴字符串
    // this.$router.push(
    //   "/search/" + this.keyword + "?big=" + this.keyword.toUpperCase()
    // );
    // 也可使用模板字符串形式, 类似python中的f"{}"
    this.$router.push(
    `/search/${this.keyword}?big=${this.keyword.toUpperCase()}`
    );
    // 第二种语法: 对象
    // this.$router.push({
    //   name: "search",
    //   params: { keyword: this.keyword || undefined },
    //   query: { big: this.keyword.toUpperCase() },
    // });
},
},
```


# meta
问题: 实现:
- Footer组件在`\Home`|`\Search`路由时是可见的
- Footer组件在`Login`|`Register`路由时是不可见的

1. 使用v-show控制元素是否可见
v-if|v-show经典面试题：他们两者有什么区别？  
- v-show:通过样式操作DOM显示与隐藏, 只是通过display进行显示与隐藏
- v-if：实实在在操作DOM上树与下树

2. 路由`meta`来给`v-show`传值
- 在App.vue中`<Footer v-show="$route.meta.isShow" />`
- 在router中配置
```js
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { isShow: true },
    },
  ]
```


# 同一路径重复跳转报错bug
当使用`push`和`replace`方法时(比如点击search按钮, 搜索的都是同一个内容时, 会报错, 不影响正常使用), 报错. 但不影响使用
报错的原因是没有传入promise的回调函数(resolve, reject)
可以通过重写VueRouter.prototype原型对象身上的push | replace方法 来解决. 本质是简化代码, 也可以在每次调用`push`和`replace`时自己添上回调函数.

在router文件中做以下修改
1. 先把VueRouter.prototype身上的push|replace方法进行保存一份
```js
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
```
2. 重写VueRouter.prototype身上的方法了
```js
VueRouter.prototype.push = function (location, resolve, reject) {
  //第一个形参：路由跳转的配置对象（query|params）
  //第二个参数：undefined|箭头函数（成功的回调）
  //第三个参数:undefined|箭头函数（失败的回调）
  if (resolve && reject) {
    //push方法传递第二个参数|第三个参数（箭头函数）
    //originPush：利用call修改上下文，变为(路由组件.$router)这个对象，第二参数：配置对象、第三、第四个参数：成功和失败回调函数
    originPush.call(this, location, resolve, reject);
  } else {
    //push方法没有产地第二个参数|第三个参数
    originPush.call(
      this,
      location,
      () => { },
      () => { }
    );
  }
};
```
3. 重写replace方法
```js
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => { },
      () => { }
    );
  }
};
```


# 应用
1.主题页面显示`Footer`, 登录注册页面不显示`Footer`
使用路由的`meta`属性来解决

```js
export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      //路由元信息key只能叫做meta
      meta: { isShow: true },
    },
  ]
}
```

在组件中使用
```js
<Footer v-show="$route.meta.isShow" />
```