---
title: vue_axios
toc: true
date: 2021-01-20 22:03:54
---
# 请求模块
一般在src/api`文件夹下
- ajax.js 配置请求实例, 做一些请求之前的配置
- index.js 统一管理项目接口的模块，用来请求数据



# ajax.js
## 创建axios实例, 统一配置信息

```js
import axios from "axios";
let requests = axios.create({//创建axios实例
    baseURL: "/api",//基础路径
    timeout: 5000,//请求不能超过5S
});
```

## 请求拦截器
```js
import store from '@/store';//导入仓库中的数据
//请求拦截器，在发请求前做一些事情
requests.interceptors.request.use((config) => {//config是配置对象, 可以配置headers请求头
  if(store.state.detail.uuid_token){//获取用户的临时id
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  if(store.state.user.token){//携带用户的token
    config.headers.token = store.state.user.token;
  }
  nprogress.start(); //进度条开始 记得导入import "nprogress/nprogress.css";
  return config;
});
```


## 响应拦截器
```js
//响应拦截器，成功返回后做一些事情
requests.interceptors.response.use(
  (res) => { //成功的回调
    nprogress.done();
    return res.data;
  },
  (err) => { //失败的回调
    alert("服务器响应数据失败");
  }
);

```



## 整体
```js
//对于axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";
//在当前模块中引入store
import store from '@/store';
//如果出现进度条没有显示：一定是你忘记了引入样式了
import "nprogress/nprogress.css";

//创建axios实例
let requests = axios.create({
  //基础路径
  baseURL: "/api",
  //请求不能超过5S
  timeout: 5000,
});
//请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
  if(store.state.detail.uuid_token){
    //请求头添加一个字段(userTempId):和后台老师商量好了
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  //需要携带token带给服务器
  if(store.state.user.token){
    config.headers.token = store.state.user.token;
  }
  nprogress.start();
  //config是配置对象, 可以配置headers请求头
  return config;
});
//响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
  (res) => { //成功的回调
    nprogress.done();
    return res.data;
  },
  (err) => { //失败的回调
    alert("服务器响应数据失败");
  }
);
//最终需要对外暴露
export default requests;
```


# index.js

```js
//统一管理项目接口的模块
//引入二次封装的axios（带有请求、响应的拦截器）
import requests from "./ajax";
export const reqgetCategoryList = () => requests.get(`/product/getBaseCategoryList`);
```