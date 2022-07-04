---
title: javaLog4j
toc: true
date: 2021-07-11 10:14:35
tags:
categories:
---
log4j
Log4j是Apache下的一款开源的日志框架, 官网:https://logging.apache.org/log4j/2.x/

```java
// 初始化系统配置，不需要配置文件
BasicConfigurator.configure();
// 创建日志记录器对象
Logger logger = Logger.getLogger(Log4jTest.class);
// 日志记录输出
logger.info("hello log4j");
```
# 配置文件
log4j.properties直接放在CLASSPATH下即可
```python
## RootLogger配置
log4j.rootLogger = trace,console # 级别为trace, appender为console(下面定义)
log4j.appender.console = org.apache.log4j.ConsoleAppender
log4j.appender.console.layout = org.apache.log4j.SimpleLayout # 消息格式
## 自定义Logger
log4j.logger.com.claroja = info,file
```

# 日志级别
- 每个Logger都被了一个日志级别（log level），用来控制日志信息的输出。日志级别从高到低分
为：
fatal 指出每个严重的错误事件将会导致应用程序的退出。
error 指出虽然发生错误事件，但仍然不影响系统的继续运行。
warn 表明会出现潜在的错误情形。
info 一般和在粗粒度级别上，强调应用程序的运行全程。
debug 一般用于细粒度级别上，对调试应用程序非常有帮助。
trace 是程序追踪，可以用于输出程序运行中的变量，显示执行的流程。
- 还有两个特殊的级别：
OFF，可用来关闭日志记录。
ALL，启用所有消息的日志记录。



# Log4j组件
Log4J 主要由 Loggers (日志记录器)、Appenders（输出端）和 Layout（日志格式化器）组成。
Logger的名字大小写敏感，其命名有继承机制
Log4J中有一个特殊的logger叫做“root”，他是所有logger的根，也就意味着其他所有的logger都会直接或者间接地继承自root。

## Appenders

Appender 用来指定日志输出到哪个地方
输出端类型|作用
--|--
ConsoleAppender |输出到控制台
FileAppender |输出到文件中
DailyRollingFileAppender |输出到文件中，并且每天输出到一个新的文件
RollingFileAppender |输出到文件中，并且指定文件的尺寸，当文件大小达到指定尺寸时，会自动把文件改名，同时产生一个新的文件
JDBCAppender|把日志信息保存到数据库中
```java
#指定日志的输出级别与输出端
log4j.rootLogger=INFO,Console
# 控制台输出配置
log4j.appender.Console=org.apache.log4j.ConsoleAppender
log4j.appender.Console.layout=org.apache.log4j.PatternLayout
log4j.appender.Console.layout.ConversionPattern=%d [%t] %-5p [%c] - %m%n
# 文件输出配置
log4j.appender.A = org.apache.log4j.DailyRollingFileAppender
#指定日志的输出路径
log4j.appender.A.File = D:/log.txt
log4j.appender.A.Append = true
#使用自定义日志格式化器
log4j.appender.A.layout = org.apache.log4j.PatternLayout
#指定日志的输出格式
log4j.appender.A.layout.ConversionPattern = %-d{yyyy-MM-dd HH:mm:ss} [%t:%r] -[%p] %m%n
#指定日志的文件编码
log4j.appender.A.encoding=UTF-8
#mysql
log4j.appender.logDB=org.apache.log4j.jdbc.JDBCAppender
log4j.appender.logDB.layout=org.apache.log4j.PatternLayout
log4j.appender.logDB.Driver=com.mysql.jdbc.Driver
log4j.appender.logDB.URL=jdbc:mysql://localhost:3306/test
log4j.appender.logDB.User=root
log4j.appender.logDB.Password=root
log4j.appender.logDB.Sql=INSERT INTO
log(project_name,create_date,level,category,file_name,thread_name,line,all_categ
ory,message) values('itcast','%d{yyyy-MM-dd
HH:mm:ss}','%p','%c','%F','%t','%L','%l','%m')
```

## Layouts
控制日志输出内容的格式
格式化器类型 |作用
--|--
HTMLLayout |格式化HTML表格形式
SimpleLayout |简单的日志输出格式化，打印的日志格式为（info - message）
PatternLayout|自定义格式输出日志，如果没有指定转换格式，就是用默认的转换格式
```s
* log4j 采用C语言的printf函数的打印格式格式化日志信息，具体的占位符及其含义如下：
    %m 输出代码中指定的日志信息
    %p 输出优先级，及 DEBUG、INFO 等
    %n 换行符（Windows平台的换行符为 "\n"，Unix 平台为 "\n"）
    %r 输出自应用启动到输出该 log 信息耗费的毫秒数
    %c 输出打印语句所属的类的全名
    %t 输出产生该日志的线程全名
    %d 输出服务器当前时间，默认为 ISO8601，也可以指定格式，如：%d{yyyy年MM月dd日HH:mm:ss}
    %l 输出日志时间发生的位置，包括类名、线程、及在代码中的行数。如：Test.main(Test.java:10)
    %F 输出日志消息产生时所在的文件名称
    %L 输出代码中的行号
    %% 输出一个 "%" 字符
* 可以在 % 与字符之间加上修饰符来控制最小宽度、最大宽度和文本的对其方式。如：
    %5c 输出category名称，最小宽度是5，category<5，默认的情况下右对齐
    %-5c 输出category名称，最小宽度是5，category<5，"-"号指定左对齐,会有空格
    %.5c 输出category名称，最大宽度是5，category>5，就会将左边多出的字符截掉，<5 不会有空格
    %20.30c category名称< 20补空格, 并且右对齐，>30字符，就从左边交远销出的字符截掉
```
