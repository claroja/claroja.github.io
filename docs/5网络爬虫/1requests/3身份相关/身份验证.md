# 身份验证

## form
### 后端
```python
@app.route('/post', methods = ['GET','POST'])
def post():
    method=request.method
    key1=request.form["post-key1"]
    key2=request.form["post-key2"]
    return "%s<br>%s<br>%s<br>%s<br>%s"%(method, key1, key2,)
```


### 前端
```html
<form method="POST" action="/post">

    <input type="text" name="post-key1" value="post-value1">
    <input type="text" name="post-key2" value="post-value2">

    <input type="submit" value="Submit">
</form>
```

### requests

```python
import requests
payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.post("https://httpbin.org/post", data=payload)
print(r.text)
```

## json


### 后端
flask使用`.json`来获得请求的格式
```python
key1=request.json.get['key1']
key2=request.json.get['key2']
```

### 前端
？？

### requests
```
### post-json
request发送post请求,data(既json表单提交形式)
```python
payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.post("http://127.0.0.1:5000/post", json=payload)
```

## HTTPBasicAuth
Basic是HTTP简单的认证方式,不是很安全,用户名和密码会经过base64编码放在请求头(header)的Authorization字段下,服务器解析此请求头即可获得.
Basic认证失败会相应401状态码
### 后端
```python
from flask import Flask
from flask_httpauth import HTTPBasicAuth

app = Flask(__name__)
auth = HTTPBasicAuth()

user = {'username': 'wang', 'password': '123'}


## requests.get('http://127.0.0.1:5000/login',auth=('wang','123'))  # 会将用户名和密码发给请求头的
@auth.get_password # 只对明文密码有效
def get_password(username):
    if user['username'] == username:
        return user['password']
    return None

@app.route('/')
@auth.login_required
def index():
    return "Hello, %s!" % auth.username()


if __name__ == '__main__':
    app.run(debug=True)
```

### 前端
？？

### requests
`HTTP Basic Auth`发的是get请求,用户名和密码放在request.headers['Authorization']里,使用base64加密
requests
```python
from requests.auth import HTTPBasicAuth
requests.get('http://127.0.0.1:5000/login', auth=HTTPBasicAuth('user', 'pass')) # # 本质上存在request.headers['Authorization']里,使用base64加密  #拿到授权信息(类型 信息)
```
HTTP Basic Auth 如此常见，Requests 就提供了一种简写的使用方式：
```python
requests.get('http://127.0.0.1:5000/login', auth=('wang', '123'))
```



## HTTPDigestAuth
摘要认证(Digest Authentication),使用hash加密算法,
### 后端

```python
from flask import Flask
from flask_httpauth import HTTPDigestAuth

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret key here'
auth = HTTPDigestAuth()

users = {
    "john": "hello",
    "susan": "bye"
}

@auth.get_password
def get_pw(username):
    if username in users:
        return users.get(username)
    return None

@app.route('/')
@auth.login_required
def index():
    return "Hello, %s!" % auth.username()

if __name__ == '__main__':
    app.run()
```
### 前端
？？

### requests

`HTTPDigestAuth`发的是get请求,用户名和密码放在request.headers['Authorization']里,使用base64加密
requests
```python
from requests.auth import HTTPDigestAuth
url = 'http://httpbin.org/digest-auth/auth/user/pass'
requests.get(url, auth=HTTPDigestAuth('user', 'pass'))
```


## HTTPTokenAuth
后面所讲的jwt也是属于HTTPTokenAuth

### 后端

```python
from flask import Flask, g
from flask_httpauth import HTTPTokenAuth

app = Flask(__name__)
auth = HTTPTokenAuth(scheme='Token')

tokens = {
    "secret-token-1": "john",
    "secret-token-2": "susan"
}

@auth.verify_token
def verify_token(token):
    if token in tokens:
        g.current_user = tokens[token]
        return True
    return False

@app.route('/')
@auth.login_required
def index():
    return "Hello, %s!" % g.current_user

if __name__ == '__main__':
    app.run()
```

### 前端
？？


### requests

`HTTPTokenAuth`发的是get请求token信息放在request.headers['Authorization']里,使用base64加密


```python
import requests
res = requests.post('http://127.0.0.1:5000/login',json={'username':'test','password':'test'})
print(res.json())
access_token = res.json()['access_token']

header={
    "Authorization": f"Bearer {access_token}"
}
res = requests.get('http://127.0.0.1:5000/protected',headers=header)  # 如果重新获得token则无效
print(res.text)
```








https://www.cnblogs.com/fiona-zhong/p/10254961.html
https://www.cnblogs.com/Erick-L/p/7060806.html
https://blog.csdn.net/ousuixin/article/details/94053454
https://blog.csdn.net/qq_42597385/article/details/85248483
https://blog.csdn.net/ousuixin/article/details/94053454#flask%E4%B8%AD%E5%B0%81%E8%A3%85token%E7%9A%84package%E4%BD%BF%E7%94%A8
https://www.jianshu.com/p/537b356d34c9
https://github.com/vimalloc/flask-jwt-extended
https://flask-httpauth.readthedocs.io/en/latest/
https://blog.csdn.net/gnnulzy/article/details/79822354
https://www.cnblogs.com/Erick-L/p/7060806.html
