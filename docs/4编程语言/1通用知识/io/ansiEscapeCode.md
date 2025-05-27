# svg

ansiEscapeCode

主要是对终端命令行进行操控, 比如移动终端的光标的位置, 改变终端输出的字体颜色等.

`ansi escape code`始终以`\x1b`开头，这两个的作用一样的：它们只是将ACSII序号27插入这里的不同方法。如果你看一个ASCII表，`0x1b`的字面意思是ESC，这就是为什么叫做`ansi escape code`.
`\x1b`的含义，再加上一个左中括号: `[`，他们一起组成的部分通常被称为`CSI (Control Sequence Introducer)`

## 语法:
`0x1B[` + `zero or more numbers, separated by ";"` + `a letter`.

1. `0x1B`是ansi escape code开始的标准
2. `[`是CSI (Control Sequence Introducer)
3. `zero or more numbers, separated by ";"` 由0个或者多个数字组成，是函数的参数，多个参数之间由分号进行分割。
4. `a letter` 是一个字母，是ansi escape code需要调用的函数名

例子:
```PowerShell
\x1b[  # call a CSI function
0;1;34 # function arguments (0, 1, 34)
m      # function name
```
上面这句话可以理解为`m(0, 1, 34)`; 同样，`\x1b[A` 可以理解为: `A()`

参考:
https://blog.csdn.net/u013391094/article/details/127143727
https://handwiki.org/wiki/ANSI_escape_code
https://solarianprogrammer.com/2019/04/08/c-programming-ansi-escape-codes-windows-macos-linux-terminals/