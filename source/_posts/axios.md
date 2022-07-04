---
title: axios
toc: true
date: 2021-10-25 22:03:54
tags:
---

# 基础

```html
 <script src="https://cdn.bootcdn.net/ajax/libs/axios/0.21.1/axios.js"></script>
  <script type="text/javascript">
    axios.get('http://localhost:3000/adata').then(function(ret){
      // 注意data属性是固定的用法，用于获取后台的实际数据
      console.log(ret)
      // console.log(ret.data) //这个是服务器传回来的具体信息
    })
  </script>
```

# 同步与异步
默认是异步的, 使用async/await来进行同步

```js
    async function queryData() {
      var ret = await axios.get('adata');
      // console.log(ret.data)
      return ret.data;
    }
```

对比异步的形式
```js
    queryData().then(function(data){
      console.log(data)
    })
```

# 全局配置
```js
// 配置请求的基准URL地址
axios.defaults.baseURL = 'http://localhost:3000/';
// 配置请求头信息
axios.defaults.headers['mytoken'] = 'hello';
```

# 拦截器
```html
  <script type="text/javascript" src="js/axios.js"></script>
  <script type="text/javascript">
    axios.interceptors.request.use(function(config) {
      console.log(config.url)
      config.headers.mytoken = 'nihao';
      return config;
    }, function(err){
      console.log(err)
    })

    axios.interceptors.response.use(function(res) {
      var data = res.data;
      return data;
    }, function(err){
      console.log(err)
    })
    axios.get('http://localhost:3000/adata').then(function(data){
      console.log(data)
    })
  </script>
```


