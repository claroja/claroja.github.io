# webpack

## ts开发配置
实际开发中我们都需要使用构建工具对代码进行打包，TS一般也是结合构建工具一起使用

1. `npm init -y` 初始化, 创建package.json
2. `npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader clean-webpack-plugin` 下载依赖 共7个包
    - webpack 构建工具webpack
    - webpack-cli webpack的命令行工具
    - webpack-dev-server webpack的开发服务器
    - typescript ts编译器
    - ts-loader ts加载器，用于在webpack中编译ts文件
    - html-webpack-plugin webpack中html插件，用来自动创建html文件
    - clean-webpack-plugin webpack中的清除插件，每次构建都会先清除目录
3. 根目录下创建webpack的配置文件`webpack.config.js`
```javascript
const path = require('path');// 引入一个包
const HTMLWebpackPlugin = require('html-webpack-plugin');// 引入html插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin');// 引入clean插件
// webpack中的所有的配置信息都应该写在module.exports中
module.exports = {
    
    entry: "./src/index.ts",// 指定入口文件, 主文件
    // 指定打包文件所在目录
    output: {
        path: path.resolve(__dirname, 'dist'),// 指定打包文件的目录
        filename: "bundle.js",// 打包后文件的文件
        environment:{// 告诉webpack不使用箭头
            arrowFunction: false
        }
    },
    // 指定webpack打包时要使用模块
    module: {
        rules: [// 指定要加载的规则
            {
                test: /\.ts$/,// test指定的是规则生效的文件
                use: [// 要使用的loader
                     {// 配置babel
                         loader:"babel-loader",// 2. 再用babel转换成不同浏览器兼容的形式
                         options: {// 设置babel
                             presets:[// 设置预定义的环境
                                 [
                                     "@babel/preset-env",// 指定环境的插件
                                     {// 配置信息
                                         targets:{// 要兼容的目标浏览器
                                             "chrome":"58",
                                             "ie":"11"
                                         },
                                         "corejs":"3",// 指定corejs的版本
                                         "useBuiltIns":"usage"// 使用corejs的方式 "usage" 表示按需加载
                                     }
                                 ]
                             ]
                         }
                     },
                    'ts-loader' //1. 先用ts-loader加载ts文件
                ],
                exclude: `/node-modules/`// 要排除的文件
            }
        ]
    },
    // 配置Webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "这是一个自定义的title"
            template: "./src/index.html"
        }),
    ],
    // 用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
};
```

4. 根目录下创建tsconfig.json，配置可以根据自己需要

```json
{
    "compilerOptions": {
        "target": "ES2015",
        "module": "ES2015",
        "strict": true
    }
}
```
5. 修改package.json添加如下配置

```json
{
    ...略...
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack",
    "start": "webpack serve --open chrome.exe"
    },
    ...略...
}
```

6. 在src下创建ts文件，并在并命令行执行```npm run build```对代码进行编译，或者执行```npm start```来启动开发服务器


## babel




开发中还经常需要结合babel来对代码进行转换以使其可以兼容到更多的浏览器，在上述步骤的基础上，通过以下步骤再将babel引入到项目中。

1. 安装依赖包：
- ```npm i -D @babel/core @babel/preset-env babel-loader core-js```
- 共安装了4个包，分别是：
- @babel/core babel的核心工具 
- @babel/preset-env babel的预定义环境
- @babel-loader babel在webpack中的加载器
- core-js core-js用来使老版本的浏览器支持新版ES语法

2. 修改webpack.config.js配置文件
```javascript
...略...
module: {
    rules: [
        {
            test: /\.ts$/,
            use: [
                {
                    loader: "babel-loader",
                    options:{
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    "targets":{
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    "corejs":"3",
                                    "useBuiltIns": "usage"
                                }
                            ]
                        ]
                    }
                },
                {
                    loader: "ts-loader",

                }
            ],
            exclude: /node_modules/
        }
    ]
}
...略...
```
