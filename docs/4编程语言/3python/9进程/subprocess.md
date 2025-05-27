# subprocess

运行linux的shell命令, 用来替代`os.system()`和`os.popen()`.

- `os.system()`:将结果输出到屏幕，只返回命令执行状态(0：成功，非 0 ： 失败)
- `os.popen()`:将结果保存在内存当中，可以用`read()`方法读取出来

常用方法是`run()`和`Popen()`, `call()`, `check_call()`, `check_output()`这些方法是3.5之前版本的, 现在已经不常使用.

## run()
`subprocess`最长用的是`run()`方法, 它会阻塞主进程直到子进程运行结束.

```python
import subprocess
subprocess.run(popenargs = ["echo", "hello"])
```

等价于在shell或cmd中执行
```shell
echo hello
```

### 参数

参数|描述
--|--
popenargs|列表, 命令行按空格拆解
input| 标准输入
capture_output|捕获`stdout`和`stderr`, 默认不捕获, 所以返回的`CompletedProcess`对象对应属性为`None`
stdout|捕获标准输出, `stdout=PIPE`
stderr|捕获标准错误, `stderr=PIPE`
timeout|阻塞的时间, 超过则报异常
check|如果返回非0, 将抛出`CalledProcessError`
shell|
encoding|当设置`capture_output=True`后, 将stdout和stderr自动转换为字符


1. `input`

    ```python
    # main.py
    import subprocess
    from subprocess import PIPE

    res = subprocess.run(['python', 'hello.py'],
                        input='hello input',
                        encoding='utf8')
    ```

    ```python
    # hello.py 
    import sys
    data = sys.stdin.read()
    print(data)
    ```

2. `shell`

    第一个参数`bash`指定使用`bash`  
    第二个参数`-c`是`command`的意思
    ```python
    import subprocess
    subprocess.run(["bash", "-c", "ls /usr/bin | grep pycode"])
    ```
    使用`shell`参数
    ```python
    subprocess.run(["ls /usr/bin | grep pycode"], shell=True)  # 等价于["sh", "-c", ...]
    ```
    使用`powershell`, 注意`pwsh`和`pwsh.exe`都可以, 或者可以试试`powershell` 或 `powershell.exe`  
    另外第二个参数是`-Command`, 和`bash`不同
    ```python
    import subprocess
    subprocess.run(["pwsh", "-Command", "ls C:\RealPython"])
    ```

    使用`cmd`,
    第二个参数是`/c`
    ```python
    import subprocess
    subprocess.run(["cmd", "/c", "dir C:\RealPython"])
    ```



### 返回

`run()`方法会返回`CompletedProcess`对象. 正如它的名字的`Completed`, 是在子进程完成后才返回.

属性|描述
--|--
`returncode`|子进程的退出状态码, 退出状态码为0则表示进程成功运行了；一个负值-N表示这个子进程被信号N终止了
`stdout`|从子进程捕获的stdout。这通常是一个字节序列, 需要`run()`中传入`capture_output=True`
`stderr`|从子进程捕获的stderr。它的值与stdout一样，是一个字节序列


输出详解:
在`run()`方法中传入`capture_output=True`之后, 返回CompletedProcess对象的`.stdout`将会获得子进程的输出.  
`.stdout`的输出是字节, 我们需要调用`CompletedProcess.stdout.decode("utf-8")`来转化为文本.  
也可以在`run()`传入`encoding`参数来自动将字节转换为文本.
```python
import subprocess
completed_process = subprocess.run(["echo", "hello"],capture_output=True)
completed_process.stdout  # b'hello\n'
```
`capture_output=True`等价于`stdout=subprocess.PIPE`和`stderr=subprocess.PIPE`
```python
import subprocess
completed_process = subprocess.run(["echo", "hello"],stdout=subprocess.PIPE,stderr=subprocess.PIPE)
completed_process.stdout  # b'hello\n'
```
我们可以指定将输出保存到文件
```python
import subprocess
with open('./test.txt',mode='w') as f:
    completed_process = subprocess.run(["echo", "hello"],stdout=f)
```



## Popen()
`Popen()`方法和`run()`方法很像, 传入`run()`的参数都可以传入`Popen()`  
他们俩最大的区别是`Popen()`是非阻塞的, 会并行执行子任务. 
`run()`方法返回`CompletedProcess`对象, 而`Popen()`返回的是`Popen`对象, `CompletedProcess`的标准流指向的是字节对象或字符串, 而`Popen`对象指向的是真正的流.


```python
import subprocess

ls_process = subprocess.Popen(["ls", "/usr/bin"], stdout=subprocess.PIPE)
grep_process = subprocess.Popen(
    ["grep", "python"], stdin=ls_process.stdout, stdout=subprocess.PIPE
)

for line in grep_process.stdout:
    print(line.decode("utf-8").strip())
```



### 参数
参考`run()`, 特别关注以下:

参数|描述
--|--
bufsize|在创建stdin / stdout / stderr管道文件对象时，bufsize将作为open()函数的相应参数. 0 代表unbuffered, 1 代表 line buffered, 其他正数代表buffer size, 负数代表使用系统默认的buffer size (io.DEFAULT_BUFFER_SIZE)
env|环境变量
cwd|如果该参数值不是None，则该函数将会在执行这个子进程之前改变当前工作目录。


### 返回
返回 `Popen`对象.

属性|描述
--|--
PopenObject.poll()|用于检查命令是否已经执行结束，若结束返回状态码；若未结束返回None
PopenObject.wait([timeout, endtime])|等待子进程结束，并返回状态码；若超过timeout(s)进程仍未结束，则抛出异常；
PopenObject.send_signal(signal)|发送信号signal给子进程；
PopenObject.terminate()|停止子进程；
PopenObject.kill()|杀死子进程；
PopenObject.communicate([input, timeout])|与进程进行交互（如发送数据到stdin、读取stdout和stderr数据），它会阻塞父进程，直到子进程完成；
PopenObject.pid|继承ID



字节流控制:
1. PopenObject.stdin：
    若PopenObject中stdin为PIPE，则返回一个可写流对象；若encoding或errors参数被指定或universal_newlines参数为True，则此流是一个文件流，否则为字节流。
    若PopenObject中stdin不是PIPE，则属性为None。
    stdin输入流非None，可执行写操作即PopenObject.stdin.write(s)

2. PopenObject.stdout：
    若PopenObject中stdout为PIPE，则返回一个可读流对象；若encoding或errors参数被指定或universal_newlines参数为True，则此流是一个文件流，否则为字节流。
    若PopenObject中stdout不是PIPE，则属性为None。
    stdout输出流非None，可执行读操作即PopenObject.stdout.read()或.readlines()

3. PopenObject.stderr：
    若PopenObject中stderr为PIPE，则返回一个可读流对象；若encoding或errors参数被指定或universal_newlines参数为True，则此流是一个文件流，否则为字节流。
    若PopenObject中stderr不是PIPE，则属性为None。
    stderr错误流非None，可执行读操作即PopenObject.stderr.read()或.readlines()






## 应用

### 执行python文件, 并传参
```python
import subprocess
subprocess.run(["python", "timer.py", "5"])
```


```python
## timer.py

from argparse import ArgumentParser
from time import sleep

## 初始化参数接收器
parser = ArgumentParser()
parser.add_argument("time", type=int)

## 获取输入的参数
args = parser.parse_args()

## 打印
print(f"Starting timer of {args.time} seconds")
for _ in range(args.time):
    print(".", end="", flush=True)
    sleep(1)
print("Done!")
```


### 使用虚拟环境

```python
import subprocess

subprocess.Popen(["virtualenv1/bin/python", "my_script.py"])
subprocess.Popen(["virtualenv2/bin/python", "my_other_script.py"])

```


### 异常处理

```python
import subprocess
try:
    subprocess.run(
        ["***"], timeout=10, check=True
    )
except FileNotFoundError as exc:
    print(f"Process failed because the executable could not be found.\n{exc}")
except subprocess.CalledProcessError as exc:
    print(
        f"Process failed because did not return a successful return code. "
        f"Returned {exc.returncode}\n{exc}"
    )
except subprocess.TimeoutExpired as exc:
    print(f"Process timed out.\n{exc}")
```

参考:
https://realpython.com/python-subprocess/