# 基础
`printl()`函数底层调用的是`write()`函数
文件描述符

Linux中会将所有的设备都当做文件来处理,每个文件对应一个文件描述符(file descriptor).所有的I/O操作都会调用文件描述符.
比如文件描述符0对应的是标准输入,就是我们的键盘.
文件描述符1对应的是标准输出,就是我们的console.
可以使用`exec`命令来改变文件描述符对应的文件(设备)
`exec 1 > test`

查看系统级别最大打开文件数`sysctl -a | grep fs.file-max` 197185
查看用户级别最大打开文件数`ulimit -n` 1024
也就是说系统为了不让某个进程占用全部文件描述符,设置了用户级别限制,所以可以通过更改用户级别限制来优化服务器

临时修改文件描述符上限:`ulimit -SHn 65535`
永久修改可以配置`/etc/security/limits.conf`文件


系统为每一个进程维护了一个文件描述符表,表默认是`0~1023`
如果新打开一个文件描述符(包含socket),是从最小的文件描述符开始占用
文件描述符总共有1024个(0stdin,1stdout,2stderr),可以关掉(0,1,2)文件描述符
## open
1. open来自fcntl.h,系统级;fopen()来自stdlib.h,用户级
2. 示例
```c
int   open(const char *path, int oflag, ... /*mode_t mode*/ );
int fd = open("path/to/file", O_RDONLY);
int fd = open("test.txt", O_WRONLY | O_TRUNC | O_CREAT, 0664);
```
参数|描述
--|--
pathname|
flags|必选项O_RDONLY-O_WRONLY-O_RDWR&可选项O_APPEND-O_CREAT-O_EXCL-O_NONBLOCK
mode|权限位(mode & ~umask)

返回值:
最小可用的文件描述符,失败返回-1,设置errnum



3. oflag
flag|描述
--|--
O_RDONLY |open for reading only
O_WRONLY |open for writing only
O_RDWR| open for reading and writing
O_APPEND |append on each write
O_CREAT |create file if it does not exist
O_TRUNC |truncate size to 0

4. mode
mode|描述
--|--
S_IRUSR 00400 |owner has read permission
S_IWUSR 00200| owner has write permission
S_IXUSR 00100 |owner has execute permission
S_IRGRP 00040 |group has read permission
S_IWGRP 00020 |group has write permission
S_IXGRP 00010 |group has execute permission
S_IROTH 00004 |others have read permission
S_IWOTH 00002| others have write permission
S_IXOTH 00001| others have execute permission


# create
1. `int creat (const char *filename, mode_t mode)`
2. create 等价于`open (filename, O_WRONLY | O_CREAT | O_TRUNC, mode)`


# close
1. `int close (int filedes)`
成功返回0,失败返回-1,设置errnum



# 例子
1. stdin,stdout,stderr的文件描述符分别是0,1,2
```c
#pragma warning(disable:4996)
#include <fcntl.h>
#include <stdio.h>

int main()
{
	int fd = open("test.txt", O_WRONLY);
	printf("%d\n", fd); //一般为3,其余的被stdin,stdout和stderr占用
	close(fd);
	system("pause");
}
```
参考:
https://blog.csdn.net/claroja/article/details/103580327
http://www.gnu.org/software/libc/manual/html_node/Opening-and-Closing-Files.html#Opening-and-Closing-Files
http://www.gnu.org/software/libc/manual/