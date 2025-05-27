线程同步:按预定的先后次序运行




`int pthread_mutex_init(pthread_mutex_t *restrict mutex, const pthread_mutexattr_t *restrict attr);`
参1：传出参数，调用时应传 &mutex
restrict关键字：所有修改该指针指向内存中内容的操作，只能通过本指针完成。
参2：互斥量属性。是一个传入参数，通常传NULL，选用默认属性(线程间共享)。

可以静态初始化:
`pthead_mutex_t muetx = PTHREAD_MUTEX_INITIALIZER;`
也可以动态初始化:
`pthread_mutex_init(&mutex, NULL)`


互斥量
函数|描述
--|--
pthread_mutex_lock|加锁(阻塞,如果有锁就等待)
pthread_mutex_trylock|尝试加锁(非阻塞,如果有锁返回错误)
pthread_mutex_unlock|解锁

pthread_mutex_destroy


互斥量使用步骤:
1.初始化
2.加锁
3.执行逻辑(操作共享数据,只在共享数据方面加锁,最小力度)
4.解锁


死锁
交叉锁:如果需要两把锁,每个线程获取锁的顺序要固定,或者如果第一把锁成功,第二把锁失败的话,则及时释放第一把锁