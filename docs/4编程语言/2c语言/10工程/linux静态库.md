 静态库libxx.a 对应 win下面的xx.lib

防止别人看到代码

`nm`查看静态库内容


假设有以下文件
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
extern int add(int a,int b);
extern int sub(int a,int b);
```

首先编译`fn`目录下的函数文件
`gcc -c ./fn/*.c -I ./h`
将编译好的`.o`文件,打包成静态库,**静态库命名必须以lib开头以.a结尾**
`ar rcs ./lib/libcalc.a *.o`
编译整个工程文件,默认gcc会找标准库,自己的库需要指明,`_L`指定库的目录,`-l`指定库的名称.库名会省略掉`lib`和`.a`
`gcc test.c -o test -I h/ -L lib/ -l calc`
