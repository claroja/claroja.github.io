const n=JSON.parse(`{"key":"v-d50afe90","path":"/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/spark/function/pyspark_functions.md/pyspark_dataframe_udf.html","title":"dataframe_udf","lang":"zh-CN","frontmatter":{"description":"dataframe_udf ## coding:utf8 import time from pyspark.sql import SparkSession from pyspark.sql.types import StructType, StringType, IntegerType import pandas as pd from pyspark.sql import functions as F ## 0. 构建执行环境入口对象SparkSession spark = SparkSession.builder.\\\\ appName(\\"test\\").\\\\ master(\\"local[*]\\").\\\\ config(\\"spark.sql.shuffle.partitions\\", 2).\\\\ getOrCreate() sc = spark.sparkContext ## 构建一个RDD rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7]).map(lambda x:[x]) df = rdd.toDF([\\"num\\"]) ## TODO 1: 方式1 sparksession.udf.register(), DSL和SQL风格均可以使用 ## UDF的处理函数 def num_ride_10(num): return num * 10 ## 参数1: 注册的UDF的名称, 这个udf名称, 仅可以用于 SQL风格 ## 参数2: UDF的处理逻辑, 是一个单独的方法 ## 参数3: 声明UDF的返回值类型, 注意: UDF注册时候, 必须声明返回值类型, 并且UDF的真实返回值一定要和声明的返回值一致 ## 返回值对象: 这是一个UDF对象, 仅可以用于 DSL 语法 ## 当前这种方式定义的UDF, 可以通过参数1的名称用于SQL风格, 通过返回值对象用户DSL风格 udf2 = spark.udf.register(\\"udf1\\", num_ride_10, IntegerType()) ## SQL风格中使用 ## selectExpr 以SELECT的表达式执行, 表达式 SQL风格的表达式(字符串) ## select方法, 接受普通的字符串字段名, 或者返回值是Column对象的计算 df.selectExpr(\\"udf1(num)\\").show() ## DSL 风格中使用 ## 返回值UDF对象 如果作为方法使用, 传入的参数 一定是Column对象 df.select(udf2(df['num'])).show() ## TODO 2: 方式2注册, 仅能用于DSL风格 udf3 = F.udf(num_ride_10, IntegerType()) df.select(udf3(df['num'])).show() df.selectExpr(\\"udf3(num)\\").show()","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E6%8D%AE%E5%B7%A5%E7%A8%8B/spark/function/pyspark_functions.md/pyspark_dataframe_udf.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"dataframe_udf"}],["meta",{"property":"og:description","content":"dataframe_udf ## coding:utf8 import time from pyspark.sql import SparkSession from pyspark.sql.types import StructType, StringType, IntegerType import pandas as pd from pyspark.sql import functions as F ## 0. 构建执行环境入口对象SparkSession spark = SparkSession.builder.\\\\ appName(\\"test\\").\\\\ master(\\"local[*]\\").\\\\ config(\\"spark.sql.shuffle.partitions\\", 2).\\\\ getOrCreate() sc = spark.sparkContext ## 构建一个RDD rdd = sc.parallelize([1, 2, 3, 4, 5, 6, 7]).map(lambda x:[x]) df = rdd.toDF([\\"num\\"]) ## TODO 1: 方式1 sparksession.udf.register(), DSL和SQL风格均可以使用 ## UDF的处理函数 def num_ride_10(num): return num * 10 ## 参数1: 注册的UDF的名称, 这个udf名称, 仅可以用于 SQL风格 ## 参数2: UDF的处理逻辑, 是一个单独的方法 ## 参数3: 声明UDF的返回值类型, 注意: UDF注册时候, 必须声明返回值类型, 并且UDF的真实返回值一定要和声明的返回值一致 ## 返回值对象: 这是一个UDF对象, 仅可以用于 DSL 语法 ## 当前这种方式定义的UDF, 可以通过参数1的名称用于SQL风格, 通过返回值对象用户DSL风格 udf2 = spark.udf.register(\\"udf1\\", num_ride_10, IntegerType()) ## SQL风格中使用 ## selectExpr 以SELECT的表达式执行, 表达式 SQL风格的表达式(字符串) ## select方法, 接受普通的字符串字段名, 或者返回值是Column对象的计算 df.selectExpr(\\"udf1(num)\\").show() ## DSL 风格中使用 ## 返回值UDF对象 如果作为方法使用, 传入的参数 一定是Column对象 df.select(udf2(df['num'])).show() ## TODO 2: 方式2注册, 仅能用于DSL风格 udf3 = F.udf(num_ride_10, IntegerType()) df.select(udf3(df['num'])).show() df.selectExpr(\\"udf3(num)\\").show()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-26T14:44:07.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-26T14:44:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"dataframe_udf\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-26T14:44:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[],"git":{"createdTime":1701009847000,"updatedTime":1701009847000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.25,"words":374},"filePathRelative":"数据工程/spark/function/pyspark_functions.md/pyspark_dataframe_udf.md","localizedDate":"2023年11月26日","excerpt":"<h1> dataframe_udf</h1>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\">## coding:utf8</span>\\n<span class=\\"token keyword\\">import</span> time\\n\\n<span class=\\"token keyword\\">from</span> pyspark<span class=\\"token punctuation\\">.</span>sql <span class=\\"token keyword\\">import</span> SparkSession\\n<span class=\\"token keyword\\">from</span> pyspark<span class=\\"token punctuation\\">.</span>sql<span class=\\"token punctuation\\">.</span>types <span class=\\"token keyword\\">import</span> StructType<span class=\\"token punctuation\\">,</span> StringType<span class=\\"token punctuation\\">,</span> IntegerType\\n<span class=\\"token keyword\\">import</span> pandas <span class=\\"token keyword\\">as</span> pd\\n<span class=\\"token keyword\\">from</span> pyspark<span class=\\"token punctuation\\">.</span>sql <span class=\\"token keyword\\">import</span> functions <span class=\\"token keyword\\">as</span> F\\n\\n<span class=\\"token comment\\">## 0. 构建执行环境入口对象SparkSession</span>\\nspark <span class=\\"token operator\\">=</span> SparkSession<span class=\\"token punctuation\\">.</span>builder<span class=\\"token punctuation\\">.</span>\\\\\\n    appName<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"test\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>\\\\\\n    master<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"local[*]\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>\\\\\\n    config<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"spark.sql.shuffle.partitions\\"</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>\\\\\\n    getOrCreate<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\nsc <span class=\\"token operator\\">=</span> spark<span class=\\"token punctuation\\">.</span>sparkContext\\n\\n<span class=\\"token comment\\">## 构建一个RDD</span>\\nrdd <span class=\\"token operator\\">=</span> sc<span class=\\"token punctuation\\">.</span>parallelize<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">7</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span><span class=\\"token builtin\\">map</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">lambda</span> x<span class=\\"token punctuation\\">:</span><span class=\\"token punctuation\\">[</span>x<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\ndf <span class=\\"token operator\\">=</span> rdd<span class=\\"token punctuation\\">.</span>toDF<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"num\\"</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## TODO 1: 方式1 sparksession.udf.register(), DSL和SQL风格均可以使用</span>\\n<span class=\\"token comment\\">## UDF的处理函数</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">num_ride_10</span><span class=\\"token punctuation\\">(</span>num<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">return</span> num <span class=\\"token operator\\">*</span> <span class=\\"token number\\">10</span>\\n<span class=\\"token comment\\">## 参数1: 注册的UDF的名称, 这个udf名称, 仅可以用于 SQL风格</span>\\n<span class=\\"token comment\\">## 参数2: UDF的处理逻辑, 是一个单独的方法</span>\\n<span class=\\"token comment\\">## 参数3: 声明UDF的返回值类型, 注意: UDF注册时候, 必须声明返回值类型, 并且UDF的真实返回值一定要和声明的返回值一致</span>\\n<span class=\\"token comment\\">## 返回值对象: 这是一个UDF对象, 仅可以用于 DSL 语法</span>\\n<span class=\\"token comment\\">## 当前这种方式定义的UDF, 可以通过参数1的名称用于SQL风格, 通过返回值对象用户DSL风格</span>\\nudf2 <span class=\\"token operator\\">=</span> spark<span class=\\"token punctuation\\">.</span>udf<span class=\\"token punctuation\\">.</span>register<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"udf1\\"</span><span class=\\"token punctuation\\">,</span> num_ride_10<span class=\\"token punctuation\\">,</span> IntegerType<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## SQL风格中使用</span>\\n<span class=\\"token comment\\">## selectExpr 以SELECT的表达式执行, 表达式 SQL风格的表达式(字符串)</span>\\n<span class=\\"token comment\\">## select方法, 接受普通的字符串字段名, 或者返回值是Column对象的计算</span>\\ndf<span class=\\"token punctuation\\">.</span>selectExpr<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"udf1(num)\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## DSL 风格中使用</span>\\n<span class=\\"token comment\\">## 返回值UDF对象 如果作为方法使用, 传入的参数 一定是Column对象</span>\\ndf<span class=\\"token punctuation\\">.</span>select<span class=\\"token punctuation\\">(</span>udf2<span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'num'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\">## TODO 2: 方式2注册, 仅能用于DSL风格</span>\\nudf3 <span class=\\"token operator\\">=</span> F<span class=\\"token punctuation\\">.</span>udf<span class=\\"token punctuation\\">(</span>num_ride_10<span class=\\"token punctuation\\">,</span> IntegerType<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\ndf<span class=\\"token punctuation\\">.</span>select<span class=\\"token punctuation\\">(</span>udf3<span class=\\"token punctuation\\">(</span>df<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'num'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\ndf<span class=\\"token punctuation\\">.</span>selectExpr<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"udf3(num)\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>show<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
