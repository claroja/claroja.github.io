import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as a,o as p,c as m,d as e,w as d,a as s,b as t,e as n}from"./app-yeyEmHfz.js";const l={},r=n(`<h1 id="time" tabindex="-1"><a class="header-anchor" href="#time" aria-hidden="true">#</a> time</h1><p>epoch: 计时初始点 timezone, tz: 时区 localtime: 本地时间 timestamp: 时间戳 struct_time: 结构化时间</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><div class="language-mermaid line-numbers-mode" data-ext="mermaid"><pre class="language-mermaid"><code><span class="token keyword">graph</span> LR<span class="token punctuation">;</span>
timestamp <span class="token arrow operator">--&gt;</span><span class="token label property">|localtime方法或gmtime方法|</span>struct_time<span class="token punctuation">;</span>
struct_time <span class="token arrow operator">--&gt;</span><span class="token label property">|mktime方法或timegm方法|</span>timestamp<span class="token punctuation">;</span>
struct_time <span class="token arrow operator">--&gt;</span><span class="token label property">|strftime方法|</span>字符串<span class="token punctuation">;</span>
字符串 <span class="token arrow operator">--&gt;</span><span class="token label property">|strptime方法|</span>struct_time
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h2><h3 id="utc和timezone" tabindex="-1"><a class="header-anchor" href="#utc和timezone" aria-hidden="true">#</a> UTC和TimeZone</h3><p>UTC (Coordinated Universal Time)是世界的标准时间(0经度为标准), Time Zone是根据UTC来划分的, 比如:</p><ol><li>North and South America, 是Central Time Zone (CT)计时法, 在UTC之后的5小时或6小时, 记作UTC-5:00 or UTC-6:00</li><li>Sydney, Australia, 是Australian Eastern Time Zone (AET)计时法, 在UTC之前10小时或11小时, 记作UTC+10:00 or UTC+11:00</li></ol><p>0经度的时间也称为GMT(Greenwich Mean Time)时间.</p><h3 id="daylight-savings-time-dst" tabindex="-1"><a class="header-anchor" href="#daylight-savings-time-dst" aria-hidden="true">#</a> Daylight Savings Time(DST)</h3><p>CT是偏移 -5或-6, AET是偏移+10或+11是因为考虑了夏令时(Daylight Saving Time, DST).</p><p>夏天相比冬天, 有更长的日照时间, 所以有些地区会观测日照时间来更好的利用它. 这些地区的时间会在春季将时间前移1个小时(丢失了1小时), 在秋季将时间复原.</p><p>字母<code>S</code>和<code>D</code>表示当前时间是standard time(标准时间)还是daylight savings time(夏令), 所以更准的表示为:</p><ol><li>Central Standard Time (C<code>S</code>T) 或 Central Daylight Time (C<code>D</code>T)</li><li>Australian Eastern Standard Time (AE<code>S</code>T) 或 Australian Eastern Daylight Time (AE<code>D</code>T)</li></ol><h2 id="时间戳" tabindex="-1"><a class="header-anchor" href="#时间戳" aria-hidden="true">#</a> 时间戳</h2><p>基本上所有的电脑都以<code>Unix epoch</code>, 作为计时的起点,<code>January 1, 1970, at 00:00:00 UTC</code>, 可以使用<code>time</code>模块获得<code>Unix epoch</code>以来的秒数.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,17),u=n(`<p><code>time.time()</code>返回的秒数, 也是本地时间, 而不是GMT时间. 可以看到本地时间(中国), 比GMT时间快了8小时.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>time<span class="token punctuation">.</span>gmtime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># time.struct_time(tm_year=2023, tm_mon=3, tm_mday=6, tm_hour=11, tm_min=43, tm_sec=38, tm_wday=0, tm_yday=65, tm_isdst=0)</span>
time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># time.struct_time(tm_year=2023, tm_mon=3, tm_mday=6, tm_hour=19, tm_min=43, tm_sec=38, tm_wday=0, tm_yday=65, tm_isdst=0)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gmt时间-gmtime" tabindex="-1"><a class="header-anchor" href="#gmt时间-gmtime" aria-hidden="true">#</a> GMT时间(gmtime)</h2><p>GMT(Greenwich Mean Time), 就是没有偏移量的UTC时间(UTC±00:00)<br><code>gmtime()</code>使用UTC将流逝的时间转化为<code>struct_time</code>, 如果传入0, 就是获得最初的时间(epoch):</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
time<span class="token punctuation">.</span>gmtime<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token comment">## time.struct_time(tm_year=1970, tm_mon=1, tm_mday=1, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=3, tm_yday=1, tm_isdst=0)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>gmtime()</code>GMT时间即(UTC无偏移时间),<code>localtime()</code>是东八区时间(中国), 即(UTC+8)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
time<span class="token punctuation">.</span>gmtime<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## time.struct_time(tm_year=2023, tm_mon=3, tm_mday=6, tm_hour=11, tm_min=32, tm_sec=33, tm_wday=0, tm_yday=65, tm_isdst=0)</span>
time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## time.struct_time(tm_year=2023, tm_mon=3, tm_mday=6, tm_hour=19, tm_min=32, tm_sec=33, tm_wday=0, tm_yday=65, tm_isdst=0)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="timegm" tabindex="-1"><a class="header-anchor" href="#timegm" aria-hidden="true">#</a> timegm</h3><p>有趣的是, time模块没有<code>gmtime</code>的逆方法, 将结构化时间转化为时间戳, 我们需要借用<code>calendar</code>模块的的<code>timegm()</code>方法:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> calendar
<span class="token keyword">import</span> time
time<span class="token punctuation">.</span>gmtime<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># time.struct_time(tm_year=2019, tm_mon=2, tm_mday=28, tm_hour=13, tm_min=23, tm_sec=12, tm_wday=3, tm_yday=59, tm_isdst=0)</span>
calendar<span class="token punctuation">.</span>timegm<span class="token punctuation">(</span>time<span class="token punctuation">.</span>gmtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 1551360204</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地时间-localtime" tabindex="-1"><a class="header-anchor" href="#本地时间-localtime" aria-hidden="true">#</a> 本地时间(localtime)</h2><p><code>time</code>模块提供了<code>localtime()</code>方法获得本地区的流逝的时间</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 1551448206.86196</span>
time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token number">1551448206.86196</span><span class="token punctuation">)</span>  <span class="token comment"># time.struct_time(tm_year=2019, tm_mon=3, tm_mday=1, tm_hour=7, tm_min=50, tm_sec=6, tm_wday=4, tm_yday=60, tm_isdst=0)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意此时的<code>tm_isdst=0</code>, 也就是说此刻的时间(March 1, 2019)是标准时间. 美国2019年的夏令时间开始于March 10, 我们可以验证一下:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>new_secs <span class="token operator">=</span> <span class="token number">1551448206.86196</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token number">86400</span> <span class="token operator">*</span> <span class="token number">9</span><span class="token punctuation">)</span>
time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>new_secs<span class="token punctuation">)</span>  <span class="token comment"># time.struct_time(tm_year=2019, tm_mon=3, tm_mday=10, tm_hour=8, tm_min=50, tm_sec=6, tm_wday=6, tm_yday=69, tm_isdst=1)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>此时<code>tm_isdst=1</code>, 也就是说3月10号变成了夏令时, 注意此时的<code>tm_hour</code>从7变成了8, 说明我们的时间向前调了1个小时</p><p><code>localtime()</code>方法返回的<code>struct_time</code>包含了时区信息, 如果是在美国则返回:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
current_local <span class="token operator">=</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span>
current_local<span class="token punctuation">.</span>tm_zone  <span class="token comment"># &#39;CST&#39;</span>
current_local<span class="token punctuation">.</span>tm_gmtoff  <span class="token comment"># -21600</span>
current_local<span class="token punctuation">.</span>tm_isdst  <span class="token comment"># 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在中国则返回:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
current_local <span class="token operator">=</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span>
current_local<span class="token punctuation">.</span>tm_zone  <span class="token comment"># &#39;中国标准时间&#39;</span>
current_local<span class="token punctuation">.</span>tm_gmtoff  <span class="token comment"># 28800</span>
current_local<span class="token punctuation">.</span>tm_isdst  <span class="token comment"># 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mktime-t" tabindex="-1"><a class="header-anchor" href="#mktime-t" aria-hidden="true">#</a> mktime(t)</h3><p><code>localtime()</code>的逆方法, 参数是<code>struct_time</code>, 将结构化时间转换为时间戳. 特别注意<code>mktime()</code>传入的local time, 不能是GMT时间:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
<span class="token comment">## 1. 获得GMT时间</span>
current_utc <span class="token operator">=</span> time<span class="token punctuation">.</span>gmtime<span class="token punctuation">(</span><span class="token punctuation">)</span>
current_utc  <span class="token comment"># time.struct_time(tm_year=2023, tm_mon=3, tm_mday=6, tm_hour=11, tm_min=40, tm_sec=0, tm_wday=0, tm_yday=65, tm_isdst=0)</span>
<span class="token comment">## 2. 将GMT误当成UTC+8时间转为秒数</span>
current_utc_secs <span class="token operator">=</span> time<span class="token punctuation">.</span>mktime<span class="token punctuation">(</span>current_utc<span class="token punctuation">)</span>
current_utc_secs  <span class="token comment"># 1678074000.0</span>
<span class="token comment">## 3. 将错误的秒数重新转化为GMT时间, 发现差了8小时</span>
time<span class="token punctuation">.</span>gmtime<span class="token punctuation">(</span>current_utc_secs<span class="token punctuation">)</span>  <span class="token comment"># time.struct_time(tm_year=2023, tm_mon=3, tm_mday=6, tm_hour=3, tm_min=40, tm_sec=0, tm_wday=0, tm_yday=65, tm_isdst=0)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="struct-time" tabindex="-1"><a class="header-anchor" href="#struct-time" aria-hidden="true">#</a> struct_time</h2><p><code>gmtime()</code>,<code>localtime()</code>和<code>strptime()</code>可以将时间戳转换为<code>struct_time</code>, 包含了详细的时间信息.</p>`,25),h={href:"https://docs.python.org/3/library/time.html#time.struct_time",target:"_blank",rel:"noopener noreferrer"},_=n(`<h2 id="时间和字符串之间的转换" tabindex="-1"><a class="header-anchor" href="#时间和字符串之间的转换" aria-hidden="true">#</a> 时间和字符串之间的转换</h2><h3 id="strftime-format-t" tabindex="-1"><a class="header-anchor" href="#strftime-format-t" aria-hidden="true">#</a> strftime(format[, t])</h3><p>将<code>struct_time</code>转化为字符串, str<code>f</code>time中的<code>f</code>是指format(格式化)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&#39;%Y-%m-%d&#39;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># &#39;2019-03-01&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="strptime-string-format" tabindex="-1"><a class="header-anchor" href="#strptime-string-format" aria-hidden="true">#</a> strptime(string[, format])</h3><p>将字符转解析成结构化时间, str<code>p</code>time中的<code>p</code>是parse(解析)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> time
time<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span><span class="token string">&quot;30 Nov 00&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;%d %b %y&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://docs.python.org/3/library/time.html</p>`,8);function k(v,y){const i=a("font"),c=a("ExternalLinkIcon");return p(),m("div",null,[r,e(i,{style:{background:"hotpink"}},{default:d(()=>[t("注意:")]),_:1}),u,s("p",null,[s("a",h,[t("参考官方"),e(c)])]),_])}const T=o(l,[["render",k],["__file","time.html.vue"]]);export{T as default};
