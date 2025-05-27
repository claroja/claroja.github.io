# pywin32

pywin32 是一个第三方模块库, 直接包装了几乎所有的 Windows API.

## 概念

### 句柄
Windows程序中，有各种各样的资源，系统在创建这些资源的时候，都会为他们分配内存，并返回标识这些资源的标识号，这个标识号就是句柄. 在 win32 编程的世界里，包括 "窗口、文本框 等所有控件" 都是 窗体，所有的窗体都有独立的句柄。要操作任意一个窗体，你都需要找到这个窗体的句柄 。

### 消息
消息是用来告诉窗体 "发生了什么"，比如 给一个按钮发送BN_CLICKED 这么个消息，按钮就知道 "哦，我被点了".
在 Windows 中消息是由一个数值表示的, 并且将这些数值定义为WM_XXX 宏的形式. 例如，鼠标左键按下的消息--WM_LBUTTONDOWN，键盘按下消息--WM_KEYDOWN，字符消息--WM_CHAR，等等。

### wParam和lParam

wParam 和 lParam：用于指定消息的附加信息。例如，当我们收到一个键盘按下消息的时候，message 成员变量的值就是 WM_KEYDOWN，但是用户到底按下的是哪一个按键，我们就得拜托这二位，由他们来告知我们具体的信息。

### time和pt
time 和 pt：这俩个变量分别被用来表示消息投递到消息队列中的时间和鼠标当前的位置，一般情况下不怎么使用（但不代表没用）


## pywin32结构

pywin32 把 Windows API 按照功能分了一些大类，每一个大类作为一个模块。以下是所有的模块, 如果不清楚要使用的 API 在哪个模块中，到 帮助文件 里搜索一下就可以得到答案(在 Lib\site-packages 下有一个 PyWin32.CHM 帮助文件)

- mmapfile：提供对内存映射文件 API 的访问
- odbc：odb 数据库 api
- perfmon：包装性能监视器功能的模块。
- pywintypes：支持常见 Windows 类型的模块。
- servicemanager：与 Windows 服务控制管理器交互的模块。
- timer：包装 Win32 Timer 函数的扩展
- win2kras：将 Windows 2000 扩展封装到远程访问服务 (RAS) API 的模块。
- `win32api`：提供了常用的用户API
- win32clipboard：提供了有关粘贴板的API
- `win32con`：有关的常量。提供了消息常量的操作API。(con是const常量)
- win32console：控制台
- win32cred：凭证管理功能的接口。此模块中的功能仅适用于 Windows XP 及更高版本。
- win32crypt：win32 Cryptography API 的接口
- win32event：提供 win32 事件/等待API接口
- win32evtlog：封装了 Windows Win32 事件日志 API。
- win32file：提供了有关文件操作的API
- `win32gui`：提供了有关 windows 用户界面图形操作的API
- win32help：Win32 API 的帮助
- win32inet：Windows internet (wininet) API 接口
- win32job：win32 进程和线程 API 的接口，在 Windows 2000 及更高版本中可用。
- win32lz：封装 Windows LZ 压缩例程的模块
- win32net：Windows 网络API的模块
- win32pdh：封装 Windows 性能数据帮助 API 模块
- win32pipe：管道 api
- win32print：Windows 打印 API 的模块
- win32process：进程 api
- win32profile：包装用于处理用户配置文件的函数
- win32ras：封装 Windows Remote Access Service (RAS) API
- win32security：win32 安全 API 接口
- win32service：服务
- win32trace
- win32transaction：内核事务管理器函数 模块，用于事务NTFS和事务注册表函数。
- win32ts：此模块中的所有函数都接受关键字参数
- win32wnet：公开 Windows Networking API 的模块。
- winxpgui：xp 图像用户界面 API



## win32clipboard

```python
import win32con
import win32clipboard as cp

cp.OpenClipboard()  # 打开剪切板
"""
SetClipboardData方法向剪贴板写入数据，后面两个参数，第一个表示数据类型，
建议使用win32con.CF_UNICODETEXT，这样基本可以原样输出我们传入的数据
如果使用win32con.CF_TEXT:输出的是字节码~很别扭
注意！！！如果需要同时写入再获取内容，数据类型这个参数一定是使用一样的
"""
cp.SetClipboardData(win32con.CF_UNICODETEXT, "132465")  # 向剪贴板中写入数据
cp.GetClipboardData()
result = cp.GetClipboardData(win32con.CF_UNICODETEXT)  # 输出：132465
result1 = cp.GetClipboardData(win32con.CF_TEXT)  # 输出：b'`O}Y\x00'
print(result, result1)

cp.CloseClipboard()  # 关闭剪贴板
```




## win32process
[参考](https://www.cnblogs.com/LyShark/p/12538209.html)

```python
import win32process
import win32event

## 打开记事本程序，获得其句柄
handle = win32process.CreateProcess('c:\\windows\\notepad.exe','', None , None , 0 ,win32process.CREATE_NO_WINDOW , None , None , win32process.STARTUPINFO())
## 等待进程结束
win32event.WaitForSingleObject(handle[0], -1)
## 使用TerminateProcess函数终止记事本程序
win32process.TerminateProcess(handle[0],0)
```

`win32process.CreateProcess()`
参数:
- appName：可执行的文件名。 
- commandLine：命令行参数。 
- processAttributes：进程安全属性，如果为None，则为默认的安全属性。 
- threadAttributes：线程安全属性，如果为None，则为默认的安全属性。 
- bInheritHandles：继承标志。 
- dwCreationFlags：创建标志。 
- newEnvironment：创建进程的环境变量。 
- currentDirectory：进程的当前目录。 
- startupinfo ：创建进程的属性。 


`WaitForSingleObject(handle, milisecond)`
参数:
- handle: 要操作的进程句柄
- milisecond: 等待的时间,如果为-1,则一直等待.





## win32process

```python
thread, processId = win32process.GetWindowThreadProcessId(hwnd)
```


```python
thread_id, process_id = win32process.GetWindowThreadProcessId(k)
p_handle = win32api.OpenProcess(win32con.PROCESS_ALL_ACCESS, 0, process_id)
win32api.TerminateProcess(p_handle, process_id)
win32api.CloseHandle(p_handle)
```


## 综合

```python
## -*- coding:utf-8 -*-
 
import time
import win32gui
import win32con
import win32api
 
## 从顶层窗口向下搜索主窗口，无法搜索子窗口
## FindWindow(lpClassName=None, lpWindowName=None)  窗口类名 窗口标题名
handle = win32gui.FindWindow("Notepad", None)
 
## 获取窗口位置
left, top, right, bottom = win32gui.GetWindowRect(handle)
## 获取某个句柄的类名和标题
title = win32gui.GetWindowText(handle)
cls_name = win32gui.GetClassName(handle)
 
## 打印句柄
print(handle)
print(cls_name)
 
## 搜索子窗口
## 枚举子窗口
hwndChildList = []
win32gui.EnumChildWindows(handle, lambda hwnd, param: param.append(hwnd), hwndChildList)
 
## 父窗口句柄 若不为0，则按照z-index的顺序从hwndChildAfter向后开始搜索子窗体，否则从第一个子窗体开始搜索。 子窗口类名 子窗口标题
## FindWindowEx(hwndParent=0, hwndChildAfter=0, lpszClass=None, lpszWindow=None)
subHandle = win32gui.FindWindowEx(handle, 0, "EDIT", None)
 
## 获得窗口的菜单句柄
menuHandle = win32gui.GetMenu(subHandle)
## 获得子菜单或下拉菜单句柄
## 参数：菜单句柄 子菜单索引号
subMenuHandle = win32gui.GetSubMenu(menuHandle, 0)
## 获得菜单项中的的标志符，注意，分隔符是被编入索引的
## 参数：子菜单句柄 项目索引号
menuItemHandle = win32gui.GetMenuItemID(subMenuHandle, 0)
## 发送消息，加入消息队列，无返回
## 参数：句柄 消息类型 WParam IParam
win32gui.postMessage(subHandle, win32con.WM_COMMAND, menuItemHandle, 0)
 
## wParam的定义是32位整型，high word就是他的31至16位，low word是它的15至0位。
## 当参数超过两个，wParam和lParam不够用时，可以将wParam就给拆成两个int16来使用。
## 这种时候在python里记得用把HIWORD的常数向左移16位，再加LOWORD，即wParam = HIWORD<<16+LOWORD。
 
## 下选框内容更改
## 参数：下选框句柄； 消息内容； 参数下选框的哪一个item，以0起始的待选选项的索引；如果该值为-1，将从组合框列表中删除当前选项，并使当前选项为空； 参数
## CB_Handle为下选框句柄，PCB_handle下选框父窗口句柄
if win32api.SendMessage(CB_handle, win32con.CB_SETCURSEL, 1, 0) == 1:
    # 下选框的父窗口命令
    # 参数：父窗口句柄； 命令； 参数：WParam：高位表示类型，低位表示内容；参数IParam，下选框句柄
    # CBN_SELENDOK当用户选择了有效的列表项时发送，提示父窗体处理用户的选择。 LOWORD为组合框的ID. HIWORD为CBN_SELENDOK的值。
    win32api.SendMessage(PCB_handle, win32con.WM_COMMAND, 0x90000, CB_handle)
    # CBN_SELCHANGE当用户更改了列表项的选择时发送，不论用户是通过鼠标选择或是通过方向键选择都会发送此通知。LOWORD为组合框的ID. HIWORD为CBN_SELCHANGE的值。
    win32api.SendMessage(PCB_handle, win32con.WM_COMMAND, 0x10000, CB_handle)
 
## 设置文本框内容，等窗口处理完毕后返回true。中文需编码成gbk
## 参数：句柄；消息类型；参数WParam，无需使用； 参数IParam，要设置的内容，字符串
win32api.SendMessage(handle, win32con.WM_SETTEXT, 0, os.path.abspath(fgFilePath).encode('gbk'))
 
## 控件点击确定,处理消息后返回0
## 参数:窗口句柄; 消息类型; 参数WParam HIWORD为0（未使用），LOWORD为控件的ID; 参数IParam  0（未使用）,确定控件的句柄
win32api.SendMessage(Mhandle, win32con.WM_COMMAND, 1, confirmBTN_handle)
 
## 获取窗口文本不含截尾空字符的长度
## 参数：窗口句柄； 消息类型； 参数WParam； 参数IParam
bufSize = win32api.SendMessage(subHandle, win32con.WM_GETTEXTLENGTH, 0, 0) + 1
## 利用api生成Buffer
strBuf = win32gui.PyMakeBuffer(bufSize)
print(strBuf)
## 发送消息获取文本内容
## 参数：窗口句柄； 消息类型；文本大小； 存储位置
length = win32gui.SendMessage(subHandle, win32con.WM_GETTEXT, bufSize, strBuf)
## 反向内容，转为字符串
## text = str(strBuf[:-1])
 
address, length = win32gui.PyGetBufferAddressAndLen(strBuf)
text = win32gui.PyGetString(address, length)
## print('text: ', text)
 
## 鼠标单击事件
## 鼠标定位到(30,50)
win32api.SetCursorPos([30, 150])
## 执行左单键击，若需要双击则延时几毫秒再点击一次即可
win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP | win32con.MOUSEEVENTF_LEFTDOWN, 0, 0, 0, 0)
## 右键单击
win32api.mouse_event(win32con.MOUSEEVENTF_RIGHTUP | win32con.MOUSEEVENTF_RIGHTDOWN, 0, 0, 0, 0)
 
 
def click1(x, y):  # 第一种
    win32api.SetCursorPos((x, y))
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN, x, y, 0, 0)
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP, x, y, 0, 0)
 
 
def click2(x, y):  # 第二种
    ctypes.windll.user32.SetCursorPos(x, y)
    ctypes.windll.user32.mouse_event(2, 0, 0, 0, 0)
    ctypes.windll.user32.mouse_event(4, 0, 0, 0, 0)
 
 
def click_it(pos):  # 第三种
    handle = win32gui.WindowFromPoint(pos)
    client_pos = win32gui.ScreenToClient(handle, pos)
    tmp = win32api.MAKELONG(client_pos[0], client_pos[1])
    win32gui.SendMessage(handle, win32con.WM_ACTIVATE, win32con.WA_ACTIVE, 0)
    win32gui.SendMessage(handle, win32con.WM_LBUTTONDOWN, win32con.MK_LBUTTON, tmp)
    win32gui.SendMessage(handle, win32con.WM_LBUTTONUP, win32con.MK_LBUTTON, tmp)
 
 
## 发送回车
win32api.keybd_event(13, 0, 0, 0)
win32api.keybd_event(13, 0, win32con.KEYEVENTF_KEYUP, 0)
 
## 关闭窗口
win32gui.PostMessage(win32lib.findWindow(classname, titlename), win32con.WM_CLOSE, 0, 0)
 
## 检查窗口是否最小化，如果是最大化
if win32gui.IsIconic(hwnd):
    # win32gui.ShowWindow(hwnd, win32con.SW_SHOWNORMAL)
    win32gui.ShowWindow(hwnd, 8)
    time.sleep(0.5)
 
## SW_HIDE：隐藏窗口并激活其他窗口。nCmdShow=0。
## SW_MAXIMIZE：最大化指定的窗口。nCmdShow=3。
## SW_MINIMIZE：最小化指定的窗口并且激活在Z序中的下一个顶层窗口。nCmdShow=6。
## SW_RESTORE：激活并显示窗口。如果窗口最小化或最大化，则系统将窗口恢复到原来的尺寸和位置。在恢复最小化窗口时，应用程序应该指定这个标志。nCmdShow=9。
## SW_SHOW：在窗口原来的位置以原来的尺寸激活和显示窗口。nCmdShow=5。
## SW_SHOWDEFAULT：依据在STARTUPINFO结构中指定的SW_FLAG标志设定显示状态，STARTUPINFO 结构是由启动应用程序的程序传递给CreateProcess函数的。nCmdShow=10。
## SW_SHOWMAXIMIZED：激活窗口并将其最大化。nCmdShow=3。
## SW_SHOWMINIMIZED：激活窗口并将其最小化。nCmdShow=2。
## SW_SHOWMINNOACTIVE：窗口最小化，激活窗口仍然维持激活状态。nCmdShow=7。
## SW_SHOWNA：以窗口原来的状态显示窗口。激活窗口仍然维持激活状态。nCmdShow=8。
## SW_SHOWNOACTIVATE：以窗口最近一次的大小和状态显示窗口。激活窗口仍然维持激活状态。nCmdShow=4。
## SW_SHOWNORMAL：激活并显示一个窗口。如果窗口被最小化或最大化，系统将其恢复到原来的尺寸和大小。应用程序在第一次显示窗口的时候应该指定此标志。nCmdShow=1。
```

参考:
https://blog.csdn.net/freeking101/article/details/88231952
https://blog.csdn.net/liulianglin/article/details/14449577
https://www.cnblogs.com/LyShark/p/12538209.html
https://blog.csdn.net/weixin_46192930/article/details/106887785


Microsoft Component Object Model (COM), 定义了每个程序的接口, 但并不提供具体的实现.

比如`IDispatch`接口, 可以用来打开程序:

```python
import win32com.client
xl = win32com.client.Dispatch("Excel.Application")
wd = win32com.client.Dispatch("Word.Application")
```


每个程序有不同的方法, 需要阅读对应的文档. 比如Excel和Word都有Visible属性, 用来控制界面是否显示:
```python
xl.Visible
xl.Visible = 1
```

Python会自动管理COM的声明周期, 如果`xl`变量不再使用, 则Excel会自动关闭(实际使用中并没有关闭).

```python
xl = None
```

自定义一个COM对象:

