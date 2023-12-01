import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o as i,c as l,a as n,b as a,d as s,e as c}from"./app-qxiCM96p.js";const p={},d=c(`<h1 id="audio" tabindex="-1"><a class="header-anchor" href="#audio" aria-hidden="true">#</a> audio</h1><h2 id="更改audio的样式" tabindex="-1"><a class="header-anchor" href="#更改audio的样式" aria-hidden="true">#</a> 更改audio的样式</h2><p><code>audio</code>原生的样式过于复杂, 从左到右依次是播放, 开始时间, 结束时间, 进度条, 音量, 三个点.</p><p><audio src="xxx.mp3" controls></audio></p><p>我们的目标是指保留播放, 其余的控件全部去掉.</p><ul><li><p>使用controlsList属性, 去掉三个点.</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;audio src=&quot;xxx.mp3&quot; controls  controlsList=&quot;nodownload noplaybackrate&quot;&gt;&lt;/audio&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>控制shadow dom的样式, 去掉开始时间, 结束时间, 时间条, 音量键</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">audio::-webkit-media-controls-panel</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #ffffff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">audio::-webkit-media-controls-current-time-display</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">audio::-webkit-media-controls-time-remaining-display</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">audio::-webkit-media-controls-timeline</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">audio::-webkit-media-controls-mute-button</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>            
<span class="token punctuation">}</span>
<span class="token selector">audio::-webkit-media-controls-volume-control-container</span><span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span>none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">audio</span> <span class="token punctuation">{</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
    <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><blockquote><p>🔴audio标签的长度扔不能修改, 如果修改width过短, 会冒出三个点. 暂时没有找解决办法, 书写时暂时只能放在语句的最后了</p></blockquote><blockquote><p>所有<code>-internal</code>开都的都不能修改, 如<code>pseudo=&quot;-internal-media-controls-playback-speed-button&quot;</code>来控制三个点, 原因不清楚</p></blockquote><h2 id="chrome中显示shadow" tabindex="-1"><a class="header-anchor" href="#chrome中显示shadow" aria-hidden="true">#</a> chrome中显示shadow</h2><ol><li>点击<code>F12</code></li><li>点击<code>settings</code>按钮, 一般在右侧齿轮的样子</li><li>在<code>Elements</code>组下找到<code>Show user agent shadow DOM</code>勾选</li></ol><p>参考:</p>`,11),r={href:"https://pointclearmedia.com/2020/08/27/css-styling-the-audio-element/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://pointclearmedia.com/2020/08/25/the-html-audio-element-part-1/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://blog.shahednasser.com/how-to-style-an-audio-element/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://codepen.io/shahednasser/pen/JjJdeqM",target:"_blank",rel:"noopener noreferrer"},k={href:"https://blog.csdn.net/qq_42374676/article/details/115379661",target:"_blank",rel:"noopener noreferrer"},v={href:"https://juejin.cn/post/7202174759999766587",target:"_blank",rel:"noopener noreferrer"};function b(_,f){const e=t("ExternalLinkIcon");return i(),l("div",null,[d,n("ul",null,[n("li",null,[n("a",r,[a("css-styling-the-audio-element"),s(e)])]),n("li",null,[n("a",u,[a("the-html-audio-element-part-1"),s(e)])]),n("li",null,[n("a",m,[a("how-to-style-an-audio-element"),s(e)])]),n("li",null,[n("a",h,[a("codepen"),s(e)])]),n("li",null,[n("a",k,[a("video标签隐藏右下角的三个点"),s(e)])]),n("li",null,[n("a",v,[a("原生 audio, video 标签 controls 的修改"),s(e)])])])])}const x=o(p,[["render",b],["__file","audio.html.vue"]]);export{x as default};
