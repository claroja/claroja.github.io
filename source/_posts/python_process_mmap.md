---
title: python_process_mmap
toc: true
date: 2021-11-02 8:14:54
tags:
---
本质：
将文件映射到内存，进行直接对内存进行读写（当关闭mmap时内存映射才写入到文件，中间的操作都是在内存）
优点：
1.直接读写内存，不需要任何数据拷贝。管道消息队列需要在内核和用户空间进行四次数据拷贝，而共享内存只拷贝两次数据（一次是文件到共享内存，一次是从共享内存到输出文件上）
缺点：




`Windows: mmap(fileno, length[, tagname[, access[, offset]]])`
`Unix: mmap(fileno, length[, flags[, prot[, access[, offset]]]])`
参数|描述
--|--
fileno|文件描述符file对象的fileno()方法
length|映射的长度,0表示全部映射
flags|
prot|
access|ACCESS_READ：读访问;ACCESS_WRITE：写访问，默认;ACCESS_COPY：拷贝访问，不会把更改写入到文件，使用flush把更改写到文件


方法|描述
--|--
close()|关闭映射
m.find(str, start=0)|从start开始,从左到右寻找str,返回下标
m.flush([offset, n])|从offset开始的n个字节刷到对应的文件中,开启`ACCESS_COPY`时使用
move(dstoff, srcoff, n)|从 srcoff 开始的 n 个字节复制到从 dstoff 开始的n个字节
read(n)| m 对应的文件中最多读取 n 个字节,当前位置后移动
read_byte() |
readline()|
seek(pos, how=0)|改变当前位置
size()|文件的长度
tell()|返回当前位置
write(str)|
write_byte(byte)|



# 1.基本使用
```python

import mmap

#1.先创建一个文件
with open('hello.txt', 'wb') as f:
    f.write(b"Hello Python!\n")
#2.将文件与文件进行映射
with open('hello.txt', 'r+b') as f:
    mm = mmap.mmap(f.fileno(), 0) # f.fileno()文件描述符,size为0表示读取整个文件
    print(mm.readline())  # prints "Hello Python!" # 标准读取方式
    print(mm[:5])  # prints "Hello"# 切片读取方式
    mm[6:] = b" world!\n"
    mm.seek(0)# 使用seek定位光标到数据头,当前光标已到数据末(mm.tell()可获取当前光标)
    print(mm.readline())  # prints "Hello  world!"# 再次标准读取
    mm.close()# 像处理文件一样关闭mmap映射
```

# 2.父子进程通信

```python
import mmap
import os
import time

mm = mmap.mmap(-1, 27)#传入文件描述符-1,使用匿名映射
mm.write(b"Original msg") # 涉及mm的读写都要记得字符串的二进制
print('write successfully')

pid = os.fork()

if pid == 0:  # 子进程中
    mm.seek(0)
    print('Read from the mmap:')
    print(mm.readline())
    #以切片访问时,严格按照字符串长度
    mm[12:] =  b' sth from child'
    mm.close()
else:
    time.sleep(2)# 用sleep使子进程先执行
    mm.seek(0)
    print('Read from the child:')
    print(mm.readline())
    mm.close()
```


# 3.无关进程linux的通信
```python
import mmap
import contextlib
import time

with open("mmap.file", "w") as f:
    f.write('\x00' * 1024)

with open('mmap.file', 'r+') as f:
    m = mmap.mmap(f.fileno(), 1024, access=mmap.ACCESS_WRITE)
    for i in range(1, 10001):
        m.seek(0)
        m.write(b"hello")
        m.flush()
        time.sleep(1)

```

```python
import mmap
import contextlib
import time

while True:
    with open('mmap.file', 'r') as f:
        with contextlib.closing(mmap.mmap(f.fileno(), 1024, access=mmap.ACCESS_READ)) as m:
            s = m.read().replace(b'\x00',b'')
            print(s)
    time.sleep(1)
```

# 4.无关进程win通信
server.py
```python
import mmap
import contextlib
import time
 
with contextlib.closing(mmap.mmap(-1, 1024, tagname='test', access=mmap.ACCESS_WRITE)) as m:
  for i in range(1, 10001):
    m.seek(0)
    m.write("msg " + str(i))
    m.flush()
    time.sleep(1)
```

client.py
```python
import mmap
import contextlib
import time
 
while True:
  with contextlib.closing(mmap.mmap(-1, 1024, tagname='test', access=mmap.ACCESS_READ)) as m:
    s = m.read(1024).replace('\x00', '')
    print s
  time.sleep(1)
```
参考:
https://www.xuebuyuan.com/3189076.html
https://docs.python.org/zh-cn/3.9/library/mmap.html
https://blog.csdn.net/zdy0_2004/article/details/53200250
https://blog.csdn.net/m0_37422289/article/details/79895526
https://blog.csdn.net/m0_37422289/article/details/79895526