# stash



## 应用场景
1. 在一个分支commit上的工作区修改, 希望放在令外一个分支的commit的工作区上
```sh
git stash [save "save message"] # 将当前工作区的修改保存到栈中, 并清空当前commit上的工作区
git checkout "new branch" # 切换到新的工作区
git stash pop [stash@{$num}] # 将保存的修改, 释放到当前commit, 并在栈中删除
```


## API
1. `git stash [save "message"]` # 将当前工作区的修改保存到栈中, 并清空当前commit上的工作区
2. `git stash list` # 查看stash了哪些存储
3. `git stash show` # 显示做了哪些改动，默认第一个存储, 如果要查看第二个, 则`git stash show stash@{1}`
4. `git stash apply` # 应用某个存储, 默认使用第一个存储, 即stash@{0}
6. `git stash pop` # 应用某个存储, 将缓存堆栈中的对应stash删除，默认为第一个stash,即stash@{0}
7. `git stash drop stash@{$num}` # 丢弃stash@{$num}存储，从列表中删除这个存储
8. `git stash clear` # 删除所有缓存的stash