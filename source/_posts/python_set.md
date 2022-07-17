python_set




# operation
![image](http://res.cloudinary.com/dyd911kmh/image/upload/f_auto,q_auto:best/v1526998740/15_union_intersection_difference_symmetric.png)

```python
dataScientist = set(['Python', 'R', 'SQL', 'Git', 'Tableau', 'SAS'])
dataEngineer = set(['Python', 'Java', 'Scala', 'Git', 'SQL', 'Hadoop'])
```

## union
A union, denoted dataScientist `∪` dataEngineer, is the set of all values that are values of dataScientist, or dataEngineer, or both. 
```python
# set built-in function union
dataScientist.union(dataEngineer)
# Equivalent Result
dataScientist | dataEngineer
```
## intersection
An intersection of two sets dataScientist and dataEngineer, denoted dataScientist ∩ dataEngineer, is the set of all values that are values of both dataScientist and dataEngineer.

```python
# Intersection operation
dataScientist.intersection(dataEngineer)

# Equivalent Result
dataScientist & dataEngineer
```

## difference
A difference of two sets dataScientist and dataEngineer, denoted dataScientist \ dataEngineer, is the set of all values of dataScientist that are not values of dataEngineer.
```python
# Difference Operation
dataScientist.difference(dataEngineer)

# Equivalent Result
dataScientist - dataEngineer
```

## symmetric_difference
A symmetric difference of two sets dataScientist and dataEngineer, denoted dataScientist △ dataEngineer, is the set of all values that are values of exactly one of two sets, but not both.

```python
# Symmetric Difference Operation
dataScientist.symmetric_difference(dataEngineer)

# Equivalent Result
dataScientist ^ dataEngineer
```




参考：
https://www.datacamp.com/tutorial/sets-in-python