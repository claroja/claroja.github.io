# figure


默认就是使用SLF4J作为日志接口，logback作为日志实现来记录日志。


## 使用
```java
// 声明日志记录器对象
public static final Logger LOGGER = LoggerFactory.getLogger(SpringbootLogApplicationTests.class);
@Test
public void contextLoads() {
    // 打印日志信息
    LOGGER.error("error");
    LOGGER.warn("warn");
    LOGGER.info("info"); // 默认日志级别
    LOGGER.debug("debug");
    LOGGER.trace("trace");
}
```

## 默认配置文件
默认读取CLASSPATH下的`application.properties`文件

```python
## 指定自定义 logger 对象日志级别
logging.level.com.claroja=trace
## 指定控制台输出消息格式
logging.pattern.console=[%-5level] %d{yyyy-MM-dd HH:mm:ss} %c [%thread]===== %msg %n
## 指定存放日志文件的具体路径
logging.file=/logs/springboot.log
## 指定日志文件存放的目录，默认的文件名 spring.log
logging.file.path=/logs/springboot/
## 指定日志文件消息格式
logging.pattern.file=[%-5level] %d{yyyy-MM-dd HH:mm:ss} %c [%thread]===== %msg %n
## 指定项目使用的具体环境
spring.profiles.active=pro
```



## 自定义配置文件
默认会覆盖`application.properties`的配置信息
日志框架 |配置文件
--|--
Logback |logback-spring.xml, logback.xml
Log4j2 |log4j2-spring.xml, log4j2.xml
JUL |logging.properties


### 使用logback控制
配合`application.properties`可以快速切换生产和开发环境
```python
spring.profiles.active=dev
```



```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <!--控制台日志输出的 appender-->
    <appender name="console" class="ch.qos.logback.core.ConsoleAppender">
        <!--控制输出流对象 默认 System.out 改为 System.err-->
        <target>System.err</target>
        <!--日志消息格式配置-->
        <encoder class="ch.qos.logback.classic.encoder.PatternLayoutEncoder">
            <springProfile name="dev">
                <pattern>[%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} %c %M %L [%thread] -------- %m %n</pattern>
            </springProfile>
            <springProfile name="pro">
                <pattern>[%-5level] %d{yyyy-MM-dd HH:mm:ss.SSS} %c %M %L [%thread] xxxxxxxx %m %n</pattern>
            </springProfile>
        </encoder>
    </appender>
    <!--自定义 looger 对象
        additivity="false" 自定义 logger 对象是否继承 rootLogger
     -->
    <logger name="com.claroja" level="info" additivity="false">
        <appender-ref ref="console"/>
    </logger>
</configuration>
```


### 切换log4j2
```xml
<dependencies>
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <exclusions>
            <!--排除 logback 日志实现-->
            <exclusion>
                <artifactId>spring-boot-starter-logging</artifactId>
                <groupId>org.springframework.boot</groupId>
            </exclusion>
        </exclusions>
    </dependency>

    <!--使用 log4j2 的日志启动器-->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-log4j2</artifactId>
    </dependency>
</dependencies>
```

