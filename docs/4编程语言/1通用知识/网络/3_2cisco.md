# cisco

思科 IOS(Internetwork Operating System，互联网络操作系统）是思科路由器和大部分交换机的内核，提供路由选择、交换、网络互联和远程通信功能。


## CLI
IOS中有四种模式:
- 用户模式
- 特权模式
- 全局配置模式
- 接口配置模式

每个模式之间是递进关系,使用`en`, `conf t`, `int fa0/0`等命令可以依次进入下一级模式,  使用`exit`可回退到上一级模式

不同模式可以执行不同的命令.

### 用户模式
接口状态消息出现后，按回车键将进入用户 EXEC 模式(用户模式)，提示符为 `Router>`。用户模式主要用于查看统计信息，该模式能使用的功能很少.




### 特权模式
特权模式下才能查看并修改 Cisco 路由器的配置。要进入特权模式需要执行命令 `enable`(简写为`en`), 提示符变为`Router#`表明当前处于特权模式，特权模式下可查看并修改路由器的配置。
```sh
Router>enable
Router#
```

### 全局配置模式
CLI 中想要对路由器做全局修改，可输入`configure terminal`(或其简写`conf t`)进入全局配置模式，提示符变为`Router(config)#`表明当前在全局配置模式, 在全局模式下执行的命令将影响整台路由器。
```sh
Router#conf t
Enter configuration commands, one per line.  End with CNTL/Z.
Router(config)#
```

机器类型|命令|描述
--|--|--
switch|show mac-address-table|查看MAC地址
switch|erase startup-config|恢复出厂设置, 清除缓存信息

### 接口配置模式
在全局配置模式下使用“interface 接口名”来进入，interface 可以缩写为 “int”, 比如进入`FastEthernet0/0`接口可以简写成`int fa0/0`, 提示符变为`Router(config-if)#`表示操作网卡.
```sh
Router(config)#int fa0/0
Router(config-if)#
```

switch
命令|描述
--|--
show mac-address-table|查看MAC地址
erase startup-config|恢复出厂设置, 清除缓存信息


router

命令|描述
--|--
`hostname xxx`|设置主机名, 命令行变化, 方便查看
`interface fastEthernet 0/1` or `int fa0/1`|进入接口配置模式, 0代表插槽, 1代表端口
`no shutdown`|激活端口
`shutdown`|关闭端口
`ip address 192.168.216.124 255.255.255.0` or `ip add IP Mask`|给接口配置ip地址
`erase startup-config`|删除配置和缓存
`reload`|重启路由器
`ping ip`|一半
`telnet  ip、域名或者端口`|远程管理，或者探测端口
`show interface f0/0`|查看接口参数和配置
`show ip interface brief`|所有接口的IP地址和状态
`show protocols`|查看所有接口上的协议


## 主机命令

```cmd
arp -a # 查看arp缓存
arp -d # 删除arp缓存
```


## 参考
1. https://www.cnblogs.com/linfangnan/p/15043970.html
2. https://blog.csdn.net/istrangeboy/article/details/91354641
