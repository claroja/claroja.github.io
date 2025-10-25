
# HyperLogLog

## 最佳实践


### 考察问



- 🌰百万级网页 UV 计数等；

    1. 在统计 UV 时，你可以用 PFADD 命令（用于向 HyperLogLog 中添加新元素）把访问页面的每个用户都添加到 HyperLogLog 中。`()`
    2. 用 PFCOUNT 命令直接获得 page1 的 UV 值了，这个命令的作用就是返回 HyperLogLog 的统计结果。`()`


### 考察点


- 🌰百万级网页 UV 计数等；

    1. 在统计 UV 时，你可以用 PFADD 命令（用于向 HyperLogLog 中添加新元素）把访问页面的每个用户都添加到 HyperLogLog 中。`PFADD page1:uv user1 user2 user3 user4 user5`
    2. 用 PFCOUNT 命令直接获得 page1 的 UV 值了，这个命令的作用就是返回 HyperLogLog 的统计结果。`PFCOUNT page1:uv`



## 基本概念

是一种用于「统计基数」的数据集合类型，基数统计就是指统计一个集合中不重复的元素个数。但要注意，HyperLogLog 是统计规则是基于概率完成的，不是非常准确，标准误算率是 0.81%。

在 Redis 里面，每个 HyperLogLog 键只需要花费 12 KB 内存，就可以计算接近 264 个不同元素的基数，和元素越多就越耗费内存的 Set 和 Hash 类型相比，HyperLogLog 就非常节省空间。


## 常见命令

- 添加指定元素到 HyperLogLog 中: `PFADD key [element [element ...]]`
- 返回给定 HyperLogLog 的基数的个数: `PFCOUNT key [key ...]`
- 将多个 HyperLogLog 合并为一个 HyperLogLog: `PFMERGE destkey sourcekey [sourcekey ...]`

✨HyperLogLog算法中PF缩写的含义: 纪念算法提出者Philippe Flajolet的意义



### 应用场景



海量数据基数统计的场景，比如百万级网页 UV 计数等；



1. 在统计 UV 时，你可以用 PFADD 命令（用于向 HyperLogLog 中添加新元素）把访问页面的每个用户都添加到 HyperLogLog 中。`PFADD page1:uv user1 user2 user3 user4 user5`
2. 用 PFCOUNT 命令直接获得 page1 的 UV 值了，这个命令的作用就是返回 HyperLogLog 的统计结果。`PFCOUNT page1:uv`

不过，有一点需要你注意一下，HyperLogLog 的统计规则是基于概率完成的，所以它给出的统计结果是有一定误差的，标准误算率是 0.81%。

这也就意味着，你使用 HyperLogLog 统计的 UV 是 100 万，但实际的 UV 可能是 101 万。虽然误差率不算大，但是，如果你需要精确统计结果的话，最好还是继续用 Set 或 Hash 类型。  














