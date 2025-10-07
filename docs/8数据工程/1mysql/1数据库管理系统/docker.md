# docker


1.下载镜像`docker pull mysql`
2.启动容器`docker run --name mysql -e MYSQL_ROOT_PASSWORD=123456 -p 3306:3306 -d mysql`
默认用户名是root，`-e MYSQL_ROOT_PASSWORD`来设置密码
3.进入容器`docker exec -it  mysql /bin/bash`
4.链接mysql`mysql -uroot -p` 然后输入密码`123456`
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