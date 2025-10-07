# jwt



flask_jwt_extended基础使用

## python服务启动
```python
from flask_jwt_extended import create_access_token, get_jwt, get_jwt_header, get_jwt_identity
from flask_jwt_extended import jwt_required
from flask_jwt_extended import JWTManager

from flask import Flask
from flask import jsonify
from datetime import timedelta


app = Flask(__name__)
jwt = JWTManager(app)

app.config['JWT_SECRET_KEY'] = 'salt'  # 加密盐值

@app.route('/login',methods=['POST'])
def login():
    access_token = create_access_token(
        identity={'id': 1, 'username': 'wang'},
        fresh=False,
        expires_delta=timedelta(seconds=60),
        additional_claims={'claims': 'claims'},
        additional_headers={"header": "header"},
    )
    return jsonify(access_token=access_token)


@app.route('/index',methods=['GET'])
@jwt_required()
def index():
    return jsonify({
        "get_jwt()": get_jwt(),
        "get_jwt_identity()": get_jwt_identity(),
        "get_jwt_header()": get_jwt_header(),
    })


if __name__ == '__main__':
    app.run()
```

## 没有token,访问返回未授权

直接访问被保护的路由`/index`, 返回401, UNAUTHORIZED.
```shell
$ http get :5000/index
HTTP/1.0 401 UNAUTHORIZED
Content-Length: 44
Content-Type: application/json
Date: Thu, 06 Jan 2022 03:36:24 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

{
    "msg": "Missing Authorization Header"
}
```

## 访问登陆路由`/login`, 获得token
```shell
$ http post :5000/login
HTTP/1.0 200 OK
Content-Length: 368
Content-Type: application/json
Date: Thu, 06 Jan 2022 06:46:52 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

{
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImhlYWRlciI6ImhlYWRlciJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1MTYxMiwianRpIjoiNGZkY2FhYWMtYmYzOC00MDBhLWExM2ItYjM4NWM3NDdlMGJiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6MSwidXNlcm5hbWUiOiJ3YW5nIn0sIm5iZiI6MTY0MTQ1MTYxMiwiZXhwIjoxNjQxNDUxNjcyLCJjbGFpbXMiOiJjbGFpbXMifQ.OMDUxAUSY7DzFYdTBvLmotzAzHOJ9f3mDczXpBGxoYk"
}

```

可以去`https://jwt.io/`解析该token,结果为:

### 第一部分: HEADER:ALGORITHM & TOKEN TYPE, 头部
表示该token的`type`为`JWT`, 签名算法`alg`为`HS256`, 这两个都是调用`create_access_token()`方法时自动生成, 另外我们可以传入参数`header`来增加额外的信息.
```json
{
  "typ": "JWT",
  "alg": "HS256",
  "header": "header"
}
```

### 第二部分: PAYLOAD:DATA, 数据

字段|解释
--|--
fresh|一个标记, 可以在验证的时候验证该标记. 调用`create_access_token()`手工传入
iat(issued at)|签发token的时间. 调用`create_access_token()`自动生成
jti(jwt id)|jwt的标志. 调用`create_access_token()`自动生成
type|jwt的类型, 调用`create_access_token()`为`access`, 调用`create_refresh_token()`为`refresh`
sub(The subject of the token)|token的主题,一般将信息都写在此字段下, 调用`create_access_token()`时手动传入, `identity`参数对应的数据
nbf(not before)|token在此时间之前不能被接收处理, 和iat一样, 就是创建的时间.调用`create_access_token()`自动生成
exp(expires)|token失效的时间, 调用`create_access_token()`, 通过参数`expires_delta`来设置时间间隔, 会自动计算失效的时间点
claims|用户自己声明的一些数据, 调用`create_access_token()`, 通过参数`claim`来设置
```json
{
  "fresh": false,
  "iat": 1641449139,
  "jti": "8cdd4bd6-26db-4eaa-bcc2-0b1e14a8c773",
  "type": "access",
  "sub": {
    "id": 1,
    "username": "wang"
  },
  "nbf": 1641449139,
  "exp": 1641452739,
  "claims": "claims"
}
```

### 第三部分, VERIFY SIGNATURE签名信息
将header和payload组合起来, 并用HMACSHA256算法, 将其和自己设置的`盐`进行加密
```json
HMACSHA256(
  base64UrlEncode(header) + "." +
  base64UrlEncode(payload),
  
your-256-bit-secret

) secret base64 encoded
```


## 带着token成功访问被保护的路由`/index`
```shell
$ export JWT="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiIsImhlYWRlciI6ImhlYWRlciJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY0MTQ1MTYxMiwianRpIjoi
NGZkY2FhYWMtYmYzOC00MDBhLWExM2ItYjM4NWM3NDdlMGJiIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6eyJpZCI6MSwidXNlcm5hbWUiOiJ3YW5nIn0sIm5iZiI6MTY
0MTQ1MTYxMiwiZXhwIjoxNjQxNDUxNjcyLCJjbGFpbXMiOiJjbGFpbXMifQ.OMDUxAUSY7DzFYdTBvLmotzAzHOJ9f3mDczXpBGxoYk"

$ http get :5000/index Authorization:"Bearer $JWT"
HTTP/1.0 200 OK
Content-Length: 440
Content-Type: application/json
Date: Thu, 06 Jan 2022 06:47:19 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

{
    "get_jwt()": {
        "claims": "claims",
        "exp": 1641451672,
        "fresh": false,
        "iat": 1641451612,
        "jti": "4fdcaaac-bf38-400a-a13b-b385c747e0bb",
        "nbf": 1641451612,
        "sub": {
            "id": 1,
            "username": "wang"
        },
        "type": "access"
    },
    "get_jwt_header()": {
        "alg": "HS256",
        "header": "header",
        "typ": "JWT"
    },
    "get_jwt_identity()": {
        "id": 1,
        "username": "wang"
    }
}
```

方法|描述
--|--
get_jwt()|返回payload
get_jwt_header()|获得头信息
get_jwt_identity()|获得payload的sub字段下的内容, 和`create_access_token()`中的`identity`参数对应


## token过期
因为我们设置`expires_delta`为1分钟,所以1分钟后, 再访问`/index`, 返回401未授权, 信息是token过时

```shell
$ http get :5000/index Authorization:"Bearer $JWT"
HTTP/1.0 401 UNAUTHORIZED
Content-Length: 33
Content-Type: application/json
Date: Thu, 06 Jan 2022 06:48:20 GMT
Server: Werkzeug/2.0.2 Python/3.8.10

{
    "msg": "Token has expired"
}

```