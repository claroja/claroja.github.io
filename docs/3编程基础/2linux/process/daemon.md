# daemon

 I think one of the reasons why daemon threads are confusing to most people(atleast they were to me) is because of the Unix context to the word dameon.

In Unix terminology the word `daemon` refers to just a process in the background. If you want to start your program when the OS boots, on linux, you add your start command to `/etc/rc.d/rc.local` (run after all other scripts) or `/etc/startup.sh`

In Python threading context, every thread upon creation runs in the background, whether it is `daemon` or `non-daemon`, the difference comes from the fact how these threads affect the main thread.

When you start a `non-daemon` thread, it starts running in background and you can perform other stuff, however, your main thread will not exit until all such non-daemon threads have completed their execution, so in a way, your program or main thread is blocked.

With `daemon` threads they still run in the background but with one key difference that they do not block the main thread. As soon as the main thread completes its execution & the program exits, all the remaining daemon threads will be reaped. This makes them useful for operations which you want to perform in background but want these operations to exit automatically as soon as the main application exits.

refs:
https://stackoverflow.com/questions/190010/daemon-threads-explanation
https://stackoverflow.com/questions/17954432/creating-a-daemon-in-linux