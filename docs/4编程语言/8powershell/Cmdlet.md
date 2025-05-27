# Cmdlet

## 基础设置
1. `$PSVersionTable`: 查看powershell的版本
1. `Get-ExecutionPolicy`: 查看执行策略
    1. `Restricted`: 受限, 表示不能运行`.ps1`脚本
    2. `RemoteSigned`: , 使用`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`命令更改

## Cmdlet
Cmdlet 的发音为“command-let”, Cmdlet 名称采用单数形式的“动词-名词”命令形式，这样更易于被发现。用于确定正在运行哪些进程的 cmdlet 是 Get-Process，而用于检索服务及其状态的列表的 cmdlet 是 Get-Service。

三个核心 Cmdlet:
1. Get-Help
2. Get-Command
3. Get-Member

### Get-Help
返回帮助主题

```powershell
Get-Help -Name Get-Help -Full
help -Name Get-Help -Full
help Get-Help -Full
```

第一个示例使用 Get-Help cmdlet，第二个示例使用 Help 函数，第三个示例在使用 Help 函数时省略了 Name 参数。 Name 是一个位置参数，在该示例中按位置使用该参数。


除了`-Full`之外的其他命令

```powershell
Get-Help -Name Get-Command -Full
Get-Help -Name Get-Command -Detailed
Get-Help -Name Get-Command -Examples
Get-Help -Name Get-Command -Online
Get-Help -Name Get-Command -Parameter Noun
Get-Help -Name Get-Command -ShowWindow
```

输出到格式化窗口
```powershell
help Get-Command -Full | Out-GridView
```

支持通配符
```powershell
help pr*cess
```


### Get-Command
`Get-Command` 的作用是帮助查找命令。

```powershell
Get-Command -Name *service*
```




### Get-Member
Get-Member可帮助发现可用于命令的对象、属性和方法。任何生成基于对象的输出的命令都可以通过管道传递到 Get-Member。 

#### 属性

```powershell
Get-Service -Name w32time
# Status   Name               DisplayName
# ------   ----               -----------
# Running  w32time            Windows Time
```
Status、Name 和 DisplayName都是属性. 更多的属性可以使用`Get-Service -Name w32time | Select-Object -Property *`命令来查看.


```powershell
Get-Service -Name w32time | Get-Member


#    TypeName: System.ServiceProcess.ServiceController
# Name                      MemberType    Definition
# ----                      ----------    ----------
# Name                      AliasProperty Name = ServiceName
# RequiredServices          AliasProperty RequiredServices = ServicesDependedOn
# Disposed                  Event         System.EventHandler Disposed(System.Object, Sy...
# Close                     Method        void Close()
# Continue                  Method        void Continue()
# CanPauseAndContinue       Property      bool CanPauseAndContinue {get;}
# CanShutdown               Property      bool CanShutdown {get;}
# CanStop                   Property      bool CanStop {get;}
# ToString                  ScriptMethod  System.Object ToString();
```
TypeName 指示返回的对象类型。 在本示例中，返回了 System.ServiceProcess.ServiceController 对象。 该对象通常缩写为 TypeName 最后一个句点之后的部分, 即为 ServiceController。


查找接受该类型的对象(`ServiceController`)作为输入的命令。
```powershell
Get-Command -ParameterType ServiceController

# CommandType     Name                                               Version    Source
# -----------     ----                                               -------    ------
# Cmdlet          Get-Service                                        3.1.0.0    Microsof...
# Cmdlet          Start-Service                                      3.1.0.0    Microsof...
# Cmdlet          Stop-Service                                       3.1.0.0    Microsof...
```

#### 方法
方法是可执行的操作。 使用 MemberType 参数来缩小 Get-Member 的结果范围，使其仅显示 Get-Service 的方法。

```powershell
Get-Service -Name w32time | Get-Member -MemberType Method

# TypeName: System.ServiceProcess.ServiceController
# Name                      MemberType Definition
# ----                      ---------- ----------
# Close                     Method     void Close()
# Stop                      Method     void Stop()
```
根据查找的结果来停止服务.
```powershell
(Get-Service -Name w32time).Stop()
```
我很少使用方法，但仍需要注意这些方法。 有时你会遇到 Get-* 命令，却没有相应的命令来修改它。更好的选择是使用 cmdlet 执行该操作（如果存在）。 继续操作，并启动 Windows 时间服务，但这次使用 cmdlet 启动服务。

```powershell
Get-Service -Name w32time | Start-Service -PassThru
# Status   Name               DisplayName
# ------   ----               -----------
# Running  w32time            Windows Time
```

默认情况下，Start-Service 不会像 Get-Service 的启动方法那样返回任何结果。 但使用 cmdlet 的好处之一是，很多时候 cmdlet 提供了方法无法提供的其他功能。 上一个示例中使用了 PassThru 参数。 这会导致 cmdlet 生成输出，而它通常不生成输出。


## 

形式上是多行, 实际上是一行, 也就是说管道后面可以换行
```powershell
Get-Service |
  Where-Object CanPauseAndContinue -eq $true |
    Select-Object -Property *
```
形式上是一行, 实际上是多行, `;`表示多个命令
```powershell
$Service = 'w32time'; Get-Service -Name $Service
```

## CIM

通用信息模型 (CIM) cmdlet。 CIM cmdlet 的设计目的是使其可以同时在 Windows 和非 Windows 计算机上使用。

所有 CIM cmdlet 都包含在一个模块中。 若要获取 CIM cmdlet 的列表，请结合使用 Get-Command 与 Module 参数


## 参考
- https://learn.microsoft.com/zh-cn/powershell/scripting/learn/ps101/01-getting-started?view=powershell-7.4