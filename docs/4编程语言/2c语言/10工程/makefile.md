命名规则:
makefile
Makefile

三要素
目标:依赖
规则命令


```c
temp=main.o add.o sub.o
#使用变量$(temp)
main:$(temp)
        gcc -o main -I ./h main.o add.o sub.o
main.o:main.c
        gcc -c main.c -I ./h
sub.o:sub.c
        gcc -c sub.c -I ./h
add.o:add.c
        gcc -c add.c -I ./h

```

各个文件可以参考gcc文章




`$(wildcard *.c)` 获得所有`.c`文件
`$(patsubst %.c,%.o,$(wilfcard *.c))`
`$@`代表目标
`$^`全部依赖
`$<`第一个依赖
`$?`


```
cf = $(wildcard *.c)# 获得所有`.c`文件名
of = $(patsubst %.c,%.o,$(cf)) # 获得`.c`转换`.o`的文件名
main:$(of)
        gcc -I ./h -o main $(of)
%.o:%.c
        gcc -c $< -I ./h
.PHONY:clean #避免已经存在clean造成的冲突
clean:# 一个命令
        -@rm *.o # @之后的命令不会输出
        rm main
```