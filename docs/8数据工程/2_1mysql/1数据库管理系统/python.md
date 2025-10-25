# python

MySQL
1.最原始的方法
```python
import pymysql
CONN = pymysql.connect(host='127.0.0.1',
                       port=3306,
                       user='root',
                       password='root',
                       database='ss',
                       charset='utf8')

cursor = CONN.cursor()
cursor.execute('select * from test')
result = cursor.fetchall()
cursor.close()
print(result)

```


```python
import pymysql
import pandas as pd
conn = pymysql.connect(
	user="user",
	password="password",
	host="127.0.0.1",
	database="test"
)
sql = 'select * from test'
df=pd.read_sql(sql,conn)
```

```sql
from sqlalchemy import create_engine
import pandas as pd

engine = create_engine(
        "mysql+pymysql://user:password@127.0.0.1/test",
    )
sql = 'select * from test'
## 读数据
with engine.connect() as conn:
    df = pd.read_sql(sql, conn)
```