---
title: python_io_textio
toc: true
date: 2021-11-02 8:14:54
tags:
---

# Text I/O
本地存储都是字节(硬盘文件)
硬盘读写
```python
f = open('hello.txt', 'w')

f.write("Hello Python!\n")

# f.flush()  # 如果不冲洗,则硬盘没有内容`hello Python`还保存在内存的缓冲区,调用后才写入磁盘
# f.close()  # close方法先调用flush()方法,再写入
```
```

内存读写
```python
from io import StringIO
string_io = StringIO("hello\nworld")
string_io.readline()  # 获得行
string_io.getvalue() # 获得存储的值

from io import StringIO
string_io = StringIO()
string_io.write("hello")
string_io.getvalue()
string_io.seek(0)  # 回到起始位置,每次写入指针都会后移动
string_io.readline()
```


# 应用
Text I/O 对象
StringIO可以当成open打开文件返回的对象来使用
```python
f = open("myfile.txt", "r", encoding="utf-8")
f = io.StringIO("some initial text data")
```

```python

import io
f = io.StringIO("id,name\n1,brian\n2,amanda\n3,zoey\n")
df = pd.read_csv(f) # pandas takes a file path or a file-like object
```
参考:
https://stackoverflow.com/questions/7996479/what-is-stringio-in-python-used-for-in-reality


