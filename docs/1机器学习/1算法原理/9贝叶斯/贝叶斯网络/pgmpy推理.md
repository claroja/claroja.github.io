# array

## Inference
使用[Asia network](http://www.bnlearn.com/bnrepository/#asia), 来进行推理(Inference)
```python
## Fetch the asia model from the bnlearn repository
from pgmpy.utils import get_example_model
asia_model = get_example_model('asia')
print("Nodes: ", asia_model.nodes())
print("Edges: ", asia_model.edges())
'''
Nodes:  ['asia', 'tub', 'smoke', 'lung', 'bronc', 'either', 'xray', 'dysp']
Edges:  [('asia', 'tub'), ('tub', 'either'), ('smoke', 'lung'), ('smoke', 'bronc'), ('lung', 'either'), ('bronc', 'dysp'), ('either', 'xray'), ('either', 'dysp')]
'''

## Initializing the VariableElimination class
from pgmpy.inference import VariableElimination
asia_infer = VariableElimination(asia_model)
## Computing the probability of bronc given smoke=no.
q = asia_infer.query(variables=['bronc'], evidence={'smoke': 'no'})
print(q)
## Computing the joint probability of bronc and asia given smoke=yes
q = asia_infer.query(variables=['bronc', 'asia'], evidence={'smoke': 'yes'})
print(q)
## Computing the probabilities (not joint) of bronc and asia given smoke=no
q = asia_infer.query(variables=['bronc', 'asia'], evidence={'smoke': 'no'}, joint=False)
for factor in q.values():
    print(factor)
'''
+------------+--------------+
| bronc      |   phi(bronc) |
+============+==============+
| bronc(yes) |       0.3000 |
+------------+--------------+
| bronc(no)  |       0.7000 |
+------------+--------------+
+------------+-----------+-------------------+
| bronc      | asia      |   phi(bronc,asia) |
+============+===========+===================+
| bronc(yes) | asia(yes) |            0.0060 |
+------------+-----------+-------------------+
| bronc(yes) | asia(no)  |            0.5940 |
+------------+-----------+-------------------+
| bronc(no)  | asia(yes) |            0.0040 |
+------------+-----------+-------------------+
| bronc(no)  | asia(no)  |            0.3960 |
+------------+-----------+-------------------+
+------------+--------------+
| bronc      |   phi(bronc) |
+============+==============+
| bronc(yes) |       0.3000 |
+------------+--------------+
| bronc(no)  |       0.7000 |
+------------+--------------+
+-----------+-------------+
| asia      |   phi(asia) |
+===========+=============+
| asia(yes) |      0.0100 |
+-----------+-------------+
| asia(no)  |      0.9900 |
+-----------+-------------+
'''

## Computing the MAP of bronc given smoke=no.
q = asia_infer.map_query(variables=['bronc'], evidence={'smoke': 'no'})
print(q)
## Computing the MAP of bronc and asia given smoke=yes
q = asia_infer.map_query(variables=['bronc', 'asia'], evidence={'smoke': 'yes'})
print(q)

'''
{'bronc': 'no'}
{'bronc': 'yes', 'asia': 'no'}
'''

lung_virt_evidence = TabularCPD(variable='lung', variable_card=2, values=[[0.4], [0.6]])
## Query with hard evidence smoke = no and virtual evidence lung = [0.4, 0.6]
q = asia_infer.query(variables=['bronc'], evidence={'smoke': 'no'}, virtual_evidence=[lung_virt_evidence])
print(q)
'''
+------------+--------------+
| bronc      |   phi(bronc) |
+============+==============+
| bronc(yes) |       0.3000 |
+------------+--------------+
| bronc(no)  |       0.7000 |
+------------+--------------+
'''
```

参考:
https://pgmpy.org/examples/Inference%20in%20Discrete%20Bayesian%20Networks.html


## Causal Inference

```python
from pgmpy.models import BayesianNetwork
from pgmpy.inference import VariableElimination
from pgmpy.factors.discrete import TabularCPD
from pgmpy.inference import CausalInference

simp_model = BayesianNetwork([('S', 'T'), ('T', 'C'), ('S', 'C')])
simp_model.to_daft(node_pos={'T': (0, 0), 'C': (2, 0), 'S': (1, 1)}).render()

cpd_s = TabularCPD(variable='S',
                   variable_card=2,
                   values=[[0.5],
                           [0.5]],
                   state_names={'S': ['m', 'f']})
cpd_t = TabularCPD(variable='T',
                   variable_card=2,
                   values=[[0.25, 0.75],
                           [0.75, 0.25]],
                   evidence=['S'],
                   evidence_card=[2],
                   state_names={'S':['m', 'f'], 'T':[0, 1]})
cpd_c = TabularCPD(variable='C',
                   variable_card=2,
                   values=[[0.3, 0.4, 0.7, 0.8],
                           [0.7, 0.6, 0.3, 0.2]],
                   evidence=['S', 'T'],
                   evidence_card=[2, 2],
                   state_names={'S': ['m', 'f'], 'T': [0, 1], 'C': [0, 1]})

simp_model.add_cpds(cpd_s, cpd_t, cpd_c)


## Non adjusted inference
infer_non_adjust = VariableElimination(simp_model)
print(infer_non_adjust.query(variables=['C'], evidence={'T': 1}))
print(infer_non_adjust.query(variables=['C'], evidence={'T': 0}))


'''
+------+----------+
| C    |   phi(C) |
+======+==========+
| C(0) |   0.5000 |
+------+----------+
| C(1) |   0.5000 |
+------+----------+
+------+----------+
| C    |   phi(C) |
+======+==========+
| C(0) |   0.6000 |
+------+----------+
| C(1) |   0.4000 |
+------+----------+
'''
```

参考:
https://pgmpy.org/examples/Causal%20Inference.html