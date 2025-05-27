# 结构


### 镜像打包
Docker镜像打包主要有两种方式:
- 直接`commmit`container
- 使用DockerFile来build
<!--more-->
#### commit
1. 拉取系统文件
`docker pull centos`

2. 运行镜像
`docker run ‐it ‐‐name=mycentos centos:latest`

3. 上传文件
```shell
docker cp apache‐tomcat‐7.0.47.tar.gz mycentos:/root/
docker cp jdk‐8u161‐linux‐x64.tar.gz mycentos:/root/
```

4. 在容器中安装jdk
```shell
## 解压,并配置`/etc/profile`文件：
tar ‐zxvf jdk‐8u161‐linux‐x64.tar.gz ‐C /usr/local/
JAVA_HOME=/usr/local/jdk1.8.0_161
export PATH=$JAVA_HOME/bin:$PATH
## 解压,并配置`tomcat/bin/setclsspath.sh`文件：
tar ‐zxvf apache‐tomcat‐7.0.47.tar.gz ‐C /usr/local/
export JAVA_HOME=/usr/local/jdk1.8.0_161
export JRE_HOME=/usr/local/jdk1.8.0_161/jre
```
5. 将正在运行的容器提交为一个新的镜像
`docker commit mycentos mytomcat`

6. 测试镜像
```shell
docker run ‐itd ‐‐name=t1 ‐p 8888:8080 mytomcat /bin/bash
docker exec t1 /usr/local/apache‐tomcat‐7.0.47/bin/startup.sh
```

7. 镜像打包
```shell
docker save ‐o /root/tomcat7.tar mytomcat
```
其他机器可以使用`docker load ‐i /root/tomcat7.tar`来载入镜像


#### DSL
##### DockerFile语法
- FROM 父镜像
语法:`FROM <image>:<tag>` 其中`tag`可以省略
列子:`FROM centos:last`
- MAINTAINER 镜像维护者
`MAINTAINER claroja<63183535@qq.com>`
- ENV 设置环境变量
`ENV mypath=/tmp` 设置`mypath`环境变量, 下面可以使用`$mypath`来引用
- WORKDIR 终端默认登陆的进来工作目录
`WORKDIR $mypath` 登陆进入`mypath`路径
- COPY和ADD
    - COPY 拷贝文件和目录到镜像中
    `COPY ./a.txt /root/b.txt` 将宿主机上的`./a.txt`拷贝到容器的`/root/b.txt`
    - ADD 宿主机目录下的文件拷贝进镜像且ADD命令会自动处理URL和解压tar压缩包
    `ADD a.tar.gz /usr/local/` 将宿主机上的`a.tar.gz`中的内容解压到`/usr/local/a`
- RUN 容器`构建时`需要运行的命令
`RUN ["executable","param1","param2"]`等价于`RUN executable param1 param2`
```shell
RUN yum -y install vim # 等价于RUN ["yum","-y","install","vim"]
RUN yum -y install net-tools
```
- CMD和ENTRYPOINT`启动时`运行命令
    语法:`CMD ["executable","param1","param2"]` or `ENTRYPOINT ["executable","param1","param2"]`
    等价语法: `CMD executable param1 param2]`
    例子:`CMD ["/bin/echo", "test"]` or `ENTRYPOINT ["/bin/echo", "test"]`
    - CMD 容器`启动时`要运行的命令, 多个CMD指令, 但只有最后一个生效
    `CMD ["curl", "-s", "http://ip.cn"]`
    `docker run -it centos [外部命令]` 这时`外部命令`会`覆盖`dockerfile中的`CMD`那一行命令, 相当于只执行了`CMD [外部命令]`
    - ENTRYPOINT 容器`启动时`要运行的命令
    `docker run -it centos [外部命令]` 这时`外部命令`会`追加`到dockerfile中的`ENTRYPOINT`那一行命令,相当于执行了`CMD ["curl", "-s", "http://ip.cn", "外部命令"]`
- EXPOSE 暴露指定端口
`EXPOSE 80`
- VOLUME 容器数据卷(少使用,系统自动生成宿主机目录, 需要用`docker inspect`查询)
- ONBUILD 父镜像在被子继承后, 父镜像的onbuild被触发
`ONBUILD RUN echo "fatherimage run"`


##### 构建
`docker build -f ./dockerfile -t imagename:1.3 .`
`-f` 指定文件, 默认如果名称是`Dockerfile`,则不需要`-f`
最后的`.`是生成镜像的路径



### 容器打包
容器也可以直接打包
```shell
docker export ‐o /root/container.tar t1
docker import container.tar mytomcat:latest
```

