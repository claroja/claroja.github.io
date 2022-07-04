#　前提
在vscode中`ctrl + p` 输入`> open keyboard shortcuts(JSON)`, 打开`keybings.json`文件

# 文件操作
1. 新建文件
- `Ctrl+n`
- `Ctrl+s` 保存时输入文件名
2. 重命名文件
- `Ctrl+b e`跳转到左边的导航
- `F2`重命名文件
- `Ctrl+e g`回到文件编辑器
注意: 关闭vscode默认的`ctrl+w`快捷键, 不然可能会以外关闭编辑器

3. 删除文件
- `Ctrl+b e`跳转到左边的导航
- `Shift + Del`删除文件

4. 搜索文件名
使用vscode快捷键`ctrl+p`进行搜索

# 编辑器相关
因为编辑器的英文名是`editor`,所以先导快捷键以`e`开头

## 基本操作
快捷键|描述
--|--
`Ctrl + e Enter`| 定位到编辑器
`Ctrl + e h` | 前一个编辑器
`Ctrl + e l` | 后一个编辑器
`Ctrl + e s`|分割编辑器组（分成两组）
`Ctrl+e Ctrl+h`| 前一组编辑器
`Ctrl+e Ctrl+j`| 后一个编辑器
`Ctrl + c`| 复制, 不建议使用yy进行复制, 因为不能在不同的vscode程序中切换
`Ctrl + v`| 粘贴, 不建议使用p进行粘贴, 因为不能在不同的vscode程序中切换 


## 移动

`Alt`表示移动
`Alt+Shift`表示移动和选择
`Ctrl+Alt+Shift`表示特殊光标动作

一下快捷键根据vim进行操作
快捷键|描述
--|--
`Alt+h,j,k,l`|光标左下上右移动
`Alt+6,4`|光标移动到行最前和最后(模仿vim的shift+6和shift+4)
`Alt+Shift+h,j,k,l`|光标左下上右移动并选择
`Ctrl+Alt+Shit+j,k`|光标多行选择


## 查找和替换
2. 单文件搜索和替换文件内容
- 使用vim的搜索和替换
- 使用`Ctrl + F` + `Ctrl+H` 
    - `TAB`來切換搜索和替換
    - `Enter` 下一個搜索結果 `Shift+Enter` 上一個搜索結果

3. 多个文件搜索和替换文件内容
- `Ctrl+Shift+H` 搜索和替換 `Ctrl+Shift+F` 搜索
- `Alt + r` 切換正則表達式
- `TAB` 來切換搜索框和替換框
- `Alt + Enter` 打開搜索結果

# 侧边栏

因为侧边栏的英文是`side bar`, 所以先导快捷键以`b`开头
快捷键|描述
--|--
`Ctrl + b Enter`|定位到侧边栏
`Ctrl + b Ctrl + b`| 侧边栏显示
`Ctrl + b e`| 侧边栏文件
`Ctrl + b g`| 侧边栏git
`Ctrl + b d`| 侧边栏debug

# 控制台相关
控制台英文名是`terminal`, 所以先导快捷键以`t`开头
快捷键|描述
--|--
`Ctrl + t Ctrl + t`| 开关控制台
`Ctrl + t Enter`| 定焦到控制台
`Ctrl + t s `| 分割并创建控制台
`Ctrl + t l `| 移动到右边的控制台
`Ctrl + t h `| 移动到左边的控制台
`Ctrl + t k `| 杀死当前控制台
`Ctrl + t c `| 清空控制台

只有`Ctrl+h`和`Ctrl+l`需要先定位到控制台才能执行, 其他命令都不需要

# debug
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

`F6` restart
`F7` stepOver
`F8` stepInto
`Shift+F8` stepOut

# 整体的快捷键配置
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
    "key": "alt+e",
    "command": "python.execSelectionInTerminal",
    "when": "editorTextFocus && !findInputFocussed && !jupyter.ownsSelection && !notebookEditorFocused && !replaceInputFocussed && editorLangId == 'python'"
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
    "key": "shift+alt+j",
    "command": "cursorDownSelect",
    "when": "textInputFocus"
},
{
    "key": "alt+4",
    "command": "cursorLineEnd"
},
{
    "key": "alt+6",
    "command": "cursorLineStart"
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
]
```