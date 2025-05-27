# typeBasic



## 整型(Integers)

Integer类型可以有多重表示的方法, 无论使用哪一种表示方法, 最终的结果都一样, 不仅是内存二进制存储一样, python打印的也一样
前缀|表示|进制
--|--|--
`0b`或`0B`|Binary|2
`0o`或`0O`|Octal|8
无|decimal|10
`0x`或`0X`|Hexadecimal|16

```python
print(0b10) # 2
print(0o10) # 8
print(10) # 10
print(0x10) # 16

type(0b10) # <class 'int'>
type(0o10) # <class 'int'>
type(10) # <class 'int'>
type(0x10) # <class 'int'>

```

## 浮点型(Floating-Point Numbers)

```python
4.2  # 4.2 完整形式
type(4.2)  # <class 'float'>
4.  # 4.0 简写形式
.2  # 0.2 简写形式
.4e7  # 4000000.0 科学计数法 0.4 * 10^7
type(.4e7)  # <class 'float'>
4.2e-4  # 0.00042 科学技术发 4.2 * 10^-4
```

## 字符串(Strings)
单引号和双引号都可以表示字符串

```python
print('This string contains a single quote (') character.')  # 错误的写法
print("This string contains a single quote (') character.")  # 双引号+ 单引号是比较正常的写法
print('This string contains a double quote (") character.')  # 单引号 + 双引号也是可取的
print('This string contains a single quote (\') character.')  # 转义符 是比较正规的写法
print("This string contains a double quote (\") character.")  # 转义符 是比较正规的写法
```

### 转义字符

- 改变python特殊符号的解释(suppress the usual special interpretation of a character in a string)

转义符号|正常的解释|转义后的解释
--|--|--
`\'`|单引号, 表示字符串|字符单引号`'`
`\"`|双引号, 表示字符串|字符双引号`"`
`\<newline>`|新的一行|新的一行被忽略, 多行变成一行
`\\`|后面的被转义|字符`'\`'

- 给字符新的含义

Escape Sequence|“Escaped” Interpretation
--|--
`\a`|ASCII Bell (BEL) character
`\b`|ASCII Backspace (BS) character
`\f`|ASCII Formfeed (FF) character
`\n`|ASCII Linefeed (LF) character
`\N{<name>}`|Character from Unicode database with given `<name>`
`\r`|ASCII Carriage Return (CR) character
`\t`|ASCII Horizontal Tab (TAB) character
`\uxxxx`|Unicode character with 16-bit hex value xxxx
`\Uxxxxxxxx`|Unicode character with 32-bit hex value xxxxxxxx
`\v`|ASCII Vertical Tab (VT) character
`\ooo`|Character with octal value ooo
`\xhh`|Character with hex value hh


- 原生字符串(rawstring)

就是忽略转义字符


```python
print('foo\nbar')
## foo
## bar
print(r'foo\nbar')
## foo\nbar
print('foo\\nbar')
## foo\nbar
```
## 布尔(Boolean)


## int和str类型转换

### str转int

```python
int("10")  # 10  默认十进制
int("10",base=10)  # 10 完整写法
int("10",base=2)  # 2 二进制
int("0b10",base=2)  # 2  完整写法
int("10",base=8)  # 8 八进制
int("0o10",base=8) # 8 完整写法
int("10",base=16)  # 16 十六进制
int("0x10",base=16)  # 16 完整写法
```

### int转str

```python
str(10)  # '10'
str(0b10) # '2' 默认都以十进制表示
## 可以指定字符串的表显形式
f"{10:b}" # '1010' 二进制表示
f"{10:d}" # '10' 十进制表示
f"{10:o}"  # '12' 八进制表示
f"{10:x}"  # 'a' 十六进制表示

```



参考:
https://realpython.com/python-data-types/