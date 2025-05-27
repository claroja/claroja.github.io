# migrate



`db.create_all()`只会在初始化时创建更改表结构, 中途通过模型修改表结构, 他不会起作用.

使用[flask-migrate](https://github.com/miguelgrinberg/flask-migrate)可以方便管理数据库的更改.


1. 执行`flask db init`
根目录会创建`migrations/`文件夹, 用来存储数据变更的信息. 
该命令不会创建和更改数据表, 只做初始化操作, 想要更改数据库, 需做2/3两步操作

该命令只需执行一次, 类似于`git init`


2. `flask db migrate`
更改ORM模型后执行, 会在`migrations/versions`创建修改数据的脚本.
类似于`git add ./`

3. `flask db upgrade`
修改数据表, 
类似于`git commit`

