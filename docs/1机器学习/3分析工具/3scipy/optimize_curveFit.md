曲线拟合是找到一个函数来描述观测数据的趋势. Scipy的optimize模块中的curve_fit函数提供了强大的曲线拟合功能，其中最常用的方法是最小二乘法。






## 案例

假设我们有一组实验数据，代表了某个产品在不同温度下的销售情况。我们希望通过曲线拟合来找到销售量与温度之间的关系，并对未来温度下的销售量进行预测。

```python
import numpy as np
from scipy.optimize import curve_fit
import matplotlib.pyplot as plt

# 生成模拟销售数据
np.random.seed(42)
temperature = np.linspace(10, 30, 50)
sales = 100 + 3 * temperature + 2 * np.random.randn(len(temperature))

# 定义拟合函数
def sales_model(temperature, a, b):
    return a * temperature + b

# 利用最小二乘法拟合销售数据
fit_params, covariance = curve_fit(sales_model, temperature, sales)

# 绘制拟合结果
plt.scatter(temperature, sales, label='Sales Data')
plt.plot(temperature, sales_model(temperature, *fit_params), color='r', label='Fitted Model')
plt.legend()
plt.title('Sales vs Temperature')
plt.xlabel('Temperature (°C)')
plt.ylabel('Sales')
plt.show()

print(f'Fitted Parameters: a={fit_params[0]}, b={fit_params[1]}')
```

1. https://blog.csdn.net/qq_41780234/article/details/135025106