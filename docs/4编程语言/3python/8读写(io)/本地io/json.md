# json



## 简介
Json,全名 JavaScript Object Notation,是一种轻量级的数据交换格式.Json最广泛的应用是作为AJAX中web服务器和客户端的通讯的数据格式,现在也常用于http请求中.
简单理解就是json库可以把python中的字典(dict)解析为字符串(str),又可以把字符(str)编译为(dict).其实自己也可以写个类似的程序.
## 模块方法
### 编码(encode),将python对象转换为文件或字符串

**将对象转换为json字符串**
```
json.dumps(obj, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, sort_keys=False, **kw)
```
**将对象转换为json文件**
```
json.dump(obj, fp, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, sort_keys=False, **kw)
json.dumps(obj, skipkeys=False, ensure_ascii=True, check_circular=True, allow_nan=True, cls=None, indent=None, separators=None, default=None, sort_keys=False, **kw)
```

|参数|描述|
|--|--|
|obj|序列化对象|
|fp|json模块总是产生str对象，而不是bytes对象。因此，fp.write()必须支持str输入。|
|ensure_ascii|为true（默认值），则输出将保证所有传入的非ASCII字符都转义。如果ensure_ascii为false，则这些字符将按原样输出。|
|check_circular|为false（默认值：True），则将跳过容器类型的循环引用检查|
|allow_nan|false（默认值：True），则将是ValueError序列化超出范围float值（nan，inf，-inf），严格遵守JSON规范。如果allow_nan为true，则将使用与其等效的JavaScript代码（NaN，Infinity，-Infinity）|
|sort_keys|为真（默认值：False），则字典的输出将按键排序。|
编码对应:
|	JSON	|	Python	|
|	--	|	--	|
|	object	|	dict	|
|	array	|	list	|
|	string	|	str	|
|	number (int)	|	int	|
|	number (real)	|	float	|
|	TRUE	|	TRUE	|
|	FALSE	|	FALSE	|
|	null	|	None	|

### 解码(decode),将文件或字符串转换为python对象
**将json字符串转换为对象**
```
json.loads(s, encoding=None, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw)
```
**将json文件转换为对象**
```
json.load(fp, cls=None, object_hook=None, parse_float=None, parse_int=None, parse_constant=None, object_pairs_hook=None, **kw)
```
解码对应:
|	Python	|	JSON	|
|	--	|	--	|
|	dict	|	object	|
|	list, tuple	|	array	|
|	str	|	string	|
|	int, float, int- & float-derived Enums	|	number	|
|	TRUE	|	TRUE	|
|	FALSE	|	FALSE	|
|	None	|	null	|

## 应用
**字符串之间的转换**
```
import json
## 字典编译为字符串(dumps)
x=json.dumps({"name":"wang","age":18})
print(x,type(x))
{"name": "wang", "age": 18} <class 'str'>
## 字符串编译为字典(loads)
y=json.loads('{"name":"wang","age":18}')
print(y,type(y))
{'name': 'wang', 'age': 18} <class 'dict'>
```

**文件之间的转换**
```
file = open('test.json','w',encoding='utf-8')  
json.dump({"name":"wang","age":18},file,ensure_ascii=False)
file.close() 
file = open('test.json','r',encoding='utf-8')


```
参考文献:
http://www.cnblogs.com/loleina/p/5623968.html
http://python.usyiyi.cn/translate/python_352/library/json.html