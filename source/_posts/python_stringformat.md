---
title: python_stringformat
toc: true
date: 2021-11-30 21:01:11
---



python格式化字符串有三种方法:

# string.Template
[参考](https://www.python.org/dev/peps/pep-0498/)
前两种方式是python2时代的产物, 而`f-string`则是3.6之后加入的.
```python
name = "wang"
age = 18
s = f"{name}\t{age}"
print(s)  # wang	18
```

# `str.format()`
[参考](https://docs.python.org/3/library/string.html#formatstrings)
```python
s = "{}\t{age}".format("wang", age=18)
print(s)  # wang	18
```
`format`函数中前面可以以`*arg`列表形式填充值, 后面可以以`**kwargs`来填充值

# Format Specification
常用的就是`[width][.precision][type]`三者

```python
# [[fill]align][sign][width][.precision][type]

"%#<+06.1f" % 5  # 不支持左右对齐, unsupported format character '>' (0x3e) at index 2
"{:#<+06.1f}".format(5)  # '+5.0##'
num = 5
f"{num:#<+06.1f}"  # '+5.0##'
```

```python
format_spec     ::=  [[fill]align][sign][#][0][width][grouping_option][.precision][type]
fill            ::=  <any character>
align           ::=  "<" | ">" | "=" | "^"
sign            ::=  "+" | "-" | " "
width           ::=  digit+
precision       ::=  digit+
type            ::=  "b" | "c" | "d" | "e" | "E" | "f" | "F" | "g" | "G" | "n" | "o" | "s" | "x" | "X" | "%"
```

## fill
指定左对齐和右对齐空白填充的字符

## align
只有在指定最小宽度`minimumwidth`大于字符串本来宽度才生效.

`<` 左对齐, 默认
`>` 右对齐
`^` 中对齐
`=` 正负号对齐, 如'+000000120'

### sign
`+` 表示正负值都要有符号
`-` 表示只有负值有符号, 默认
` ` 表示正值前面使用空格

### #
`#`表示 将binary, octal, and hexadecimal需要使用前缀'0b', '0o', and '0x'

### 0
`0`表示填充,二进制,八进制,十六进制开头的数字, 默认为0

### minimumwidth
指定宽度, 如果不指定, 则使用字符串本身的宽度

### .precision
小数点后面保存的维数

### type
`b` 表示二进制, binary
`c` 表示字符, Character
`d` 表示整型, Decimal Integer
`o` 表示八进制, Octal
`x` 表示小写十六进制, Hex
`X` 表示大写十六进制, Hex


# 早期的`%-formatting`(不建议使用)
[参考](https://docs.python.org/3/library/stdtypes.html#printf-style-string-formatting)
```python
s = "%s\t%d" % ("wang", 18)
print(s)  # wang	18
```
其中`%s`是字符串占位符, 另外还有`%d`整型占位符. `%`是固定语法. `(value1,value2)`是要填充的值,这里是元组形式`()`

`%`后面也可以跟字典`{}`
```python
s = "%(name)s\t%(age)d" % {"name":"wang", "age":18}
print(s)  # wang	18
```


`%[(name)][flags][width].[precision]typecode`
- (name)为命名
- flags可以有+,-,' '或0。+表示右对齐。-表示左对齐。' '为一个空格，表示在正数的左侧填充一个空格，从而与负数对齐。0表示使用0填充。
- width表示显示宽度
- precision表示小数点后精度

```python
print("%05.2f" % 5)  # 05.00
```
- flags = 0, 表示多余的位使用0填充
- width = 5, 表示数字整体宽度是5(包含小数点), 
- precision = 2, 表示小数点后面保留2位, 因为width=5, 所以小数点前面也是2位











参考:
https://www.python.org/dev/peps/pep-0498/