# __import__


## namespace
多租户情况下，实现资源隔离, 不同的namespace中的pod, 不能访问
可以针对每个namespace做资源配额
### 命令行控制
- 查看 `kubectl get ns [NAME]`
默认4个namespace
```shell
default 用户创建的pod默认在此命名空间
kube-public 所有用户均可以访问，包括未认证用户
kube-node-lease node之间的心跳维护 v1.13加入
kube-system kubernetes集群在使用
```
- 增加 `kubectl create ns [NAME]`
- 删除 `kubectl delete ns [NAME]`

### 配置文件控制
`kubectl [create/delete/get] -f YML_PATH`
```yml
apiVersion: v1
kind: Namespace
metadata:
name: demons1
```