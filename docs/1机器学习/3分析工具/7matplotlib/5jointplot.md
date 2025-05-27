# jointplot



```python
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec

df = pd.read_csv('iris.csv')

fig = plt.figure()
gs = GridSpec(4, 4)

ax_scatter = fig.add_subplot(gs[1:4, 0:3])
ax_hist_x = fig.add_subplot(gs[0,0:3])
ax_hist_y = fig.add_subplot(gs[1:4, 3])

ax_scatter.scatter(df['SepalLengthCm'], df['SepalWidthCm'])

ax_hist_x.hist(df['SepalLengthCm'])
ax_hist_y.hist(df['SepalWidthCm'], orientation = 'horizontal')

plt.show()

```







```python
import pandas as pd
import matplotlib.pyplot as plt
from matplotlib.gridspec import GridSpec

df = pd.read_csv('iris.csv')

setosa = df[df['Species']=='Iris-setosa']
virginica = df[df['Species']=='Iris-virginica']
versicolor = df[df['Species']=='Iris-versicolor']
species = df['Species']
colors = {
    'Iris-setosa' : 'tab:blue', 
    'Iris-versicolor' : 'tab:red',
    'Iris-virginica' : 'tab:green'
    }

fig = plt.figure()
gs = GridSpec(4, 4)

ax_scatter = fig.add_subplot(gs[1:4, 0:3])
ax_hist_y = fig.add_subplot(gs[0,0:3])
ax_hist_x = fig.add_subplot(gs[1:4, 3])


ax_scatter.scatter(df['SepalLengthCm'], df['SepalWidthCm'], c=species.map(colors))

ax_hist_y.hist(versicolor['SepalLengthCm'], color='tab:red', alpha=0.4)
ax_hist_y.hist(virginica['SepalLengthCm'], color='tab:green', alpha=0.4)
ax_hist_y.hist(setosa['SepalLengthCm'], color='tab:blue', alpha=0.4)

ax_hist_x.hist(versicolor['SepalWidthCm'], orientation = 'horizontal', color='tab:red', alpha=0.4)
ax_hist_x.hist(virginica['SepalWidthCm'], orientation = 'horizontal', color='tab:green', alpha=0.4)
ax_hist_x.hist(setosa['SepalWidthCm'], orientation = 'horizontal', color='tab:blue', alpha=0.4)

plt.show()



```



参考:
https://stackabuse.com/matplotlib-scatter-plot-with-distribution-plots-histograms-jointplot/