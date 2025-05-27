# http



## http flow
1. 客户端创建一个TCP连接
2. 发送一个HTTP请求消息
```js
GET / HTTP/1.1
Host: developer.mozilla.org
Accept-Language: fr
```
3. 读取服务器发送的响应消息:
```javascript
HTTP/1.1 200 OK
Date: Sat, 09 Oct 2010 14:28:02 GMT
Server: Apache
Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
ETag: "51142bc1-7449-479b075b2891b"
Accept-Ranges: bytes
Content-Length: 29769
Content-Type: text/html

<!DOCTYPE html>… (here come the 29769 bytes of the requested web page)
```
4. 关闭或者复用连接再次发送请求


## Requests
![](./http/1.png)
1. `Method`: 客户端获取资源使用`GET`, 想要发送信息给服务器, 使用`POST`
2. `path`: 资源在服务器上的路径, 省去了==protocol==(`http://`),==domain==(`developer.mozilla.org`),==port==(`80`)
3. `version of the protocol`:协议版本
4. `Headers`: 请求的配置信息
   1. `General headers`: 通用的配置信息
   2. `Request headers`: 客户端的一些信息
   3. `Representation headers`: 指定`body`的格式, 长度等
    ![4.png]
1. `body`: `POST`方法中含有


## Response
![](./http/2.png)
1. `version of the protocol`:协议版本
2. `Status code`: 请求是否成功
3. `status message`: 和`Status code`对应
4. `Headers`: 返回的配置信息
   1. `General headers`: 通用的配置信息
   2. `Response headers`: 客服务器的一些信息
   3. `Representation headers`: 指定`body`的格式, 长度等
   
    ![5.png]
5. `body`: 返回的数据



## Requests 和 Response
HTTP的请求和响应, 有相同的结构:
1. start-line: 单行, 请求中记录请求方法(`GET`),资源路径`URL`,protocol(`HTTP/1.1`);响应中包含protocol(`HTTP/1.1`), status code('`200`), status message(`success`)
2. HTTP header: 多行, 请求中记录请求配置;响应中指明返回的内容的信息
3. 空白行: 单行, 将body和`start-line``header`隔开
4. body: 多行, 请求中是`POST`方法的数据;响应中是响应结果

`start-line`和`HTTP header`一般统称为`head`, 而`body`也称为`payload`.
![](./http/3.png)










参考:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview
https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers