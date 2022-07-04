---
title: python_process_event
toc: true
date: 2021-11-02 8:14:54
tags:
---

```python
from multiprocessing import Process, Event
import time

def worker(name, event):
    while not event.is_set():
        print('Process_%s is ready' % name)
        event.wait(1)
    print('Process_%s is running' % name)

if __name__ == '__main__':
    event = Event()
    for i in range(0, 2):
        Process(target=worker, args=(i, event)).start()
    time.sleep(3)
    event.set()
```