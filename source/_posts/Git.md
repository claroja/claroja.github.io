---
title: Git
toc: true
date: 2021-06-26 12:54:06
tags:
categories:
---
# 下载/更新/上传

## git clone

1. 概述

git clone做了两件事:
1. 把远程的所有分支复制下来, 使用`git branch -r`查看

```sh
remotes/origin/HEAD -> origin/master
remotes/origin/dev
```
2. 在本地新建`master`分支与`origin/master`分支对应, 使用`git branch -a`可以查看本地和远程素有分支.

```sh
* master
remotes/origin/HEAD -> origin/master
remotes/origin/dev
```
如果想在本地创建`dev`分支与`origin/dev`对应, 使用`git checkout -b dev origin/dev`

常用命令:

`git clone [-b BRANCH] [-o ORIGIN] REMOTE_URL [LOCAL_DIR]`
- REMOTE_URL: 支持多种协议
- LOCAL_DIR: 默认与远程仓库同名
- BRANCH: 指定要clone分支, 默认把整个仓库clone下来(但只会在本地创建一个master分支,`git branch -a`查看)
- ORIGIN: 指定remote名称, 默认origin


2. 应用
- 在实际开发中很少直接clone所有分支, 只需clone需要修改的分支即可, 这是git会在本地自动创建该分支的同名分支
使用`git clone -b REMOTE_URL`
- 如果clone的分支是`protected`, 既不能直接`push`. 则:
   1. 先创建一个分支 `git branch mydev`
   2. 跳到该分支上`git switch mydev`
   3. 修改完成, 推送到远程分支`git push`, 这时远程会多一个`origin/mydev`分支
   4. 在远程进行`merge request`, 并选择merge后删除这个分支


## git fetch
1. 概述

更新远程分支(origin/*)

`get fetch [ORIGIN] [R-BRANCH] [L-BRANCH]`
- `git fetch` 不带参数则是默认拉取远程ORIGIN仓库, 所有分支(origin/*)
- `ORIGIN` 拉取远程仓库的名称, 默认origin
- `R-BREANCH` 拉取远程仓库的分支名, 在本地的名称为(origin/R-BRANCH)
- `L-BRANCH` 来取远程残酷的分支,并更新本地对应的分支


## git push
1. 概述

`git push [ORIGIN] [L-BRANCH] [R-BRANCH]`

- `git push` 推送当前branch到origin远程仓库
- `ORIGIN` 推送的远程仓库的名称, 默认origin
- `L-BRANCH` 推送的 本地branch名称, 默认为当前分支
- `R-BRANCH` 推送的 远程branch名称, 默认和本地branch


# 提交

## git commit
```sh
git commit -m "the commit message" # 提交暂存区的文件
git commit –amend #重新进行当前的提交
```
## git revert
`git revert commitHash`
提交`commitHash`之前的一次`commitHash`


## git cherry-pick
将指定的`commit`提交到当前分支上
`git cherry-pick <commitHash>`
1. `git checkout master`
切换到Master分支
```sh
a - b - c  Master *
   \
   d - e - f Feature
```
2. `git cherry-pick e` 将Feature分支上的`commit e` 提交到Master分支上
```sh
a - b - c - e Master *
   \
   d - e - f Feature
```

# 工作区/暂存区/索引区(add, checkout, reset)
索引区index
暂存区stage
工作区workspace(local)

`git add` 将修改添加到stage
`git commit` 将stage提交为一个commit,且本次stage和本次commit保持一致

撤销修改:
1.只在local修改(没有add操作) `git checkout ./`即可
2.local修改后,add到stage,且没有进一步修改(刚add没有继续修改)
1)`git reset HEAD --mix`(HEAD --mix可省略),撤销stage的修改(此时checkout 没用,因为stage和local一致)
2)`git checkout ./`撤销local的修改(checkout作用是用stage覆盖local,此时local和commit已经一致)

3.local修改后,add到stage,并进行进一步修改
1)`git checkout ./` 撤销local的改动(既进一步的修改内容)
2)`git reset HEAD --mix`(HEAD --mix可省略),撤销stage的修改(此时checkout 没用,因为stage和local一致)
3)`git checkout ./`撤销local的修改(checkout作用是用stage覆盖local,此时local和commit已经一致)

这三步可以合成一步`git reset HEAD --hard`


# 合并


# git switch
代替`git checkout <BRANCH>`


## git merge
git merge执行了两个操作:
1. 将两个分支的代码合并, 既把目标的`commit`合并到当前分支的`commit`
2. - 如果没有冲突, 则直接提交新的`commit`
   - 如果有冲突, 则先解决冲突, 然后手动`commit`

解决冲突:
1. merge合并之后，中会提示有冲突的文件(既同一文件，同一行做了不同的修改)
也可通过`git status`来进行查看

2. 找到有冲突的文件进行处理
```
<<<<< HEAD
1
======
2
>>>>>> branch
```
`HEAD`到`======`是当前的分支，该文件的内容，`branch`到`=====`是合并目标分支的内容，`merge`不知道用哪个，所以需要我们自己决定。加入我们想要其他分支的内容，则只需要将`<<<<< HEAD 1 =====`和`>>>> branch`删除即可。

3. 解决完冲突后，需要重新add和commit

4. 如果发现冲突不想解决，则可以使用下面的命令取消。
`git merge --abort`

# git rebase
`base`是根的意思, 所谓的根就是两个branch交叉点, 交叉点以下是两个branch共有的, (有个误区是,交叉点以下的部分只属于某一个branch)

1. git rebase -i upstream [branch]
upstream就是要移植到的base,可以是branch,也可以是commit id.
branch是要要移植的branch,默认是HEAD所在branch

2. git reabse --continue --abort
在使用-i交互模式时,处理conflict会中断,要使用--continue来恢复交互模式

# 其他

## git tag
- 在当前`commit`上打标签 `git tag <TAGNAME>`
- 在指定`commit`上打标签 `git tag <TAGNAME> <COMMITHASH>`


## git log
`git log --oneline --decorate --graph --all`