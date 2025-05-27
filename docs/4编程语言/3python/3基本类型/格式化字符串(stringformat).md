# stringformat

## string.Template


```python
name = "wang"
age = 18
s = f"{name}\t{age}\t{age:.2f}"
print(s)  # wang    18      18.00
```
[参考](https://www.python.org/dev/peps/pep-0498/)
## `str.format()`

`format`函数中前面可以以`*arg`列表形式填充值, 后面可以以`**kwargs`来填充值
```python
s = "{}\t{age}\t{:.2f}".format("wang", age=18, 18)
print(s)  # wang    18      18.00
```

[参考](https://docs.python.org/3/library/string.html#formatstrings)


## 格式化数字

### 语法
两种写法, `:`是用来区分`被格式化的数字`与`模板`. `被格式化的数字`在前, `模板`在后.
1. `f{}`写法是常规写法
2. `format`的写法将`被格式化的数字`作为参数
```python
num = 5
## 语法1: f"{}""
f"{num:#<+06.1f}"  # '+5.0##'
## 语法2: .format
"{:#<+06.1f}".format(num)  # '+5.0##'
```

### 格式

1. 格式语法: `[[fill]align][sign][#][0][width][grouping_option][.precision][type]`
2. 参数详解:
    1. fill, 指定左对齐和右对齐空白填充的字符, `<any character>`
    2. align, 对齐方式(只有在指定最小宽度`minimumwidth`大于字符串本来宽度才生效)  "<" | ">" | "=" | "^"
        1. `<` 左对齐, 默认
        2. `>` 右对齐
        3. `^` 中对齐
        4. `=` 正负号对齐, 如'+000000120'
    3. sign, 正负号
        1. `+` 表示正负值都要有符号
        2. `-` 表示只有负值有符号, 默认
        3. ` ` 表示正值前面使用空格
    4. `#`表示 binary, octal, and hexadecimal需要使用前缀'0b', '0o', and '0x' 
    5. `0`表示填充二进制,八进制,十六进制开头的数字
    4. width, 指定宽度, 如果不指定, 则使用字符串本身的宽度
    4. grouping_option, 对浮点表示类型和整数表示类型'd'使用下划线作为千位分隔符。 对于整数表示类型'b','o','x'和'X'，将为每 4 个数位插入一个下划线。 对于其他表示类型指定此选项则将导致错误。

        ```python
        '{:,}'.format(1234567890)  # '1,234,567,890'
        '{:_}'.format(1234567890)  # '1_234_567_890'
        ```
    5. .precision, 小数点后面保存的位数
    6. type
        1. `f` 表示浮点数
        1. `b` 表示二进制, binary
        1. `c` 表示字符, Character
        1. `d` 表示整型, Decimal Integer
        1. `o` 表示八进制, Octal
        1. `x` 表示小写十六进制, Hex
        1. `X` 表示大写十六进制, Hex
        1. `%` 百分比。将数字乘以100并显示为定点（f）格式，后面带一个百分号。



### 本节参考
- https://zhuanlan.zhihu.com/p/424862897




## 早期的`%-formatting`(不建议使用)
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

## 文章参考:
https://www.python.org/dev/peps/pep-0498/
https://realpython.com/python-formatted-output/