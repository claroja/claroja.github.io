# 基础
1. #include<unistd.h>
2.win下没有`unistd.h`要替换成:
```c
#ifndef _UNISTD_H
#define _UNISTD_H
#include <io.h>
#include <process.h>
#endif /* _UNISTD_H */
```

# read
1. `ssize_t read(int fd,void*buf,size_t count)`
2. 参数
参数|描述
--|--
fd|默认为一般为3,0,1,2是stdin,stdout,stderr
buf|要读入的数据
count|读入的字节数,读后位置后移

3.返回
成功:返回读出的字节数
失败:返回-1

# write
1. `ssize_t write(int fd,const void*buf,size_t count);`
2. 参数
参数|描述
--|--
fd|默认为一般为3,0,1,2是stdin,stdout,stderr
buf|要写出的数据
count|是每次写出的字节数
3.返回
成功:返回写出的字节数
失败:返回-1

# dup
```c
#ifndef _UNISTD_H
#define _UNISTD_H
#include <io.h>
#include <process.h>
#endif /* _UNISTD_H */
//#include <unistd.h>
#include <fcntl.h>
#include <stdio.h>


int main()
{
	int fd;
	fd = open("./test.txt", O_WRONLY | O_TRUNC | O_CREAT);
	close(1); //关闭文件描述符1,既stdout
	dup2(fd, 1); //将文件描述符1,对应的位置输出指向换成fd对应的位置输出指向
	printf("Hello World!\n"); //把请按任意键继续都打印进去了
	system("pause");
}

```

1. 初始化进程,默认0,1,2,对应stdin,stdout,stderr,都输出到屏幕

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/c1522b8580bc5278d022046997e7e6de.png)



2. `fd=open(...)`,新打开一个文件描述符,指向文件

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/e6a8ba7973a568e3452df16c5cbb7266.png)

3. `close(1)`,将文件描述符1对应的指向删除,此时对1做任何操作都无效

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/96341b5e42a4d13d818ed65cc20cc3ee.png)



4. `dup2(fd, 1);`,将fd的指向复制给1,所以此时对1的输出都写入到文件里
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/5541e8367825750080d2cb18f86fe425.png)
5. `printf`默认的输出文件描述符是1,所以输出任何东西都会定向到文件里



# 例子
```c
#define _UNISTD_H
#include <io.h>
#include <process.h>
#endif /* _UNISTD_H */
//#include <unistd.h>
#include <fcntl.h>
#include <stdio.h>


int main()
{
	char wbuf[] = "wang";
	char rbuf[] = "zhao";
	int fd = open("test.txt", O_RDWR |O_CREAT);
	printf("%d\n", fd);
	write(fd, wbuf, 4);

	read(fd, rbuf, 4);
	printf("%s\n", rbuf);
	system("pause");
}
```

参考:
http://www.gnu.org/software/libc/manual