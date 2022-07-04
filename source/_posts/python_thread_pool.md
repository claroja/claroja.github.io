---
title: python_thread_pool
toc: true
date: 2021-11-02 8:14:54
tags:
---

创建多个线程

```python
from concurrent.futures import ThreadPoolExecutor

def func(p):
    return p*p

if __name__ == "__main__":
    r_lst = []
    tp = ThreadPoolExecutor(5)
    for i in range(10):
        ret = tp.submit(func, i)
        r_lst.append(ret)
    tp.shutdown()  # 阻塞，就有线程池完成任务才继续向下执行
    [print(ret.result()) for ret in r_lst]
```