# project



app.py

使用db.init_app()来初始化数据库
```python
from flask import Flask
from models import User
from exts import db


app = Flask(__name__)
app.config["JWT_SECRET_KEY"] = "super-secret"  # Change this!
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///foo.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db.init_app(app)

with app.app_context():
    db.session.add(User(username="123", phone="123", password="123"))
    db.session.commit()

```

exts.py 
该文件是为了避免循环导入
```python
from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()
```


models.py
将模型单独拆分到一个文件文件夹
```python
from exts import db
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.Text, nullable=False, unique=True)
    phone = db.Column(db.Text, nullable=False, unique=True)
    password = db.Column(db.Text, nullable=False)
```