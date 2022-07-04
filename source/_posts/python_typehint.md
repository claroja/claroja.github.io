---
title: python_typehint
toc: true
date: 2021-11-26 22:03:54
tags:
---


```python
import pandas as pd
df = pd.read_csv("./test.csv")
df.
```
python是动态强类型语言，IDE无法判断`df.`的返回值类型，无法根据参数类型自动补全。

# 类型注解
```python
import pandas as pd
df = pd.read_csv("./test.csv") # type: pd.DataFrame
df.
```

# 指定参数类型

```python
def func(param: str):
    param.
```

# 指定返回类型

```python
def func() -> str:
    pass

f = func()
f.
```

# 指定局部变量的类型

```python
df = pd.read_csv("./test.csv") # type: pd.DataFrame
df.
```


参考:
https://www.cnblogs.com/Jimc/p/9602987.html