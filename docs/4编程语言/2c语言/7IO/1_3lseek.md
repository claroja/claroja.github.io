# 基础
1. read和write操作后,文件的position会改变
2. stream使用fseek,descriptor使用lseek
3. 



# 方法
# lseek
1. 根据文件描述符改变文件的positon
```c
#include <sys/types.h>
#include <unistd.h>
off_t lseek(int fd, off_t offset, int whence);
```

2. 参数
参数|描述
--|--
filedes|文件描述符
offset|偏移量
whence|SEEK_SET, SEEK_CUR, or SEEK_END.
3. 返回:
成功:返回到开始的长度
失败:-1设置errno


```c
char buf[256];
int fd = open("./test.txt",O_RDWR);
write(fd,buf,ret);
lseek(fd,0,SEEK_SET);//将偏移移动到文件头
int ret = read(fd,buf,sizeof(buf));

```



拓展文件

```c
lseek(fd,0,SEEK_SET);//将偏移移动到文件头
write(fd,"a",ret);
```
参考:
http://www.gnu.org/software/libc/manual/html_node/File-Position-Primitive.html#File-Position-Primitive