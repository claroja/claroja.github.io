---
title: python_process_subprocess
toc: true
date: 2021-11-02 8:14:54
tags:
---

运行linux的shell命令, 用来替代`os.system()`和`os.popen()`.
- `os.system()`:将结果输出到屏幕，只返回命令执行状态(0：成功，非 0 ： 失败)
- `os.popen()`:将结果保存在内存当中，可以用`read()`方法读取出来

# 应用
```python
import subprocess
res = subprocess.run(["df", "-h"],stdout=subprocess.PIPE,stderr=subprocess.PIPE)  # 指定stdout和stderr才能获取结果,否则直接打印到标准输出
res.args
res.returncode
res.stderr
res.stdout
```



# API

方法|描述
--|--
run(args,shell,returncode)|	args传入参数`["df","-h"]`,shell为true则args可以传入shell命令行，shell自己解析参数
call()|返回命令的结果和执行状态，0或者非0
check_call()|返回结果和状态，正常为0 ，执行错误则抛出异常
getstatusoutput()|返回 一个元组(命令执行状态,执行结果)
getoutput()	|执行结果
check_output()|执行结果,以自己的的形式
Popen()|基础方法，以上方法都是对此方法的封装，以下是Popen方法返回对象的方法
poll()|定时检查命令有没有执行完毕，完毕返回0，否则返回None
wait()|等待命令执行完成，回结果状态
terminate()|结束进程
pid|子shell的pid