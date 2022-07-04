---
title: Git原理-引用
toc: true
date: 2021-06-26 12:56:49
tags:
categories:
---
`git log 1a410e`来查看该提交的历史记录, 但是记忆`1a410e`值, 太麻烦了, 所以可以起个别名, 这种简单的名字被称为引用(references，或简写为 refs)。 你可以在 `.git/refs` 目录下

```sh
$ find .git/refs
.git/refs
.git/refs/heads
.git/refs/tags
```
给SHA添加refs:
```sh
echo 1a410efbd13591db07496601ebc7a059dd55cfe9 > .git/refs/heads/master
```
可以通过refs来查:
```sh
git log master
```
这个就是Git分支的本质：一个指向某一系列提交之首的指针或引用。
当运行类似于 git branch <branch> 这样的命令时，Git 实际上会运行 update-ref 命令， 取得当前所在分支最新提交对应的 SHA-1 值，并将其加入你想要创建的任何新引用中。
git提供了`git update-ref`命令来添加refs, 不提倡直接使用`echo`来直接操作, 给第二个提交添加refs:
```sh
git update-ref refs/heads/test cac0ca
```
目前仓库的样子:
https://git-scm.com/book/en/v2/images/data-model-4.png



# HEAD 引用
HEAD 文件通常是一个符号引用（symbolic reference），指向目前所在的分支。 所谓符号引用，表示它是一个指向其他引用的指针。
然而在某些罕见的情况下，HEAD 文件可能会包含一个 git 对象的 SHA-1 值。 当你在检出一个标签、提交或远程分支，让你的仓库变成 "分离 HEAD"状态时，就会出现这种情况。

```sh
$ cat .git/HEAD
ref: refs/heads/master
```
如果执行 git checkout test，Git 会像这样更新 HEAD 文件：
```sh
$ cat .git/HEAD
ref: refs/heads/test
```

git也提供了`git symbolic-ref`来修改HEAD
查看HEAD值
```sh
$ git symbolic-ref HEAD
refs/heads/master
```
更新HEAD值
```sh
$ git symbolic-ref HEAD refs/heads/test
$ cat .git/HEAD
ref: refs/heads/test
```

# 标签引用
 Git 的三种主要的对象类型（数据对象、树对象 和 提交对象 ）实际上还有第四种, 标签对象（tag object）.
标签对象（tag object）类似于一个提交对象——它包含一个标签创建者信息、一个日期、一段注释信息，以及一个指针。主要的区别在于，标签对象通常指向一个提交对象，而不是一个树对象。 它像是一个永不移动的分支引用——永远指向同一个提交对象，只不过给这个提交对象加上一个更友好的名字罢了.
创建一个轻量标签：
```sh
$ git update-ref refs/tags/v1.0 cac0cab538b970a37ea1e769cbbde608743bc96d
```

# 远程引用

远程引用（remote reference）如果你添加了一个远程版本库并对其执行过推送操作，Git 会记录下最近一次推送操作时每一个分支所对应的值，并保存在 refs/remotes 目录下。
查看 refs/remotes/origin/master 文件，可以发现 origin 远程版本库的 master 分支所对应的 SHA-1 值，就是最近一次与服务器通信时本地 master 分支所对应的 SHA-1 值：
```sh
$ cat .git/refs/remotes/origin/master
```


```sh
$ git remote add origin https://github.com/schacon/simplegit-progit
```
仓库中的 .git/config 文件中添加一个小节， 并在其中指定远程版本库的名称（origin）、URL 和一个用于获取操作的 引用规范（refspec）：
```sh
[remote "origin"]
   url = https://github.com/schacon/simplegit-progit
   fetch = +refs/heads/*:refs/remotes/origin/*
```

引用规范的格式由一个可选的 + 号和紧随其后的 <src>:<dst> 组成，
- <src> 是一个模式（pattern），代表远程版本库中的引用； 
- <dst> 是本地跟踪的远程引用的位置。 
- +号告诉 Git 即使在不能快进的情况下也要（强制）更新引用。

默认情况下，引用规范由 git remote add origin 命令自动生成， Git 获取服务器中 refs/heads/ 下面的所有引用，并将它写入到本地的 refs/remotes/origin/ 中。 所以，如果服务器上有一个 master 分支，你可以在本地通过下面任意一种方式来访问该分支上的提交记录：
```sh
$ git log origin/master
$ git log remotes/origin/master
$ git log refs/remotes/origin/master
```
上面的三个命令作用相同，因为 Git 会把它们都扩展成 refs/remotes/origin/master。
如果想让 Git 每次只拉取远程的 master 分支，而不是所有分支， 可以把（引用规范的）获取那一行修改为只引用该分支：
```
fetch = +refs/heads/master:refs/remotes/origin/master
```


参考:
https://git-scm.com/book/zh/v2/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-%E5%BC%95%E7%94%A8%E8%A7%84%E8%8C%83
