#### 3.1  Restful定义

Rest是一种软件架构与设计风格，并非一套标准， 只提供了一些原则与约定条件。

RESTful提供了一组架构约束，当作为一个整体服务来应用时，强调组件交互的可伸缩性、

接口的通用性、组件的独⽴部署、以及用来减少交互延迟、增强安全性、封装遗留系统的中间组件。

满足这些约束条件和原则的应用程序或设计就是Restful。

#### 3.2 Richardson成熟模型

由Leonard Richardson发明的Rest成熟模型：

- Level 3: Hypermedia Controls

    Web服务使用 HATEOAS。在资源的表达中包含了链接信息。客户端可以根据链接来发现可以执行的动作。

- Level 2: HTTP Verbs

    Web服务使用不同的 HTTP 方法来进行不同的操作，并且使用 HTTP 状态码来表示不同的结果。

- Level 1: Resources

    Web服务引入了资源的概念，每个资源有对应的标识符和表达。

- Level 0: The Swamp of POX
    
    Web服务只是使用 HTTP 作为传输方式，实际上只是远程方法调用（RPC）的一种具体形式。SOAP 和 XML-RPC 都属于此类。

等级2加入了HTTP方法处理：

|URI|HTTP方法|说明|
|---|-------|----|
|/order/|GET|获取所有订单信息|
|/order/|POST|增加新的订单信息|
|/order/{id}|GET|获取指定的订单信息|
|/order/{id}|DELETE|删除指定的订单信息|
|/order/{id}|PUT|修改指定的订单信息|

等级3为超媒体控制(HATEOAS)， 也是最为成熟的Rest模型。

![alt text](金融项目/richardson-level3.png)



#### 3.4 良好的URI规范

- URI的路径采用斜杠分隔符（/）来表示资源之间的层次关系。
- URI的路径使用逗号（,）与分号(;)来表示非层次元素。
- URI的查询部分，使用与符号（&）来分割参数。
- URI中避免出现文件扩展名（例：.jsp、.json、.xml、.html）

#### 3.1  HATEOAS简述

HATEOAS（Hypermedia as the engine of application state）是 REST 架构风格中最复杂的约束，也是构建成熟 REST 服务的核心。



#### 3.2 HATEOAS示例


![alt text](金融项目/heatoas_example.png)


#### 3.3 HATEOAS常用链接类型

|REL|说明|
|----|----|
|SELF|指向当前资源本身的链接|
|edit| 指向⼀一个可以编辑当前资源的链接|
|collection| 如果当前资源包含在某个集合中，指向该集合的链接|
|search| 指向⼀一个可以搜索当前资源与其相关资源的链接|
|related| 指向⼀一个与当前资源相关的链接|
|first| 集合遍历相关的类型，指向第⼀一个资源的链接|
|last| 集合遍历相关的类型，指向最后⼀一个资源的链接|
|previous| 集合遍历相关的类型，指向上⼀一个资源的链接|
|next| 集合遍历相关的类型，指向下⼀一个资源的链接|
例：

```xml
<list>
  <device>
    ......
    <link rel="self" href="http://host:port/res/device/11"/>
  </device>
  ...
  <link rel="next" href="http://host:port/res/device?start=10&size=10"/>
</list>
```



#### 3.5  服务设计

采用Spring Data Rest 实现 Hypermedia规范。

![server_design](金融项目/server_design.png)


设计两个服务， 订单服务和股票服务， 两个服务遵循Hateoas风格。

- Step 1:  通过Restful的Hypermedia模型调用股票服务， 查询并打印股票信息。
- Step 2:  通过HTTP PUT动作更新股票价格。
- Step 3:  重新调用股票信息接口，打印股票名称与价格。
- Step 4:  以上步骤操作成功后， 订单服务调用自身接口， 生成订单信息。




















