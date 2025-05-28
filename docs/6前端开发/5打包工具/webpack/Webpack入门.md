# datetime

详情参考:[官网](https://webpack.docschina.org/),本文使用`v5.37.0`版本
<!--more-->
### Webpack是什么
Webpack是一个前端构建工具,可以
- 将less转义为css
比如`.less`文件浏览器无法解析
- 将ES6的新语法,转义为浏览器能识别的语法
比如`import $ from 'jquery'`,浏览器就无法解析
- 将CSS,Json,Less等打包成一个文件
如果不使用Webpack上述内容,都需要我们自己手动分别维护

### Webpack工作流程
- 引入依赖形成代码块(chunk)
导入`import`依赖,形成代码块(chunk)
- 打包代码形成bundle
将`less`转换为`css`,将`ES6`语法转换为低级语法,打包形成`bundle.js`



### Webpack配置文件及核心概念
Webpack在根目录下使用`webpack.config.js`进行配置.有五个核心的概念:

- Entry
入口文件,相当于java和C的main入口,默认值如下:
```js
module.exports = {
  entry: './src/index.js',
};
```

- Output
将bundle输出到那里,主文件默认是`./dist/main.js`,其他生成文件默认放置在`./dist`文件夹中。
```js
const path = require('path');
module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './dist/main.js',
  },
};
```

- Loader
webpack能处理js/json资源,不能处理css/img等其他资源,需要具体Loader来处理
每个`loader`有两个属性:
    - test 属性，识别出哪些文件会被转换。
    - use 属性，定义出在进行转换时，应该使用哪个 loader。
```js
const path = require('path');
module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js',
  },
  module: {
    rules: [{ test: /\.txt$/, use: 'raw-loader' }],
  },
};
```


- Plugins
插件相比loader则可以用于执行范围更广的任务。包括：打包优化，资源管理，注入环境变量。
```js
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
module.exports = {
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
};
```


- Mode
指定开发环境或者生产环境,其默认值为 production.生产环境比开发环境多一个压缩js代码过程
```js
module.exports = {
  mode: 'production',//或development
};
```
### 初始化
详细参考[官网](https://webpack.docschina.org/guides/getting-started/#basic-setup)
1. 安装
```js
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```
`-P, --save-prod`写入生产依赖`dependencies`
`-D, --save-dev`写入开发依赖`devDependencies`

2. 创建目录
```js
  webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js

```
`index.html`导入打包后的js文件
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
    <script src="./dist/main.js"></script>
  </body>
</html>
```

3. 设置`package.json`

- 入口们见不是`index.js`
```js
"main": "index.js" //删除
```
- 加入快捷脚本
```js
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
}
```
4. 运行
```shell
npm run build
```