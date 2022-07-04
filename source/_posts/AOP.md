---
title: AOP
toc: true
date: 2021-05-28 23:22:59
tags:
categories:
    - [包, AOP]
---
面向切面编程（方面）,不通过修改源代码方式，在主干功能里面添加新功能
类似于Python的装饰器
Spring 框架一般都是基于AspectJ实现AOP操作, AspectJ不是Spring组成部分，独立AOP框架，一般把AspectJ和Spirng框架一起使用，进行AOP操作

## 底层原理
- 有接口情况，使用 JDK 动态代理, 参考设计模式
- 没有接口情况，使用 CGLIB 动态代理 

## AOP术语
- 连接点 可以被代理的方法
- 切入点 被代理的方法
- 通知 额外添加的功能
    - 前置通知 方法执行前执行
    - 后置通知 方法执行后执行
    - 环绕通知 方法执行前后执行
    - 异常通知 方法抛出异常执行
    - 最终通知 无论如何都执行

## 切入点表达式
语法: execution([权限修饰符] [返回类型] [类全路径] [方法名称]([参数列表]) ) 
 
- `execution(*  claroja.UserDao.add(..))` 对 claroja.UserDao 类里面的 add 进行增强 
- `execution(*  claroja.UserDao.UserDao.* (..))` 对 claroja.UserDao 类里面的所有的方法进行增强 
- `execution(*  claroja.UserDao.*.* (..)) ` 对 claroja.UserDao 包里面所有类，类里面所有方法进行增强 

## 操作步骤
详细参考代码 Spring/AOP