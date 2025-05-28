# vision_transforms

性能优化
<!--more-->

### 开发环境性能优化
* 优化打包构建速度
  * HMR
* 优化代码调试
  * source-map

### 生产环境性能优化
* 优化打包构建速度
  * oneOf
  * babel缓存
  * 多进程打包
  * externals
  * dll
* 优化代码运行的性能
  * 缓存(contenthash)
  * tree shaking
  * code split
  * 懒加载/预加载
  * pwa



### 代码调试
source-map: 源代码到构建后代码映射,方便debug
`webpack.config.js`配置
```js
devtool: 'esource-map'
```
如果生产环境需要隐藏代码可以使用'nosources-source-map'
- nosources-source-map 全部隐藏
- hidden-source-map 只隐藏源代码，会提示构建后代码错误信息


### 热更新
了解即可,不必为一点打包时间浪费时间

HMR: hot module replacement 热模块替换
作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块） 
    极大提升构建速度

```js
devServer: {
    contentBase: resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    hot: true// 开启HMR功能,需重启webpack
}
```


- 样式文件：可以使用HMR功能：因为style-loader内部实现了~
- js文件：默认不能使用HMR功能 --> 需要修改js代码，添加支持HMR功能的代码
- 注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。
- html文件: 默认不能使用HMR功能.同时会导致问题：html文件不能热更新了~ （不用做HMR功能）
解决：修改entry入口，将html文件引入


### JS缓存

#### 热编译
babel缓存,`cacheDirectory: true`这样就只会对修改的js进行编译  
```js
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
        corejs: { version: 3 },
        targets: {
            chrome: '60',
            firefox: '50'
        }
        }
    ]
    ],
    cacheDirectory: true// 开启babel缓存
}
}
```
#### 生产缓存处理
当我们更新js后,由于客户端浏览器有缓存机制,相同文件名会优先使用cached缓存.如果我们想要立刻更新,需要改变名称.
既每次开发完成后,都更新文件名,这样就能做到每次跟新,客户端也会立刻更新.
更新文件名有三种方式:

- hash: 每次wepack构建时会生成一个唯一的hash值。
缺点:因为js和css同时使用一个hash值。当更新一个文件时其他文件也会修改.
- chunkhash：根据chunk生成的hash值。如果打包来源于同一个chunk，那么hash值就一样
缺点: js和css的hash值还是一样的,因为css是在js中被引入的，所以同属于一个chunk
- contenthash: 根据文件的内容生成hash值。不同文件hash值一定不一样    

```js
output: {
filename: 'js/built.[contenthash:10].js',
path: resolve(__dirname, 'build')
}
```


### JS多文件编译
可以将node_modules中代码单独打包一个chunk最终输出
```json
optimization: {
    splitChunks: {
        chunks: 'all'
    }
},
```

### 懒加载和预加载
- 懒加载(webpackChunkName):当文件需要使用时才加载~
- 预加载(webpackPrefetch):等其他资源加载完毕会在使用之前,提前加载js文件,慎用浏览器可能不支持
```js
document.getElementById('btn').onclick = function() {
  import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test').then(({ mul }) => {//加载test.js模块
    console.log(mul(2, 2));
  });
};

```

### 排除模块
排除一些模块,通过CND,在html中手动导入

```js
  externals: {
    jquery: 'jQuery'
  }
```