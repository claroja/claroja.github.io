# 传参



`argparse.ArgumentParser(description='描述这个命令行')`用来创建一个参数解析器, 可以传入对该命令的描述


`parser.add_argument()`具体设置命令行参数.

参数|描述
--|--
name|参数的名字, 用于获取该参数, 带`--`的是可选(字典)参数, 不带是位置参数
type|参数的类型, `int`,`str`等
help|在命令行使用`-h`时, 描述该参数
nargs|将位置参数整合成列表
default|可选参数的默认值
required|可选参数必须存在







## 位置参数
按先后顺序传入,中间使用空格隔开

```python
## control.py
import argparse
parser = argparse.ArgumentParser(description='描述这个命令行')
#type是要传入的参数的数据类型  help是该参数的提示信息
parser.add_argument('num', type=int, help='传入的数字')
args = parser.parse_args()
#获得传入的参数
print(args)
print(args.num)
```

查看帮助:

```sh
python control.py -h

## usage: control.py [-h] num

## 描述这个命令行

## positional arguments:
##   num         传入的数字

## options:
##   -h, --help  show this help message and exit
```

运行:

```sh
python control.py 1 

## Namespace(num=1)
## 1
```
`Namespace(num=1)`是一种类似于`python`字典的数据类型, 可以使用`arg.参数名`来提取这个参数


### 传入多个参数

1. `nargs='*'` 表示参数可设置零个或多个
2. `nargs='+'` 表示参数可设置一个或多个
3. `nargs='?'`  表示参数可设置零个或一个


```python
import argparse
parser = argparse.ArgumentParser(description='描述这个命令行')
#type是要传入的参数的数据类型  help是该参数的提示信息
parser.add_argument('num', type=int, help='传入的数字')
parser.add_argument('str', type=str, help='传入的字符')
args = parser.parse_args()
#获得传入的参数
print(args)  # Namespace(num=1, str='a')
```



```sh
python control.py 1 a
## Namespace(num=1, str='a')
```

### 多个参数作为一个列表参数
使用`nargs`参数来控制

```python
import argparse
parser = argparse.ArgumentParser(description='描述这个命令行')
#type是要传入的参数的数据类型  help是该参数的提示信息
parser.add_argument('num', type=int, nargs='+', help='传入的数字')
args = parser.parse_args()
#获得传入的参数
print(args)

```

```sh
python control.py 1 2
## Namespace(num=[1, 2])
```


## 可选参数(字典参数)
关键词前面加`--`

```python
import argparse
parser = argparse.ArgumentParser(description='描述这个命令行')
#type是要传入的参数的数据类型  help是该参数的提示信息
parser.add_argument('num', type=int, help='传入的数字')
parser.add_argument('--str', type=str, help='传入的字符')
args = parser.parse_args()
#获得传入的参数
print(args)
```


```sh
python control.py 1 --str a
## Namespace(num=1, str='a')
```


### 默认值


```python
import argparse
parser = argparse.ArgumentParser(description='描述这个命令行')
#type是要传入的参数的数据类型  help是该参数的提示信息
parser.add_argument('--num', type=int, help='传入的数字', default=0)
args = parser.parse_args()
#获得传入的参数
print(args)

```


```sh
python control.py
## Namespace(num=0)

```

### 必须参数
```python
import argparse
parser = argparse.ArgumentParser(description='描述这个命令行')
#type是要传入的参数的数据类型  help是该参数的提示信息
parser.add_argument('--num', type=int, help='传入的数字', default=0, required=True)
args = parser.parse_args()
#获得传入的参数
print(args)

```


```sh
python control.py
## usage: control.py [-h] --num NUM
## control.py: error: the following arguments are required: --num
```