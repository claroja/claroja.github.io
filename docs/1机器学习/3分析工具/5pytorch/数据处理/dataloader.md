# dataloader




## torch.utils.data.DataLoader
Dataset类只相当于一个打包工具，包含了数据的地址。真正把数据读入内存的过程是由Dataloader进行批迭代输入的时候进行的。

```python
from torch.utils.data import TensorDataset, DataLoader
Data = torch.tensor([[1, 2], [3, 4],[5, 6], [7, 8]])
Label = torch.tensor([[0], [1], [0], [2]])
torch_dataset = TensorDataset(Data, Label)
torch_dataloader = DataLoader(
    dataset=torch_dataset,
    batch_size=2,
    shuffle=False,
    num_workers=2,
    pin_memory=True
)

for step, (x,y) in enumerate(torch_dataloader):
    print(x.to("cuda"))
    print(y.to("cuda"))
```

参数|描述
--|--
dataset|Dataset 类，决定数据从哪里读取以及如何读取
batchsize|批大小(一般要设置为可以被dataset的长度整除, 否则最后一个batch的元素长度不够)
num_works|是否多进程读取数据
sheuffle|每个 epoch 是否乱序
drop_last|当样本数不能被 batchsize 整除时，是否舍弃最后一批数据
pin_memory|将获得的batch放入pinned memory, 加速CPU到GPU的转换速度

一些概念:
- Epoch:所有训练样本都已经输入到模型中，称为一个 Epoch
- Iteration:一批样本输入到模型中，称为一个 Iteration
- Batchsize:批大小，决定一个 iteration 有多少样本，也决定了一个 
- Epoch: 有多少个 Iteration
- num_work:
当num_work=0时, 只有main process加载数据
当num_work>0时, 主进程不加载数据, 全部交给子进程来做, num_work就是子进程的数量. 比如`num_workers=2`则最多有2个workers同时将数据放入内存. `DataLoader`不仅仅是获得当前所需要的batch, 而且还会决定下一步需要返回的batch. 每个batch都会被指派给一个worker, 主进程会等待, 直到期望的batch到位.
最佳的设置是: `num_worker = 4 * num_GPU`

注意, 将数据送入GPU并不是`DataLoader`的工作, 而是在取出batch后再进行转换.
- pin_memory: 
默认情况下, batch是再Pageable Memory中, 如果要放入GPU, 则需要临时开辟一个Pinned Memory, 然后再传入GPU. 当设置`pin_memory=True`就会节省时间, 但是需要更大的空间
[1.png](1.png)

对于 CUDA 架构而言，主机端的内存可分为两种：
- 可分页内存(Pageable Memory): 虚拟内存(Virtual Memory), 从硬盘匀出来的用来充当内存的那部分空间
- 页锁定内存(Page-locked Memory)，或称固定内存(Pinned Memory): 物理内存(Physical Memor), 就是RAM(Random Access Memory)
- `collate_fn`默认是等于`default_collate`
`collate_fn`函数的输入就是一个`list`，`list`的长度是一个`batch_size`，`list`中的每个元素都是`DataSet`的`__getitem__`得到的结果。返回的是一个`tuple(data,label)`.
下面的例子是将`DataLoader`返回的batch放到GPU中.
```python
loader = DataLoader(demo, batch_size=50, shuffle=True, 
                    collate_fn=lambda x: tuple(x_.to(device) for x_ in default_collate(x)))
```



参考:
https://stackoverflow.com/questions/53998282/how-does-the-number-of-workers-parameter-in-pytorch-dataloader-actually-work
https://towardsdatascience.com/7-tips-for-squeezing-maximum-performance-from-pytorch-ca4a40951259
https://stackoverflow.com/questions/65932328/pytorch-while-loading-batched-data-using-dataloader-how-to-transfer-the-data-t