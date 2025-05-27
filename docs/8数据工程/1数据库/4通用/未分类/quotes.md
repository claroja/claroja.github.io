# quotes


1. `Backticks` are to be used for table and column identifiers, but are only necessary when the identifier is a MySQL reserved keyword, or when the identifier contains whitespace.
2. `Single quotes` should be used for string values like in the VALUES() list. 
3. `Double quotes` are supported by MySQL for string values as well, but single quotes are more widely accepted by other RDBMS,so it is a good habit to use single quotes instead of double.


type|quotes|example
--|--|--
database_name|Backticks|`db1`
table_name|Backticks|`user`
column_name|Backticks|`age`
str|Single quotes|'val1'
date&datatime|Single quotes|'2001-01-01 00:00:00'
keyword|no quote|NULL
Functions|no quote|NOW()


```sql
Backtick (`)
table & column ───────┬─────┬──┬──┬──┬────┬──┬────┬──┬────┬──┬───────┐
                      ↓     ↓  ↓  ↓  ↓    ↓  ↓    ↓  ↓    ↓  ↓       ↓
$query = "INSERT INTO `table` (`id`, `col1`, `col2`, `date`, `updated`) 
                       VALUES (NULL, 'val1', 'val2', '2001-01-01', NOW())";
                               ↑↑↑↑  ↑    ↑  ↑    ↑  ↑          ↑  ↑↑↑↑↑ 
Unquoted keyword          ─────┴┴┴┘  │    │  │    │  │          │  │││││
Single-quoted (') strings ───────────┴────┴──┴────┘  │          │  │││││
Single-quoted (') DATE    ───────────────────────────┴──────────┘  │││││
Unquoted function         ─────────────────────────────────────────┴┴┴┴┘  
```

refs:
https://stackoverflow.com/questions/11321491/when-to-use-single-quotes-double-quotes-and-backticks-in-mysql