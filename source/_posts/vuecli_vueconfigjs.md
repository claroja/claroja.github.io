---
title: vuecli_vueconfigjs
toc: true
date: 2021-10-25 22:03:54
tags:
---

vue.config.js是一个可选的配置文件，如果项目的(和package.json同级的)根目录中存在这个文件，那么它会被@vue/cli-service自动加载。你也可以使用package.json中的vue字段，但是注意这种写法需要你严格遵照JSON的格式来写。

```js
module.exports = {
  productionSourceMap:false,
  // 关闭ESLINT校验工具
  lintOnSave: false,
  //配置代理跨域
  devServer: {
    proxy: {
      "/api": { //将/api路径的访问代理到target, 这里不能写域名, 域名是默认的
        target: "http://localhost:5000/",
      },
    },
  },
};
```

上述的代理配置, 对应axios的配置为
```js
//对于axios进行二次封装
import axios from "axios";
//创建axios实例
let requests = axios.create({
  baseURL: "http://localhost:8080/api",//这里可以简写成"/"
  timeout: 5000,
});
```
既当前端请求`http://localhost:8080/api`时, webpack帮我们转发给了`http://localhost:5000/api`
 

配置选项|描述
--|--
publicPath|string, default:'/', 相对路径, 如果值为('./')，这样所有的资源都会被链接为相对路径，这样打出来的包可以被部署在任意路径
outputDir|输出文件目录，当运行 vue-cli-service build 时生成的生产环境构建文件的目录
assetsDir|Type: string, Default: '', 放置生成的静态资源 (js、css、img、fonts) 的目录。
indexPath|Type: string, Default: 'index.html', `index.html` 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
lintOnSave|Type: boolean, Default: true, 是否在保存的时候使用 `eslint-loader` 进行检查
devServer|Type: Object

参考:
https://www.jianshu.com/p/b358a91bdf2d