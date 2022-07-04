---
title: python_process_apscheduler
toc: true
date: 2021-11-02 8:14:54
tags:
---

APScheduler （advanceded python scheduler）
特点：
1.不依赖于Linux系统的crontab系统定时，独立运行
2.可以动态添加新的定时任务，如
下单后30分钟内必须支付，否则取消订单，就可以借助此工具（每下一单就要添加此订单的定时任务）
3.对添加的定时任务可以做持久保存



# 基础概念
触发器(trigger)和保存调度逻辑.
作业存储(job store),默认存储在内存中,也可以保存在数据库中(使用序列化和反序列化实现)
执行器(executor)控制执行的作业
调度器(scheduler)包含以上三者
**选择合适的调度器,存储,执行和触发器**
名称|描述
-|-
BlockingScheduler|当在进程中使用时
BackgroundScheduler|后台运行,不影响当前系统
AsyncIOScheduler|async module
GeventScheduler|gevent
TornadoScheduler|Tornado
TwistedScheduler|Twister
QtScheduler|Qt
**选择合适的作业存储**
默认作业存储(MemoryJobStore),宕机会丢失作业
数据库(Mongo SQLAlchemy JobStore),宕机后仍然保留作业
**选择合适的执行器**
(ThreadPoolExecutor)默认的执行器,多线程
(ProcessPoolExecutor)多进程
**选择合适的触发器**
名称|描述
-|-
date|作业执行一次,指定时间
interval|间隔执行,多次
cron|和linuxcrontab格式兼容

**触发器一般参数**
参数|描述
-|-
job_function|调用的函数
trigger|触发类型


**date触发器**
参数|描述
-|-
run_date|作业运行的时间
timezone|时区

interval触发器
参数|描述
-|-
weeks(int)|间隔周数
days(int)|间隔天数
hours(int)|间隔小时
minutes(int)|间隔分钟
seconds(int)|间隔秒数
start_date(datetime\|str)|开始日期
end_date(datetime\|str)|结束日期
timezone(datetime\|str)|时区

cron触发器
参数|描述
-|-
year(int|str)|年,4位数字
month (int\|str) | 月 (范围1-12)
day (int\|str) | 日 (范围1-31)
week (int\|str) | 周 (范围1-53)
day_of_week (int\|str) | 周内第几天或者星期几 (范围0-6 或者 mon,tue,wed,thu,fri,sat,sun)
hour (int\|str) | 时 (范围0-23)
minute (int\|str) | 分 (范围0-59)
second (int\|str) | 秒 (范围0-59)
start_date (datetime\|str) | 最早开始日期(包含)
end_date (datetime\|str) | 最晚结束时间(包含)
timezone (datetime.tzinfo\|str) | 指定时区

**取值格式**
表达式|参数|描述
-|-|-
*|any|每个值触发发
*/a|any|每个间隔值出发, 并从最小的值出发
a-b|范围内每个值出发
a-b/c|在a-b之间的间隔c值出发
xth y|day|在每月x周的y天触发
last x|day|在每月的x周触发
last|day|在每月的x天触发
x,y,z|day|Fire on any matching expression; can combine any number of any of the above expressions

**例子**
second="5"|每分钟第5秒执行一次
second="1,3,5"|每分钟1,3,5秒执行一次
second="*"|每秒执行一次
second="5/2"|每分钟的第5秒开始,间隔两2秒执行一次
second="5-10/2"|每分钟的第5-10秒,间隔2秒执行一次

**contab格式说明**
用户所建立的crontab文件中，每一行都代表一项任务，每行的每个字段代表一项设置，它的格式共分为六个字段，前五段是时间设定段，第六段是要执行的命令段，格式如下：

minute hour day month week command

其中：

minute： 表示分钟，可以是从0到59之间的任何整数。
hour：表示小时，可以是从0到23之间的任何整数。
day：表示日期，可以是从1到31之间的任何整数。
month：表示月份，可以是从1到12之间的任何整数。
week：表示星期几，可以是从0到7之间的任何整数，这里的0或7代表星期日。
command：要执行的命令，可以是系统命令，也可以是自己编写的脚本文件。

在以上各个字段中，还可以使用以下特殊字符：
星号（*）：代表所有可能的值，例如month字段如果是星号，则表示在满足其它字段的制约条件后每月都执行该命令操作。
逗号（,）：表示并列,例如，“1,2,5,7,8,9”
中杠（-）：表示整数范围，例如“2-6”表示“2,3,4,5,6”
正斜线（/）：可以用正斜线指定时间的间隔频率，例如“0-23/2”表示每两小时执行一次。同时正斜线可以和星号一起使用，例如*/10，如果用在minute字段，表示每十分钟执行一次。


**操作**

```
from apscheduler.schedulers.blocking import BlockingScheduler
sched = BlockingScheduler()
```

1.添加作业

```
sched.add_job(my_job1, 'interval', seconds=5,id='my_job1')
sched.start()
```
也可以通过装饰器的形式来实现

```
@sched.scheduled_job('cron',second='*/5',id='my_job2')
sched.start()
```
2.作业删除,暂停,恢复

```
job.remove()
sched.remove_job('my_job_id')
Job.pause()
sched.pause_job()
Job.resume()
sched.resume_job()
```

3.作业更新

```
job.modify(max_instances=6, name='Alternate name')
```

4.获得job列表

```
sched.get_job(job_id='123')
job.get_jobs()
```
5.关闭调度器

```
sched.shutdown()
sched.shutdown(wait=False)
```


**实例**

apscheduler添加任务的时候都是并发执行的，但是有些任务并发可能冲突，或者几个任务要先后执行。这个时候就要对这些任务先进行一次封装。


```
from apscheduler.schedulers.blocking import BlockingScheduler
def job1():
	print("job1")
def job2():
	print("job2")

def all():
	job1()
	job2()

hour = 9
minute = 10
sched = BlockingScheduler()
sched.add_job(all(),'cron',hour = hour,minute=minute)
```



# API

## Scheduler

负责管理定时任务
对于BlockingScheduler ，程序会阻塞在这，防止退出
对于BackgroundScheduler，程序会立即返回，后台运行



BlockingScheduler: 作为独立进程时使用
```python
from apscheduler.schedulers.blocking import BlockingScheduler
scheduler = BlockingScheduler()
scheduler.start()  # 此处程序会发生阻塞
```

BackgroundScheduler: 在框架程序（如Django、Flask）中使用
```python
from apscheduler.schedulers.background import BackgroundScheduler
scheduler = BackgroundScheduler()
scheduler.start()  # 此处程序不会发生阻塞
```


## trigger
指定定时任务执行的时机

### 1.在特定时间执行：run_date
```python
from datetime import date


sched.add_job(my_job, 'date', run_date=date(2009, 11, 6)) # 在2019年11月6日00:00:00执行，date格式
sched.add_job(my_job, 'date', run_date='2009-11-06') # 在2019年11月6日00:00:00执行,字符串


sched.add_job(my_job, 'date')  # 立即执行
sched.start()
```


### 2.间隔执行：interval
```python
from datetime import datetime
sched.add_job(job_function, 'interval', hours=2) # 每两小时执行一次
sched.add_job(job_function, 'interval', hours=2, start_date='2010-10-10 09:30:00', end_date='2014-06-15 11:00:00')# 在2010年10月10日09:30:00 到2014年6月15日的时间内，每两小时执行一次

```

参数|描述
--|--
weeks (int) | number of weeks to wait
days (int) | number of days to wait
hours (int) | number of hours to wait
minutes (int) | number of minutes to wait
seconds (int) | number of seconds to wait
start_date (datetime|str) | starting point for the interval calculation
end_date (datetime|str) | latest possible date/time to trigger on
timezone (datetime.tzinfo|str) | time zone to use for the date/time calculations


#### 3.周期执行：cron
```python
# 在6、7、8、11、12月的第三个周五的00:00, 01:00, 02:00和03:00 执行
sched.add_job(job_function, 'cron', month='6-8,11-12', day='3rd fri', hour='0-3')
# 在2014年5月30日前的周一到周五的5:30执行
sched.add_job(job_function, 'cron', day_of_week='mon-fri', hour=5, minute=30, end_date='2014-05-30')
```

参数|描述
--|--
year (int|str) | 4-digit year
month (int|str) | month (1-12)
day (int|str) | day of the (1-31)
week (int|str) | ISO week (1-53)
day_of_week (int|str) | number or name of weekday (0-6 or mon,tue,wed,thu,fri,sat,sun)
hour (int|str) | hour (0-23)
minute (int|str) | minute (0-59)
second (int|str) | second (0-59)
start_date (datetime|str) | earliest possible date/time to trigger on (inclusive)
end_date (datetime|str) | latest possible date/time to trigger on (inclusive)
timezone (datetime.tzinfo|str) | time zone to use for the date/time calculations (defaults to scheduler timezone)



## executors
配置：以进程或线程方式执行任务

### 1.以线程执行任务
```python
from apscheduler.executors.pool import ThreadPoolExecutor

executors = {
    'default': ThreadPoolExecutor(20) #最多20个线程同时执行
}
scheduler = BackgroundScheduler(executors=executors)
```

### 2.以进程方式执行任务
```python
from apscheduler.executors.pool import ProcessPoolExecutor
executors = {
    'default': ProcessPoolExecutor(3) #最多3个进程同时执行
}
scheduler = BackgroundScheduler(executors=executors)

```


## job


# 1.通过名称
```python
scheduler.add_job(myfunc, 'interval', minutes=2, id='my_job_id')  # 添加任务    
scheduler.remove_job('my_job_id')  # 删除任务
scheduler.pause_job('my_job_id')  # 暂定任务
scheduler.resume_job('my_job_id')  # 恢复任务
scheduler.reschedule_job('my_job_id', trigger='cron', minute='*/5')
```

# 2.通过对象
```python
job = scheduler.add_job(myfunc, 'interval', minutes=2)  # 添加任务
job.remove()  # 删除任务
job.pause() # 暂定任务
job.resume()  # 恢复任务
job.modify(max_instances=6, name='Alternate name')
```


# 3.停止所有任务
```python
scheduler.shutdown()
```

参考文献:
http://apscheduler.readthedocs.io/en/latest/py-modindex.html
https://www.cnblogs.com/luxiaojun/p/6567132.html
http://www.jb51.net/article/117989.htm
http://jinbitou.net/2016/12/19/2263.html
https://www.cnblogs.com/intval/p/5763929.html