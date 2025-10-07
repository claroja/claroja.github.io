# order

```
select * from 表名 order by 列1 asc|desc [,列2 asc|desc,...]
```

1. 先按照列1进行排序，如果列1的值相同时，则按照 列2 排序，以此类推
2. 默认升序`asc`. `asc`从小到大排列，即升序, `desc`从大到小排序，即降序. 
3. 可以给不同列指定排序方式, 如`col1 asc, col2 desc`, 既`col1`升序, `col2`降序

