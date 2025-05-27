# 编码解码

那么什么是文本文件，什么是二进制文件呢？
从文件编码的方式来看，文件可分为ASCII码文件和二进制码文件两种.
1. 文本文件
ASCII编码文件是文本文件的一种，这种文件在磁盘中存放时每个字符对应一个字节，用于存放对应的ASCII码。例如，文本中(字符串)的5678共占用4个字节, 存储形式为：  
编码|1|2|3|4
--|--|--|--
ASC码|00110101|00110110|00110111|00111000  
十进制码|5|6|7|8  
2. 二进制文件
二进制文件是按二进制的编码方式来存放文件的。例如，数5678的存储形式为：00010110   00101110只占二个字节。二进制文件虽然也可在文本中打开，但内容会经过解码(ascii码表), 这里如果用文本打开, 就变成了, "SYN"(00010110), "."(00101110), 最终的结果是`.`。

```python
with open("./test.txt","wb") as f:
    a=5678
    f.write(a.to_bytes(2,'big'))
```

具体来说:
bytes只负责以字节序列的形式（二进制形式）来存储数据，至于这些数据到底表示什么内容（字符串，数字，图片，音频等），完全由程序的解析方式决定，如果采用合适的字符编码方式（字符集），字节串可以恢复成字符串，反之亦然，字符串也可以转换成字节串。


1. 处理文本文件
    1. 复制, 最佳选择是二进制模式, 也可以选择文本模式
    2. 需转化为字符串, 处理文本内容时, 选择文本模式
2. 图片 使用二进制处理, 相应的工具也是使用二进制转化, 然后根据协议进行转码
3. 音频 同图片
4. 视频 同图片





不同语言:
C语言中, 使用`fopen()`来处理, 默认是文本模式, `b`是二进制模式. 文本模式默认是ascii编码, 不能处理GBK和UTF编码, 需要自己通过`b`模式来根据编码规则处理
python中, 使用`open()`来处理, 默认是文本模式, `b`是二进制模式. 文本模式可以使用`encoding`参数来指定具体编码, 比如GBK, UTF等


## unicode
它为每种语言中的每个字符设定了统一并且唯一的二进制编码，以满足跨语言、跨平台进行文本转换、处理的要求。1990年开始研发，1994年正式公布。Unicode编码系统可分为编码方式和实现方式两个层次。
1. 编码方式
Unicode的编码方式使用16位的编码空间，也就是每个字符占用2个字节。Unicode共有2^16即65536个编码，其中有近39000种已被定义完成，而中国字就占了21000种 ！
2. 实现方式
Unicode的实现方式不同于编码方式。一个字符的Unicode编码是确定的。但是在实际传输过程中，由于不同系统平台的设计不一定一致，以及出于节省空间的目的，对Unicode编码的实现方式有所不同。Unicode的实现方式称为Unicode转换格式（Unicode Translation Format，简称为UTF）。

参考:
https://home.unicode.org/#


## python
1. 文本字符全部用 str 类型表示，str 能表示 Unicode 字符集中所有字符,而二进制字节数据用 bytes 来表示。
2. 内存里以Unicode编码（Python3 str类型）存在，不论是网络传输还是保存到硬盘上，本机脱离了内存空间，就必须转换为字节型（Python3 bytes类型））
3. Python3中，在字符引号前加‘b’，明确表示这是一个 bytes 类型的对象，实际上它就是一组二进制字节序列组成的数据，每一个元素是ASCII范围内的字符和其它十六进制形式的字符数据，但不能用中文等非ASCII字符表示。

```python
for i in range(128):
    b = i.to_bytes(1,'big')
    print(b,hex(i))
```
可以看到`b'\t' 0x9`, `b'\n' 0xa`, `b'\r' 0xd`以及`b' ' 0x20` ~`b'~' 0x7e`的字节码, python中都是用ascii的字符来表示的(觉得这不是一个好的设计, 很容易让人看懵), 其他则是以16进制的单字节来表示的.

```python
print(b'~', b'\x7e')  # 两种表示同一个字节, python使用前者显示
## b'~' b'~'
```
注意`0x7e`是十六进制的字符串表示, `b'\x7e'`是十六进制的字节表示.

字节码只能用十六进制或ascii码表示, 不能使用除此之外的其他字符来表示.
```python
>>> b'王'
##   File "<stdin>", line 1
##     b'王'
##         ^
## SyntaxError: bytes can only contain ASCII literal characters
```

## 类型转换
### 数字与字节间的转换
1. 数字转字节
```python
int.to_bytes(65535, length= 2, byteorder='big', signed=False)
```
`self`: 表示具体的数值
`length`: 指定用几个字节存储, 字节容量必须大于要转换的数值
`byteorder`: 大端还是小端
`signed`: 是否有符号


2. 字节转数字
```python
int.from_bytes(b'\xFF\xFF', byteorder='big', signed=False)
```

另外还有数组转换方法, 可以将bytes数组中的某个元素转换成int类型
```python
b'a'[0] # 97
b'abc'[0] # 97
b'\x61bc'[0] # 97
list(b'abc') # [97, 98, 99]
```


### 字符串与字节间的转换
encode：将str转换为bytes，是一个编码的过程；decode：将bytes转换为str，是一个解码的过程
Python3默认编码为`UTF-8`, 可以通过`sys.getdefaultencoding()`查看, 所以在调用`encode()`和`decode()`的默认编码格式都是`utf8`

1. 字符串转字节
```python
'abc'.encode()  # b'abc' 实际上是b'\x61\x62\x63'
```

2. 字节转字符串
```python
b'abc'.decode()  # 'abc'
b'\x61\x62\x63'.decode()  # 'abc'
```


### bytearray
bytearray和bytes不一样的地方在于，bytearray是可变的。

```python
byte = bytes('人生苦短，我用Python!'.encode())  # 生成bytes对象
type(byte)  # <class 'bytes'>
len(byte)  # 28
byte_array = bytearray('人生苦短，我用Python!'.encode()) # 生成Bytearray对象
type(byte_array)  # <class 'bytearray'>
len(byte_array)  # 28

byte_array[:3] = bytearray('狗'.encode())  # 将第一个字符"人"对应的字节码(3个)替换成"狗"的字节码
byte_array.decode()  # '狗生苦短，我用Python!'

byte[:3]=bytes('狗'.encode())  # 报错 TypeError: 'bytes' object does not support item assignment
```


### python解码图片
https://yasoob.me/posts/understanding-and-writing-jpeg-decoder-in-python/#file-start-file-end



参考:
https://python-forum.io/thread-21488.html
https://python-forum.io/thread-32636.html