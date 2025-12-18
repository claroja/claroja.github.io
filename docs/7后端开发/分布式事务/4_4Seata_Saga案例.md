# Seata_Saga

## 最佳实践

### 考察问

- 业务服务只需要提供 `()` 和 `()` 两个接口
- 适用场景: 并发冲突较少或者需要与`()`交互的业务

### 考察点

- 业务服务只需要提供 `Do` 和 `Compensate` 两个接口
- 适用场景: 并发冲突较少或者需要与`外部`交互的业务

## Seata_Saga

业务服务只需要提供 `Do` 和 `Compensate` 两个接口

1. Do 接口直接执行真正的完整业务逻辑，完成业务处理，业务执行结果外部可见；
2. Compensate 操作用于业务补偿，抵消或部分抵消正向业务操作的业务结果，Compensate操作需满足幂等性。

## 适用场景

事务解决方案只适用于一些并发冲突较少或者需要与外部交互的业务，这些外部业务不属于被动型业务，其执行结果会影响主业务服务的决策，比如机票代理商的机票预订服务：

该机票服务提供多程机票预订服务，可以同时预订多趟行程航班机票，比如从北京到圣彼得堡，需要第一程从北京到莫斯科，以及第二程从莫斯科到圣彼得堡。

当用户预订机票时，肯定希望能同时预订这两趟航班的机票，只预订一趟航班对用户来说没有意义。因此，对于这样的业务服务同样提出了原子性要求，如果其中一趟航班的机票预订失败，另外一趟需要能够取消预订。

但是，由于航空公司相对于机票代理商来说属于外部业务，只提供订票接口和取消预订接口，想要推动航空公司改造是极其困难的。因此，对于此类业务服务，可以使用补偿型 TCC 分布式事务解决方案，如下：

![alt text](分布式事务/Seata_TCC15.png)

网关服务在原有逻辑基础上增加 Compensate 接口，负责调用对应航空公司的取消预订接口。

在用户发起机票预订请求时，机票服务先通过网关 Do 接口，调用各航空公司的预订接口，如果所有航班都预订成功，则整个分布式事务直接执行成功；一旦某趟航班机票预订失败，则分布式事务回滚，由事务框架调用各网关的 Compensate 补偿接口，其再调用对应航空公司的取消预订接口。通过这种方式，也可以保证多程机票预订服务的原子性。

## 跨境电商案例

### 跨境电商业务特征

- 链路长: 下单→支付→海关→仓配→国际物流→末端配送；任何一步失败需整体回滚
- 外部系统多: 海关、支付渠道、第三方仓库无法提供 TCC 三阶段接口
- 高并发大促: 全局锁将迅速成为瓶颈
- 事务时间长: 国际物流履约以天计，XA/AT 的锁等待不可接受

### 为什么选 Seata Saga

- 一阶段本地事务提交，无锁高吞吐
- 补偿逻辑由业务编码，可对接遗留系统
- 状态机可视化编排，方便业务、测试、运维共同理解

### 数据一致性保证

- 正向操作：幂等设计（支持重试）
- 补偿操作：可交换、可空补偿、防悬挂
- 隔离性：业务层“资源预留 + 业务检查”或语义锁

### 业务流程图

1. 下单 -> 空补偿
2. 扣减余额 -> 退款
3. 扣减库存 -> 恢复库存
4. 海关申报 -> 撤销申报
5. 创建国际运单 -> 取消运单
6. 通知发货

### 状态机JSON

```json
{
  "Name": "GlobalOrderFulfillment",
  "Comment": "跨境电商下单履约",
  "StartState": "DeductBalance",  // 开始的状态
  "States": {
    "DeductBalance": {  // 扣减用户订单金额
      "Type": "ServiceTask",
      "ServiceName": "account-service",
      "ServiceMethod": "POST:/accounts/{userId}/deduct",
      "CompensateState": "RefundBalance",
      "Next": "DeductInventory"
    },
    "DeductInventory": {  // 扣减商品库存
      "Type": "ServiceTask",
      "ServiceName": "inventory-service",
      "ServiceMethod": "PUT:/inventories/{sku}/deduct",
      "CompensateState": "RestoreInventory",
      "Next": "CustomsDeclare"
    },
    "CustomsDeclare": {  // 海关申报
      "Type": "ServiceTask",
      "ServiceName": "customs-service",
      "ServiceMethod": "POST:/declarations",
      "CompensateState": "RevokeDeclaration",
      "Next": "CreateShipment"
    },
    "CreateShipment": {  // 创建物流运单
      "Type": "ServiceTask",
      "ServiceName": "logistics-service",
      "ServiceMethod": "POST:/shipments",
      "CompensateState": "CancelShipment",
      "End": true
    },
    "RefundBalance": {
      "Type": "ServiceTask",  // 返还扣减的金额
      "ServiceName": "account-service",
      "ServiceMethod": "POST:/accounts/{userId}/refund"
    },
    "RestoreInventory": {  // 返还扣减的库存
      "Type": "ServiceTask",
      "ServiceName": "inventory-service",
      "ServiceMethod": "PUT:/inventories/{sku}/restore"
    },
    "RevokeDeclaration": {  // 删除已提交的报关单
      "Type": "ServiceTask",
      "ServiceName": "customs-service",
      "ServiceMethod": "DELETE:/declarations/{declarationId}"
    },
    "CancelShipment": {  // 取消已创建的物流单
      "Type": "ServiceTask",
      "ServiceName": "logistics-service",
      "ServiceMethod": "DELETE:/shipments/{shipmentId}"
    }
  }
}
```

### 工程级代码

1. Account-Service：扣减与补偿

  ```java
  @RestController
  @RequestMapping("/accounts")
  @RequiredArgsConstructor
  public class AccountController {

      private final AccountRepo repo;

      @PostMapping("/{userId}/deduct")
      public boolean deduct(@PathVariable Long userId,
                            @RequestBody BigDecimal amount,
                            @RequestHeader("saga-business-key") String businessKey) {
          Account a = repo.findById(userId).orElseThrow();
          if (a.getBalance().compareTo(amount) < 0) throw new BizException("余额不足");
          a.setBalance(a.getBalance().subtract(amount));
          repo.save(a);
          return true;
      }

      @PostMapping("/{userId}/refund")
      public boolean refund(@PathVariable Long userId,
                            @RequestHeader("saga-business-key") String businessKey) {
          // 幂等：先查是否已退
          if (repo.refunded(businessKey)) return true;
          repo.saveRefundLog(businessKey);
          repo.updateBalance(userId, amount -> amount.add(getAmountFromLog(businessKey)));
          return true;
      }
  }
  ```

2. Inventory-Service：库存扣减与恢复

  ```java
  @Service
  public class InventoryService {

      @Transactional
      public boolean deduct(String sku, int qty, String businessKey) {
          int affected = jdbcTemplate.update(
              "update inventory set available = available - ? where sku = ? and available >= ?",
              qty, sku, qty);
          if (affected == 0) throw new BizException("库存不足");
          return true;
      }

      @Transactional
      public boolean restore(String sku, int qty, String businessKey) {
          jdbcTemplate.update("update inventory set available = available + ? where sku = ?", qty, sku);
          return true;
      }
  }

  ```

3. 启动 Saga 事务的 Order-Service

  ```java

  @Service
  public class OrderAppService {

      @Autowired
      private StateMachineEngine smEngine;

      public String createOrder(CreateOrderCommand cmd) {
          Map<String, Object> params = Map.of(
              "userId", cmd.getUserId(),
              "sku", cmd.getSku(),
              "qty", cmd.getQty(),
              "amount", cmd.getAmount()
          );
          StateMachineInstance inst = smEngine.start("GlobalOrderFulfillment", null, params);
          return inst.getId(); // Saga 事务 ID
      }
  }

  ```

### 补充

1. 幂等 & 防悬挂
    所有接口带 businessKey（订单号），数据库做唯一索引. 补偿前先查状态机日志，已补偿则直接返回成功
2. 补偿时序
    - 可交换补偿：库存恢复与余额退款无顺序要求
    - 不可交换补偿：先撤销运单再撤销海关申报，需在状态机里显式编排
3. 监控 & 告警
    - Seata-Server 暴露 Prometheus 指标：seata_saga_instance_total{status="FAILED"}
    - 钉钉/飞书告警：失败率 > 1% 且持续 3 分钟即触发

4. 参数调优

    |参数|说明|推荐值|
    |----|----|------|
    |client.rm.report.retry.count|一阶段结果上报重试次数|3|
    |server.max.commit.retry.timeout|提交操作的最大重试时长|30s|
    |server.rollback.retry.timeout.unlock.enable|回滚失败时是否自动解锁资源|true|

## 参考

- <https://blog.51cto.com/u_16297326/14082294>
