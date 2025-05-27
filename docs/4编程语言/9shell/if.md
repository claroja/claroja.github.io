# if


## syntax

```shell
if [ 条件判断式 ] ; then 
    程序
fi
```

**注意**
1.if语句使用fi结尾，和一般语言使用大括号结尾不同。
2.[ 条件判断式 ] 就是使用test命令判断，所以中括号和条件判断式之间必须有空格
3.then后面跟符号条件之后执行的程序，可以放在[]之后，用“;”分割，也可以换行写入，就不需要"；"了。

## example
```sh
eg:#!/bin/sh
if  [ -x  /etc/rc.d/init.d/httpd ]
    then
    /etc/rc.d/init.d/httpd restart
fi
```
