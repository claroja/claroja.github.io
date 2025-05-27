# max&min

sorted

get the `key` of max value in a dictionary, the key point is that `max()`'s second parameters' `lambda`'s `x` is dictionary's `key`.

```python
stats = {'a': 1, 'b': 2, 'c': 3}
max(stats, key=stats.get)
max(stats, key=lambda x:stats.get(x))
max(stats, key=lambda x:stats[x])
```

get the `key(s)` of max value in a dictionary

```python
stats = {'a': 1, 'b': 2, 'c': 3,'d':3}
[k for k,v in stats.items() if v == max(stats.values())] # ['c', 'd']
```