
# vscode插件
[VSCode与npm同名插件区别](https://www.panyanbin.com/article/47d1c4a4.html)
以eslint为例, vscode安装的eslint插件是只是做可视化的展示, 展示的内容扔依赖于npm安装的eslint包. 也既是说, 如果vscode不安装eslint插件, 那么eslint的检查结果, 只能使用npm安装的eslint包,通过命令行的形式输出. 

名称|描述
--|--
通用插件|
Remote Development|远程操作,包含SSH, WSL(win下的linux), Containers(直接进入docker容器)
SFTP|同于同步本地和远程文件
Local History|本地历史
Vim|Vim快捷键
vscode-icons|
编程相关|
Bracket Pair Colorizer2|已经更新到第二个版本
Indent-Rainbow|
Path Intellisense|自动填充文件名
Code Spell Checker|
Code alignment|
Prettier|格式美化
Todo Tree|显示TODO和FIXME
ESLint|前端开发用
Vue Language Features(Volar)|Vue插件
Python|当有`.py`文件时自动提示下载(包含Jupyter, Pylance)
Pylance| 代码的提示
Git|相关
Git Graph| git 管理
GitLens|Git的增强插件



## sftp
属性|描述
--|--
name|配置文件的名称, 随意
context|本地文件夹地址，默认为vscode工作区根目录
protocol|协议, 默认sftp, 可选ftp
host|远程IP地址
port|远程端口, 默认22
username|用户名
password|密码
remotePath|远程文件夹地址, 默认"/", 一般未和本地路径同名, 比如`*/localdir/`
uploadOnSave|保存自动上传, 默认false
downloadOnOpen|打开自动下, 默认false
syncOption|配置同步, 默认`{}`空
syncOption.delete|删除远程多余文件
syncOption.skipCreate|不在远程创建新文件
syncOption.ignoreExisting|不更新远程存在的文件
syncOption.update|仅在??
ignore|类似gitignore,根目录从context开始, 默认`[]`空
ignoreFile|用ignore即可
watcher|默认`{}`空
watcher.files|使用`glob`语法监控文件, 当监控所有时关闭`uploadOnSave`
watcher.autoUpload|自动上传
watcher.autoDelete|自动删除
remoteTimeOffsetInHours|本地和远程的时间偏差,默认为0
remoteExplorer|默认`{}`空
remoteExplorer.filesExclude|
concurrency|并发数, 默认4
connectTimeout|超时时间, 默认10000
limitOpenFilesOnRemote|远程打开文件数, 默认false(222)
[参考](https://github.com/liximomo/vscode-sftp/wiki/Common-Config)

ignore 语法
`**`:表示路径 `**/data`忽略任何路径下的data文件夹
`*`:通配符 `*.zip` 忽略`zip`类型文件
`data/*`:忽略data路径下的文件, 但是不忽略data路径
`data/`:忽略data路径(当然下面的文件也不会有)

## vim
默认vim的快捷键会覆盖vscode的快捷键, 使用以下配置禁止覆盖

```json
"vim.handleKeys": {
    "<C-c>": false,
    "<C-v>": false,
    "<C-x>": false,
}
```


