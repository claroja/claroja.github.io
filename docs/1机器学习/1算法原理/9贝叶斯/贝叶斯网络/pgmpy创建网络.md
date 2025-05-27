# manipulate_element

创建模型
在pgmpy中, 模型的结构和它的参数(CPDs)两者是分开的.所以创建需要三步:
1. 定义模型的结构
2. 定义所有的参数
3. 将参数添加到结构中
我们以[cancer model](http://www.bnlearn.com/bnrepository/#cancer)为例子:
[1.png](1.png)
## 1. 定义模型结构
本例中, 我们定义了Pollution -> Cancer, Smoker -> Cancer, Cancer -> Xray, Cancer -> Dyspnoea的结构.
```python
from pgmpy.models import BayesianModel

cancer_model = BayesianModel([('Pollution', 'Cancer'),
                                ('Smoker', 'Cancer'),
                                ('Cancer', 'Xray'),
                                ('Cancer', 'Dyspnoea')])
```
## 2. 定义CPDs
贝叶斯网络中每个节点都有一个CPD, 因此我们需要定义5个CPDs. 在pgmpy中, CPDs可以使用TabularCPD类, 具体可参考[官方文档](https://pgmpy.org/_modules/pgmpy/factors/discrete/CPD.html).
```python
from pgmpy.factors.discrete import TabularCPD
cpd_poll = TabularCPD(variable='Pollution', variable_card=2,
                        values=[[0.9], [0.1]])
cpd_smoke = TabularCPD(variable='Smoker', variable_card=2,
                       values=[[0.3], [0.7]])
cpd_cancer = TabularCPD(variable='Cancer', variable_card=2,
                        values=[[0.03, 0.05, 0.001, 0.02],
                                [0.97, 0.95, 0.999, 0.98]],
                        evidence=['Smoker', 'Pollution'],
                        evidence_card=[2, 2])
cpd_xray = TabularCPD(variable='Xray', variable_card=2,
                        values=[[0.9, 0.2], [0.1, 0.8]],
                        evidence=['Cancer'], evidence_card=[2])
cpd_dysp = TabularCPD(variable='Dyspnoea', variable_card=2,
                        values=[[0.65, 0.3], [0.35, 0.7]],
                        evidence=['Cancer'], evidence_card=[2])
```

## 3. 向模型中添加CPDs
```python
## Associating the parameters with the model structure.
cancer_model.add_cpds(cpd_poll, cpd_smoke, cpd_cancer, cpd_xray, cpd_dysp)
## Checking if the cpds are valid for the model.
cancer_model.check_model()
```

## 模型简单操作
```python
## Check for d-separation between variables
print(cancer_model.is_dconnected('Pollution', 'Smoker'))
print(cancer_model.is_dconnected('Pollution', 'Smoker', observed=['Cancer']))

## Get all d-connected nodes
cancer_model.active_trail_nodes('Pollution')

## List local independencies for a node
cancer_model.local_independencies('Xray')

## Get all model implied independence conditions
cancer_model.get_independencies()
```

## 载入官方模型
```python
from pgmpy.utils import get_example_model
model = get_example_model('cancer')
print("Nodes in the model:", model.nodes())
print("Edges in the model:", model.edges())
model.get_cpds()
```