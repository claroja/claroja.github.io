# hbase_python

## HappyBase库连接使用HBase

### 创建表

```python
# coding:utf8
"""
演示使用happybase库，操作HBase创建表
"""
import happybase

# 1. 获取数据库的链接
conn = happybase.Connection(
    host="node1",
    port=9090       # Port使用HBase的ThriftServer的端口，默认9090
)

# 2. 通过链接对象的create_table API创建表
conn.create_table(
    name="WATER_BILL",
    families={
        "cf1": dict(),                  # cf1列族，默认属性，版本默认设置3
        "cf2": {"max_versions": 10}     # cf2列族，版本最大10
    }
)

# 3. 关闭链接
conn.close()

```

- 通过`happybase.Connection()`去获取链接对象，内部一般传入host和port2个参数
- 通过链接对象的`create_table`方法去创建表
    - 参数1：表名
    - 参数2：列族设置

注意，要使用happybase，必须启动HBase的ThriftServer

启动：`$HBASE_HOME/bin/hbase-daemon.sh start thrift`

### 写入数据

```python
# coding:utf8
"""
演示happybase库向HBase写入数据
"""
import happybase

# 1. 获取HBase的链接
conn = happybase.Connection(
    host="node1",
    port=9090
)

# 2. 向表中插入数据，需要获取一个TABLE表对象，获取table对象
table = conn.table("WATER_BILL")        # 获取到WATER_BILL表的table对象

# 3. 插入操作就可以通过table对象内的put方法来进行
table.put(
    row='rk001',
    data={
        'cf1:name': 'zhangsan',
        'cf1:age': '11',
        'cf2:yuwen': '99',
        'cf2:shuxue': '10'
    }
)

# 4. 关闭链接
conn.close()

```

- 获取到HBase的链接对象`conn`
- 链接对象可以获取到表的对象，通过`conn.table()`
- 通过表对象的`put()`可以完成数据插入
    - 参数1：rowkey
    - 参数2：数据（字典），格式：`{'列族:二级列': '数据', ......, '列族:二级列': '数据'}`

要注意，写入HBase的数据都必须是字节数组

如果是字符串的话，会自动转换为字节数组

### 查询单条数据

```python
# coding:utf8
"""
演示使用happybase库，查询HBase的单条数据
"""
import happybase

# 1. 获取数据库连接
conn = happybase.Connection("node1")    # port默认9090，不写也行

# 2. 获取到被查询表的table对象
table = conn.table("WATER_BILL")

# 3. table对象中有row()方法，可以查询单个rowkey的数据
result = table.row(
    'rk001'        # 指定Rowkey
)

# 4. 数据被作为字典，存入了result对象，字典的key是："列族:二级列", 字典的value就是数据
for key in result.keys():
    print(f"key是:{key.decode('UTF-8')}, value是:{result[key].decode('UTF-8')}")

```

结果集中的数据，都是字节数组（key和value都是）
所以如上代码，我们将结果通过decode()方法，转换回字符串了

注意：从HBase取出来的数据，都是`字符串`

想要数字等类型，从字符串自行转换。

可以指定列族查询

```python
result = table.row(
    'rk001',        # 指定Rowkey
    ['cf1', 'cf2']
)
# 就可以指定 查询2个列族的数据
```

可以指定列族的二级列查询

```python
result = table.row(
    'rk001',        # 指定Rowkey
    ['cf1:name', 'cf2:yuwen']
)
# 这样就可以只查询：
- cf1的name二级列
- cf2的yuwen二级列
```

### 扫描表

```python
# coding:utf8
"""
演示使用happybase库，扫描HBase的表的数据
"""
import happybase

# 1. 获取数据库连接
conn = happybase.Connection("node1")    # port默认9090，不写也行

# 2. 获取到被查询表的table对象
table = conn.table("WATER_BILL")

# 3. table对象中有scan()方法，可以扫描表的数据
result = table.scan()
# result对象是一个生成器可以被for循环挨个取出数据
# 每一条数据是元组类型，内容：('Rowkey', 数据的字典对象)

for data_tuple in result:
    # data_tuple就是每一个元组， 内容：('Rowkey', 数据的字典对象)
    rowkey = data_tuple[0].decode("UTF-8")  # 取出Rowkey
    data_dict = data_tuple[1]               # 取出数据字典对象
    for key in data_dict.keys():
        # 每一个数据字典对象的内容是：{"列族:二级列": "数据", ......, "列族:二级列": "数据" }
        print(f"Rowkey是：{rowkey}, 列族:二级列是:{key.decode('UTF-8')}, value是:{data_dict[key].decode('UTF-8')}")

```

返回结果(result对象)的类型：

- 返回的是一个Generator的类型（生成器），生成器可以被for循环挨个取出来数据
- 对返回的生成器进行for循环，可以得到一个tuple（元组）
- 每个元组的内容是：`('Rowkey', {数据的字段})`
    - 每个元组的元素1是rowkey
    - 每个元组的元素2是字典，字典的内容是：`{"列族:二级列": "数据", ......, "列族:二级列": "数据" }`

可以只扫描指定列族：

```python
result = table.scan(columns=['cf1:name'])
```

也可以只扫描指定列族和二级列

```python
result = table.scan(columns=['cf1:name', 'cf2:yuwen'])
# 扫描cf1列族的name二级列
# 和扫描cf2列族的yuwen二级列
```

### 删除数据

```python
# coding:utf8
"""
演示：happybase删除数据
"""
import happybase

# 1. 获取连接对象
conn = happybase.Connection(host="node1", port=9090)

# 2. 获取表对象
table = conn.table("WATER_BILL")

# 3. 删除数据
# table.delete('rk001')
table.delete('rk002', columns=['cf1:name', 'cf2:yuwen'])

# 4. 关闭连接
conn.close()

```

- `table.delete(rowkey)` 删除一个rowkey的全部数据
- `table.delete(rowkey, column=['列族:二级列', '列族:二级列'......])` 删除指定rowkey的指定二级列

### 删除表

```python
# coding:utf8
"""
演示happybase删除表
"""
import happybase
# 1. 构建链接对象
conn = happybase.Connection(host="node1")

# 2. 删除表
conn.delete_table("WATER_BILL", disable=True)

# 3. 关闭连接
conn.close()

```

- 连接对象.delete_table(表名, disable=True)
    - disable表示关闭表
