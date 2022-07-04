---
title: Servlet
toc: true
date: 2021-05-24 18:15:39
tags:
categories:
    - [包, sevrlet]
---
JavaWeb三大组件分别是：Servlet 程序、Filter 过滤器、Listener 监听器。
Servlet 是运行在服务器(Tomcat)上的一个 java 小程序，它可以接收客户端发送过来的请求，并响应数据给客户端。
<!--more-->

## `Servlet`接口实现


### 简单实现
1. 编写一个类去实现 Servlet 接口, 重写`service`方法
```java
public class HelloServlet implements Servlet {
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        System.out.println("Hello Servlet");
    }
}
```


2. 到 web.xml 中去配置 servlet 程序的访问地址
```xml
    <servlet>
        <servlet-name>HelloServlet</servlet-name><!--Servlet程序起一个别名 -->
        <servlet-class>claroja.HelloServlet</servlet-class><!--servlet-class是Servlet程序的全类名-->
    </servlet>
    <servlet-mapping><!--servlet程序配置访问地址-->
        <servlet-name>HelloServlet</servlet-name><!--url匹配的程序-->
        <url-pattern>/hello</url-pattern><!--url-pattern标签配置访问地址   /hello 表示地址为：http://ip:port/工程路径/hello-->
    </servlet-mapping>
```
详细代码见 javaweb/demo1

Servlet 的生命周期:
1. 执行 Servlet 构造器方法, 第一次访问的时候创建 Servlet 程序会调用
2. 执行 init 初始化方法, 第一次访问的时候创建 Servlet 程序会调用
3. 执行 service 方法, 每次访问都会调用。
4. 执行 destroy 销毁方法, 在 web 工程停止的时候调用



### 请求分发(get&post)
同一个url可能是`post`请求, 也可能是`get`请求, 需要在`service`自行处理.
```java
    @Override
    public void service(ServletRequest servletRequest, ServletResponse servletResponse) throws ServletException, IOException {
        System.out.println("3 service === Hello Servlet 被访问了");
        HttpServletRequest httpServletRequest = (HttpServletRequest) servletRequest;
        // 获取请求的方式
        String method = httpServletRequest.getMethod();

        if ("GET".equals(method)) {
            System.out.println("get");
        } else if ("POST".equals(method)) {
            System.out.println("post");
        }
    }
```

详细代码见 javaweb/demo2

## `HttpServlet`
实际项目开发中，都是使用继承 `HttpServlet` 类的方式去实现 Servlet 程序。
```java
package claroja;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HelloServlet extends HttpServlet {

    @OverrideE
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("HelloServlet 的doGet方法");

    }
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("HelloServlet 的doPost方法");
    }
}

```


## `ServletConfig类`
Servlet 程序的配置信息类, 由 Tomcat 负责创建.
Servlet 程序默认是第一次访问的时候创建，ServletConfig 是每个 Servlet 程序创建时，就创建一个对应的 ServletConfig 对
象.
三个重要作用:
1. 可以获取 Servlet 程序的别名 servlet-name 的值
2. 获取初始化参数 init-param
3. 获取 ServletContext 对象

```java
    @Override
    public void init(ServletConfig config) throws ServletException {
        super.init(config);
        System.out.println("重写了init初始化方法,做了一些工作");
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("HelloServlet 的doGet方法");
        ServletConfig servletConfig = getServletConfig();
        System.out.println(servletConfig);
        System.out.println("初始化参数username的值是;" + servletConfig.getInitParameter("username"));
        System.out.println("初始化参数url的值是;" + servletConfig.getInitParameter("url"));

    }
```

```xml
    <servlet>
        <servlet-name>HelloServlet</servlet-name>
        <servlet-class>claroja.HelloServlet</servlet-class>
        <init-param><!--init-param是初始化参数-->
            <param-name>username</param-name><!--是参数名-->
            <param-value>root</param-value><!--是参数值-->
        </init-param>
        <init-param>
            <param-name>url</param-name><!--是参数名-->
            <param-value>jdbc:mysql://localhost:3306/test</param-value><!--是参数值-->
        </init-param>
    </servlet>
    <servlet-mapping>
        <servlet-name>HelloServlet</servlet-name>
        <url-pattern>/hello</url-pattern>
    </servlet-mapping>
```

详细代码见javaweb/demo4


## `ServletContext`
- Servlet上下文对象(全局对象), 一个 web 工程, 只有一个 ServletContext 对象实例。
- ServletContext 是在 web 工程部署启动的时候创建。在 web 工程停止的时候销毁。
`ServletContext`的主要作用是:
- 获取 web.xml 中配置的上下文参数 context-param
- 获取当前的工程路径，格式: /工程路径
- 获取工程部署后在服务器硬盘上的绝对路径
- 像 Map 一样存取数据


详细代码见javaweb/demo5


## `HttpServletRequest`
每次请求进入服务器，Tomcat就会把请求HTTP协议信息解析好封装到Request对象中, 然后传递到service方法（doGet 和 doPost）中。我们可以通过 `HttpServletRequest` 对象，获取到所有请求的信息。

|`HttpServletRequest`方法|描述|
|--|--|
|getRequestURI() |获取请求的资源路径|
|getRequestURL() |获取请求的统一资源定位符（绝对路径）|
|igetRemoteHost() |获取客户端的 ip 地址|
|getHeader() |获取请求头|
|getParameter() |获取请求的参数|
|getParameterValues() |获取请求的参数（多个值的时候使用）|
|getMethod() |获取请求的方式 GET 或 POST|
|setAttribute(key, value)|设置全局域数据|
|getAttribute(key) |获取全局域数据|
|getRequestDispatcher() |获取请求转发对象, 再次调用其`forward`方法可以进行转发|


## `HttpServletResponse`
每次请求进来，Tomcat 服务器都会创建一个 Response 对象传递给 Servlet 程序去使用。通过 HttpServletResponse 对象来设置返回给客户端的信息
|`HttpServletResponse`方法|描述|
|--|--|
getWriter().write()|写入字符数据,与`getOutputStream`二选一
getOutputStream().write()|写入二进制数据
setCharacterEncoding("UTF-8")|设置字符集
setHeader("Content-Type", "text/html; charset=UTF-8")|设置头
setContentType("text/html; charset=UTF-8")|
setStatus()|设置状态码
sendRedirect("http://localhost:8080")|重定向