SciPy中对非线性方程组求解是fslove()函数

```python
"""
计算非线性方程组：
    5x1+3 = 0
    4x0^2-2sin(x1x2)=0
    x1x2-1.5=0
"""


def fun(x):
    x0,x1,x2 = x.tolist()
    return[5*x1+3,4x0^2-2sin(x1x2),x1x2-1.5]

result = optimize.fsolve(fun,[1,1,1])  # [-0.70622057    -0.6    -2.5]



```

## 参考
1. https://blog.csdn.net/ljyljyok/article/details/100552618