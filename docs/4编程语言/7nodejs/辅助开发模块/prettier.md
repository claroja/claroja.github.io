# prettier

## [安装](https://prettier.io/docs/en/install.html)&[官网](https://prettier.io/docs/en/index.html)

## [配置文件](https://prettier.io/docs/en/configuration.html)
1. `.prettierrc.cjs`自定义配置文件, 自己经常使用的配置
```js
module.exports = {
    printWidth: 180, //单行长度
    tabWidth: 4, //缩进长度
    semi: false, //句末使用分号
    singleQuote: false, //使用单引号
    bracketSpacing: false, //在对象前后添加空格-eg: { foo: bar }
    quoteProps: "preserve",
    proseWrap: 'preserve', //不知道怎么翻译
    endOfLine: 'auto',
}
```
2. `.prettierignore` 不需要prettier处理的文件(类似`.gitignore`)

### [配置选项](https://prettier.io/docs/en/options.html)
选项|默认值|解释
--|--|--
printWidth|80|默认的行长度
tabWidth|2|tab转换为space的个数
rangeStart|0|
rangeEnd|Infinity|
useTabs|false|将tab转换为space
semi|true|行尾加上分号
singleQuote|false|使用单引号代替双引号
quoteProps|"as-needed"|可选值"<as-needed|consistent|preserve>"
jsxSingleQuote|false|jsx中使用单引号代替双引号
trailingComma|"es5"|可选值"<es5|none|all>", 多行情况下，在末尾增加逗号
bracketSpacing|true|对象字面量增加空格, true示例结果{ foo: bar }, false示例结果{foo: bar}
jsxBracketSameLine|false|JSX里多行元素的最后一行使用`>`闭合元素
arrowParens|"always"|箭头函数, 单参数时是否使用括号包裹."always":(x) => x, "avoid":x => x
parser|None|指定解析器, prettier自动根据文件名识别, 不需要设置
filepath|None|同上, 指定解析器文件
requirePragma|false|只格式化头部包含特殊注释的文件, 比如`/** \n* @prettier \n*/`
insertPragma|false|格式化文件后, 在头部添上`@format`
proseWrap|"preserve"|"always"当大于printwith时折叠,"never"不进行折叠,"preserve"不进行任何处理
htmlWhitespaceSensitivity|"css"|[理解](https://prettier.io/blog/2018/11/07/1.15.0.html#whitespace-sensitive-formatting)
vueIndentScriptAndStyle|false|是否对vue的`<script>`和`<style>`执行缩进,[参考](https://github.com/prettier/prettier/issues/3888#issuecomment-459521863)
endOfLine|"lf"|可选择值"<lf|crlf|cr|auto>", 行结尾是`\n`(默认),还是`\r\n`
embeddedLanguageFormatting|"auto"|


### [对于`printWidth`和`proseWrap`的理解](https://github.com/prettier/prettier/issues/6488):
假设有一下文本:
第一行56个字符, 第二行69个字符
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Curabitur consectetur maximus risus, sed maximus tellus tincidunt et.
```
使用`--prose-wrap always`配置, 第一行被补充到80个字符(printWidth)输出:
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur
maximus risus, sed maximus tellus tincidunt et.
```
使用`--prose-wrap never`配置, 合并成一行
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur consectetur maximus risus, sed maximus tellus tincidunt et.
```
使用`--prose-wrap preserve`, 则不进行任何修改
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Curabitur consectetur maximus risus, sed maximus tellus tincidunt et.
```


## [和Linters一起使用](https://prettier.io/docs/en/integrating-with-linters.html)
单独安装Linters和Prettier会产生冲突, 因为Linters也会有代码规范, 所以可以将二者结合起来, 就有了:
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier), js规范
如果我们仅需要开发js代码, 则需要安装`eslinte`, `prettier`, 和`eslint-config-prettier`.
- `@vue/eslint-config-prettier": "^7.0.0"`
- `eslint": "^8.5.0"`
- `prettier": "^2.5.1"`

在`.eslintrc.cjs`中继承`@vue/eslint-config-prettier`即可, 既将`prettier`的规则加入到了`eslint`中, 并且解决了冲突
```js
"extends": [
// "plugin:vue/vue3-essential", //vue3的语法规则
// "eslint:recommended", // eslint的语法规则
"@vue/eslint-config-prettier" //处理和prettier的冲突
]
```

## [vscode集成](https://github.com/prettier/prettier-vscode)
vscode已经默认安装了`prettier`, 可以在Extensions选项的ENABLED栏中查看





