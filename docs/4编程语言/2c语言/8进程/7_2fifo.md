`pipe`管道由于`fork`机制只能用于父与子,子与子的进程中间.
而`fifo`又称命名管道(named pipe)可以使任意进程进行通信
之所以称命名管道为`fifo`是因为本质上是一个先进先出的队列数据结构
`fifo`是特殊文件类型,有对应路径.实际上由内核管理,不与硬盘打交道.
`fifo`可以通过文件路径来识别管道,从而使不相关的进程进行通信.



FIFO是Linux基础文件类型中的一种。仅仅用来标识内核中一条通道。各进程可以打开这个文件进行read/write，实际上是在读写内核通道



`int mkfifo(const char *pathname,  mode_t mode);  成功：0； 失败：-1`
`int res = mkfifo("/tmp/my_fifo", 0777);`
在/`tmp`文件夹下创建命名管道



参考:
https://www.cnblogs.com/xiaoshiwang/p/10794806.html