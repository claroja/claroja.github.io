---
title: MyBatisPlus
toc: true
date: 2021-06-01 22:04:22
tags:
categories:
    - [包, MyBatis]
---

Mybatis与MybatisPlus的区别
- 基于 Mybatis:
    1. 编写 userMapper 接口, 并手动编写 CRUD 方法
    2. userMapper.xml 映射文件, 并手动编写SQL语句
  
- 基于 MybatisPlus 
    1. 创建 UserMapper 接口, 并继承BaseMapper接口即可.

`BaseMapper`默认有CRUD方法, 并且有相应的SQL语句实现.

<!--more-->

### @TableName
MybatisPlus会默认使用实体类的类名到数据中找对应的表.
当名称不一样时,可以通过value来指定
```java
//@TableName(value="tbl_user")
public class User {
}
```



### @TableId
- value: 指定表中的主键列的列名， 如果实体属性名与列名一致，可以省略不指定. 
- type: 指定主键策略. `IdType.AUTO`是自增.
```java
public class User {
	//@TableId(value="id" , type =IdType.AUTO)
	private Integer id ;
```

### @TableField
- value: 指定表中的主键列的列名
    如果实体属性名与列名一致，可以省略不指定. 
    另外MP默认开启了下划线`last_name`和驼峰`lastName`对照, 所以这种情况也不需要
- exist: 忽略字段
    如果实体类的字段, 不在数据中, 可以使用此参数来忽略这个字段


```java
public class User {
	@TableField(value = "last_name")
	private String  lastName; 
```



```java
//初始化User对象
User user  = new User();
user.setLastName("wang");
user.setSalary(20000.0);
//Integer result = userMapper.insert(user);  //返回影响的条数
System.out.println("result: " + result );
Integer key = user.getId();//插入后,自动更新主键字段, 获取当前数据在数据库中的主键值
System.out.println("key:" + key );
```


### 一般 CRUD
#### select
- 通过id查询
```java
    
    User user = userMapper.selectById(1);
    System.out.println(user);
```

- 通过多个id进行查询  `<foreach>`
```java
    List<Integer> idList = new ArrayList<>();
    idList.add(1);
    idList.add(2);
    List<User> emps = userMapper.selectBatchIds(idList);
    System.out.println(emps);
```

- 通过多个列进行查询 id  +  lastName
```java
    User  user = new User();
    user.setLastName("wang");
    user.setGender("男");
    User result = userMapper.selectOne(user);
    System.out.println("result: " +result );
```

- 通过Map封装条件查询
```java	
    Map<String,Object> columnMap = new HashMap<>();
    columnMap.put("last_name", "wang");
    columnMap.put("gender", "男");
    List<User> emps = userMapper.selectByMap(columnMap);
    System.out.println(emps);
```
- 分页查询
```java
    List<User> emps = userMapper.selectPage(new Page<>(4, 2), null);
    System.out.println(emps);
```

#### delete
- 根据id进行删除
```java
    
    Integer result = userMapper.deleteById(13);
    System.out.println("result: " + result );
```

- 根据 条件进行删除

```java
    Map<String,Object> columnMap = new HashMap<>();
    columnMap.put("last_name", "wang");
    columnMap.put("email", "63183535@qq.com");
    Integer result = userMapper.deleteByMap(columnMap);
    System.out.println("result: " + result );
```
- 批量删除
```java
    List<Integer> idList = new ArrayList<>();
    idList.add(3);
    idList.add(5);
    Integer result = userMapper.deleteBatchIds(idList);
    System.out.println("result: " + result );
```


#### insert

```java
    //初始化User对象
    User user  = new User();
    user.setLastName("MP");
    user.setEmail("63183535@qq.com");
    //插入到数据库   
    // insert方法在插入时， 会根据实体类的每个属性进行非空判断，只有非空的属性对应的字段才会出现到SQL语句中
    Integer result = userMapper.insert(user);  
    //insertAllColumn方法在插入时， 不管属性是否非空， 属性所对应的字段都会出现到SQL语句中. 
    // Integer result = userMapper.insertAllColumn(user);
    
    System.out.println("result: " + result );
    //获取当前数据在数据库中的主键值
    Integer key = user.getId();
    System.out.println("key:" + key );
```

#### update
```java
    //初始化修改对象
    User user = new User();
    user.setId(7);
    user.setLastName("wang");
    user.setEmail("63183535@qq.com");
    
    Integer result = userMapper.updateById(user);
    // updateAllColumnById没有的字段会设置为null
    // Integer result = userMapper.updateAllColumnById(user);
    System.out.println("result: " + result );
```


### EntityWrapper CRUD
`Mybatis-Plus`  通过  `EntityWrapper`来让用户自由的构建查询条件
注意:  使用的是数据库字段，不是 Java 属性

#### select
- or与orNew
```java
    List<User> emps = userMapper.selectList(
            new EntityWrapper<User>()
            .eq("gender", "男")
            .like("last_name", "wang")
            //.or()    // SQL: (gender = ? AND last_name LIKE ? OR email LIKE ?)    
            .orNew()   // SQL: (gender = ? AND last_name LIKE ?) OR (email LIKE ?) 
            );
    System.out.println(emps);
```

- order
```java
    List<User> emps  = userMapper.selectList(
            new EntityWrapper<User>()
            .eq("gender", "男")
            .orderBy("age")
            //.orderDesc(Arrays.asList(new String [] {"age"}))
            .last("desc limit 1,3")
            );
    System.out.println(emps);
```


- 分页查询

```java
    List<User > emps = userMapper.selectPage(
                        new Page<User>(1,2), 
                        Condition.create()
                        .between("age", 18, 30)
                        .eq("gender", "男")
                        .eq("last_name", "wang")
                        );
    System.out.println(emps);	
```


#### delete
```java
    userMapper.delete(
                new EntityWrapper<User>()
                .eq("last_name", "wang")
                .eq("age", 22)
            );
```


#### update
```java
    userMapper.update(user, 
                new EntityWrapper<User>()
                .eq("last_name", "wang")
                .eq("age", 44)
                );
```


## 代码生成器
MyBatis 可生成:  实体类、Mapper接口、Mapper映射文件 
MyBatis Plus 可生成:  实体类、Mapper接口、Mapper映射文件、Service层、Controller层. 

建议数据库表名和表字段名采用驼峰命名方式，如果采用下划线命名方式请开启全局下划线开关，如果表名字段名命名方式不一致请注解指定.

```java
    //1. 全局配置
    GlobalConfig config = new GlobalConfig();
    config.setAuthor("wang") // 作者
            .setOutputDir("D:\\workspace\\demo1\\src\\main\\java") // 生成路径
            .setFileOverride(true)  // 文件覆盖
            .setIdType(IdType.AUTO) // 主键策略
            .setServiceName("%sService")  // 设置生成的service接口的名字的首字
            .setBaseResultMap(true)
            .setBaseColumnList(true);
    
    //2. 数据源配置
    DataSourceConfig  dsConfig  = new DataSourceConfig();
    dsConfig.setDbType(DbType.MYSQL)  // 设置数据库类型
            .setDriverName("com.mysql.jdbc.Driver")
            .setUrl("jdbc:mysql://localhost:3306/test")
            .setUsername("root")
            .setPassword("1234");
        
    //3. 策略配置
    StrategyConfig stConfig = new StrategyConfig();
    stConfig.setCapitalMode(true) //全局大写命名
            .setDbColumnUnderline(true)  // 指定表名 字段名是否使用下划线
            .setNaming(NamingStrategy.underline_to_camel) // 数据库表映射到实体的命名策略
            .setTablePrefix("tbl_")
            .setInclude("tbl_user");  // 生成的表
    
    //4. 包名策略配置 
    PackageConfig pkConfig = new PackageConfig();
    pkConfig.setParent("com.atguigu.mp")
            .setMapper("mapper")
            .setService("service")
            .setController("controller")
            .setEntity("beans")
            .setXml("mapper");
    
    //5. 整合配置
    AutoGenerator  ag = new AutoGenerator();
    ag.setGlobalConfig(config)
        .setDataSource(dsConfig)
        .setStrategy(stConfig)
        .setPackageInfo(pkConfig);
    //6. 执行
    ag.execute();
```