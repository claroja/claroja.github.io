# terminal

## 两种形式
主要是使用的是命令行模式
1. 传统命令行模式: 在vscode的底端
2. 编辑器命令行模式: 使用编辑器打开

## 快捷键
控制台英文名是`terminal`, 所以先导快捷键以`t`开头
快捷键|描述
--|--
`Ctrl + t Ctrl + t`| 开关控制台
`Ctrl + t Enter`| 定焦到控制台
`Ctrl + t s`| 分割并创建控制台
`Ctrl + t l`| 移动到右边的控制台
`Ctrl + t h`| 移动到左边的控制台
`Ctrl + t k`| 杀死当前控制台
`Ctrl + t c`| 清空控制台
`alt + h`|控制台光标左移
`alt + l`|控制台光标右移
`alt + 6`|控制台光标左移到端
`alt + 4`|控制台光标右移到端
`alt + d`|清空当前命令行内容
`ctrl + f`| 在命令行中搜索
`ctrl + r`| 搜索历史命令

只有`Ctrl+h`和`Ctrl+l`需要先定位到控制台才能执行

## 配置不同的终端

默认情况下`vscode`配置了三个终端`PowerShell`, `Command Prompt`(`CMD`), `GIT Bash`, 这里我们额外添加了`cmder`.
参数描述:
`Key`: 每个字典的Key表示该终端的名称, 可以在`terminal.integrated.defaultProfile.windows`中根据名称设置默认的终端
`source`: 终端可执行路径, 如果配置了环境变量直接输如命令, 如果没有则需要填写完整路径
`aregs`: 终端启动时的参数
`overrideName`:布尔类型, 是否用当前运行的程序替换终端的静态名称
`env`: 终端启动时的环境变量, 可以通过`terminal.integrated.env.<platform>`来统一配置
`icon`: 终端的图标
`color`: icon的颜色

```json
{
    "terminal.integrated.profiles.windows": {
		"PowerShell": {
			"source": "PowerShell",
			"icon": "terminal-powershell"
		},
		"Command Prompt": {
			"path": [
				"${env:windir}\\Sysnative\\cmd.exe",
				"${env:windir}\\System32\\cmd.exe"
			],
			"args": [
            ],
			"icon": "terminal-cmd"
		},
		"Git Bash": {
			"source": "Git Bash"
		},
        "cmder": {
            "path": "C:\\WINDOWS\\System32\\cmd.exe",
            "args": ["/K", "D:\\cmder\\vendor\\bin\\vscode_init.cmd"]
        }
    },
    "terminal.integrated.defaultProfile.windows": "cmder"
}
```


## 快捷键配置

1. `key`: 快捷键组合
2. `command`: 调用的命令, `workbench.action.terminal.sendSequence`意思是向Terminal发送一系列的字符
3. `args`: 发送的字符, 需要是`unicode ascii`常用的是`ansiEscapeCode`
4. `when`: 触发的时机
    - `terminalFocus`聚焦到命令行窗口时才触发
    - `terminalEditorFocus`聚焦到命令行编辑窗口时才触发

```json
[
    {
        "key": "alt+d",
        "command": "workbench.action.terminal.sendSequence",
        "args": {
            "text": "\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f\u007f"
        },
        "when":"terminalFocus"
    },
]
```




参考:
https://code.visualstudio.com/docs/terminal/basics