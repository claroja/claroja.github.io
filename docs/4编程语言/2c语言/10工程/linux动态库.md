动态库

# 动态库编译例子
## 代码准备
```l
|-- fn
|   |-- add.c
|   `-- sub.c
|-- h
|   `-- head.h
|-- lib
`-- test.c
```

add.c内容
```c
int add(int a,int b){
        return a+b;
}
```
sub.c内容
```c
int sub(int a,int b){
        return a-b;
}
```
test.c内容
```c
#include "head.h"
int main(void)
{
        int a =1, b = 2;
        printf("%d\n",add(a,b));
        printf("%d\n",sub(a,b));
        return 0;
}
```
head.h内容
```c
#include <stdio.h>
int add(int a,int b);
int sub(int a,int b);
```


1. 编译函数库(前三部),相较于静态库,`-fpic`参数,声明这个库是与内存里的位置无关的
`gcc -fpic -c ./fn/*.c -I ./h/`

2. 编译动态库,使用`-share`参数,`gcc -shared -o ./lib/lib输出库名.so 要编译链接的库名`
**动态库的命名必须以lib开头以.so结尾**([动态库命名规则](https://blog.csdn.net/zhanglianpin/article/details/50491958))
`gcc -shared -o ./lib/libcalc.so *.o`

3. 编译整个工程文件
默认gcc会找标准库,自己的库需要指明,-L指定库的目录,-l指定库的名称.库名会省略掉lib和.a
`gcc test.c -o test -I h/ -L lib/ -l calc`



# 其他
在执行的时候会
`./test: error while loading shared libraries: libcalc.so: cannot open shared object file: No such file or directory`
`ldd`用来查看链接
会发现动态库找不到目录
这时因为没有找到动态库的路径,有三种方法解决:


1.放在系统默认库
1)1)找到动态库所在路径: `sudo find / -name [动态库]`
2)系统里`/lib`和`/usr/lib`是存放库的目录,可以建立一个软连接放进去
`sudo ln -s $PWD/lib/libcalc.so /lib/libcalc.so`

2.设置环境变量
`LD_LIBRARY_PATH`

1)找到动态库所在路径: `sudo find / -name [动态库]`
2)打开`.bashrc`或者`~/.bash_profile`文件
3)`export LD_LIBRARY_PATH=xxx:$LD_LIBRARY_PATH`//一次设置有效,永久有效放在`.bashrc`

3.设置LD加载文件
`/etc/ld.so.conf`文件记录了程序加载运行期间查找动态库连接时的路径
1)找到动态库所在路径: `sudo find / -name [动态库]`
2)`sudo vi /etc/ld.so.conf`
3)在最后一行添加动态库的绝对路径
4)重新加载配置文件:`sudo ldconfig -v`





参考:
http://www.360doc.com/content/19/0503/16/99071_833102506.shtml

![alt text](linux动态库/1.png)