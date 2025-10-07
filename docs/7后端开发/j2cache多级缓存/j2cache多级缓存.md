




## j2cache介绍

j2cache是OSChina目前正在使用的两级缓存框架。

j2cache的两级缓存结构：

- L1： 进程内缓存 caffeine/ehcache
- L2： 集中式缓存 Redis/Memcached

j2cache其实并不是在重复造轮子，而是作资源整合，即将Ehcache、Caffeine、redis、Spring Cache等进行整合。

由于大量的缓存读取会导致L2的网络成为整个系统的瓶颈，因此L1的目标是降低对L2的读取次数。该缓存框架主要用于集群环境中。单机也可使用，用于避免应用重启导致的ehcache缓存数据丢失。

j2cache从1.3.0版本开始支持JGroups和Redis Pub/Sub两种方式进行缓存事件的通知。

数据读取顺序 -> L1 -> L2 -> DB

重启项目，由于j2cache的一级缓存（caffeine）是进程级缓存，重启后一级缓存消失。但是二级缓存（redis）的数据还存在，再次访问上面地址，通过debug断点调试可以看到程序从redis中获取了缓存数据。


如果项目中很多模块都需要使用缓存功能，这些模块都需要调用j2cache的API来进行缓存操作，这种j2cache提供的原生API使用起来就比较繁琐了，并且操作缓存的代码和我们的业务代码混合到一起，即j2cache的API对我们的业务代码具有侵入性。那么我们如何更加简洁、优雅的使用j2cache提供的缓存功能呢？



答案就是使用声明式缓存。所谓声明式缓存，就是定义缓存注解，在需要使用缓存功能的方法上加入缓存注解即可自动进行缓存操作。

这种使用方式类似于我们以前使用的声明式事务，即在类的方法上加入事务注解就可以实现事务控制。

声明式缓存底层实现原理是基于AOP，通过代理技术来实现的。更确切的说，就是通过Spring提供的拦截器来拦截Controller，在拦截器中动态获取Controller方法上的注解，从而进行缓存相关操作。

要实现声明式缓存，需要设计如下主要的类和注解：

- Cache:缓存注解，在Controller的方法上使用，用于缓存此方法的返回值
- CacheEvictor:清理缓存注解，在Controller的方法上使用，用于清理指定缓存数据
- CacheMethodInterceptor:缓存拦截器，用于拦截加入缓存相关注解的Controller方法
- AbstractCacheAnnotationProcessor:抽象缓存注解处理器，为缓存操作提供一些公共方法
- CachesAnnotationProcessor:缓存注解处理器，当Controller的方法上加入Cache注解时由此处理器进行缓存处理
- CacheEvictorAnnotationProcessor:失效缓存注解处理器，当Controller的方法上加入CacheEvictor注解时由此处理器进行缓存失效处理
- EnableCache:开启缓存功能注解，一般在项目的启动类上使用，用于开启缓存功能

#











































