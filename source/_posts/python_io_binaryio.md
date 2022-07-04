---
title: python_io_binaryio
toc: true
date: 2021-11-02 8:14:54
tags:
---

# Binary I/O
字节对象,不会执行编码,解码和换行符转换操作.
硬盘读写
```python
f = open("myfile.jpg", "rb")
```
内存读写
```python
from io import BytesIO # 和StringIO类似
bytes_io = BytesIO('王'.encode('utf-8'))
bytes_io.getvalue().decode('utf-8')
```

内存读写应用,省略了保存到硬盘的步骤
```python
from PIL import Image
from io import BytesIO
i = Image.open(BytesIO(r.content))
```


# 应用
写入BytesIO的方法有两种
一种在初始化的时候创建:
```python
from io import BytesIO # 和StringIO类似
bytes_io = BytesIO('王'.encode('utf-8'))
bytes_io.getvalue().decode('utf-8')
```
另一种是将其他文件保存到此处:
```python
buf = BytesIO()  #另一种写入BytesIO的方法
plt.savefig(buf,format='png') #另一种写入BytesIO的方法
```

```python
from jinja2 import Template,FileSystemLoader,Environment
env = Environment(loader=FileSystemLoader("./"))
template = env.get_template("./test.html")

import matplotlib.pyplot as plt
x = [1,2,3]
y = [1,2,3]
plt.plot(x,y)
from io import BytesIO
buf = BytesIO()  #另一种写入BytesIO的方法
plt.savefig(buf,format='png') #另一种写入BytesIO的方法
import base64
data = base64.b64encode(buf.getvalue()).decode()
data = "data:image/png;base64," + data
temp_render = template.render(name=data)
print(temp_render)

```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="{{ name }}">
    
</body>
</html>
```