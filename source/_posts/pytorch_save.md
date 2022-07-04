---
title: pytorch_save
toc: true
date: 2021-11-30 21:01:11
---

# 序列化与反序列化
- 序列化把内存中的某一个对象保存到硬盘当中，以二进制序列的形式存储下来
- 反序列化 将硬盘中存储的二进制的数，反序列化到内存当中，得到一个相应的对象

pytorch内置了序列化和反序列化的方法:
- 序列化: `torch.save(obj, f)`, `obj`可以是数据,模型或张量, `f`是要保存的位置路径
- 反序列化: `torch.load(f, map_location)`, `f`表示位置路径, `map_location`指设备CPU或GPU

# 保存的两种方式

## 保存整个模型
保存整个模型架构, 比较费时和占用空间. 在上线时用.

`torch.save (net, path)`

`torch.load (fpath)`




## 仅保存参数
仅保存模型的参数, 比较快, 省空间. 在checkpoint时使用


`torch.save(net.state_dict(), path)`

`model.load_state_dict(torch.load(path))`


# checkpoint
如果训练时间过长, 中间可能出现意外, 比如断电. 所以需要记录每次训练的结果, 实现从断点处继续训练. 我们需要保存的是:
- 模型的参数, `model.state_dict()`
- 训练次数, `epoch`

```python
torch.save({
            'epoch': epoch,
            'model_state_dict': model.state_dict(),
            ...
            }, PATH)
checkpoint = torch.load(PATH)
start_epoch=checkpoint['epoch']
model.load_state_dict(checkpoint['model_state_dict'])
model.eval()
model.train()
```




参考:
https://blog.csdn.net/weixin_39533659/article/details/111173642
https://blog.csdn.net/joyce_peng/article/details/104133594