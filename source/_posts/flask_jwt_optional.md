---
title: flask_jwt_optional
toc: true
date: 2021-01-20 22:03:54
---
```python
# 对于一个路由节点，授权和未授权的均可以访问，但会使用不同的功能，
# 这个时候就要使用jwt_optional()装饰器，
# 至于判断是否是有token的用户，可以根据get_jwt_identity()函数的返回值判断
@app.route('/partially-protected', methods=['GET'])
@jwt_optional
def partially_protected():
    # If no JWT is sent in with the request, get_jwt_identity()
    # will return None
    current_user = get_jwt_identity()
    if current_user:
        return jsonify(logged_in_as=current_user), 200
    else:
        return jsonify(logged_in_as='anonymous user'), 200

```
应该是`@jwt_optional`, 执行了`verify_jwt_in_request()`, 然后可以在方法里, 进一步进行判断.