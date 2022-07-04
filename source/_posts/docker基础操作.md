---
title: docker基础操作
toc: true
date: 2021-06-14 14:07:45
tags:
categories:
    - [工具, 软件]
---
docker 基础命令行工具
<!--more-->

## 开启服务
docker是CS架构, 要开启服务才能使用
`systemctl enable docker.service`
`systemctl start docker.service`

相关命令
- enable 开机启动服务
- start 开启服务
- stop 关闭
- restart 重启
- status 状态


## 镜像操作
- docker search [image_name]
- docker image pull [image_name]
- docker image push [image_name]
镜像默认保存在 /var/lib/docker 目录下
配置国内镜像:`/etc/docker/daemon.json`
```java
{
  "registry-mirrors": [
    "https://registry.docker-cn.com",
    "http://hub-mirror.c.163.com",
    "https://docker.mirrors.ustc.edu.cn"
  ]
}
```
- 查看镜像 `docker image ls`
- 删除镜像`docker image rm [name]`
- 查看详细信息`docker image inspect [name]`
- 重命名`docker image tag [old_image]:[old_version] [new_image]:[new_version]`
## container操作
- 创建容器: `docker run -dit --name=CONTAINER_NAME IMAGE_NAME`
`-dit` 是后台运行的意思, 为什么要加上`it`?
https://codingdict.com/questions/54333
- 列出所有镜像: `docker container ls`,简写形式:`docker ps` , 默认只列出运行的. `-a`是包含未运行的, `-q`只输出ID, 批量操作,比如删除时常用.
- 删除容器: `docker container rm [ID]`, 简写形式:`docker rm [ID]` 
删除所有镜像: `docker rm $(docker ps -aq)` 
- 启动容器: `docker container start [ID]` 简写`docker start [ID]`
- 停止容器: `docker container stop [ID]` 简写`docker stop [ID]`
- 重启容器: `docker container restart [ID]` 简写`docker restart [ID]`
- 进入容器: `docker container exec -it 容器id /bin/bash`
- 退出容器: `exit` 使用`docker run image -it`时退出`exit`会停止容器运行.再次通过`exec`进入则不会退出既停止


## 疑难杂症

域名解析问题:
https://blog.csdn.net/qq_43743460/article/details/105648139