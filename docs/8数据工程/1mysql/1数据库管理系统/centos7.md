# centos7

## 清空之前的安装
```
## 卸载包
rpm -qa | grep -i mysql
rpm -e –nodeps 包名
## 卸载文件
find / -name mysql
rm -rf /var/lib/mysql
## 卸载配置文件
/etc/my.cnf

```

## 安装

1.添加yum源
`https://dev.mysql.com/downloads/repo/yum/` 选择合适的rmp包,用来添加源
`sudo yum localinstall mysql80-community-release-el7-3.noarch.rpm` 添加yum源
`yum repolist enabled | grep "mysql.*-community.*"` 查看是否添加成功

2.安装mysql服务端
`sudo yum install mysql-community-server`

3.启动服务
如果报错,可能要重启,安装两次才成功
`systemctl start mysqld.service`
`systemctl stop mysqld.service` 关闭服务

`service mysqld start`
`service mysqld stop`

4.更改密码
`grep 'temporary password' /var/log/mysqld.log` 通过日志,查看默认密码
`cat /root/.mysql_secret` 默认密码保存位置
`mysql -uroot -p` 登录
`ALTER USER 'root'@'localhost' IDENTIFIED BY 'MyNewPass4!';`通过表,修改密码

默认的密码策略是Medium,最好不要更改.
Policy|	Tests Performed
--|--
0 or LOW|	默认长度为8
1 or MEDIUM|	Length; numeric, lowercase/uppercase, and special characters,8位数字,大小写,特殊字符
2 or STRONG	|Length; numeric, lowercase/uppercase, and special characters; dictionary file,8位数字,大小写,特殊字符,字典文件


5.开放公网连接


`use mysql` # 切换mysql数据库
`update user set host='%' where user ='root';` # 允许外部访问
`FLUSH PRIVILEGES;`将更改加载的内存
`GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'WITH GRANT OPTION;` 授权



参考:
https://dev.mysql.com/doc/refman/8.0/en/linux-installation-yum-repo.html#yum-repo-installing-mysql
https://blog.csdn.net/qq_39564555/article/details/98473590
https://www.cnblogs.com/hrvyzou/p/11061521.html