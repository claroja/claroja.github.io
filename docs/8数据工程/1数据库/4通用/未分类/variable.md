# variable


## User-defined variables (prefixed with @)

```sql
SET @start = 1, @finish = 10;
SELECT @start := 1, @finish := 10;
SELECT @price := MAX(product.price) FROM product 

INSERT INTO `t` (`c`) VALUES (@a);
```
scope:
User-defined variables are session-specific. That is, a user variable defined by one client cannot be seen or used by other clients.


### not identifier

User variables are intended to provide data values. They cannot be used directly in an SQL statement as an identifier.
```sql
set @tablename = 'test'
select * from @tablename
```

This produces the following error: Must declare the table variable "@tablename"

`@tablename` is a string

```sql
set @tablename = 'test';
set @sql = 'select * from ' + @tablename;
PREPARE myquery FROM @sql;
EXECUTE myquery;
```

## Local Variables (no prefix) :
Local variables needs to be declared using DECLARE before accessing it.
They can be used as local variables and the input parameters inside a stored procedure:

```sql
CREATE PROCEDURE sp_test(var1 INT) 
BEGIN   
    DECLARE start  INT unsigned DEFAULT 1;  
    DECLARE finish INT unsigned DEFAULT 10;

    SELECT  var1, start, finish;

    SELECT * FROM places WHERE place BETWEEN start AND finish; 
END; 
CALL sp_test(5);
```
scope:
The scope of a local variable is the BEGIN ... END block within which it is declared.


## Server System Variables (prefixed with @@):

The MySQL server maintains many system variables configured to a default value.
```sql
SELECT @@sort_buffer_size
```





refs:
https://stackoverflow.com/questions/11754781/how-to-declare-a-variable-in-mysql
https://stackoverflow.com/questions/2838490/a-table-name-as-a-variable
https://dev.mysql.com/doc/refman/8.0/en/user-variables.html