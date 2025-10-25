## 1.2 MongoDB的体系结构

一个运行着mongodb的数据库可以看做是一个mongodb server。该server由实例和数据库构成。在一般情况下，一个mongoDB Server机器上包含一个实例和多个与之对应的的数据库。但是在特殊情况下，允许一个mongoDB Server上有多个实例和多个数据库。

Mongodb的结构(集合、文档)构成了mongodb的数据库。这个概念和oracle的系统结构的概念类似。

Mongodb主要是由文档(document)，集合(Collection)、数据库(database)这三部分组成。结构是面向用户的，用户在使用mongodb开发程序的时候，使用的就是该结构。 

MongoDB和关系型数据库的对比图如下所示：


| SQL 术语概念 | MongoDB 术语/概念 | 解释说明                     |
| ------------ | ----------------- | ---------------------------- |
| database     | database          | 数据库                       |
| table        | collection        | 数据库表/集合                |
| row          | document          | 数据记录行/文档              |
| column       | field             | 数据字段/域                  |
| index        | index             | 索引                         |
| table joins  |                   | 表连接,MongoDB 不支持        |
| primary key  | primary key       | 主键,MongoDB 自动将_id 字段设置为主键 |


说明：

1）关系型数据库中表的一条行记录必须保证拥有每一个字段，并且每一个字段都一样。而MongoDB的每一个document中的数据结构有可能是不一样的。可以在程序中随意的动态的定义document的结构。可以随意的自定义document的结构。 document相当于数据库表中的一行记录。
2）Collection相当于关系数据库中的表，是由多个document组成的。
3）很多collection结合在一起，就形成了db。一个mongodb server支持多个数据库。
4）关系型数据库查询语句使用SQL.MongoDB查询使用内置find函数，即基于BSON的特殊查询工具。




















