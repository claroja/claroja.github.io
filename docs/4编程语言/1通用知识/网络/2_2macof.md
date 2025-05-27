# macof

## 概念

macof是dsniff中的一个小工具

交换机中存在着一个记录着MAC地址的表，为了完成数据的快速转发，这个表有着自动学习机制，学习后可以直接向目标发送数据。利用这不断学习的机制，不断地发送MAC地址交给交换机，填满整个MAC表，此时交换机就只能数据广播的形式获取信息，就像是集线器一样。攻击者使用抓包工具, 即可获得广播的数据.

macof 用于对交换机进行mac地址表溢出。内部mac表都是有大小的，一般8k左右，一但mac表满了，其他mac地址就加不进来。macof，用来发送大量伪造的mac地址的数据包。可达到溢出的目的。阻断内网服务器正常网络通信，一般情况下，mac地址的欺骗和arp的欺骗组合使用，共同欺骗交换机和PC，增加欺骗成功率。

## syntax

macof [-i interface] [-s src] [-d dst] [-e tha] [-x sport] [-y dport] [-n times]

## 参数

1. -i interface 指定要发送的接口
2. -s src 指定源IP地址
3. -d dst 指定目标IP地址
4. -e tha 指定目标硬件地址
5. -x sport 指定TCP源端口
6. -y dport 指定TCP目标端口
7. -n times 指定要发送的数据包数

## 使用

正常我们-i指定网卡即可：macof -i eth0

## 应用

MAC Flooding 

## 参考
1. https://www.cnblogs.com/BaoLeri/p/5721249.html
2. https://kalilinuxtutorials.com/macof/