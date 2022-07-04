---
title: k8sPods
toc: true
date: 2021-07-01 22:27:04
tags:
categories:
---
# Pods
- 共享网络
一个 Pod 内的多个容器之间可以通过 localhost 来进行通信
不同的 Pod 有不同的 IP, 不同pod使用IP来通信
- 共享存储
一个 Pod 里的多个容器可以共享存储卷，这个存储卷会被定义为 Pod 的一部分，并且可
以挂载到该 Pod里的所有容器的文件系统上。

实现共享的原理是:每个pod都是先初始化一个根容器, 然后将我们创建的容器加入到根容器.
## 使用命令行控制
- 增加 `kubectl run nginx --image=nginx:1.17.1 --port=80`
默认使用controller创建, 既`kind: Deployment`
- 查看 `kubectl get pod`
`kubectl get pods -n kube-system` 查看某个namespce下的pods, 默认是default
`kubectl get pod -o wide` 显示额外的信息
- 查看详细信息 `kubectl describe pod [NAME]`
- 删除 `kubectl delete pod [NAME]` 
使用controller创建的pod 删除pod会自动生成, 要直接删除controller`kubectl delete deployment [NAME]`


## 使用配置文件控制
`kubectl create/apply/delete -f YML_PATH`

```yml
apiVersion: v1
kind: Pod
metadata:
  name: pod1
spec:
  containers:
  - name: ngninx-pod
    image: nginx:latest
    ports:
    - name: nginxport
      containerPort: 80
```

## 参数详解
### 一个pod多个container
运行多个协同工作的container的 Pod, 这些container共享存储和网络
```yml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
spec:
  containers:
  - name: myapp-container1
    image: busybox:1.28
    command: ['sh', '-c', 'echo The app1 is running! && sleep 3600']
  - name: myapp-container2
    image: busybox:1.28
    command: ['sh', '-c', 'echo The app2 is running! && sleep 3600'] 
```
### command和args
- 如果无command无args, 使用Dockerfile的配置
- 如果有command无args, 使用command覆盖Dockerfile的配置
- 如果无command有args, Dockerfile的ENTRYPOINT被执行, 使用args参数
- 如果有command有args, 使用command+args覆盖Dockerfile的配置

### 环境变量
设置环境变量列表
```yml
env:
- name: 'username'
  value: 'admin'
- name: 'password'
  value: '123'
```
### 端口
设置pod向外暴露的端口

```yml
spec:
  ports:
  - name: test
    containerPort: 80
    protocol: TCP
```

### 限制容器资源
```yml
spec:
  resources:
    limits: # 最大显示
      cpu: "2"
      memory: "10Gi"
    requests: # 建议
      cpu: "1"
      memory: "10Mi"
```


## pod YML详解
查看字段信息`kubectl explain pod` `kubectl explain pod.metadata` 

|参数名|字段类型|说明|
|--|--|--|
|apiVersion|String|集群定义, `kubectl api-versions`查看|
|kind|string|集群定义, `kubectl api-resources`查看|
|metadata|object|源信息|
|spec|object|内容配置|
|metadata.name|string|资源的名称|
|metadata.namespace|string|资源的namespace|
|metadata.labels|object|资源的labels|
|spec.containers[]|object|定义容器的列表|
|spec.nodeName|string|根据nodeName将pod调度到指定Node上|
|spec.nodeSelector|map[]|根据标签将pod调度到指定Node上|
|spec.hostNetwork|boolean|默认false, 是否使用宿主机网络(容易冲突,还是使用集群分配的好)|
|spec.volumes|object[]|存储卷, 定义pod挂载点|
|spec.restartPolicy|string|重启策略|
|spec.containers[].name|String|	容器的名字|
|spec.containers[].image|String|	容器的镜像|
|spec.containers[].imagePullPolicy|String| 默认`IfNotPresent`, 如何拉取镜像|
|spec.containers[].command[]|List|DockerFile的EntryPoint|
|spec.containers[].args[]|List|DockerFile的CMD|
|spec.containers[].env[]|List|DockerFile的ENV|
|spec.containers[].env[].name|String|环境变量名称|
|spec.containers[].env[].value|String|环境变量值|
|spec.containers[].ports[]|List|容器需要用到的端口列表|
|spec.containers[].ports[].name|String|端口名称|
|spec.containers[].ports[].containerPort|String|容器需要监听的端口号|
|spec.containers[].ports[].protocol|String|端口协议, 默认值为TCP|
|spec.containers[].ports[].hostPort|String|容器映射到主机的端口, 多个controller会出问题, 不设置|
|spec.containers[].ports[].hostIP|String|容器映射到主机的IP, 多个controller会出问题, 不设置|
|spec.containers[].resources|Object|资源限制和资源请求的值|
|spec.containers[].resources.limits|Object|设置容器运行时资源的运行上限|
|spec.containers[].resources.limits.cpu|String|CPU的限制, 单位为core数|
|spec.containers[].resources.limits.memory|String| MEM 内存的限制，单位为 MIB，GIB|
|spec.containers[].resources.requests|Object|容器启动和调度室的限制设置|
|spec.containers[].resources.requests.cpu|String|CPU请求，单位为 core 数|
|spec.containers[].resources.requests.memory|String|内存请求, 单位为 MIB, GIB |

## 注意

不要直接创建 Pod, 使用controller(Deployment/Job)来创建Pod.
controller通过使用`PodTemplate`来生成实际的pod, 如下:
```yml
apiVersion: batch/v1
kind: Job
metadata:
  name: hello
spec:
  template: # 这里是 Pod 模版
    spec:
      containers:
      - name: hello
        image: busybox
        command: ['sh', '-c', 'echo "Hello, Kubernetes!" && sleep 3600']
```

# pod生命周期
1. pod创建
2. 创建初始化容器(init container)
3. 运行用户容器(main container)
  3.1. 容器启动后狗子(post start), 容器终止前钩子(pre stop)
  3.2. 容器存活性探测(liveness probe), 就绪性探测(readiness probe)
4. pod终止


## 初始化容器
- 初始化容器在用户容器之前创建,
- 初始化容器按顺序创建
```yml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
spec:
  containers:
  - name: myapp-container
    image: busybox
    command: ['sh', '-c', 'echo The app is running! && sleep 3600']
  initContainers:
  - name: init-myservice
    image: busybox
    command: ['sh', '-c', 'until nslookup myservice; do echo waiting for myservice; sleep 2; done;']
  - name: init-mydb
    image: busybox
    command: ['sh', '-c', 'until nslookup mydb; do echo waiting for mydb; sleep 2; done;']
```
## 容器钩子
- 在容器开始后和结束前执行
- 使用`spec.containers.lifecycle.postStart/preStop`来配置, 可选:
  - `exec`执行命令
  - `HTTPGet` http请求
  - `tcpSocket` socket请求
```yml
spec:
  containers:
    lifecycle:
      postStart:
        exec:
          command: ["/bin/sh","-c",...]
      preStop:
        exec:
          command: ["/bin/sh","-c",...]
```

## 容器探测
- 探测方式
  - liveness: pod是否正常运行, 决定是否重启pod
  - readless: pod是否可以接受请求, 决定是否请求转发给pod

- 使用`spec.containers.livenessProbe`来配置, 可选:
  - `exec`执行命令
  - `HTTPGet` http请求
  - `tcpSocket` socket请求
```yml
spec:
  containers:
    livenessProbe:
        exec:
          command: ["/bin/sh","-c",...]
```

## 重启策略
`spec.restartPolicy`可取Always、OnFailure 和 Never。默认值是 Always。

- Always: 默认, 无论如何都重启
- OnFailure: 异常终止重启
- Never: 不重启

|取值|描述|
|--|--|
|Pending| Pod被调度的时间和通过网络下载镜像的时间|
|Running|Pod 已经绑定到了某个节点，Pod 中所有的容器都已被创建, 并且至少一个在运行|
|Succeeded|Pod 中的所有容器都已成功终止|
|Failed|至少一个容器以非0状态退出或者被系统终止|
|Unknown|Pod 所在主机通信失败|

pod中container的状态
`kubectl describe pod <pod 名称>` 
|取值|描述|
|--|--|
|Waiting|初始化, 比如拉取容器镜像|
|Running|容器正在执行状态|
|Terminated|已经开始执行并且或者正常结束或者因为某些原因失败|


# pod调度策略
- 自由调度: 默认通过Scheduler来决定pod在哪个node上执行
- 定向调度: NodeName NodeSelector
- 亲和性调度: NodeAffinity(和哪个node关系近), PodAffinity, PodAntiAffinity
- 污点与容忍: Traints, Toleration

## 强制性
1. NodeName
强制将Pod指向某个Node, 跳过Scheduler的调度逻辑
```yml
spec:
  nodeName: node1
```
2. NodeSelector
强制将pod指向具有某个标签的Node上, 跳过Scheduler的调度逻辑
```yml
spec:
  nodeSelector:
    key: vallue
```

## (反)亲和性
亲和性: 当两个应用频繁交互时
反亲和性: 当多副本时, 打散到多个node, 实现高可用
`pod.spec.affinity.nodeAffinity/PodAffinity/PodAntiAffinity`

## 污点
node上设置污点, 则和pod排斥, 不让pod进来
- PreferNoSchedule: 尽量不要来, 除非没有其他节点
- NoSchedule: 新的pod不要来, 已经来没关系
- NoExecute: 新的pod不要来, 已经有的也要走

添加污点: `kubectl taint nodes [NAME] [KEY=VALUE:effect]`
去除污点: `kubectl taint nodes [NAME] [KEY:effect-]`
去除所有: `kubectl taint nodes key-`

## 容忍(Toleration)
pod忽略node的污点, 强行进去
```yml
spec:
  toleration:
  - key:
    operator:
    value:
    effect:
```

### container 设置

```yml
apiVersion: v1
kind: Pod
metadata:
  name: command-demo
spec:
  containers:
  - name: test # 容易的唯一名称
    image: debian #容器的镜像
    imagePullPolicy: IfNotPresent # 默认值, 拉取镜像的策略
    command: ["printenv"] # Dockerfile中的 ENTRYPOINT
    args: ["HOSTNAME", "KUBERNETES_PORT"] # Dockerfile中的 CMD
    ports:
    - name: http # 端口名称
      containerPort: 80 # container暴露的端口
      protocol: TCP # 默认值
    - name: https # 端口名称
      containerPort: 443 # container暴露的端口
      protocol: TCP # 默认值
```