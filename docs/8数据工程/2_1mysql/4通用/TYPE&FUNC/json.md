# json


## type

```sql
SELECT JSON_TYPE('["a", "b", 1]');
SELECT JSON_TYPE('{"k1": "value", "k2": 10}');
```



```sql
mysql> CREATE TABLE t1 (c1 JSON);

mysql> INSERT INTO t1 VALUES
     >     ('{"x": 17, "x": "red"}'),
     >     ('{"x": 17, "x": "red", "x": [3, 5, 7]}');

mysql> SELECT c1 FROM t1;
```

## function

### search

`SET @var_name = expr [, @var_name = expr]`
`set @j`就是对@j进行赋值
`$`符是当前json对象的意思

方法|描述
--|--
`JSON_CONTAINS(target, candidate[, path])`|
`JSON_CONTAINS_PATH(json_doc, one_or_all, path[, path] ...)`|
`JSON_EXTRACT(json_doc, path[, path] ...)`|
`JSON_KEYS(json_doc[, path])`|
`JSON_OVERLAPS(json_doc1, json_doc2)`|
`JSON_SEARCH(json_doc, one_or_all, search_str[, escape_char[, path] ...])`|
`alue MEMBER OF(json_array)`|



1`JSON_CONTAINS(target, candidate[, path])`
判断target的key 的value 是否为candidate
```sql
SET @j = '{"a": 1, "b": 2, "c": {"d": 4}}';
SET @j2 = '1'; --用来测试包含字符
SELECT JSON_CONTAINS(@j, @j2, '$.a'); -- 1 //@j中键a,包含@j2
SELECT JSON_CONTAINS(@j, @j2, '$.b'); -- 0 //@j中键B,不包含@j2

SET @j2 = '{"d": 4}'; -- 用来验证包含字典结构
SELECT JSON_CONTAINS(@j, @j2, '$.a'); -- 0 //@j中键a,包含@j2
SELECT JSON_CONTAINS(@j, @j2, '$.c'); -- 1 //@j中键B,不包含@j2
```

2.`JSON_CONTAINS_PATH(json_doc, one_or_all, path[, path] ...)`
判断json_doc是否包含指定节点
```sql
SET @j = '{"a": 1, "b": 2, "c": {"d": 4}}';
SELECT JSON_CONTAINS_PATH(@j, 'one', '$.a', '$.e'); -- 1 //
SELECT JSON_CONTAINS_PATH(@j, 'all', '$.a', '$.e'); -- 0
SELECT JSON_CONTAINS_PATH(@j, 'one', '$.c.d'); -- 1
SELECT JSON_CONTAINS_PATH(@j, 'one', '$.a.d'); -- 0

```

3.`JSON_EXTRACT(json_doc, path[, path] ...)`
取json的某个位置上的元素

```sql
SELECT JSON_EXTRACT('[10, 20, [30, 40]]', '$[1]'); -- 20
SELECT JSON_EXTRACT('[10, 20, [30, 40]]', '$[1]', '$[0]'); -- [20, 10]
SELECT JSON_EXTRACT('[10, 20, [30, 40]]', '$[2][*]'); -- [30, 40]    
```


`->`是`JSON_EXTRACT`的简写
```sql
mysql> SELECT c, JSON_EXTRACT(c, "$.id"), g
     > FROM jemp
     > WHERE JSON_EXTRACT(c, "$.id") > 1
     > ORDER BY JSON_EXTRACT(c, "$.name");
+-------------------------------+-----------+------+
| c                             | c->"$.id" | g    |
+-------------------------------+-----------+------+
| {"id": "3", "name": "Barney"} | "3"       |    3 |
| {"id": "4", "name": "Betty"}  | "4"       |    4 |
| {"id": "2", "name": "Wilma"}  | "2"       |    2 |
+-------------------------------+-----------+------+
3 rows in set (0.00 sec)

mysql> SELECT c, c->"$.id", g
     > FROM jemp
     > WHERE c->"$.id" > 1
     > ORDER BY c->"$.name";
+-------------------------------+-----------+------+
| c                             | c->"$.id" | g    |
+-------------------------------+-----------+------+
| {"id": "3", "name": "Barney"} | "3"       |    3 |
| {"id": "4", "name": "Betty"}  | "4"       |    4 |
| {"id": "2", "name": "Wilma"}  | "2"       |    2 |
+-------------------------------+-----------+------+
3 rows in set (0.00 sec)
```

`column->>path`

此三个函数是等价的
```sql
JSON_UNQUOTE( JSON_EXTRACT(column, path) )
JSON_UNQUOTE(column -> path)
column->>path
```

4.`JSON_KEYS(json_doc[, path])`

```sql
SELECT JSON_KEYS('{"a": 1, "b": {"c": 30}}'); --  ["a", "b"]    
SELECT JSON_KEYS('{"a": 1, "b": {"c": 30}}', '$.b'); -- ["c"]
```

5.`JSON_OVERLAPS(json_doc1, json_doc2)`
两个json中是否有相容的元素
```sql
SELECT JSON_OVERLAPS("[1,3,5,7]", "[2,5,7]");  -- 1
SELECT JSON_OVERLAPS("[1,3,5,7]", "[2,6,7]");  -- 1
SELECT JSON_OVERLAPS("[1,3,5,7]", "[2,6,8]");  -- 0
```

6.`JSON_SEARCH(json_doc, one_or_all, search_str[, escape_char[, path] ...])`
查询指定值的位置

```sql
SET @j = '["abc", [{"k": "10"}, "def"], {"x":"abc"}, {"y":"bcd"}]';
SELECT JSON_SEARCH(@j, 'one', 'abc');  -- "$[0]"
SELECT JSON_SEARCH(@j, 'all', 'abc');  -- ["$[0]", "$[2].x"]
SELECT JSON_SEARCH(@j, 'all', 'ghi');  -- NULL
SELECT JSON_SEARCH(@j, 'all', '10');  -- "$[1][0].k"
SELECT JSON_SEARCH(@j, 'all', '10', NULL, '$'); -- "$[1][0].k"
SELECT JSON_SEARCH(@j, 'all', '10', NULL, '$[*]'); -- "$[1][0].k"
SELECT JSON_SEARCH(@j, 'all', '10', NULL, '$**.k'); -- "$[1][0].k"
SELECT JSON_SEARCH(@j, 'all', '10', NULL, '$[*][0].k'); -- "$[1][0].k"
SELECT JSON_SEARCH(@j, 'all', '10', NULL, '$[1]'); -- "$[1][0].k"
SELECT JSON_SEARCH(@j, 'all', '10', NULL, '$[1][0]'); -- "$[1][0].k"
SELECT JSON_SEARCH(@j, 'all', 'abc', NULL, '$[2]'); -- "$[2].x"
SELECT JSON_SEARCH(@j, 'all', '%a%'); -- ["$[0]", "$[2].x"]
SELECT JSON_SEARCH(@j, 'all', '%b%'); -- ["$[0]", "$[2].x", "$[3].y"]
SELECT JSON_SEARCH(@j, 'all', '%b%', NULL, '$[0]'); -- "$[0]"
SELECT JSON_SEARCH(@j, 'all', '%b%', NULL, '$[2]'); -- "$[2].x"
SELECT JSON_SEARCH(@j, 'all', '%b%', NULL, '$[1]');  -- NULL
SELECT JSON_SEARCH(@j, 'all', '%b%', '', '$[1]');  -- NULL
SELECT JSON_SEARCH(@j, 'all', '%b%', '', '$[3]');  -- "$[3].y"

```

7.`alue MEMBER OF(json_array)`
查询一个值是否在json列表

```sql
SELECT 17 MEMBER OF('[23, "abc", 17, "ab", 10]'); -- 1
SELECT 7 MEMBER OF('[23, "abc", 17, "ab", 10]'); -- 0
```

### modify
方法|描述
--|--
`JSON_ARRAY_APPEND(json_doc, path, val[, path, val] ...)`|
`JSON_ARRAY_INSERT(json_doc, path, val[, path, val] ...)`|
`JSON_INSERT(json_doc, path, val[, path, val] ...)`|
`JSON_MERGE(json_doc, json_doc[, json_doc] ...)`|
`JSON_MERGE_PATCH(json_doc, json_doc[, json_doc] ...)`|
`JSON_MERGE_PRESERVE(json_doc, json_doc[, json_doc] ...)`|
`JSON_REMOVE(json_doc, path[, path] ...)`|
`JSON_REPLACE(json_doc, path, val[, path, val] ...)`|
`JSON_SET(json_doc, path, val[, path, val] ...)`|
`JSON_UNQUOTE(json_val)`|


1.`JSON_ARRAY_APPEND(json_doc, path, val[, path, val] ...)`

```sql
SET @j = '["a", ["b", "c"], "d"]';
SELECT JSON_ARRAY_APPEND(@j, '$[1]', 1); -- ["a", ["b", "c", 1], "d"];
SELECT JSON_ARRAY_APPEND(@j, '$[0]', 2); -- [["a", 2], ["b", "c"], "d"]
SELECT JSON_ARRAY_APPEND(@j, '$[1][0]', 3); -- ["a", [["b", 3], "c"], "d"]

SET @j = '{"a": 1, "b": [2, 3], "c": 4}';
SELECT JSON_ARRAY_APPEND(@j, '$.b', 'x'); -- {"a": 1, "b": [2, 3, "x"], "c": 4}
SELECT JSON_ARRAY_APPEND(@j, '$.c', 'y'); -- {"a": 1, "b": [2, 3], "c": [4, "y"]}

SET @j = '{"a": 1}';
SELECT JSON_ARRAY_APPEND(@j, '$', 'z'); -- [{"a": 1}, "z"]
```


2.`JSON_ARRAY_INSERT(json_doc, path, val[, path, val] ...)`

```sql
SET @j = '["a", {"b": [1, 2]}, [3, 4]]';
SELECT JSON_ARRAY_INSERT(@j, '$[1]', 'x'); -- ["a", "x", {"b": [1, 2]}, [3, 4]]
SELECT JSON_ARRAY_INSERT(@j, '$[100]', 'x'); -- ["a", {"b": [1, 2]}, [3, 4], "x"]
SELECT JSON_ARRAY_INSERT(@j, '$[1].b[0]', 'x'); -- ["a", {"b": ["x", 1, 2]}, [3, 4]]
SELECT JSON_ARRAY_INSERT(@j, '$[2][1]', 'y'); -- ["a", {"b": [1, 2]}, [3, "y", 4]]
SELECT JSON_ARRAY_INSERT(@j, '$[0]', 'x', '$[2][1]', 'y'); -- ["x", "a", {"b": [1, 2]}, [3, 4]]
```

3.`JSON_INSERT(json_doc, path, val[, path, val] ...)`

```sql
SET @j = '{ "a": 1, "b": [2, 3]}';
SELECT JSON_INSERT(@j, '$.a', 10, '$.c', '[true, false]'); -- {"a": 1, "b": [2, 3], "c": "[true, false]"} //注意a节点没有更新
SELECT JSON_INSERT(@j, '$.a', 10, '$.c', CAST('[true, false]' AS JSON)); -- {"a": 1, "b": [2, 3], "c": [true, false]} 

```

4.`JSON_MERGE(json_doc, json_doc[, json_doc] ...)`
```sql
SELECT JSON_MERGE('[1, 2]', '[true, false]');
```


5.`JSON_MERGE_PATCH(json_doc, json_doc[, json_doc] ...)`
```sql
SELECT JSON_MERGE_PATCH('[1, 2]', '[true, false]'); -- [true, false]
SELECT JSON_MERGE_PATCH('{"name": "x"}', '{"id": 47}'); -- {"id": 47, "name": "x"}
SELECT JSON_MERGE_PATCH('1', 'true');  -- true
SELECT JSON_MERGE_PATCH('[1, 2]', '{"id": 47}');  -- {"id": 47}
SELECT JSON_MERGE_PATCH('{ "a": 1, "b":2 }','{ "a": 3, "c":4 }','{ "a": 5, "d":6 }'); -- {"a": 5, "b": 2, "c": 4, "d": 6}
SELECT JSON_MERGE_PATCH('{"a":1, "b":2}', '{"b":null}'); -- {"a": 1}
SELECT JSON_MERGE_PATCH('{"a":{"x":1}}', '{"a":{"y":2}}'); -- {"a": {"x": 1, "y": 2}}  
```

6.`JSON_MERGE_PRESERVE(json_doc, json_doc[, json_doc] ...)`
```sql
SELECT JSON_MERGE_PRESERVE('[1, 2]', '[true, false]'); -- [1, 2, true, false]
SELECT JSON_MERGE_PRESERVE('{"name": "x"}', '{"id": 47}'); -- {"id": 47, "name": "x"}
SELECT JSON_MERGE_PRESERVE('1', 'true'); -- [1, true]
SELECT JSON_MERGE_PRESERVE('[1, 2]', '{"id": 47}'); -- [1, 2, {"id": 47}]
SELECT JSON_MERGE_PRESERVE('{ "a": 1, "b": 2 }','{ "a": 3, "c": 4 }'); -- {"a": [1, 3], "b": 2, "c": 4}
SELECT JSON_MERGE_PRESERVE('{ "a": 1, "b": 2 }','{ "a": 3, "c": 4 }','{ "a": 5, "d": 6 }'); -- {"a": [1, 3, 5], "b": 2, "c": 4, "d": 6}
```

7.`JSON_REMOVE(json_doc, path[, path] ...)`
```sql
SET @j = '["a", ["b", "c"], "d"]';
SELECT JSON_REMOVE(@j, '$[1]'); -- ["a", "d"]

```

8.`JSON_REPLACE(json_doc, path, val[, path, val] ...)`
```sql
SET @j = '{ "a": 1, "b": [2, 3]}';
SELECT JSON_REPLACE(@j, '$.a', 10, '$.c', '[true, false]'); -- {"a": 10, "b": [2, 3]}
```




9.`JSON_SET(json_doc, path, val[, path, val] ...)`
```sql
SET @j = '{ "a": 1, "b": [2, 3]}';
SELECT JSON_SET(@j, '$.a', 10, '$.c', '[true, false]');  -- {"a": 10, "b": [2, 3], "c": "[true, false]"}
SELECT JSON_INSERT(@j, '$.a', 10, '$.c', '[true, false]'); -- {"a": 1, "b": [2, 3], "c": "[true, false]"}
SELECT JSON_REPLACE(@j, '$.a', 10, '$.c', '[true, false]'); -- {"a": 10, "b": [2, 3]}
```

10.`JSON_UNQUOTE(json_val)`
```sql
SET @j = '"abc"';
SELECT @j, JSON_UNQUOTE(@j);  -- "abc" | abc
SET @j = '[1, 2, 3]';
SELECT @j, JSON_UNQUOTE(@j); -- [1, 2, 3] | [1, 2, 3]

```

### json value attributes

方法|描述
--|--
`JSON_DEPTH(json_doc)`|
`JSON_LENGTH(json_doc[, path])`|
`JSON_TYPE(json_val)`|
`JSON_VALID(val)`|



1.`JSON_DEPTH(json_doc)`
```sql
SELECT JSON_DEPTH('{}'), JSON_DEPTH('[]'), JSON_DEPTH('true'); -- 1 |  1 |   1
SELECT JSON_DEPTH('[10, 20]'), JSON_DEPTH('[[], {}]'); -- 2 | 2
SELECT JSON_DEPTH('[10, {"a": 20}]'); -- 3
```

2.`JSON_LENGTH(json_doc[, path])`

```sql
SELECT JSON_LENGTH('[1, 2, {"a": 3}]'); -- 3
SELECT JSON_LENGTH('{"a": 1, "b": {"c": 30}}'); -- 2
SELECT JSON_LENGTH('{"a": 1, "b": {"c": 30}}', '$.b'); -- 1
```

3.`JSON_TYPE(json_val)`
```sql
SET @j = '{"a": [10, true]}'; --OBJECT
SELECT JSON_TYPE(JSON_EXTRACT(@j, '$.a')); --ARRAY
SELECT JSON_TYPE(JSON_EXTRACT(@j, '$.a[0]')); --INTEGER
SELECT JSON_TYPE(JSON_EXTRACT(@j, '$.a[1]')); --BOOLEAN
```

4.`JSON_VALID(val)`
```sql
SELECT JSON_VALID('{"a": 1}'); -- 1
SELECT JSON_VALID('hello'), JSON_VALID('"hello"'); -- 0 | 1 
```






refs:
https://dev.mysql.com/doc/refman/8.0/en/json.html
https://dev.mysql.com/doc/refman/8.0/en/json-function-reference.html
https://dev.mysql.com/doc/refman/8.0/en/json-search-functions.html
https://blog.csdn.net/weixin_33772645/article/details/86031723
https://www.cnblogs.com/ooo0/p/9309277.html
