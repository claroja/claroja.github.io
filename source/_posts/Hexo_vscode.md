---
title: Hexo搭配VSCode
date: 2021-05-13 18:55:37
toc: true
tags: [写作]
categories:
    - [工具, Hexo]
---

hexo server不能热更新,替换为live-server实现热更新.
<!--more-->

## 实现思路
1. 根目录中运行`hexo g --watch`来监听MD文件改动,实时生成静态文件
2. **public** 目录中运行 `live-server --port=5001`来监听静态文件,实时展示在浏览器中

其中(`live-server`是通过`npm install live-server -g`来安装的)

## 配合VSCode
VSCode中有Live-Server插件可以直接使用(只能启动一个端口),另外得益于可以直接开两个CMD窗口,所以用起来很方便.
![Hexo搭配VSCode写一篇博客](1.png)
