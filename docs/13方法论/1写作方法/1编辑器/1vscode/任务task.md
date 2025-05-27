# 任务



## 最佳实践


使用task, 简化pandoc命令操作:
1. 简化前, 每次md转docx都需要手动输入命令, 复制文件名
2. 简化后, 只需选中md文件, 使用快捷键alt+shift+r执行如下的task即可

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "pandoc",
            "type": "shell",
            "command": "pandoc.exe",
            "args": [
                "${file}",
                "-o",
                "${fileDirname}\\${fileBasenameNoExtension}.docx",
                "-d",
                "option.yml"
            ],
        }
    ]
}
```

快捷键配置:
```json
{
    "key": "shift+alt+r",
    "command": "workbench.action.tasks.runTask"
}

```

✨Markdown Preview Enhanced的pandoc插件很难用, 需要在文章front-matte里指定输出的文章类型, 不够优雅

## 用途说明

允许你定义任务，比如编译、构建、测试、运行相关脚本等。

## 简介
定义命令行任务, 可以链接多个任务顺序执行, 比如编译, git等


1. `label`: `task`的名称
2. `type`: 使用什么运行命令, `shell`(cmd, bash, powershell), `process`, 不太清楚两者的区别
3. `command`: 命令的路径, 比如git.exe
4. `args`: ✨带变量的参数要分开写, 比如`["--fps","10"]`, 不能写成`["--fps 10"]`
5. `group`:
    - `kind`: `build`, 编译好的配置文件, 以直接使用`alt+b`来运行(首先用要编译, 可以使用`alt+b`来配置)
    - `isDefault`: 默认运行
6. `presentation`: 信息展示的行驶
    - `reveal`: `silent`  是否查看task的输出, `silent`不查看
    - `revealProblems`: `onProblem`
    - `close`: `true` 自动关闭

## 配置文件
在根目录创建`task.json`

```json
{
    // See https://go.microsoft.com/fwlink/?LinkId=733558
    // for the documentation about the tasks.json format
    "version": "2.0.0",
    "tasks": [
        {
            "label": "manim",
            "type": "shell",
            "command": "manim",
            "args": [
                "${file}",
                "-ql",
                "--format",
                "gif",
                "--fps",
                "5",
                "CodeFromString"
            ],
            "problemMatcher": [],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "presentation": {
                // "reveal": "silent",
                "revealProblems": "onProblem",
                "close": true
            }
        }
    ]
}
```







参考:
https://code.visualstudio.com/docs/editor/tasks
https://stackoverflow.com/questions/47946868/how-to-get-rid-of-terminal-will-be-reused-by-tasks-press-any-key-to-close-it