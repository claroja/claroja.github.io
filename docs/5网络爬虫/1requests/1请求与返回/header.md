# header










## requests的Header
1. `Accept`: 客户端能够处理的内容类型.`Accept: text/html`表示客户端可以处理服务端返回的`text/html`(也就是html文档). 如果服务器无法返回`text/html`类型的数据, 则会返回406(non acceptable). 通配符`*`表示任意类型, 例如:`Accept: */*`表示客户端可以处理任意类型.
2. `Accept-Encoding`表示客户端能够处理的压缩类型.
3. `Accept-Language`表示客户端能够处理的语言, 比如`Accept-Encoding: zh-CN,zh;q=0.8`
4. `Accept_Charset`表示客户端支持的字符集.
5. `Cache-Control`: 控制客户端是从缓存读取资源还是从服务器读取资源
6. `Cookie`: 由之前服务器使用`set cookie`设置的cookie信息
7. `Connection`: 浏览器与服务器的连接类型. 比如`keep-alive`表示当网页打开完成后, 连接会不关闭, 如果客户端再次访问服务器的网页, 会复用这个连接
8. `Content-Type`: 指明body中的类型, 比如:`Content-Type: application/x-www-form-urlencoded`
9. `Host`: 服务器的域名和端口, 如果为80端口, 则可以省略端口.
10. `Referer`: 客户端告诉服务器是从哪个页面链接过来的
11. `User-Agent`: 客户端的操作系统和浏览器信息


## response的Header
1. `Content-Type`: 对应requests的`Accept`, 返回内容的MIME类型, 对应`Content-Type: text/html; charset=utf-8`
3. `Content-Encoding`: 对应requests的`Accept-Encoding` web服务器支持的返回内容压缩编码类型, 例如`Content-Encoding: gzip`
4. `Content-Language`: 对应requests的`Accept-Language`,响应体的语言, 例如`Content-Language: en,zh`
5. `Cache-Control`: 控制客户端是从缓存读取资源还是从服务器读取资源
`Set-Cookie`: 设置cookie, 比如`Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1`
`Location`: 用来重定向, 比如`Location: http://google.com`

参考:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
https://www.jianshu.com/p/2391e7c5b3f0
https://www.cnblogs.com/sunnybowen/p/9911298.html
http://tools.jb51.net/table/http_header