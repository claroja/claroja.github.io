

# CatBoost(CatBoostEncoder)

## pandas


## [category_encoders](https://contrib.scikit-learn.org/category_encoders/index.html)


这与留一法编码非常相似，但会“即时”计算值。 因此，这些值在训练阶段自然会发生变化，并且没有必要添加随机噪声。



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

ce_17 = ce.CatBoostEncoder(cols=['Education']).fit_transform(data_new, data_new['Income'])
```







## 参考
1. https://datascience.stackexchange.com/questions/39317/difference-between-ordinalencoder-and-labelencoder
2. https://www.cnblogs.com/dangui/p/15836197.html