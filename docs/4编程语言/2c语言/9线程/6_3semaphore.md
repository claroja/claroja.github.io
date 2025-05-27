互斥锁只能将整个数据对象锁住,所以会导致并发性下降.
就是给生产者消费者中间件加了一个计数工具,有几把锁就对应了有几个产品,生产一个产品,就增加一把锁,消费一个产品就减少一把锁


函数|描述
--|--
sem_init|
sem_destroy|
sem_wait|信号量大于0，则信号量--,信号量等于0，造成线程阻塞
sem_trywait|	
sem_timedwait|
sem_post|将信号量++，同时唤醒阻塞在信号量上的线程


参考:
https://blog.csdn.net/qq_19923217/article/details/82902442