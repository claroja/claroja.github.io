# process_pool


## controller
管理pod的中间层, 只需操作controller我们需要怎样的pod, 它就会自动创建并帮忙维护, 比如出现故障会进行重启
- ReplicaSet: 指定数量, 数量变更, 镜像版本变更
- Deployment: 继承ReplicaSet, 并多加滚动升级和版本回退
- Horizontal Pod Autoscaler: 根据负载自动扩容
- DaemonSet: 在指定Node运行一个副本, 用于守护进程
- Job: 完成任务立即退出, 用于执行一次性任务
- Cronjob: 周期性执行
- StatefulSet: 有状态应用

### ReplicaSet(RS)
- 创建
`kubectl create -f [YAML_PATH]`
- 删除
  - 删除controller和pods `kubectl delete rs [NAME]`
  - 只删除controller`kubectl delete rs [NAME] --cascade=false`
- 保证一定数量的pod能够正常运行, 支持扩缩容
通过`spec.replicas`来控制
`kubectl edit rs NAME` 弹出yml文件修改
`kubectl scale rs NAME --replicas=2` 命令行指定
- 版本镜像升级
通过`spec.template.spec.image`来控制
`kubectl edit rs NAME` 弹出yml文件修改
`kubectl set image rs NAME --image=[NAME]` 弹出yml文件修改

```yml
piVersion: apps/v1
kind: ReplicaSet
metadata:
  name: demo-rc
  labels:
    app: demo-rc
spec:
  replicas: 2
  selector:
    matchLabels:
      app: demo-rc
  template:
    metadata:
      labels:
        app: demo-rc
    spec:
      containers:
      - name: httpd
        image: httpd
```

### Deployment
- 继承ReplicaSet所有功能
- 支持发布的停止和继续
- 支持版本的更新和回退

当使用`kubectl create deplpyment`创建时, 可以查看pods信息和rs信息
- pod命名方式: deployment-rs(随机串)-pod(随机串) `kubectl get deployments`(查看控制器) 
- rs命名方式: deployment-rs(随机串) `kubectl get rs`(查看副本) 
- deployment命名方式: deployment `kubectl get pods`(查看控制器的pods)
#### 基础操作
##### 命令行控制
- 创建控制器 `kubectl run deployment [NAME] --image [NAME] --port [NUM] --replicas [NUM]`
image: 使用的镜像
port: 端口
replicas: 副本数量, 一个controller包含多个pod, 使用label来建立关系, 默认是 `run:DEPLOYMENT_NAME`
- 查看容器 `kubectl get deployment`
- 详细描述 `kubectl describe deployment`
- 删除controller `kubectl delete deployment`


##### 配置文件控制
`kubectl create/apply -f [YAML_PATH]`
创建了一个ReplicaSet负责启动三个nginx Pods：
```yml
apiVersion: apps/v1
kind: Deployment
metadata: # 定义controller基本信息
  name: nginx-deployment # controller 唯一名称
spec: # 定义controller 内容
  replicas: 3 # 3个pod副本
  selector: # controller查找管理的pods, 和template.metadata.labels对应
    matchLabels:
      app: nginx
  template: # 定义pod基础信息
    metadata:
      labels: # 给pod打标签
        app: nginx
    spec: # 定义pod内容
      containers:
      - name: nginx # 容器名为nginx
        image: nginx:1.14.2 # 容器image为
        ports:
        - containerPort: 80
```
以上配置文件可以分为二个部分
1. 第一部分 deployment 元信息
```yml
apiVersion: apps/v1
kind: Deployment
metadata: # 定义controller基本信息
  name: nginx-deployment # controller 唯一名称
spec: # 定义controller 内容
  replicas: 3 # 3个pod副本
  selector: # controller查找管理的pods, 和template.metadata.labels对应
    matchLabels:
      app: nginx
  template: # 定义pod基础信息
```
2. 第二部分 pod模板
```yml
  template: # 定义pod基础信息
    metadata:
      labels: # 给pod打标签
        app: nginx
    spec: # 定义pod中container
```


#### 特殊功能
##### 更新策略
重建更新(Recreate):全部删除,一起更新
滚动更新(RollingUpdate):(默认)删一点,更新一点
```yml
strategy:
  type:
    Recreate/RollingUpdate:
```

##### 版本回退
每次更新时, 保存ReplicaSet, 如果想要看到详细的迭代信息需要使用`kubectl create -f [YAML_PATH] --record`

`kubectl rollout`用来控制升级
- status 显示升级状态
`kubectl rollout status deployment web` 查看升级状态
- history 历史记录
查看历史版本`kubectl rollout history deployment web` 
- undo 回滚到上一个版本
回滚到上一个版本`kubectl rollout undo deployment web`
- 金丝雀发布
更新一部分pod, 暂停看效果, 好的话继续, 不好就回退
  - pause
  `kubectl rollout pause deployment [NAME]`
  - resume
  `kubectl rollout resume deployment [NAME]`
  - restart


### Horizontal Pod Autoscaler(HPA)
根据定义的指标, 来动态scale

```yml
apiVersion:
kind: HorizontalPodAutoscaler
metadata:
  name: auto
spec:
  minReplicas: 1 # 最少1个
  maxReplicas: 10 # 最大10个
  targetCPUUtilizationPercentage: 3 # 3% Cpu使用率超3%则增容
  scaleTargetRef: # 调整的对象
    apiVersion: apps/v1
    kind: Deployment 
    name: nginx
```

### DaemonSet
用于节点日志收集和节点监控
- 每当添加一个Node,自动添加pod
DaemonSet 确保全部（或者某些）节点上运行一个Pod的副本。
- 如果指定了`.spec.template.spec.nodeSelector`则在匹配的节点上创建 Pod。
- 如果指定了`.spec.template.spec.affinity`, 将在能够与节点亲和性匹配的节点上创建 Pod。
- 如果根本就没有指定，则 DaemonSet Controller 将在所有节点上创建 Pod。


### StatefulSets
 Deployment不同的是，StatefulSet 为每个Pod维护了一个有粘性的ID
每个pod都是独立, 保持pod的启动顺序和唯一网络标识符, 持久存储
sts.yml
