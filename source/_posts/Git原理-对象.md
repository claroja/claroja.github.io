---
title: Git原理-对象
toc: true
date: 2021-06-26 12:55:57
tags:
categories:
---

执行`git init`后, 自动创建`.git`文件夹, 包含一下内容:
```s
config
description
HEAD
hooks/
info/
objects/
refs/
```

`config` 文件包含项目特有的配置选项
`description` 文件仅供 GitWeb 程序使用无需关心
*`HEAD`: 指向目前被检出的分支
`info` 目录包含一个全局性排除（global exclude）文件, 对应`.gitignore`
*`objects`: 存放所有的数据内容
`hooks` 包含客户端或服务端的钩子脚本
*`refs` 存储指向数据的指针(分支, 标签等)
*`index` 暂存区信息(尚未创建)

Git 是一个内容寻址文件系统, 键值对数据库（key-value data store）, 向 Git 仓库中插入任意类型的内容，它会返回一个唯一的键，通过该键可以在任意时刻再次取回该内容. 通过`git hash-object`命令将value保存在`.git/objects`目录中, 并返回唯一的`key`


# 存取字符串
1. 初始化仓库`git init test `
初始化仓库, 创建`.git/objects/info`和`.git/objects/pack`空文件夹
2. 存放内容
将`test content`存放在仓库中, 执行`git hash-object`, 返回`key`
```sh
echo 'test content' " git hash-object -w --stdin
d670460b4b4aece5915caf5c68d12f560a9fe3e4
```
`git hash-object` 将内容存入数据库, 并返回唯一的key
`-w`: write, 将'test content'写入文件中
`--stdin`: 标准输入读取内容
上述返回的结果key, 在object文件夹下, 前两位对应了目录名, 后面对应了文件名
```sh
find .git/objects -type f
.git/objects/d6/70460b4b4aece5915caf5c68d12f560a9fe3e4
```
3. 取出内容
使用`cat-file`根据key取出内容, `-p`可以自动判断内容的类型
```
git cat-file -p d670460b4b4aece5915caf5c68d12f560a9fe3e4
test content
```

# 存取文件


1. 存入文件
```sh
$ echo 'version 1' > test.txt
$ git hash-object -w test.txt
83baae61804e65cc73a7201a7252750c76066a30
```
2. 存入文件
```sh
$ echo 'version 2' > test.txt
$ git hash-object -w test.txt
1f7a7a472abf3dd9643fd615f6da379c4acb3e3a
```
3. 查看所有key
```sh
$ find .git/objects -type f
.git/objects/1f/7a7a472abf3dd9643fd615f6da379c4acb3e3a
.git/objects/83/baae61804e65cc73a7201a7252750c76066a30
```

4. 取出第一个文件内容
```sh
$ git cat-file -p 83baae61804e65cc73a7201a7252750c76066a30 > test.txt
$ cat test.txt
version 1
```


文件名并没有被保存, 仅保存了文件的内容, 我们称之为 数据对象（blob object）,可以用`git cat-file -t`来查看
```sh
$ git cat-file -t 1f7a7a472abf3dd9643fd615f6da379c4acb3e3a
blob
```


# 树对象
对象（tree object），它能解决文件名保存的问题，也允许我们将多个文件组织到一起。 

1. 添加文件到暂存区
Git 根据某一时刻暂存区（即 index 区域）所表示的状态创建并记录一个对应的树对象, 因此，为创建一个树对象，首先需要通过暂存一些文件来创建一个暂存区。 
```sh
$ git update-index --add --cacheinfo 100644 83baae61804e65cc73a7201a7252750c76066a30 test.txt
```
`--add`: 将文件加入缓存区
`--cacheinfo`: 添加的文件在git数据库中(而不是在当前目录下)
`100644`: 文件类型为普通文本(100755:可执行文件, 12000:符号链接)

2. 将暂存区写入树对象
`git write-tree` 命令将暂存区内容写入一个树对象
```sh
$ git write-tree # 写入树对象
d8329fc1cc938780ffdd9f94e0d364e0ea74f579
$ git cat-file -p d8329fc1cc938780ffdd9f94e0d364e0ea74f579 # 查看树对象, -p自动判断为树对象
100644 blob 83baae61804e65cc73a7201a7252750c76066a30     test.txt
$ git cat-file -t d8329fc1cc938780ffdd9f94e0d364e0ea74f579 # 查看类型
tree
```

创建更多的树对象
```sh
$ git update-index --add --cacheinfo 100644 1f7a7a472abf3dd9643fd615f6da379c4acb3e3a test.txt # test.txt version2版本加入暂存区
$ echo 'new file' > new.txt # 创建新文件
$ git update-index --add new.txt # 将新文件new.txt加入暂存区
```
将当前暂存区记录为以个新树对象, 这个树对象包含了两个文件:1,新版本的test.txt 2,new.txt
```sh
$ git write-tree
0155eb4229851634a0f03eb265b69f5a2d56f341
$ git cat-file -p 0155eb4229851634a0f03eb265b69f5a2d56f341
100644 blob fa49b077972391ad58037050f2a75f74e3671e92     new.txt
100644 blob 1f7a7a472abf3dd9643fd615f6da379c4acb3e3a     test.txt
```

可以将第一个树对象加入到第二个树对象中:
`git read-tree` 可以把书对象放入暂存区, `--prefix` 给树对象添加一个前缀

```sh
$ git read-tree --prefix=bak d8329fc1cc938780ffdd9f94e0d364e0ea74f579
$ git write-tree
3c4e9cd789d88d8d89c1073707c3585e41b0e614
$ git cat-file -p 3c4e9cd789d88d8d89c1073707c3585e41b0e614
040000 tree d8329fc1cc938780ffdd9f94e0d364e0ea74f579     bak
100644 blob fa49b077972391ad58037050f2a75f74e3671e92     new.txt
100644 blob 1f7a7a472abf3dd9643fd615f6da379c4acb3e3a     test.txt
```
当前工作目录, 类似于这样
![https://git-scm.com/book/en/v2/images/data-model-2.png]()


# 提交树对象
目前已经有了三个树对象:


调用 `commit-tree` 命令创建一个提交对象，为此需要指定一个树对象的 SHA-1 值，以及该提交的父提交对象（如果有的话）,
创建时间和作者数据不同，你现在会得到一个不同的散列值。
提交第一棵树
```sh
$ echo 'first commit' " git commit-tree d8329f
fdf4fc3344e67ab068f836878b6c4951e3b15f3d
```
查看当前commit object
```sh
$ git cat-file -p fdf4fc3
```
- 第一行: 它先指定一个顶层树对象，代表当前项目快照
- 第二行: 可能存在的父提交
- 第三行: 作者信息
- 第四行: 提交者信息
- 第五行: 留空
- 第六行: 提交注释


继续提交另外两棵树
```sh
$ echo 'second commit' " git commit-tree 0155eb -p fdf4fc3
cac0cab538b970a37ea1e769cbbde608743bc96d
$ echo 'third commit' " git commit-tree 3c4e9c -p cac0cab
1a410efbd13591db07496601ebc7a059dd55cfe9
```

对最后一个commit SHA值, 使用`git log`, 既可以显示提交的历史.
以上的过程, 就是我们使用`git add`和`git commit`命令时, 所运行的底层的所做的:
1. 将被改写文件保存为数据对象
2. 更新暂存区, 记录树对象
3. 创建提交对象, 指明顶层树对象和父提交对象
这三个对象都会被保存在`.git/objects`目录下

图像 如下:
https://git-scm.com/book/en/v2/images/data-model-3.png