# 统计模型



## 日志分类:
1. 调试日志
调试程序时记录, 调试时输出到console
2. 系统日志
生产环境时记录,用户行为, 报错信息, 生产时记录到文件

## 日志
日志实现
JUL（java util logging）: log4j(了解)、logback(了解)、log4j2(使用)
日志接口: 接口屏蔽的具体实现, 利于解耦和迁移
JCL（Jakarta Commons Logging）(了解)
slf4j（ Simple Logging Facade for Java）(使用)

## 应用
推荐slf4j+log4j2组合



## 其他-(了解JCL)
已经没有市场, 不需要学习
Jakarta Commons Logging，是Apache提供的一个通用日志API。JCL 有两个基本的抽象类：Log(基本记录器)和LogFactory(负责创建Log实例)。

JCL 有两个基本的抽象类：Log(基本记录器)和LogFactory(负责创建Log实例)。
- 面向接口开发，不再依赖具体的实现类
- 可以灵活的切换日志框架
- 统一API，方便开发者学习和使用

依赖
```xml
<dependency>
    <groupId>commons-logging</groupId>
    <artifactId>commons-logging</artifactId>
</dependency>
```