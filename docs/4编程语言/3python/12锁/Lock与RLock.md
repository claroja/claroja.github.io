# Lock与RLock



## Lock Objects
基础的lock只有两个状态"locked"和"unlocked". 创建的时候是"unlocked"状态, 它有两个基本的方法"acquire()"和"release()". "acquire()"将"unlocked"状态转换为"locked"状态,"release()"将"locked"状态转换为"unlocked"状态.

### 构造方法

`class threading.Lock`是一个factory function, 返回 instance of Lock class

### 对象方法
方法|描述
--|--
acquire(blocking=True, timeout=- 1)|获得锁
release()|释放锁
locked()|如果已经上锁 ,则返回true
参数描述:
blocking:它是一個可選參數，用作阻塞標誌。如果設置為 True，調用線程將在其他線程持有該標誌時被阻塞，一旦該鎖被釋放，調用線程將獲取該鎖並返回 True。如果設置為 False，則如果其他線程已獲取鎖，則不會阻塞該線程，並返回 False。其默認值為 True。
timeout:它是一個可選參數，它指定如果其他方法當前正在獲取鎖，調用線程將被阻塞的秒數。它的默認值是 -1，表示線程將被無限期阻塞，直到它獲得鎖。


## RLock Objects
reentrant lock可以被同一个thread多次上锁.一个线程获得了reentrant lock, 它可以在不阻塞的情况下再获得一个锁.上锁和释放锁的操作要成对出现.

### 构造方法 
`class threading.RLock`是一个factory function, 返回 instance of RLock class


### 对象方法

方法|描述
--|--
acquire(blocking=True, timeout=- 1)|获得锁
release()|释放锁