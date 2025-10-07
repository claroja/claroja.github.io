# 快捷键

## 文件操作
1. 新建文件
    - `ctrl+n`
    - `ctrl+s` 保存时输入文件名

2. 重命名文件
    - `ctrl+b e`跳转到左边的导航
    - `f2`重命名文件
    - `ctrl+e g`回到文件编辑器
    注意: 关闭vscode默认的`ctrl+w`快捷键, 不然可能会以外关闭编辑器

3. 删除文件
    - `ctrl+b e`跳转到左边的导航
    - `shift+del`删除文件

4. 搜索文件名
使用vscode快捷键`ctrl+p`进行搜索


## 窗口
将vscode程序固定到任务栏第一个, `win+1`来切换不同的vscode窗口



## 编辑器(editor)
因为编辑器的英文名是`editor`,所以先导快捷键以`e`开头
快捷键|描述
--|--
`ctrl+e enter`| 定位到编辑器
`ctrl+e s`|分割编辑器组（分成两组）
`alt+num`|聚焦第n个编辑器
`ctrl+tab` | 切换编辑器
`ctrl+e h` | 前一个编辑器
`ctrl+e l` | 后一个编辑器
`ctrl+num`|聚焦第n组编辑器
`ctrl+e ctrl+h`| 前一组编辑器
`ctrl+e ctrl+j`| 后一组编辑器
`ctrl+c`| 复制, 不建议使用yy进行复制, 因为不能在不同的vscode程序中切换
`ctrl+v`| 粘贴, 不建议使用p进行粘贴, 因为不能在不同的vscode程序中切换 

## 侧边栏(bar)
因为侧边栏的英文是`side bar`, 所以先导快捷键以`b`开头
快捷键|描述
--|--
`ctrl+b enter`|定位到侧边栏
`ctrl+b ctrl+b`| 侧边栏显示
`ctrl+b e`| 侧边栏文件
`ctrl+b g`| 侧边栏git
`ctrl+b d`| 侧边栏debug

## 文本编辑

### 移动    

`alt`表示移动
`alt+shift`表示移动和选择
`ctrl+alt+shift`表示特殊光标动作

一下快捷键根据vim进行操作
快捷键|描述
--|--
`alt+h,j,k,l`|光标左下上右移动
`alt+6,4`|光标移动到行最前和最后(模仿vim的shift+6和shift+4)
`alt+shift+6,4`|光标移动的行最前最后,并选择
`alt+shift+h,j,k,l`|光标左下上右移动并选择
`ctrl+alt+shit+j,k`|光标多行选择

### 查找和替换

1. 单文件搜索和替换文件内容

    使用`ctrl + f`(搜索) + `ctrl+h`(替换)
    - 使用`ctrl+y`进入选中文本中查找
    - `enter` 下一個`搜索`或`替换`結果 `shift+enter` 上一個`搜索`或`替换`結果
    - 替换模式下, `tab`从find框到replace框, `shift+tab`从replace框到find框
    - 替换模式下, `ctrl+enter`替换所有

2. 多个文件搜索和替换文件内容
    - `ctrl+shift+h` 搜索和替換 `ctrl+shift+f` 搜索
    - `alt+r` 切換正則表達式
    - `tab` 來切換搜索框和替換框
    - `alt+enter` 打開搜索結果

### 折叠
1. `ctrl+k 1`折叠1级标题, 同理可以折叠2,3,4,5,6,7级标题
2. `ctrl+k 0`展开所有标题

#　其他
在vscode中`ctrl + p` 直接输入可以查找文件
在vscode中`ctrl + p` 输入`>`可以查看vscode的命令
