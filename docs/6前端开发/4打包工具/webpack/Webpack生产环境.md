# promise

详情参考:[官网](https://webpack.docschina.org/),本文使用`v5.37.0`版本
- 开发环境中将CSS打包进js文件,体积太大
- 生产环境要对代码进行压缩(开发环境进行压缩会很慢,所以一般不进行压缩)
- 兼容性,比如css的浏览器前缀 
<!--more-->

### html处理:压缩
在`webpack.config.js`中配置
```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {// 压缩html代码
        collapseWhitespace: true,// 移除空格
        removeComments: true// 移除注释
      }
    })
  ],
  mode: 'production'
};
```

### CSS处理
#### 将CSS提取为单独文件

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,// 这个loader取代style-loader。将提取js中的css成单独文件
          'css-loader'// 将css文件转换为字符串
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'// 对输出的css文件进行重命名
    })
  ],
  mode: 'development'
};
```

#### CSS兼容性处理
css兼容性处理：postcss --> postcss-loader

1. 在`package.json`中配置`browserslist`,浏览器根据不同的环境来处理CSS.
`browserslist`可以在github中找

```json
"browserslist": {
    // 开发环境 --> 设置node环境变量：process.env.NODE_ENV = development
    "development": [
    "last 1 chrome version", //适配最新的chrome浏览器
    "last 1 firefox version",
    "last 1 safari version"
    ],
    // 生产环境：默认是看生产环境
    "production": [
    ">0.2%", // 排除0.2%受用率的浏览器
    "not dead",//排除已经不用的浏览器
    "not op_mini all"//排除op_mini浏览器
    ]
}
```
2. 在`webpack.config.js`中配置
`postcss-preset-env`的作用是: 帮postcss找到package.json中browserslist里面的配置，通过配置加载指定的css兼容性样式
```js
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 设置nodejs环境变量
// process.env.NODE_ENV = 'development'; //注意这个和webpack的mode是不一样的,这里只处理postcss-loader中的环境,既nodejs的环境
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-preset-env')()// postcss的插件,根据不同环境来配置
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    })
  ],
  mode: 'development'
};

```

#### 压缩 CSS
1. 安装
`optimize-css-assets-webpack-plugin`
2. 直接在`webpack.config.js`配置即可
```js
module.exports = {
  plugins: [
    new OptimizeCssAssetsWebpackPlugin()
  ],
};
```

### JS处理
#### JS语法检查eslint
语法检查： eslint-loader  eslint
注意：只检查自己写的源代码，第三方的库是不用检查的
1. 安装
`npm i eslint-config-airbnb-base eslint-plugin-import eslint -D`
2. 在`package.json`中设置
```js
"eslintConfig": {
    "extends": "airbnb-base"//使用airbnb的规则
}
```
3. 修改配置`webpack.config.js`文件
```js
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,//不包括第三方库
        loader: 'eslint-loader',
        options: {
          fix: true// 自动修复eslint的错误
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
};
```

#### js兼容性处理
js兼容性处理：babel-loader @babel/core 
1. 基本js默认的兼容性处理,只需`@babel/preset-env`即可
问题：只能转换基本语法，如promise高级语法不能转换
2. 需要做兼容性处理的就做：按需加载,首先安装`core-js`

```js
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [// 预设：指示babel做怎么样的兼容性处理
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',// 按需加载
                corejs: {
                  version: 3// 指定core-js版本,和core-js版本要一致
                },
                targets: {// 指定兼容性做到哪个版本浏览器
                  chrome: '60',
                  firefox: '60',
                  ie: '9',
                  safari: '10',
                  edge: '17'
                }
              }
            ]
          ]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  mode: 'development'
};
```

#### JS压缩
当`webpack.config.js`中的`mode`改为`production`时,webpack会自动压缩

### 生产环境配置文件
```js
const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

process.env.NODE_ENV = 'production';

const commonCssLoader = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  {
    // 还需要在package.json中定义browserslist
    loader: 'postcss-loader',
    options: {
      ident: 'postcss',
      plugins: () => [require('postcss-preset-env')()]
    }
  }
];

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [...commonCssLoader]
      },
      {
        test: /\.less$/,
        use: [...commonCssLoader, 'less-loader']
      },



      {
        test: /\.js$/,
        exclude: /node_modules/,
        // 一个文件只能被一个loader处理。
        // 当一个文件要被多个loader处理，那么一定要指定loader执行的先后顺序：先执行eslint 然后执行babel
        enforce: 'pre',//优先执行
        loader: 'eslint-loader',
        options: {
          fix: true
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'usage',
                corejs: {version: 3},
                targets: {
                  chrome: '60',
                  firefox: '50'
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.(jpg|png|gif)/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs',
          esModule: false
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        exclude: /\.(js|css|less|html|jpg|png|gif)/,
        loader: 'file-loader',
        options: {
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/built.css'
    }),
    new OptimizeCssAssetsWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
    })
  ],
  mode: 'production'
};
```