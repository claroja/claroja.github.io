# crontab

Cron is an effective and popular command-line utility used to schedule a broad range of tasks at a specified time. all the jobs are writen in the crontab file.


## command

```sh
crontab –e  # edit the crontabfile
```


## syntax
```sh
minute hour day-of-month month-of-year day-of-week commands
```

param|desc
--|--
Minute |一小时中的哪一分钟 [0～59]
hour |一天中的哪个小时 [0～23]
day-of-month |一月中的哪一天 [1～31]
month-of-year |一年中的哪一月 [1～12]
day-of-week |一周中的哪一天 [0～6] 0表示星期天
commands |执行的命令

**书写注意事项**:

1. 全都不能为空，必须填入，不知道的值使用通配符*表示任何时间
2. 每个时间字段都可以指定多个值，不连续的值用,间隔，连续的值用-间隔。
3. 命令应该给出绝对路径
4. 用户必须具有运行所对应的命令或程序的权限


## example
```sh
45 17 * * 1-5 /sbin/shutdown -h now # 周一到周五,17:45关机
45 4 1,10,22 * * /apps/bin/backup.sh # 每月 1、1 0、2 2日的4:45运行/apps/bin目录下的backup.sh
10 1 * * 6,0 /bin/find -name “core” # 每周六、周日的 1 : 10运行一个find命令
```


refs:
https://linuxhint.com/crontab_in_linux/