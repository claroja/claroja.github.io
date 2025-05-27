# get


## restful 形式
### 后端flask
`<>`是转换器，内容既可当成视图函数的参数
```python
from flask import Flask,render_template
app = Flask("__main__")


@app.route('/users/<user_id>')
def user_info(user_id):
    return user_id


@app.route('/index')
def index():
    return render_template("get_html.html")
if __name__ == '__main__':
    app.run(host="localhost",port=5000,debug=True)
```

### 前端
1.直接在url里输入
```python
"http://127.0.0.1:5000/users/1"
```
2.或使用form表单的action

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/users/1" method="get">
        <input type="submit" value="Submit" />
      </form>
</body>
</html>
```

### requests
```python
import requests
r = requests.post("http://127.0.0.1:5000/users/1")
r.text
```





## params 形式


flask获得请求参数`request.args
```python
key1=request.args["key1"]
key2=request.args["key2"]
```


requests发送get请求,params
```python
payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.get("http://127.0.0.1:5000/get", params=payload)
```


### 后端
代码：
flask
```python
from flask import Flask,request,jsonify
app = Flask("__main__")
@app.route('/')
def index():
    value1=request.args["key1"]
    value2=request.args["key2"]
    return jsonify({"key1":value1,"key2":value2})


if __name__ == '__main__':
    app.run(host="localhost",port=5000,debug=True)
```

### 前端
1)使用
`http://127.0.0.1:5000/?key1=value1&key2=value2`
2)或使用form的get方法提交表单
```html
<form action="/" method="get">
  <p>First name: <input type="text" name="key1" /></p>
  <p>Last name: <input type="text" name="key2" /></p>
  <input type="submit" value="Submit" />
</form>
```


### requests
```python
import requests
payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.get("http://127.0.0.1:5000/", params=payload)
r.text
```

