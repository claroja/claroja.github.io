# flink_source



flink的stream程序都是通过addSource(sourcefunction)来添加数据源，我们可以自定义数据源，通过继承ParallelSourceFunction RichParallelSourceFunction 来实现自己的数据源。



## 基于集合

1. 用element创建DataStream(fromElements): `senv.fromElements("spark", "flink")`
2. 用Tuple创建DataStream(fromElements): `senv.fromElements((1, "spark"), (2, "flink"))`
3. 用Array创建DataStream: `senv.fromCollection(Array("spark", "flink"))`
4. 用ArrayBuffer创建DataStream: `senv.fromCollection(ArrayBuffer("spark", "flink"))`
5. 用List创建DataStream: `senv.fromCollection(List("spark", "flink"))`
6. 用ListBuffer创建DataStream: `senv.fromCollection(ListBuffer("spark", "flink"))`
7. 用Vector创建DataStream: `senv.fromCollection(Vector("spark", "flink"))`
8. 用Queue创建DataStream: `senv.fromCollection(Queue("spark", "flink"))`
9. 用Stack创建DataStream: `senv.fromCollection(Stack("spark", "flink"))`
10. 用Stream创建DataStream（Stream相当于lazy List，避免在中间过程中生成不必要的集合）: `val ds9: DataStream[String] = senv.fromCollection(Stream("spark", "flink"))`
11. 用Seq创建DataStream: `val ds10: DataStream[String] = senv.fromCollection(Seq("spark", "flink"))`
12. 用ArraySeq创建DataStream: `val ds13: DataStream[String] = senv.fromCollection(mutable.ArraySeq("spark", "flink"))`
13. 用ArrayStack创建DataStream: `val ds14: DataStream[String] = senv.fromCollection(mutable.ArrayStack("spark", "flink"))`
14. 用Range创建DataStream: `val ds16: DataStream[Int] = senv.fromCollection(Range(1, 9))`
15. 用fromElements创建DataStream: `val ds17: DataStream[Long] = senv.generateSequence(1, 9)`

## 基于文件

1. 读取本地文件: `env.readTextFile("data2.csv")`
2. 读取hdfs文件: `env.readTextFile("hdfs://hadoop01:9000/input/flink/README.txt")`


## socket stream

`senv.socketTextStream(ip,port)`

## custom source

flink stream中我们可以通过实现sourcefunction或者实现parallesourcefunction来定义我们自己的数据源方法，然后通过senv.addSource(自定义sourcefunction),就可以读取数据进行转换处理

1. 创建一个class实现sourcefunction接口
2. 从写run方法，定义生产数据的业务逻辑，重写cancle方法
3. senv.addSource()添加自定义的source


`RichParallelSourceFunction`, 这是一个富有的并行数据源，可以提供open,close等方法（如果操作数据库可以实现在open或者close打开关闭连接）

选择使用RichParallelSourceFunction接口作为我们要实现的接口，可以利用其提供的open和close打开和关闭mysql的链接。

## flink kafka source

flink框架提供了flinkkafkaconsumer011进行kafka数据的读取，









