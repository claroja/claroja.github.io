# context



使用`init_app`来初始化SQLAlchemy, 在操作数据库时需要flask实例的上下文, 而直接使用`db = SQLAlchemy(app)`来初始化时, 则不需要.

```python
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'My connection string'
db.init_app(app)

with app.app_context():
    db.create_all()
```

参考:
https://flask-sqlalchemy.palletsprojects.com/en/2.x/contexts/
https://stackoverflow.com/questions/46540664/no-application-found-either-work-inside-a-view-function-or-push-an-application