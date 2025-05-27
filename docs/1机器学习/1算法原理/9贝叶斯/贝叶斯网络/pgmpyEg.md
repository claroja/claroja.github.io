# selector

## Student
有四个名称指代贝叶斯网络:
1. Bayesian network
2. belief network
3. Bayes(ian) model
4. probabilistic directed acyclic graphical model
通过一个有向无环图将一系列的变量和他们的条件依赖连接起来.

贝叶斯网络的参数使用条件概率分布(CPD). 每一个节点使用$P(node | Pa(node))$表示,  其中$Pa(node)$是父节点.
下图是student模型:
[1.png](1.png)
在pgmpy中, 我们定义网络结构和每个节点的CPDs, 然后将他们联系起来.
```python
from pgmpy.models import BayesianModel
from pgmpy.factors.discrete import TabularCPD
## 定义网络结构, 每个元组填入两个节点, 第一个节点指向第二个节点
model = BayesianModel([('D', 'G'), ('I', 'G'), ('G', 'L'), ('I', 'S')])

## 定义每个节点的CPD
### 独立节点的CPD定义,variable:变量名/variable_card:变量种类个数/values:变量各种类值
cpd_d = TabularCPD(variable='D', variable_card=2, values=[[0.6], [0.4]]) # D节点, 有两个变量, 值分别是0.6和0.4
cpd_i = TabularCPD(variable='I', variable_card=2, values=[[0.7], [0.3]])
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
## evidence:证据或父节点/evidence_card:证据或父节点变量种类个数
cpd_g = TabularCPD(variable='G', variable_card=3, # 当前节点G有三种情况
                   values=[[0.3, 0.05, 0.9,  0.5],  # 各种情况各个值
                           [0.4, 0.25, 0.08, 0.3],
                           [0.3, 0.7,  0.02, 0.2]],
                  evidence=['I', 'D'], # 证据或父节点
                  evidence_card=[2, 2]) # I变量有两种情况, D变量有两种情况
cpd_l = TabularCPD(variable='L', variable_card=2,
                   values=[[0.1, 0.4, 0.99],
                           [0.9, 0.6, 0.01]],
                   evidence=['G'],
                   evidence_card=[3])
cpd_s = TabularCPD(variable='S', variable_card=2,
                   values=[[0.95, 0.2],
                           [0.05, 0.8]],
                   evidence=['I'],
                   evidence_card=[2])
## 将条件概率分布加入到贝叶斯网络中
model.add_cpds(cpd_d, cpd_i, cpd_g, cpd_l, cpd_s)
## 检验模型参数的正确性, 既验证CPD和是否为1
model.check_model()
```

默认各个节点变量分类没有名称, 从0开始命名, 可以给各个类别加上别名

```python
cpd_d_sn = TabularCPD(variable='D', variable_card=2, values=[[0.6], [0.4]], state_names={'D': ['Easy', 'Hard']})
cpd_i_sn = TabularCPD(variable='I', variable_card=2, values=[[0.7], [0.3]], state_names={'I': ['Dumb', 'Intelligent']})
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
model.add_cpds(cpd_d_sn, cpd_i_sn, cpd_g_sn, cpd_l_sn, cpd_s_sn)
model.check_model()

```


```python

import networkx as nx
from matplotlib import pyplot as plt
## 绘制网络结构图，并附上概率分布表
nx.draw(model,
        with_labels=True,
        node_size=1000,
        font_weight='bold',
        node_color='y',
        pos={"L": [4, 3], "G": [4, 5], "S": [8, 5], "D": [2, 7], "I": [6, 7]})
plt.text(2, 7, model.get_cpds("D"), fontsize=10, color='b')
plt.text(5, 6, model.get_cpds("I"), fontsize=10, color='b')
plt.text(1, 4, model.get_cpds("G"), fontsize=10, color='b')
plt.text(4.2, 2, model.get_cpds("L"), fontsize=10, color='b')
plt.text(7, 3.4, model.get_cpds("S"), fontsize=10, color='b')
plt.title('test')
plt.show()
```


```python
model.get_cpds() # 获得所有cpd对象
'''
[<TabularCPD representing P(D:2) at 0x7f1585d3e278>,
 <TabularCPD representing P(I:2) at 0x7f1585d3e320>,
 <TabularCPD representing P(G:3 | I:2, D:2) at 0x7f1585d3e390>,
 <TabularCPD representing P(L:2 | G:3) at 0x7f1585d3e2b0>,
 <TabularCPD representing P(S:2 | I:2) at 0x7f1585d3e358>]
'''
print(cpd_g) # 打印CPD, 没有state names
'''
+------+------+------+------+------+
| I    | I(0) | I(0) | I(1) | I(1) |
+------+------+------+------+------+
| D    | D(0) | D(1) | D(0) | D(1) |
+------+------+------+------+------+
| G(0) | 0.3  | 0.05 | 0.9  | 0.5  |
+------+------+------+------+------+
| G(1) | 0.4  | 0.25 | 0.08 | 0.3  |
+------+------+------+------+------+
| G(2) | 0.3  | 0.7  | 0.02 | 0.2  |
+------+------+------+------+------+
'''
print(model.get_cpds('G')) # 查看某个节点的条件概率分布, 带有state names
'''
+------+---------+---------+----------------+----------------+
| I    | I(Dumb) | I(Dumb) | I(Intelligent) | I(Intelligent) |
+------+---------+---------+----------------+----------------+
| D    | D(Easy) | D(Hard) | D(Easy)        | D(Hard)        |
+------+---------+---------+----------------+----------------+
| G(A) | 0.3     | 0.05    | 0.9            | 0.5            |
+------+---------+---------+----------------+----------------+
| G(B) | 0.4     | 0.25    | 0.08           | 0.3            |
+------+---------+---------+----------------+----------------+
| G(C) | 0.3     | 0.7     | 0.02           | 0.2            |
+------+---------+---------+----------------+----------------+
'''
model.get_cardinality('G') # 获得G节点, 元素个数
'''
3
'''



```



### 独立
1. Local Independencies:在给定$$X$$父节点的条件下, $$X$$独立于非子孙节点, 既:
$$X\bot NonDesc(X)|P_a(X)$$
$$NonDesc(X)$$表示非$$X$$的子孙节点
$$P_a(X)$$表示$$X$$的父节点

2. Global Independencies:
第一种情况:两个节点直接连接, 无论方向
[2.png](2.png)
无论更改任何节点都会影响另一个.
[3.png](3.png)
第二种情况:
Causal: 当$B$被观察时,将阻断$A \rightarrow C$的影响, $(A \perp C | B)$
Evidential: 当$B$被观察时,将阻断$A \rightarrow C$的影响,$(A \perp C | B)$
Common Evidence: 当B未知时, 将阻断$A \rightarrow C$的影响,$(A \perp C )$
Common Cause: 当$B$被观察时,将阻断$A \rightarrow C$的影响,$(A \perp C | B)$
```python
## Getting the local independencies of a variable.
model.local_independencies('G')
'''
(G _|_ S | I, D)
'''
## Getting all the local independencies in the network.
model.local_independencies(['D', 'I', 'S', 'G', 'L'])
'''
(D _|_ I, S)
(I _|_ D)
(S _|_ G, L, D | I)
(G _|_ S | I, D)
(L _|_ I, D, S | G)
'''
## Active trail: For any two variables A and B in a network if any change in A influences the values of B then we say
##               that there is an active trail between A and B.
## In pgmpy active_trail_nodes gives a set of nodes which are affected (i.e. correlated) by any
## change in the node passed in the argument.
model.active_trail_nodes('D')
'''
{'D': {'D', 'G', 'L'}}
'''
model.active_trail_nodes('D', observed='G')
'''
{'D': {'D', 'I', 'S'}}
'''
```

### Inference
```python
from pgmpy.inference import VariableElimination
infer = VariableElimination(model)
g_dist = infer.query(['G'])
print(g_dist)
'''
+------+----------+
| G    |   phi(G) |
+======+==========+
| G(A) |   0.3620 |
+------+----------+
| G(B) |   0.2884 |
+------+----------+
| G(C) |   0.3496 |
+------+----------+
'''
print(infer.query(['G'], evidence={'D': 'Easy', 'I': 'Intelligent'}))
'''
+------+----------+
| G    |   phi(G) |
+======+==========+
| G(A) |   0.9000 |
+------+----------+
| G(B) |   0.0800 |
+------+----------+
| G(C) |   0.0200 |
+------+----------+
'''
infer.map_query(['G'])
'''
{'G': 'A'}
'''
infer.map_query(['G'], evidence={'D': 'Easy', 'I': 'Intelligent'})
'''
{'G': 'A'}
'''
```
参考：
https://pgmpy.org/detailed_notebooks/2.%20Bayesian%20Networks.html
https://blog.csdn.net/weixin_41599977/article/details/90320390



## Monty Hall Problem
[4.png](4.png)

### 背景
假设你在一个游戏中, 你可以选择三扇门: 其中一扇门是汽车, 另外两个是山羊. 你先选择了一扇门, 比如第一扇门, 然后主持人(他之后每扇门背后是山羊还是车), 打开第三扇门, 里面是山羊. 然后, 他对你说:"你是否换到第二扇门?"
直觉上, 换或者不换均有1/2的概率赢得汽车.然而正确的结论非常的反直觉, 更换选择后会有2/3的概率赢得汽车, 而不更换的概率只有1/3.
以上结论可以使用蒙特卡洛方法验证:
```python
import random

def Monty_Hall_simulation(strategy, simulation_number):
    wins_count = 0
    # Simulated 100000 times based on monte carlo
    for i in range(simulation_number):
        # 0 means car and 1,2 means goats
        choice_list_init = [0, 1, 2]
        first_choice = random.choice(choice_list_init)
        # According to the precondition, the compere helps us eliminate an error option, so the sample must include the
        # car and a goat.
        if first_choice == 0:
            # the first time we choice the car
            sample_space = [0, random.choice([1, 2])]
        else:
            sample_space = [0, first_choice]
        # Counting the simulation results on the condition of stick the first choice or change the choice.
        if strategy == 'stick':
            result = first_choice
        if strategy == 'change':
            sample_space.pop(sample_space.index(first_choice))
            result = sample_space[0]
        if result == 0:
            wins_count += 1
    win_probability = round(wins_count/simulation_number, 6)
    print("The probability of win in {0} strategy is {1}: " .format(strategy, win_probability))

Monty_Hall_simulation('change', 100000)
Monty_Hall_simulation('stick', 100000)
```

一个直觉上的解释:
汽车有1/3的概率在玩家第一次挑选的门的后面, 比如下面的第一扇门. 而有2/3个概率是在另外两扇门后面. 当主持人打开了第三扇门, 如果玩家此时更换选择, 相当于同时选择了两扇门(一扇门没有开, 另一扇门主持人打开为羊), 既概率为2/3.
[5.png](5.png)
### 贝叶斯网络
我们有三个随机变量,
1. 选择玩家(Contestant)的选择:$$C \in {1, 2, 3}$$, 玩家将随机选择门,所以$$P(C=1) = P(C=2) = P(C=3) = \frac{1}{3}$$
2. 主持人(Host)的选择:$$H :nbsphinx-math:in {1, 2, 3}$$,$$ P :nbsphinx-math:in {1, 2, 3 } $$
3. 奖品(Prize)随机放在门后, 所以$$P(P=1) = P(P=2) = P(P=3) = :nbsphinx-math:\frac{1}{3}$$
所以可以构建如下的网络结构:
[6.png](6.png)
假设玩家选了了第0扇门, 主持人开了第2扇门, 我们要算的就是获得奖品的概率:$$P(P | H=2, C=0)$$

```python
from pgmpy.models import BayesianModel
from pgmpy.factors.discrete import TabularCPD

## Defining the network structure
model = BayesianModel([('C', 'H'), ('P', 'H')])

## Defining the CPDs:
cpd_c = TabularCPD('C', 3, [[0.33], [0.33], [0.33]])
cpd_p = TabularCPD('P', 3, [[0.33], [0.33], [0.33]])
cpd_h = TabularCPD('H', 3, [[0, 0, 0, 0, 0.5, 1, 0, 1, 0.5],
                            [0.5, 0, 1, 0, 0, 0, 1, 0, 0.5],
                            [0.5, 1, 0, 1, 0.5, 0, 0, 0, 0]],
                    evidence=['C', 'P'], evidence_card=[3, 3])

## Associating the CPDs with the network structure.
model.add_cpds(cpd_c, cpd_p, cpd_h)

## check_model check for the model structure and the associated CPD and returns True if everything is correct otherwise throws an exception
model.check_model()

## Infering the posterior probability
from pgmpy.inference import VariableElimination

infer = VariableElimination(model)
posterior_p = infer.query(['P'], evidence={'C': 0, 'H': 2})
print(posterior_p)
'''
+------+----------+
| P    |   phi(P) |
+======+==========+
| P(0) |   0.3333 |
+------+----------+
| P(1) |   0.6667 |
+------+----------+
| P(2) |   0.0000 |
+------+----------+
'''
```
参考:
https://en.wikipedia.org/wiki/Monty_Hall_problem
https://zhuanlan.zhihu.com/p/48254298
https://pgmpy.org/examples/Monty%20Hall%20Problem.html



## Earthquake Network
安装了盗窃警报( burglar alarm ), 它可以观测盗窃和地震.两个邻居,约翰和玛丽承诺当听见报警器响会通知警察. 约翰有时会被电话铃迷惑, 当电话响时也会报警. 玛丽喜欢比较大声的音乐, 所以会错过报警器.
[7.png](7.png)
```python
from pgmpy.models import BayesianModel
from pgmpy.inference import VariableElimination
from pgmpy.factors.discrete import TabularCPD

#Defining network structure
alarm_model = BayesianModel([('Burglary', 'Alarm'),
                                ('Earthquake', 'Alarm'),
                                ('Alarm', 'JohnCalls'),
                                ('Alarm', 'MaryCalls')])

#Defining the parameters using CPT
cpd_burglary = TabularCPD(variable='Burglary', variable_card=2,
                        values=[[.999], [0.001]])
cpd_earthquake = TabularCPD(variable='Earthquake', variable_card=2,
                        values=[[0.998], [0.002]])
cpd_alarm = TabularCPD(variable='Alarm', variable_card=2,
                        values=[[0.999, 0.71, 0.06, 0.05],
                                [0.001, 0.29, 0.94, 0.95]],
                        evidence=['Burglary', 'Earthquake'],
                        evidence_card=[2, 2])
cpd_johncalls = TabularCPD(variable='JohnCalls', variable_card=2,
                        values=[[0.95, 0.1], [0.05, 0.9]],
                        evidence=['Alarm'], evidence_card=[2])
cpd_marycalls = TabularCPD(variable='MaryCalls', variable_card=2,
                        values=[[0.1, 0.7], [0.9, 0.3]],
                        evidence=['Alarm'], evidence_card=[2])

## Associating the parameters with the model structure
alarm_model.add_cpds(cpd_burglary, cpd_earthquake, cpd_alarm, cpd_johncalls, cpd_marycalls)

## Checking if the cpds are valid for the model
alarm_model.check_model()
'''
True
'''

## Viewing nodes of the model
alarm_model.nodes()
'''
NodeView(('Burglary', 'Alarm', 'Earthquake', 'JohnCalls', 'MaryCalls'))
'''
## Viewing edges of the model
alarm_model.edges()
'''
OutEdgeView([('Burglary', 'Alarm'), ('Alarm', 'JohnCalls'), ('Alarm', 'MaryCalls'), ('Earthquake', 'Alarm')])
'''
#Checking independcies of a node
alarm_model.local_independencies('Burglary')
'''
(Burglary ⟂ Earthquake)
'''
#Listing all Independencies
alarm_model.get_independencies()
'''
(JohnCalls ⟂ Burglary, MaryCalls, Earthquake | Alarm)
(JohnCalls ⟂ MaryCalls, Earthquake | Burglary, Alarm)
(JohnCalls ⟂ Burglary, Earthquake | Alarm, MaryCalls)
(JohnCalls ⟂ Burglary, MaryCalls | Alarm, Earthquake)
(JohnCalls ⟂ Earthquake | Burglary, MaryCalls, Alarm)
(JohnCalls ⟂ MaryCalls | Burglary, Earthquake, Alarm)
(JohnCalls ⟂ Burglary | Alarm, MaryCalls, Earthquake)
(MaryCalls ⟂ JohnCalls, Burglary, Earthquake | Alarm)
(MaryCalls ⟂ Burglary, Earthquake | JohnCalls, Alarm)
(MaryCalls ⟂ JohnCalls, Earthquake | Burglary, Alarm)
(MaryCalls ⟂ JohnCalls, Burglary | Alarm, Earthquake)
(MaryCalls ⟂ Earthquake | JohnCalls, Burglary, Alarm)
(MaryCalls ⟂ Burglary | JohnCalls, Alarm, Earthquake)
(MaryCalls ⟂ JohnCalls | Burglary, Earthquake, Alarm)
(Earthquake ⟂ Burglary)
(Earthquake ⟂ JohnCalls, MaryCalls | Alarm)
(Earthquake ⟂ MaryCalls | JohnCalls, Alarm)
(Earthquake ⟂ JohnCalls, MaryCalls | Burglary, Alarm)
(Earthquake ⟂ JohnCalls | Alarm, MaryCalls)
(Earthquake ⟂ MaryCalls | JohnCalls, Burglary, Alarm)
(Earthquake ⟂ JohnCalls | Burglary, MaryCalls, Alarm)
(Burglary ⟂ Earthquake)
(Burglary ⟂ JohnCalls, MaryCalls | Alarm)
(Burglary ⟂ MaryCalls | JohnCalls, Alarm)
(Burglary ⟂ JohnCalls | Alarm, MaryCalls)
(Burglary ⟂ JohnCalls, MaryCalls | Alarm, Earthquake)
(Burglary ⟂ MaryCalls | JohnCalls, Alarm, Earthquake)
(Burglary ⟂ JohnCalls | Alarm, MaryCalls, Earthquake)
'''
```


参考:
https://pgmpy.org/examples/Earthquake.html
https://bayesian-intelligence.com/publications/bai/book/BAI_Chapter2.pdf
