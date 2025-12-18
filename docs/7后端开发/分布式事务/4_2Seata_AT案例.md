# Seata_XA案例

应用程序（AP）持有商品库和余额库两个数据源。应用程序（AP）通过TM通知余额库（RM）和商品库（RM），来创建订单和减余额，RM此时未提交事务，此时商品和余额资源锁定。

1. 修改application.yml文件（每个参与事务的微服务），开启AT模式：

  ```yml
  seata:
    data-source-proxy-mode: AT

  ```

  ✨Seata默认是AT模式, 所以直接删除如上的配置即可

2. 给发起全局事务的入口方法添加@GlobalTransactional注解:  

  ```java
  @GlobalTransactional
  @Transactional(rollbackFor = Exception.class)
  public void saveOrder(OrderSaveParam orderSaveParam) {
      // 参数校验等必要操作
      // ...

      // 修改库存
      reduceGoodsCount(goodsCountMap);

      // 扣除余额
      reduceMoney(id,money);
      // 异常回滚事务
      int i = 1 / 0;
  }
  ```

## 参考

- <https://bbs.huaweicloud.com/blogs/416699>
