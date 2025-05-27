# asyncio


## 代码对比

1. 普通写法
    ```python
    #!/usr/bin/env python3
    # countsync.py

    import time

    def count():
        print("One")
        time.sleep(1)
        print("Two")

    def main():
        for _ in range(3):
            count()

    if __name__ == "__main__":
        s = time.perf_counter()
        main()
        elapsed = time.perf_counter() - s
        print(f"{__file__} executed in {elapsed:0.2f} seconds.")
    ```

2. 协程 写法

    ```python
    #!/usr/bin/env python3
    # countasync.py

    import asyncio

    async def count():
        print("One")
        await asyncio.sleep(1)
        print("Two")

    async def main():
        await asyncio.gather(count(), count(), count())

    if __name__ == "__main__":
        import time
        s = time.perf_counter()
        asyncio.run(main())
        elapsed = time.perf_counter() - s
        print(f"{__file__} executed in {elapsed:0.2f} seconds.")
    ```

## 对比

1. `time.sleep(1)`与`asyncio.sleep(1)`
    1. time.sleep(1)是阻塞(blocking)调用, 当前进程会停止等待
    2. asyncio.sleep(1)是非阻塞调用, 进程会先执行其他任务, 等待该行代码执行完毕, 再回到此处继续执行
2. `await`与`async`
    1. `async`声明一个函数是异步的
    2. `await`告诉进程, 不要等待这一行代码, 先去执行其他的异步方法. 等这行代码有结果了之后, 再来执行.
3. `asyncio.gather()`

    开了一个协程池, 在该池子里的协程都可以异步调用



## 参考

1. https://realpython.com/async-io-python/
2. https://medium.com/@moraneus/mastering-pythons-asyncio-a-practical-guide-0a673265cf04
3. https://blog.csdn.net/weixin_41599977/article/details/93656042