# post

## form形式
前端的form表单post，和requests的post方法的data，和flask的request.form是对应的


### 后端
```python
@app.route('/post', methods = ['GET','POST'])
def post():
	key1=request.form["key1"]
	key2=request.form["key2"]
	return key1, key2
```

### 前端：

```python
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="POST" action="/post">
        key1:<br>
        <input type="text" name="key1" value="value1">
        <br>
        key2:<br>
        <input type="text" name="key2" value="value2">
        <br>
        <input type="submit" value="Submit">
    </form>
</body>
</html>
```


### requests
```python
import requests
payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.post("http://127.0.0.1:5000/post", data=payload)
r.text
```


## json格式
前端的ajax或axios，和requests的post方法的json参数，和flask的request.json是对应的

### 后端
flask使用`.json`来获得请求的格式
```python
from flask import Flask,request,jsonify
app = Flask("__main__")
@app.route('/')
def index():
    key1=request.json.get['key1']
    key2=request.json.get['key2']
    return jsonify({"key1":value1,"key2":value2})


if __name__ == '__main__':
    app.run(host="localhost",port=5000,debug=True)

```

### 前端

前端需要使用异步ajax或者axios来发送json数据

### request
```python
import requests
payload = {'key1': 'value1', 'key2': 'value2'}
r = requests.post("http://127.0.0.1:5000/post", json=payload)
r.text
```





## 上传文件

前端form表单`enctype='multipart/form-data'` 对应requests的post方法的file参数，对应flask的request.files




### 后端
后端则是通过files字典对象来获得上传的文件
```python
@app.route('/upload', methods=['GET','POST'], strict_slashes=False)
def upload():
    if request.method == "POST":
        file = request.files['fileName']  # files是fileStorage的对象，其中fileName就是表单中input中file的name所定义的字符串
        file.save(f'./upload/{file.filename}')
        return "OK"
    else:
        return render_template('upload.html')
```
### 前端
```html
<form enctype='multipart/form-data' method='POST' id="pic">
    <input type="file" name="fileName">
    <input type="submit" value="上传">
</form>
```

### requests
```python
import requests
url = 'http://localhost:5000/upload'
files = {'fileName': open('./upDownFiles/1.png', 'rb')}
r = requests.post(url, files=files)
r.text
```



## 下载文件
### 后端
```python
@app.route('/download/', methods=['GET'])
def download(filename):
  if request.method == "GET":
    return send_from_directory('upload', filename, as_attachment=True)
```

### 前端
相当于前端直接点击`<img>`标签,需要注意,这里的`src`指向的`download`url,而不是`upload`文件夹
```html
<img src="/download"  alt=" " />
```

### requests

```python
with open(filename, 'wb') as fd:
	fd.write(r.content)
```

分批获取
```python
with open(filename, 'wb') as fd:
    for chunk in r.iter_content(chunk_size=128):
        fd.write(chunk)
```

