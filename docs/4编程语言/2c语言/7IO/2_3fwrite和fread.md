# 格式化IO
方法|描述
--|--
fprintf|Write formatted data to stream (function ) 向文件格式化写入
fscanf|Read formatted data from stream (function ) 向文件格式化读出
sprintf|Write formatted data to string (function ) 向C字符串读出
sscanf|Read formatted data from string (function ) 向C字符串写入
printf|Print formatted data to stdout (function ) 向标准输出给石化读出
scanf|Read formatted data from stdin (function ) 向标准输入格式化写入




# 字符字符串IO
参数|描述
--|--
fgetc(函数实现)|Get character from stream (function ),getc([宏实现](https://bbs.csdn.net/topics/230005816))
fputc(函数实现)|Write character to stream (function ) putc(宏实现)
fgets|Get string from stream (function )
fputs|Write string to stream (function )
getchar|Get character from stdin (function )
putchar|Write character to stdout (function )
gets|Get string from stdin (function )
puts|Write string to stdout (function )


# 直接IO(二进制IO)
1. 二进制读写,在读文件的时候加`b`

方法|描述
--|--
fread|Read block of data from stream (function )
fwrite|Write block of data to stream (function )



## fread
`size_t fread ( void * ptr, size_t size, size_t count, FILE * stream )` Read block of data from stream
1. fread()──从fp所指向文件的当前位置开始，一次读入size个字节，重复count次，并将读入的数据存放到从buffer开始的内存中； 
2. 读写的是数据块,既`size_t size`
参数|描述
--|--
ptr|block of memory with a size of at least (size*count) bytes,converted to a void*
size|Size, in bytes, of each element to be read.
count|Number of elements, each one with a size of size bytes.
stream|Pointer to a FILE object 

返回|描述
--|--
成功| 返回count


```c
#pragma warning(disable:4996)

#include<stdio.h>
#include<stdlib.h>

int main()
{
	FILE *fp = fopen("test.txt", "r");
	char arr[5] = { 0,0,0,0,0 }; //一定要初始化数组,不然会很'烫'(声明数组时,内存空间可能被其他程序修改过)
	fread(arr, 2, 2, fp);
	printf("%s\n",arr);
	fclose(fp);
	system("pause");
	return(0);
}
```

# fwrite
和fread对应




# int 类型读写

```c
#pragma warning(disable:4996)

#include <stdio.h>
#include <stdlib.h>
int main()
{
	FILE * pFile = fopen("test.txt", "wb+");

	int wbuffer[] = { 1 };
	fwrite(wbuffer, sizeof(int), 1, pFile);

	rewind(pFile);// 此时文件position已经在1字节后
	int rbuffer[] = { 0 };
	fread(rbuffer, sizeof(int), 1, pFile);

	printf("%d\n", rbuffer[0]);
	system("pause");
	fclose(pFile);
	return 0;
}
```


# 结构体读写
```c
#pragma warning(disable:4996)

#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct {
	int age;
	char name[10];
}person;


int main()
{
	FILE * pFile = fopen("test.txt", "wb+");
	
	person wper;
	wper.age = 10;
	strcpy(wper.name, "wang");// 字符串数组
	fwrite(&wper, sizeof(person), 1, pFile);
	
	rewind(pFile);// 此时文件position已经在1字节后
	
	person rper;
	fread(&rper, sizeof(person), 1, pFile);
	printf("%d %s\n", rper.age, rper.name);
	system("pause");
}

```


参考:
http://www.cplusplus.com/reference/cstdio/
http://www.gnu.org/software/libc/manual/html_node/I_002fO-on-Streams.html#I_002fO-on-Streams