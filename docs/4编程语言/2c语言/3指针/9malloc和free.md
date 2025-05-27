## 基础

1. 头文件`#include <stdlib.h>`,原型`void* malloc (size_t size);`
2. size 为需要分配的内存空间的大小，以字节（Byte）计
3. 分配指定大小的空间,未初始化,值是未知的,如果希望初始化使用`calloc`
4. 返回类型`void *`,并非是没有返回值或返回空指针,而是返回指针类型未知.所以需要将void指针转换成我们希望的类型.`char *p = (char *)malloc(10);//申请10个字节字符空间`
5. 成功返回地址,失败返回NULL
6. 申请可能成功,也可能不成功,所以要自行判断是否成功
7. free释放指针说的是本程序失去所有权,而不是将内存重置为初始值(内存仍保留本程序更改过的值,只不过现在别的程序可以访问)



动态分配内存应用——动态数组
```c
# include <stdio.h>//引用函数库
# include <stdlib.h>
void array(int x){
	int *p = (int *) malloc(x*sizeof(int));//动态分配数组，右边是一个指针，内存已经切割
//	int *p = (void *) malloc(x*sizeof(int));//右边是一个地址和总长度，内存未切割
	for (int i =0;i < x; i++){//下标遍历数组
		p[i]=i+1;
		printf("\n%d,%x",p[i],&p[i]);
	}
//	for (int *px =p,i=0;px<p+x;px++,i++){//指针遍历数组
//		*px = i+1;
//		printf("\n%d,%x",*px,px);
//	}
}
void main(){
	array(3);
}
```

## 函数说明
函数|描述|参数|返回
--|--|--|--
void *malloc(size_t size);|在内存的动态存储区(堆区)中分配一块长度为size字节的连续区域，用来存放类型说明符指定的类型。分配的内存空间内容不确定，一般使用memset初始化。|
void free(void *ptr);|释放ptr所指向的一块内存空间，ptr是一个任意类型的指针变量，指向被释放区域的首地址。对同一内存空间多次释放会出错

按字节来重置,所以只能重置为0(不能按类型大小重置,char是1个字节是可以的)
memset可以重置栈内存里的数组
```
#include<stdio.h>
#include<string.h>
#include<stdlib.h>

int main()
{
	int* p = (int*)malloc(sizeof(int) * 10);//按字节来申请
	memset(p, 1, 40);//按字节来重置,所以只能重置为0(不能按类型大小重置)
	for (int i = 0; i < 10; i++) {
		printf("%d\n", p[i]);
	}
	free(p);
	system("pause");
	return EXIT_SUCCESS;
}

```