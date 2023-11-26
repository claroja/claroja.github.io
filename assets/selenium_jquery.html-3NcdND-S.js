import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as t,c as o,e as c}from"./app-XqA98pG8.js";const s={},a=c('<h1 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> jquery</h1><p>对于一些使用jquery的网站, 有些<code>input</code>标签不能正常输入值, 所以直接调用jquery的方法即可.</p><h2 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h2><p>1.发送文本语法：$(css selector).val(输入值)</p><p>2.清空文本语法：$(css selector).val(&#39;&#39;) #空字符串</p><p>3.点击按钮：$(css selector).click()</p><h2 id="操作select标签" tabindex="-1"><a class="header-anchor" href="#操作select标签" aria-hidden="true">#</a> 操作select标签</h2><p>比如<code>&lt;select class=&quot;selector&quot;&gt;&lt;/select&gt;</code></p><p>1、设置<code>value</code>为<code>pxx</code>的项选中, 注意<code>val</code>中的值是<code>&lt;iption&gt;</code>中的<code>value</code>属性 <code>$(&quot;.selector&quot;).val(&quot;pxx&quot;);</code> 2、设置text为pxx的项选中 <code>$(&quot;.selector&quot;).find(&quot;option[text=&#39;pxx&#39;]&quot;).attr(&quot;selected&quot;,true);</code> 3、获取当前选中项的value <code>$(&quot;.selector&quot;).val();</code> 4、获取当前选中项的text <code>$(&quot;.selector&quot;).find(&quot;option:selected&quot;).text();</code></p><p>参考: https://www.cnblogs.com/xiaoyujuan/p/13708627.html https://www.cnblogs.com/hailexuexi/p/6708110.html</p>',10),d=[a];function l(r,u){return t(),o("div",null,d)}const p=e(s,[["render",l],["__file","selenium_jquery.html.vue"]]);export{p as default};
