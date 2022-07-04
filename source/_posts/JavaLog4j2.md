---
title: JavaLog4j2
toc: true
date: 2021-07-11 10:19:39
tags:
categories:
---
Apache Log4j 2是对Log4j的升级版，参考了logback的一些优秀的设计. 官网:https://logging.apache.org/log4j/2.x/

# 配置
```xml
<!--使用slf4j 作为日志门面-->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
    <version>1.7.26</version>
</dependency>
<!--使用 log4j2 的适配器进行绑定-->
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-slf4j-impl</artifactId>
    <version>2.9.1</version>
</dependency>
<!--log4j2日志门面-->
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-api</artifactId>
    <version>2.11.1</version>
</dependency>
<!--log4j2 日志实现-->
<dependency>
    <groupId>org.apache.logging.log4j</groupId>
    <artifactId>log4j-core</artifactId>
    <version>2.11.1</version>
</dependency>
<!--异步日志依赖-->
<dependency>
    <groupId>com.lmax</groupId>
    <artifactId>disruptor</artifactId>
    <version>3.3.4</version>
</dependency>
```

# 基本使用
```java
public static final Logger LOGGER = LoggerFactory.getLogger(Slf4jTest.class);
public void main()throws Exception{
    // 日志输出
    LOGGER.error("error");
    LOGGER.warn("wring");
    LOGGER.info("info");
    LOGGER.debug("debug");
    LOGGER.trace("trace");
}
```

# 配置文件
CLASSPATH下创建log4j2.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--
    status="warn" 日志框架<本身>的输出日志级别
    monitorInterval="5" 自动加载配置文件(热更新)的间隔时间，不低于 5 秒
-->
<Configuration status="debug" monitorInterval="5">

    <!--集中配置属性进行管理使用时通过:${name}-->
    <properties>
        <property name="LOG_HOME">/logs</property>
    </properties>
    <!--日志处理器-->
    <Appenders>
        <Console name="Console" target="SYSTEM_ERR">
            <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] [%-5level] %c{36}:%L --- %m%n" />
        </Console>
    </Appenders>

    <!--logger 定义-->
    <Loggers>
        <!--自定义异步 logger 对象
            includeLocation="false" 关闭日志记录的行号信息, 不然会比同步的还慢
            additivity="false" 不在继承 rootlogger 对象
        -->
        <AsyncLogger name="com.claroja" level="trace" includeLocation="false" additivity="false">
            <AppenderRef ref="Console"/>
        </AsyncLogger>
        <!--使用 rootLogger 配置 日志级别 level="trace"-->
        <Root level="trace">
            <!--指定日志使用的处理器-->
            <AppenderRef ref="Console" />
            <!--使用异步 appender-->
            <AppenderRef ref="Async" />
        </Root>
    </Loggers>
</Configuration>
```

## appender
`<Appenders>`标签中可以配置多个`appender`

- Console
- File
- RandomAccessFile
- RollingFile
- Async

```xml
<!--日志处理器-->
<Appenders>
    <!--控制台输出 appender-->
    <Console name="Console" target="SYSTEM_ERR">
        <PatternLayout pattern="%d{HH:mm:ss.SSS} [%t] [%-5level] %c{36}:%L --- %m%n" />
    </Console>
    <!--日志文件输出 appender-->
    <File name="file" fileName="${LOG_HOME}/myfile.log">
        <PatternLayout pattern="[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] %l %c{36} - %m%n" />
    </File>
</Appenders>
```


- RandomAccessFile appender
相比`File`性能更高
```xml
<RandomAccessFile name="accessFile" fileName="${LOG_HOME}/myAcclog.log">
    <PatternLayout pattern="[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] %l %c{36} - %m%n" />
</RandomAccessFile>
```

- 滚动日志 appender
```xml
<!--按照一定规则拆分的日志文件的 appender-->
<RollingFile name="rollingFile" fileName="${LOG_HOME}/myrollog.log"
                filePattern="/logs/$${date:yyyy-MM-dd}/myrollog-%d{yyyy-MM-dd-HH-mm}-%i.log">
    <!--日志级别过滤器-->
    <ThresholdFilter level="debug" onMatch="ACCEPT" onMismatch="DENY" />
    <!--日志消息格式-->
    <PatternLayout pattern="[%d{yyyy-MM-dd HH:mm:ss.SSS}] [%-5level] %l %c{36} - %msg%n" />
    <Policies>
        <!--在系统启动时，出发拆分规则，生产一个新的日志文件-->
        <OnStartupTriggeringPolicy />
        <!--按照文件大小拆分，10MB -->
        <SizeBasedTriggeringPolicy size="10 MB" />
        <!--按照时间节点拆分，规则根据filePattern定义的-->
        <TimeBasedTriggeringPolicy />
    </Policies>
    <!--在同一个目录下，文件的个数限定为 30 个，超过进行覆盖-->
    <DefaultRolloverStrategy max="30" />
</RollingFile>
```


- 异步日志
```xml
<Async name="Async">
    <AppenderRef ref="file"/>
</Async>
```

## logers
配置logger对象
```xml
<!--logger 定义-->
<Loggers>
    <!--自定义异步 logger 对象
        includeLocation="false" 关闭日志记录的行号信息, 不然会比同步的还慢
        additivity="false" 不在继承 rootlogger 对象
    -->
    <AsyncLogger name="com.claroja" level="trace" includeLocation="false" additivity="false">
        <AppenderRef ref="Console"/>
    </AsyncLogger>
    <!--使用 rootLogger 配置 日志级别 level="trace"-->
    <Root level="trace">
        <!--指定日志使用的处理器-->
        <AppenderRef ref="Console" />
        <!--使用异步 appender-->
        <AppenderRef ref="Async" />
    </Root>
</Loggers>
```