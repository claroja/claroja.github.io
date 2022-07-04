---
title: flask_jwt_fresh
toc: true
date: 2021-01-20 22:03:54
---

如果为True, 只能让标记为"新鲜"的授权token访问，该参数要结合create_access_token来使用，当我们创建access_token时，有一个可选参数为fresh如果我们把它设为True,则代表它是"新鲜"token。默认为False。

一个应用就是用户登陆时获得的`access_token`将`fresh`设为`true`, 对那些比较重要的接口, 比如转账之类的, 必须是要求用户手动收入密码后才能调用的.


```python
from flask_jwt_extended import create_access_token
from flask_jwt_extended import create_refresh_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

from datetime import timedelta
from flask import Flask
from flask import jsonify

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'hello@#$%&'  # 加密盐值
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)  # 设置access_token的有效时间
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=1)  # 设置refresh_token的有效时间
jwt = JWTManager(app)


@app.route("/login", methods=["POST"])
def login():
    access_token = create_access_token(identity={'user': 'apple', 'id': 1}, fresh=True)  # 开启新鲜度模式
    refresh_token = create_refresh_token(identity={'user': 'apple', 'id': 1})
    return jsonify(access_token=access_token, refresh_token=refresh_token)


@app.route("/refresh", methods=["GET"])  # 携带refresh_token请求此接口，刷新access_token
@jwt_required(refresh=True)
def refresh():
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity, fresh=False)  # 刷新不开启新鲜度模式
    return jsonify(access_token=access_token)


@app.route("/protected", methods=["GET"])
@jwt_required(fresh=True)  # 只允许登入授权的用户访问,刷新授权不能在访问
def protected():
    identity = get_jwt_identity()
    return jsonify(identity=identity)


@app.route('/index')
@jwt_required()  # 无论登入授权还是，刷新授权都能访问
def index():
    return jsonify(msg='欢迎访问')

if __name__ == "__main__":
    app.run()
```


参考:
https://www.codestudyblog.com/cnb2107a/0718131141.html
https://www.cnblogs.com/Liu928011/archive/2021/07/17/15020581.html