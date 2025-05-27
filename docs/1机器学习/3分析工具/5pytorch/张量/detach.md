# detach



`tensor.detach()`可以取到tensor的数据和并且`requires_grad=False`, 而且二者共享存储空间, 既改变一个, 另外一个也会改变. 

当想要将`tensor`转换为numpy的array时, 需要先`detach()`, 然后再调用`numpy()`.

```python
import torch

a = torch.tensor([1,1,1])
b = a.detach()
b[0]=0
print(b)
## tensor([0, 1, 1])
print(a)
## tensor([0, 1, 1])
```


## tensor.detach() 与 tensor.data
PyTorch 的自动求导不会追踪`tensor.data`的变化, 而会追踪`tensor.detach()`的变化, 所以更安全(tensor的值变化后会报错)

- 使用`tensor.detach`会报错
```python
a = torch.tensor([1,2,3.], requires_grad = True)
out = a.sigmoid()
c = out.detach()
c.zero_()  
## tensor([ 0.,  0.,  0.])

out  # modified by c.zero_() !!
## tensor([ 0.,  0.,  0.])

out.sum().backward()  # Requires the original value of out, but that was overwritten by c.zero_()
## RuntimeError: one of the variables needed for gradient computation has been modified by an inplace operation
```

- 使用`tensor.data`不会报错
```python
a = torch.tensor([1,2,3.], requires_grad = True)
out = a.sigmoid()
c = out.data
c.zero_()
## tensor([ 0.,  0.,  0.])

out  # out  was modified by c.zero_()
## tensor([ 0.,  0.,  0.])

out.sum().backward()
a.grad  # The result is very, very wrong because `out` changed!
## tensor([ 0.,  0.,  0.])
```



参考:
https://github.com/pytorch/pytorch/issues/6990