---
title: vue_cli
toc: true
date: 2021-10-25 22:03:54
---

# 安装
1. npm install -g @vue/cli
2. vue create xxxx
3. npm run serve
建议设置国内镜像:
npm config set registry https://registry.npm.taobao.org

# 工程目录说明
```
├── node_modules 
├── public
│   ├── favicon.ico: 页签图标
│   └── index.html: 主页面
├── src
│   ├── assets: 存放静态资源
│   │   └── logo.png
│   │── component: 存放组件
│   │   └── HelloWorld.vue
│   │── App.vue: 汇总所有组件
│   │── main.js: 入口文件
├── .gitignore: git版本管制忽略的配置
├── babel.config.js: babel的配置文件
├── package.json: 应用包配置文件 
├── README.md: 应用描述文件
├── package-lock.json：包版本控制文件
```
# vue.config.js配置文件
1. 使用vue inspect > output.js可以查看到Vue脚手架的默认配置。
2. 使用vue.config.js可以对脚手架进行个性化定制，详情见：https://cli.vuejs.org/zh

# package.json
npm规范的一个文件, 常用的是"scripts"键
```json
"scripts": {
"serve": "vue-cli-service serve", //对应 npm run server命令, 启动项目服务
"build": "vue-cli-service build", //对应 npm run build, 编译文件最终输出
"lint": "vue-cli-service lint"// 对应 npm run lint, 语法检查 一般不用
}
```
# package-lock.json
npm规范的包管理器

# main.js



# vue文件


## <style>
1. scoped 只在组件中有效
2. lang 可以选择编译语言

```html
<style lang="less" scoped>
	.demo{
		background-color: pink;
		.atguigu{
			font-size: 40px;
		}
	}
</style>
```