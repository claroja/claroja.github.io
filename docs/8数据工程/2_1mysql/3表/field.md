# field

1.添加字段: `ALTER TABLE 表名 ADD 字段名 字段类型 约束条件 FIRST|AFTER 参照字段名;`
2.删除字段: `ALTER TABLE 表名 DROP 字段名;`
3.修改字段:
    修改字段名:`ALTER TABLE tablename CHANGE oldfieldname newfieldname fieldtype;`
    修改字段类型: `ALTER TABLE tablename MODIFY fieldname fieldtype;`
    修改字段位置: `ALTER TABLE 表名 MODIFY 字段名 数据类型 FIRST|AFTER 参照字段名;`
4.删除字段:`ALTER TABLE 表名 DROP 字段名;`