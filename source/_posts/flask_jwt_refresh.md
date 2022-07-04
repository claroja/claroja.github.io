---
title: flask_jwt_refresh
toc: true
date: 2021-01-20 22:03:54
---

refresh token的作用是刷新access token. 因为一直使用同一个access token在网络中传输, 可能会被截获. 偶尔使用一次refresh token会降低风险.
access_token只能用于携带访问，并不能用于刷新token；同理refresh_token只能用于刷新，不能用于访问数据。


# 服务端代码
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
app.config['JWT_SECRET_KEY'] = 'salt'  # 加密盐值
# 统一管理token的失效时间
app.config['JWT_ACCESS_TOKEN_EXPIRES'] = timedelta(hours=1)  # 设置access_token的有效时间
app.config["JWT_REFRESH_TOKEN_EXPIRES"] = timedelta(days=1)  # 设置refresh_token的有效时间
jwt = JWTManager(app)


@app.route("/login", methods=["POST"])
def login():
    access_token = create_access_token(identity={'user': 'access'}))  # type=access
    refresh_token = create_refresh_token(identity={'user': 'refresh'})  # type=refresh
    return jsonify(access_token=access_token, refresh_token=refresh_token)


@app.route("/refresh", methods=["GET"])
@jwt_required(refresh=True) # 必须是type=refresh token才能访问
def refresh():
    identity = get_jwt_identity()
    access_token = create_access_token(identity=identity)
    return jsonify(access_token=access_token)


@app.route("/protected", methods=["GET"])
@jwt_required()
def protected():
    current_user = get_jwt_identity()
    return jsonify(current_user=current_user)


if __name__ == "__main__":
    app.run()

```

```shell
$ http post :5000/login
HTTP/1.0 200 OK
Content-Length: 617
Content-Type: application/json
Date: Thu, 06 Jan 2022 08:10:31 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjYzMSwianRpIjoiYzYyNjA1YjUtNjFiZi00ZTE5LTkzNmQtY2I0MzU5NmJjMGRlIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyIjoiYWNjZXNzIn0sIm5iZiI6MTY0MTQ1NjYzMSwiZXhwIjoxNjQxNDYwMjMxfQ.zUSc4uBXTx8h2NhZtjRYXGdN1UzVo6S9ULOcuFIEq3k",
    "refresh_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjYzMSwianRpIjoiOTFiZTcxM2ItZjhjOC00MTI4LWEwZjUtZjVmMjI5ZjA1N2I3IiwidHlwZSI6InJlZnJlc2giLCJzdWIiOnsidXNlciI6InJlZnJlc2gifSwibmJmIjoxNjQxNDU2NjMxLCJleHAiOjE2NDE1NDMwMzF9.XMeOEyjLrpDzSCrj0X1syTt931lOlvpvHIBhO1leJPQ"
}
```
# access token直接访问受保护的接口/protected
```shell
$ export JWT="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjYzMSwianRpIjoiYzYyNjA1YjUtNjFiZi00ZTE5LTkzNmQtY2I0MzU5NmJjMGRlIiwidHlwZSI6ImFjY2V
zcyIsInN1YiI6eyJ1c2VyIjoiYWNjZXNzIn0sIm5iZiI6MTY0MTQ1NjYzMSwiZXhwIjoxNjQxNDYwMjMxfQ.zUSc4uBXTx8h2NhZtjRYXGdN1UzVo6S9ULOcuFIEq3k"
$ http get :5000/protected Authorization:"Bearer $JWT"
HTTP/1.0 200 OK
Content-Length: 49
Content-Type: application/json
Date: Thu, 06 Jan 2022 08:11:48 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

{
    "current_user": {
        "user": "access"
    }
}
```

# 当access token过期后, 可以使用refresh token到/refresh接口重新获得access token
```shell
$ export JWT="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjYzMSwianRpIjoiOTFiZTcxM2ItZjhjOC00MTI4LWEwZjUtZjVmMjI5ZjA1N2I3IiwidHlwZSI6InJlZnJlc2giLCJzdWIiOnsidXNlciI6InJlZnJlc2gifSwibmJmIjoxNjQxNDU2NjMxLCJleHAiOjE2NDE1NDMwMzF9.XMeOEyjLrpDzSCrj0X1syTt931lOlvpvHIBhO1leJPQ"

$ http post :5000/refresh Authorization:"Bearer $JWT"
HTTP/1.0 200 OK
Content-Length: 309
Content-Type: application/json
Date: Thu, 06 Jan 2022 08:13:49 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjgyOSwianRpIjoiMDMwZDI5MjAtYjhlYS00NGY3LWIwYTYtMGQ3NDdjMzI0NTAyIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJ1c2VyIjoicmVmcmVzaCJ9LCJuYmYiOjE2NDE0NTY4MjksImV4cCI6MTY0MTQ2MDQyOX0.Twkjk-9NbC6f7O-j0yNXKEtiTm4jGw5L8kAyGwGN60M"
}


```

# access token不能访问/refresh接口
```shell
$ export JWT="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjYzMSwianRpIjoiYzYyNjA1YjUtNjFiZi00ZTE5LTkzNmQtY2I0MzU5NmJjMGRlIiwidHlwZSI6ImFjY2V
zcyIsInN1YiI6eyJ1c2VyIjoiYWNjZXNzIn0sIm5iZiI6MTY0MTQ1NjYzMSwiZXhwIjoxNjQxNDYwMjMxfQ.zUSc4uBXTx8h2NhZtjRYXGdN1UzVo6S9ULOcuFIEq3k"
$ http get :5000/refresh Authorization:"Bearer $JWT"
HTTP/1.0 422 UNPROCESSABLE ENTITY
Content-Length: 47
Content-Type: application/json
Date: Thu, 06 Jan 2022 08:12:37 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

{
    "msg": "Only refresh tokens are allowed"
}
```

# refresh token不能访问/protected接口

```shell
$ export JWT="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1NjYzMSwianRpIjoiOTFiZTcxM2ItZjhjOC00MTI4LWEwZjUtZjVmMjI5ZjA1N2I3IiwidHlwZSI6InJlZnJlc2giLCJzdWIiOnsidXNlciI6InJlZnJlc2gifSwibmJmIjoxNjQxNDU2NjMxLCJleHAiOjE2NDE1NDMwMzF9.XMeOEyjLrpDzSCrj0X1syTt931lOlvpvHIBhO1leJPQ"

$ http get :5000/protected Authorization:"Bearer $JWT"
HTTP/1.0 422 UNPROCESSABLE ENTITY
Content-Length: 51
Content-Type: application/json
Date: Thu, 06 Jan 2022 08:13:34 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

{
    "msg": "Only non-refresh tokens are allowed"
}



```