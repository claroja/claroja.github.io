# graph

retain_graph (bool, optional) – If False, the graph used to compute the grad will be freed. Note that in nearly all cases setting this option to True is not needed and often can be worked around in a much more efficient way. Defaults to the value of create_graph.

如果设置为False, graph会被释放.在多数情况下不需要设置为true, 因为有更高效的方式.
创建一个graph:
input: x
y = x**2
z = y*4
output1:
z.mean()
output2:
z.sum()

```python
import torch
x = torch.randn((1,4),dtype=torch.float32,requires_grad=True)
y = x ** 2
z = y * 4
print(x)
print(y)
print(z)
loss1 = z.mean()
loss2 = z.sum()
print(loss1,loss2)
loss1.backward()    # 这个代码执行正常，执行完中间变量都free了，所以下一个出现了问题
print(loss1,loss2)
loss2.backward()    # 这时会引发错误
```
程序正常执行到第12行，所有的变量正常保存。但是在第13行报错：
RuntimeError: Trying to backward through the graph a second time, but the buffers have already been freed. Specify retain_graph=True when calling backward the first time.
因为第一个`backward()`计算完后, graph已经被释放了.



参考:
https://blog.csdn.net/qq_39861441/article/details/104129368
