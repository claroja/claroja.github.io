---
title: Spring
toc: true
date: 2021-05-17 20:50:16
tags:
categories:
    - [包, spring]
---



IOC(Inversion of Control, 控制反转):把对象创建和对象之间的调用过程，交给 Spring 进行管理
<!--more-->
## IOC 底层原理
使用工厂模式, 进行:
1. xml 解析
2. 反射
3. 放入容器
加载配置文件时候就会把在配置文件对象进行创建

```java
class UserFactory{
    Map container = new HashMap(); // 存放Bean的容器
    public static UserDao getDao(){
        String className = xml.get(name) 
        String classID = xml.get(id) //1. xml解析, 获得类的ID和名称, <bean id="user" class="com.demo.User"></bean>
        Class cla = Class.forName(classname); // 2. 通过反射创建对象
        container.put(classID, cla.newInstance()) // 3. 将对象放入容器中
    }
}
```

Spring IOC体验
```java
package com.demo;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class User {
    public void say() {
        System.out.println("hello");
    }
    public static void main(String[] args) {
        BeanFactory context = new ClassPathXmlApplicationContext("bean.xml");//1. 加载xml文件 2. 反射 3. 放入容器
//        ApplicationContext是BeanFactory的子接口,所以可以替换, 本质就是BeanFactory
//        ApplicationContext context = new ClassPathXmlApplicationContext("bean.xml");//1. 加载xml文件 2. 反射 3. 放入容器
        User user = context.getBean("user", User.class);
        System.out.println(user);
        user.say();
    }
}
```
- BeanFactory: IOC容器基本实现, 是Spring内部的使用接口, 不用关心
- ApplicationContext: BeanFactory接口的子接口, 添加了新功能, 重点


## Spring
可以通过`xml`和注解方式, 来实现创建对象及属性注入
- `xml`方式直接配置`<bean>`即可
`<bean id="user" class="com.demo.User"></bean>`
- 注解方式需要指定配置类`@Configuration`, 并指定扫描范围`@ComponentScan`
给需要创建实例的类加上`@Component`, 既可以创建对象了

```java
@Configuration  //作为配置类，替代xml配置文件
//@Component // 不需要, 因为@Configuration已经包含
@ComponentScan(basePackages = {"com.atguigu"})  //扫描注解的包
public class SpringConfig {
}
```

### Spring 创建对象
1. xml方式
- 在 spring 配置文件中，使用`bean`标签
    id 属性：唯一标识 
    class 属性：类全路径（包类路径） 
- 创建对象时候，默认也是执行无参数构造方法
```xml
    <bean id="user" class="com.demo1.xml.User"></bean>
```
```java
package com.demo1.xml;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class User {
    public void say() {
        System.out.println("hello");
    }
    public static void main(String[] args) {
        BeanFactory context = new ClassPathXmlApplicationContext("beanDemo1.xml");//1 加载spring配置文件
//        ApplicationContext是BeanFactory的子接口,所以可以替换, 本质就是BeanFactory
//        ApplicationContext context = new ClassPathXmlApplicationContext("beanDemo1.xml");//1 加载spring配置文件
        User user = context.getBean("user", User.class);//2 获取配置创建的对象
        System.out.println(user);
        user.say();
    }
}
```


2. 注解方式
```java
package com.demo1.annotation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration  //作为配置类，替代xml配置文件
@ComponentScan(basePackages = {"com"})  //扫描注解的包
public class User {
    public void say() {
        System.out.println("hello");
    }

    public static void main(String[] args) {
        ApplicationContext context
                = new AnnotationConfigApplicationContext(com.demo1.xml.User.class);
        com.demo1.xml.User user = context.getBean("user", com.demo1.xml.User.class);//2 获取配置创建的对象
        System.out.println(user);
        user.say();
    }
}

```

### Spirng 注入属性(DI: 依赖注入)
#### set方法注入
使用`properties`标签, `name`参数属性, `value`是要注入的值
本质是创建对象后, 调用`set`方法设置属性.
```xml
    <bean id="user" class="com.demo2.User">
        <property name="name" value="wang"></property>
    </bean>
```
然后, 根据xml文件创建
```java
package com.demo2;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class User {
    String name;
    public void setName(String name) {
        this.name = name;
    }
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beanDemo2.xml");//1 加载spring配置文件
        User user = context.getBean("user", User.class);//2 获取配置创建的对象
        System.out.println(user.name);
    }
}
```

#### 有参构造注入
使用`constructor-arg`标签, `name`是参数的名称, `value`是要注入的值.
另外还可以通过`index`, 代表参数的位置.
```xml
<bean id="user" class="com.demo3.User">
    <constructor-arg name="name" value="wang"></constructor-arg>
<!--        <constructor-arg index="0" value="wang"></constructor-arg>-->
</bean>
```
```java
package com.demo3;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class User {
    public User(String name) {
        this.name = name;
    }
    String name;

    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beanDemo3.xml");//1 加载spring配置文件
        User user = context.getBean("user", User.class);//2 获取配置创建的对象
        System.out.println(user.name);
    }
}

```

### 一般类型注入
#### 普通字面量注入
1. `xml`方式
使用`properties`标签, `name`参数属性, `value`是要注入的值
本质是创建对象后, 调用`set`方法设置属性.
```xml
    <bean id="user" class="com.demo2.User">
        <property name="name" value="wang"></property>
    </bean>
```
然后, 根据xml文件创建
```java
package com.demo2;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class User {
    String name;
    public void setName(String name) {
        this.name = name;
    }
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beanDemo2.xml");//1 加载spring配置文件
        User user = context.getBean("user", User.class);//2 获取配置创建的对象
        System.out.println(user.name);
    }
}
```

2. `annotation`方式




#### 特殊值注入:null和特殊符号
- 空值直接在`property`标签中添加`null`标签, 不需要`value`属性.
- 特殊符号使用xml中的`CDATA`
```xml
<bean id="user" class="com.demo4.User">
    <property name="name1"><null></null></property>
    <property name="name2">
        <value><![CDATA[<<wei>>]]></value>
    </property>
</bean>
```

### 对象注入

1. xml方式
- 外部Bean方式, 先要将将两个对象都创建, 使用`ref`来注入对象
- 内部bean方式 省略了`ref`
```xml
<!--    1. 外部Bean方式-->
    <bean id="com.demo5.Pen" class="com.demo5.Pen"/>
    <bean id="user" class="com.demo5.User">
        <property name="pen" ref="com.demo5.Pen"></property>
    </bean>

<!--    2. 内部bean方式 省略了`ref`-->
<!--    <bean id="user" class="com.demo5.User">-->
<!--        <property name="pen">-->
<!--            <bean id="com.demo5.Pen" class="com.demo5.Pen"/>-->
<!--        </property>-->
<!--    </bean>-->
```

```java
package com.demo5;

public class Pen {
    public void writeHan(){
        System.out.println("写汉字");
    }
}

```

```java
package com.demo5;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class User {
    Pen pen;

    public void setPen(Pen pen) {
        this.pen = pen;
    }

    public void write(){
        pen.writeHan();
    }

    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beanDemo5.xml");//1 加载spring配置文件
        User user = context.getBean("user", User.class);//2 获取配置创建的对象
        user.write();
    }
}

```

2. annotation方式
- 不需要添加set方法, 直接在属性上添加`@Autowired`即可, 自动根据类型注入
- 如果有多个相同类型冲突, 则可以结合(必须先用`@Autowired`)`@Qualifier`, 通过``来指定名称, 默认是类的首字母小写
- `@Resource`注解相当于`@Autowired`根据类型注入, 而`@Resource(name = "pen")`则相当于`@Autowired`和`@Qualifier` 根据名称注入
`@Resource`是`javax.annotation`拓展包的注解, Spring不建议使用
```java
@Autowired  //根据类型进行注入 
@Qualifier(value = "pen")  //根据名称注入
```

```java
package com.demo5.annotation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration  //作为配置类，替代xml配置文件
@ComponentScan(basePackages = {"com.demo5"})  //扫描注解的包
public class User {
    @Autowired
    Pen pen;
    public void write(){
        pen.writeHan();
    }

    public static void main(String[] args) {
        ApplicationContext context
                = new AnnotationConfigApplicationContext(User.class);
        User user = context.getBean("user", User.class);
        user.write();
    }
}

```
```java
package com.demo5.annotation;

import org.springframework.stereotype.Component;

@Component
public class Pen {
    public void writeHan(){
        System.out.println("写汉字");
    }
}

```




### 集合注入
- 数组注入使用`array`标签
- list注入使用`list`标签, 如果元素为对象, 则对象使用`<ref bean=id>`标签
- map注入使用`map`标签
- set注入使用`set`标签

```xml
    <bean id="user" class="com.demo6.User">
        <!--数组类型属性注入-->
        <property name="strs">
            <array>
                <value>java</value>
                <value>python</value>
            </array>
        </property>
        <!--list类型属性注入-->
        <property name="list">
            <list>
                <value>wang</value>
                <value>wei</value>
            </list>
        </property>

        <property name="listO">
            <list>
                <ref bean="pen1"></ref>
                <ref bean="pen1"></ref>
            </list>
        </property>

        <!--map类型属性注入-->
        <property name="map">
            <map>
                <entry key="key1" value="value1"></entry>
                <entry key="key2" value="value2"></entry>
            </map>
        </property>
        <!--set类型属性注入-->
        <property name="set">
            <set>
                <value>set1</value>
                <value>set2</value>
            </set>
        </property>
    </bean>

    <bean id="pen1" class="com.demo6.Pen"></bean>
    <bean id="pen2" class="com.demo6.Pen"></bean>
```

```java
package com.demo6;

public class Pen {
    public void writeHan(){
        System.out.println("写汉字");
    }
}

```

```java
package com.demo6;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class User {
    //1 数组类型属性
    private String[] strs;
    //2 list集合类型属性
    private List<String> list;
    private List<Pen> listO;
    //3 map集合类型属性
    private Map<String,String> map;
    //4 set集合类型属性
    private Set<String> set;

    public void setStrs(String[] strs) {
        this.strs = strs;
    }

    public void setList(List<String> list) {
        this.list = list;
    }

    public void setListO(List<Pen> listO) {
        this.listO = listO;
    }

    public void setMap(Map<String, String> map) {
        this.map = map;
    }

    public void setSet(Set<String> sets) {
        this.set = set;
    }


    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("beanDemo6.xml");//1 加载spring配置文件
        User user = context.getBean("user", User.class);//2 获取配置创建的对象
        System.out.println(Arrays.toString(user.strs));
        System.out.println(user.list);
        System.out.println(user.listO);
        System.out.println(user.map);
        System.out.println(user.set);

    }
}
```

### 注入外部文件
1. 首先创建`xxx.properties`文件
```java
prop.driverClass=com.mysql.jdbc.Driver
prop.url=jdbc:mysql://localhost:3306/test
prop.userName=root
prop.password=root
```
2. 创建`xml`文件, 使用`${}`表达式来注入
```xml
    <!--引入外部属性文件-->
    <context:property-placeholder location="classpath:jdbc.properties"/>

    <!--配置连接池-->
    <bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource">
        <property name="driverClassName" value="${prop.driverClass}"></property>
        <property name="url" value="${prop.url}"></property>
        <property name="username" value="${prop.userName}"></property>
        <property name="password" value="${prop.password}"></property>
    </bean>
```


### 自动装配



### bean作用域
在 spring 配置文件 bean 标签里面有属性（scope）用于设置单实例还是多实例,
- singleton(默认值), 表示是单实例对象
加载 spring 配置文件时候就会创建单实例对象
- prototype, 表示是多实例对象 
不是在加载 spring 配置文件时候创建对象, 在调用getBean方法时候创建多实例对象 


```xml
<!--1. 单例对象, 每次获取同一个对象, 默认值-->
<bean id="user" class="com.demo9.User" scope="singleton"></bean>
<!--1. 多例对象, 每次获不同对象, prototype-->
<bean id="user" class="com.demo9.User" scope="prototype"></bean>
```

```java
package com.demo9;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class User {
    public void say() {
        System.out.println("hello");
    }
    public static void main(String[] args) {

        ApplicationContext context = new ClassPathXmlApplicationContext("beanDemo9.xml");//1 加载spring配置文件
        User user1 = context.getBean("user", User.class);
        User user2 = context.getBean("user", User.class);
        System.out.println(user1);
        System.out.println(user2);
    }
}
```

### bean的生命周期
1. 通过无参数构造器创建 bean  
2. 为 bean 的属性设置值(调用 set 方法)
3. 调用 bean 的初始化的方法(需要进行配置)
可以通过实现`BeanPostProcessor`来, 在初始化方法前后执行一些方法
4. bean 可以使用了（对象获取到了） 
5. 当容器关闭时候，调用 bean 的销毁的方法（需要进行配置）
```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:p="http://www.springframework.org/schema/p"
       xmlns:util="http://www.springframework.org/schema/util"
       xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd
                           http://www.springframework.org/schema/util http://www.springframework.org/schema/util/spring-util.xsd">

    <bean id="user" class="com.demo10.User" init-method="initMethod" destroy-method="destroyMethod">
        <property name="name" value="wang"></property>
    </bean>

    <!--配置后置处理器, 对所有的bean都起作用-->
    <bean id="myBeanPost" class="com.demo10.MyBeanPost"></bean>
</beans>
```

```java
package com.demo10;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class User {

    //无参数构造
    public User() {
        System.out.println("第一步 无参数构造创建bean实例");
    }

    private String name;
    public void setName(String name) {
        this.name = name;
        System.out.println("第二步 调用set方法设置属性值");
    }

    public void initMethod() {
        System.out.println("第三步 执行初始化方法");
    }//需在xml中指定
    public void destroyMethod() {
        System.out.println("第五步 执行销毁方法");
    }//需在xml中指定

    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("beanDemo10.xml");//1 加载spring配置文件
        User user = context.getBean("user", User.class);//2 获取配置创建的对象
        System.out.println(user);//第4步使用bean
        context.close();//销毁实例
    }
}
```
