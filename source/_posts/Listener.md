---
title: Listener
toc: true
date: 2021-05-27 21:18:31
tags:
categories:
    - [包, Listener]
---
监听器：专门用于对其他对象身上发生的事件或状态改变进行监听和相应处理的对象.

<!--more-->


## Servlet 监听器：
Servlet 规范中定义的一种特殊类，用于监听`ServletContext`, `HttpSession` 和 `ServletRequest` 等域对象的创建与销毁事件，以及属性发生修改的事件。

### 监听域对象的创建和销毁
监听 `ServletContext`, `HttpSession`, `HttpServletRequest` 这三个对象的创建和销毁事件的监听器, 下面代码以`ServletContextListener`为例.
最常用, 在web工程启动时做初始化的工作, 比如创建数据库连接池, 创建IOC容器, 读取初始化参数
创建步骤:
1. 实现`ServletContextListener`接口
2. `xml`中配置

```java
package claroja;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class HelloServletContextListener implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent servletContextEvent) {
        System.out.println("ServletContext 对象创建"+servletContextEvent.getServletContext());
    }

    @Override
    public void contextDestroyed(ServletContextEvent servletContextEvent) {
        System.out.println("ServletContext 对象销毁");

    }
}
```

```xml
    <listener>
        <listener-class>claroja.HelloServletContextListener</listener-class>
    </listener>
```


### 域对象中属性的改变事件监听器
`ServletContextAttributeListener` & `HttpSessionAttributeListener` & `ServletRequestAttributeListener`
都定义了三个方法来处理被监听对象中的属性的增加，删除和替换的事件.



### Session 绑定的事件监听器

保存在 Session 域中的对象可以有多种状态：
- 绑定到 Session 中
- 从 Session 中解除绑定
- 随 Session 对象持久化
- 随 Session 对象从一个存储设备中恢复

两个特殊的监听器接口`HttpSessionBindingListener`和`HttpSessionActivationListener`来监听这些事件
实现这两个接口的类不需要 web.xml 文件中进行注册


详细代码参考 javaweb/demo8