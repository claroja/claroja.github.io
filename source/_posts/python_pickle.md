---
title: python_pickle
toc: true
date: 2021-11-02 8:14:54
tags:
---

# 简介
pickle模块实现了用于对Python对象结构进行序列化和反序列化的二进制协议。“Pickling”是将Python对象转换为字节流的过程，“unpickling”是反向操作，由此字节流二进制文件或字节对象）转换回对象结构。
# 模块方法
pickle.dump(obj, file, protocol=None, *, fix_imports=True)
将obj以二进制形式写入file-object文件
pickle.dumps(obj, protocol=None, *, fix_imports=True)
将obj编译为二进制对象
pickle.load(file, *, fix_imports=True, encoding="ASCII", errors="strict")
dump的反向操作
pickle.loads(bytes_object, *, fix_imports=True, encoding="ASCII", errors="strict")
dumps的反向操作



[python读写序列（pickle）](http://blog.csdn.net/claroja/article/details/72465703)