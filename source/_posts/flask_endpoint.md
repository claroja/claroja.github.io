---
title: flask_endpoint
toc: true
date: 2021-01-20 22:03:54
---
# 原理
flask(werkzeug)主要思想就是将URL paths和 view function对应起来.

```python
@app.route('/greeting/<name>')
def give_greeting(name):
    return 'Hello, {0}!'.format(name)
```
等价于
```python
def give_greeting(name):
    return 'Hello, {0}!'.format(name)
app.add_url_rule('/greeting/<name>', 'give_greeting', give_greeting)
```

而flask又增加了`endpoint`的概念, 也即是说 url path 对应了 endpoint, endpoint对应了view function. 默认情况下, endpoint和view function是相同的, 我们也可以修改
```python
@app.route('/greeting/<name>', endpoint='say_hello')
def give_greeting(name):
    return 'Hello, {0}!'.format(name)
```
这个写法的含义就是URL`/greeting/<name>`对应了endpoint`say_hello`, endpoint`say_hello`又对应了view function`give_greeting`.


# 应用
endpoint的主要作用是通过`url_for()`方法reverse lookup(倒排索引). `url_for`参数是`endpoint`, 返回是`url path`


```python
@app.route('/')
def index():
    print url_for('give_greeting', name='Mark') # This will print '/greeting/Mark'

@app.route('/greeting/<name>')
def give_greeting(name):
    return 'Hello, {0}!'.format(name)
```

# 为什么使用endpoint
为什么不直接使用url path到view function的映射, 而中间又加入了endpoint一层?
主要实践是[blueprints](https://flask.palletsprojects.com/en/2.0.x/blueprints/)


main.py:
```python
from flask import Flask, Blueprint
from admin import admin
from user import user

app = Flask(__name__)
app.register_blueprint(admin, url_prefix='admin')
app.register_blueprint(user, url_prefix='user')
```
admin.py:
```python
admin = Blueprint('admin', __name__)

@admin.route('/greeting')
def greeting():
    return 'Hello, administrative user!'
```
user.py:
```python
user = Blueprint('user', __name__)
@user.route('/greeting')
def greeting():
    return 'Hello, lowly normal user!'
```

在`admin.py`和`user.py`中都有`greeting()`方法, 如果我们仅仅使用url path到view funciton的映射就会有问题, 因为结果有两个, 分别是`/admin/greeting`和`/user/greeting`. 加了`endpoint`层就可以有效的解决这个问题.
```python
print(url_for('admin.greeting')) # Prints '/admin/greeting'
print(url_for('user.greeting')) # Prints '/user/greeting'
```

参考:
https://stackoverflow.com/questions/19261833/what-is-an-endpoint-in-flask