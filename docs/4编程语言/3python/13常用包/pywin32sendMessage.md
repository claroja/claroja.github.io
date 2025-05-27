# pywin32sendMessage


windows消息的处理机制:
1. 当`鼠标、键盘事件`被触发后，相应的鼠标或键盘`驱动程序`就会把这些事件转换成相应的消息，然后输送到`系统`消息队列
2. Windows系统则在适当的时机，从`系统消息队列`中取出一个消息，送往相应窗口线程的队列
3. `线程`看到自己的消息队列中有消息，就从队列中取出来，通过操作系统发送到合适的窗口过程去处理


`win32gui.SendMessage int = SendMessage(hwnd, message, wparam, lparam)`
参数:
- hWnd：指定要接收消息的窗口的句柄。如果此参数为HWND_BROADCAST，则消息将被发送到系统中所有顶层窗口，包括无效或不可见的非自身拥有的窗口、被覆盖的窗口和弹出式窗口，但消息不被发送到子窗口。32位的窗口句柄。窗口可以是任何类型的屏幕对象，因为Win32能够维护大多数可视对象的句柄(窗口、对话框、按钮、编辑框等)
- Msg：指定被发送的消息。这些常量可以是Windows单元中预定义的常量，也可以是自定义的常量。  消息详情点这里
- wParam：指定附加的消息特定信息。通常是一个与消息有关的常量值，也可能是窗口或控件的句柄。
- IParam：指定附加的消息特定信息。通常是一个指向内存中数据的指针。

注意:
SendMessage PostMessage GetCursorPos等win32api与win32gui均包含的函数，用法也相同。

例子:
```python
import win32gui         # 先来小小的体验一下
import win32con
win = win32gui.FindWindow('Notepad','新建文本文档.txt - 记事本')  # 找到这个文件，里面的参数都是再spy++ 里面找的
tid = win32gui.FindWindowEx(win,None,'Edit',None)  # 编辑框
win32gui.SendMessage(tid,win32con.WM_SETTEXT,None,'呐呐呐')  # 写入文字
win32gui.PostMessage(tid,win32con.WM_KEYDOWN,win32con.VK_RETURN,0)  # 插入一个回车
```

## 消息分类


前缀|代表英文|解释
--|--|--
WM_ |Window Message |窗口消息，一般用在SendMessage，PostMessage这样的消息函数中
SM_ |Static Message |静态标签消息
SS_ |Static Style |静态标签风格
BM_ |Button Message |按钮消息
BS_ |Button Style |按钮风格
BN_ |Button Notify |按钮通知
EM_ |Edit Message |编辑框消息
ES_ |Edit Style |编辑框风格
CB_ |ComboBox |组合框消息
CBN_ |ComboBox Notify |组合框通知
LBM_ |ListBox Message |列表框消息
LBS_ |ListBox Style |列表框风格
LBN_ |ListBox Notify |列表框通知
LVM_ |ListView Message |超级列表框(列表视图)消息
LVS_ |ListView Style |超级列表框(列表视图)风格
LVN_ |ListView Notify |超级列表框(列表视图)通知
TVM_ |TreeView Message |树型框(树型视图)消息
TVS_ |TreeView Style |树型框(树型视图)风格
TVN_ |TreeView Notify |树型框(树型视图)通知
VK_ |Virtual Keyboard |虚拟键、键代码


其实，windows中的消息虽然很多，但是种类并不繁杂，大体上有3种：窗口消息、命令消息和控件通知消息。

1. 窗口消息大概是系统中最为常见的消息，它是指由操作系统和控制其他窗口的窗口所使用的消息。例如CreateWindow、DestroyWindow和MoveWindow等都会激发窗口消息，还有我们在上面谈到的单击鼠标所产生的消息也是一种窗口消息。
2. 命令消息，这是一种特殊的窗口消息，他用来处理从一个窗口发送到另一个窗口的用户请求，例如按下一个按钮，他就会向主窗口发送一个命令消息。
3. 控件通知消息，是指这样一种消息，一个窗口内的子控件发生了一些事情，需要通知父窗口。通知消息只适用于标准的窗口控件如按钮、列表框、组合框、编辑框，以及Windows公共控件如树状视图、列表视图等。例如，单击或双击一个控件、在控件中选择部分文本、操作控件的滚动条都会产生通知消息。 她类似于命令消息，当用户与控件窗口交互时，那么控件通知消息就会从控件窗口发送到它的主窗口。但是这种消息的存在并不是为了处理用户命令，而是为了让主窗口能够改变控件，例如加载、显示数据。例如按下一个按钮，他向父窗口发送的消息也可以看作是一个控件通知消息；单击鼠标所产生的消息可以由主窗口直接处理，然后交给控件窗口处理。

比较常用的有:
1. 窗口
    [VM_类消息](http://blog.itpub.net/79126/viewspace-981421/)

2. 按扭控件
    BN_CLICKED 用户单击了按钮
    BN_DISABLE 按钮被禁止
    BN_DOUBLECLICKED 用户双击了按钮
    BN_HILITE 用/户加亮了按钮
    BN_PAINT 按钮应当重画
    BN_UNHILITE 加亮应当去掉

3. 组合框控件
    CBN_CLOSEUP 组合框的列表框被关闭
    CBN_DBLCLK 用户双击了一个字符串
    CBN_DROPDOWN 组合框的列表框被拉出
    CBN_EDITCHANGE 用户修改了编辑框中的文本
    CBN_EDITUPDATE 编辑框内的文本即将更新
    CBN_ERRSPACE 组合框内存不足
    CBN_KILLFOCUS 组合框失去输入焦点
    CBN_SELCHANGE 在组合框中选择了一项
    CBN_SELENDCANCEL 用户的选择应当被取消
    CBN_SELENDOK 用户的选择是合法的
    CBN_SETFOCUS 组合框获得输入焦点

4. 编辑框控件
    EN_CHANGE 编辑框中的文本己更新
    EN_ERRSPACE 编辑框内存不足
    EN_HSCROLL 用户点击了水平滚动条
    EN_KILLFOCUS 编辑框正在失去输入焦点
    EN_MAXTEXT 插入的内容被截断
    EN_SETFOCUS 编辑框获得输入焦点
    EN_UPDATE 编辑框中的文本将要更新
    EN_VSCROLL 用户点击了垂直滚动条消息含义

5. 列表框控件
    LBN_DBLCLK 用户双击了一项
    LBN_ERRSPACE 列表框内存不够
    LBN_KILLFOCUS 列表框正在失去输入焦点
    LBN_SELCANCEL 选择被取消
    LBN_SELCHANGE 选择了另一项
    LBN_SETFOCUS 列表框获得输入焦点
    


### 常用的message
在第三个参数`wparam`中输入键值即可


#### 键盘操作
```python
win32gui.SendMessage(hwnd,win32con.WM_KEYDOWN,13,0)  # 按下回车
win32gui.SendMessage(hwnd,win32con.WM_KEYUP,13,0)  # 松开回车
```

1. 键盘常用操作`wparam`

    ```python
    WM_KEYDOWN = 256
    WM_KEYUP = 257
    ```

2. 键盘常用操作`lparam`
    查键值表

#### 鼠标操作
```python
win32gui.SendMessage(bu, win32con.WM_LBUTTONDOWN, win32con.MK_LBUTTON, 0)
win32gui.SendMessage(bu, win32con.WM_LBUTTONUP, win32con.MK_LBUTTON, 0)
```

1. 鼠标常用操作`wparam`
    ```python
    WM_MOUSEMOVE = 512
    WM_LBUTTONDOWN = 513
    WM_LBUTTONUP = 514
    WM_LBUTTONDBLCLK = 515
    WM_RBUTTONDOWN = 516
    WM_RBUTTONUP = 517
    WM_RBUTTONDBLCLK = 518
    WM_MBUTTONDOWN = 519
    WM_MBUTTONUP = 520
    WM_MBUTTONDBLCLK = 521
    WM_MOUSEWHEEL = 522
    ```
2. 鼠标常用操作`lparam`
    ```python
    MK_LBUTTON = 1
    MK_RBUTTON = 2
    MK_MBUTTON = 16
    ```


### 按键操作
BM_XXXXXX:Button按键对应的操作
```python
win32gui.SendMessage(btn1,win32con.BM_CLICK,None,None)
```




### 窗口操作
#### 关闭窗口:
WM_CLOSE：关闭应用程序窗口
WM_DESTROY：关闭应用程序
WM_QUIT：关闭消息循环

1. 窗口右上角的【x】会默认发送一个 【WM_CLOSE】 消息
    1. 当用户确认退出的时候，我们续集放行让 DefWindowProc(); 函数继续处理 【WM_CLOSE】
    2. 如果用户点击了【取消】不想退出，我们就直接 retrun; ，这时不能再让DefWindowProc() 去处理消息了
2. 当我们收到 【WM_CLOSE】消息并让 DefWindowProc(); 处理时，DefWindowProc会 调用一个 DestroyWindow(); 函数，这个函数会发送【WM_DESTROY】消息，当我们捕获到这个消息的时候，通常是释放各种资源，释放完后手动调用 PostQuitMessage(0); ，如果不调用这个函数，虽然窗口已经不存在了，但是进程不会结束。
3. PostQuitMessage(0) 会发送一个【WM_QUIT】给消息队列，GetMessage 得到WM_QUIT后就会返回FALSE，从而结束消息循环，不会走消息转换 TranslateMessage(&msg); 和消息分发 DispatchMessage(&msg);，所以我们在消息回调函数中是取不到 【WM_QUIT】消息的。


```python
win32gui.SendMessage(win32gui.FindWindow('Notepad', None), win32con.WM_CLOSE, 0, 0)
```




## 发送消息的三种方式
　　 把一个消息发送到窗口有3种方式：发送、寄送和广播。

　　 发送消息的函数有SendMessage、SendMessageCallback、SendNotifyMessage、SendMessageTimeout；寄送消息的函数主要有PostMessage、PostThreadMessage、PostQuitMessage；广播消息的函数我知道的只有BroadcastSystemMessage、BroadcastSystemMessageEx。

　　 SendMessage的原型如下：LRESULT SendMessage(HWND hWnd,UINT Msg,WPARAM wParam,LPARAM lParam)，这个函数主要是向一个或多个窗口发送一条消息，一直等到消息被处理之后才会返回。不过需要注意的是，如果接收消息的窗口是同一个应用程序的一部分，那么这个窗口的窗口函数就被作为一个子程序马上被调用；如果接收消息的窗口是被另外的线程所创建的，那么窗口系统就切换到相应的线程并且调用相应的窗口函数，这条消息不会被放进目标应用程序队列中。函数的返回值是由接收消息的窗口的窗口函数返回，返回的值取决于被发送的消息。

　　 PostMessage的原型如下：BOOL PostMessage(HWND hWnd,UINT Msg,WPARAM wParam,LPARAM lParam)，该函数把一条消息放置到创建hWnd窗口的线程的消息队列中，该函数不等消息被处理就马上将控制返回。需要注意的是，如果hWnd参数为HWND_BROADCAST，那么，消息将被寄送给系统中的所有的重叠窗口和弹出窗口，但是子窗口不会收到该消息；如果hWnd参数为NULL，则该函数类似于将dwThreadID参数设置成当前线程的标志来调用PostThreadMEssage函数。

　　 从上面的这2个具有代表性的函数，我们可以看出消息的发送方式和寄送方式的区别所在：被发送的消息是否会被立即处理，函数是否立即返回。被发送的消息会被立即处理，处理完毕后函数才会返回；被寄送的消息不会被立即处理，他被放到一个先进先出的队列中，一直等到应用程序空线的时候才会被处理，不过函数放置消息后立即返回。

　　 实际上，发送消息到一个窗口处理过程和直接调用窗口处理过程之间并没有太大的区别，他们直接的唯一区别就在于你可以要求操作系统截获所有被发送的消息，但是不能够截获对窗口处理过程的直接调用。

　　 以寄送方式发送的消息通常是与用户输入事件相对应的，因为这些事件不是十分紧迫，可以进行缓慢的缓冲处理，例如鼠标、键盘消息会被寄送，而按钮等消息则会被发送。

　　 广播消息用得比较少，BroadcastSystemMessage函数原型如下：

long BroadcastSystemMessage(DWORD dwFlags,LPDWORD lpdwRecipients,UINT uiMessage,WPARAM wParam,LPARAM lParam);

　　 该函数可以向指定的接收者发送一条消息，这些接收者可以是应用程序、可安装的驱动程序、网络驱动程序、系统级别的设备驱动消息和他们的任意组合。需要注意的是，如果dwFlags参数是BSF_QUERY并且至少一个接收者返回了BROADCAST_QUERY_DENY，则返回值为０，如果没有指定BSF_QUERY，则函数将消息发送给所有接收者，并且忽略其返回值。




```python
## 输入文本
win32gui.SendMessage(tid, win32con.WM_SETTEXT, None, '你好hello word!')
## 确定
win32gui.SendMessage(handle, win32con.WM_COMMAND, 1, btnhld)
```




参考:


https://www.cnblogs.com/hb01846/p/10952036.html