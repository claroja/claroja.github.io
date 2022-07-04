---
title: python_io_stdio
toc: true
date: 2021-11-02 8:14:54
tags:
---
# stdin
```python
import sys
a=sys.stdin.readline() # 包含了换行符,一般都要使用strip
b=input() # 不包含换行符`\n`
print(len(a),len(b)) # 5 4
```


# stdout
```python
print(*objects, sep=' ', end='\n', file=sys.stdout, flush=False)
```
`print`默认写入的是标准输出,既控制台



```python
sys.stdout.write('hello' + '\n')
print('hello')
```


```python

import os
fd = os.open( "foo.txt", os.O_RDWR|os.O_CREAT )
os.write(fd, b"This is test")
fd2 = 1000
os.dup2(fd, fd2)  # 关闭fd2的文件描述符指向的文件,并将fd2文件描述符指向fd文件描述符指向的文件
os.lseek(fd2, 0, 0)
str = os.read(fd2, 100)
os.close(fd2)

import os
fd = os.open( "foo.txt", os.O_RDWR|os.O_CREAT )
os.dup2(fd,1)
print('hello')

```

