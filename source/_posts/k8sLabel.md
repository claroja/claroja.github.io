---
title: k8sLabel
toc: true
date: 2021-07-01 22:29:56
tags:
categories:
---
# label
以key: value的形式附加在资源上(Node/Pod/Service)
## 命令行控制
- 给pod添加标签 `kubectl label pod [NAME] [KEY=VALUE]`
- 查看pod的标签 `kubectl get pod --show-labels`
- 根据lable查找pod `kubectl get pod -l [KEY=VALUE]`
- 覆盖已有的标签key `kubectl label pod [NAME] [KEY=VALUE] --overwrite`
- 删除标签 `kubectl label pod [NAME] [KEY]-`

## yaml文件控制
Label使用`metadata.labels`字段, 来为对象添加标签，通过`spec.selector`来引用对象
`kubectl create/apply -f [YAML_PATH]`
```yml
apiVersion: v1
kind: Pod
metadata:
  name: myapp-pod
  labels:
    app: myapp
    version: 1
```