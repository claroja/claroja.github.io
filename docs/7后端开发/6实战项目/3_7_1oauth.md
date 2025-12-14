# OAuth2

### 3. 讲解

#### 3.1 传统登陆认证

传统登陆方式是在每个服务进行登陆认证， 每个服务保存自己的用户数据， 并独立实现登陆认证逻辑。

随着服务的不断扩展， 用户数据很难集中统一，开发成本不断增加，  用户交互也极为不便 。

![1563417967402](金融项目/1563417967402.png)

#### 3.2 单点登陆认证

单点登陆是通过统一认证授权服务， 完成所有服务节点的登陆授权工作。
![1563419406513](金融项目/1563419406513.png)

只需一台认证服务器，统一用户数据库， 完成用户认证授权， 控制资源访问， 支持其他服务或第三方应用接入， 扩展性强， 开发和运维成本降低。


#### 3.3 OAuth2简介

OAuth 2.0 是一个行业的标准授权协议。OAuth 2.0 专注于简化客户端开发人员，同时为 Web 应用程序，桌面应用程序，手机等各种设备接入提供特定的授权流程。

OAuth2 实质是为第三方应用颁发一个具有时效性的Token令牌，使其他服务或第三方应用能够通过令牌获取相关资源。 常见的场景： 比如进入某个网站没有账号信息，  但可以通过QQ、微信、支付宝等账号进行登陆， 在这个登陆过程中采用的就是Oauth2协议； 对外API服务接口， 也一般采用OAUTH2授权， 比如微信API、新浪API等。

#### 3.4 OAuth2角色
+ resource owner :  资源所有者，具备访问该资源的实体， 如果是某个人， 被称为end-user。
+ resources server:  资源服务器，受保护的资源服务器， 具备提供资源能力， 如订单服务， 商品服务等。
+ client:  客户端，这并不是指用户， 而是对资源服务器发起请求的应用程序，比如前后分离项目， 前端服务访问管理接口， 访问后台业务功能接口。
+ authorization server:  授权服务器， 能够给客户端颁发令牌， 这个就是我们上面所讲的统一认证授权服务器。
+ user-agent: 用户代理， 作为资源所有者与客户端沟通的工具， 比如APP， 浏览器等。

#### 3.5 OAuth2 协议流程

![1563430054458](金融项目/1563430054458.png)

1. Resource Owner 与 Client 之间 ， 资源所有者向Client发起认证请求， Client再返回认证授权信息。

2. Client 收到 Resource Owner 的认证请求后， 会去Authorization Server 申请访问令牌， Authorization Server会让Client 进行认证， 通过之后会返回Access Token。

3. Client 拿到 Authorization Server 的 Acceess Token ,  访问Resource Server，Resource Server 验证之后， 返回被保护的资源信息。

4. Resource Server 可以通过JWT在本地进行验证， 也可以访问 Authorization Server， 对Client 的请求的合法性进行验证。

#### 3.6 授权类型

OAuth2 分为四种授权类型， 分别为：

- Authorization Code（授权码模式）：授权码模式， 先通过认证获取授权码,  然后申请获取token，进行资源访问。
- Implicit（简化/隐式模式）：用于简单应用，比如问卷调查等，用户认证通过之后， 认证服务器直接向应用服务返回token，这种模式比授权码模式少了授权码code获取环节， 简化交互， 但存在token过期与暴露问题(因为不能获取refresh_token)。
- Resource Owner Password Credentials（密码模式）：资源所有者和客户端之间具有高度信任时（例如，客户端是设备的操作系统的一部分，或者是一个高度特权应用程序， 比如APP， 自研终端等），因为client可能存储用户密码。
- Client Credentials（客户端模式）：该模式直接根据client端的id和密钥即可获取token， 不需要用户参与， 适合内部的API应用服务使用。



#### 3.7 授权码模式流程

![1563631211470](金融项目/1563631211470.png)



1. 资源拥有者（用户）通过代理（WEB浏览器）访问客户端程序，发起授权码模式认证。

2. 客户端（Client，比如CSDN论坛）向认证服务器（Auth Server，QQ账号认证服务）发起请求， 此时客户端携带了客户端标识（client_id， 标识来源是CSDN）和重定向地址（redirect_uri， 一般是CSDN的地址）。

3. 用户确认授权，客户端（Client）接收到code。

4. 在重定向的过程中，客户端拿到 code 与 `client_id`、`client_secret` 去授权服务器请求令牌，整个过程，用户代理是不会拿到令牌 token 的。

5. 客户端（Client）拿到令牌 token 后就可以向第三方的资源服务器请求资源了， 比如获取QQ基本资料， 头像等信息。

   

授权请求：

```json
response_type=code           // 必选项
&client_id={客户端的ID}       // 必选项 
&redirect_uri={重定向URI}    // 可选项 
&scope={申请的权限范围}        // 可选项
&state={任意值}              // 可选项
```

授权响应参数：

```json
code={授权码}          // 必填
&state={任意文字}       // 如果授权请求中包含 state的话那就是必填
```

令牌请求：

```json
grant_type=authorization_code      // 必填
&code={授权码}                     // 必填　必须是认证服务器响应给的授权码
&redirect_uri={重定向URI}          // 如果授权请求中包含 redirect_uri 那就是必填
&code_verifier={验证码}            // 如果授权请求中包含 code_challenge 那就是必填
```

令牌响应：

```json
"access_token":"{访问令牌}",      // 必填
 "token_type":"{令牌类型}",      // 必填
 "expires_in":{过期时间},        // 任意
 "refresh_token":"{刷新令牌}",   // 任意
 "scope":"{授权范围}"            // 如果请求和响应的授权范围不一致就必填

```


#### 3.8 简化模式

```json

     +----------+
     | Resource |
     |  Owner   |
     |          |
     +----------+
          ^
          |
         (B)
     +----|-----+          Client Identifier     +---------------+
     |         -+----(A)-- & Redirection URI --->|               |
     |  User-   |                                | Authorization |
     |  Agent  -|----(B)-- User authenticates -->|     Server    |
     |          |                                |               |
     |          |<---(C)--- Redirection URI ----<|               |
     |          |          with Access Token     +---------------+
     |          |            in Fragment
     |          |                                +---------------+
     |          |----(D)--- Redirection URI ---->|   Web-Hosted  |
     |          |          without Fragment      |     Client    |
     |          |                                |    Resource   |
     |     (F)  |<---(E)------- Script ---------<|               |
     |          |                                +---------------+
     +-|--------+
       |    |
      (A)  (G) Access Token
       |    |
       ^    v
     +---------+
     |         |
     |  Client |
     |         |
     +---------+

```



1. 资源拥有者（用户）通过代理（WEB浏览器）访问客户端程序，发起简化模式认证。
2. 客户端（Client）向认证服务器（Auth Server）发起请求， 此时客户端携带了客户端标识（client_id）和重定向地址（redirect_uri）。
3. 客户端（Client）拿到令牌 token 后就可以向第三方的资源服务器请求资源了。



授权请求：

```json
response_type=token           // 必选项
&client_id={客户端的ID}       // 必选项 
&redirect_uri={重定向URI}    // 可选项 
&scope={申请的权限范围}        // 可选项
&state={任意值}              // 可选项
```

授权响应参数：

```json
&access_token={令牌信息}     // 必填
&expires_in={过期时间}       // 任意
&state={任意文字}            // 如果授权请求中包含 state 那就是必填
&scope={授权范围}            // 如果请求和响应的授权范围不一致就必填
```



**问题：为什么要有授权码和简化模式？看完这两种模式， 可能会有些疑问， 为什么要这么麻烦， 直接一次请求返回TOKEN不就可以吗？**

我们可以看出， 两者主要差别， 是少了code验证环节， 直接返回token了， code验证是客户端与认证服务器在后台进行请求获取， 代理是获取不到TOKEN的， 如果缺少这个环节， 直接返回TOKEN， 相当于直接暴露给所有参与者， 存在安全隐患， 所以简化模式，一般用于信赖度较高的环境中使用。



#### 3.9 密码模式

```json
     +----------+
     | Resource |
     |  Owner   |
     |          |
     +----------+
          v
          |    Resource Owner
         (A) Password Credentials
          |
          v
     +---------+                                  +---------------+
     |         |>--(B)---- Resource Owner ------->|               |
     |         |         Password Credentials     | Authorization |
     | Client  |                                  |     Server    |
     |         |<--(C)---- Access Token ---------<|               |
     |         |    (w/ Optional Refresh Token)   |               |
     +---------+                                  +---------------+

```

1. 资源拥有者直接通过客户端发起认证请求。
2. 客户端提供用户名和密码， 向认证服务器发起请求认证。
3. 认证服务器通过之后， 客户端（Client）拿到令牌 token 后就可以向第三方的资源服务器请求资源了。



令牌请求：

```json
grant_type=password       // 必填
&username={用户ID}    // 必填
&password={密码}    // 必填
&scope={授权范围}       // 任意
```

令牌响应：

```json
"access_token":"{访问令牌}",   // 必填
"token_type":"{令牌类型}",      // 必填
"expires_in":"{过期时间}",        // 任意
"refresh_token":"{刷新令牌}", // 任意
"scope":"{授权范围}"              // 如果请求和响应的授权范围不一致就必填

```

此模式简化相关步骤， 直接通过用户和密码等隐私信息进行请求认证， 认证服务器直接返回token， 这需要整个环境具有较高的安全性。

#### 3.10 客户端模式

```json
     +---------+                                  +---------------+
     |         |                                  |               |
     |         |>--(A)- Client Authentication --->| Authorization |
     | Client  |                                  |     Server    |
     |         |<--(B)---- Access Token ---------<|               |
     |         |                                  |               |
     +---------+                                  +---------------+
```

1. 此模式最为简单直接， 由客户端直接发起请求。
2. 客户端与服务器信赖度较高， 服务端根据请求直接认证返回token信息。
3. 客户端（Client）拿到令牌 token 后就可以向第三方的资源服务器请求资源了。

这种模式一般在内部服务之间应用， 授权一次， 长期可用， 不用刷新token。



令牌请求：

```json
grant_type=client_credentials     // 必填
client_id={客户端的ID}          // 必填
client_secret={客户端的密钥}    // 必填
&scope={授权范围}               // 任意
```

令牌响应：

```json
"access_token":"{访问令牌}",   // 必填
"token_type":"{令牌类型}",      // 必填
"expires_in":"{过期时间}",        // 任意
"scope":"{授权范围}"              // 如果请求和响应的授权范围不一致就必填

```


#### 3.11 Spring Security OAuth设计

![1563635679575](金融项目/1563635679575.png)

Spring Security OAuth2 的整体设计， 我们会在项目中集成Spring Security 组件实现OAuth2统一授权认证。



参考： 

理解OAuth2:  https://www.kancloud.cn/kancloud/oauth_2_0/63331

图解授权模式： https://learnku.com/articles/20082



### 第2章 OAUTH2生产实践

### 1. 目标

- 完成认证服务搭建配置， 功能验证。

### 2. 步骤

- 服务功能设计
- 组件与环境准备
- 公用组件实现
- 认证服务实现
- 认证服务启动验证
- 通过POSTMAN对认证服务做功能验证

### 3. 实现

#### 3.1 服务设计
整体设计：
![1563764891015](金融项目/1563764891015.png)






















