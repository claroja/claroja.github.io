# ctr

Click Through Rate(CTR), 计算公式为：

CTR = 点击广告的次数 / 广告展示的次数



## 数据集介绍
数据[下载地址](https://www.kaggle.com/datasets/gauravduttakiit/clickthrough-rate-prediction?select=new_ad.csv), 字段解释:

1. Daily Time Spent on Site: 用户在网站上花费的时间段(timespan)
2. Age: 用户的年龄
3. Area Income: 该区域(area)用户的平均收入
4. Daily Internet Usage: 每天用户使用网络的时长
5. Ad Topic Line: 广告的标题
6. City: 用户所在城市
7. Gender: 用户性别
8. Country: 用户所在国家
9. Timestamp: 用户访问页面的时间戳
10. Clicked on Ad: 是否点击广告, 1表示点击, 0表示未点击




```python
import pandas as pd
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier as xgb
from sklearn.metrics import accuracy_score

df = pd.read_csv('./data/ctr/ad_10000records.csv')

df["Gender"] = LabelEncoder().fit_transform(df["Gender"])

x = df[['Daily Time Spent on Site', 'Age', 'Area Income', 'Daily Internet Usage', 'Gender']]

# Assigning the final variable as the target variable
y=df.iloc[:,9]

# Using train test split to split the dataset
x_train,x_test,y_train,y_test=train_test_split(x,y,test_size=0.2,random_state=42)

# XGBoostClassifier model
model = xgb(random_state=42)

# Training the model
model.fit(x_train, y_train)

# Predicting test dataset values with the model
y_pred = model.predict(x_test)

# Accuracy check of the model prediction
print("The model accuracy is", accuracy_score(y_test,y_pred))

```






## 参考
1. https://www.geeksforgeeks.org/click-through-rate-prediction/
2. https://statso.io/click-through-rate-analysis-case-study/
3. https://www.kaggle.com/datasets/gauravduttakiit/clickthrough-rate-prediction?select=new_ad.csv
4. https://thecleverprogrammer.com/2023/01/16/ads-click-through-rate-prediction-using-python/
5. https://pythonrepo.com/repo/xue-pai-FuxiCTR



