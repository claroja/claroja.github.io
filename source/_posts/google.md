# 插件
插件|描述
--|--
cvim|用vim管理网页
Proxy SwitchyOmega|代理
Tampermonkey|油猴
Vue.js devtools| vue开发
广告终结者 | 广告屏蔽
沙拉查词 | 翻译


# chrome cvim
## 快捷键设置
在chrome中打开`chrome://extensions/shortcuts`来设置快捷键
Ctrl + L | Go to the next tab
Ctrl + H | Go to the previous tab
## 移动命令
命令|功能
--|--
k|上
j|下
h|左
l|右
gg|网页头
G|网页尾
0|网页最左
\$|网页最右
## visual模式
1. 使用`/`搜多定位到想要一定的位置
2. 使用`v`, 可以看见光标闪烁
3. 按下`v`, 配合`hjkl`可以用来选定字符
4. 按下`y`来复制文字

命令|描述
--|--
v|进入visual模式 or 进入后进行选中
V|进入行visual模型
y|复制
## 查找
命令|描述
--|--
/|查找（支持正则）
n|查找的下一个匹配项(visual模式下也支持)
N|查找的上一个匹配项
b|在书签中查找
shift + i|在历史中搜索

## 标签页命令
命令|功能
--|--
r|刷新
x or `:q`|关闭当前标签页
shift + x or `:undo`|打开最后关闭的标签页
ctrl+j|左标签页
ctrl+k|右标签页
Shift + b|激活当前 Tab 搜索, 输入编号即可
N%|移动到第N个标签页
shift + h|回退
shift + l|前进
t|打开新标签页，等同与:tabnew [url]
o|在当前页面打开连接，等同于：open
<|把当前标签页左移
>|把当前标签页右移

## 链接跳转
命令|功能
--|--
f|打开连接
mf|一次打开多个标签
W|新窗口打开连接
gi|进入第一个输入框, tab进入下一个输入框, esc跳出
gy|复制网页连接
p|当前页面打开复制的连接
P|新标签页打开复制的连接
alt + d or shift TAB| 聚焦到地址栏(跳转到上一个可点击的位置)
TAB|从地址栏中跳出

## 打标签
命令|描述
--|--
M[flag]|给当前页面打标签(能够是任意字母)
go[flag]|回到标签
