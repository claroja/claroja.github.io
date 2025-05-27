# annotate



```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.set(
    xlim=(0, 4),
    ylim=(0, 4),
)
ax.plot([1], [1], 'o')
ax.annotate('annotate', xy=(1, 1), xytext=(3, 3),
            arrowprops=dict(facecolor='black', shrink=0.05))
fig.show()
```