
假设我们有一组实验数据，我们希望通过优化和拟合找到最佳的模型参数，以最好地描述数据的行为。
```python
import numpy as np
from scipy.optimize import minimize, curve_fit
import matplotlib.pyplot as plt

# 定义目标函数
def target_function(x, a, b):
    return a * x + b + 0.1 * np.random.randn(len(x))

# 生成随机样本数据
x_data = np.linspace(0, 10, 100)
true_params = [2.5, 1.3]
y_data = target_function(x_data, *true_params)

# 定义拟合函数
def fit_function(x, a, b):
    return a * x + b

# 定义优化目标函数
def objective_function(params):
    return np.sum((target_function(x_data, *params) - y_data)**2)

# 利用优化找到最佳参数
initial_guess = [1, 1]
result = minimize(objective_function, initial_guess)

# 利用拟合函数进行曲线拟合
fit_params, covariance = curve_fit(fit_function, x_data, y_data)

# 绘制结果
plt.scatter(x_data, y_data, label='Experimental Data')
plt.plot(x_data, target_function(x

_data, *true_params), color='r', label='True Function')
plt.plot(x_data, fit_function(x_data, *fit_params), linestyle='dashed', color='g', label='Fitted Function')
plt.legend()
plt.title('Optimization and Curve Fitting')
plt.show()

print(f'True Parameters: a={true_params[0]}, b={true_params[1]}')
print(f'Optimized Parameters: a={result.x[0]}, b={result.x[1]}')
print(f'Fitted Parameters: a={fit_params[0]}, b={fit_params[1]}')

```

## 参考
1. https://blog.csdn.net/qq_41780234/article/details/135025106