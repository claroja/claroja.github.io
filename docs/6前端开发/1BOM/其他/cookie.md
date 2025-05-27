# cookie


HTTP Cookie（也叫 Web Cookie 或浏览器 Cookie）是服务器发送到用户浏览器并保存在本地的一小块数据。浏览器会存储 cookie 并在下次向同一服务器再发起请求时携带并发送到服务器上。
Cookie的主要应用:
1. 会话状态管理(Cookie 使基于==无状态==的 HTTP 协议记录==有状态==信息成为了可能)如户登录状态、购物车
2. 个性化设置, 如用户自定义设置、主题
3. 浏览器行为跟踪, 如跟踪分析用户行为等



==注意==
Cookie 曾一度用于客户端数据的存储，但现在推荐使用现代存储 API。由于服务器指定 Cookie 后，浏览器的每次请求都会携带 Cookie 数据，会带来额外的性能开销（尤其是在移动环境下）。新的浏览器 API 已经允许开发者直接将数据存储到本地，如使用 Web storage API（localStorage 和 sessionStorage）


## Cookie的使用
1. 服务器收到 HTTP 请求后，服务器可以在响应标头里面添加一个或多个`Set-Cookie`选项。以下是服务器的响应内容:

```js
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[页面内容]
```

2. 浏览器收到响应后通常会保存下`Cookie`，对该服务器发起的每一次新请求，浏览器都会将之前保存的 Cookie 信息通过 Cookie 请求头部再发送给服务器。


```js
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```


## Cookie例子
1. 会话期cookie: 在客户端关闭时被移除. 不需要设置`Expires`或`Max-Age`属性.
`Set-Cookie: sessionId=38afes7a8`
2. 持久化cookie: 在特定的日期（Expires）或者经过一段特定的时间之后（Max-Age）才会失效。
`Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT`
`Set-Cookie: id=a3fWa; Max-Age=2592000`


参考:
https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Cookies


