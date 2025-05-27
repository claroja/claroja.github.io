# 模块module
nodejs有两种模块规范:
- [CommonJS modules](https://nodejs.org/dist/latest-v20.x/docs/api/modules.html)
- [ECMAScript modules](https://nodejs.org/dist/latest-v20.x/docs/api/esm.html)

ECMAScript是未来的发展方向, 也是这篇文章的主要内容.


## 指定模块类型
由于nodejs有两种模块导入模式, 所以需要告诉nodejs使用哪种方式. 如, 指定esm(ecma script modules)模式:
- 文件使用`.mjs`类型
- `package.json`文件中设置:
    - "type": "module"
    - "--input-type": "module"
    - 或者"--experimental-default-type": "module"


## 模块导入写法
有三种写法:
- 相对路径: `'./startup.js'`, 相对如本文件的路径, 注意这里不是相对于工作路径
- 绝对路径: `'file:///opt/nodejs/config.js'`
- Bare路径: `'some-package/shuffle'`, 

> 相对路径和绝对路径都需要带上文件的拓展名`.js`

## 例子
下面的代码导出(export)一个方法:
```js
// addTwo.mjs
function addTwo(num) {
  return num + 2;
}

export { addTwo }; 
```
下面的代码导入(import)一个方法:
```js
// app.mjs
import { addTwo } from './addTwo.mjs';

// Prints: 6
console.log(addTwo(4));
```







## 参考
[ECMAScript](https://zhuanlan.zhihu.com/p/367249029)
[ecma](https://262.ecma-international.org/14.0/)