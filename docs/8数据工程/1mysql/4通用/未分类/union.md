# union


`UNION` removes duplicate records
`UNION` ALL does not.


```sql
SELECT 'foo' AS bar UNION SELECT 'foo' AS bar
+-----+
| bar |
+-----+
| foo |
+-----+
```

```sql
SELECT 'foo' AS bar UNION ALL SELECT 'foo' AS bar
+-----+
| bar |
+-----+
| foo |
| foo |
+-----+
```



refs:
https://stackoverflow.com/questions/49925/what-is-the-difference-between-union-and-union-all