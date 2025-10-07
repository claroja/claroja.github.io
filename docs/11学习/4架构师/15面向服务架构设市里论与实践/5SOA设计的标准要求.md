# SOA 设计的标准要求

## 文档标准化

SOA 服务具有平台独立的自我描述 XML 文档。 Web 服务描述语言是用于描述服务的标准语言。


## 通信协议标准

SOA 服务用消息进行通信，该消息通常使用 XML Schema 来定义(也称作 XSD, XML Schema  Definition) 。消费者和提供者，或消费者和服务之间的通信多见于不知道提供者的环境中。服务间的通信也可以看作企业内部处理的关键商业文档。


## 应用程序统一登记与集成

在一个企业内部， SOA 服务通过一个扮演目录列表 (Directory Listing)角色的登记处(Registry)来进行维护。应用程序在登记处 (Registry)寻找并调用某项服务。统一描述、定义和集成是服务登记的标准。


## 服务质量(QoS)

每项 SOA 服务都有一个与之相关的服务质量(Qual ity of  Service,  QoS) 。QoS 的一些关键元素有安全需求(例如认证和授权)、可靠通信以及谁能调用服务的策略。

在企业中，关键任务系统用来解决高级需求，例如安全性、可靠性和事务。当一个企业开始采用服务架构作为工具来进行开发和部署应用的时候，基本的 Web 服务规范，像 WSDL、SOAP 以及 UDDI 就不能满足这些高级需求。正如前面所提到的，这些需求也称作服务质量。与QoS 相关的众多规范已经由一些标准化组织 (Standards Bodi es) 提出，像 W3C 和 OASIS( theOrganization for the Advancemen t of Structured  Information S tandards) 。下面的部分将会讨论一些QoS 服务和相关标准。

1. 可靠性

    在典型的 SOA 环境中，服务消费者和服务提供者之间会有几种不同的文档在进行交换。具有诸如“仅且仅仅传送一次 (Once-and-only-once Delivery)”“最多传送一次 (At-most-onceDelivery)”“重复消息过滤 (Dupl icate Message Elimination)" 和“保证消息传送 (GuaranteedMessage Delivery)"等特性消息的发送和确认，在关键任务系统 (Mi ssi on-critical Systems) 中变得十分重要。 WS-Reli ability和 WS-Reli able Messaging是两个用来解决此类词题的标准。这些标准现在都由 OASIS 负责。

2. 安全性

    Web 服务安全规范用来保证消息的安全性。该规范主要包括认证交换、消息完整性和消息保密。该规范吸引人的地方在千它借助现有的安全标准，例如， SAML (as  Security  Asserti on Markup Language) 实现 Web 服务消息的安全。 OASIS 正致力千 Web 服务安全规范的制定。

3. 策略

    服务提供者有时候会要求服务消费者与某种策略通信。例如，服务提供商可能会要求消费者提供 Kerberos 安全标示才能取得某项服务。这些要求被定义为策略断言 (Policy Asserti ons), 一项策略可能会包含多个断言。 WS-Poli cy用来标准化服务消费者和服务提供者之间的策略通信。

4. 控制

    在 SOA 中，进程是使用一组离散的服务创建的。 BPEL4WS 或者 WSBPEL (Web  Service Business  Process  Execution  Language) 是用来控制这些服务的语言。当企业着手千服务架构时，服务可以用来整合数据仓库 (Si los of Data), 应用程序，以及组件。整合应用意味着像异步通信，并行处理，数据转换，以及校正等进程请求必须被标准化。

5. 管理

    随着企业服务的增长，所使用的服务和业务进程的数量也随之增加，一个用来让系统管理员管理所有，运行在多种环境下的服务的管理系统就显得尤为重要。 WSDM (Web  Services  for Distributed Management)的制定，使任何根据 WSDM 实现的服务都可以由一个 WSDM 适应(WSDM-compl i ant)的管理方案来管理。







