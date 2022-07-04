---
title: python_pathlib
toc: true
date: 2021-10-29 8:14:54
tags:
---

# 获得路径
获得路径, 一般使用`cwd`获得绝对路径, 因为很多属性和方法都需要使用绝对路径
```python
from pathlib import Path
path = Path.cwd()  # 当前绝对路径
path = Path("./")  # 当前文件的相对路径
path.resolve()  # 相对路径转绝对路径
```

# 遍历
```python
[x for x in path.iterdir() if x.is_dir()]  # 目录下所有目录
[x for x in path.iterdir() if x.is_file()]  # 目录下所有文件
list(path.glob('**/*.py'))  # 目录及递归所有子目录下所有py文件, **代表递归所有子目录
list(path.glob('*/*.py'))  # 目录下所有一级子目录下所有py文件, *达标通配符
```

# 一些实用的判断
```python
path.exists()
path.is_dir()
path.is_file()
path.is_absolute()
```

# 文件夹操作
```python
path.rmdir() #
path.mkdir()  # 创建
```

# 操作
```python
path.parts
path.drive # 获得盼复
path.parents  # 获得父路径
>>> p = PureWindowsPath('c:/foo/bar/setup.py')
>>> p.parents[0]
PureWindowsPath('c:/foo/bar')
>>> p.parents[1]
PureWindowsPath('c:/foo')
>>> p.parents[2]
PureWindowsPath('c:/')
```


参考:
https://docs.python.org/3/library/pathlib.html