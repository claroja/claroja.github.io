# inode

inode(index node)描述文件或目录的系统对象。每个inode存储对象数据的属性(上次更改的时间、访问、修改)和磁盘块位置。
文件的真实数据不存储在inode中，而是存储在称为"数据块"的地方
每个文件都与inode相关联，inode由整数标识，通常称为i-number或inode号。
使用ls -i命令可以找到文件的inode号。ls-i命令在报表的第一列中打印 i-node编号。
文件的标识是它的inode号，而不是它的名称。

inode包含的信息:
File types ( executable, block special etc )
Permissions ( read, write etc )
UID ( Owner )
GID ( Group )
FileSize
Time stamps including last access, last modification and last inode number change.
File deletion time
Number of links ( soft/hard )
Location of file on harddisk
Some other metadata about file.

使用ls -i命令可以找到文件的inode号。ls-i命令在报表的第一列中打印 i-node编号。
```sh
rockydeMacBook-Pro:~ rocky$ ls -i
14373725 Applications       624053 Movies           14740502 account.txt
624013 Desktop              624055 Music            3800781 default-soapui-workspace.xml
623997 Documents            624057 Pictures         4320031342 node_modules
623999 Downloads            624059 Public           3800780 soapui-settings.xml
624001 Library              670752 Work
```

如果知道了文件的inode编号，那么可以使用下面的命令来查找文件：

```sh
rockydeMacBook-Pro:Work rocky$ ls -i
13583397 config_datasource.properties   13964509 npm-debug.log          13175726 workspace
2913703 document              674806 project
13822742 idea                 670756 software
rockydeMacBook-Pro:Work rocky$ find . -inum 13583397 -print
./config_datasource.properties
rockydeMacBook-Pro:Work rocky$ 

```



## hardlink
hardlink是一个指向inode的名称。这意味着如果file1有一个名为file2的hardlink，那么这两个文件都引用相同的inode。因此，当您为一个文件创建一个hardlink时，您真正要做的就是为一个inode添加一个新的名称。为此，请使用不带选项的ln命令。关于hard links的有趣之处在于原始文件和link之间没有差异：它们只是连接到同一inode的两个名称。
```sh
## ls -l /home/bobbin/sync.sh  
-rw-r----- 1 root root 5 Apr 7 06:09 /home/bobbin/sync.sh
## ln /home/bobbin/sync.sh synchro
## ls -il /home/bobbin/sync.sh synchro 
517333 -rw-r----- 2 root root 5 Apr 7 06:09 /home/bobbin/sync.sh
517333 -rw-r----- 2 root root 5 Apr 7 06:09 synchro
```

## inode随复制、移动和删除而更改
复制文件：CP分配一个空闲的inode编号，并在inode表中放置一个新条目。
```sh
#### Check inode of existing file 
$ ls -il  myfile.txt
1150561 -rw-r--r-- 1 root root 0 Mar 10 01:06 myfile.txt

#### Copy file with new name 
$ cp myfile.txt myfile_new.txt

#### Check inode number of new file. Its changed 
$ ls -il myfile_new.txt
1150562 -rw-r--r-- 1 root root 0 Mar 10 01:09 myfile_new.txt

```
移动或重命名文件：如果目标与源文件系统相同，对inode编号没有影响，它只更改inode表中的时间戳。
```sh
#### Check inode of existing file 
$ ls -il  myfile.txt
1150561 -rw-r--r-- 1 root root 0 Mar 10 01:06 myfile.txt

#### Moved file to another directory 
$ mv myfile.txt /opt/

#### Check inode number of moved file. No change in inode 
$ ls -il /opt/myfile.txt
1150561 -rw-r--r-- 1 root root 0 Mar 10 01:06 /opt/myfile.txt
```

删除一个文件：在Linux中删除一个文件，减少链接计数，释放的inode编号会被重用。



## 总结
总结：文件通过文件名进行访问，但事实上，对于文件本身并不与文件名称直接相关联。相反，文件通过inode来访问，inode使用唯一的数值进行标志。该值称为inode编号（inode number），通常简写为i-number或者ino。


参考:
https://www.jianshu.com/p/101e43dfff30