import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as e,f as p,b as n,d as t,a as l}from"./app-nD1Z-e8V.js";const o={},i=n("h1",{id:"vision-transforms",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vision-transforms","aria-hidden":"true"},"#"),t(" vision_transforms")],-1),c=n("p",null,"性能优化",-1),r=l(`<h3 id="开发环境性能优化" tabindex="-1"><a class="header-anchor" href="#开发环境性能优化" aria-hidden="true">#</a> 开发环境性能优化</h3><ul><li>优化打包构建速度 <ul><li>HMR</li></ul></li><li>优化代码调试 <ul><li>source-map</li></ul></li></ul><h3 id="生产环境性能优化" tabindex="-1"><a class="header-anchor" href="#生产环境性能优化" aria-hidden="true">#</a> 生产环境性能优化</h3><ul><li>优化打包构建速度 <ul><li>oneOf</li><li>babel缓存</li><li>多进程打包</li><li>externals</li><li>dll</li></ul></li><li>优化代码运行的性能 <ul><li>缓存(contenthash)</li><li>tree shaking</li><li>code split</li><li>懒加载/预加载</li><li>pwa</li></ul></li></ul><h3 id="代码调试" tabindex="-1"><a class="header-anchor" href="#代码调试" aria-hidden="true">#</a> 代码调试</h3><p>source-map: 源代码到构建后代码映射,方便debug <code>webpack.config.js</code>配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">devtool</span><span class="token operator">:</span> <span class="token string">&#39;esource-map&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果生产环境需要隐藏代码可以使用&#39;nosources-source-map&#39;</p><ul><li>nosources-source-map 全部隐藏</li><li>hidden-source-map 只隐藏源代码，会提示构建后代码错误信息</li></ul><h3 id="热更新" tabindex="-1"><a class="header-anchor" href="#热更新" aria-hidden="true">#</a> 热更新</h3><p>了解即可,不必为一点打包时间浪费时间</p><p>HMR: hot module replacement 热模块替换 作用：一个模块发生变化，只会重新打包这一个模块（而不是打包所有模块） 极大提升构建速度</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">devServer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">contentBase</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token literal-property property">compress</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    <span class="token literal-property property">open</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hot</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token comment">// 开启HMR功能,需重启webpack</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>样式文件：可以使用HMR功能：因为style-loader内部实现了~</li><li>js文件：默认不能使用HMR功能 --&gt; 需要修改js代码，添加支持HMR功能的代码</li><li>注意：HMR功能对js的处理，只能处理非入口js文件的其他文件。</li><li>html文件: 默认不能使用HMR功能.同时会导致问题：html文件不能热更新了~ （不用做HMR功能） 解决：修改entry入口，将html文件引入</li></ul><h3 id="js缓存" tabindex="-1"><a class="header-anchor" href="#js缓存" aria-hidden="true">#</a> JS缓存</h3><h4 id="热编译" tabindex="-1"><a class="header-anchor" href="#热编译" aria-hidden="true">#</a> 热编译</h4><p>babel缓存,<code>cacheDirectory: true</code>这样就只会对修改的js进行编译</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
<span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.js$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
<span class="token literal-property property">exclude</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
<span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;babel-loader&#39;</span><span class="token punctuation">,</span>
<span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">presets</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
        <span class="token string">&#39;@babel/preset-env&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
        <span class="token literal-property property">useBuiltIns</span><span class="token operator">:</span> <span class="token string">&#39;usage&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">corejs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">version</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">targets</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">chrome</span><span class="token operator">:</span> <span class="token string">&#39;60&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">firefox</span><span class="token operator">:</span> <span class="token string">&#39;50&#39;</span>
        <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token comment">// 开启babel缓存</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="生产缓存处理" tabindex="-1"><a class="header-anchor" href="#生产缓存处理" aria-hidden="true">#</a> 生产缓存处理</h4><p>当我们更新js后,由于客户端浏览器有缓存机制,相同文件名会优先使用cached缓存.如果我们想要立刻更新,需要改变名称. 既每次开发完成后,都更新文件名,这样就能做到每次跟新,客户端也会立刻更新. 更新文件名有三种方式:</p><ul><li>hash: 每次wepack构建时会生成一个唯一的hash值。 缺点:因为js和css同时使用一个hash值。当更新一个文件时其他文件也会修改.</li><li>chunkhash：根据chunk生成的hash值。如果打包来源于同一个chunk，那么hash值就一样 缺点: js和css的hash值还是一样的,因为css是在js中被引入的，所以同属于一个chunk</li><li>contenthash: 根据文件的内容生成hash值。不同文件hash值一定不一样</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
<span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;js/built.[contenthash:10].js&#39;</span><span class="token punctuation">,</span>
<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;build&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="js多文件编译" tabindex="-1"><a class="header-anchor" href="#js多文件编译" aria-hidden="true">#</a> JS多文件编译</h3><p>可以将node_modules中代码单独打包一个chunk最终输出</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>optimization<span class="token operator">:</span> <span class="token punctuation">{</span>
    splitChunks<span class="token operator">:</span> <span class="token punctuation">{</span>
        chunks<span class="token operator">:</span> &#39;all&#39;
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="懒加载和预加载" tabindex="-1"><a class="header-anchor" href="#懒加载和预加载" aria-hidden="true">#</a> 懒加载和预加载</h3><ul><li>懒加载(webpackChunkName):当文件需要使用时才加载~</li><li>预加载(webpackPrefetch):等其他资源加载完毕会在使用之前,提前加载js文件,慎用浏览器可能不支持</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;btn&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token comment">/* webpackChunkName: &#39;test&#39;, webpackPrefetch: true */</span><span class="token string">&#39;./test&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> mul <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span><span class="token comment">//加载test.js模块</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">mul</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="排除模块" tabindex="-1"><a class="header-anchor" href="#排除模块" aria-hidden="true">#</a> 排除模块</h3><p>排除一些模块,通过CND,在html中手动导入</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">externals</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">jquery</span><span class="token operator">:</span> <span class="token string">&#39;jQuery&#39;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function u(d,k){return a(),e("div",null,[i,c,p("more"),r])}const m=s(o,[["render",u],["__file","Webpack性能优化.html.vue"]]);export{m as default};
