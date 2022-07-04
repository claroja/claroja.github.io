---
title: k8sService
toc: true
date: 2021-07-01 22:31:28
tags:
categories:
---
# service
问题:
- pod 重启后其IP会更改
- pod IP仅可在集群内部访问
解决:
- service可以为一组pod提供统一的入口地址，并且将请求负载分发到后端的各个pod上。
- 服务发现, 当pod重启后, 会自动注册
本质:
kube-proxy服务, 运行在每个Node节点上.当创建Service时, 向etcd写入信息, 由kube-proxy来解析

## 命令控制
- 创建service `kubectl expose deployment [NAME] --name=[NAME] --type=[ClusterIP] --port=[NUM] --target-port=[NUM]`
  - type:
    ClusterIP在集群内访问,
    NodePort在集群外访问, 会先创建ClusterIP, 并设置`target-port=port`
  - port:每个pod暴露的端口
  - target-port: pod组对应service暴露的端口
- 获得service `kubectl get/describe svc`
- 删除service `kubectl delte svc`

## 配置文件控制
`kubectl create/apply -f [YAML_PATH]`

|类型|描述|
|--|--|
|ClusterIP|默认, 只能集群内部访问|
|HeadLiness|不分配Cluster IP, 通过service域名查询|
|NodePort|集群内部访问外部访问|
|LoadBalancer|外界负载均衡服务|
|ExternalName|将外部IP引入|

### ClusterIP/HeadLiness
```yml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  selector: # 选择指定标签的Pod
    app: MyApp
  clusterIP: 10.74.44.22 # serviceIP地址, 默认自动生成, 设置为None则为HeadLiness
  ports:
    - protocol: TCP # 默认协议是TCP, 可以不写
      port: 80 # service的端口
      targetPort: 9376 # 一组或一个pod, 集群内部暴露
```

### NodePort
```yml
apiVersion: v1
kind: Service
metadata:
  name: my-service
spec:
  type: NodePort
  selector:
    app: MyApp
  ports:
      # 默认情况下，为了方便起见，`targetPort` 被设置为与 `port` 字段相同的值。
    - targetPort: 80 # pod端口
      port: 80 # service端口
      nodePort: 30007 # 主机端口（默认：30000-32767）
```



### Ingress
NodePort 在每个节点都会启动端口, 所以每个端口只能使用1次, 而实际访问中根据不同域名跳转到不同端口服务中.
Ingress 公开了从集群外部到集群内服务的 HTTP 和 HTTPS 路由. 
相当于Nginx 7层的负载均衡器.
`kubectl get/describe ing`查看负载均衡器

1. http
```yml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: minimal-ingress
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: xxx.com 访问该域名, 转到下面定义的test service 80端口上去(需要解析域名, 测试用hosts文件即可).另外记得加NodePort端口号
    http:
      paths:
      - path: /
        backend:
          serviceName: nginx-service
          servicePort: 80
```

2. https
要添加证书文件
```yml
spec:
  tls:
    - hosts:
      - xxx.com
      secretName: tls-secret # 指定秘钥
```