---
title: Hexo_NexT主题
date: 2021-05-13 18:37:34
tags: [写作]
categories:
    - [工具, Hexo]
toc: true
---

安装Hexo与NexT
<!--more-->
## 初始化Hexo
详细参考[官网](https://hexo.io/zh-cn/)
```sh
hexo init blog
cd blog
npm install
```



## 配置Hexo
- 1.配置静态资源
配置文章中的静态资源,一个文章对应一个静态文件夹,详细参考[官网](https://hexo.io/zh-cn/docs/asset-folders)
在根目录下打开 **_config.yml**
```json
post_asset_folder: true # 需要修改,直接在后面添加会报错
marked: # 直接添加,是插件的内容,需要先安装 npm install hexo-renderer-marked --save
  prependRoot: true
  postAsset: true
```

- 2.配置推送
```json
deploy:
  type: git
  repo: https://github.com/Claroja/claroja.github.io.git
  branch: master
```

## 安装NexT主题
克隆主题到themes文件夹下,详细参考[NexT](https://github.com/theme-next/hexo-theme-next)
```shell
git clone https://github.com/theme-next/hexo-theme-next themes/next # 该命令会自动创建themes/next文件夹
```



## 配置NexT主题

在根目录下创建 **_config.next.yml**文件
```json
scheme: Gemini # 主题

toc:
  enable: true
  number: true
  wrap: false
  expand_all: true # 强制展开所有列表
  max_depth: 6

codeblock:
  # Available values: normal | night | night eighties | night blue | night bright | solarized | solarized dark | galactic
  highlight_theme: solarized
  copy_button:
    enable: false
    show_result: false
    style:

back2top:
  enable: true
  sidebar: true # 在sidebar上
  scrollpercent: true # 显示百分比

reading_progress:
  enable: true # 阅读进度条
  position: top
  color: "#37c6c0"
  height: 3px

motion:
  enable: false # 关闭载入动画
```
## 注意
在更改 **_config.yml**或者 **_config.next.yml**的配置时,`hexo g --watch`因为缓存的原因不会立即更新,需要手动 **先删除public文件夹** 再次运行命令才能看到效果

## 参考
+ [15wylu的博客](https://blog.csdn.net/qq_32767041/category_8927471.html)
