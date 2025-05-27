# for

## range循环

```shell
#!/bin/bash
for i in $(seq 1 10)
do
	echo $i;
done
```


## 多个具体值用空格隔开    
```shell ＃　循环输出具体的值                                                
for i in 1 2 3                                                                  
do                                                                              
    echo $i                                                                     
done 
```

## 使用命令
```shell
for i in $(ls) ＃　遍历ｌｓ命令的结果                                                                 
do                                                                              
    echo $i                                                                     
done  
```


## 使用通配符
```shell
#!/bin/bash                                                                     
for i in .* # .开头的所有文件
do                                                                              
    echo $i                                                                     
done

```

## 使用列表类型变量
注意for 遇到空白符,比如空格或者`\t`都会当成一个元素来对待
```shell
#!/bin/bash                                                                     
my_array="A B 'C'\tD"                                                                                                                                     
for i in $my_array                                                              
do                                                                              
    echo $i                                                                     
done  
```