# Seata_TCC案例


## 最佳实践

### 考察问

- 同步型TCC解决方案: 
    - 概念: 所有`()`业务服务是`()`调用, 都需参与到主业务服务的`()`当中。
    - 适用场景: 执行时间`()`且较`()`的业务
- 异步型TCC解决方案: 
    - 概念: `()`从业务服务是`()`服务，而`()`的从业务服务则通过消息服务解耦，作为消息服务的`()`，异步地执行。
    - 使用场景: `()`型业务: 从业务服务的处理结果`()`影响主业务服务的决策，只被动的接收主业务服务的决策结果
    - 具体:

        - Try 接口预发送，只负责`()`化存储消息数据；
        - Confirm 接口确认发送，这时才开始真正的`()`消息；
        - Cancel 接口取消发送，`()`消息数据。

### 考察点

- 同步型TCC解决方案: 
    - 概念: 所有`从`业务服务是`同步`调用, 都需参与到主业务服务的`决策`当中。
    - 适用场景: 执行时间`确定`且较`短`的业务
- 异步型TCC解决方案: 
    - 概念: `直接`从业务服务是`可靠消息`服务，而`真正`的从业务服务则通过消息服务解耦，作为消息服务的`消费端`，异步地执行。
    - 使用场景: `被动`型业务: 从业务服务的处理结果`不`影响主业务服务的决策，只被动的接收主业务服务的决策结果
    - 具体:

        - Try 接口预发送，只负责`持久`化存储消息数据；
        - Confirm 接口确认发送，这时才开始真正的`投递`消息；
        - Cancel 接口取消发送，`删除`消息数据。



## 通用型 TCC 解决方案

### 基本概念

所有`从`业务服务都需要参与到主业务服务的`决策`当中。

![alt text](分布式事务/Seata_TCC10.png)

### 适用场景

由于从业务服务是`同步`调用，其结果会影响到主业务服务的`决策`，因此通用型 TCC 分布式事务解决方案适用于执行时间`确定`且较`短`的业务，比如互联网金融企业最核心的三个服务：交易、支付、账务：

1. 首先访问交易服务，创建交易订单
2. 然后交易服务调用支付服务为该交易创建支付订单，执行收款动作
3. 最后支付服务调用账务服务记录账户流水和记账。

为了保证三个服务一起完成一笔交易，要么同时成功，要么同时失败，可以使用通用型 TCC 解决方案，将这三个服务放在一个分布式事务中，交易作为主业务服务，支付作为从业务服务，账务作为支付服务的嵌套从业务服务，由 TCC 模型保证事务的原子性。

![alt text](分布式事务/Seata_TCC11.png)

支付服务的 Try 接口创建支付订单，开启嵌套分布式事务，并调用账务服务的 Try 接口；账务服务在 Try 接口中冻结买家资金。一阶段调用完成后，交易完成，提交本地事务，由 TCC 框架完成分布式事务各从业务服务二阶段的调用。

支付服务二阶段先调用账务服务的 Confirm 接口，扣除买家冻结资金；增加卖家可用资金。调用成功后，支付服务修改支付订单为完成状态，完成支付。

当支付和账务服务二阶段都调用完成后，整个分布式事务结束。

### 代码案例

🌰用户下单时，系统需要：

1. 创建订单记录。
2. 冻结商品库存。
3. 扣款并记录支付状态。

如果任一步骤失败，则回滚所有操作。

- 数据库设计

    订单表

    ```sql
    CREATE TABLE `orders` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `user_id` BIGINT NOT NULL,
    `product_id` BIGINT NOT NULL,
    `quantity` INT NOT NULL,
    `total_amount` DECIMAL(10, 2) NOT NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'PENDING' -- PENDING, CONFIRMED, CANCELLED
    );
    ```

    库存表

    ```sql

    CREATE TABLE `inventory` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `product_id` BIGINT NOT NULL,
    `total_stock` INT NOT NULL,
    `frozen_stock` INT NOT NULL DEFAULT 0
    ); 
    ```

    支付表

    ```sql
    CREATE TABLE `payment` (
    `id` BIGINT AUTO_INCREMENT PRIMARY KEY,
    `order_id` BIGINT NOT NULL,
    `user_id` BIGINT NOT NULL,
    `amount` DECIMAL(10, 2) NOT NULL,
    `status` VARCHAR(20) NOT NULL DEFAULT 'PENDING' -- PENDING, SUCCESS, FAILED
    );

    ```

- 订单服务(Order Service)

    订单服务作为全局事务的发起者，协调库存和支付服务。

    - TCC接口

        ```java
        public interface OrderTccService {
            @TwoPhaseBusinessAction(name = "OrderTccAction", commitMethod = "confirm", rollbackMethod = "cancel")
            void tryCreate(OrderDTO orderDTO, @BusinessActionContextParameter(paramName = "orderId") Long orderId);
            boolean confirm(BusinessActionContext context);
            boolean cancel(BusinessActionContext context);
        }
        ```

    - TCC实现

        ```java
        @Service
        public class OrderTccServiceImpl implements OrderTccService {
            @Autowired
            private OrderMapper orderMapper;  // 操作数据库
            @Autowired
            private InventoryClient inventoryClient;  //Feign 客户端
            @Autowired
            private PaymentClient paymentClient;  //Feign 客户端

            @Override
            @Transactional  //管理本地数据库事务提交与回滚
            public void tryCreate(OrderDTO orderDTO, Long orderId) {  // 第一阶段, try
                
                // 创建订单
                Order order = new Order();
                order.setUserId(orderDTO.getUserId());
                order.setProductId(orderDTO.getProductId());
                order.setQuantity(orderDTO.getQuantity());
                order.setTotalAmount(orderDTO.getTotalAmount());
                order.setStatus("PENDING");
                orderMapper.insert(order);
                // 调用库存和支付服务
                inventoryClient.freezeStock(order.getProductId(), order.getQuantity());  // 调用库存服务冻结库存
                paymentClient.freezePayment(order.getId(), order.getTotalAmount());  // 调用支付服务冻结金额
            }

            @Override
            public boolean confirm(BusinessActionContext context) {  // 第二阶段, confirm
                Long orderId = (Long) context.getActionContext("orderId");
                Order order = orderMapper.selectById(orderId);
                order.setStatus("CONFIRMED");  //confirm阶段只是将状态从PENDING修改为CONFIRMED
                orderMapper.updateById(order);
                return true;
            }

            @Override
            public boolean cancel(BusinessActionContext context) {  // 第三阶段, cancel
                Long orderId = (Long) context.getActionContext("orderId");
                Order order = orderMapper.selectById(orderId);
                order.setStatus("CANCELLED");
                orderMapper.updateById(order);
                return true;
            }
        }
        ```

- 库存服务（Inventory Service）

    库存服务实现冻结、确认和取消逻辑。

    - TCC接口

        ```java
        public interface InventoryTccService {
            @TwoPhaseBusinessAction(name = "InventoryTccAction", commitMethod = "confirm", rollbackMethod = "cancel")
            void freezeStock(@BusinessActionContextParameter(paramName = "productId") Long productId, Integer quantity);
            boolean confirm(BusinessActionContext context);
            boolean cancel(BusinessActionContext context);
        }
        ```

    - TCC实现

        ```java
        @RestController
        @RequestMapping("/inventory")
        public class InventoryTccServiceImpl implements InventoryTccService {
            
            @Autowired
            private InventoryMapper inventoryMapper;

            @Override
            @PostMapping("/freeze")
            @Transactional
            public void freezeStock(Long productId, Integer quantity) {
                Inventory inventory = inventoryMapper.selectByProductId(productId);
                if (inventory.getTotalStock() - inventory.getFrozenStock() < quantity) { //quantity是本次下单的量, 库存量减去已经冻结量(其他冻结)必须大于本次下单量
                    throw new RuntimeException("Insufficient stock");
                }
                inventory.setFrozenStock(inventory.getFrozenStock() + quantity); //增加本次冻结的量
                inventoryMapper.updateById(inventory);
            }

            @Override
            public boolean confirm(BusinessActionContext context) {
                Long productId = (Long) context.getActionContext("productId");
                Inventory inventory = inventoryMapper.selectByProductId(productId);
                Integer quantity = (Integer) context.getActionContext("quantity");
                inventory.setFrozenStock(inventory.getFrozenStock() - quantity); // 冻结量减去
                inventory.setTotalStock(inventory.getTotalStock() - quantity); // 总量减去
                inventoryMapper.updateById(inventory);
                return true;
            }

            @Override
            public boolean cancel(BusinessActionContext context) {
                Long productId = (Long) context.getActionContext("productId");
                Inventory inventory = inventoryMapper.selectByProductId(productId);
                Integer quantity = (Integer) context.getActionContext("quantity");
                inventory.setFrozenStock(inventory.getFrozenStock() - quantity); // 冻结量减去
                inventoryMapper.updateById(inventory);
                return true;
            }
        }
        ```

- 支付服务（Payment Service）

    支付服务处理支付冻结和扣款。

    - TCC接口

        ```java
        public interface PaymentTccService {
            @TwoPhaseBusinessAction(name = "PaymentTccAction", commitMethod = "confirm", rollbackMethod = "cancel")
            void freezePayment(@BusinessActionContextParameter(paramName = "orderId") Long orderId, BigDecimal amount);
            boolean confirm(BusinessActionContext context);
            boolean cancel(BusinessActionContext context);
        }
        ```

    - TCC实现

        ```java
        @RestController
        @RequestMapping("/payment")
        public class PaymentTccServiceImpl implements PaymentTccService {
            @Autowired
            private PaymentMapper paymentMapper;

            @Override
            @PostMapping("/freeze")
            @Transactional
            public void freezePayment(Long orderId, BigDecimal amount) {
                Payment payment = new Payment();
                payment.setOrderId(orderId);
                payment.setAmount(amount);
                payment.setStatus("PENDING");
                paymentMapper.insert(payment);
            }

            @Override
            public boolean confirm(BusinessActionContext context) {
                Long orderId = (Long) context.getActionContext("orderId");
                Payment payment = paymentMapper.selectByOrderId(orderId);
                payment.setStatus("SUCCESS");
                paymentMapper.updateById(payment);
                return true;
            }

            @Override
            public boolean cancel(BusinessActionContext context) {
                Long orderId = (Long) context.getActionContext("orderId");
                Payment payment = paymentMapper.selectByOrderId(orderId);
                payment.setStatus("FAILED");
                paymentMapper.updateById(payment);
                return true;
            }
        }
        ```

- 全局事务发起

    在订单服务中，使用 @GlobalTransactional 注解发起全局事务：

    ```java
    @RestController
    @RequestMapping("/order")
    public class OrderController {
        @Autowired
        private OrderTccService orderTccService;

        @PostMapping("/create")
        @GlobalTransactional
        public String createOrder(@RequestBody OrderDTO orderDTO) {
            orderTccService.tryCreate(orderDTO, null);
            return "Order created successfully";
        }
    }
    ```

    ![alt text](分布式事务/TCC案例.svg)

## 异步确保型 TCC 解决方案

### 基本概念

异步确保型 TCC 解决方案的`直接`从业务服务是`可靠消息`服务，而`真正`的从业务服务则通过消息服务解耦，作为消息服务的`消费端`，异步地执行。

![alt text](分布式事务/Seata_TCC12.png)

可靠消息服务需要提供 Try，Confirm，Cancel 三个接口。

- Try 接口预发送，只负责持久化存储消息数据；
- Confirm 接口确认发送，这时才开始真正的投递消息；
- Cancel 接口取消发送，删除消息数据。

消息服务的消息数据独立存储，独立伸缩，降低从业务服务与消息系统间的耦合，在消息服务可靠的前提下，实现分布式事务的最终一致性。

此解决方案虽然增加了消息服务的维护成本，但由于消息服务代替从业务服务实现了 TCC 接口，从业务服务不需要任何改造，接入成本非常低。

### 适用场景

由于从业务服务消费消息是一个异步的过程，执行时间不确定，可能会导致不一致时间窗口增加。因此，异步确保性 TCC 分布式事务解决方案只适用于对最终一致性时间敏感度较低的一些`被动`型业务（从业务服务的处理结果`不`影响主业务服务的决策，只被动的接收主业务服务的决策结果）。比如会员注册服务和邮件发送服务：

当用户注册会员成功，需要给用户发送一封邮件，告诉用户注册成功，并提示用户激活该会员。但要注意两点：

- 如果用户注册成功，一定要给用户发送一封邮件；
- 如果用户注册失败，一定不能给用户发送邮件。

因此，这同样需要会员服务和邮件服务保证原子性，要么都执行，要么都不执行。不一样的是，邮件服务只是一种被动型的业务，并不影响用户是否能够注册成功，它只需要在用户注册成功以后发送邮件给用户即可，邮件服务不需要参与到会员服务的活动决策中。

对于此种业务场景，可以使用异步确保型TCC分布式事务解决方案，如下：

![alt text](分布式事务/Seata_TCC13.png)

由可靠消息服务来解耦会员和邮件服务，会员服务与消息服务组成 TCC 事务模型，保证事务原子性。然后通过消息服务的可靠特性，确保消息一定能够被邮件服务消费，从而使得会员与邮件服务在同一个分布式事务中。同时，邮件服务也不会影响会员服务的执行过程，只在会员服务执行成功后被动接收发送邮件的请求。


## 参考

- <https://juejin.cn/post/7487816112626024475>
- <https://seata.apache.org/zh-cn/blog/tcc-mode-applicable-scenario-analysis/>
