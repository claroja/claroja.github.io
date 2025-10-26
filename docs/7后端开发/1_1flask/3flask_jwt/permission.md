# permission



只有特定的permisson才能访问

```python
from flask_jwt_extended import create_access_token, get_jwt_identity
from flask_jwt_extended import get_jwt
from flask_jwt_extended import JWTManager
from flask_jwt_extended import verify_jwt_in_request

from functools import wraps
from datetime import timedelta
from flask import Flask, url_for
from flask import jsonify

app = Flask(__name__)
jwt = JWTManager(app)
app.config["JWT_SECRET_KEY"] = "salt"
app.config['JWT_ACCESS_TOKEN_EXPIRES']=timedelta(hours=1)


def permission_required():
    def wrapper(fn):
        @wraps(fn)
        def decorator(*args, **kwargs):
            verify_jwt_in_request()  # 必须先验证jwt, 类似加上了@jwt_required()
            identity = get_jwt_identity()
            if url_for(fn.__name__) in identity["permission"]:
                return fn(*args, **kwargs)
            else:
                return jsonify(msg="no permission"), 403
        return decorator
    return wrapper

@app.route("/login", methods=["POST"])
def login():
    access_token = create_access_token(
        identity={'id': 1, 'username': 'apple', "permission":["/protected"]},
    )
    return jsonify(access_token=access_token)


@app.route("/protected", methods=["GET"])
@permission_required()  # 使用自定义装饰器
def protected():
    additional_claims = get_jwt()
    return jsonify(claims=additional_claims)


if __name__ == "__main__":
    app.run()
```


`verify_jwt_in_request()`不返回任何东西。如果令牌解码链中的任何事情失败，它将返回一个适当的异常。也就是说它在这里的作用是为了校验当前请求有没有token,如果没有则会返回一个异常信息，不能访问被保护的节点，同样的和@jwt_required()它们一样有四个可选的参数：optional=False, fresh=False, refresh=False, locations=None

