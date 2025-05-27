NumPy 能够找到多项式和线性方程的根，但它无法找到非线性方程的根，如下所示：
```python
x + cos(x)
```
因此我们可以使用 SciPy 的 optimze.root 函数，这个函数需要两个参数：

1. fun - 表示方程的函数。
1. x0 - 根的初始猜测。

```python
from scipy.optimize import root
from math import cos

def eqn(x):
  return x + cos(x)

myroot = root(eqn, 0)

print(myroot)
```


## 参考
1. https://www.runoob.com/scipy/scipy-optimize.html