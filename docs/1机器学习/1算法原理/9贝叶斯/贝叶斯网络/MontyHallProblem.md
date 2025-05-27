# MontyHallProblem

[](./MontyHallProblem/1.png)

## 背景
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
[](./MontyHallProblem/2.png)
## 贝叶斯网络
我们有三个随机变量,
1. 选择玩家(Contestant)的选择:$C \in {1, 2, 3}$, 玩家将随机选择门,所以$P(C=1) = P(C=2) = P(C=3) = \frac{1}{3}$
2. 主持人(Host)的选择:$H :nbsphinx-math:in {1, 2, 3}$,$ P :nbsphinx-math:in {1, 2, 3 } $
3. 奖品(Prize)随机放在门后, 所以$P(P=1) = P(P=2) = P(P=3) = :nbsphinx-math:\frac{1}{3}$
所以可以构建如下的网络结构:
[](./MontyHallProblem/3.png)


假设玩家选了了第0扇门, 主持人开了第2扇门, 我们要算的就是获得奖品的概率:$P(P | H=2, C=0)$
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

