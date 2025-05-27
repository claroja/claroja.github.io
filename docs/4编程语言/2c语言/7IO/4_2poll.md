```c
#include <poll.h>
int poll(struct pollfd *fds, nfds_t nfds, int timeout);

struct pollfd {
	int fd; /* 文件描述符 */
	short events; /* 监控的事件 */
	short revents; /* 实际发生的事件 */
};
```

	nfds 			监控数组中有多少文件描述符需要被监控
	timeout 		毫秒级等待
		-1：阻塞等，
		0：立即返回，不阻塞进程
		>0：等待指定毫秒数
