# twin




```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
twin = ax.twinx()
ax.set_xlabel("Distance")
ax.set_ylabel("Density",color="red")
twin.set_ylabel("Temperature",color="blue")
p1, = ax.plot([0, 1, 2], [0, 1, 2], label="Density",color="red")
p2, = twin.plot([0, 1, 2], [0, 3, 2], label="Temperature",color="blue")
ax.legend()
twin.legend()
fig.show()
```