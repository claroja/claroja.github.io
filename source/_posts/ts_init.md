---
title: ts_init
toc: true
date: 2021-01-20 22:03:54
---
# 环境配置
1. 安装node.js
2. `npm i -g typescript`


# 简单使用
`tsc`命令可以将ts文件转换为任意版本的js, 比如es3,es6等
```
tsc xxx.ts
```
编译文件时，使用 -w 指令后
```sh
tsc xxx.ts -w
```

# 工程配置
主要功能是自动编译`ts`文件, 并自动运行编译好的`js`文件

1. 创建工程`npm --init`
2. 创建tsc配置文件`tsc --init`
3. 安装`npm install --save-dev nodemon`
4. 更改`package.json`中的`scripts`, 添加:`"build": "tsc -w | nodemon ./hello.js"`
5. 执行`npm run build`

```json
{
  "name": "ts",
  "version": "1.0.0",
  "description": "",
  "main": "hello.js",
  "dependencies": {
    "nodemon": "^2.0.15"
  },
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "tsc -w | nodemon ./hello.js"
  },
  "author": "",
  "license": "ISC"
}

```


# 自动编译整个项目
如果直接使用tsc指令，则可以自动将当前项目下的所有ts文件编译为js文件。
但是能直接使用tsc命令的前提时，要先在项目根目录下创建一个ts的配置文件 `tsconfig.json`

属性|描述|样例
--|--|--
include|需要编译的目录|`"include":["src/**/*", "tests/**/*"]`
exclude|需要排除的目录|`"exclude": ["./src/hello/**/*"]`
extends|继承的配置文件, 默认已经排除了node_modules文件夹| `"extends": "./base"`继承base.json中的配置信息
files|需要编译的文件(文件少的时候使用)| `"files": ["core.ts","sys.ts",]` 
compilerOptions: 在compilerOptions中包含多个子选项，用来完成对编译的配置


compilerOptions中的属性|描述|样例
--|--|--
target|设置ts代码编译的目标版本, 可选值: ES3（默认）、ES5、ES6/ES2015等|`"compilerOptions": {"target": "ES6"}`
lib|标准库, 可选值: ES5、ES6/ES2015等|`"compilerOptions": {"lib": ["ES6", "DOM"]}`
module|设置编译后代码使用的模块化系统, 可选CommonJS、ES2020等| `"compilerOptions": {"module": "CommonJS"}`
outDir|编译后文件的所在目录,默认相同文件夹|`"compilerOptions": {"outDir": "dist"}`
outFile|所有的文件编译为一个js文件| `"compilerOptions": {"outFile": "dist/app.js"}`
allowJs|是否对js文件编译, 默认false |`"compilerOptions": {"allowJs": true}`
checkJs|是否对js文件进行检查, 按照ts语法, 默认false |`"compilerOptions": {"checkJs": true}`
removeComments|是否删除注释, 默认值：false|
noEmit|不对代码进行编译, 默认值：false|
noEmitOnError|有错误的情况下不进行编译, 默认值：false|
rootDir|指定代码的根目录，默认情况下编译后文件的目录结构会以最长的公共目录为根目录|`"compilerOptions": {"rootDir": "./src"}`
    
    
# 严格检查
- strict 启用所有的严格检查，默认值为true，设置后相当于开启了所有的严格检查, 既下面的几个都开启
- alwaysStrict 总是以严格模式对代码进行编译
- noImplicitAny 禁止隐式的any类型 
- noImplicitThis 禁止类型不明确的this
- strictBindCallApply 严格检查bind、call和apply的参数列表
- strictFunctionTypes 严格检查函数的类型
- strictNullChecks 严格的空值检查
- strictPropertyInitialization 严格检查属性是否初始化


# 样例
```json
{
  "compilerOptions": {
    "module": "es2015",
    "target": "es2015",
    "strict": true,
    "outDir": "./dist",
    "noEmitOnError": true
  },
  "include": [
    "./src/**/*"
  ]
}
```