---
title: SpringSecurity加密原理
toc: true
date: 2021-06-26 11:58:20
tags:
categories:
---

# 加密算法的演进
1. 不加密
2. md5加密 很容易倒排获得密码
3. 加盐+md5加密 如果获得盐的规则, 也可获得密码
4. `BCryptPasswordEncoder`实现了随机加盐

# SpringSecurity中的加密方式
- `PasswordEncoderFactories.class`
SpringSecurity提供了9中加密方式, 并提供了`PasswordEncoderFactories.class`类
```java
   public static PasswordEncoder createDelegatingPasswordEncoder() {
       String encodingId = "bcrypt";
       Map<String, PasswordEncoder> encoders = new HashMap<>();
       encoders.put(encodingId, new BCryptPasswordEncoder());
       encoders.put("ldap", new org.springframework.security.crypto.password.LdapShaPasswordEncoder());
       encoders.put("MD4", new org.springframework.security.crypto.password.Md4PasswordEncoder());
       encoders.put("MD5", new org.springframework.security.crypto.password.MessageDigestPasswordEncoder("MD5"));
       encoders.put("noop", org.springframework.security.crypto.password.NoOpPasswordEncoder.getInstance());
       encoders.put("pbkdf2", new Pbkdf2PasswordEncoder());
       encoders.put("scrypt", new SCryptPasswordEncoder());
       encoders.put("SHA-1", new org.springframework.security.crypto.password.MessageDigestPasswordEncoder("SHA-1"));
       encoders.put("SHA-256", new org.springframework.security.crypto.password.MessageDigestPasswordEncoder("SHA-256"));
       encoders.put("sha256", new org.springframework.security.crypto.password.StandardPasswordEncoder());

       return new DelegatingPasswordEncoder(encodingId, encoders);
   }
```
- `DelegatingPasswordEncoder.class`
该类默认通过"bcrypt"来进行加密, 解密时则是通过`extractId()`方法,判断密文的前缀`{}`, 使用不同的加密器来进行比对.

# SpringSecurity中加密器的配置
加密和判断密码主要由`DelegatingPasswordEncoder.class`实现.
对比密码通过`matches(CharSequence rawPassword, String prefixEncodedPassword)`方法, 该方法:
1. 根据密文的前缀, 获得机密器的id `String id = extractId(prefixEncodedPassword);`
2. 根据加密器的id, 获得对应的加密器 `PasswordEncoder delegate = this.idToPasswordEncoder.get(id);`
3. 
   - 默认: 加密器在`DaoAuthenticationProvider.class`构造时由`PasswordEncoderFactories`提供
   - 另外, 用户可以继承`WebSecurityConfigurerAdapter.class`中自己指定, 这时会覆盖掉默认的, 这是直接使用加密器, 则不会有`{}`前缀
   ```java
   @Bean
   public BCryptPasswordEncoder passwordEncoder(){
       return new BCryptPasswordEncoder();
   }
   //指定认证对象的来源
   public void configure(AuthenticationManagerBuilder auth) throws Exception {
       auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
   }
   ```
   
prepareTimingAttackProtection();
[什么是计时攻击？Spring Boot 中该如何防御？](https://wangsong.blog.csdn.net/article/details/108359657)