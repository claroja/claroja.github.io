---
title: SpringBoot
toc: true
date: 2021-05-23 09:07:28
tags:
categories:
    - [包, springboot]
---

整合了SpringWeb的相关组件
<!--more-->

## 入门代码案例

目录结构:
```
│  MainApplication.java
├─bean
│      User.java
└─config
        MyConfig.java
```



```java
package demo1;
import demo1.bean.User;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;


@SpringBootApplication
public class MainApplication {
    public static void main(String[] args) {
        ConfigurableApplicationContext run = SpringApplication.run(MainApplication.class, args);
        User user = run.getBean("user", User.class);
        System.out.println(user);


    }
}
```


```java
package demo1.bean;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@EqualsAndHashCode
public class User {

    private String name;
    private Integer age;

}

```

```java
package demo1.config;

import demo1.bean.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration //配置类, 相当于Spring的xml配置文件
public class MyConfig {
    @Bean //给容器中添加组件。以`方法名`作为组件的id, 返回类型就是组件类型.
    public User user(){
        User zhangsan = new User("wang", 18);
        return zhangsan;
    }
}
```
代码详见: SpringBoot/demo1

### 主程序注解: @SpringBootApplication
@SpringBootApplication标明SpringBoot程序的主类.
- 配置类本身也是组件
- 主程序所在包及其下面的所有子包里面的组件都会被默认扫描进来
如果想要自定义可以通过以下两种方法:
    • @SpringBootApplication(scanBasePackages="com.atguigu")
    • @ComponentScan 指定扫描路径
```java
@SpringBootApplication
等同于
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan
```

- @SpringBootConfiguration
本质就是`@Configuration`, 启动类也是个配置类, 可以把配置类都写在启动类里
- @ComponentScan
扫描包, 默认是启动类所在的包
- @EnableAutoConfiguration
    - 第一个作用是注入启动类所在包的组件
    - 第二个作用是注入SpringBoot默认的组件

### 配置文件注解: @Configuration
配置类, 相当于Spring的xml配置文件
- 配置类里面使用@Bean标注在方法上给容器注册组件，默认也是单实例的
- 配置类本身也是组件
- proxyBeanMethods：代理bean的方法
      Full(proxyBeanMethods = true) 保证每个@Bean方法被调用多少次返回的组件都是单实例的
      Lite(proxyBeanMethods = false) 每个@Bean方法被调用多少次返回的组件都是新创建的, 既不是从容器中获取


### 导入组件:
- 包扫描+组件标注注解(@Controller/@Service/@Repository/@Component)
在自己编写的类上注解, 适用于自己写的类
- @Bean
在@Configuration注解的配置类中, 在方法上使用@Bean
适用于于导入的第三方包

- @Import
在@Configuration注解下面, 直接使用. 相比@Bean更简洁
id默认是是组件的全类名

```java
package demo2.config;

import demo2.bean.User;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;


@Configuration //配置类, 相当于Spring的xml配置文件
@Import(User.class)
public class MyConfig {
//    @Bean //给容器中添加组件。以`方法名`作为组件的id, 返回类型就是组件类型.
//    public User user(){
//        User zhangsan = new User("wang", 18);
//        return zhangsan;
//    }
}

```
代码(SpringBoot/demo2)


### 条件组件 @ConditionalOnBean
根据条件来判定是否注入组件
- 注意顺序, @Bean是按照从上往下的顺序加载的, @ConditionalOnBean

```java
package demo3.config;

import demo3.bean.User;
import demo3.bean.User2;
import org.springframework.boot.autoconfigure.condition.ConditionalOnBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration //配置类, 相当于Spring的xml配置文件
@ConditionalOnBean(name="user2") //卸载配置类上则是对整个配置类中的@Bean都生效, bug 此时@Bean还都没注入??
public class MyConfig {
    @Bean("user2")
    // @ConditionalOnBean(name="user") //这里将永远不能扫描到`user`, 因为@Bean的加载顺序是先加载`user2`, 再加载`user1`
    public User2 user2(){
        User2 wei = new User2("wei", 18);
        return wei;
    }

//    @ConditionalOnBean(name="user2") //首先去容器中查看是否有user2组件, 如果有则注入.
    @Bean("user")
    public User user(){
        User wang = new User("wang", 18);
        return wang;
    }
}

```
代码详见SpringBoot/demo3


### beans.xml注入 @ImportResource
如果习惯写`beans.xml`则用`@ImportResource`

```java
package demo4.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.ImportResource;


@Configuration //配置类, 相当于Spring的xml配置文件
@ImportResource("classpath:beans.xml")
public class MyConfig {
}

```
代码详见SpringBoot/demo4


### 值注入绑定

#### properties文件
```java
package demo5.config;

import demo5.bean.User;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration //配置类, 相当于Spring的xml配置文件
@EnableConfigurationProperties(User.class)
//1、开启User配置绑定功能
//2、把这个user这个组件自动注册到容器中
public class MyConfig {
}
```


```java
package demo5.bean;

import lombok.*;
import org.springframework.boot.context.properties.ConfigurationProperties;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@EqualsAndHashCode
@ConfigurationProperties(prefix = "user")
public class User {

    private String name;
    private Integer age;

}

```

代码详见SpringBoot/demo5



#### yaml文件
- key: value, kv之间冒号后有空格
- 大小写敏感
- 使用缩进表示层级关系. 缩进不允许使用tab，只允许空格. 缩进的空格数不重要，只要相同层级的元素左对齐即可.
- '#'表示注释
- 字符串无需加引号，也可以添加, 单引号''(转义)与双引号""(不转义)


```java
package demo6.bean;

import lombok.*;
import org.springframework.boot.context.properties.ConfigurationProperties;


import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.Set;

@ConfigurationProperties(prefix = "person")
@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
@EqualsAndHashCode
public class Person {
    private String userName;
    private Integer age;
    private Boolean online;
    private Date birth;
    private String[] interests;
    private List<String> pet;
    private Set<String> parent;
    private Map<String, Integer> score;
}

```


```yml
person:
  userName: zhangsan
  age: 18
  online: false
  birth: 2019/12/12 20:12:33
  interests: [python, java]
  pet:
    - tom
    - jerry
  parent: [xy, yx]
  score:
    math: 20
    english: 30
```
详细代码 SpringBoot/demo6



#### 配置文件的提示
- `spring-boot-configuration-processor`可以在编辑yml时给与提示
- 在maven中配置, 打包时不需要此包, 既只在开发环境中使用
```xml

    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-configuration-processor</artifactId>
        <optional>true</optional>
    </dependency>


 <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
                <configuration>
                    <excludes>
                        <exclude>
                            <groupId>org.springframework.boot</groupId>
                            <artifactId>spring-boot-configuration-processor</artifactId>
                        </exclude>
                    </excludes>
                </configuration>
            </plugin>
        </plugins>
    </build>
```


## web开发


### 静态资源配置

#### 静态资源访问
- 开发时: 默认静态资源存放路径是`类路径`的`/static (or /public or /resources or /META-INF/resources`
可以通过配置文件修改
```yml
spring:
  resources:
    static-locations: [classpath:/haha/]
```
- 生产时: 默认访问静态资源路径是`当前项目根路径/ + 静态资源名`
有一下两种情况, 可以通过配置文件修改, 
- 静态资源访问路径与Controller重名时, 请求先被controller拦截, 再被静态资源器拦截
- 需要释放所有静态资源拦截规则时, 可能会和controller拦截器冲突
```yml
spring:
  mvc:
    static-path-pattern: /res/**
```

#### index.html页配置
- 将index.html放在静态资源路径下  
但是不可以配置静态资源的访问前缀。否则导致 index.html不能被默认访问
```yml
spring:
#  mvc:
#    static-path-pattern: /res/**   这个会导致index.html失效
```

- 使用`controller`处理`/index`

#### 自定义 Favicon
favicon.ico 放在静态资源目录下即可。
但是不可以配置静态资源的访问前缀。否则导致 favicon.ico不能被默认访问
```yml
spring:
#  mvc:
#    static-path-pattern: /res/**   这个会导致 Favicon 功能失效
```




### 请求处理
- @GetMapping 处理get请求
- @PostMapping 处理post请求


#### 参数注解
- @PathVariable 获得rest风格参数
- @RequestParam 获得form的get请求(或者自己在url里?后面拼贴),获得form的post请求
- @RequestHeader 获得请求头
- @CookieValue 获得cookie
```java
    //localhost:8080/user/3/grade/wang?age=18&inters=basketball&inters=game
    @GetMapping("/user/{id}/grade/{name}")
    public void getUser(
                        @PathVariable("id") Integer id,
                        @PathVariable("name") String name,
                        @PathVariable Map<String,String> user,
                        @RequestParam("age") Integer age,
                        @RequestParam("inters") List<String> inters,
                        @RequestParam Map<String,String> params,
                        @RequestHeader("User-Agent") String userAgent,
                        @RequestHeader Map<String,String> header,
                        @CookieValue("cookieconsent_status") String _ga,
                        @CookieValue("cookieconsent_status") Cookie cookie){
        System.out.println(id);
        System.out.println(name);
        System.out.println(user);
        System.out.println(age);
        System.out.println(inters);
        System.out.println(params);
        System.out.println(userAgent);
        System.out.println(header);
        System.out.println(_ga);
        System.out.println(cookie);
    }
```
- @RequestBody 获得请求体, form或json

```java
    @PostMapping("/save")
    public void save(@RequestBody String content){
        System.out.println(content);
    }
```
- @RequestAttribute 获得requset属性, 相当于request.getAttribute

```java
    @GetMapping("/goto")
    public String goToPage(HttpServletRequest request){
        request.setAttribute("msg1","在goto页写入msg1");
        request.setAttribute("msg2","在goto页写入msg2");
        return "forward:/success";  //转发到  /success请求
    }

    @ResponseBody
    @GetMapping("/success")
    public void success(@RequestAttribute(value = "msg",required = false) String msg,
                        HttpServletRequest request) {
        Object msg1 = request.getAttribute("msg1");
        Object msg2 = request.getAttribute("msg2");
        System.out.println(msg1);
        System.out.println(msg2);
    }
```


#### Servlet API
- ServletRequest
- MultipartRequest 文件上传
- HttpSession

```java
    @GetMapping("/goto")
    public String goToPage(HttpServletRequest request){
        request.setAttribute("msg1","在goto页写入msg1");
        request.setAttribute("msg2","在goto页写入msg2");
        return "forward:/success";  //转发到  /success请求
    }
```

#### 复杂参数
Map、Model（map、model里面的数据会被放在request的请求域  request.setAttribute）
RedirectAttributes（ 重定向携带数据）、ServletResponse（response）


#### 自定义参数
```java
    @PostMapping("/savepojo")
    public void savePojo(User user){
        System.out.println(user);
    }
```


### 响应处理

#### 数据响应

数据响应与内容协商原理:
1. 获取客户端（PostMan、浏览器）支持接收的内容类型, （Accept请求头字段）, 比如`application/xml`, 统计出所有
2. 遍历所有的`MessageConverter`, 找到支持操作`pojo`的`Converter`, 把converter支持的媒体类型统计出来。
    1. 返回值处理器根据返回值类型调用响应处理器, 标了`@ResponseBody`的使用`RequestResponseBodyMethodProcessor`来处理
    2. 利用`MessageConverters`进行处理, 将对象写为json, `MessageConverters`默认支持`String`,`json`(starter包含了jackson),`xml`场景
3. 进行转换

数据响应写法:
- 在类上加`@RestController`
- 在方法上加`@ResponseBody`

SpringBoot默认可以解析`Json`, 如果想解析`XML`, 可以添加`xmlConverter`:
```xml
<dependency>
    <groupId>com.fasterxml.jackson.dataformat</groupId>
    <artifactId>jackson-dataformat-xml</artifactId>
</dependency>
```


#### 视图响应
视图响应原理:
1. 方法执行完成以后都会返回`ModelAndView`（数据和视图地址）
2. 方法的`String`返回值得到`View`对象(这里以Thymeleaf为例)
    - 返回值是普通字符串: `new ThymeleafView()`
    - 返回值以`forward`开始: `new InternalResourceView(forwardUrl)`
    - 返回值以`redirect`开始: `new RedirectView()`
3.   视图对象调用自定义的render进行页面渲染工作`view.render(mv, request, response)`

视图解析写法:
- 直接写页面名称
- `redirect:页面名称`
- `forword:页面名称`

目前官方建议使用`thymeleaf`页面解析模板
```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-thymeleaf</artifactId>
</dependency>
```

详细代码参考: springboot/demo8


### 拦截器
拦截器可以在`controller`的方法执行前(`preHandle`), 执行后(`postHandle`), 页面渲染后`afterCompletion`来执行
1. 实现`HandlerInterceptor`接口
2. 实现`WebMvcConfigurer`接口, 重写`addInterceptors`来注册拦截器

详细代码参考: springboot/demo9