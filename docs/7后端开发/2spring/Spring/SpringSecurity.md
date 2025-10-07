# datasets_load


安全框架
Web 应用的安全性包括
- 用户认证（Authentication）
通俗点说就是系统认为用户是否能登录 
- 用户授权（Authorization）两个部分
通俗点讲就是系统判断用户是否有权限去做某些事情

相关概念:
主体(principal): 就是指用户
认证(authentication): 登录操作
授权(authorization): 分配权限


<!--more-->

### 原理
本质是过滤器的链表


### 两个重要的接口
#### `UserDetailsService`
- 创建类继承`UsernamePasswordAuthenticationFilter`, 重写三个方法
- 创建类实现`UserDetailServic`, 编写查询数据过程, 返回User对象

#### PasswordEncoder
数据加密




### WebSecurityConfigurerAdapter
继承`WebSecurityConfigurerAdapter`, 并通过标注`@Configuration`来进配置
### HttpSecurity

#### formLogin
主要用来配置登录页面.
- `usernameParameter`和`passwordParameter`用来配置登录表单提交的参数, 默认为`username`和`password`
- `loginPage` 自定义登录页面, 有实现的默认页面. `get`请求, 要在`controller`中自己配置
    自定义页面默认开启了csrf, 所以要添加`<input type="hidden" name="_csrf" th:value="${_csrf.token}" th:if="${_csrf}">`
    如果不想添加, 可以使用`http.csrf().disable()`来关闭, 不建议
- `loginProcessingUrl` 登录处理页面, `form`表单的`action`, `post`请求
- `successForwardUrl` 成功的转发, `controller`中自己配置
- `failureForwardUrl` 失败的转发, `controller`中自己配置

另外, 要使用`authorizeRequests`, 对`/login`来放行

```java
@Override
protected void configure(HttpSecurity http) throws Exception {
    //自定义登录页面
    http
        .formLogin()
//            .usernameParameter("username123")//自定义入参,需要和前端保持一致,默认是username
//            .passwordParameter("password123")//自定义入参,需要和前端保持一致,默认是password
        .loginPage("/login")
        .loginProcessingUrl("/login")//和login.html form表单的action保持一致;
        .successForwardUrl("/success")//登录成功后的跳转页面,Post请求
        .failureForwardUrl("/failure");//登录成功后的跳转页面,Post请求
    //授权
    http
        .authorizeRequests()
        .antMatchers("/login").permitAll()//放行自定义的登录页面
        .anyRequest().authenticated();//所有请求必须验证
}
```


```java
@Controller
public class LoginController {
    @GetMapping("/login")
    public String showLogin(){
        return "login";
    }
    @ResponseBody
    @RequestMapping("/success")
    public String successLogin(){
        return "success";
    }
    @ResponseBody
    @RequestMapping("/failure")
    public String failureLogin(){
        return "failure";
    }
}
```


### AuthorizeRequests
首先使用`antMatchers`和`anyRequest`匹配url, 然后再使用`permitAll`或`has*`来设置权限.
设置步骤如下:

1. 先设置放行页面, 不需要登录, 也不需要权限
- permitAll() 放行匹配到的url

2. 设置需要权限的页面
- hasAuthority() 拥有权限
- hasAnyRole() 拥有角色
- hasIpAddress 拥有指定ip

3. 设置需要登录的页面
- anyRequest() 任何url
- authenticated 需要登录
```java
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.formLogin();//开启注册页面
        //授权
        http.authorizeRequests()
//                 .antMatchers("/login").permitAll()//放行`/login`, 默认的login页面, 不需要放行
//                 .antMatchers("/css/**","/js/**","/images/**").permitAll()//放行静态资源
//                 .antMatchers("/**/*.png").permitAll()//放行后缀.png
//                 .antMatchers("/xxxx/demo").permitAll()
//                 .antMatchers("/success").hasAuthority("admin")//权限控制,严格区分大小写
//                 .antMatchers("/success").hasAnyAuthority("admin","admiN")
                 .antMatchers("/success").hasRole("admin") //yml 配置文件中只能使用role
//                 .antMatchers("/success").hasAnyRole("abC","abc")
//                 .antMatchers("/success").hasIpAddress("127.0.0.1")//基于IP地址
                .anyRequest().authenticated();//所有请求都必须认证才能访问，必须登录
    }

```


### UserDetailService
service层实现`UserDetailsService`, 重写`loadUserByUsername`方法.
- `loadUserByUsername`的参数就是用户输入的参数
先获取用户名, 并比较
再获取密码,
再获取权限
将用户名, 密码和权限返回, Security接下来会自动比较

```java
@Service
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //1.根据用户名去数据库查询,如果不存在抛出异常
        if(!"user".equals(username)){
            throw new UsernameNotFoundException("用户名不存在");
        }
        //2.用户名存在,则比较密码
        String password = passwordEncoder.encode("user"); //获得客户端传来的密码
        //3.如果相同则返回UserDetail
        return new User(username,password, AuthorityUtils.commaSeparatedStringToAuthorityList("access"));
    }
}
```

### 认证
`SpringSecurity`查询密码的顺序:
1. `application.properties`配置文件
2. `WebSecurityConfigurerAdapter`配置类
3. `UserDetailsService`接口

#### 通过配置文件
在`application.properties`中设置
```java
spring.security.user.name=wang
spring.security.user.password=123456
```

#### 通过配置类
继承`WebSecurityConfigurerAdapter`, 重写`configure`方法, 使用`auth`来设置用户密码.
注意: `auth`必须使用加密, 要注入`new BCryptPasswordEncoder`对象
```java
package com.demo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        String password = passwordEncoder.encode("123");
        auth.inMemoryAuthentication().withUser("lucy").password(password).roles("admin");
    }

    @Bean
    PasswordEncoder password() {
        return new BCryptPasswordEncoder();
    }
}
```

#### 通过实现类

1. 在`WebSecurityConfigurerAdapter`中重写`configure(AuthenticationManagerBuilder auth)`方法, 传入我们自定义的`userDetailsService`
```java
package com.demo.config;

@Configuration
public class SecurityConfigTest extends WebSecurityConfigurerAdapter {
    @Autowired
    private UserDetailsService userDetailsService;
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(password());
    }
}
```

2. 自定义`userDetailsService`

```java
package com.demo.service;

@Service("userDetailsService")
public class MyUserDetailsService implements UserDetailsService {

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        List<GrantedAuthority> auths =
                AuthorityUtils.commaSeparatedStringToAuthorityList("admin,ROLE_sale");
        return new User("wang", new BCryptPasswordEncoder().encode("123"),auths);
    }
}
```

#### 实现类结合数据库
```java
package com.demo.service;

import com.demo.entity.Users;
import com.demo.mapper.UsersMapper;
import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userDetailsService")
public class MyUserDetailsService implements UserDetailsService {
    @Autowired
    private UsersMapper usersMapper; //自动注入使用MP

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        //MyBatisPlus查询数据, 返回user对象
        QueryWrapper<Users> wrapper = new QueryWrapper();
        wrapper.eq("username",username);
        Users users = usersMapper.selectOne(wrapper);
        //数据库没有用户名，认证失败
        if(users == null) {
            throw  new UsernameNotFoundException("用户名不存在！");
        }
        List<GrantedAuthority> auths =
                AuthorityUtils.commaSeparatedStringToAuthorityList("admin,ROLE_sale");
        return new User(users.getUsername(),
                new BCryptPasswordEncoder().encode(users.getPassword()),auths);
    }
}
```

### 自定义设置HttpSecurity
#### 登录页面设置
```java
http.formLogin()   //自定义自己编写的登录页面
    .loginPage("/on.html")  //登录页面设置
    .loginProcessingUrl("/user/login")   //登录访问路径, 对应前端的`<form action="/user/login"  method="post">`
    .defaultSuccessUrl("/success.html").permitAll()  //登录成功之后，跳转路径
    .failureUrl("/unauth.html")  //结合authorizeRequests()来使用
```

#### 拦截设置antMatchers
四种设置权限的方法, 一般使用前两个就行
1. hasAuthority 具有单个权限可以访问
2. hasAnyAuthority  具有多个任一权限可以访问
3. hasRole 等同于1, 需要加个`Role_`
4. hasAnyRole 等同于2, 需要加个`Role_`
```java
http.authorizeRequests()
    .antMatchers("/","/test/hello","/user/login").permitAll() //设置哪些路径可以直接访问，不需要认证
    //当前登录用户，只有具有admins权限才可以访问这个路径
    // .antMatchers("/test/index1").hasAuthority("admins") //1 hasAuthority方法只有"admins"权限可以访问
    // .antMatchers("/test/index2").hasAnyAuthority("admins,manager")//2 hasAnyAuthority方法
    .antMatchers("/test/index3").hasRole("sale")//3 hasRole方法, 用户角色写法是ROLE_sale
```

另外可以配合`exceptionHandling`来自定义无权限页面
```java
http.exceptionHandling().accessDeniedPage("/unauth.html");
```




#### 退出logout
```java
    http.logout()
        .logoutUrl("/logout") //对应页面中的<a href="/logout">退出</a>
        .logoutSuccessUrl("/test/hello").permitAll();
```

#### 记住我
两种实现方式:
- cookie来实现
- SpringSecurity自己实现的
实现原理:
    1. 用户认证成功后在客户端将加密串写入cookie. 在数据用加密串做key, 存储用户具体信息, 比如过期时间等
    2. 再次访问, 获取cookie信息, 拿cookie去数据库对比

1. 在`public class SecurityConfigTest extends WebSecurityConfigurerAdapter`重写类中

```java
    @Autowired
    private DataSource dataSource;
    //配置对象
    @Bean
    public PersistentTokenRepository persistentTokenRepository() {
        JdbcTokenRepositoryImpl jdbcTokenRepository = new JdbcTokenRepositoryImpl();
        jdbcTokenRepository.setDataSource(dataSource);
        jdbcTokenRepository.setCreateTableOnStartup(true);//自动创建rememberme数据表
        return jdbcTokenRepository;
    }

```

2. 配置`protected void configure(HttpSecurity http)`自动登录

```java
http.rememberMe()
    .tokenRepository(persistentTokenRepository())
    .tokenValiditySeconds(60)//设置有效时长，单位秒
    .userDetailsService(userDetailsService);
```

3. 前端`login.html`页面中`form`加入

```html
<input type="checkbox" name="remember-me" />记住我
```

#### csrf设置
跨站请求伪造(Cross-site request forgery), 默认SpringSecurity是开启的.使用该功能需要在`login.html`中的`form`中添加:`<input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}" />`
```java
http.csrf()
    .disable();
```



### 权限控制的注解使用
使用注解的形式, 来完成拦截设置

#### @Secured
判断是否具有角色, 另外需要注意的是这里匹配的字符串需要添加前缀`ROLE_`。 
1. 在启动类或配置类开启注解
`@EnableGlobalMethodSecurity(securedEnabled=true)`
2. 在controller方法上使用注解
```java
    @GetMapping("test")
    //@Secured({"ROLE_sale","ROLE_manager"})
    public String test() {
        return "hello test";
    }
```


#### @PreAuthorize
`@PreAuthorize`: 注解适合进入方法前的权限验证

1. 在启动类或配置类开启注解
`@EnableGlobalMethodSecurity(prePostEnabled = true)`
2. 在controller方法上使用注解
```java
    @GetMapping("test")
    //@Secured({"ROLE_sale","ROLE_manager"})
    @PreAuthorize("hasAnyAuthority('admins')")
    public String test() {
        return "hello test";
    }

```

#### @PostFilter
`@PostFilter`:方法之后验证权限, 一般用于记录日志, 比如哪些没有权限的人进行多次访问

1. 在启动类或配置类开启注解
`@EnableGlobalMethodSecurity(prePostEnabled = true)`
2. 在controller方法上使用注解

```java
@GetMapping("test")
@PostAuthorize("hasAnyAuthority('admins')")
public String test() {
    System.out.println("test......"); //执行
    return "hello test"; //没有返回
}

```

#### @PostFilter和@PreFilter
很少用, 对传入和返回的数据进行过滤