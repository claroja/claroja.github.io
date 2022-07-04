---
title: vuecli_project
toc: true
date: 2021-10-25 22:03:54
tags:
---
# 创建项目
1. `vue creap app` 创建项目
2. 选择vue版本: `vue3`


# 项目目录介绍

node_modules: 项目依赖
public: 放在public文件夹中的静态资源, webpack会原封不动的打包到dist文件夹
src: 源代码文件夹
    - assets: 放置静态资源(多个组件共用的静态资源), webpack会把静态资源当做一个模块, 打包到JS文件里.
    - components: 非路由组件(全局组件)
    - App.vue: 唯一的根组件
    - main.js: 程序的入口文件
babel.config.js: babel的配置文件
package.json: 项目的配置文件
package-lock.json: package.json的缓存文件


# 配置基础配置

1. 让项目在浏览器中自动打开
修改page.json文件中的"serve", 加上`--open`即可
```json
"scripts": {
"serve": "vue-cli-service serve --open",
"build": "vue-cli-service build",
"lint": "vue-cli-service lint"
}
```

2. 关闭ESLINT校验工具
太严格, 比如声明变量没有使用, 会报错.
创建vue.config.js文件, 输入以下内容, 并重启项目
```js
module.exports = {
    // 关闭ESLINT校验工具
    onLintSave:false
}
```

3. 配置src文件夹别名
为了方便以后的路径引用, 配置之后会输入`@`有提示
根目录下创建一个jsconfig.json文件
```
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"]
}
```
注意"exclude"表示在"node_modules", "dist"在这两个文件夹下不能使用`@`.

4. 配置less
1. 安装`npm install --save less less-loader@5` 注意安装loader是5版本的
2. 在组件的`<style>`中添加`lang="less"`属性, 既`<style scoped lang="less">`