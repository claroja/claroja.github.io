# command


## cp
复制文件和文件夹

cp的语法结构
cp [OPTION] SOURCE DIRECTORY
例子:
`cp -r --parents ./code ./temp`

1. `-r`递归复制
2. `-t`目标文件, 命令也可以写成`cp -t DIRECTORY SOURCE`
3. `--parents` 以SOURCE为根节点, 将路径也一起复制进来



## grep
`Global Regular Expression Print`, 在文本中搜索, 依次处理文件的每一行, 返回匹配模式所在的行
- `E` 开启正则表达式
- `v` 反向查找, 将未匹配到的展示出来

## awk
它依次处理文件的每一行，并读取里面的每一个字段。对于日志、CSV 那样的每行格式相同的文本文件，awk可能是最方便的工具。

awk的语法结构:
`awk 动作 文件名`
例子:
`awk -F ',' '{print $0}' demo.txt`
- `demo.txt`是要处理的文件名, 也可以写成`cat demo.txt | awk {print $0}`
- `print $0` 是每一行要处理的动作, `print`表示打印, `$0`表示当前行, `$1`表示第一个字段, `$NF` 表示最后一个字段
- `-F`表示分隔符, 默认使用空白符(空格,制表符)
- 变量`NF`表示移动有多少个字段, 所以`$NF`表示最后一个字段, `$(NF-1)`表示倒数第二个字段


参考:
https://www.ruanyifeng.com/blog/2018/11/awk.html







## xargs
`xargs`实现的是将管道传递过来的stdin进行处理然后传递到命令的参数位置上。
管道`|`是将前面的输出`stdout`作为后面的输入`stdin`，但是有些命令不接受管道的传递方式。例如：`ls`命令希望管道传递过来的是参数，但是直接使用管道有时无法传递到命令的参数位。

xargs的两个作用: 
1. 处理管道传输过来的stdin
    1. 对数据的分割, `(xargs、xargs -d、xargs -0)`
    2. 对数据的分批, `（xargs -n、xargs -L）`
2. 将处理后的数据传递到正确的位置 `(xargs -i)`

xargs的语法结构:
`stdout | args -d -n -i command`
1. 默认`command`是`echo`
2. 默认`-d`是空白符
3. 默认`-n`等于1, 每次调用`command`中传入一个参数
3. 默认按位置传入参数, 使用`-i`可以用`{}`来指明参数的位置


如果不想使用管道, 也可以使用`-a`参数, `-a file 从文件中读入作为 stdin`, 等价于`cat file | xargs`

准备测试文件`test.txt`, 第一行使用`\t`分割, 第二行使用`空格`分割, 注意第一行和第二行是使用`\n`换行符分割.
```sh
a   b
c d
```
### 分割
`xargs`命令会将接收的stdin所有的空白（空格`space`、制表符`\t`、换行符`\n`）转换为空格, 默认使用空格来切分数据. 可以通过`-d`参数来指定分隔符.
`xargs -d`可以指定分割符，可以是单个符号、字母或者数字。如指定o为分割符：xargs -d "o"；
`xargs -d`是分割阶段的选项，所以会优先于分批选项（-n、-L、-i）

```shell
## 默认对 space,\t,\n 来分割
cat test.txt | xargs  # a b c d

## -d参数可以指定分隔符
echo 'a@b@c@d' | xargs -d '@' echo  # # a b c d @被作为分隔符, 此时空白符失效
```

### 分批
该选项表示将xargs生成的命令行参数，每次传递几个参数给其后面的命令执行，例如如果xargs从标准输入中读入内容，然后以分隔符分割之后生成的命令行参数有4个，使用 -n 1 之后表示一次传递给xargs后面的命令是1个参数，因为一共有5个参数，所以要执行4次，才能将参数用完。例如：
```s
cat test.txt | xargs -n 1 # 每行仅保留一个参数
## a
## b
## c
## d
```

### 传入参数
用于将参数用{}替代：
`echo 'test.txt' | xargs -i  cp  {} /root/`

### 应用
通过 find 查找特定的文件或目录，再将结果传递给 xargs，对找到的结果执行特定的操作。


1. 删除指定路径下的文件夹
`find . -type d | xargs rmdir`
xargs 从标准输入读取命令参数时，会以空格作为分隔符来识别多个选项。而文件和目录的名字有时候也会包含空格，导致一个文件名被 xargs 识别为两个参数。安全一点的做法是使用 `-0`(等价于 `-d '\0'`) 选项。`-0` 选项可以指定 `xargs` 在读取标准输入时使用 `null` 作为分隔符。而 `find` 命令的 `-print0` 选项同样可以将输出指定为使用 null 进行分割。
`find . -type d -print0 | xargs -0 rmdir`

2. 删除 /tmp 路径下最近两周内未做改动的文件：`find /tmp -type f -mtime +14 | xargs rm`

3. 查找当前路径下所有的 PNG 图片并将它们归档到 images.tar.gz 压缩包中
`find . -name "*.png" -type f -print0 | xargs -0 tar -cvzf images.tar.gz`

参考:
https://www.jianshu.com/p/61a683fa2b0c
https://www.jianshu.com/p/676353506f0b





## 综合应用
1. 将git仓库中更新和新添加的文件复制到某路径下
`git status | grep -E "modified|new file" | awk '{print $NF}' | xargs -i cp --parents {} ./temp`



## cut
显示行中的指定部分

### 语法
cut OPTION... [FILE]...

### 参数
-f: 选取指定字段(field), 从第一列开始. `-f 1`选取第一列, `-f 1,3`选取1列和3列, `-f 1-3`选取1到3列
-d: 分隔符(delimiter), 指定分隔符, 默认是空白分隔符
--complement: 提取指定字段以外的列
### 使用
有如下数据:
```
No Name Mark Percent
01 tom 69 91
02 jack 71 87
03 alex 68 98
```

```sh
## 选取第一列
cut -f 1 test.txt
## No
## 01
## 02
## 03

## 选取除第二列的其他列
cut -f2 --complement test.txt
## No Mark Percent
## 01 69 91
## 02 71 87
## 03 68 98
```

## sort
对文本进行排序:
1. 以行为单位，每一行作为一个字符串
2. 默认首字母开始依次向后按ASCII码值进行比较
3. 默认升序输出
### 语法
sort [OPTION]... [FILE]...

### 参数

-u: unique 唯一, 既删除重复数据
-r: reverse 倒序
-n: number 数值比较,非ascii码, 只适用于纯数字字符串
-t: -t, --field-separator 指定分隔符, 与`-k`配合使用
-k: 指定按第几列排序

### 使用


## uniq
删除重复出现的行列, 

### 语法
uniq [OPTION]... [INPUT [OUTPUT]]
### 参数
-u: unique, `sort -u`是删除重复的数据,仅保留一条, `uniq -u`是删除重复的数据, 一条也不保留
-c: count, 显示重复出现的次数
### 使用
数据
```
重复
重复
不重复
```

```sh
uniq -u text.txt
## 不重复
sort -u text.txt
## 不重复
## 重复
uniq -c text.txt
## 2 重复
## 1 不重复
```