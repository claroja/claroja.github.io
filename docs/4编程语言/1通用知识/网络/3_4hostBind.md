# hostBind

在开发网站时要进行host绑定, 比如在`live-server`中指定:

1. `--host localhost` 或 `--host 127.0.0.1`
2. `--host 0.0.0.0`

`host bind`是指我们的app监听哪个网卡的数据.

1. 首先使用`ip addr`查看本机当前的网卡, 可以看到, 我们有两个网卡:

    ```sh
    1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
        link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
        inet 127.0.0.1/8 scope host lo
        valid_lft forever preferred_lft forever
        inet6 ::1/128 scope host 
        valid_lft forever preferred_lft forever
    2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state UP group default qlen 1000
        link/ether 52:54:00:bb:e2:62 brd ff:ff:ff:ff:ff:ff
        inet 10.0.4.11/22 brd 10.0.7.255 scope global eth0
        valid_lft forever preferred_lft forever
        inet6 fe80::5054:ff:febb:e262/64 scope link 
        valid_lft forever preferred_lft forever
    ```

    - lo: Loop back address(127.0.0.0)

        正常的数据包会从IP层进入链路层，然后发送到网络上；而给回环地址发送数据包，数据包会直接被发送主机的IP层获取

    - eth0: 网卡名(10.0.4.11)，如果有多块网卡，会有多个eth 或其它名称。


2. 如果使用`--host localhost` 或 `--host 127.0.0.1`, 意思就是将web app绑定到`lo`卡上, 该网卡只接受本机的连接.
3. 如果使用`--host 0.0.0.0`, 则表示将web app绑定到本机所有的网卡上, 这里包含了`lo`和`eth0`两个网卡, 如果有其他网卡, 也会被绑定上. 因为`eth0`可以被其他主机访问, 所以我们的web app也可以被其他主机访问.

    这里如果使用`--host 10.0.4.11`也是可以被其他主机访问的. `0.0.0.0`是比较方便的写法, 一来不需要记忆自己的主机ip, 另外不需要记忆有多少个网卡




