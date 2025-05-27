1.创建头文件`mydll.h`
```
#pragma once
//内部函数,动态库自己调用,其他程序不能调用
//外部函数,外部调用

//__declspec(dllexport)导出函数
__declspec(dllexport) int myadd(int a, int b);
```

2.创建源文件`mydll.c`
```
#include "mydll.h"
int myadd(int a, int b) {
	return a + b;
}
```
3.右键项目,选择属性,在常规里将配置类型改为**动态库(.dll)**
4.右键项目,重新生成,在Debug文件夹下得到**project.lib (对象文件库)**和**project.dll(动态库)**,库的名称是项目名称
我们需要把`project.lib`,`project.dll`文件和`mylib.h`发给别人使用

# 动态库使用
1.将动态库三个文件拷贝到当前项目文件夹下


```
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "mydll.h"//包含动态库的头文件
#pragma comment(lib,"./tesdll.lib")//导入动态库

int main(int argc, char** argv)
{
	int res = myadd(10, 20);
	printf("%d\n", res);
	system("pause");
	return 0;
}
```

# 动态库的优点
编译时不引入,运行时引用,所以不占用空间


# python调用动态库
python只需要把`.dll`文件复制到项目目录下即可
```
import ctypes
lib = ctypes.cdll.LoadLibrary("./tesdll.dll")
lib.myadd(10,20)
```