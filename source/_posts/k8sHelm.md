---
title: k8sHelm
toc: true
date: 2021-07-01 22:38:11
tags:
categories:
---

## Helm
Helm 是一个 Kubernetes 的包管理工具, 将之前打包好的 yaml 文件部署到kubernetes 上.
Helm 有 3 个重要概念：
- helm: 一个命令行客户端工具, 用于chart的创建、打包、发布和管理。
- Chart: yaml的集合
- Release: Chart应用的某个版本

```s
helm repo add aliyun https://kubernetes.oss-cn-hangzhou.aliyuncs.com/charts
helm repo remove aliyun
helm repo update
helm repo list
helm search repo stable

chart install
chart upgrade
chart rollback
```

## 使用开源chart
1. `helm search repo weave` 查看chart
2. `helm install ui stable/weave-scope` 安装chart
3. `helm list` `helm status ui` 查看信息
4. 修改 service Type: NodePort 即可访问 ui

## 自定义chart
1. `helm create mychart`
`tree mychart/`文件说明
mychart/
├── charts # 依赖的所有子chart
├── Chart.yaml  # Chart 的基本信息，包括名字版本等
├── templates  # 存放所有yaml模板文件. `{{ .Release.Name }}`可以获得版本号, 经常用name后
│ ├── deployment.yaml
│ ├── _helpers.tpl
│ ├── ingress.yaml
│ ├── NOTES.txt  # Chart帮助信息, helm install部署后展示给用户
│ └── service.yaml
└── values.yaml  # 存储templates模板中用到变量, templates文件可以使用`{{ .Values.Val }}`来取值.

2. `helm install web mychart/` 安装
3. `helm package mychart/` 打包发布给其他人