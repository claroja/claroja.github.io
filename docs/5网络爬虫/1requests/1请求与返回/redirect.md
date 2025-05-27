# redirect

## 后端

```python
from flask import abort, redirect, url_for
from flask import Flask
app = Flask(__name__)

@app.route('/')
def index():
    return redirect(url_for('login'))

@app.route('/login')
def login():
    abort(404)

if __name__ == '__main__':
    app.run(debug=True)

```

## requests
```python
import requests
r = requests.get('http://localhost:5000')
r.url
r.status_code
r.history

r = requests.get('http://localhost:5000', allow_redirects=False)  # 拒绝重定向
r.url
r.status_code
r.history

```


