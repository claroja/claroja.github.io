# pywin32gui


gui(graph user interface)图形用户接口, 就是操作图形界面的API.

## 获得窗口

### 获得桌面上的窗口句柄

`PyHANDLE = FindWindow(ClassName, WindowName )`
参数:
- `ClassName`: 对应inspect中的`ClassName`
- `WindowName`: 对应inspect中的`name`
返回:
窗体的句柄

```python
import win32gui
hld = win32gui.FindWindow(None,"Adobe Acrobat") #返回窗口标题为Adobe Acrobat的句柄
```

### 获得子窗口的句柄
`PyHANDLE = FindWindowEx(Parent, ChildAfter , ClassName , WindowName )`
参数:
- `Parent`: 父窗口的句柄, 如果是0, 则默认是桌面窗口
- `ChildAfter`: 子窗口的句柄, 在某个子窗口后搜索, 如果是0, 则搜索全部子窗口
- `ClassName `: 字符串, 对应inspect中的`ClassName`
- `WindowName`: 字符串, 对应inspect中的`name`

### 获得激活句柄窗口
`handle = win32gui.GetForegroundWindow()`

### 通过坐标获取窗口句柄
`handle = win32gui.WindowFromPoint(win32api.GetCursorPos())  # (259, 185)`

### 遍历子窗口
`EnumChildWindows(hwnd, callback, extra)`
参数:
- `hwnd`: 父窗口的句柄,(handle window)
- `callback` : 回调函数, 固定写法
- `extra` : 列表, 用来存放子窗口

```python
hwndChildList = []
win32gui.EnumChildWindows(parentHandle, lambda hwnd, param: param.append(hwnd),  hwndChildList)
```

## 等待窗口开启
```python
while True:
    win = win32gui.FindWindow('Notepad','')     # 来个循环，等待窗口的开启。
    if win != 0:                         # 如果开启win 就是这个窗口的句柄了。
        win32api.Sleep(200)
        print('启动成功',win)
        break
```

## 获得窗口属性
```python
import win32gui
hwnd = win32gui.FindWindow(None,"Adobe Acrobat") #返回窗口标题为Adobe Acrobat的句柄

title = win32gui.GetWindowText(hwnd)  # 对应inspect中的`name`
clsname = win32gui.GetClassName(hwnd)  # 对应inspect中的`ClassName`
left, top, right, bottom = win32gui.GetWindowRect(jbid)  # 获取窗口的位置
POS =win32gui.GetCursorPos()  # 获取当前鼠标点击的窗口元素的坐标
```

## 操作窗口

### 聚焦窗口

```python
win32gui.SetForegroundWindow(hwnd) # 将窗口放在最前
```
### 窗口大小

```python
import win32gui
import win32con

hwnd = win32gui.FindWindow(None,"Adobe Acrobat") #返回窗口标题为Adobe Acrobat的句柄

win32gui.ShowWindow(hwnd, win32con.SW_FORCEMINIMIZE) # 最小化, 即使拥有窗口的线程被挂起也会最小化。
win32gui.ShowWindow(hwnd, win32con.SW_HIDE) # 隐藏窗口，大小不变，激活状态不变
win32gui.ShowWindow(hwnd, win32con.SW_MAXIMIZE)  # 最大化窗口，显示状态不变，激活状态不变
win32gui.ShowWindow(hwnd, win32con.SW_MINIMIZE)  # 最小化指定的窗口并且激活在Z序中的下一个顶层窗口
win32gui.ShowWindow(hwnd, win32con.SW_RESTORE)  # 恢复窗口, 激活并显示窗口
win32gui.ShowWindow(hwnd, win32con.SW_SHOWMAXIMIZED)  # 显示并激活窗口，以最大化显示
win32gui.ShowWindow(hwnd, win32con.SW_SHOWMINIMIZED)  # 显示并激活窗口，以最小化显示
win32gui.ShowWindow(hwnd, win32con.SW_SHOWMINNOACTIVE)  # 显示窗口并最小化，激活窗口仍然维持激活状态
win32gui.ShowWindow(hwnd, win32con.SW_SHOWNA)  # 以窗口原来的状态显示窗口。激活窗口仍然维持激活状态
win32gui.ShowWindow(hwnd, win32con.SW_SHOWNOACTIVATE)  # 以窗口最近一次的大小和状态显示窗口。激活窗口仍然维持激活状态
win32gui.ShowWindow(hwnd, win32con.SW_SHOWDEFAULT)  # 默认尺寸?
win32gui.ShowWindow(hwnd, win32con.SW_SHOWNORMAL)  # 激活并显示一个窗口。如果窗口被最小化或最大化，系统将其恢复到原来的尺寸和大小。
win32gui.ShowWindow(hwnd, win32con.SW_SHOW)  # 	在窗口原来的位置以原来的尺寸激活和显示窗口
```
### 窗口位置
```python
## 移动某窗口hld到指定位置。
## x,y指与屏幕左上角距离，nWidth, nHeight 指长和高
## bRepaint ：是否重绘
win32gui.MoveWindow(hld, int X, int Y, int nWidth, int nHeight, BOOL bRepaint )
```

### 关闭窗口

```python
win32gui.SendMessage(window_handle, win32con.WM_CLOSE)  # 关闭窗口
```
