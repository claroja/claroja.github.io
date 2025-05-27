# 多维随机变量


SLF4J(Simple Logging Facade For Java) 主要是为了给Java日志访问提供一套标准API规范, 具体的实现可以交由其他日志框架，例如log4j和logback等。官网:http://www.slf4j.org/
主要提供两个功能:
1. 日志框架的绑定
2. 日志框架的桥接

## 依赖
1. 和log4j2配合使用(推荐)
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
2. 和logback配合
```xml
<!--slf4j core 使用slf4j必須添加-->
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-api</artifactId>
</dependency>
<!--slf4j 自带的简单日志实现 -->
<dependency>
    <groupId>ch.qos.logback</groupId>
    <artifactId>logback-classic</artifactId>
</dependency>
```

```java
public class Slf4jTest {
    public final static Logger LOGGER = LoggerFactory.getLogger(Slf4jTest.class);
    @Test
    public void testQuick() throws Exception {
        //打印日志信息
        LOGGER.error("error");
        LOGGER.warn("warn");
        LOGGER.info("info");
        LOGGER.debug("debug");
        LOGGER.trace("trace");
        // 使用占位符输出日志信息
        String name = "jack";
        LOGGER.info("用户名{}", name);
    }
}
```