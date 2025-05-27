GNU编译套件(GNU Compiler Collection),GPL许可发行的自由软件.大多数Unix操作系统采纳为标准编译器,同时也适用于Win

gcc -E 得.i  调用cpp
预处理(头文件展开,宏替换)

gcc -S 得.s  调用gcc本身
汇编语言

gcc -c 得到.o  调用as
编译成二进制文件

gcc  -o得到.o 调用ld(链接libc)
这一步是链接

gcc后用`file`查看



gcc参数|描述
--|--
`-I`|编译时所包含的==头==文件路径(其实改c文件中include的路径也行)
`-L`|包含库的路径
`-l`|指定库名,比如`xx.so`或`xx.a`
`-o`|指定生成的文件名
`-D`|相当于`defn`,指定宏编译
`-g`|gdb模式,可以调试
`-lstdc++`|编译c++代码,一般使用`g++`
`Wall`|显示更多的警告
`-O`|优化等级(1,2,3),就是内联函数
`-E`|头文件展开,宏替换
`-S`|编译成汇编

# 编译C

例子:
假设有以下的文件
```linux
|-- fn
|   `-- add.c
|-- h
|   `-- head.h
`-- test.c
```

test.c文件内容
```c
#include "head.h"
#define DEBUG 0 //为了下面写宏的展示
int main(void)
{
        int a =1, b = 2;
        int c;//使用-Wall参数会警告该参数没有初始化
#ifdef DEBUG  //如果定义了DEBUG则会执行以下的
        printf("hello C\n");
#endif
        printf("%d\n",add(a,b));
        return 0;
}
```
add.c 内容
```c
int add(int a,int b){
        return a+b;
}
```

head.h内容
```h

#include <stdio.h>
extern int add(int a,int b);
```

使用以下命令进行编译
```sh
claroja@claroja:~/gcc$ gcc test.c ./fn/add.c -I ./h -Wall -o test
test.c: In function ‘main’:
test.c:6:6: warning: unused variable ‘c’ [-Wunused-variable]
  int c;

```
1.test.c和fn目录下add.c一起编译(因为test.c调用了add.c,注意add.c要加路径)
2.`-I`参数指明了头文件的路径


# 编译C++
```c
#include <iostream>
using namespace std;
int main(){
        cout << "Hello C++" << endl;
        return 0;
}

```

`g++ test.cpp -o testcpp`


## API

参数|说明
-|-
-fPIC|产生使用相对位置的代码(position-independent code),生成动态链接
--shared|生成共享库(需要指定fPIC参数)
-o|(output) 指定输出的位置
-x|(language)指定要编译的语言类型,`c`,`c++`等,如果不指定会通过后缀识别
-std=|选择语言标准`c90`,`c98`,`c99`
-I|指定所包含的头文件的目录,在swig编译python的时候要指定python.h所在的路径


位置无关:使用相对位置,代码可以被加载到内存任意位置,共享库在加载时位置就是相对的
