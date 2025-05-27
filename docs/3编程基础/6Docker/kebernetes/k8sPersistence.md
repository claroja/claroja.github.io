# matcher


## 持久化存储
容器销毁, 容器中的数据被清除
- 简单存储: EmptyDir, HostPath, NFS
- 高级存储: PV, PVC
- 配置存储: ConfigMap, Secret
### EmptyDir
EmptyDir是Host上的空目录, 当Pod销毁时, EmptyDIr中的数据会被永久删除.
应用场景:
- 临时数据存储
- 同一个pod多个container数据共享

`emptydir`是本地存储, pod重启后, 数据就不存在了

```yml
apiVersion: v1
kind: Pod
metadata:
  name: redis
spec:
  containers:
  - name: redis
    image: redis
    volumeMounts:  # 挂载pod中的volumes
    - name: redis-storage  # pod volume的名称
      mountPath: /data/redis  # container中的路径
  volumes:  # pod中开启volumes
  - name: redis-storage  # 在pod中开启目录
    emptyDir: {}  # 默认随机分配
```


### HostPath
将Node主机中的实际目录挂在pod中.
```yml
spec:
  containers:
    volumeMounts:  # 挂载pod中的volumes
    - name: logs-volume  # pod volume的名称
      mountPath: /data/redis  # container中的路径
  volumes:
    - name: logs-volume
      hostPath:  # 使用Node物理机的路径
        path: /root/logs
        type: DirectoryOrCreate  # 默认, 目录存在就使用, 不存在就创建
```

### nfs 网络存储
搭建一台NFS服务器, 将Pod中的数据存储到NFS服务器上.

1. 配一台nfs服务器
`yum install -y nfs-utils`
`vi /etc/exports` -> `/data/nfs *(rw, no_root_squash)`
2. 启动nfs
`systemctl start nfs`
3. node节点上安装nfs
`yum install -y nfs-utils`
4. k8s部署应用
`nfs-nginx.yaml`

```yml
spec:
  containers:
    volumeMounts:
    - name: wwwroot
      mountPath: /usr/share/nginx/html
  volumes:
    - name: wwwroot
      nfs:
        server: 192.168.13.21
        path: /data/nfs
```

### PV和PVC
`管理员`封装NFS构建过程, 直接给`用户`提供接口
PV(Persistent Volume) 管理员维护
PVC(Persistent Volume Claim) 用户维护

#### 管理员配置pv
没有namespace, 集群资源
```yml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv
spec:
  capacity:  # 存储能力
    storage: 5Gi  # 能存多少数据
  accessModes:  # 访问模式
    - ReadWriteMany  # 读写 能让多个pvc挂载
  nfs:
    path: /k8s/nfs
    server: 192.168.44.134
```





#### PVC用户使用
```yml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc
spec:
  accessModes:  # 访问模式
    - ReadWriteMany
  resources:  # 声明需要的资源
    requests:
      storage: 5Gi
```

#### 生命周期
1. Available 可用, 但还未被PVC绑定
2. Bound PV被PVC绑定
3. Released PVC被删除, 但还未被集群重新使用
4. Failed PV自动回收失败


### config
- 在运行时, 支持动态更新

1. 创建configmap
```yml
apiVersion: v1
kind: ConfigMap
metadata:
  name: configmap
data:
  info:  # 在container中生成info文件 ,内容是 username和password
    username: wang
    password: 12345
```
2. 使用configmap
```yml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
    - name: busybox
      image: busybox
      command: [ "/bin/sh","-c","cat /etc/config/info" ]
      volumeMounts:
      - name: config-volume
        mountPath: /etc/config
  volumes:
    - name: config-volume
      configMap:
        name: configmap
```

### scret
1. 使用base64对数据进行编码
`echo -n 'admin' | base64` 
`echo -n '123455' | base64`
2. 编写secret.yml
```yml
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
type: Opaque
data:
  username: YWRtaW4=
  password: MTIzNDU2
```

3. 使用scret
```yml
apiVersion: v1
kind: Pod
metadata:
  name: mypod
spec:
  containers:
  - name: nginx
    image: nginx
    volumeMounts:
    - name: foo
      mountPath: "/etc/foo"
  volumes:
  - name: foo
    secret:
      secretName: mysecret
```
