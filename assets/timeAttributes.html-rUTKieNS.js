import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,a as e}from"./app-nD1Z-e8V.js";const t={},o=e(`<h1 id="timeattributes" tabindex="-1"><a class="header-anchor" href="#timeattributes" aria-hidden="true">#</a> timeAttributes</h1><p>Flink can process data based on different notions of time.</p><ul><li><strong>Processing time</strong> refers to the machine’s system time (also known as epoch time, e.g. Java’s System.currentTimeMillis()) that is executing the respective operation.</li><li><strong>Event time</strong> refers to the processing of streaming data based on timestamps that are attached to each row. The timestamps can encode when an event happened.</li></ul><p>Time attributes can be part of every <code>table schema</code>. They are defined when creating a table from a <code>CREATE TABLE DDL</code> or a <code>DataStream</code>. Once a time attribute is defined, it can be referenced as a field and used in time-based operations.</p><h2 id="event-time" tabindex="-1"><a class="header-anchor" href="#event-time" aria-hidden="true">#</a> Event Time</h2><p>To handle out-of-order events and to distinguish between on-time and late events in streaming, Flink needs to know the timestamp for each row, and it also needs regular indications of how far along in event time the processing has progressed so far (via so-called <code>watermarks</code>).</p><p>The event time attribute is defined using a <code>WATERMARK</code> statement in <code>CREATE table DDL</code>.Flink supports defining event time attribute on <code>TIMESTAMP</code> column and <code>TIMESTAMP_LTZ</code> column.</p><ul><li><p>If the timestamp data in the source is represented as <code>year-month-day-hour-minute-second</code>, usually a string value without time-zone information, e.g. 2020-04-15 20:13:40.564, it’s recommended to define the event time attribute as a TIMESTAMP column:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> user_actions <span class="token punctuation">(</span>
user_name STRING<span class="token punctuation">,</span>
<span class="token keyword">data</span> STRING<span class="token punctuation">,</span>
user_action_time <span class="token keyword">TIMESTAMP</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token comment">-- declare user_action_time as event time attribute and use 5 seconds delayed watermark strategy</span>
WATERMARK <span class="token keyword">FOR</span> user_action_time <span class="token keyword">AS</span> user_action_time <span class="token operator">-</span> <span class="token keyword">INTERVAL</span> <span class="token string">&#39;5&#39;</span> <span class="token keyword">SECOND</span>
<span class="token punctuation">)</span> <span class="token keyword">WITH</span> <span class="token punctuation">(</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> TUMBLE_START<span class="token punctuation">(</span>user_action_time<span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token string">&#39;10&#39;</span> <span class="token keyword">MINUTE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> user_name<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> user_actions
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> TUMBLE<span class="token punctuation">(</span>user_action_time<span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token string">&#39;10&#39;</span> <span class="token keyword">MINUTE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>If the timestamp data in the source is represented as a <code>epoch time</code>, usually a long value, e.g. <code>1618989564564</code>, it’s recommended to define event time attribute as a TIMESTAMP_LTZ column:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> user_actions <span class="token punctuation">(</span>
user_name STRING<span class="token punctuation">,</span>
<span class="token keyword">data</span> STRING<span class="token punctuation">,</span>
ts <span class="token keyword">BIGINT</span><span class="token punctuation">,</span>
time_ltz <span class="token keyword">AS</span> TO_TIMESTAMP_LTZ<span class="token punctuation">(</span>ts<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token comment">-- declare time_ltz as event time attribute and use 5 seconds delayed watermark strategy</span>
WATERMARK <span class="token keyword">FOR</span> time_ltz <span class="token keyword">AS</span> time_ltz <span class="token operator">-</span> <span class="token keyword">INTERVAL</span> <span class="token string">&#39;5&#39;</span> <span class="token keyword">SECOND</span>
<span class="token punctuation">)</span> <span class="token keyword">WITH</span> <span class="token punctuation">(</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> TUMBLE_START<span class="token punctuation">(</span>time_ltz<span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token string">&#39;10&#39;</span> <span class="token keyword">MINUTE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> user_name<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> user_actions
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> TUMBLE<span class="token punctuation">(</span>time_ltz<span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token string">&#39;10&#39;</span> <span class="token keyword">MINUTE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="processing-time" tabindex="-1"><a class="header-anchor" href="#processing-time" aria-hidden="true">#</a> Processing Time</h2><p>Processing time allows a table program to produce results based on the time of the local machine.</p><p>The processing time attribute is defined as a computed column in CREATE table DDL using the system PROCTIME() function, the function return type is TIMESTAMP_LTZ.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">TABLE</span> user_actions <span class="token punctuation">(</span>
  user_name STRING<span class="token punctuation">,</span>
  <span class="token keyword">data</span> STRING<span class="token punctuation">,</span>
  user_action_time <span class="token keyword">AS</span> PROCTIME<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">-- declare an additional field as a processing time attribute</span>
<span class="token punctuation">)</span> <span class="token keyword">WITH</span> <span class="token punctuation">(</span>
  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">SELECT</span> TUMBLE_START<span class="token punctuation">(</span>user_action_time<span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token string">&#39;10&#39;</span> <span class="token keyword">MINUTE</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">COUNT</span><span class="token punctuation">(</span><span class="token keyword">DISTINCT</span> user_name<span class="token punctuation">)</span>
<span class="token keyword">FROM</span> user_actions
<span class="token keyword">GROUP</span> <span class="token keyword">BY</span> TUMBLE<span class="token punctuation">(</span>user_action_time<span class="token punctuation">,</span> <span class="token keyword">INTERVAL</span> <span class="token string">&#39;10&#39;</span> <span class="token keyword">MINUTE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/table/concepts/time_attributes/ https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/concepts/time/ https://nightlies.apache.org/flink/flink-docs-release-1.15/docs/dev/table/sql/create/#create-table</p>`,13),i=[o];function p(c,l){return s(),a("div",null,i)}const r=n(t,[["render",p],["__file","timeAttributes.html.vue"]]);export{r as default};
