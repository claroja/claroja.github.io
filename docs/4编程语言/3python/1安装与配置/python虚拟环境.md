# 虚拟环境

## 创建虚拟环境
`python3 -m venv PATH`创建虚拟环境相当于安装了一个新的python环境, 目录如下:

- `Include/  `
- `Lib/` 虚拟环境的第三方包 
- `pyvenv.cfg`  记录了该虚拟环境的配置信息:

  ```sh
  home = D:\Scoop\apps\python\current # 创建虚拟环境的父环境
  include-system-site-packages = false  # 是否包含父环境的包
  version = 3.10.8  # 父环境的python版本
  ```

- `Scripts/` `python.exe`和`pip.exe`的位置
- `share/`



## 使用虚拟环境
- 直接使用

可以直接执行`PATH/Scripts/python.exe`来使用

- 激活虚拟环境

相当于把虚拟环境的`python.exe`添加到了环境变量, 不需要输入全路径

  1. 激活

      win: `Scripts\activate.bat`  
      linux: `source <venv>/bin/activate`

  2. 退出

      `deactivate`







参考:
https://docs.python.org/zh-cn/3/library/venv.html
