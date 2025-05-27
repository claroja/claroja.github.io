# pull

`git pull` is shorthand for `git fetch` followed by `git merge` FETCH_HEAD.

```
git pull [host] [branch]
```
等价于
```
git fetch [host] [branch]
git merge origin/branch
```

注意是当前的分支,而不是对应名字的分支。也就是说，如果当前的分支是`dev`，执行`git merge`，则是将`origin/master`与`dev`合并，而不是和本地的`master`合并。

如图，有三个分支：
1. 远程的分支：master on origin
2. 本地的local分支：master
3. 本地的remote分支：origin/master

```sh
      A---B---C master on origin
     /
D---E---F---G master
    ^
    origin/master in your repository
```

使用`git pull`之后:
1. 本地remote分支`origin/master`会与远程的`master on origin`进行同步
2. 同步和本地的`master`分支进行和并, `merge`的第一步.
3. 合并后进行提交, `merge`的第二步

```sh
        A---B---C master on origin
       /         
      A---B---C origin/master
     /         \
D---E---F---G---H master
```





