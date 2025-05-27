# trigger



## syntax
```sql
CREATE TRIGGER trigger_name trigger_time trigger_event 
ON table_name 
FOR EACH ROW 
trigger_body
```

para|dec
--|--
trigger_name|name of trigger
tirgger_time|BEFOR or AFTER, trigger after event or before event
trigger_event|INSERT,DELETE or UPDATE
table_name|在哪张表上建立触发器
trigger_body|触发器的程序体，可以是一条SQL语句或者是用BEGIN和END包含的多条语句

1. INSERT: 通过INSERT、LOAD DATA、REPLACE 语句触发(LOAD DATA语句是将文件的内容插入到表中，相当于是insert语句;replace语句在一般的情况下和insert差不多, 有时候相当于执行了一条delete和insert语句)
2. UPDATE: 可能通过UPDATE语句触发
3. DELETE: 可能通过DELETE、REPLACE语句触发。

## example
```sql
delimiter $$
CREATE TRIGGER upd_check BEFORE UPDATE ON account
    FOR EACH ROW
    BEGIN
        IF NEW.amount < 0 THEN
            SET NEW.amount = 0;
        ELSEIF NEW.amount > 100 THEN
            SET NEW.amount = 100;
        END IF;
    END$$
delimiter ;
```

tips：一般情况下，mysql默认是以 ; 作为结束执行语句，与触发器中需要的分行起冲突
　　   为解决此问题可用DELIMITER，如：DELIMITER ||，可以将结束符号变成||
　　   当触发器创建完成后，可以用DELIMITER ;来将结束符号变成;


refs:
https://blog.csdn.net/little__SuperMan/article/details/123519033