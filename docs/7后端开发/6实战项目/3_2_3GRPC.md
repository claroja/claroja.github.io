# grpc

## GPRC简介

gRPC是Google开源的高性能、通用的RPC框架。客户端与服务端约定接口调用，可以在各种环境中运行，具有跨语言特性，适合构建分布式、微服务应用。

![alt text](金融项目/grpc_server.png)

## GPRC特性

- 性能优异：
    1. 采用Proto Buffer作序列化传输， 对比JSON与XML有数倍提升。
    2. 采用HTTP2协议，头部信息压缩，对连接进行复用，减少TCP连接次数。
    3. gRPC底层采用Netty作为NIO处理框架，提升性能。
- 多语言支持，多客户端接入，支持C++/GO/Ruby等语言。
- 支持负载均衡、跟踪、健康检查和认证。

## GPRC线程模型

gRPC的线程模型遵循Netty的线程分工原则，协议层消息的接收和编解码由Netty的I/O(NioEventLoop)线程负责, 应用层的处理由应用线程负责，防止由于应用处理耗时而阻塞Netty的I/O线程。

![grpc_thread_model](金融项目/grpc_thread_model.png)

BIO线程模型采用了线程池，但是后端的应用处理线程仍然采用同步阻塞的模型，阻塞的时间取决对方I/O处理的速度和网络I/O传输的速度。

采用线程池模式的BIO:

![img](金融项目/grpc-03-02-1576986214318.png)

NIO 线程模型(Reactor模式):

![img](金融项目/grpc-03-04-1576986296675.png)


## 客户端调用流程

![grpc_client_flow](金融项目/grpc_client_flow.png)

1. 客户端 Stub 调用 发起 RPC 调用 远程服务。
2. 获取服务端的地址信息（列表），使用默认的 LoadBalancer 策略，选择一个具体的 gRPC 服务端。
3. 如果与服务端之间没有可用的连接，则创建 NettyClientTransport 和 NettyClientHandler，建立 HTTP/2 连接。
4. 对请求使用 PB（Protobuf）序列化，通过 HTTP/2 Stream 发送给 gRPC 服务端。
5. 服务端接收到响应之后，使用 PB（Protobuf）做反序列化。
6. 回调 GrpcFuture 的 set(Response) 方法，唤醒阻塞的客户端调用线程，获取 RPC 响应数据。


## GRpc vs Rest 性能对比

实测结果显示GRpc的通讯方案, 性能有32%的提升, 资源占用降低30%左右。

## 服务设计

![grpc_server_design](金融项目/grpc_server_design.png)