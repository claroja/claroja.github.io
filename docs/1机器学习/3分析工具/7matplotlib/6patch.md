# patch

指的是matplotlib.patches包里面的一些列对象，比如我们常见的箭头，正方形，椭圆等等，也称之为“块”.
做一个圆形:
```python
from matplotlib import patches
import matplotlib.pyplot as plt

fig = plt.figure(figsize=(5,5))
ax = fig.add_subplot()
ax.set(xlim=[-1,1],ylim=[-1,1])
## 创建一个圆
circle = patches.Circle((0, 0), 0.5)
## 将圆加入到axes中
ax.add_patch(circle)
fig.show()
```


## API
详细信息参考[官网](https://matplotlib.org/stable/api/patches_api.html)
可以做圆, 椭圆等



参考:
https://blog.csdn.net/qq_27825451/article/details/82967904