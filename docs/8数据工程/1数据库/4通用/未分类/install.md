# install

## docker

1.下载镜像`docker pull mysql`
2.启动容器`docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql`
默认用户名是root，`-e MYSQL_ROOT_PASSWORD`来设置密码
3.进入容器`docker exec -it  mysql /bin/bash`
4.链接mysql`mysql -uroot -p123456`
5.更改加密规则，以便远程连接
mysql8 之前的版本中加密规则是mysql_native_password,而在mysql8之后,加密规则是caching_sha2_password,所以把加密规则改回来。
```python
ALTER USER 'root'@'%' IDENTIFIED BY '123456' PASSWORD EXPIRE NEVER; #修改加密规则 ，'password'改成你的密码
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '123456'; #更新一下用户的密码 ，'password'是你的密码
FLUSH PRIVILEGES; #刷新权限
```

## 其他
1.可以建立卷，将mysql的数据和日志同步到宿主
```shell
duso docker run -p 3306:3306 --name mysql \
-v /usr/local/docker/mysql/conf:/etc/mysql \
-v /usr/local/docker/mysql/logs:/var/log/mysql \
-v /usr/local/docker/mysql/data:/var/lib/mysql \
-e MYSQL_ROOT_PASSWORD=123456 \
-d mysql:5.7
```

参考：
https://www.cnblogs.com/sablier/p/11605606.html
https://hub.docker.com/_/mysql/


## centos
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

## win
1. 初始化
在MySQ文件夹根目录下创建my.ini文件,内容如下：
```ini
[mysqld]
## 设置3306端口
port=3306
## 设置mysql的安装目录
basedir=D:\program\mysql-8.0.16-winx64
## 设置mysql数据库的数据的存放目录,一般都设置在根目录下
datadir=D:\program\mysql-8.0.16-winx64\Data
## 允许最大连接数
max_connections=200
## 允许连接失败的次数。
max_connect_errors=10
## 服务端使用的字符集默认为utf8mb4
character-set-server=utf8mb4
## 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
## 默认使用“mysql_native_password”插件认证
#mysql_native_password
default_authentication_plugin=mysql_native_password
[mysql]
## 设置mysql客户端默认字符集
default-character-set=utf8mb4
[client]
## 设置mysql客户端连接服务端时默认使用的端口
port=3306
default-character-set=utf8mb4
```

2. 注册服务
以管理员身份打开cmd,以win10为例
![](https://img-blog.csdnimg.cn/20190626094316781.png)
1. `mysqld --initialize --console` 初始化mysql,注意将密码记下
2. `mysqld --install` 注册mysql服务
3. `net start mysql`启动mysql服务


## 重置密码
`mysql -uroot -p --port=3306`
`ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'newpassword';`

参考文献:
https://blog.csdn.net/qq_37350706/article/details/81707862
https://blog.csdn.net/lxlong89940101/article/details/80246675
https://www.baidu.com/s?wd=mysql+8+%E6%9B%B4%E6%94%B9%E5%AF%86%E7%A0%81&tn=98012088_5_dg&ch=11