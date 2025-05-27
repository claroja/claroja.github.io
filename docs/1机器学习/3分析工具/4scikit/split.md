# split

用来分割训练集和测试集.

## 应用

### 分割pandas.DataFrame
`train, test = train_test_split(df, test_size=.3, stratify=df['column_name'])`


### 分割X,Y
`X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.33, random_state=42)`


## API

`sklearn.model_selection.train_test_split(*arrays, test_size=None, train_size=None, random_state=None, shuffle=True, stratify=None)[source]`

参数|描述
--|--
*arrays| numpy arrays, pandas dataframes
test_size| if float, test_size+train_size=1, If int, represents the absolute number of test samples 
train_size| if float, test_size+train_size=1, If int, represents the absolute number of test samples
random_state|RandomState
shuffle|shuffle the data before splitting
stratify|让测试集和训练集中的结果集保持源数据的Y的分类比例(分层抽样)



参考:
https://blog.csdn.net/weixin_45281949/article/details/102767177
https://scikit-learn.org/stable/modules/generated/sklearn.model_selection.train_test_split.html#sklearn.model_selection.train_test_split
https://engineeringfordatascience.com/posts/ml_repeatable_splitting_using_hashing/