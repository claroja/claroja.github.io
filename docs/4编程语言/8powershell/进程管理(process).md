# 进程管理(process)

## 查询进程
1. `Get-Process`: 获取所有进程
2. `Get-Process -id 0`: 通过id获取信息
3. `Get-Process -Name ex*`: 通过name获取信息
4. `Get-Process -Name exp*,power*`: 获取多个进程信息
5. `get-process -name python | get-member`: 获得进程对象的所有属性和方法
6. `(get-process -name python).path`: 获得指定进程的路径

## 停止进程
1. `Stop-Process -Name Idle`: 通过name停止进程
2. `Get-Process | Where-Object -FilterScript {$_.Responding -eq $false} | Stop-Process`: 停止无响应的进程
3. `Get-Process -Name powershell | Where-Object -FilterScript {$_.Id -ne $PID} | Stop-Process -PassThru`: 停止会话下的所有进程

## 启动进程

### 示例
1. `Start-Process -FilePath "sort.exe"`: 启动进程
2. `Start-Process -FilePath "powershell" -Verb RunAs`: 管理员身份运行


### 参数
参数|描述
--|--
`-ArgumentList`, `Args`|给命令传入的参数, 多个使用`,`隔开
`-FilePath`, `Path`|可执行文件或文档（如 .txt 或 .doc 文件）的名称
`-NoNewWindow`, `nnw`|不创建新窗口,  默认情况下在 Windows 上，PowerShell 会打开一个新窗口。
`-PassThru`|为 cmdlet 启动的每个进程返回一个进程对象。 默认情况下，此 cmdlet 不会生成任何输出。
`-RedirectStandardError`, `RSE`|将进程产生的所有错误发送给指定的文件。 输入路径和文件名。 默认情况下，在控制台中显示这些错误。
`-RedirectStandardInput`, `RSI`|从指定文件读取输入。 输入输入文件的路径和文件名。 默认情况下，进程从键盘获取其输入。
`-RedirectStandardOutput`, `RSO`|将进程产生的输出发送给指定的文件。 输入路径和文件名。 默认情况下，在控制台中显示该输出。
`-Verb`|启动进程时要使用的动词。 可用的谓词取决于进程中运行的文件的文件扩展名. 如果`-FilePath`是`.txt`类型, 则`-Verb`可以是`Print`, 既打印该文件. `.exe`对应的`-Verb`默认是`Open`
`-WorkingDirectory`|指定新进程应启动的位置。默认为 FilePath 参数中指定的完全限定位置。



### 输入输出
1. 输入: 无
2. 输出:
    1. `None`: 默认情况下，此 cmdlet 不返回任何输出。
    2. `Process`: 如果使用 PassThru 参数，则此 cmdlet 将返回进程对象。



## 参考
- https://learn.microsoft.com/zh-cn/powershell/scripting/samples/managing-processes-with-process-cmdlets
- https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/start-process
- https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/stop-process
- https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.management/get-process