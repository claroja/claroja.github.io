# 正则(regex)

## 正则字符

表达式|说明
--|--
`.`|配置除换行符(`\n`)以外的字符, `re.search('1.3', 'foo123bar')  # 123 `
`\w`|匹配字母或数字或下划线或汉字, `\W`是取反,  `re.search('ba[artz]', 'foobarqux')  # bar`
`\s`|匹配空白字符(空格,制表符`\t`,换行符`\n`), `\S`是取反
`\d`|匹配数字`[0-9]`, `\D`是取反
`\b`|匹配单词的开始或结束, 可以理解为匹配非字符和数字(空格, 制表符`\t`,换行符`\n`,普通符号如`.`), `\B`是取反
`^`|多行模式下匹配字符串的开始, 多行模式下可以理解位开始的`\n`
`$`|单行模式下匹配字符串的结束, 多行模式下可以理解为结尾的`\n`


例子: 
- `\ba\w*\b`匹配以字母a开头的单词——先是某个单词开始处(`\b`)，然后是字母`a`,然后是任意数量的字母或数字(`\w*`)，最后是单词结束处(`\b`)。
- `^`与`$`

    - 单行模式下(整个文本当成一个输入)
        
        比如, 一个网站如果要求你填写的密码号必须为5位数字时，可以使用：`^\d{5}$`. 如果不使用`^`和`$`的话，对于`\d{5}`而言，使用这样的方法就只能保证字符串里包含5连续位数字，而不是整个字符串就是5位数字。

        ```python
        import re
        re.search('^\d{5}$', '12345')  # match 严格的5位数字
        re.search('^\d{5}$', '123456')  # not match  如果是6位则不匹配
        re.search('\d{5}', '123456')  # match 不加`^`和`$`, 则只要包含5位就可以
        ```

    - 多行模式下(先对文本按行切分, 每一行当成一个输入)
        `^`和`$`的意义就变成了匹配行的开始处和结束处。

        ```python
        import re
        re.search('^c', 'a\nb\nc')  # not match, 在单行模式下(默认), `^c`是指整个字符串(字符串中包含换行)的开始.
        re.search('(?m)^c', 'a\nb\nc')  # match, 多行模式下, `^c`既可以指整个字符串的开始, 也可以指行的开始(`\n`), 所以可以匹配.
        ```
- `.`

    ```python
    re.search('foo.bar', 'fooxbar')  # fooxbar
    re.search('foo.bar', 'foo*bar')  # foo*bar
    re.search('foo.bar', 'foo\nbar')  # None 默认情况下`.`不能匹配`\n`
    ```

- `\b`

    ```python
    re.search(r'\bbar', 'foo bar') # bar
    re.search(r'\bbar', 'foo.bar') # bar
    re.search(r'\bbar', 'foobar') # None
    re.search(r'foo\b', 'foo bar') # foo
    re.search(r'foo\b', 'foo.bar')  # foo
    re.search(r'foo\b', 'foobar')  # None
    re.search(r'\bbar\b', 'foo bar baz') # bar
    re.search(r'\bbar\b', 'foo(bar)baz')  # bar
    re.search(r'\bbar\b', 'foobarbaz')  # None
    ```

## 数量限定符

语法|说明
--|--
`*`|重复0次或多次, 贪婪
`+`|重复1次或多次, 贪婪
`?`|重复0次或1次, 贪婪
`*?`|重复0次或多次, 懒惰
`+?`|重复1次或多次, 懒惰
`??`|重复0次或1次, 懒惰
`{n}`|重复n次
`{n,}`|重复n次或多次
`{n,m}`|重复n到m次
`{,}`|任意次


例子:

- `*`

    ```python
    re.search('foo-*bar', 'foobar')  # foobar 零次匹配
    re.search('foo-*bar', 'foo-bar')  # foo-bar 一次匹配
    re.search('foo-*bar', 'foo--bar')  # foo--bar 两次匹配
    re.search('foo.*bar', '# foo $qux@grault % bar #')  # 任意次匹配任意字符
    ```

- `+`

    ```python
    re.search('foo-+bar', 'foobar')  # None 零次匹配
    re.search('foo-+bar', 'foo-bar')  # foo-bar 一次匹配
    re.search('foo-+bar', 'foo--bar')  # foo--bar 两次匹配
    ```

- `?`

    ```python
    re.search('foo-?bar', 'foobar') # foobar 零次匹配
    re.search('foo-?bar', 'foo-bar')  # foo-bar 一次匹配
    re.search('foo-?bar', 'foo--bar')  # None 两次匹配
    ```

- `*?,+?,??`

    ```python
    re.search('<.*>', '%<foo> <bar> <baz>%') # <foo> <bar> <baz>
    ```

    正则表达式`<.*>`的含义:
    1. `<`匹配一个`<`字符
    2. `.*`一系列的字符
    3. `>`匹配一个`>`字符
    但是`>`具体指哪一个呢?有三种情况:
    1. `foo`字符串后面的
    2. `bar`字符串后面的
    3. `baz`字符串后面的

    由于`*`是贪婪的, 所以将匹配最长的字符串, 如果想匹配最短的字符串, 则可以使用`*?`
    ```python
    re.search('<.*?>', '%<foo> <bar> <baz>%')  # foo
    ## 同样的道理也使用+和?
    re.search('<.+>', '%<foo> <bar> <baz>%')  # <foo> <bar> <baz>
    re.search('<.+?>', '%<foo> <bar> <baz>%')  # <foo>
    re.search('ba?', 'baaaa')  # ba
    re.search('ba??', 'baaaa')  # b
    ```

## 逻辑或

语法|说明
--|--
`[]`|中括号内部任意一位, `[0-9]` 匹配0到9的任意一个数字，等同于\d, `[a-z0-9A-Z_]` 匹配任意字符，等同于\w如果不考虑中文
`[^x]`|匹配除`x`以外的任意字符, `[^aeiou]`匹配除了aeiou这几个字母以外的任意字符, `^[^a]` 匹配非a开头的字符
`A|B`|逻辑或,匹配到A或B既停止, `0|1|2|3|4|5|6|7|8|9`等同于`[0-9]`


- `[]`

    ```python
    re.search('ba[artz]', 'foobarqux')  # bar []中只代表一个字符
    re.search('ba[artz]', 'foobazqux')  # baz []中只代表一个字符
    re.search('[)*+|]', '123*456')  # * `*`在`[]`中失效
    re.search('[)*+|]', '123+456')  # + `+`在`[]`中失效, 在正则中有特殊含义的符号, 在`[]`中都会失效
    re.search('[ab\]cd]', 'foo[1]')  # ] `]`有特殊含义, 所以使用转义字符
    re.search('[a-z]', 'FOObar')  # 使用`-`表示连续
    re.search('[0-9][0-9]', 'foo123bar')  # 12
    re.search('[0-9a-fA-f]', '--- a0 ---')  # a 十六进制
    re.search('[-abc]', '123-456') # - 匹配-本身
    re.search('[abc-]', '123-456')  # - 匹配-本身
    re.search('[ab\-c]', '123-456')  # - 如果-有特殊含义, 比如表示连续, 则需要使用转义字符
    re.search('[^0-9]', '12345foo')  # f 当^在[]的开头 f 匹配非0-9的字符
    re.search('[#:^]', 'foo^bar:baz#qux')  # ^ 当^不在[]的开头, 则就表示^本身
    ```

## 分组

### 分组定义
分组是用圆括号“()”括起来的正则表达式，匹配出的内容就表示一个分组。

1. 序号分组`(exp)`: 把括号内的正则作为一个分组，系统自动分配组号，可以通过分组号引用该分组, 比如 `\1`,`\2`. (在vscode中引用使用`$`,如`$1`, `$2`)
2. 命名分组`(?P<name>exp)`: 定义一个命名分组，系统为该分组分配分组号，可以通过分组名或分组号引用该分组；
3. 不捕获分组`(?:exp)` ：定义一个不捕获分组，该分组只在当前位置匹配文本，在该分组之后，无法引用该分组，因为该分组没有分组名，没有分组号，也不会占用分组编号；


### 分组引用
引用分组的目的是对重复出现的文本进行匹配，注意，不是出现重复的模式，而是出现重复的文本。由于分组有编号和名称，因此，可以通过名称和编号来引用前面已经出现的分组。

正则表达式中，可以通过分组名或分组号来引用：
1. `\n`：使用分组的编号来引用分组，分组按照正则表达式中出现的顺序编号1、2、3、... `(\w+)\1`等价于`(\w+)(\w+)`, 也就是是`\1`表示第一个分组`(\w+)`
2. `(?P=name)`：引用名称为name的分组, `(?P<word>\w+)(?P=word)`等价于`(\w+)(\w+)`, 也就是`(?P=word)`表示组名为`word`的`(?P<word>\w+)`

### 分组序号

在正则表达式中，分组编号是自动进行的。当使用圆括号表示分组时，从正则表达式的左边开始看，看到的第一个左括号 “(” 表示第一个分组，第二个 "(" 表示第二个分组，依次类推，需要注意的是，有一个隐含的全局分组（分组编号是0），就是整个正则表达式。
```python
import re

str = 'abcabcabcabcdedede'
result = re.match('((abc)+)((de)+)', str)
print(result.group(1))  # abcabcabcabc
print(result.group(2))  # abc
print(result.group(3))  # dedede
print(result.group(4))  # de
```


### python引用分组结果
在python中, 正则表达式匹配的结果, 是`re.Match`对象, 需要通过`group()`方法来获取最终的字符串.

1. group()

    获取序号分组的结果:
    - `group()`默认参数是`0`, 即`group(0)`就是匹配正则表达式整体结果
    - `group(1)` 列出第一个括号匹配部分，`group(2)` 列出第二个括号匹配部分，`group(3)` 列出第三个括号匹配部分。


    ```python
    import re
    a = "123abc456"
    re.search("([0-9]*)([a-z]*)([0-9]*)",a).group(0)   #123abc456,返回整体
    re.search("([0-9]*)([a-z]*)([0-9]*)",a).group(1)   #123
    re.search("([0-9]*)([a-z]*)([0-9]*)",a).group(2)   #abc
    re.search("([0-9]*)([a-z]*)([0-9]*)",a).group(3)   #456
    ```
2. groupdict()
    
    获取命名分组的结果
    ```python
    m = re.match(r'(?P<user>\w+)@(?P<website>\w+)\.(?P<extension>\w+)','myname@hackerrank.com')
    m.groupdict()
    {'website': 'hackerrank', 'user': 'myname', 'extension': 'com'}
    ```

3. groups()

    它返回一个包含所有匹配子群的元组。

    ```python
    m = re.match(r"(\d+)\.(\d+)", "24.1632")
    m.groups()
    ## ('24', '1632')
    ```


### 应用

1. 有条件的筛选

    ```python
    ## 将整个字符串用字符串某个部分替换
    re.sub(r'\d\d(\d)\d', r'\1' ,'2131')
    ```

2. 字符串对换位置

    ```python
    import re
    ## 替换时间格式 01/11/2021 替换成 2021/01/11
    s = "today is 09-12-2021"
    day = re.sub(r'(\d{2})-(\d{2})-(\d{4})', r'\3-\2-\1', s)
    print(day) # today is 2021-12-09

    ## 也可以用g<3>-g<2>-g<1>
    day2 = re.sub(r'(\d{2})-(\d{2})-(\d{4})', r'g<3>-g<2>-g<1>', s)
    print(day) # today is 2021-12-09
    ```



### 参考:
https://www.cnblogs.com/ljhdo/p/10678281.htm
[本段参考](https://blog.csdn.net/chr1991/article/details/80945455)




## 零宽断言


- Lookahead

    `(?=<lookahead_regex>)`

    ```python
    re.search('foo(?=[a-z])', 'foobar')  # foo `(?=[a-z]) `表示foo后面必须跟[a-z]字母才满足要求, 然后返回foo
    re.search('foo(?=[a-z])', 'foo123')  # None
    re.search('foo([a-z])', 'foobar')  # foob
    ```

    `(?!<lookahead_regex>)`取反

    ```python
    re.search('foo(?=[a-z])', 'foobar')  # foo
    re.search('foo(?![a-z])', 'foobar')  # None
    re.search('foo(?=[a-z])', 'foo123')  # None
    re.search('foo(?![a-z])', 'foo123')  # foo
    ```

- lookbehind

    ```python
    re.search('(?<=foo)bar', 'foobar')  # bar
    re.search('(?<=qux)bar', 'foobar')  # None
    ```

    `(?<!<lookbehind_regex>)`取反

    ```python
    re.search('(?<!foo)bar', 'foobar')  # None
    re.search('(?<!qux)bar', 'foobar')  # bar
    ```

## 转义

转义字符`\`有两个作用:
1. 将特殊的字符变成普通字符, 比如表字符串的单引号`'`和双引号`"`, 以及转义字符`\`本身
2. 给字符赋予特殊含义


### 转换为普通字符
一些字符是python解释器当成的特殊的字符, 比如单引号`'`, 如果在字符串里直接使用会报错.

```python
print('This string contains a single quote (') character.')
## SyntaxError: invalid syntax
```
这时, 可以使用`\`来讲特殊字符变为普通字符, `\`被称为转义(escape)

```python
print('This string contains a single quote (\') character.')
```


escape|描述
--|--
`\'`|将字符串单引号变成普通字符, `print('\'') # '`
`\"`|将字符串双引号变成普通字符, `print("\"") # "`
`\<newline>`|python编辑器中多行输入
`\\`|将转义字符变成普通字符, `print("\\") # \`

**注意**
`\<newline>`的一个坑
```python
list1 = ["a"\
        "b"]  # ["ab"] 没有加逗号会自动合并成一个字符串
list2 = ["a", \
        "b"]  # ["a","b"]

```


例子:
1. `\<newline>`
```python
print('a\
... b\
... c')
## abc
```

### 赋予特殊含义
Escape Sequence|“Escaped” Interpretation
--|--
`\a`|ASCII Bell (BEL) character, `print("\a")`
`\b`|ASCII Backspace (BS) character, `print("Hello \b World!") # Hello  World!`
`\f`|ASCII Formfeed (FF) character, `print("Hello \f World!") # Hello  World!`
`\n`|ASCII Linefeed (LF) character, `print("Hello \n World!")`
`\N{<name>`}|Character from Unicode database with given `<name>`
`\r`|ASCII Carriage Return (CR) character, `print("Hello \r World!")`
`\t`|ASCII Horizontal Tab (TAB) character, `print("Hello \t World!") # Hello 	 World!`
`\uxxxx`|Unicode character with 16-bit hex value xxxx
`\Uxxxxxxxx`|Unicode character with 32-bit hex value xxxxxxxx
`\v`|ASCII Vertical Tab (VT) character, `print("Hello \v World!") # Hello  World!`
`\ooo`|Character with octal value ooo, `print("\110\145\154\154\157\40\127\157\162\154\144\41") # Hello World!`
`\xhh`|Character with hex value hh, `print("\x48\x65\x6c\x6c\x6f\x20\x57\x6f\x72\x6c\x64\x21") # Hello World!`

例子:
1. `\ooo`八进制ascii码表示
也就是说, 每位小于8的组合, 加上转义字符都有特殊含义:
八进制ascii|十六进制ascii|十进制ascii|ascii
--|--|--|--
`'\0'`|`'\x00'`|`0`|`null`
`'\1'`|`'\x01'`|`1`|`soh`
`'\11'`|`'\x09'`|`9`|`'\t'`
`'\111'`|`'\x49'`|`73`|`'I'`
注意超过八进制的计数范围的数字不会进行转码
```python
print('\97')  # \97
print('\79')  # 9 # `\7`被当成八进制进行了转码
```

注意, 可以在python console中直接观察输入字符串后, 解释器的处理行为:
```python
'\1'  # '\x01' 直接转换成字节
print('\1')  # 空, 因为`\x01`没有办法显示
"\\1"  # '\\1'
print('\\1')  # \1
"\t" # '\t' 转换成字节, 并用ascii码表示
print("\t")  # 制表符
"\d"  # '\\d' 转换成字节码, 由于`\d`不是特殊含义字符, 所以字节码中先用`\\`表示一个`\`, 然后ascii码表示字节
print("\d")  # \d
```


### raw string
字符串前以`r`或`R`开头表示该字符串内的`\`不进行解释.

```python
print('foo\nbar')
## foo
## bar
print(r'foo\nbar')
## foo\nbar
print('foo\\bar')
## foo\bar
print(R'foo\\bar')
## foo\\bar
```

### 应用
在正则表达式中, 定义了一些可以赋予特殊含义的转义字符如:
1. `\w`表示字符
2. `\s`表示空白
3. `\d`表示数字
4. `\b`表示单词的开始和结束
5. `\1`表示分组

其中1,2,3使用普通字符串就可以表示, 但是4,5中的`\b`和`\1`在字符串中有特殊含义, 会先被python解释器转义.这时就需要使用到`raw string`或者给`\`前加`\`进行转义, 既`\\b`和`\\1`

```python
re.search('\w', 'abc') # a
re.search(r'\w', 'abc') # a
re.search('\s', 'a b') # 空
re.search(r'\s', 'a b') # 空
re.search('\d', '123') # 1
re.search(r'\d', '123') # 1
re.search('\bfoo\b', 'bar.foo') # None `\b`被转义成了'\x08'所以无法正常匹配
re.search(r'\bfoo\b', 'bar.foo') # foo , 另一种解法`re.search('\\bfoo\\b','bar.foo')`
re.search('(a)\1','aa') # None `\1`被转义成了`\x01`所以正则无法匹配
re.search(r'(a)\1','aa') # aa, 另一种解法`re.search(r'(a)\\1','aa')`
```
**建议在regex中如果遇到了`\`就使用raw string, 或者无脑对所有字符串都使用raw string, 因为不转义的string和raw string也是一样的.**

一个小问题, 看是不是能真正理解字符串的转义:
```python
re.search('\\\167', 'abc') # a 等价re.search('\w', 'abc'), 因为`\\`被python解释器转义为`\`, 而`\167`是ascii码`w`八进制表示, 下面的同理:
re.search('\\\163', 'a b') # 空
re.search('\\\144', '123') # 1
re.search('\\\142foo\\\142', 'bar.foo') # foo
re.search('(a)\\\61','aa') # aa
```


参考:
https://realpython.com/python-data-types/#strings



## 模式(flag)
在正则表达式之前加上`(?<flags>)`可以设置不同模式, 比如多行, 忽略大小写等

Letter|写法|re简写|re全称
--|--|--|--
a|`(?a)`|re.A|re.ASCII
i|`(?i)`|re.I|re.IGNORECASE
L|`(?L)`|re.L|re.LOCALE
m|`(?m)`|re.M|re.MULTILINE
s|`(?s)`|re.S|re.DOTALL
u|`(?u)`|re.U|re.UNICODE
x|`(?x)`|re.X|re.VERBOSE



## python
python中的`re`模块.

### 匹配
```python
re.search() # 匹配到一个既结束, 返回match对象. 类似的有re.match(), 是从字符串的开头进行匹配, 相当于re.search("^...","string")
re.findall() # 匹配所有, 返回元素是字符串的列表. 类似的有re.finditer, 返回的是迭代器
```

### 其他
```python
re.sub() 替换
re.split() 切分
re.compile() 变异正则表达式, 可以进行复用
```

## 多行模式

Python 的 re 模块内置函数几乎都有一个 flags 参数, 其中有两个模式：单行（re.DOTALL, 或者re.S）和多行（re.MULTILINE, 或者re.M）模式。

单行模式突破换行符 \n 的阻碍，将匹配视野扩大到整个字符串
多行模式实现换行符 \n 的分隔，将匹配视野缩小到一行之内，并且按行分别匹配。

### 多行单行的概念
新建一个文件，名字叫 a.txt ，内容是：

```
cat
dog
```
用文本编辑器打开，看到的是两行文字，每行有三个字符, 是个二维的表示.
文件的保存形式只能是一维的字节流，之所以能让编辑器表示为二维形状，都是因为字节流中包含了换行符。
用 xxd 命令看下这个 a.txt 文件的二进制表达：
```sh
$ xxd a
0000000: 6361 740a 646f 670a                      cat.dog.                                   g.
```
这就是文件 a.txt 真实保存的形式，0a 就是换行符，在编程语言里用 \n 表示


结论：一段多行文本，尽管在文本编辑器中显示为二维的形状，但是在正则表达式解析器看来，文件是一维的字符串。在碰到包含换行符的字符串时，有多种匹配模式，分别能得到不同的结果。



### 普通模式
```python
a = 'This is the first line.\nThis is the second line.\nThis is the third line.'
print(a)
"""
This is the first line.
This is the second line.
This is the third line.
"""

import re
p = re.match(r'This.*line\.' ,a) 
p.group(0)
'This is the first line.'
```
普通模式下，点号（.）不能匹配换行符，匹配动作遇到换行符即停止。即使是默认的贪婪（greedy）模式，仍然在第一行的结尾初停止了匹配。


### 单行模式
当使用 re.DOTALL 时，点号将同时匹配换行符，实现了跨行匹配。匹配结果里包含了换行符 \n 和 全部的三行。

```python
q = re.match(r'This.*line\.', a, flags=re.DOTALL)
q.group(0)
'This is the first line.\nThis is the second line.\nThis is the third line.'
```
结论：
单行模式下，点号（.）也能匹配换行符，多行文本被当作一行匹配。

### 多行模式
找出 所有 以 This 开头，以 line 结尾的行。
```python
a = 'This is the first line.\nThis is the second line.\nThis is the third line.'
print(a)
"""
This is the first line.
This is the second line.
This is the third line.
"""
import re
re.findall(r'^This.*line\.$', a)
"""
[]
"""
```
匹配结果为空的原因是：从 上一节 我们知道，点号不匹配换行符，最多只能匹配到第一个 line，但是第一个 line 后面并没有行尾符 $，假如我们改用 单行模式

```python
re.findall(r'^This.*line\.$', a, flags=re.DOTALL)
"""
['This is the first line.\nThis is the second line.\nThis is the third line.']
"""
```
匹配模式中的 line 就匹配到了第三个line，结果就是匹配出了整个字符串，但这并不是我们想要的， 因为原字符串的三行都满足匹配条件，我们希望有三条结果。

真正的原因是因为正常情况下，行首符 ^ 和行尾符 $ 仅仅匹配整个字符串的起始和结尾。为了扩大 ^ 和 $ 的匹配范围，引入了多行模式。在这种模式下：

1. 将换行符 '\n' 后面的位置也看作行首，可以用 ^ 匹配
1. 将换行符 '\n' 前面的位置也看作行尾，可以用 $ 匹配


```python
re.findall(r'^This.*line\.$', a, flags=re.MULTILINE)
"""
['This is the first line.', 'This is the second line.', 'This is the third line.']
"""
```
结论：多行模式改变了^和 $ 符号的匹配策略，当字符串中间有 换行符 \n 时，将字符串当作独立的多行对待


### 总结
当需要在一个文本文件里跨行匹配时，单行和多行模式尤其有用。
单行模式和多行模式，从名字上看是互斥的，但是实际上，两者可以共存。因为它们二者分别扩展不同的匹配符：点号 . 和 ^、 $




参考:
[Python 正则表达式里的单行s和多行m模式](https://www.lfhacks.com/tech/python-re-single-multiline/)



## python方法

### search-match


`match(pattern, string, flags=0)` 用正则表达式匹配字符串 成功返回匹配对象 否则返回None
`search(pattern, string, flags=0)` 搜索字符串中第一次出现正则表达式的模式 成功返回匹配对象 否则返回None

参数:
参数|描述
--|--
pattern|匹配的正则表达式
string|要匹配的字符串。
flags|标志位，用于控制正则表达式的匹配方式，如：是否区分大小写，多行匹配等等。

返回:
`re.Match`对象, 使用`re.Match.group()`来获得最终的匹配的字符串



### re.match与re.search的区别
re.match只匹配字符串的开始，如果字符串开始不符合正则表达式，则匹配失败，函数返回None；而re.search匹配整个字符串，直到找到一个匹配。
```python
import re
re.match('super', 'superstition').span()  # (0, 5)
re.match('super','insuperable')  # None
re.search('super','superstition').span()  # (0, 5)
re.search('super','insuperable').span()  # (2, 7)
```

参考:
https://www.cnblogs.com/thankcat/p/17121194.html


### sub

Python 的 re 模块提供了re.sub用于替换字符串中的匹配项，sub是substitute表示替换。
语法:
`sub(pattern, repl, string, count=0, flags=0)`
参数:
参数|描述
--|--
pattern|该参数表示正则中的模式字符串；
repl|如果是字符串，则处理其中的反斜杠转义。如果是match对象，并且必须返回要使用的替换字符串
string|该参数表示要被处理（查找替换）的原始字符串；
count|可选参数，表示是要替换的最大次数，而且必须是非负整数，该参数默认为0，即所有的匹配都会被替换；
flags|可选参数，表示编译时用的匹配模式（如忽略大小写、多行模式等），数字形式，默认为0。


## 应用
1. 普通替换
```python
import re
#替换s中的hello为123,
s = "hello,world!!!"
print(re.sub(r'hello', r"123", s))
#123,world!!!
```

2. 分组替换
```python
import re
## 替换时间格式 01/11/2021 替换成 2021/01/11
s = "today is 09-12-2021"
day = re.sub(r'(\d{2})-(\d{2})-(\d{4})', r'\3-\2-\1', s)
print(day) # today is 2021-12-09
## 也可以用g<3>-g<2>-g<1>
day2 = re.sub(r'(\d{2})-(\d{2})-(\d{4})', r'g<3>-g<2>-g<1>', s)
print(day) # today is 2021-12-09
```

3. repl传函数
```python
import re

def fun(m):
    return m.group(1).title()+' '+m.group(2).title()  #首字符大写
str1='hello world ~~~~~~~~~'
str1=re.sub(r"(\w+) (\w+)",fun,str1)
print(str1)
## Hello World ~~~~~~~~~
```

4. count替换次数
```python
import re

## 替换字符串中的空格为123，只替换一次
s = "We are happy"
print(re.sub(" ", "123", s, count=1))
## We123are happy
```

5. subn方法使用
```python
## 替换字符串中的空格为123
s = "We are happy"
print(re.subn(" ", "123", s)) 
#('We123are123happy', 2)
```

参考:
https://www.cnblogs.com/lvhuayan/p/15260375.html






参考:
https://realpython.com/regex-python/
https://realpython.com/regex-python-part-2/
https://www.jb51.net/tools/zhengze.html