---
title: Python安装
toc: true
date: 2021-06-26 12:01:08
tags:
categories:
---


```sh
tar -zxvf Python-3.7.3.tar
cd ./Python-3.7.3
mdkir /root/program/python3.8
./configure --prefix=/root/program/python3.8 # 配置make的编译后的安装目录
make && make install 一步来实现
ln -s /root/program/python3.8/bin/python3.8 /root/program/python3.8/bin/python # 添加软链接
vi /etc/profile # 配置环境变量
export PATH=/root/program/python3.8/bin:$PATH
```


使用pandas时，提示
No module named '_bz2'
第一步
yum -y install bzip2 bzip2-devel
