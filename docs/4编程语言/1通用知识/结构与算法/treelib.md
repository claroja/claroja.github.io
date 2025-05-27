# treelib


treelib中主要有两个对象tree和node

## 创建树对象
`class treelib.tree.Tree(tree=None, deep=False, node_class=None)`

参数|描述
--|--
tree|拷贝另外一棵树
deep|是否为深拷贝
identifier|树的id, 全局唯一, 不能修改
node_class|指定节点类, 不需要使用

创建一棵树
```python
from treelib import Tree
tree = Tree()
tree.show()
```

## 添加节点
`create_node(tag=None, identifier=None, parent=None, data=None)`
参数|描述
--|--
tag|标签, 在使用`show()`时打印, 如果没有tag, 则直接打印`identifier`, 建议不写, 统一使用`identifier`
identifier|全树唯一
parent|父节点的`identifier`
data|节点包含的数据


```python
from treelib import Tree
tree = Tree()
tree.create_node(tag='Node-Root', identifier='node-root', data=0)
tree.create_node(tag='Node-1', identifier='node-1', parent='node-root', data=1)
tree.create_node('Node-21', 'node-21', 'node-1', 2)
tree.create_node('Node-22', 'node-22', 'node-1', 2)
tree.show()

## Node-Root
## └── Node-1
##     ├── Node-21
##     └── Node-22
```



## tree方法
### 结构描述
```python
tree.size() # 4, 返回节点的个数
tree.depth()  # 2, 节点的深度
```
### 获取节点
方法|描述
--|--
all_nodes()|返回所有节点的列表，顺序是添加到树中的顺序.
all_nodes_itr()|返回所有节点迭代器，顺序是添加到树中的顺序.
expand_tree()|返回所有节点id的生成器，可以指定遍历顺序.
leaves()|返回叶子节点
children(nid)|返回某个节点的子节点
ancestor(nid)|返回某个节点的子孙节点
siblings(nid)|返回某个节点的兄弟节点
parent(nid)|返回某个节点的父节点




参考:
[treelib_用法介绍](https://cloud.tencent.com/developer/article/1794194)
[treelib_github](https://github.com/caesar0301/treelib)
[treelib_api](https://treelib.readthedocs.io/en/latest/genindex.html)