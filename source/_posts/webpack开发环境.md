---
title: Webpack开发环境
toc: true
date: 2021-05-16 15:12:56
tags:
categories:
  - [工具, Webpack]
---
详情参考:[官网](https://webpack.docschina.org/),本文使用`v5.37.0`版本
<!--more-->
## 打包文件
### 打包JS文件和Json文件
Js和Json文件不需要特殊处理,直接打包即可
1. 创建`data.json`文件
```json
{"name":"wang"}
```
2. 在`index.js`文件中导入
```javascript
import data from './data.json';
console.log(data);
```

### 打包HTML文件
- 手工处理
在输出文件夹`dist`中创建html文件,并写入`<script src="./dist/main.js"></script>`

- 使用插件,自动处理
    1. 下载插件`npm i html-webpack-plugin -D`
    2. 修改配置文件

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');//插件是个类
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({// 功能：默认会创建一个空的HTML，自动引入打包输出的所有资源（JS/CSS）
      template: './src/index.html'// // 可以自己指定一个模板文件,复制 './src/index.html'文件,并自动引入打包输出的所有资源（JS/CSS）
    })
  ],
}
```
这样文件夹`dist`中就会自动输出`index.html`且添加`<script src="./bundle.js"></script>`



### 打包样式文件
webpack不能css和less文件,需要借助loader.
```js
import './index.css';
import './index.less';
```
1. 下载loader
`npm i style-loader css-loader -D`
处理`.less`文件时,还需要安装`npm i less-loader less -D`
2. 配置`webpack.config.js`

```js
  module: {
    rules: [// loader配置,不同文件必须配置不同loader处理
      {
        test: /\.css$/,
        use: [// use数组中loader执行顺序：从后到前
        //首先用css-loader处理转换为字符串,再用style-loader处理,添加到header
          'style-loader',// 创建style标签，css-loader转成的字符串放入head中
          'css-loader'// 将css文件变成字符串
        ]
      },
      {
        test: /\.less$/,
        use: [
          'style-loader',//再用style-loader装进header
          'css-loader',//再用css-loader处理成字符串
          'less-loader'//先用less-loader处理成css, 需要下载 less-loader和less
        ]
      }
    ]
  },
```
### 打包图片
- 网页中的图片可能是通过`html`直接引用,或者通过`css`来引用,所以要先使用`html-loader`, `css-loader`, `less-loader`.
- 图片需要使用`url-loader`,它依赖`file-loader`

1. 安装依赖
`npm i url-loader file-loader -D`

```js
  module: {
    rules: [
        {
            test: /\.less$/,//处理less文件中的img图片（负责引入img，从而能被url-loader进行处理）
            use: ['style-loader', 'css-loader', 'less-loader']
        },
        {   //需要安装html-loader
            test: /\.html$/,// 处理html文件的img图片（负责引入img，从而能被url-loader进行处理）
            loader: 'html-loader'
        },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          // 图片大小小于8kb，就会被base64处理, base64是在本地解析,如果过大CPU压力会很大
          // 优点: 减少请求数量（减轻服务器压力）缺点：图片体积会更大（文件请求速度更慢）
          limit: 8 * 1024,
          // 问题：因为url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
          // 解析时会出问题：[object Module]
          // 解决：关闭url-loader的es6模块化，使用commonjs解析(npm i html-loader@0.5已经解决这个问题)
          esModule: false,
          // 给图片进行重命名
          // [hash:10]取图片的hash的前10位
          // [ext]取文件原来扩展名
          name: '[hash:10].[ext]'
        }
      },
    ]
  },
```

### 打包其他资源
指不需要特殊处理的资源,比如字体,图标
1. 安装
`npm i file-loader -D`
2. 配置
```js
  module: {
    rules: [
      {
        // 排除css/js/html资源
        exclude: /\.(css|js|html|less)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]'
        }
      }
    ]
  },
```

## 开发环境配置
### 热更新devServer
开发服务器 devServer：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）.
只会在内存中编译打包，不会有任何输出.
1. 安装`npm i webpack-dev-server -D`
2. 配置文件
```js
module.exports = {
  devServer: {
    contentBase: resolve(__dirname, 'build'),// 项目构建后路径
    compress: true,// 启动gzip压缩
    port: 3000,// 端口号
    open: true// 自动打开浏览器
  }
};
```
3. 启动
`npx webpack-dev-server`
可以在`package.json`中配置`scripts`


### 开发环境配置文件
1. `webpack`命令会编译输出开发环境呀的文件,一般不用
2. `npx webpack-dev-server` 只会在内存中编译打包，没有输出,常用

```js
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          esModule: false,
          outputPath: 'imgs'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        exclude: /\.(html|js|css|less|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development',
  devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true
  }
};
```