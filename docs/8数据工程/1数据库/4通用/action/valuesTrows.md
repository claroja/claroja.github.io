# valuesTrows



```data
id | name    
1  | a,b,c    
2  | b
```


```data
id | name    
1  | a    
1  | b    
1  | c    
2  | b
```


## values to rows

```sql
select t.id, j.name
from mytable t
join json_table(
  replace(json_array(t.name), ',', '","'),
  '$[*]' columns (name varchar(50) path '$')
) j
```

## rows to values

```sql
SELECT id,
   GROUP_CONCAT(name SEPARATOR ', ')
FROM mytable
GROUP BY id;

```


refs:
https://stackoverflow.com/questions/17942508/sql-split-values-to-multiple-rows
https://stackoverflow.com/questions/276927/can-i-concatenate-multiple-mysql-rows-into-one-field