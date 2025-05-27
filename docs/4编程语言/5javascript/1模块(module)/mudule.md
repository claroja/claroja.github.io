# mudule

## javascript模块

早期,JS没有模块化的概念(Python中有module,Java中有Package).是直接引入整个JS代码.`<script type="text/javascript" src="index.js"></script>`. 缺点:

- 污染全局变量, 相当于将所有JS文本拼贴到一起
- 加载有顺序:
    - 使用getElement等方法会报错, 因为html文件还没加载
    - 如果JS文件有依赖关系, 则需要把被依赖的JS文件放前面, 先加载

语法如下:

- 内嵌在`<script>`标签内
- 在`<script src="">`中引入
- 在标签内部, 与具体时间绑定

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style></style>
    <!-- 1.内嵌式的js -->
    <script>
        // alert('沙漠骆驼');
    </script>
    <!-- 2. 外部js script 双标签 -->
    <script src="my.js"></script>
</head>
<body>
    <!-- 3. 行内式的js 直接写到元素的内部 -->
    <!-- <input type="button" value="hello" onclick="alert('world')"> -->
</body>
</html>
```



## ES6规范

ES6规范了整个JS的语法, 而不仅仅是模块化部分. 各个浏览器和Node.js都几乎原生支持该规范. CommonJS都会被取代. 以后ES6会成为前后端的通用规范.

### 按需导入方法和对象

通过`export`关键字, 指定具体变量和方法名, 在导入的时候也要使用`特定`的变量和方法名接收

- 导出

  ```js
  //demo1.js
  export const str = 'hello world'
  export function add(a,b){
      return a+b
  }
  ```

- 导入
  
  ```js
  //demo2.js
  import { str, f } from 'demo1'
  ```

### 导出整个模块

使用`export default`关键字, 将其后的`{}`所有内容作为`一个对象整体`导出, 接收者在导入时可以自定义名称

- 导出
  ```js
  //demo1.js
  export default {
      a: 'hello',
      b: 'world'      
  }
  ```

- 导入

  ```js
  //demo2.js
  import obj from 'demo1'
  ```


## CommonJS规范

由Node.js推广使用, 通过`requeire`来引入模块, 通过`module.exports`来导出模块.

- 引入模块例子
  
  ```js
  //add.js
  function add(a, b) {
    return a + b;
  }
  module.exports = {
    add: add // key可以被其他模块获得
  }
  ```

- 加载模块例子
  
  ```js
  var math = require('./add.js');
  math.add(1, 2)
  ```

缺点:
- 由于是服务端的规范(Node.js), 所以无法应用在浏览器, 可以通过Babel来转换为ES
- 同步, 可能会产生阻塞


## 将ES6语法转换为CommonJS

### 查看Node.js对ES6的支持情况

通过`npm install -g es-checker`,运行`es-checker`可以查看Node.js现在对ES6的支持率.
```js
...

Class
  √ Class
  √ super allowed in object methods
  √ class ABC extends Array { .. }

Module
  × Module export command
  × Module import command
```
node环境中的模块导入导出是CommonJS规范实现的, 现在还不支持写`import`和`export`.

### 使用babel, 将ES6语法转换为CommonJS
[详细参考](https://www.jb51.net/article/184136.htm)
1. 安装
`npm install --save-dev babel-cli babel-preset-es2015 babel-preset-es2017`
`babel-cli`如同`webpack-cli`, 可以让我们使用命令行
`babel-preset-es*`, 就是转换规则`2015`对应`ES6`(ES后面的数字比年份大一)
2. 使用`babel index.js`进行转化



### webpack中的ES6和CommonJS
[详细参考](https://webpack.docschina.org/api/module-methods/)

webpack 2 支持原生的 ES6 模块语法，意味着你无须额外引入 babel这样的工具，就可以使用`import`和`export`。但是注意，如果使用其他的 ES6+ 特性，仍然需要引入 babel。

另外,`webpack.config.js`中只能用CommonJS的语法, `module.exports`和`require()`, 因为是由Node.js运行的.
