# changeVar


kubernetes，简称 K8s，是用 8 代替 8 个字符“ubernete”而成的缩写.
是容器编排工具, 占有率最高(Docker自己的Swarm占有率太低).
<!--more-->
- 自我修复 容器崩溃, 能迅速启动新的容器
- 弹性伸缩 对容器数量进行调整
- 服务发现 自动发现依赖的服务
- 负载均衡 多个pod, 自动实现负载均衡
- 版本回退 可以回退版本
- 存储编排 支持多种类型存储卷

### 组件:
- master(控制节点)
  - ApiServer 唯一`控制`(非服务)的入口, 接受客户端命令, 进行鉴权等
  - Scheduler 资源调度, 将pod调度到不同的node上(进行计算)
  - ControllerManager, 负责维护集群状态(进行执行)
  - Etcd: 存储对象的信息
- node(工作节点)
  - KubeProxy 负责服务发现和负载均衡
  - Kubelet 控制docker, 来创建/更新/销毁容器
  - Docker

### 概念:
Master: 集群控制节点
Node: 物理节点
Pod: k8s最小控制单元, 一个pod可以有一个或多个container
Controller: 管理Pod, 比如启动pod, 停止pod, 伸缩pod
Service: Pod对外服务的统一入口
Label: 对Pod进行分类, 方便Controller和Service进行管理
NameSpace: 隔离不同Pod的运行环境


### 安装
使用[minikube](https://minikube.sigs.k8s.io/docs/)
在虚拟机开启时,使用
`minikube start --driver=none`
可能遇到的问题:
- `yum install conntrack`
- `echo "1">/proc/sys/net/bridge/bridge-nf-call-iptables`
或者修改`etc/sysctl.d/kubernetes.conf` 文件 `net.bridge.bridge-nf-call-iptables = 1`

安装[kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl-linux/#install-using-native-package-management)

### 命令
1. 通过命令
通过`get/describe` `delete` `creeate` 等命令 对`namespace(ns), pod, label, deployment(deploy), service(svc)对象进行管理
  - 获取对象信息
  `kubectl get/describe OBJECT NAME PARAM`
  - 

`kubectl run nginx --image=nginx:1.17.1 --port=80`
2. 通过配置文件
  - create 创建对象
  `kubectl create -f nginx.yaml`, `kubectl apply -f configs/`, `kubectl apply -R -f configs/`
  - delete 删除对象
  `kubectl delete -f nginx.yaml -f redis.yaml`
  - replace 更新对象或创建(没有则创建, 有了则更新)
   `kubectl replace -f nginx.yaml`
