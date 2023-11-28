import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as t,e as r}from"./app-yeyEmHfz.js";const n={},o=r(`<h1 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h1><p>javascript中的Array数组就是list列表的意思</p><h2 id="构造" tabindex="-1"><a class="header-anchor" href="#构造" aria-hidden="true">#</a> 构造</h2><ol><li><code>Array()</code> 主要用来创建空列表</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>          <span class="token comment">// 7个位置的空数组, 注意和Array.of(7)比较</span>
<span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// [1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>Array.from(arrayLike[, mapFn[, thisArg]])</code> 任何类array的对象都可以转化</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arrayLike<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li><code>Array.of(element0[, element1[, ...[, elementN]]])</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>       <span class="token comment">// [7], 注意和Array(7)对比</span>
Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td><code>Array.length</code></td><td>长度</td></tr></tbody></table><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><h3 id="map-filter-reduce" tabindex="-1"><a class="header-anchor" href="#map-filter-reduce" aria-hidden="true">#</a> map,filter,reduce</h3><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>map</td><td><code>Array.map(callbackFn(currentValue[, index[, array]])[, thisArg])</code></td></tr><tr><td>filter</td><td><code>Array.filter(callbackFn(element[, index[, array]])[, thisArg])</code></td></tr><tr><td>reduce</td><td><code>Array.reduce(callbackFn(accumulator, currentValue[, index[, array]])[, initialValue])</code></td></tr></tbody></table><h3 id="mutator-methods-更新array" tabindex="-1"><a class="header-anchor" href="#mutator-methods-更新array" aria-hidden="true">#</a> Mutator methods(更新array)</h3><p><code>Array.prototype.copyWithin(target[, start[, end]])</code><code>Array.prototype.fill(value[, start[, end]])</code><code>Array.prototype.pop()</code><code>Array.prototype.push(element1[, ...[, elementN]])</code><code>Array.prototype.reverse()</code><code>Array.prototype.shift()</code><code>Array.prototype.sort()</code><code>Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])</code><code>Array.prototype.unshift(element1[, ...[, elementN]])</code></p><h3 id="accessor-methods-存取数据" tabindex="-1"><a class="header-anchor" href="#accessor-methods-存取数据" aria-hidden="true">#</a> Accessor methods(存取数据)</h3><p><code>Array.prototype.concat([value1[, value2[, ...[, valueN]]]])</code></p><p><code>Array.prototype.includes(valueToFind[, fromIndex])</code><code>Array.prototype.indexOf(searchElement[, fromIndex])</code><code>Array.prototype.join([separator])</code><code>Array.prototype.lastIndexOf(searchElement[, fromIndex])</code><code>Array.prototype.slice([begin[, end]])</code><code>Array.prototype.toString()</code><code>Array.prototype.toLocaleString()</code></p><h3 id="iteration-methods-迭代-不更新原array" tabindex="-1"><a class="header-anchor" href="#iteration-methods-迭代-不更新原array" aria-hidden="true">#</a> Iteration methods(迭代,不更新原array)</h3><p><code>Array.prototype.entries()</code>|返回下标和值的key-value对 <code>Array.prototype.every(callbackFn(element[, index[, array]])[, thisArg])</code><code>Array.prototype.find(callbackFn(element[, index[, array]])[, thisArg])</code><code>Array.prototype.findIndex(callbackFn(element[, index[, array]])[, thisArg])</code><code>Array.prototype.keys()</code><code>Array.prototype.reduceRight(callbackFn(accumulator, currentValue[, index[, array]])[, initialValue])</code><code>Array.prototype.some(callbackFn(element[, index[, array]])[, thisArg])</code><code>Array.prototype.values()</code><code>Array.forEach(callbackFn(currentValue[, index[, array]])[, thisArg])</code></p><p>参考: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array</p>`,22),s=[o];function c(d,p){return e(),t("div",null,s)}const u=a(n,[["render",c],["__file","array.html.vue"]]);export{u as default};
