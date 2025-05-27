# path

和其他绘图工具中的`path`路径概念是一样的


```python
import matplotlib.pyplot as plt
from matplotlib.path import Path
import matplotlib.patches as patches

#第一步：创建画图对象以及创建子图对象
fig = plt.figure()
ax = fig.add_subplot()
ax.set(xlim=[-0.5,1.5],ylim=[-0.5,1.5])


#第二步：创建一个patch，路径依然也是通过patch实现的，只不过叫做pathpatch
verts = [
    (0., 0.), # 矩形左下角的坐标(left,bottom)
    (0., 1.), # 矩形左上角的坐标(left,top)
    (1., 1.), # 矩形右上角的坐标(right,top)
    (1., 0.), # 矩形右下角的坐标(right, bottom)
    (0., 0.), # 封闭到起点    ]
]

codes = [
    Path.MOVETO,
    Path.LINETO,
    Path.LINETO,
    Path.LINETO,
    Path.CLOSEPOLY,
]
patch = patches.PathPatch(Path(verts, codes), facecolor='orange', lw=2)

#第三步：将创建的patch添加到axes对象中
ax.add_patch(patch)
#显示
fig.show()
```

## API
参考[官网](https://matplotlib.org/stable/api/path_api.html)

参考:
https://blog.csdn.net/qq_27825451/article/details/82967904