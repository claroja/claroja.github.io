


1. 试验不同模型默认参数的表现
2. 计算不同模型预测结果的相似度, 将相似度高的模型剔除
3. 对剩余的模型进行超参搜索, 详见其他文章


```python
from sklearn import svm, tree, linear_model, neighbors, naive_bayes, ensemble, discriminant_analysis, gaussian_process
from xgboost import XGBClassifier
from sklearn import model_selection
import pandas as pd
from sklearn import datasets
import seaborn as sns
import matplotlib.pyplot as plt

# 创建模型
MLA = [
    #Ensemble Methods
    ensemble.AdaBoostClassifier(),
    ensemble.BaggingClassifier(),
    ensemble.ExtraTreesClassifier(),
    ensemble.GradientBoostingClassifier(),
    ensemble.RandomForestClassifier(),
    
    #Gaussian Processes
    gaussian_process.GaussianProcessClassifier(),
    
    #GLM
    linear_model.LogisticRegressionCV(),
    linear_model.PassiveAggressiveClassifier(),
    linear_model.RidgeClassifierCV(),
    linear_model.SGDClassifier(),
    linear_model.Perceptron(),
    
    #Navies Bayes
    naive_bayes.BernoulliNB(),
    naive_bayes.GaussianNB(),
    
    #Nearest Neighbor
    neighbors.KNeighborsClassifier(),
    
    #SVM
    svm.SVC(probability=True),
    svm.NuSVC(probability=True),
    svm.LinearSVC(),
    
    #Trees    
    tree.DecisionTreeClassifier(),
    tree.ExtraTreeClassifier(),
    
    #Discriminant Analysis
    discriminant_analysis.LinearDiscriminantAnalysis(),
    discriminant_analysis.QuadraticDiscriminantAnalysis(),

    #xgboost
    XGBClassifier()    
    ]

# 导入数据
iris_data = datasets.load_iris()
MLA_compare = pd.DataFrame(
    columns = ['MLA Name', 'MLA Parameters','MLA Train Accuracy Mean', 'MLA Test Accuracy Mean', 'MLA Test Accuracy 3*STD' ,'MLA Time']
)

MLA_predict = pd.DataFrame({
    'target': iris_data['target']
})


for row_index, alg in enumerate(MLA):

    MLA_name = alg.__class__.__name__  # 模型的名称
    MLA_compare.loc[row_index, 'MLA Name'] = MLA_name
    MLA_compare.loc[row_index, 'MLA Parameters'] = str(alg.get_params())  # 模型的参数

    cv_results = model_selection.cross_validate(
        alg, 
        iris_data['data'], 
        iris_data['target'], 
        cv  = model_selection.ShuffleSplit(n_splits = 10, test_size = .3, train_size = .6, random_state = 0 ),  # 共跑模型10次, 每次按6)%训练集, 30测试集分割, 并丢弃10%的数据
        return_train_score=True
    )  # 交叉验证

    MLA_compare.loc[row_index, 'MLA Time'] = cv_results['fit_time'].mean()
    MLA_compare.loc[row_index, 'MLA Train Accuracy Mean'] = cv_results['train_score'].mean()
    MLA_compare.loc[row_index, 'MLA Test Accuracy Mean'] = cv_results['test_score'].mean()   
    MLA_compare.loc[row_index, 'MLA Test Accuracy 3*STD'] = cv_results['test_score'].std()*3   # 3sigma, 99.7%, 看最坏的情况是多少

    # 保存预测结果, 用来比较模型预测结果的相似度
    alg.fit(iris_data['data'], iris_data['target'])
    MLA_predict[MLA_name] = alg.predict(iris_data['data'])

MLA_compare = MLA_compare.sort_values(by = ['MLA Test Accuracy Mean'], ascending = False)


# 可视化

_ , ax = plt.subplots(figsize =(14, 12))

_ = sns.heatmap(
    MLA_predict.corr(), 
    cmap = sns.diverging_palette(220, 10, as_cmap = True),
    square=True, 
    cbar_kws={'shrink':.9 }, 
    ax=ax,
    annot=True, 
    linewidths=0.1,
    vmax=1.0, 
    linecolor='white',
    annot_kws={'fontsize':12 }
)
```















