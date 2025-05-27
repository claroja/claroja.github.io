

# 目标编码(TargetEncoder)


1. 对于分类目标的情况：特征被替换为给定特定分类值的目标后验概率和目标在所有训练数据上的先验概率的混合。
2. 对于连续目标的情况：特征被替换为给定特定分类值的目标期望值和目标在所有训练数据上的期望值的混合。




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

ce_11_1 = ce.TargetEncoder(cols=['Education'], smoothing=0).fit_transform(data_new[features], data_new['Income'])
ce_11_2 = ce.TargetEncoder(cols=['Education'], smoothing=1).fit_transform(data_new[features], data_new['Income'])
ce_11_3 = ce.TargetEncoder(cols=['Education'], smoothing=2).fit_transform(data_new[features], data_new['Income'])


```














## 参考
1. https://datascience.stackexchange.com/questions/39317/difference-between-ordinalencoder-and-labelencoder
2. https://www.cnblogs.com/dangui/p/15836197.html