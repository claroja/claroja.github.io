# event


the global event handler must be turned on to process events.

```sql
SHOW VARIABLES WHERE variable_name='event_scheduler';
+-----------------+-------+
| Variable_name   | Value |
+-----------------+-------+
| event_scheduler | OFF   |
+-----------------+-------+
```
With it OFF, nothing will trigger. So turn it on:
```sql
SET event_scheduler = 1;
```

config the file, next when start mysql server, the `event_scheduler` will be `On`:
`/etc/my.cnf`
`event_scheduler = 1`



## syntax

```sql
CREATE EVENT event_name
    ON SCHEDULE schedule
    [ON COMPLETION [NOT] PRESERVE]
    [ENABLE | DISABLE | DISABLE ON SLAVE]
    DO event_body;
```

```sql
CREATE EVENT `delete7DayOldMessages`
ON SCHEDULE EVERY 1 DAY STARTS '2015-09-01 00:00:00'
DO 
    BEGIN
        DELETE FROM theMessages 
        WHERE datediff(now(),updateDt)>6; -- not terribly exact, yesterday but <24hrs is still 1 day
    END
```


## schedule

### 周期执行 – 关键字 EVERY

单位有：second, minute, hour, day, week(周), quarter(季度), month, year，如：
```sql
ON SCHEDULE EVERY 1 second      //每秒执行1次
ON SCHEDULE EVERY 2 minute      //每两分钟执行1次
ON SCHEDULE EVERY 3 day         //每3天执行1次
```
### 在具体某个时间执行 – 关键字 AT, 如：
```sql
ON SCHEDULE AT current_timestamp()+interval 5 day   // 5天后执行
ON SCHEDULE AT current_timestamp()+interval 10 minute   // 10分钟后执行
ON SCHEDULE AT '2016-10-01 21:50:00'        // 在2016年10月1日，晚上9点50执行
```

#### 在某个时间段执行 – 关键字 STARTS ENDS, 如：
```sql
ON SCHEDULE EVERY 1 day STARTS current_timestamp()+interval 5 day ends current_timestamp()+interval 1 month // 5天后开始每天都执行执行到下个月底
ON SCHEDULE EVERY 1 day ENDS current_timestamp()+interval 5 day //从现在起每天执行，执行5天
```

假如在定义event的时候有指定ends：
当为on completion preserve 的时候,当event到期了,event会被disable,但是该event还是会存在
当为on completion not preserve的时候,当event到期的时候,该event会被自动删除掉.



## other

```sql
SHOW EVENTS FROM my_db_name; -- List all events by schema name (db name)
```

```sql
drop event event_name; -- Deletes the event and its code
```

开启关闭事件
```sql
alter event event_name on completion preserve enable;//开启定时任务
alter event event_name on completion preserve disable;//关闭定时任务
```


refs:
https://riptutorial.com/mysql/example/15082/create-an-event
https://dev.mysql.com/doc/refman/5.7/en/create-event.html
https://devnote.pro/posts/10000040921184