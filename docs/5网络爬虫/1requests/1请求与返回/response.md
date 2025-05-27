# response

## text文本数据


### 后端
`render_template`本质是返回字符串,会自动设置Content-Type: text/html
1.标准写法
```python
@app.route("/")
def index():
	rsp = make_response(render_template("test.html")) # 会自动设置Content-Type: text/html; charset=utf-8
    return rsp
```

2.简单写法
```python
@app.route("/")
def index():
    return render_template('test.html') 
```


### 前端
直接渲染


### requests

1.response.text自动解码服务器返回的内容
```python
import requests
r = requests.get('https://127.0.0.1/')
r.text 
```
默认使用`r.encoding`=`utf8`,可以更改为`r.encoding = 'ISO-8859-1'`,更改后,每次访问`.text`就直接使用该编码


2.response.content获得字节`.text`就是根据`.content`解码出来的
```python
import requests
r = requests.get('https://127.0.0.1/')
r.content # b'[{"repository":{"open_issues":0,"url":"https://github.com/...
r.content.decode('utf-8')
```

## json

### 后端
会自动设置`Content-Type`: 

1.标准写法
```python
@app.route("/")
def index():
    dic = {"name":"wang"}
    rsp = make_response(jsonify(dic))# 会自动设置Content-Type: application/json
    return rsp
```
2.简单写法
```python
@app.route("/")
def index():
    dic = {"name":"wang"}
    return jsonify(dic) # 会自动设置Content-Type: application/json
```
### 前端
没有响应操作，直接查看

### requests

```python
import requests
r = requests.get('https://api.github.com/events')
r.json()
## json.load(r.text) # 和上面的等价
## json.load(r.content.decode('utf-8') # 和上面的等价
```


## 图片


### 后端
可参考`img`标签的三种展示方式

1)标准写法
```python
@app.route('/<img_id>')
def capt(img_id):
    # 生成图片验证码
    text, image = captcha.generate_captcha()
    rsp = make_response(image)
    rsp.mimetype = 'image/jpg'
    return rsp
```


1)简单写法
```python
@app.route('/<img_id>')
def capt(img_id):
    # 生成图片验证码
    text, image = captcha.generate_captcha() # image是图片二进制文件
    return image {'Content-Type':'image/png; charset=utf-8'}
```



### 前端
```html
<img src="{{ img_id }}" alt="图形验证码" class="pic_code">
```


### requests
1. content二进制直接保存
```python
r = requests.get('https://127.0.0.1')
with open(filename, 'wb') as fd:
        fd.write(r.content)
```

2. raw+stream流分片保存

response.raw获得字节(和content相似,应该是将ascii码也用十六进制表示的意思),原始套接字,要打开stream参数
```python
r = requests.get('https://127.0.0.1', stream=True)
r.raw
r.raw.read(10)
```
一般使用以下形式保存
```python
with open(filename, 'wb') as fd:
    for chunk in r.iter_content(chunk_size=128):
        fd.write(chunk)
```





## 前端图片展示

### 通过静态文件加载
文件在硬盘上
```python
<img src="./test.png">
```


### 通过字节传递二进制图片文件

#### 后端先生产图片并用base64编码
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

#### 后端通过设置`mimetype`来实现
`img`标签中的`src`属性本质是向服务器发送一个get请求
```python
@app.route('/<img_id>')
def capt(img_id):
    # 生成图片验证码
    text, image = captcha.generate_captcha()
    rsp = make_response(image)
    rsp.mimetype = 'image/jpg'
    return rsp
```


```html
<img src="{{ img_id }}" alt="图形验证码" class="pic_code">
```