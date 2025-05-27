## 测试数据


```python
import pandas as pd
df = pd.DataFrame({
                "name": ["wang","wei","zhao","li","wu"],
                "gender": ["boy","girl","girl","boy","girl"],
                "score": [56,67,47,87,None]
                })

"""

name	gender	score
0	wang	boy	56.0
1	wei	girl	67.0
2	zhao	girl	47.0
3	li	boy	87.0
4	wu	girl	Na
"""


```



## apply

```python
df.groupby('gender').apply(lambda x: x.sort_values('score')).reset_index(drop=True)

"""
	name	gender	score
0	wang	boy	56.0
1	li	boy	87.0
2	zhao	girl	47.0
3	wei	girl	67.0
4	wu	girl	NaN
"""



```
