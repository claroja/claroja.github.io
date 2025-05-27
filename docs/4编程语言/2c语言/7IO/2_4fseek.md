方法|描述
--|--
fgetpos|Get current position in stream (function )
fsetpos|Set position indicator of stream (function )
ftell|Get current position in stream (function )
fseek|Reposition stream position indicator (function )
rewind|Set position of stream to the beginning (function )


ftell() 和 fseek() 用长整型表示文件内的偏移 (位置)
fgetpos() 和 fsetpos() 函数使用 了一个特殊的类型定义 fpos_t 来表示偏移量


参考:
http://blog.sina.com.cn/s/blog_ade902fe0101l4yd.html
http://www.cplusplus.com/reference/cstdio/
http://www.gnu.org/software/libc/manual/html_node/I_002fO-on-Streams.html#I_002fO-on-Streams