---
title: idea
toc: true
date: 2021-06-14 13:32:12
tags:
categories:
    - [工具, ide]
---
主要用于java
<!--more-->

# 通用设置
- show quick documentation on mouse move (鼠标悬停显示文档说明)
- Add unambiguous imports on the fly (自动导入无歧义的包)
- Optimize imports on the fly (自动移除不用的包, 自动排序)
- Show line numbers (显示行数)
- Show method separators (显示方法分割线)
- Show tabs (多行标签栏显示)
- Font (调整编辑器和控制台字体)
- template (修改文档模板, 比如在`includes`中修改类头的文档注释信息)
- Build project automatically (自动编译)
- Compile independent modules in parallel(多线程编译)
- Match case (忽略大小写, 默认开启大小写)

# 快捷键设置
行为|快捷键
--|--
执行(run)|`alt+r`
删除行(delete line)|`ctrl+d`
向下开始一行(Insert Line Below)|`ctrl+enter`
向上开始一行(Insert Line Above)|`ctrl+shift+enter`
向上移动行(move statement down)|`alt+j`
向上移动行(move statement up)|`alt+k`
跳转到定义(go to declaration)|
自动生成变量(introduce variable)|`ctrl + alt + v`
查看类继承树(type hierarchy)|`ctrl + h` `ctrl + alt + u`生成类继承图
格式化代码(reformat code)|`ctrl+shift+F`
参数提示(parameter info)|`ctrl+p`
重写父类方法(override methods)|`ctrl + o`
重写变量与方法名(rename)|`ctrl + r`
生成构造器(generate)|`alt + insert` `ctrl + g`
查看文档说明(quick documentation)|`ctrl + q`
打开代码所在文件夹(show in explorer)|`ctrl + r`
自动生成try,if,for(surround with)|`ctrl + t`
查找文件名|`shift shift`
查找替换内容(Find Replace)|`ctrl + [shift] + f`,`ctrl + [shift] + r`
查看方法被调用(Find Usages)|



# Templates
是配置一些常用代码字母缩写，生成代码

Live Templates 可以自定义，而 Postfix Completion 不可以。
`Editor – Live Templates`
`Editor – General – Postfix Completion`

缩写|代码
--|--
psvm|生成main方法
sout, soutv|`System.out.println`
fori, iter, list.for| for循环和增强for循环
ifn, inn|null值判断
psf, psfi, psfs|`public static final`


# 断点调试
## 断点操作
禁用所有断点|
查看所有断点|
条件断点|

## debug
描述|快捷键
--|--
前进一行|
下一个断点|
跳入方法|
跳出方法|
停止|
重启|

