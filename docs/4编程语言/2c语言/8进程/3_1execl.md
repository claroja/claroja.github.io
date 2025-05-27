# 基础
1.`exec`族函数是产生新进程,替换原有的进程,所以pid不会改变.

# 函数


函数|描述
--|--
int execl(cONst char *path, const char *arg, ...);|
int execlp(const char *file, const char *arg, ...);|
int execle(const char *path, const char *arg, ..., char *const envp[]);|
int execv(const char *path, char *const argv[]);|
int execvp(const char *file, char *const argv[]);|
int execve(const char *path, char *const argv[], char *const envp[]);|

1. execv开头函数,是参数以`char *argv[]`形式传递参数;而`execl`则是讲参数一个一个列出来,然后以`NULL`表示结束,也可以写程`(char *)0`
2. 以p结尾的函数`execlp`和`execvp`,可以自动读取环境变量中的path,所以不需要输入命令的完整路径
3. `execle`和`execve`使用`char *envp[]`来改变环境变量





参考:
https://blog.csdn.net/aile770339804/article/details/7443921