---
title: python_log
toc: true
date: 2021-10-25 22:03:54
tags:
---

# 应用
## 通过配置文件

```python
import logging
import logging.config
import yaml

with open('logging.yml', 'r') as f_conf:
    dict_conf = yaml.load(f_conf)
logging.config.dictConfig(dict_conf)

logger = logging.getLogger('simpleExample')
logger.debug('debug message')
logger.info('info message')
logger.warn('warn message')
logger.error('error message')
logger.critical('critical message')
```


```yml
version: 1
formatters:
  simple:
    format: '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
handlers:
  console:
    class: logging.StreamHandler
    level: DEBUG
    formatter: simple
    stream: ext://sys.stdout
  console_err:
    class: logging.StreamHandler
    level: ERROR
    formatter: simple
    stream: ext://sys.stderr
loggers:
  simpleExample:
    level: DEBUG
    handlers: [console]
    propagate: yes
root:
  level: DEBUG
  handlers: [console_err]
```




## 直接配置
```py
import logging
logger = logging.getLogger()
fileHandler = logging.FileHandler('test.log',encoding='utf-8')# 创建一个handler，用于写入日志文件
formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
fileHandler.setLevel(logging.DEBUG)
fileHandler.setFormatter(formatter)
logger.addHandler(fileHandler)

streamHandler = logging.StreamHandler()# 创建一个handler，用于写入日志文件
streamHandler.setLevel(logging.ERROR)
streamHandler.setFormatter(formatter)
logger.addHandler(streamHandler)

logger.debug('logger debug message')
logger.info('logger info message')
logger.warning('logger warning message')
logger.error('logger error message')
logger.critical('logger critical message')
```


# logging
[logging](https://docs.python.org/3.10/library/logging.html#module-level-functions)
```py
import logging
logging.basicConfig(filename='example.log', encoding='utf-8', level=logging.DEBUG)
logging.debug('This message should go to the log file')
logging.info('So should this')
logging.warning('And this, too')
logging.error('And non-ASCII stuff, too, like Øresund and Malmö')
```

logging模块有四大组件:
组件|描述
--|--
Logger|一个日志对象, 在Logger对象中输出具体信息`message`
Handler|控制Logger日志输出的目的地, 一个Logger可以有多个Handler, 分别输出到不同的地方
Formatter|控制Handler输出的格式, 可以添加日志其他相关信息, 比如`name`(Logger的名称)`asctime`(时间)
Filter|过滤Handler的日志信息



# 组件1-Logger
Logger从来不直接实例化，通过logging.getLogger(name)来获得. name默认是root, 对同一个名字的多个调用logging.getLogger()方法会返回同一个logger对象。

Logger对象有3个任务要做：
- 向应用程序代码暴露几个方法，使应用程序可以在运行时记录日志消息
- 基于日志严重等级level或filter对象来决定要对哪些日志进行后续处理
例如setLevel(logging.INFO), 那么该logger将只会处理INFO、WARNING、ERROR和CRITICAL级别的日志,而DEBUG级别的消息将会被忽略
- 将日志消息传送给所有感兴趣的日志handlers。


## 方法
方法|描述
--|--
Logger.setLevel()|设置level过滤
Logger.addHandler()或Logger.removeHandler()|添加或移除Handler对象
Logger.addFilter() 和 Logger.removeFilter()|添加或移除Filter对象
Logger.debug(),Logger.info(),Logger.warning(),Logger.error(),Logger.critical()|根据对应等级记录日志
Logger.exception()|创建一个类似于Logger.error()的日志消息, 区别在于`exception()`输出堆栈追踪信息, 通常在exception handler调用该方法
Logger.log()|需要添加一个等级level参数, 不方便, 直接使用Logger.debug()这样的方法

`logger.error`通过`exec_info`在记录下一行打印`exception`
```py
try:
    xxxx
except Exception:
    logger.error("报错了",exc_info = True)
```
另外以上代码, 可用`logger.exception`
```py
try:
    xxxx
except Exception:
    logger.exception("报错了")
```


## 继承关系
名字是以点号分割的命名方式命名的(a.b.c)。这种命名方式里面，后面的loggers是前面logger的子logger，自动继承父loggers的log信息.例如:有一个名称为 foo 的logger，其它名称分别为 foo.bar, foo.bar.baz 和 foo.bam都是 foo 的后代。

- level的继承:
如果一个logger上没有被明确设置一个level，那么该logger就是使用它parent的level;如果它的parent也没有明确设置level则继续向上查找parent的parent的有效level，依次类推，直到找到个一个明确设置了level的祖先为止。需要说明的是，root logger总是会有一个明确的level设置（默认为 WARNING）

- handler的继承
child loggers在完成对日志消息的处理后，默认会将日志消息传递给与它们的祖先loggers相关的handlers。因此，我们不必为一个应用程序中所使用的所有loggers定义和配置handlers，只需要为一个顶层的logger配置handlers，然后按照需要创建child loggers就可足够了。我们也可以通过将一个logger的propagate属性设置为False来关闭这种传递机制。





# 组件2-handler
Handler对象的作用是将Logger的消息分发到指定的位置(文件,网络,邮件). 一个Logger对象可以添加多个Handler对象, 例如:
- 把所有日志都发送到一个日志文件中
- 把所有严重级别大于等于error的日志发送到stdout（标准输出）；
- 把所有严重级别为critical的日志发送到一个email邮件地址。
这种场景就需要3个不同的handlers.

## 方法
方法|描述
--|--
Handler.setLevel()|设置handler将会处理的日志消息的最低严重级别
Handler.setFormatter()|为handler设置一个Formatter对象
Handler.addFilter() Handler.removeFilter()|为handler添加或删除一个Filter对象

## hander分类

- StreamHandler: 输出到sys.stdout, sys.stderr 或者类文件对象如果stream为空则默认输出到sys.stderr。
```py
class logging.StreamHandler(stream=None)
```
- FileHandler
将日志信息输出到磁盘文件上。
默认为append，delay为true时，文件直到emit方法被执行才会打开。默认情况下，日志文件可以无限增大。
```py
class logging.FileHandler(filename, mode='a', encoding=None, delay=False)
```
- RotatingFileHandler
参数maxBytes和backupCount允许日志文件在达到maxBytes时rollover.当文件大小达到或者超过maxBytes时，就会新创建一个日志文件。
```py
class logging.handlers.RotatingFileHandler(filename, mode='a', maxBytes=0, backupCount=0, encoding=None, delay=0)
```
- TimedRotatingFileHandler
参数when决定了时间间隔的类型，参数interval决定了多少的时间间隔。如when=‘D’，interval=2，就是指两天的时间间隔，backupCount决定了能留几个日志文件。超过数量就会丢弃掉老的日志文件。
```py
class logging.handlers.TimedRotatingFileHandler(filename, when='h', interval=1, backupCount=0, encoding=None, delay=False, utc=False)
```
- SocketHandler       日志通过TCP协议发送
- DatagramHandler   日志通过UDP协议发送
- SysLogHandler      发送日志到UNIX syslog服务，并支持远程syslog服务
- NTEventLogHandler   发送日志到WindowsNT/2000/XP事件日志
- SMTPHandler         通过SMTP协议发送日志
- MemoryHandler     发送日志到内存中的缓冲区，并在达到特定条件时清空
- HTTPHandler         通过GET或POST方法发送日志到HTTP服务器



# 组件3-formatter
一条日志信息对应一个发生的事件，通常需要包含一下信息：
- 事件发生的时间，%(asctime)s
- 事件发生的位置，%(pathname)s、%(module)s、%(funcName)s，%(lineno)d
- 事件的严重程度，%(levelname)s
- 事件的内容，%(message)s

属性名称|格式|说明
--|--|--
message|%(message)s|日志记录的文本内容, 既Logger对象传入的参数`logger.debug("message")`
name|%(name)s|日志的名称, 默认是'root'，因为默认使用的是 rootLogger
asctime|%(asctime)s|可读时间，默认格式‘2003-07-08 16:49:45,896’，逗号之后是毫秒
levelname|%(levelname)s|日志的等级, 如'DEBUG', 'INFO'等
levelno|%(levelno)s|数字化的日志等级, 如10, 20等
pathname|%(pathname)s|文件的全路径名称, 包含文件后缀
filename|%(filename)s|文件名，pathname的一部分
module|%(module)s|filename的名称部分，不包含后缀
funcName|%(funcName)s|调用日志多对应的方法名
lineno|%(lineno)d|被记录日志在源码中的行数
msecs|%(msecs)d|时间中的毫秒部分
process|%(process)d|进程的ID
processName|%(processName)s|进程的名称
thread|%(thread)d|线程的ID
threadName|%(threadName)s|线程的名称
relativeCreated|%(relativeCreated)d|日志被创建的相对时间，以毫秒为单位



# 组件4-filter
Filters能够用在Loggers和Handlers上，可以实现比level更复杂的过滤。
```py
class NoParsingFilter(logging.Filter):
    def filter(self, record):
        if record.levelno == 20:
            return False
        return True
logobj = logging.getLogger('server')
logobj.addFilter(NoParsingFilter())
```

# level
在软件开发、测试、部署阶段，把所有的运行日志全部记录下来，方便排查bug。
在生产阶段，只需要记录异常和错误信息，减少I/O压力，减少日志数量，方便排查。

默认`logging.INFO`及以上等级的日志都会被打印, 以下是等级排序:
CRITICAL: 50
ERROR: 40
WARNING: 30 //默认
INFO: 20
DEBUG: 10
NOTSET: 0

在开发环境时, 使用`DEBUG`或`INFO`级别的日志, 获取尽可能详细的信息来进行开发部署调试
在生产环境时, 使用`WARNING`或`ERROR`级别的日志, 降低I/O压力, 提升获取错误日志信息的效率



```py
logger.setLevel()
handler.setLevel(logging.INFO)
```

为什么有两个setLevel()呢？
logger的严重等级用于决定那个级别的log信息可以分发到它的handlers。handler里面的level设置用于控制哪些个log信息是handler需要转寄的。
logger调用方法(如info等)记录日志信息, 首先被logger的setLevel过滤, 然后发送给handler, handler再根据自己的setLevel来过滤. 坑: handler的level级别低于logger的级别时, handler将不会输出

# record
[LogRecord](https://docs.python.org/3.10/library/logging.html#logrecord-objects)
record也是logging的一个类LogRecord,常用的属性有name, level, pathname, lineno,msg, args, exc_info name 就是初始化logger对象时传入的名字 level 是级别 pathname 是哪个文件输出的这行日志 lineno 是行号 msg 是日志本身



# logging.basicConfig()
logging中的快捷配置方法, 自动创建Logger类, 适用于单文件, 简单的项目.

参数|描述
--|--
filename|指定输出的文件名, 设置后日志信息就不会被输出到控制台了
filemod|输出文件的打开方式, 默认为`a`, 只有在`filename`指定时生效
format|日志输出时格式及包含的信息
datefmt|日期和事件的格式, 在`format`中指定`%(asctime)s`时才生效
level|指定日志的级别
stream|指定日志输出的流目的地, 比如sys.stdout,sys.stderr,网络stream. 不能和filename共存, 报错
handler|多个Handler的可迭代对象, 将会被添加到rootlogger.filename, stream和handlers只能允许一个存在


```python
LOG_FORMAT = "%(asctime)s - %(levelname)s - %(message)s"
DATE_FORMAT = "%m/%d/%Y %H:%M:%S %p"
logging.basicConfig(filename='my.log', level=logging.DEBUG, format=LOG_FORMAT, datefmt=DATE_FORMAT)
logging.debug("This is a debug log.")
logging.info("This is a info log.")
logging.warning("This is a warning log.")
logging.error("This is a error log.")
logging.critical("This is a critical log.")
```


# 配置文件
根据dict来配置logging, 比如可以先读取json, yaml等格式的文件, 然后将他们转换为dict.

yml中主要配置的是各个组件之间的关系, 比如可以先创建一个名为'simple'的`formatters`, 然后创建名为'console'和'console_err'的`handlers`, 然后再创建名为'simpleExample'的`loggers`.


```yml
version: 1
formatters:
    simple:
        format: '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
handlers:
    console:
        class: logging.StreamHandler
        level: DEBUG
        formatter: simple
        stream: ext://sys.stdout
    console_err:
        class: logging.StreamHandler
        level: ERROR
        formatter: simple
        stream: ext://sys.stderr
    file:
        class: logging.FileHandler
        level: DEBUG
        formatter: simple
        filename: ./test.log
loggers:
    simpleExample:
        level: DEBUG
        handlers: [console, file]
        propagate: yes
root:
    level: DEBUG
    handlers: [console_err]
```
1. 配置文件中要包含loggers、handlers、formatters这些keys, 表示响应的组件配置
2. 另外loggers这个section中的keys默认要包含了root这个值, 表示root logger. 由于logging模块中继承的性质, 可以在root这里整体调整日志的level, 因为root先用较高级别后, 相当于在root这个入口先过滤掉了低级别的日志
3. logger key必须指定 level和handlers组件



```python
import logging
import logging.config
import yaml

with open('logging.yml', 'r') as f_conf:
    dict_conf = yaml.load(f_conf)
logging.config.dictConfig(dict_conf)

logger = logging.getLogger('simpleExample')
logger.debug('debug message')
logger.info('info message')
logger.warning('warning message')
logger.error('error message')
logger.critical('critical message')

# 2021-11-30 14:31:28,133 - simpleExample - DEBUG - debug message
# 2021-11-30 14:31:28,133 - simpleExample - INFO - info message
# 2021-11-30 14:31:28,133 - simpleExample - WARNING - warning message
# 2021-11-30 14:31:28,133 - simpleExample - ERROR - error message
# 2021-11-30 14:31:28,133 - simpleExample - ERROR - error message  # root logger生成 红色, 因为是std_err
# 2021-11-30 14:31:28,134 - simpleExample - CRITICAL - critical message  # root logger生成 红色, 因为是std_err
# 2021-11-30 14:31:28,134 - simpleExample - CRITICAL - critical message

```









参考:
https://www.iteye.com/blog/wjdadi-gmail-com-1984354
https://docs.python.org/3.10/library/logging.handlers.html
https://blog.csdn.net/yypsober/article/details/51800120
https://www.cnblogs.com/yyds/p/6901864.html
https://www.cnblogs.com/yyds/p/6885182.html
