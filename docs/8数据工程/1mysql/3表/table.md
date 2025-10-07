# table

## 表操作
1.创建表`CREATE TABLE table_name`
```sql
CREATE TABLE `user_basic` (
  `user_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `status` tinyint(1) NOT NULL DEFAULT '1' COMMENT '状态，是否可用，0-不可用，1-可用',
  `mobile` char(11) NOT NULL COMMENT '手机号',
  `password` varchar(93) NULL COMMENT '密码',
  `last_login` datetime NULL COMMENT '最后登录时间',
  `is_media` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否是自媒体，0-不是，1-是',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `mobile` (`mobile`),
  UNIQUE KEY `user_name` (`user_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户基本信息表';
```
2.删除表:`DROP TABLE 表名`
3.修改表:`ALTER TABLE oldname RENAME newname`
4.查看表`SHOW TABLES;`或`DESCRIBE(DESC) table_name;`







9.索引（主键、外键、索引、唯一）
大量查询字段(where)，建立索引
像性别等种类比较少的不要建索引
索引会降低增删改的速度，因为每次变动都会重新建索引




10.注释
COMMENT


7.引擎选择
ENGINE=MyISAM

8.编码设置
DEFAULT CHARSET=utf8


