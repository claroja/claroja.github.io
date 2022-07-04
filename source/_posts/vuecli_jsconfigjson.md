---
title: vuecli_jsconfigjson
toc: true
date: 2021-10-25 22:03:54
tags:
---
目录中存在jsconfig.json文件表示该目录是JavaScript项目的根目录。
jsconfig.json源于tsconfig.json，是TypeScript的配置文件。jsconfig.json相当于tsconfig.json的“allowJs”属性设置为true。
文件本身可以选择列出属于项目的文件，要从项目中排除的文件，以及编译器选项。

```js
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

属性|描述
--|--
exclude|列表, 其中的文件将不被编译(不是源码的一部分), 可以使用glob语法, 比如`src/**/*`
include|和exclude相反
target|指定使用的默认库(lib.d.ts), 可选“es3”，“es5”，“es6”，“es2015”，“es2016”，“es2017”，“es2018”，“esnext”
baseUrl|
paths|

参考:
https://segmentfault.com/a/1190000018013282