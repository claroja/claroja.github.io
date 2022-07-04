---
title: VirtualBox网络配置
toc: true
date: 2021-05-31 21:56:16
tags:
categories:
    - [工具, VirtualBox]
---
`nat`来让虚拟机通过宿主机网络访问外网
`host-only`让宿主机访问虚拟机

<!--more-->

使用`nat`和`host-only`实现
- nat(虚拟机访问互联网，使用10.0.2.x段)
- host-only(虚拟机和主机互相通信，使用192.168.56.x段)
![1.png](1.png)

进入虚拟机,使用`ip addr`查看, 如果未开启需要进入配置文件, 修改`onboot`参数, 配置文件在:
`/etc/etc/sysconfig/network-scripts/`
两个网卡
- `ifcfg-enp0s3`对应`nat`
- `ifcfg-enp0s8`对应`host-only`

如果需要, 再给`host-only`配置静态地址.

默认`host-only`网络的配置在中
![2.png](2.png)


# hostonly网卡配置
`vi /etc/sysconfig/network-scripts/ifcfg-enp0s8`
```
TYPE=Ethernet
PROXY_METHOD=none
BROWSER_ONLY=no
BOOTPROTO=static
DEFROUTE=yes
IPV4_FAILURE_FATAL=no
IPV6INIT=yes
IPV6_AUTOCONF=yes
IPV6_DEFROUTE=yes
IPV6_FAILURE_FATAL=no
IPV6_ADDR_GEN_MODE=stable-privacy
NAME=enp0s8
UUID=4ac7e364-b251-4457-8e2f-37abaaff2496 # 使用uuidgen生成
DEVICE=enp0s8
ONBOOT=yes
IPADDR=192.168.56.101
NETMASK=255.255.255.0
GATEWAY=192.168.56.1
```