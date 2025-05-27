# offset

## 贝叶斯网络学习
贝叶斯网络的学习可以分为两个部分:
参数学习(Parameter learning):给出数据样本和DAG结构,来估算CPD.
结构学习(Structure learning):给出数据样本, 来估算DAG结构和CPD.


### 参数学习
#### 构造数据
```python
import pandas as pd
data={'fruit': ["banana", "apple", "banana", "apple", "banana","apple", "banana", "apple", "apple", "apple", "banana", "banana", "apple", "banana",], 
        'tasty': ["yes", "no", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "yes", "no", "no", "no"], 
        'size': ["large", "large", "large", "small", "large", "large", "large","small", "large", "large", "large", "large", "small", "small"]}
data = pd.DataFrame(data)
print(data)
```
#### 构造DAG
[1.png](1.png)

#### ParameterEstimator
状态统计(state count)是非常有意义的, 我们可以看每个变量值出现的次数. 如果是存在父节点的话, 还可以看到各个条件下的统计次数
```python
from pgmpy.estimators import ParameterEstimator
pe = ParameterEstimator(model, data)
print("\n", pe.state_counts('fruit'))  # unconditional
'''
         fruit
apple       7
banana      7
'''
print("\n", pe.state_counts('tasty'))  # conditional on fruit and size
'''
 fruit apple       banana
size  large small  large small
tasty
no      1.0   1.0    1.0   1.0
yes     3.0   2.0    5.0   0.0
'''
```

#### Maximum Likelihood Estimation
估算CPD的一个方法是根据频率进行计算, 比如我们观察到14个水果中有7个苹果, 那么就可以推算7/14=50%个水果是苹果.这个就是最大似然估计(Maximum Likelihood Estimation (MLE)).
```python
from pgmpy.estimators import MaximumLikelihoodEstimator
model.fit(data, estimator=MaximumLikelihoodEstimator)
print(model.get_cpds("fruit"))  # unconditional
'''
+---------------+-----+
| fruit(apple)  | 0.5 |
+---------------+-----+
| fruit(banana) | 0.5 |
+---------------+-----+
'''
print(model.get_cpds("tasty"))  # conditional
'''
+------------+--------------+--------------------+---------------------+---------------+
| fruit      | fruit(apple) | fruit(apple)       | fruit(banana)       | fruit(banana) |
+------------+--------------+--------------------+---------------------+---------------+
| size       | size(large)  | size(small)        | size(large)         | size(small)   |
+------------+--------------+--------------------+---------------------+---------------+
| tasty(no)  | 0.25         | 0.3333333333333333 | 0.16666666666666666 | 1.0           |
+------------+--------------+--------------------+---------------------+---------------+
| tasty(yes) | 0.75         | 0.6666666666666666 | 0.8333333333333334  | 0.0           |
+------------+--------------+--------------------+---------------------+---------------+
'''
```

ML估计会过拟合.large banana为tasty的概率是0.833, 因为被观察的5/6的banana是tasty. 而small banana为tasty的概率是0, 因为我们只观察到一个small banana,而且它是 not tasty. 但是我们很难相信,small banana一定是not tasty. 因为我们观察的样本还不足够多.
ML另外一个问题是在网络复杂时, 计算将非常苦难.比如一个变量有3个父节点, 每个节点有10种状态, 那么该变量的CPD将会有$$10^3$$中可能.

#### Bayesian Parameter Estimation
为了解决ML的问题, 可以使用Bayesian Parameter Estimation.具体的是 BDeu (Bayesian Dirichlet equivalent uniform prior), 就是均衡的向各个变量中添加样本.
equivalent_sample_size = 10, 就是向各个变量中各个状态添加10个样本.

```python
from pgmpy.estimators import BayesianEstimator
model.fit(data, estimator=BayesianEstimator, prior_type="BDeu", equivalent_sample_size=10) # default equivalent_sample_size=5
print(model.get_cpds("tasty"))
'''
+------------+---------------------+--------------------+--------------------+---------------------+
| fruit      | fruit(apple)        | fruit(apple)       | fruit(banana)      | fruit(banana)       |
+------------+---------------------+--------------------+--------------------+---------------------+
| size       | size(large)         | size(small)        | size(large)        | size(small)         |
+------------+---------------------+--------------------+--------------------+---------------------+
| tasty(no)  | 0.34615384615384615 | 0.4090909090909091 | 0.2647058823529412 | 0.6428571428571429  |
+------------+---------------------+--------------------+--------------------+---------------------+
| tasty(yes) | 0.6538461538461539  | 0.5909090909090909 | 0.7352941176470589 | 0.35714285714285715 |
+------------+---------------------+--------------------+--------------------+---------------------+
'''
```

#### 参数设置
直接设置参数
```python
from pgmpy.models import BayesianModel
from pgmpy.factors.discrete import TabularCPD
## 定义网络结构, 每个元组填入两个节点, 第一个节点指向第二个节点
model = BayesianModel([('D', 'G'), ('I', 'G'), ('G', 'L'), ('I', 'S')])
## 定义每个节点的CPD
### 独立节点的CPD定义,variable:变量名为D/variable_card:变量状态为两个/values:变量各状态值/state_names:变量状态的名字是Easy Hard
cpd_d_sn = TabularCPD(variable='D', variable_card=2, values=[[0.6], [0.4]], state_names={'D': ['Easy', 'Hard']})
cpd_i_sn = TabularCPD(variable='I', variable_card=2, values=[[0.7], [0.3]], state_names={'I': ['Dumb', 'Intelligent']})

### 非独立节点的CPD定义, 列：evidence 行：state
##    +---------+---------+---------+---------+---------+
##    | diff    | intel_0 | intel_0 | intel_1 | intel_1 |
##    +---------+---------+---------+---------+---------+
##    | intel   | diff_0  | diff_1  | diff_0  | diff_1  |
##    +---------+---------+---------+---------+---------+
##    | grade_0 | 0.3     | 0.05    | 0.9     | 0.5     |
##    +---------+---------+---------+---------+---------+
##    | grade_1 | 0.4     | 0.25    | 0.08    | 0.3     |
##    +---------+---------+---------+---------+---------+
##    | grade_2 | 0.3     | 0.7     | 0.02    | 0.2     |
##    +---------+---------+---------+---------+---------+
## evidence:证据或父节点/evidence_card:证据或父节点变量状态个数/state_names取别名
cpd_g_sn = TabularCPD(variable='G', variable_card=3,
                      values=[[0.3, 0.05, 0.9,  0.5],
                              [0.4, 0.25, 0.08, 0.3],
                              [0.3, 0.7,  0.02, 0.2]],
                      evidence=['I', 'D'],
                      evidence_card=[2, 2],
                      state_names={'G': ['A', 'B', 'C'],
                                   'I': ['Dumb', 'Intelligent'],
                                   'D': ['Easy', 'Hard']})
cpd_l_sn = TabularCPD(variable='L', variable_card=2,
                      values=[[0.1, 0.4, 0.99],
                              [0.9, 0.6, 0.01]],
                      evidence=['G'],
                      evidence_card=[3],
                      state_names={'L': ['Bad', 'Good'],
                                   'G': ['A', 'B', 'C']})
cpd_s_sn = TabularCPD(variable='S', variable_card=2,
                      values=[[0.95, 0.2],
                              [0.05, 0.8]],
                      evidence=['I'],
                      evidence_card=[2],
                      state_names={'S': ['Bad', 'Good'],
                                   'I': ['Dumb', 'Intelligent']})
## 将条件概率分布加入到贝叶斯网络中
model.add_cpds(cpd_d_sn, cpd_i_sn, cpd_g_sn, cpd_l_sn, cpd_s_sn)
model.check_model()
```

#### 载入预置模型
pgmpy内置了很多模型:pgmpy内置了很多模型:
```python
## Use the alarm model to generate data from it.
from pgmpy.utils import get_example_model
from pgmpy.sampling import BayesianModelSampling

alarm_model = get_example_model('alarm')
samples = BayesianModelSampling(alarm_model).forward_sample(size=int(1e5))
samples.head()
```
罗列内置的模型:
```python
filenames = {
    "asia": "utils/example_models/asia.bif.gz",
    "cancer": "utils/example_models/cancer.bif.gz",
    "earthquake": "utils/example_models/earthquake.bif.gz",
    "sachs": "utils/example_models/sachs.bif.gz",
    "survey": "utils/example_models/survey.bif.gz",
    "alarm": "utils/example_models/alarm.bif.gz",
    "barley": "utils/example_models/barley.bif.gz",
    "child": "utils/example_models/child.bif.gz",
    "insurance": "utils/example_models/insurance.bif.gz",
    "mildew": "utils/example_models/mildew.bif.gz",
    "water": "utils/example_models/water.bif.gz",
    "hailfinder": "utils/example_models/hailfinder.bif.gz",
    "hepar2": "utils/example_models/hepar2.bif.gz",
    "win95pts": "utils/example_models/win95pts.bif.gz",
    "andes": "utils/example_models/andes.bif.gz",
    "diabetes": "utils/example_models/diabetes.bif.gz",
    "link": "utils/example_models/link.bif.gz",
    "munin1": "utils/example_models/munin1.bif.gz",
    "munin2": "utils/example_models/munin2.bif.gz",
    "munin3": "utils/example_models/munin3.bif.gz",
    "munin4": "utils/example_models/munin4.bif.gz",
    "pathfinder": "utils/example_models/pathfinder.bif.gz",
    "pigs": "utils/example_models/pigs.bif.gz",
    "munin": "utils/example_models/munin.bif.gz",
    "ecoli70": "",
    "magic-niab": "",
    "magic-irri": "",
    "arth150": "",
    "sangiovese": "",
    "mehra": "",
}
```
#### 模型描述
在student模型中, 可以将模型打印出来
```python
model.nodes()
'''
NodeView(('D', 'G', 'I', 'L', 'S'))
'''
model.edges()
'''
OutEdgeView([('D', 'G'), ('G', 'L'), ('I', 'G'), ('I', 'S')])
'''
```

```python
import networkx as nx
from matplotlib import pyplot as plt
## 绘制网络结构图，并附上概率分布表
nx.draw(model,
        with_labels=True,
        node_size=800,
        font_weight='bold',
        node_color='y',
        pos={"D": [1, 3], "I": [3, 3], "G": [2, 2], "S": [4, 2],"L": [2, 1]})
plt.text(1, 2.5, model.get_cpds("D"), fontsize=8, color='b')
plt.text(3, 2.5, model.get_cpds("I"), fontsize=8, color='b')
plt.text(2.1, 1.25, model.get_cpds("G"), fontsize=8, color='b')
plt.text(3, 2, model.get_cpds("S"), fontsize=8, color='b')
plt.text(2, 0.8, model.get_cpds("L"), fontsize=8, color='b')
plt.title('test')
plt.show()
```

参考:
https://colab.research.google.com/github/kristiyandd/ai-combinator/blob/master/Learning_Bayesian_Networks.ipynb#scrollTo=VaeRKm7qj-SS


## 参数学习
### 1. 获得数据
```python
## Use the alarm model to generate data from it.

from pgmpy.utils import get_example_model
from pgmpy.sampling import BayesianModelSampling

alarm_model = get_example_model('alarm')
samples = BayesianModelSampling(alarm_model).forward_sample(size=int(1e5))
samples.head()
```

### 2. 定义模型结构
```python
## Defining the Bayesian Model structure
from pgmpy.models import BayesianNetwork
model_struct = BayesianNetwork(ebunch=alarm_model.edges())
model_struct.nodes()
'''
NodeView(('HYPOVOLEMIA', 'LVEDVOLUME', 'STROKEVOLUME', 'CVP', 'PCWP', 'LVFAILURE', 'HISTORY', 'CO', 'ERRLOWOUTPUT', 'HRBP', 'ERRCAUTER', 'HREKG', 'HRSAT', 'INSUFFANESTH', 'CATECHOL', 'ANAPHYLAXIS', 'TPR', 'BP', 'KINKEDTUBE', 'PRESS', 'VENTLUNG', 'FIO2', 'PVSAT', 'SAO2', 'PULMEMBOLUS', 'PAP', 'SHUNT', 'INTUBATION', 'MINVOL', 'VENTALV', 'DISCONNECT', 'VENTTUBE', 'MINVOLSET', 'VENTMACH', 'EXPCO2', 'ARTCO2', 'HR'))
'''
```

### 3. 学习参数
#### 最大似然估计
```python
## Fitting the model using Maximum Likelihood Estimator
from pgmpy.estimators import MaximumLikelihoodEstimator
mle = MaximumLikelihoodEstimator(model=model_struct, data=samples)
## Estimating the CPD for a single node.
print(mle.estimate_cpd(node='FIO2'))
print(mle.estimate_cpd(node='CVP'))
## Estimating CPDs for all the nodes in the model
mle.get_parameters()[:10] # Show just the first 10 CPDs in the output

'''
+--------------+---------+
| FIO2(LOW)    | 0.04859 |
+--------------+---------+
| FIO2(NORMAL) | 0.95141 |
+--------------+---------+
+-------------+----------------------+-----------------------+----------------------+
| LVEDVOLUME  | LVEDVOLUME(HIGH)     | LVEDVOLUME(LOW)       | LVEDVOLUME(NORMAL)   |
+-------------+----------------------+-----------------------+----------------------+
| CVP(HIGH)   | 0.702671646078713    | 0.0069145318521877126 | 0.010257212769589711 |
+-------------+----------------------+-----------------------+----------------------+
| CVP(LOW)    | 0.009480034472852629 | 0.9526184538653366    | 0.03999032606840039  |
+-------------+----------------------+-----------------------+----------------------+
| CVP(NORMAL) | 0.28784831944843436  | 0.04046701428247563   | 0.94975246116201     |
+-------------+----------------------+-----------------------+----------------------+
'''
```

#### 贝叶斯估计
```python
## Fitting the using Bayesian Estimator
from pgmpy.estimators import BayesianEstimator
best = BayesianEstimator(model=model_struct, data=samples)
print(best.estimate_cpd(node='FIO2', prior_type="BDeu", equivalent_sample_size=1000))
## Uniform pseudo count for each state. Can also accept an array of the size of CPD.
print(best.estimate_cpd(node='CVP', prior_type="dirichlet", pseudo_counts=100))
## Learning CPDs for all the nodes in the model. For learning all parameters with BDeU prior, a dict of
## pseudo_counts need to be provided
best.get_parameters(prior_type="BDeu", equivalent_sample_size=1000)[:10]
'''
+--------------+-----------+
| FIO2(LOW)    | 0.0530594 |
+--------------+-----------+
| FIO2(NORMAL) | 0.946941  |
+--------------+-----------+
+-------------+----------------------+----------------------+----------------------+
| LVEDVOLUME  | LVEDVOLUME(HIGH)     | LVEDVOLUME(LOW)      | LVEDVOLUME(NORMAL)   |
+-------------+----------------------+----------------------+----------------------+
| CVP(HIGH)   | 0.6974417067875012   | 0.017649638237228676 | 0.011630213055303717 |
+-------------+----------------------+----------------------+----------------------+
| CVP(LOW)    | 0.014065892570565468 | 0.9322516991887744   | 0.041236967361740706 |
+-------------+----------------------+----------------------+----------------------+
| CVP(NORMAL) | 0.2884924006419334   | 0.05009866257399693  | 0.9471328195829556   |
+-------------+----------------------+----------------------+----------------------+
'''

```

#### 快捷方法
```python
## Shortcut for learning all the parameters and adding the CPDs to the model.
model_struct = BayesianNetwork(ebunch=alarm_model.edges())
model_struct.fit(data=samples, estimator=MaximumLikelihoodEstimator)
print(model_struct.get_cpds('FIO2'))
model_struct = BayesianNetwork(ebunch=alarm_model.edges())
model_struct.fit(data=samples, estimator=BayesianEstimator, prior_type='BDeu', equivalent_sample_size=1000)
print(model_struct.get_cpds('FIO2'))
'''
+--------------+---------+
| FIO2(LOW)    | 0.04859 |
+--------------+---------+
| FIO2(NORMAL) | 0.95141 |
+--------------+---------+
+--------------+-----------+
| FIO2(LOW)    | 0.0530594 |
+--------------+-----------+
| FIO2(NORMAL) | 0.946941  |
+--------------+-----------+
'''
```
参考:
https://pgmpy.org/examples/Learning%20Parameters%20in%20Discrete%20Bayesian%20Networks.html

## Structure Learning

三种学习结构的方法:
1. PC with stable and parallel variants.
2. Hill-Climb Search
3. Exhaustive Search

```python
from itertools import combinations
import networkx as nx
from sklearn.metrics import f1_score
from pgmpy.estimators import PC, HillClimbSearch, ExhaustiveSearch
from pgmpy.estimators import K2Score
from pgmpy.utils import get_example_model
from pgmpy.sampling import BayesianModelSampling
model = get_example_model('alarm')
samples = BayesianModelSampling(model).forward_sample(size=int(1e3))
samples.head()
## Funtion to evaluate the learned model structures.
def get_f1_score(estimated_model, true_model):
    nodes = estimated_model.nodes()
    est_adj = nx.to_numpy_matrix(estimated_model.to_undirected(), nodelist=nodes, weight=None)
    true_adj = nx.to_numpy_matrix(true_model.to_undirected(), nodelist=nodes, weight=None)

    f1 = f1_score(np.ravel(true_adj), np.ravel(est_adj))
    print("F1-score for the model skeleton: ", f1)
```


1. 使用PC
```python
est = PC(data=samples)
estimated_model = est.estimate(variant='stable', max_cond_vars=4)
get_f1_score(estimated_model, model)

```

2. 使用HillClimb
```python
scoring_method = K2Score(data=samples)
est = HillClimbSearch(data=samples)
estimated_model = est.estimate(scoring_method=scoring_method, max_indegree=4, max_iter=int(1e4))
get_f1_score(estimated_model, model)
```
参考:
https://pgmpy.org/examples/Structure%20Learning%20in%20Bayesian%20Networks.html
https://pgmpy.org/examples/Structure%20Learning%20with%20Chow-Liu.html
https://pgmpy.org/examples/Structure%20Learning%20with%20TAN.html

