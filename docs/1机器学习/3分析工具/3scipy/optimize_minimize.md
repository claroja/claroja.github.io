# optimize



Scipy的optimize模块提供了丰富的数值优化工具，涵盖了全局优化、局部优化以及约束优化等多个方面。



## 一元优化问题
一元优化问题可以表述如下:

$$
\begin{align*}
\underset{x}{\min} \ f(x)\\
s.t. \ x\in[a,b]
\end{align*}
$$

f是优化目标，a,b是自变量的取值范围.



### API
`scipy.optimize.minimize_scalar(fun, bracket=None, bounds=None, args=(),  method='brent', tol=None, options=None)`
1. 参数
    1. fun:优化目标函数
    2. method：优化的方法，有"brent"、'bounded、'golden'三种，也支持自定义。
    3. bracket：一个bracketing区间，'brent','golden'这两种方法中用到，不设定也可以。
    4. bounds：自变量区间，对应上面的a,b，只在method='bounded'时有效. ✨如果自变量x没有区间设定，直接用默认的就可以了，如果x有区间约束，必须用'bounded'方法。
    5. tol,options：设定优化的参数，最小误差、最大迭代次数、是否返回每步的结果等。
    6. args：优化函数的其他输入参数
2. 返回
    1. 返回值的fun是最优函数值
    2. x是最优自变量


### 案例

```python
from scipy.optimize import minimize_scalar

f = lambda x: x ** 2

minimize_scalar(f, bounds = (2, 3), method = 'bounded')
minimize_scalar(f, method = 'brent')
```


## 多元优化问题

多元优化问题的表述跟一元基本一致，把x理解成向量就可以了，求解这一类问题可以用minimize函数。

多元优化问题可以表述如下:

$$
\begin{align*}
\underset{x}{\min} \ f(x)\\
s.t. \ x\in[a,b]\\
g(x)\leq0
\end{align*}
$$


### API
`scipy.optimize.minimize(fun, x0, args=(), method=None, jac=None, hess=None, hessp=None, bounds=None, constraints=(), tol=None, callback=None, options=None)`


method总体可以分为两类：可以加约束的，不可以加约束的。不加约束的，跟单变量基本一致，不再说明。加约束的。
1. 如果要加入bounds（变量的区间），方法必须选L-BFGS-B、TNC、SLSQP中的一种
2. 如果要加入constraint（变量的约束），方法必须选COBYLA、SLSQP、trust_constr中的一种。


对于带约束的优化问题，选SLSQP是最好的。


### 案例
$$
\min_{x_1,x_2,x_3} (x_1 - 1)^2+(x_2 - 1)^2+(x_3 - 1)^2 \\
s.t. \begin{cases}
x_1 \in [0,1] \\
x_2 \in [2,3] \\
x_1 + x_2 + x_3 = 10 \\
2x_2 + x_3> 9 
\end{cases}
$$


```python
from scipy.optimize import minimize

f = lambda x:(x[0] - 1)**2 + (x[1] - 1)**2 + (x[2] - 1)**2
bounds = ((0,1),(2,3),(None,None))
cons = {
    'type':'eq','fun':lambda x: [0] + x[1] + x[2],
    'type':'ineq','fun':lambda x: -2*x[1] + x[2] - 9
}

minimize(f, x0=(0.5, 2.5, 10), method='SLSQP', bounds=bounds, constraints=cons)
```

当然也通过constraint参数设定bound，比如x1可以理解成有两个约束：x1>=0和x1<=1。

constraint的设定相对麻烦一些，以SLSQP为例，通过字典的格式输入，分为等式约束和不等约束：

type参数设定为'eq'表示等式约束,设定为'ineq'表示不等式约束
fun参数设定约束表达式，仅输入表达式左边，默认为左边小于或等于0


### differential_evolution

假设我们有一个复杂的多峰函数，我们的目标是找到它的全局最小值。我们将使用`differential_evolution`进行全局优化。


```python
import numpy as np
from scipy.optimize import differential_evolution
import matplotlib.pyplot as plt

# 定义目标函数
def multimodal_function(x):
    return np.sin(x)

# 使用全局优化方法找到最小值
result = differential_evolution(multimodal_function, bounds=[(-10, 10)])

# 样本数据
x_values = np.linspace(-10, 10, 1000)
y_values = multimodal_function(x_values)

# 绘制函数图像
plt.plot(x_values, y_values, label='Multimodal Function')
plt.scatter(result.x, [result.fun], color='red')
plt.title('Multimodal Function')
plt.show()

print(f'Global Minimum: {result.fun} at x = {result.x}')
```







## 参考
1. https://scipy.github.io/devdocs/reference/generated/scipy.optimize.OptimizeResult.html#scipy.optimize.OptimizeResult
2. https://pablormier.github.io/2017/09/05/a-tutorial-on-differential-evolution-with-python/
3. https://www.tutorialspoint.com/scipy/scipy_optimize_differential_evolution_function.htm
4. https://cloud.tencent.com/developer/article/1476146
5. https://cloud.tencent.com/developer/article/2242004















