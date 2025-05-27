epoll 比select和poll

select 不能突破1024,因为是通过数组实现的,只能从新编译内核
poll 内部链表,可以突破
epoll 红黑树,可以突破

1.查看文件描述符上限
`/proc/sys/fs/file-max`
2.配置上限值
`/etc/security/limits.conf`

```
*    soft    nofile      8000 
*    hard    nofile      8000 
```
临时设置
ulimit -a 2000