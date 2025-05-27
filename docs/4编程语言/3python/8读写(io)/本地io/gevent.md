# gevent



当遇到I/O阻塞时，协程会自动切换到其他的协程上，然后等I/O完成时再切换回来。
```
import gevent

def foo():
    print('foo1')
    gevent.sleep(0)
    print('foo2')

def bar():
    print('bar1')
    gevent.sleep(0)
    print('bar2')

gevent.joinall([
    gevent.spawn(foo),
    gevent.spawn(bar),
])
```
执行的结果：
```
foo1
bar1
foo2
bar2
```

通过yield也可以实现协程。

参考文献：
http://sdiehl.github.io/gevent-tutorial/
http://python.jobbole.com/84301/
https://www.liaoxuefeng.com/wiki/001374738125095c955c1e6d8bb493182103fac9270762a000/001407503089986d175822da68d4d6685fbe849a0e0ca35000