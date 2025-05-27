# 基础
1. [stdio.h](https://pubs.opengroup.org/onlinepubs/009695399/basedefs/stdio.h.html)
2. [POSIX](https://pubs.opengroup.org/onlinepubs/9699919799/) 国际组织来规定接口标准(不同的软件系统linux或win来加入这个标准)
3. [gun](http://www.gnu.org/software/libc/manual/)有具体的实现(gun就是unix系统C语言实现者)

# macros(库变量)
宏|描述
--|--
BUFSIZ|setbuf使用的缓冲区大小
_IOFBF、_IOLBF 和 _IONBF |fully buffered,line buffered,unbuffered
SEEK_CUR,SEEK_END,SEEK_SET|current position,end-of-file,start-of-file
EOF |文件结束,负整数,一般为-1
NULL|Null pointer
stderr、stdin 和 stdout | FILE 类型的指针，分别对应于标准错误、标准输入和标准输出流
FOPEN_MAX |系统可以同时打开的文件数量
FILENAME_MAX|字符数组可以存储的文件名的最大长度
L_ctermid|
L_tmpnam |由 tmpnam 函数创建的临时文件名的最大长度
TMP_MAX | tmpnam 函数可生成的独特文件名的最大数量



# 变量
1. 都是正整数
变量|描述
--|--
FILE|和打开文件对应的结构体
fpos_t |
size_t |sizeof函数返回


# 函数

函数|描述
--|--
void     clearerr(FILE *);|
int      fclose(FILE *);|
FILE    *fdopen(int, const char *);|
int      feof(FILE *);|
int      ferror(FILE *);|
int      fflush(FILE *);|
int      fgetc(FILE *);|
int      fgetpos(FILE *restrict, fpos_t *restrict);|
char    *fgets(char *restrict, int, FILE *restrict);|
int      fileno(FILE *);|
FILE    *fopen(const char *restrict, const char *restrict);|
int      fprintf(FILE *restrict, const char *restrict, ...);|
int      fputc(int, FILE *);|
int      fputs(const char *restrict, FILE *restrict);|
size_t   fread(void *restrict, size_t, size_t, FILE *restrict);|
FILE    *freopen(const char *restrict, const char *restrict,FILE *restrict);|
int      fscanf(FILE *restrict, const char *restrict, ...);|
int      fseek(FILE *, long, int);|
int      fsetpos(FILE *, const fpos_t *);|
long     ftell(FILE *);|
size_t   fwrite(const void *restrict, size_t, size_t, FILE *restrict);|
int      getc(FILE *);|
int      getchar(void);|
FILE    *popen(const char *, const char *);|
int      printf(const char *restrict, ...);|
int      putc(int, FILE *);|
int      putchar(int);|
int      puts(const char *);|
int      remove(const char *);|
int      rename(const char *, const char *);|
void     rewind(FILE *);|
int      scanf(const char *restrict, ...);|
void     setbuf(FILE *restrict, char *restrict);|
int      setvbuf(FILE *restrict, char *restrict, int, size_t);|



参考:
https://pubs.opengroup.org/onlinepubs/009695399/basedefs/stdio.h.html
http://www.cplusplus.com/reference/cstdio/


```c
#pragma warning(disable:4996)

#include<stdio.h>
#include<stdlib.h>

void main()
{
	FILE *fp = fopen("./test.txt", "r");
	char c;
	while ((c = fgetc(fp)) != EOF)
		printf("%c", c);
	fclose(fp);
	system("pause");
}
```




































基本上每种语言都是这样,文本文件可以显示给我们看,而二进制文件是每种语言所特有的,比如python的pickle,java的objectwrite

1)文本文件
基于字符编码，常见编码有ASCII、UNICODE等
一般可以使用文本编辑器直接打开
数5678的以ASCII存储形式(ASCII码)为：
00110101 00110110 00110111 00111000

2)二进制文件
基于值编码,自己根据具体应用,指定某个值是什么意思
把内存中的数据按其在内存中的存储形式原样输出到磁盘上
数5678的存储形式(二进制码)为：00010110 00101110



```
typedef struct
{
	short           level;	//缓冲区"满"或者"空"的程度 
	unsigned        flags;	//文件状态标志 
	char            fd;		//文件描述符
	unsigned char   hold;	//如无缓冲区不读取字符
	short           bsize;	//缓冲区的大小
	unsigned char   *buffer;//数据缓冲区的位置 
	unsigned        ar;	 //指针，当前的指向 
	unsigned        istemp;	//临时文件，指示器
	short           token;	//用于有效性的检查 
}FILE;
```


声明FILE结构体类型的信息包含在头文件“stdio.h”中，一般设置一个指向FILE类型变量的指针变量，然后通过它来引用这些FILE类型变量。通过文件指针就可对它所指的文件进行各种操作。






C语言中有三个特殊的文件指针由系统默认打开，用户无需定义即可直接使用:
stdin： 标准输入，默认为当前终端（键盘），我们使用的scanf、getchar函数默认从此终端获得数据。
stdout：标准输出，默认为当前终端（屏幕），我们使用的printf、puts函数默认输出信息到此终端。
stderr：标准出错，默认为当前终端（屏幕），我们使用的perror函数默认输出信息到此终端。


C语言中，EOF表示文件结束符(end of file)。在while循环中以EOF作为文件结束标志，这种以EOF作为文件结束标志的文件，必须是文本文件。在文本文件中，数据都是以字符的ASCII代码值的形式存放。我们知道，ASCII代码值的范围是0~127，不可能出现-1，因此可以用EOF作为文件结束标志。

当把数据以二进制形式存放到文件中时，就会有-1值的出现，因此不能采用EOF作为二进制文件的结束标志。为解决这一个问题，ANSI C提供一个feof函数，用来判断文件是否结束。feof函数既可用以判断二进制文件又可用以判断文本文件。



