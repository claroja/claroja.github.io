# 第三编合同-第二分编典型合同-第十五章融资租赁合同


```sh
   CC credential-store.o
In file included from cache.h:4:0,
                from credential-store.c:1:
git-compat-util.h:280:25: 致命错误：openssl/ssl.h：没有那个文件或目录
 #include <openssl/ssl.h>
                        ^
编译中断。
make: *** [credential-store.o] 错误 1
```
报这个错误的原因是没有安装libssl-dev，需要`sudo yum install openssl-devel`

参考:
https://www.jianshu.com/p/1ad292323d96
https://blog.csdn.net/claroja/article/details/107749764