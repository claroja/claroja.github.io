安装`python`插件，会附带安装`pylance`插件。

`Python: Select Linter` 选择`pylint`格式化工具，并进行安装。


Alt + e | 在python console中运行代码
Alt + r | 执行python文件
Alt + ← | 回到上一次鼠标位置
Alt + → | 回到下一次鼠标位置
F12 | 去往定义处
Ctrl + F12 | 去往实现处

# debug传参
1. 点击Debug框 -> 点击 `create a launch.json file` -> 选择python

```json
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python: 当前文件",
            "type": "python",
            "request": "launch",
            "program": "${file}",
            "console": "integratedTerminal"
        }
    ]
}
```

参数|描述
--|--
name|配置的名称
type|类型, 这里是python
request|`launch`是本地的文件, `attach`是连接一运行的进程
program|要debug的程序文件
python|解释器的路径
pythonArgs|传递给解释器的参数, 一般不用
args|传递给python程序的参数, `"args": ["--port", "1593"]`




debug快捷键|描述
--|--
F5 | 开启debug or continue
Shift + F5 | 停止debug
F6 | restart debug
F7 | step over
F8 | step into
Shift F8 | step out
Ctrl + d t | 定位到debug console
Ctrl + d e | 在debug console 中执行
Ctrl + d w | 将选中变量添加到watch，需要配合visual模式使用
Ctrl + d d | disable 所有breakpoint
Ctrl + d a | enable 所有breakpoint
Ctrl + d r | 删除所有breakpoint
Ctrl + d b | 增加 或 删除断点
Ctrl + d n | 定位到下一个断点
Ctrl + d p | 定位到上一个断点






快捷键|描述
--|--
Alt + e | 在python console中执行选中语句