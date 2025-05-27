# python


## python

快捷键|描述
--|--
`Alt+Shift+e`| execute Selection/line(pyCharm)
`Alt+e`| run file in Terminal
`Alt+d`| debug file
`F6` |restart
`F7` |stepOver
`F8` |stepInto
`Shift+F8`|stepOut


## debug
`Ctrl+d Ctrl+b` conditionalBreakpoint
`Ctrl+d b` toggleBreakpoint
`Ctrl+d d` disableAllBreakpoints
`Ctrl+d r` removeAllBreakpoints
`Ctrl+d w` selectionToWatch
`Ctrl+d n` goToNextBreakpoint
`Ctrl+d p` goToPreviousBreakpoint
`Ctrl+d t` focusRepl
`Ctrl+d e` selectionToRepl
`Ctrl+d a` enableAllBreakpoints



## 脚本传参
### 直接运行程序传参
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

