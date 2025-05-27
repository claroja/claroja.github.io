
# fopen
```c
FILE * fopen ( const char * filename, const char * mode );
```



参数|描述
--|--
filename|C字符串,文件名
mode|

mode|描述
--|--
r"	|read: Open file for input operations. The file must exist.
"w"	|write: 创建新文件,如果已存在,则覆盖
"a"	|append: 追加,如果文件不存在,则创建.光标在末尾,忽略`fseek, fsetpos, rewind`
"r+"	|read/update: Open a file for update (both for input and output). The file must exist.
"w+"	|write/update: 创建新文件,如果已存在,则覆盖
"a+"	|append/update: Open a file for update (both for input and output) with all output operations writing data at the end of the file. Repositioning operations (fseek, fsetpos, rewind) affects the next input operations, but output operations move the position back to the end of file. The file is created if it does not exist.

1. mode:使用`b`来处理二进制文件,如"rb","wb","ab","r+b","w+b"
2. mode:C2011中加了'x',来确认文件是否存在,而不是直接覆盖文件
3. mode:"+",文件stream在写后的读操作,会先调用flushed(`fflush)或repositioned((fseek, fsetpos, rewind)
4. mode:"+",读后的写操作,需要先调用`fseek, fsetpos, rewind`


例子:

```c
#pragma warning(disable:4996)

#include<stdio.h>
#include<stdlib.h>

int main()
{
	FILE * pFile;
	pFile = fopen("test.txt", "w");
	fputs("fopen example", pFile);
	fclose(pFile);
	return 0;
}

```


# fclose
1. 关闭文件,在之前刷新缓冲区

参数|描述
--|--
stream| FILE object

返回|描述
--|--
成功|返回0
失败|EOF(-1)



# freopen
1. 重定向已经打开的流
```c
FILE *freopen(const char *filename, const char *mode, FILE *stream)
```

参数|描述
--|--
filename|C字符串,要打开的文件名
mode|C字符串
stream|FILE指针,要被重新打开的流

```c
#pragma warning(disable:4996)

#include<stdio.h>
#include<stdlib.h>

int main()
{
	FILE *fp;
	fp = freopen("test.txt", "w", stdout);
	printf("%s\n","将标准输出的流重定向到文件"); //printf本应该打印在控制台,现在写入了文件
	fclose(fp);
}
```


参考:
http://www.gnu.org/software/libc/manual/html_node/I_002fO-on-Streams.html#I_002fO-on-Streams