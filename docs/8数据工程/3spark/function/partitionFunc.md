# partitionFunc

## mapPartitions(transformation)
一次传递整个分区的数据

```python
rdd = sc.parallelize([1, 3, 2, 4, 7, 9, 6], 3)
def process(iter):
    result = list()
    for it in iter:
        result.append(it * 10)
    return result
rdd.mapPartitions(process).collect()
```

## foreachPartition(action)
一次处理整个分区的数据

```python
rdd = sc.parallelize([1, 3, 2, 4, 7, 9, 6], 3)

def process(iter):
    result = list()
    for it in iter:
        result.append(it * 10)
    print(result)
rdd.foreachPartition(process)

```

## partitionBy(transformation)
对RDD进行自定义分区操作
```python
rdd = sc.parallelize([('hadoop', 1), ('spark', 1), ('hello', 1), ('flink', 1), ('hadoop', 1), ('spark', 1)])
## 使用partitionBy 自定义 分区
def process(k):
    if 'hadoop' == k or 'hello' == k: return 0
    if 'spark' == k: return 1
    return 2
rdd.partitionBy(3, process).glom().collect()
```

## repartition
对RDD的重新分区（仅数量）

```python
rdd = sc.parallelize([1, 2, 3, 4, 5], 3)
## repartition 修改分区
rdd.repartition(5).getNumPartitions()
```

## coalesce
对分区进行数量增减

参数1：分区数
参数2：boolean，False表示不允许shuffle，也就是不能加分区

```python
rdd = sc.parallelize([1, 2, 3, 4, 5], 3)
print(rdd.coalesce(5, shuffle=True).getNumPartitions())
```

refs:

