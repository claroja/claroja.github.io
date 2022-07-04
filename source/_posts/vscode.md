---
title: vscode
toc: true
date: 2021-06-14 13:57:45
tags:
categories:
    - [工具, ide]
---
直接拷贝用户自定义的setting和快捷键
<!--more-->
# 配置文件
- 全局默认的设置 `>Preferences: Open Default Settings (JSON)`(优先级最低)
- 用户全局设置 `>Preferences: Open Settings (JSON)`(优先级终)
    文件保存在`C:\Users\USERNAME\AppData\Roaming\Code\User\settings.json`
- Workerspace配置`>Preferences: Open WorkSpace Settings (JSON)`(优先级最高)
    文件保存在`PROJECT_HOME\.vscode\settings.json`

```json
{
   "editor.fontSize": 18,
   "terminal.integrated.fontSize": 16,
   "workbench.startupEditor": "newUntitledFile",
   "files.autoSave": "onFocusChange",
   "editor.tabCompletion": "on",
   "debug.toolBarLocation": "docked", //将debug控制条放在debug pane里
   "editor.formatOnType": true,
   "editor.formatOnSave": true,
}
```


常用设置：
```json
{
    "editor.fontSize": 18,
    "terminal.integrated.fontSize": 16,
    "workbench.startupEditor": "newUntitledFile",
    "files.autoSave": "onFocusChange",
    "editor.tabCompletion": "on",
    "debug.toolBarLocation": "docked",
    // "editor.formatOnType": true,
    // "editor.formatOnSave": true,
    "security.workspace.trust.untrustedFiles": "open",
    "editor.suggestSelection": "first",
}
```

# 脚本传参
## 直接运行程序传参
使用VSCode的Task功能, 参考[官方文档](https://code.visualstudio.com/docs/editor/tasks):
1. 配置Task, Terminal -> Configure Tasks...
```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "Run Python with argument",
            "type": "process",
            "command": "python",
            "args": [
                "${file}",
                "test"
            ],
            "presentation": {
                "reveal": "always",
                "panel": "new"
            }
        }
    ]
}
```
参数|描述
--|--
label|task的名称
type|shell 或 process, 暂时不清楚二者的差别
command| 执行的程序, 比如bash, python等
args| 参数列表, `${file}`是目前打开的文件, 每个元素在命令行中用空格分隔.
presentation|如何输出, output is always revealed, new terminal is created on every task run.


2. 运行Task, Terminal -> Run Task...
[官方文档](https://code.visualstudio.com/docs/python/debugging)
