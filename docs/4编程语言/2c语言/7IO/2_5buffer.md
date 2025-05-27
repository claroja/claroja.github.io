
# setbuf
`void setbuf ( FILE * stream, char * buffer );`  Set stream buffer
1. 设置文件描述符的缓冲区大小
2. stream buffer是一个 block of data,在i/o操作和 physical file(文件) 之间
3. output buffers,写出:数据会放在buffer区,直到填满,然后会flushed(发送给 物理文件并清空buffer区)
4. input buffers,也是如此
5. Stream buffers can be explicitly flushed by calling `fflush`, `fclose` and `freopen`或者程序terminates normally(正常终止)会自动调用`fllush`
6. 所有打开的文件都默认带有`buffer`
7.  stdin and stdout are fully buffered by default  if they are known to not refer to an interactive . Otherwise, they may either be line buffered or unbuffered by default
8.  通过setvbuf 改变缓冲方式

参数|描述
--|--
stream| FILE object
buffer|存放buffer的数组



```c
#pragma warning(disable:4996)

#include<stdio.h>
#include<stdlib.h>

int main()
{
	char buf[BUFSIZ];
	printf("缓冲区大小是%d字节\n", BUFSIZ);
	setbuf(stdout, buf);
	puts("hello world");  //屏幕此时没有输出,因为存在buf数组里
	system("pause");
	fflush(stdout);  //屏幕输出
	system("pause");
	return(0);
}
```


# setvbuf
`int setvbuf ( FILE * stream, char * buffer, int mode, size_t size );`Change stream buffering
1. 设置缓冲方式(Full buffering,Line buffering,No buffering)


参数|描述
--|--
stream|Pointer to a FILE object
buffer|User allocated buffer. Shall be at least size bytes long.如果空,会自动设置默认buffer(BUFSIZ)
mode|三种
size|Buffer size, in bytes.

mode|描述
--|--
_IOFBF|Full buffering,写出:buffer区间满,刷新,读入:buffer空,刷新
_IOLBF|Line buffering,写出:buffer区满或碰到换行符,刷新,读入:buffer空,或换行符,刷新
_IONBF|No buffering,没有缓冲区,buffer and size参数被忽略

返回|描述
--|--
成功|返回0
失败|非0


```c
#pragma warning(disable:4996)

#include<stdio.h>
#include<stdlib.h>

int main()
{
	setvbuf(stdout, NULL, _IONBF, 512);
	puts("hello world"); //直接输出到屏幕,不需要刷新缓冲区
	system("pause");
	fflush(stdout);
	system("pause");
	return(0);
}
```


# fflush
`int fflush ( FILE * stream );` Flush stream
1. 刷新缓冲区

参考:
http://www.gnu.org/software/libc/manual/html_node/I_002fO-on-Streams.html#I_002fO-on-Streams