import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o,c,a as s,b as n,d as i,e as a}from"./app-XqA98pG8.js";const u={},l=a(`<h1 id="stream-source" tabindex="-1"><a class="header-anchor" href="#stream-source" aria-hidden="true">#</a> stream_source</h1><h2 id="from-collection" tabindex="-1"><a class="header-anchor" href="#from-collection" aria-hidden="true">#</a> from_collection</h2><p>从内存中读取</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common <span class="token keyword">import</span>  Types
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment<span class="token punctuation">,</span> RuntimeExecutionMode

<span class="token comment">## declare an execution environment</span>
env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>BATCH<span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># write all the data to one file</span>

<span class="token comment">## define the source</span>
ds <span class="token operator">=</span> env<span class="token punctuation">.</span>from_collection<span class="token punctuation">(</span>
    collection<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;aaa|bb&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;bb|a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;aaa|a&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    type_info<span class="token operator">=</span>Types<span class="token punctuation">.</span>ROW<span class="token punctuation">(</span><span class="token punctuation">[</span>Types<span class="token punctuation">.</span>INT<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Types<span class="token punctuation">.</span>STRING<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">## define the sink</span>
ds<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## submit for execution</span>
env<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="filesystem" tabindex="-1"><a class="header-anchor" href="#filesystem" aria-hidden="true">#</a> filesystem</h2><h3 id="read-text-file" tabindex="-1"><a class="header-anchor" href="#read-text-file" aria-hidden="true">#</a> read_text_file</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment<span class="token punctuation">,</span> RuntimeExecutionMode
env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>STREAMING<span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment"># write all the data to one file</span>

<span class="token comment">## source</span>
ds <span class="token operator">=</span> env<span class="token punctuation">.</span>read_text_file<span class="token punctuation">(</span><span class="token string">&quot;./words.txt&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## transformation</span>
<span class="token comment">## sink</span>
ds<span class="token punctuation">.</span><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="from-source" tabindex="-1"><a class="header-anchor" href="#from-source" aria-hidden="true">#</a> from_source</h3><p><code>from_source </code> Currently, only supports <code>NumberSequenceSource</code> and <code>FileSource</code> as unified DataStream source connectors. The DataStream created using <code>from_source</code> could be executed in both <code>batch</code> and <code>streaming</code> executing mode.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common <span class="token keyword">import</span> WatermarkStrategy<span class="token punctuation">,</span>Encoder
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment<span class="token punctuation">,</span> RuntimeExecutionMode
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream<span class="token punctuation">.</span>connectors <span class="token keyword">import</span> <span class="token punctuation">(</span>FileSource<span class="token punctuation">,</span> StreamFormat<span class="token punctuation">,</span> FileSink<span class="token punctuation">,</span> OutputFileConfig<span class="token punctuation">,</span>
                                           RollingPolicy<span class="token punctuation">)</span>

env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_runtime_mode<span class="token punctuation">(</span>RuntimeExecutionMode<span class="token punctuation">.</span>BATCH<span class="token punctuation">)</span>
env<span class="token punctuation">.</span>set_parallelism<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment"># write all the data to one file</span>

<span class="token comment">## define the source</span>
ds <span class="token operator">=</span> env<span class="token punctuation">.</span>from_source<span class="token punctuation">(</span>
    source<span class="token operator">=</span>FileSource<span class="token punctuation">.</span>for_record_stream_format<span class="token punctuation">(</span>StreamFormat<span class="token punctuation">.</span>text_line_format<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">&quot;./test.csv&quot;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span>process_static_file_set<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>build<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    watermark_strategy<span class="token operator">=</span>WatermarkStrategy<span class="token punctuation">.</span>for_monotonous_timestamps<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    source_name<span class="token operator">=</span><span class="token string">&quot;file_source&quot;</span>  <span class="token comment"># source id</span>
<span class="token punctuation">)</span>


<span class="token comment">## define the sink</span>
ds<span class="token punctuation">.</span>sink_to<span class="token punctuation">(</span>
    sink<span class="token operator">=</span>FileSink<span class="token punctuation">.</span>for_row_format<span class="token punctuation">(</span>
        base_path<span class="token operator">=</span><span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span>  <span class="token comment"># 文件保存的路径</span>
        encoder<span class="token operator">=</span>Encoder<span class="token punctuation">.</span>simple_string_encoder<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 保存文件的编码, 比如utf8</span>
    <span class="token punctuation">.</span>with_output_file_config<span class="token punctuation">(</span>
        OutputFileConfig<span class="token punctuation">.</span>builder<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span>with_part_prefix<span class="token punctuation">(</span><span class="token string">&quot;prefix&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span>with_part_suffix<span class="token punctuation">(</span><span class="token string">&quot;.ext&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span>build<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>with_rolling_policy<span class="token punctuation">(</span>RollingPolicy<span class="token punctuation">.</span>default_rolling_policy<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span>build<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
env<span class="token punctuation">.</span>execute<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="add-source" tabindex="-1"><a class="header-anchor" href="#add-source" aria-hidden="true">#</a> add_source</h2><p>最通用的方法，建议使用</p>`,12),r={href:"https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/datastream/overview/",target:"_blank",rel:"noopener noreferrer"},d=a(`<h3 id="kafka" tabindex="-1"><a class="header-anchor" href="#kafka" aria-hidden="true">#</a> kafka</h3><p>It currently only supports <code>FlinkKafkaConsumer</code> to be used as DataStream source connectors with method add_source. The DataStream created using <code>add_source</code> could only be executed in <code>streaming</code> executing mode.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common<span class="token punctuation">.</span>serialization <span class="token keyword">import</span> JsonRowDeserializationSchema
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common<span class="token punctuation">.</span>typeinfo <span class="token keyword">import</span> Types
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream <span class="token keyword">import</span> StreamExecutionEnvironment
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream<span class="token punctuation">.</span>connectors <span class="token keyword">import</span> FlinkKafkaConsumer

env <span class="token operator">=</span> StreamExecutionEnvironment<span class="token punctuation">.</span>get_execution_environment<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## the sql connector for kafka is used here as it&#39;s a fat jar and could avoid dependency issues</span>
env<span class="token punctuation">.</span>add_jars<span class="token punctuation">(</span><span class="token string">&quot;file:///path/to/flink-sql-connector-kafka.jar&quot;</span><span class="token punctuation">)</span>

deserialization_schema <span class="token operator">=</span> JsonRowDeserializationSchema<span class="token punctuation">.</span>builder<span class="token punctuation">(</span><span class="token punctuation">)</span> \\
    <span class="token punctuation">.</span>type_info<span class="token punctuation">(</span>type_info<span class="token operator">=</span>Types<span class="token punctuation">.</span>ROW<span class="token punctuation">(</span><span class="token punctuation">[</span>Types<span class="token punctuation">.</span>INT<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Types<span class="token punctuation">.</span>STRING<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>build<span class="token punctuation">(</span><span class="token punctuation">)</span>

kafka_consumer <span class="token operator">=</span> FlinkKafkaConsumer<span class="token punctuation">(</span>
    topics<span class="token operator">=</span><span class="token string">&#39;test_source_topic&#39;</span><span class="token punctuation">,</span>
    deserialization_schema<span class="token operator">=</span>deserialization_schema<span class="token punctuation">,</span>
    properties<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;bootstrap.servers&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;localhost:9092&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;group.id&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;test_group&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

ds <span class="token operator">=</span> env<span class="token punctuation">.</span>add_source<span class="token punctuation">(</span>kafka_consumer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common<span class="token punctuation">.</span>typeinfo <span class="token keyword">import</span> Types
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>datastream<span class="token punctuation">.</span>connectors <span class="token keyword">import</span> FlinkKafkaProducer
<span class="token keyword">from</span> pyflink<span class="token punctuation">.</span>common<span class="token punctuation">.</span>serialization <span class="token keyword">import</span> JsonRowSerializationSchema

serialization_schema <span class="token operator">=</span> JsonRowSerializationSchema<span class="token punctuation">.</span>builder<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>with_type_info<span class="token punctuation">(</span>
    type_info<span class="token operator">=</span>Types<span class="token punctuation">.</span>ROW<span class="token punctuation">(</span><span class="token punctuation">[</span>Types<span class="token punctuation">.</span>INT<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Types<span class="token punctuation">.</span>STRING<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>build<span class="token punctuation">(</span><span class="token punctuation">)</span>

kafka_producer <span class="token operator">=</span> FlinkKafkaProducer<span class="token punctuation">(</span>
    topic<span class="token operator">=</span><span class="token string">&#39;test_sink_topic&#39;</span><span class="token punctuation">,</span>
    serialization_schema<span class="token operator">=</span>serialization_schema<span class="token punctuation">,</span>
    producer_config<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;bootstrap.servers&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;localhost:9092&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;group.id&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;test_group&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

ds<span class="token punctuation">.</span>add_sink<span class="token punctuation">(</span>kafka_producer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/connectors/datastream/overview/ https://nightlies.apache.org/flink/flink-docs-release-1.13/api/python/_modules/pyflink/datastream/connectors.html https://nightlies.apache.org/flink/flink-docs-release-1.15/api/python/pyflink.datastream.html#module-pyflink.datastream.connectors https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/python/datastream_tutorial/ https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/python/datastream/intro_to_datastream_api/</p>`,5);function k(m,v){const t=p("ExternalLinkIcon");return o(),c("div",null,[l,s("p",null,[n("可以在"),s("a",r,[n("官网"),i(t)]),n("查找相关的connector.")]),d])}const h=e(u,[["render",k],["__file","pyflink_stream_source.html.vue"]]);export{h as default};
