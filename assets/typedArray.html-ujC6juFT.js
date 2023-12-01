import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as a,e as s}from"./app-qxiCM96p.js";const e={},d=s(`<h1 id="typedarray" tabindex="-1"><a class="header-anchor" href="#typedarray" aria-hidden="true">#</a> typedArray</h1><p><code>ArrayBuffer</code>不能直接读取, 需要用<code>TypedArray</code>. 为什么这么设置? <code>ArrayBuffer</code>主要是用来做缓存的, 所以这一层不关心具体数据是如何, 只管存和取. <code>TypedArray</code>则是进行具体的操作.</p><h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h2><p><code>int8Array</code>是将<code>ArrayBuffer</code>中的一个字节当成一个元素,<code>Int16Array</code>则是将<code>ArrayBuffer</code>中的两个字节当成一个元素. 依次类推. 例如:</p><ol><li><p><code>ArrayBuffer</code>中有8个字节,分别为<code>1 2 3 4 5 6 7 8</code></p></li><li><p>分别根据这个<code>ArrayBuffer</code>创建Uint8,Uint16,和Unit32</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> u8 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint8Array</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// length为8  </span>
<span class="token keyword">var</span> u16 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint16Array</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// length为4 </span>
<span class="token keyword">var</span> u32 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Uint32Array</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// length为2  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>结果为</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span> <span class="token comment">//u8</span>
<span class="token punctuation">[</span><span class="token number">513</span><span class="token punctuation">,</span> <span class="token number">1027</span><span class="token punctuation">,</span> <span class="token number">1541</span><span class="token punctuation">,</span> <span class="token number">2055</span><span class="token punctuation">]</span> <span class="token comment">//u16</span>
<span class="token punctuation">[</span><span class="token number">67305985</span><span class="token punctuation">,</span> <span class="token number">134678021</span><span class="token punctuation">]</span> <span class="token comment">//u32</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="类型" tabindex="-1"><a class="header-anchor" href="#类型" aria-hidden="true">#</a> 类型</h2><table><thead><tr><th>Type</th><th>Value Range</th><th>Size in bytes</th><th>Description</th><th>Web IDL type</th><th>Equivalent C type</th></tr></thead><tbody><tr><td>Int8Array</td><td>-128 to 127</td><td>1</td><td>8-bit two&#39;s complement signed integer</td><td>byte</td><td>int8_t</td></tr><tr><td>Uint8Array</td><td>0 to 255</td><td>1</td><td>8-bit unsigned integer</td><td>octet</td><td>uint8_t</td></tr><tr><td>Uint8ClampedArray</td><td>0 to 255</td><td>1</td><td>8-bit unsigned integer (clamped)</td><td>octet</td><td>uint8_t</td></tr><tr><td>Int16Array</td><td>-32768 to 32767</td><td>2</td><td>16-bit two&#39;s complement signed integer</td><td>short</td><td>int16_t</td></tr><tr><td>Uint16Array</td><td>0 to 65535</td><td>2</td><td>16-bit unsigned integer</td><td>unsigned short</td><td>uint16_t</td></tr><tr><td>Int32Array</td><td>-2147483648 to 2147483647</td><td>4</td><td>32-bit two&#39;s complement signed integer</td><td>long i</td><td>nt32_t</td></tr><tr><td>Uint32Array</td><td>0 to 4294967295</td><td>4</td><td>32-bit unsigned integer</td><td>unsigned long</td><td>uint32_t</td></tr><tr><td>Float32Array</td><td>1.2×10-38 to 3.4×1038</td><td>4</td><td>32-bit IEEE floating point number (7 significant digits e.g., 1.1234567)</td><td>unrestricted float</td><td>float</td></tr><tr><td>Float64Array</td><td>5.0×10-324 to 1.8×10308</td><td>8</td><td>64-bit IEEE floating point number (16 significant digits e.g., 1.123...15)</td><td>unrestricted double</td><td>double</td></tr><tr><td>BigInt64Array</td><td>-263 to 263-1</td><td>8</td><td>64-bit two&#39;s complement signed integer</td><td>bigint</td><td>int64_t (signed long long)</td></tr><tr><td>BigUint64Array</td><td>0 to 264-1</td><td>8</td><td>64-bit unsigned integer</td><td>bigint</td><td>uint64_t (unsigned long long)</td></tr></tbody></table><p>参考: https://www.jb51.net/article/147112.htm https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Syntax</p>`,8),o=[d];function r(p,c){return n(),a("div",null,o)}const u=t(e,[["render",r],["__file","typedArray.html.vue"]]);export{u as default};
