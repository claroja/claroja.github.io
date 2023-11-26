import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as a,c as s,a as e,b as c,d as l,e as t}from"./app-XqA98pG8.js";const p={},i=t('<h1 id="node" tabindex="-1"><a class="header-anchor" href="#node" aria-hidden="true">#</a> Node</h1><p><code>Node</code>是一个基类，DOM中的<code>Element</code>，<code>Text</code>和<code>Comment</code>都继承于它。 换句话说，<code>Element</code>，<code>Text</code>和<code>Comment</code>是三种特殊的Node，它们分别叫做<code>ELEMENT_NODE</code>, <code>TEXT_NODE</code>和<code>COMMENT_NODE</code>。我们平时使用的HTML上的元素，即Element，是类型为ELEMENT_NODE的Node。</p>',2),r={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Node/",target:"_blank",rel:"noopener noreferrer"},u=t(`<div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>html&gt;
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>China<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- My comment ...  --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>China is a popular country with...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span><span class="token punctuation">&gt;</span></span>See details<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>document.body.children
<span class="token comment">// HTMLCollection(3) [h1, p, div]</span>
document.body.childNodes
<span class="token comment">// NodeList(9) [text, h1, text, comment, text, p, text, div, text]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>children</code>是<code>Element</code>的属性, 只会展示<code>&lt;h1&gt;</code>,<code>&lt;p&gt;</code>,<code>&lt;div&gt;</code>这样的标签 <code>childNodes</code>是<code>Node</code>的属性, 会展示<code>text</code>,<code>comment</code>以及<code>Element</code>的属性, 所以 会出现<code>[text, h1, text, comment, text, p, text, div, text]</code>. 注意这里的<code>text</code>其实是<code>换行符</code>, <code>comment</code>表示的是注释行.</p><h2 id="属性" tabindex="-1"><a class="header-anchor" href="#属性" aria-hidden="true">#</a> 属性</h2><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td><code>Node.childNodes</code></td><td>返回<code>NodeList</code>对象, 所有子节点</td></tr><tr><td><code>Node.firstChild</code></td><td>返回<code>Node</code>对象, 第一个子节点</td></tr><tr><td><code>Node.lastChild</code></td><td>返回<code>Node</code>对象, 最后一个子节点</td></tr><tr><td><code>Node.nextSibling</code></td><td>返回<code>Node</code>对象, 同级的下一个节点</td></tr><tr><td><code>Node.previousSibling</code></td><td>返回<code>Node</code>对象, 同级的上一个节点</td></tr><tr><td><code>Node.parentNode</code></td><td>返回<code>Node</code>, 父节点</td></tr><tr><td><code>Node.parentElement</code></td><td>返回<code>Element</code>, 仅返回父节点中的<code>Element</code></td></tr><tr><td><code>Node.nodeName</code></td><td>返回类型根据节点类型判断, 返回节点的名称.<code>HTMLAudioElement</code>的就是<code>audio</code>, <code>Text</code>节点对应的是<code>#text</code></td></tr><tr><td><code>Node.nodeType</code></td><td>返回整形, <code>ELEMENT_NODE</code>:1,<code>TEXT_NODE</code>:3,<code>COMMENT_NODE</code>:8</td></tr><tr><td><code>Node.nodeValue</code></td><td>返回字符串, 当前节点的值</td></tr><tr><td><code>Node.textContent</code></td><td>返回字符串, 后代的文本内容</td></tr></tbody></table><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td><code>Node.appendChild()</code></td><td>在末尾添加一个子节点</td></tr><tr><td><code>Node.insertBefore()</code></td><td>在某个子节点之前添加一个子节点</td></tr><tr><td><code>Node.removeChild()</code></td><td>删除子节点</td></tr><tr><td><code>Node.replaceChild()</code></td><td>替换子节点</td></tr><tr><td><code>Node.cloneNode()</code></td><td>深拷贝一个节点</td></tr><tr><td><code>Node.contains()</code></td><td>是否包含某个后代节点</td></tr><tr><td><code>Node.hasChildNodes()</code></td><td>是否包含某个子节点</td></tr></tbody></table><p>参考: https://blog.csdn.net/HermitSun/article/details/95780601</p>`,8);function m(h,N){const d=o("ExternalLinkIcon");return a(),s("div",null,[i,e("p",null,[e("a",r,[c("参考官网"),l(d)])]),u])}const v=n(p,[["render",m],["__file","dom_Node.html.vue"]]);export{v as default};
