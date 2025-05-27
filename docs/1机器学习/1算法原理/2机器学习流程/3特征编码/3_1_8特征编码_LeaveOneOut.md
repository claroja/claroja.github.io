

# OWE编码(WOEEncoder)
Leave One Out Encoder与Target Encoder非常相似，但在计算一个类别的平均目标时会排除当前行的目标，以减少异常值的影响。

如果您打算将编码用作预测模型的输入(例如，梯度增强)，则可能会出现问题。实际上，假设您使用TargetEncoder。这意味着您将在X_train中引入有关y_train的信息，这可能会导致严重的过度拟合风险。

关键是：如何在限制过度拟合风险的同时保持监督编码？LeaveOneOutEncoder提供了一个出色的解决方案。它执行原始目标编码，但是对于每一行，它不考虑对该行观察到的y值。这样，避免了行泄漏。

LeaveOneOutEncoder计算公式：
$$
enc_i=\frac{\sum_{j\ne i}(y_j*(x_j==k))-y_i}{\sum_{j\ne i}x_j==k}
$$

## pandas


## [category_encoders](https://contrib.scikit-learn.org/category_encoders/index.html)



```python
import category_encoders as ce
import pandas as pd
data = pd.DataFrame({
    'Education':['PhD','HighSchool','Bachelor','Master','HighSchool','Master','PhD','Bachelor'],
    'Income':[28300, 4500, 7500, 12500, 4200, 15000, 25000, 7200]
    })

Income_grand_mean = data['Income'].mean()
data['Income_grand_mean'] = [Income_grand_mean]*len(data)
Income_group = data.groupby('Education')['Income'].mean().rename('Income_level_mean').reset_index()
data_new = pd.merge(data, Income_group)
features = list(data_new.columns)
features.remove('Income')
ce_16 = ce.LeaveOneOutEncoder(cols=['Education']).fit_transform(data_new[features], data_new['Income'])
```












## 参考
1. https://datascience.stackexchange.com/questions/39317/difference-between-ordinalencoder-and-labelencoder
2. https://www.cnblogs.com/dangui/p/15836197.html