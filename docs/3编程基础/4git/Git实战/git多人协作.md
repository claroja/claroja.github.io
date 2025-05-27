# maximumLikelihood


Git 多人协作案例

## 远程分支可以推送
小黄和小蓝在都要在远程master分支下写作

1. 两人通过`git clone`拷贝远程仓库. 这时本地会有两个分支`origin/master`和`master`
![](./git多人协作/1.png)
2. 小黄在`master`他的本地分支上提交了修改`commit2`, 同时小蓝也在`master`他的本地分支上提交了修改`commit3`
![](./git多人协作/2.png)
3. 小黄执行`git push`更新了远程仓库
![](./git多人协作/3.png)
4. 
    - 小蓝执行`git push`报错, 所以使用`git fetch`拉取远程仓库
    ![](./git多人协作/4.png)
    - 小蓝执行`git merge origin/master`合并远程最新的更新
    ![](./git多人协作/5.png)
    - 小蓝执行`git push`更新远程仓库
    ![](./git多人协作/6.png)

## 远程分支受保护,不可以推送
master分支受保护, 不允许开发人员直接push, 而是由管理人员在远程仓库操作. 所以小红和小蓝要新建分支进行写作.

1. 两人`git clone`复制远程仓库
![](./git多人协作/7.png)
2. 小黄在本地创建新的分支`featureA`(origin/master副本)`git checkout -b featureA origin/master`, 小蓝在本地创建新的分支`feature1` `git checkout -b feature1 origin/master`
![](./git多人协作/8.png)
3. 小黄在本地`featureA`分支提交`commit2`, 小蓝在本地`featureB`分支提交`commit3`
![](./git多人协作/9.png)
4. 小黄将本地修改`git push`到远程, 注意远程没有`featureA`分支, 所以会自动创建
![](./git多人协作/10.png)
5.  - 小黄告诉小蓝, 已经`featureA`已经开发完成, 需要小蓝这边也集成到`featureA`. 小蓝执行`git fetch`(如果执行git push 则远程会多一个feature1的分支)
    ![](./git多人协作/11.png)
    - `git merge origin/featureA` 小蓝合并小黄更新的分支
    ![](./git多人协作/12.png)
    - `git push origin feature1:featureA` 将`feature1`推动到`origin/featureA` 更新本地origin/featureA分支, 并同步到远程仓库
    ![](./git多人协作/13.png)
