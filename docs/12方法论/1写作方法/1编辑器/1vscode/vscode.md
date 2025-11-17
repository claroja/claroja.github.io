# path



## 特别注意
<font style="background: hotpink">注意设置在"属性"中设置"以管理员身份运行此程序"</font>否则有些程序, 如`pywin32`某些功能, 如鼠标点击时间, 将无效.
另外, 如果使用vscode, 也需要将vscode设置为"以管理员身份运行此程序", 否则无法打开管理员身份的python.exe

## 配置文件
直接拷贝`setting.json`配置文件

- 全局默认的设置 `>Preferences: Open Default Settings (JSON)`(优先级最低)
- 用户全局设置 `>Preferences: Open Settings (JSON)`(优先级终)
    文件保存在`C:\Users\USERNAME\AppData\Roaming\Code\User\settings.json`
- Workerspace配置`>Preferences: Open WorkSpace Settings (JSON)`(优先级最高)
    文件保存在`PROJECT_HOME\.vscode\settings.json`

```json
{
    "editor.fontSize": 18,
    "editor.fontWeight": "bold",
    "editor.tabCompletion": "on",
    "editor.formatOnType": true,
    "editor.suggestSelection": "first",
    "editor.suggest.showWords": false,
    "editor.snippetSuggestions": "top",
    "editor.minimap.enabled": false,
    "workbench.startupEditor": "newUntitledFile",
    "debug.toolBarLocation": "docked", //将debug控制条放在debug pane里
    "security.workspace.trust.untrustedFiles": "open",
    "files.autoSave": "onFocusChange",
    "[markdown]": {
        "editor.unicodeHighlight.ambiguousCharacters": false,
        "editor.wordWrap": "on",
        "editor.quickSuggestions": {
            "other": "on",
            "comments": "off",
            "strings": "off"
        },
    },
    "terminal.integrated.cursorBlinking":true,
    "terminal.integrated.fontSize": 18,
    "terminal.integrated.defaultProfile.windows": "cmder",
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
}
```

## 快捷键配置
直接拷贝`keybindings.json`中的文件
```json
[
    {
        "key": "ctrl+w",
        "command": "-workbench.action.closeActiveEditor"
    },
    {
        "key": "ctrl+e",
        "command": "-workbench.action.quickOpen"
    },
    {
        "key": "ctrl+e Enter",
        "command": "workbench.action.focusActiveEditorGroup"
    },
    {
        "key": "ctrl+e l",
        "command": "workbench.action.nextEditorInGroup"
    },
    {
        "key": "ctrl+e h",
        "command": "workbench.action.previousEditorInGroup"
    },
    {
        "key": "ctrl+e s",
        "command": "workbench.action.splitEditor"
    },
    {
        "key": "ctrl+e ctrl+h",
        "command": "workbench.action.focusLeftGroup"
    },
    {
        "key": "ctrl+e ctrl+l",
        "command": "workbench.action.focusRightGroup"
    },
    {
        "key": "ctrl+b",
        "command": "-workbench.action.toggleSidebarVisibility"
    },
    {
        "key": "ctrl+b ctrl+b",
        "command": "workbench.action.toggleSidebarVisibility"
    },
    {
        "key": "ctrl+b Enter",
        "command": "workbench.action.focusSideBar"
    },
    {
        "key": "ctrl+b e",
        "command": "workbench.view.explorer",
        "when": "viewContainer.workbench.view.explorer.enabled"
    },
    {
        "key": "ctrl+b g",
        "command": "workbench.view.scm",
        "when": "workbench.scm.active"
    },
    {
        "key": "ctrl+b d",
        "command": "workbench.view.debug",
        "when": "viewContainer.workbench.view.debug.enabled"
    },
    {
        "key": "ctrl+t",
        "command": "-workbench.action.showAllSymbols"
    },
    {
        "key": "ctrl+t h",
        "command": "workbench.action.terminal.focusPreviousPane",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+t l",
        "command": "workbench.action.terminal.focusNextPane",
        "when": "terminalFocus && terminalHasBeenCreated || terminalFocus && terminalProcessSupported"
    },
    {
        "key": "ctrl+t Enter",
        "command": "workbench.action.terminal.focus"
    },
    {
        "key": "ctrl+t k",
        "command": "workbench.action.terminal.kill"
    },
    {
        "key": "ctrl+t ctrl+t",
        "command": "workbench.action.terminal.toggleTerminal",
        "when": "terminal.active"
    },
    {
        "key": "ctrl+t c",
        "command": "workbench.action.terminal.clear"
    },
    {
        "key": "ctrl+t s",
        "command": "workbench.action.terminal.splitInActiveWorkspace"
    }, 
    {
        "key": "ctrl+d",
        "command": "-editor.action.addSelectionToNextFindMatch",
        "when": "editorFocus"
    },
    {
        "key": "ctrl+d ctrl+b",
        "command": "editor.debug.action.conditionalBreakpoint"
    },
    {
        "key": "ctrl+d b",
        "command": "editor.debug.action.toggleBreakpoint",
        "when": "debuggersAvailable && editorTextFocus"
    },
    {
        "key": "ctrl+d d",
        "command": "workbench.debug.viewlet.action.disableAllBreakpoints"
    },
    {
        "key": "ctrl+d r",
        "command": "workbench.debug.viewlet.action.removeAllBreakpoints"
    },
    {
        "key": "ctrl+d w",
        "command": "editor.debug.action.selectionToWatch"
    },
    {
        "key": "ctrl+d n",
        "command": "editor.debug.action.goToNextBreakpoint"
    },
    {
        "key": "ctrl+d p",
        "command": "editor.debug.action.goToPreviousBreakpoint"
    },
    {
        "key": "ctrl+d t",
        "command": "workbench.debug.action.focusRepl"
    },
    {
        "key": "ctrl+d e",
        "command": "editor.debug.action.selectionToRepl"
    },
    
    {
        "key": "ctrl+d a",
        "command": "workbench.debug.viewlet.action.enableAllBreakpoints"
    },
    {
        "key": "f6",
        "command": "workbench.action.debug.restart",
        "when": "inDebugMode"
    },
    {
        "key": "f6",
        "command": "-workbench.action.debug.pause",
        "when": "debugState == 'running'"
    },
    {
        "key": "f7",
        "command": "workbench.action.debug.stepOver",
        "when": "debugState == 'stopped'"
    },
    {
        "key": "f8",
        "command": "workbench.action.debug.stepInto",
        "when": "debugState != 'inactive'"
    },
    {
        "key": "shift+f8",
        "command": "workbench.action.debug.stepOut",
        "when": "debugState == 'stopped'"
    },
    {
        "key": "alt+h",
        "command": "-gitlens.showQuickFileHistory",
        "when": "!gitlens:disabled && config.gitlens.keymap == 'alternate'"
    },
    {
        "key": "alt+h",
        "command": "-testing.toggleTestingPeekHistory",
        "when": "testing.isPeekVisible"
    },
    {
        "key": "alt+h",
        "command": "cursorLeft",
        "when": "textInputFocus"
    },
    {
        "key": "alt+h",
        "command": "workbench.action.terminal.sendSequence",
        "args": {
            "text": "\u001b[D"
        },
        "when":"terminalFocus"
    },

    {
        "key": "shift+alt+h",
        "command": "cursorLeftSelect",
        "when": "textInputFocus"
    },
    {
        "key": "alt+l",
        "command": "cursorRight",
        "when": "textInputFocus"
    },
    {
        "key": "alt+l",
        "command": "workbench.action.terminal.sendSequence",
        "args": {
            "text": "\u001b[C"
        },
        "when":"terminalFocus"
    },
    {
        "key": "shift+alt+l",
        "command": "cursorRightSelect",
        "when": "textInputFocus"
    },
    {
        "key": "alt+k",
        "command": "cursorUp",
        "when": "textInputFocus"
    },
    {
        "key": "alt+k",
        "command": "workbench.action.terminal.sendSequence",
        "args": {
            "text": "\u001b[A"
        },
        "when":"terminalFocus"
    },
    {
        "key": "alt+k",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "alt+k",
        "command": "workbench.action.quickOpenSelectPrevious",
        "when":"inQuickOpen"
    },
    {
        "key": "shift+alt+k",
        "command": "cursorUpSelect",
        "when": "textInputFocus"
    },
    {
        "key": "alt+j",
        "command": "cursorDown",
        "when": "textInputFocus"
    },
    {
        "key": "alt+j",
        "command": "workbench.action.terminal.sendSequence",
        "args": {
            "text": "\u001b[B"
        },
        "when":"terminalFocus"
    },
    {
        "key": "alt+j",
        "command": "workbench.action.quickOpenSelectNext",
        "when":"inQuickOpen"
    },
    {
        "key": "alt+j",
        "command": "selectNextSuggestion",
        "when": "suggestWidgetMultipleSuggestions && suggestWidgetVisible && textInputFocus"
    },
    {
        "key": "shift+alt+j",
        "command": "cursorDownSelect",
        "when": "textInputFocus"
    },
    {
        "key": "alt+4",
        "command": "cursorLineEnd"
    },
    {
        "key": "alt+4",
        "command": "workbench.action.terminal.sendSequence",
        "args": {
            "text": "\u001b[1;5C"
        },
        "when":"terminalFocus"
    },
    {
        "key": "alt+6",
        "command": "cursorLineStart"
    },
    {
        "key": "alt+6",
        "command": "workbench.action.terminal.sendSequence",
        "args": {
            "text": "\u001b[1;5D"
        },
        "when":"terminalFocus"
    },
    {
        "key": "ctrl+shift+alt+j",
        "command": "cursorColumnSelectDown",
        "when": "textInputFocus"
    },
    {
        "key": "ctrl+shift+alt+k",
        "command": "cursorColumnSelectUp",
        "when": "textInputFocus"
    },
    {
        "key": "shift+alt+4",
        "command": "cursorLineEndSelect"
    },
    {
        "key": "shift+alt+6",
        "command": "cursorLineStartSelect"
    },
    {
        "key": "ctrl+r",
        "command": "-workbench.action.openRecent"
    },
    {
        "key": "alt+d",
        "command": "python.debugInTerminal"
    },
    {
        "key": "shift+alt+e",
        "command": "python.execSelectionInTerminal",
        "when": "editorTextFocus && !findInputFocussed && !jupyter.ownsSelection && !notebookEditorFocused && !replaceInputFocussed && editorLangId == 'python'"
    },
    {
        "key": "shift+enter",
        "command": "-python.execSelectionInTerminal",
        "when": "editorTextFocus && !findInputFocussed && !jupyter.ownsSelection && !notebookEditorFocused && !replaceInputFocussed && editorLangId == 'python'"
    },
    {
        "key": "alt+e",
        "command": "python.execInTerminal"
    },
    {
        "key": "ctrl+q",
        "command": "-workbench.action.quickOpenView"
    },
    {
        "key": "ctrl+q",
        "command": "workbench.action.closeActiveEditor"
    },
    {
        "key": "ctrl+f4",
        "command": "-workbench.action.closeActiveEditor"
    },
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


## extension
[VSCode与npm同名插件区别](https://www.panyanbin.com/article/47d1c4a4.html)
以eslint为例, vscode安装的eslint插件是只是做可视化的展示, 展示的内容扔依赖于npm安装的eslint包. 也既是说, 如果vscode不安装eslint插件, 那么eslint的检查结果, 只能使用npm安装的eslint包,通过命令行的形式输出. 
### 导出extensions
shell(bash,cmder): `code --list-extensions | xargs -L 1 echo code --install-extension > extensions.sh`
powershell: `code --list-extensions | % {"code --install-extension $_" } > extensions.ps1`
### 导入extensions
shell(bash,cmder): `sh extensions.sh`
powershell: `extensions.ps1`

```s
code --install-extension christian-kohler.path-intellisense
code --install-extension DavidAnson.vscode-markdownlint
code --install-extension donjayamanne.python-environment-manager
code --install-extension eamodio.gitlens
code --install-extension mhutchie.git-graph
code --install-extension ms-python.python
code --install-extension ms-python.vscode-pylance
code --install-extension ms-toolsai.jupyter
code --install-extension ms-toolsai.jupyter-keymap
code --install-extension ms-toolsai.jupyter-renderers
code --install-extension ms-toolsai.vscode-jupyter-cell-tags
code --install-extension ms-toolsai.vscode-jupyter-slideshow
code --install-extension ms-vscode-remote.remote-ssh
code --install-extension ms-vscode-remote.remote-ssh-edit
code --install-extension mtxr.sqltools
code --install-extension mtxr.sqltools-driver-mysql
code --install-extension oderwat.indent-rainbow
code --install-extension streetsidesoftware.code-spell-checker
code --install-extension vscode-icons-team.vscode-icons
code --install-extension xyz.local-history
```
