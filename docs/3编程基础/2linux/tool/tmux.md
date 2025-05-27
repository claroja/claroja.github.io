# tmux

## quickstart
```python
tmux new -s name # tmux new-session -s name
tmux rename -t old new
tmux ls
tmux at -t name
tmux kill-session -t name
tmux kill-window -t name


Ctrl-b d # 后台会话
Ctrl-b [ # 滚屏查看
Ctrl-b c # 新建窗口 Ctrl-b & # 关闭窗口
Ctrl-b n/p # 切换窗口

```








## 三个基本概念
概念|描述
--|--
Session|会话,相当于开了一个ssh
Window|窗口,相当于在这个ssh中开了多个shell,有标签tab的形式
Panel|面板,相当于在tab标签中开了多个面板(就是分割了当前的屏幕)

==Window和Panel==本质上是一样的,知识分割shell的方式不同


####  命令
位置|操作|命令
--|--|--
外|新建会话 |tmux new -s name
外|列出会话| tmux ls|
外|关闭会话|tmux kill-session -t session-name\|mux kill-server（关闭所有）
外|进入会话|tmux attach -t name
内|关闭会话|exit
内|跳转|tmux switch -t name
内|后台会话|tmux detach（快捷键d）

==外和内==是指在seesion外还是在session内


## 快捷键
快捷键的开始首先需要在session中按`ctrl+b`,然后再按相应的快捷键.
例如:`tmux detach`快捷键是`d`,那么需要先按`ctrl+b`,然后再按`d`

### Session
快捷键|命令
--|--
s |列出会话，并选择
$| 重命名会话
d |后台会话
### window
快捷键|命令
--|--
w |列出窗口，并选择
c |创建窗口
, |重命名窗口
n |选择下一个窗口
p| 选择上一个窗口
0~9 |选择0~9对应的窗口
### Pane
快捷键|命令
--|--
% |竖分
" |横分
q |显示窗格的编号
o |在窗格间切换
} |与下一个窗格交换位置
{ |与上一个窗格交换位置
! |在新窗口中显示当前窗格
x |关闭当前窗格
上下左右|选择相应的Pane
c-上,c-下,c-左,c-右|调整Pane的大小


## 快捷键
|	快捷键	|	描述	|
|	--	|	--	|
|	C-b	|	Send the prefix key (C-b) through to the application.	|
|	C-o	|	Rotate the panes in the current window forwards.	|
|	C-z	|	Suspend the tmux client.	|
|	!	|	Break the current pane out of the window.	|
|	"	|	Split the current pane into two, top and bottom.	|
|	#	|	List all paste buffers.	|
|	$	|	Rename the current session.	|
|	%	|	Split the current pane into two, left and right.	|
|	&	|	Kill the current window.	|
|	'	|	Prompt for a window index to select.	|
|	(	|	Switch the attached client to the previous session.	|
|	)	|	Switch the attached client to the next session.	|
|	,	|	Rename the current window.	|
|	-	|	Delete the most recently copied buffer of text.	|
|	0	|	Prompt for an index to move the current window.	|
|	0 to 9	|	Select windows 0 to 9.	|
|	:	|	Enter the tmux command prompt.	|
|   ;   |Move to the previously active pane.|
|	=	|	Choose which buffer to paste interactively from a list.	|
|	?	|	List all key bindings.	|
|	D	|	Choose a client to detach.	|
|	L	|	Switch the attached client back to the last session.	|
|	[	|	Enter copy mode to copy text or view the history.	|
|	]	|	Paste the most recently copied buffer of text.	|
|	c	|	Create a new window.	|
|	d	|	Detach the current client.	|
|	f	|	Prompt to search for text in open windows.	|
|	i	|	Display some information about the current window.	|
|	l	|	Move to the previously selected window.	|
|	n	|	Change to the next window.	|
|	o	|	Select the next pane in the current window.	|
|	p	|	Change to the previous window.	|
|	q	|	Briefly display pane indexes.	|
|	r	|	Force redraw of the attached client.	|
|	m	|	Mark the current pane (see select-pane -m).	|
|	M	|	Clear the marked pane.	|
|	s	|	Select a new session for the attached client interactively	|
|	t	|	Show the time.	|
|	w	|	Choose the current window interactively.	|
|	x	|	Kill the current pane.	|
|	z	|	Toggle zoom state of the current pane.	|
|	{	|	Swap the current pane with the previous pane.	|
|	}	|	Swap the current pane with the next pane.	|
|	~	|	Show previous messages from tmux, if any.	|
|	Page Up	|	Enter copy mode and scroll one page up.	|
|	Up,Down,Left,Right	|	Change to the pane above, below, to the left, or to the right of the current pane.	|
|	M-1 to M-5	|	Arrange panes in one of the five preset layouts: even-horizontal, even-vertical, main-horizontal, main-verti‐cal, or tiled.	|
|	Space	|	Arrange the current window in the next preset layout.	|
|	M-n	|	Move to the next window with a bell or activity marker.	|
|	M-o	|	Rotate the panes in the current window backwards.	|
|	M-p	|	Move to the previous window with a bell or activity marker.	|
|	C-Up, C-Down, C-Left, C-Right	|	Resize the current pane in steps of one cell.	|
|	M-Up, M-Down, M-Left, M-Right	|	Resize the current pane in steps of five cells.	|
## 命令
## #管理客户端和会话
###attach
attach-session [-dEr] [-c working-directory] [-t target-session](alias: attach)
如果在tmux外执行，则会新建一个客户端，并进入;如果在tmux内部，则之间切换相应的会话。-d，使其他使用这个会话的客户端推出。-r，开启只读模式
#### detach
detach-client [-P] [-a] [-s target-session] [-t target-client](alias: detach)
#### has
has-session [-t target-session](alias: has)
报告是否存在对话
#### kill-server
杀死所有会话
#### kill-session
kill-session [-a] [-t target-session]
杀死所有会话，-a杀死除了指定的之外的会话
#### lsc
list-clients [-F format] [-t target-session](alias: lsc)
列出所有的客户端
#### lscm
list-commands(alias: lscm)
列出所有的命令
#### ls
list-sessions [-F format](alias: ls)
列出所有的会话
#### lockc
lock-client [-t target-client](alias: lockc)
锁定客户端
#### locks
lock-session [-t target-session]
锁定所有会话的客户端(alias: locks)
#### new
new-session [-AdDEP] [-c start-directory] [-F format] [-n window-name][-s session-name] [-t target-session] [-x width] [-y height][shell-command](alias: new)
创建一个新的会话
#### refresh
refresh-client [-S] [-t target-client](alias: refresh)
刷新客户端信息
#### rename
rename-session [-t target-session] new-name(alias: rename)
重新命名会话
#### showmsgs
show-messages [-IJT] [-t target-client](alias: showmsgs)
#### source
source-file path(alias: source)
从路径上执行命令
#### start
start-server(alias: start)
开启tmux服务，不会建立会话
#### suspendc
suspend-client [-t target-client](alias: suspendc)
挂起客户端
#### switchc
switch-client [-Elnpr] [-c target-client] [-t target-session] [-Tkey-table](alias: switchc)
切换客户端
### 其他
其他命令建议用快捷键








































http://blog.jobbole.com/87584/

http://blog.jobbole.com/87278/

http://www.linuxidc.com/Linux/2015-07/119843.htm
比较详细
http://blog.csdn.net/u011138533/article/details/53109247

http://blog.csdn.net/u014015972/article/details/51611817
官方网站
https://robots.thoughtbot.com/a-tmux-crash-course