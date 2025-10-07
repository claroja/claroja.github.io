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



## [pylance](https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance)

代码分析工具, 如补全, 高亮等.



1. [`python.autoComplete.extraPaths`](https://code.visualstudio.com/docs/python/settings-reference#_autocomplete-settings): python插件的设置: 设置自动补全的额外路径
2. `python.analysis.extraPaths`: pylance插件的设置:
3. `python.analysis.nodeExecutable`: pylance插件的设置:
4. `python.analysis.exclude`: pylance插件的设置:













## [intellisense](https://code.visualstudio.com/docs/editor/intellisense)

建立在pylance的基础上, 额外提供个性化的辅助变成功能:
1. 整行代码的输入建议
2. 代码补全的星标建议(根据用户行为推荐)


```json
{
    // 在一下情况中, 是否启用suggestions
    "editor.quickSuggestions": {
        "other": true,
        "comments": false,
        "strings": false
    },
    // 经常使用的排在列表头
    "editor.suggestSelection": "recentlyUsed",
    // 将snippet提示放在最前
    "editor.snippetSuggestions": "top",
    // 禁止abc提示
    "editor.suggest.showWords": false,
    // 预先展示补全效果
    "editor.suggest.preview": true,
}
```




## fencedCodeBlock
[参考](https://danielabaron.me/blog/vscode-markdown-basics-custom-fenced-languages/)







