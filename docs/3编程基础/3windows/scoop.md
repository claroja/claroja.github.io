
## 最佳实践

1. 官网安装
2. 添加国内库
    1. scoop bucket add main https://gitee.com/scoop-installer/Main
    2. scoop bucket add extras https://gitee.com/scoop-installer/Extras
    3. scoop bucket add scoopcn https://gitee.com/scoop-installer/scoopcn
3. 安装软件

## 文件夹说明

路径|描述
--|--
apps|所有通过scoop安装的软件都在里面。
buckets|管理软件的仓库，用于记录哪些软件可以安装、更新等信息，默认添加main仓库，可手动添加其他仓库或自建仓库
cache|软件下载后安装包暂存目录。
persit|用于储存一些用户数据，不会随软件更新而替换。
shims|和系统的`PATH`建立链接, 不需要我们自己再添加环境变量

## 加速下载

在使用scoop安装aria2后，scoop会自动调用aria2进行多线程下载以加速下载, 下载完成后，记得打开16线程（aria2编译版本默认最高线程为16，需要更高的请自行编译）：

```sh
scoop install aria2
scoop config aria2-max-connection-per-server 16
scoop config aria2-split 16
scoop config aria2-min-split-size 1M
```


## 参考:
1. https://gitee.com/scoop-installer#121-%E5%86%85%E7%BD%AE%E5%BA%93
2. https://github.com/scoopcn/scoopcn
3. https://scoop.sh/
4. https://github.com/ScoopInstaller/Install#readme
5. https://zhuanlan.zhihu.com/p/463284082
6. https://www.cnblogs.com/Edge-coordinates/p/15130184.html