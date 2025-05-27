

# 二进制编码(BinaryEncoder)

本质上是利用二进制对ID进行哈希映射，最终得到0/1特征向量，且维数少于独热编码，节省存储空间。



## pandas



## [category_encoders](https://contrib.scikit-learn.org/category_encoders/index.html)


```python

import category_encoders as ce
import pandas as pd
data = pd.DataFrame({
    'BloodType':['A','AB','O','B', None,],
    })

ce.BinaryEncoder(cols=['BloodType']).fit_transform(data)

#    BloodType_0  BloodType_1  BloodType_2
# 0            0            0            1
# 1            0            1            0
# 2            0            1            1
# 3            1            0            0
# 4            1            0            1

```






## 参考
1. https://datascience.stackexchange.com/questions/39317/difference-between-ordinalencoder-and-labelencoder
2. https://www.cnblogs.com/dangui/p/15836197.html