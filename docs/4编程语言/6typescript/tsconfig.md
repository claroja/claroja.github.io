
# tsconfig.json

tsconfig.json文件中指定待编译文件和定义编译选项。


1. 当命令行上指定了输入文件时, tsconfig.json文件会被忽略。
2. 当命令行未指定输入文件时, 编译器会从当前目录开始去查找tsconfig.json文件，



## 参数
1. `"compileOnSave": false`: 保存文件的时候自动编译
2. `"compilerOptions": {}`: 编译选项, 未指定则使用[默认值](https://link.zhihu.com/?target=https%3A//www.typescriptlang.org/docs/handbook/compiler-options.html)

    1. `"incremental: true"`: 第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度
    2. `"tsBuildInfoFile": "./buildFile"`: 增量编译文件的存储位置
    3. `"diagnostics": true`: 打印诊断信息
    4. `"target": "ES5"`: 指定编译后的 JavaScript 代码应使用哪个版本的 ECMAScript 标准。

        1. `"es3"`：编译为 ECMAScript 3（最早的 JavaScript 标准，几乎所有浏览器都支持）。
        2. `"es5"`：编译为 ECMAScript 5（现在支持的最广泛的标准）。
        3. `"es6" / "es2015"`：编译为 ECMAScript 2015（ES6），支持更现代的语法，如 class、let、const 等。
        4. `"esnext"`：编译为最新的 ECMAScript 标准，支持最前沿的语言特性。

    5. `"module": "CommonJS"`:指定了 TypeScript 编译器如何处理模块化代码。TypeScript 支持几种模块化系统，最常用的有：

        1. `"commonjs"`：适用于 Node.js 环境。
        2. `"es6"`：使用 ECMAScript 6 的模块化语法。
        3. `"amd"`：适用于浏览器中的模块加载。
        4. `"system"`：适用于 SystemJS 模块加载。
 
    6.  `"outFile": "./app.js"`: 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置`"module": "AMD"`,
    7.  `"lib": ["DOM", "ES2015", "ScriptHost", "ES2019.Array"]`: TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入"ES2019.Array",
    8.  `"allowJS": true`: 允许编译器编译JS，JSX文件
    9.  `"checkJs": true`: 允许在JS文件中报错，通常与allowJS一起使用
    10. `"outDir": "./dist"`: 指定输出目录
    11. `"rootDir": "./"`: 指定输出文件目录(用于输出)，用于控制输出目录结构
    12. `"declaration": true`: 生成声明文件，开启后会自动生成声明文件
    13. `"declarationDir": "./file"`: 指定生成声明文件存放目录
    14. `"emitDeclarationOnly": true`: 只生成声明文件，而不会生成js文件
    15. `"sourceMap": true`: 生成目标文件的sourceMap文件
    16. `"inlineSourceMap": true`: 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中
    17. `"declarationMap": true`: 为声明文件生成sourceMap
    18. `"typeRoots": []`: 声明文件目录，默认时node_modules/@types
    19. `"types": []`: 加载的声明文件包
    20. `"removeComments":true`: 删除注释 
    21. `"noEmit": true`: 不输出文件,即编译后不会生成任何js文件
    22. `"noEmitOnError": true`: 发送错误时不输出任何文件
    23. `"noEmitHelpers": true`: 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用
    24. `"importHelpers": true`: 通过tslib引入helper函数，文件必须是模块
    25. `"downlevelIteration": true`: 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现
    26. `"strict": true`: 开启所有严格的类型检查, 启用 strict 后，TypeScript 会默认开启以下几个重要的检查项：

        1. `noImplicitAny`：防止隐式 any 类型。
        2. `strictNullChecks`：确保严格区分 null 和 undefined。
        3. `strictFunctionTypes`：确保函数类型的严格匹配。
    
    27. `"alwaysStrict": true`: 在代码中注入'use strict'
    28. `"noImplicitAny": true`: 不允许隐式的any类型
    29. `"strictNullChecks": true`: 不允许把null、undefined赋值给其他类型的变量
    30. `"strictFunctionTypes": true`: 不允许函数参数双向协变
    31. `"strictPropertyInitialization": true`: 类的实例属性必须初始化
    32. `"strictBindCallApply": true`: 严格的bind/call/apply检查
    33. `"noImplicitThis": true`: 不允许this有隐式的any类型
    34. `"noUnusedLocals": true`: 检查只声明、未使用的局部变量(只提示不报错)
    35. `"noUnusedParameters": true`: 检查未使用的函数参数(只提示不报错)
    36. `"noFallthroughCasesInSwitch": true`: 防止switch语句贯穿(即如果没有break语句后面不会执行)
    37. `"noImplicitReturns": true`: 每个分支都会有返回值
    38. `"esModuleInterop": true`: 支持在编译时导入 CommonJS 模块，模拟 ECMAScript 模块的行为。这对于一些老的库和模块非常有用。启用它后，你可以像导入 ES6 模块一样导入 CommonJS 模块：
    39. `"allowUmdGlobalAccess": true`: 允许在模块中全局变量的方式访问umd模块
    40. `"moduleResolution": "node"`: 模块解析策略，ts默认用node的解析策略，即相对的方式导入
    41. `"baseUrl": "./"`: 解析非相对模块的基地址，默认是当前目录
    42. `"paths": {}`: 路径映射，相对于baseUrl
    43. `"rootDirs": ["src","out"]`: // 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错
    44. `"listEmittedFiles": true`: // 打印输出文件
    45. `"listFiles": true`: 打印编译的文件(包括引用的声明文件)
3. exclude/include : 排除的文件或文件夹, 支持 glob 通配符：

    1. `*` 匹配0或多个字符（不包括目录分隔符）
    2. `?` 匹配一个任意字符（不包括目录分隔符）
    3. `**/` 递归匹配任意子目录


    ```js
    "exclude": [
        "src/lib" // 排除src目录下的lib文件夹下的文件不会编译
    ]
    ```

4. extends: 引入其他配置文件，继承配置。

    ```js
    {
        // 把基础配置抽离成tsconfig.base.json文件，然后引入
        "extends": "./tsconfig.base.json"
    }
    ```

5. files: 指定要编译的文件


    ```js
    {
    "files": [
        // 指定编译文件是src目录下的leo.ts文件
        "scr/leo.ts"
    ]
    }

    ```

6. references : 指定工程引用依赖。

    将前端项目和后端node项目放在同一个目录下开发，两个项目依赖同一个配置文件和通用文件，但我们希望前后端项目进行灵活的分别打包，那么我们可以进行如下配置：

    ```js
    {
        "references": [ // 指定依赖的工程
            {"path": "./common"}
        ]
    }

    ```

7. typeAcquisition : 自动引入库类型定义文件(.d.ts)。包含 3 个子属性：

    1. `enable` : 布尔类型，是否开启自动引入库类型定义文件(.d.ts)，默认为`false`；
    2. `include`: 数组类型，允许自动引入的库名，如：`[“jquery”, “lodash”]`；
    3. `exculde` : 数组类型，排除的库名。


    ```js
    {
        "typeAcquisition": {
            "enable": false,
            "exclude": ["jquery"],
            "include": ["jest"]
        }
    }

    ```


## 参考
1. https://www.tslang.cn/docs/handbook/tsconfig-json.html
2. https://zhuanlan.zhihu.com/p/285270177
3. https://segmentfault.com/a/1190000045668688
4. https://segmentfault.com/a/1190000045668688