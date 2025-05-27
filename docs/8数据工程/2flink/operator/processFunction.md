# processFunction



在更底层，我们可以不定义任何具体的算子（比如 map，filter，或者 window），而只是提炼出一个统一的“处理”（process）操作——它是所有转换算子的一个概括性的表达，可以自定义处理逻辑，所以这一层接口就被叫作“处理函数”（process function）。 
在处理函数中，我们直面的就是数据流中最基本的元素：数据事件（event）、状态（state）以及时间（time）。这就相当于对流有了完全的控制权。









refs:
https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/operators/process_function/