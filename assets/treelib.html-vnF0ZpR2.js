import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as d,c as r,b as n,d as t,e as a,a as p}from"./app-nD1Z-e8V.js";const i={},c=p(`<h1 id="treelib" tabindex="-1"><a class="header-anchor" href="#treelib" aria-hidden="true">#</a> treelib</h1><p>treelib中主要有两个对象tree和node</p><h2 id="创建树对象" tabindex="-1"><a class="header-anchor" href="#创建树对象" aria-hidden="true">#</a> 创建树对象</h2><p><code>class treelib.tree.Tree(tree=None, deep=False, node_class=None)</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>tree</td><td>拷贝另外一棵树</td></tr><tr><td>deep</td><td>是否为深拷贝</td></tr><tr><td>identifier</td><td>树的id, 全局唯一, 不能修改</td></tr><tr><td>node_class</td><td>指定节点类, 不需要使用</td></tr></tbody></table><p>创建一棵树</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> treelib <span class="token keyword">import</span> Tree
tree <span class="token operator">=</span> Tree<span class="token punctuation">(</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加节点" tabindex="-1"><a class="header-anchor" href="#添加节点" aria-hidden="true">#</a> 添加节点</h2><p><code>create_node(tag=None, identifier=None, parent=None, data=None)</code></p><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>tag</td><td>标签, 在使用<code>show()</code>时打印, 如果没有tag, 则直接打印<code>identifier</code>, 建议不写, 统一使用<code>identifier</code></td></tr><tr><td>identifier</td><td>全树唯一</td></tr><tr><td>parent</td><td>父节点的<code>identifier</code></td></tr><tr><td>data</td><td>节点包含的数据</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> treelib <span class="token keyword">import</span> Tree
tree <span class="token operator">=</span> Tree<span class="token punctuation">(</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span>create_node<span class="token punctuation">(</span>tag<span class="token operator">=</span><span class="token string">&#39;Node-Root&#39;</span><span class="token punctuation">,</span> identifier<span class="token operator">=</span><span class="token string">&#39;node-root&#39;</span><span class="token punctuation">,</span> data<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span>create_node<span class="token punctuation">(</span>tag<span class="token operator">=</span><span class="token string">&#39;Node-1&#39;</span><span class="token punctuation">,</span> identifier<span class="token operator">=</span><span class="token string">&#39;node-1&#39;</span><span class="token punctuation">,</span> parent<span class="token operator">=</span><span class="token string">&#39;node-root&#39;</span><span class="token punctuation">,</span> data<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span>create_node<span class="token punctuation">(</span><span class="token string">&#39;Node-21&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;node-21&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;node-1&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span>create_node<span class="token punctuation">(</span><span class="token string">&#39;Node-22&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;node-22&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;node-1&#39;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
tree<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">## Node-Root</span>
<span class="token comment">## └── Node-1</span>
<span class="token comment">##     ├── Node-21</span>
<span class="token comment">##     └── Node-22</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tree方法" tabindex="-1"><a class="header-anchor" href="#tree方法" aria-hidden="true">#</a> tree方法</h2><h3 id="结构描述" tabindex="-1"><a class="header-anchor" href="#结构描述" aria-hidden="true">#</a> 结构描述</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>tree<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># 4, 返回节点的个数</span>
tree<span class="token punctuation">.</span>depth<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># 2, 节点的深度</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取节点" tabindex="-1"><a class="header-anchor" href="#获取节点" aria-hidden="true">#</a> 获取节点</h3><table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>all_nodes()</td><td>返回所有节点的列表，顺序是添加到树中的顺序.</td></tr><tr><td>all_nodes_itr()</td><td>返回所有节点迭代器，顺序是添加到树中的顺序.</td></tr><tr><td>expand_tree()</td><td>返回所有节点id的生成器，可以指定遍历顺序.</td></tr><tr><td>leaves()</td><td>返回叶子节点</td></tr><tr><td>children(nid)</td><td>返回某个节点的子节点</td></tr><tr><td>ancestor(nid)</td><td>返回某个节点的子孙节点</td></tr><tr><td>siblings(nid)</td><td>返回某个节点的兄弟节点</td></tr><tr><td>parent(nid)</td><td>返回某个节点的父节点</td></tr></tbody></table>`,16),l={href:"https://cloud.tencent.com/developer/article/1794194",target:"_blank",rel:"noopener noreferrer"},u={href:"https://github.com/caesar0301/treelib",target:"_blank",rel:"noopener noreferrer"},h={href:"https://treelib.readthedocs.io/en/latest/genindex.html",target:"_blank",rel:"noopener noreferrer"};function k(b,m){const e=o("ExternalLinkIcon");return d(),r("div",null,[c,n("p",null,[t("参考: "),n("a",l,[t("treelib_用法介绍"),a(e)]),n("a",u,[t("treelib_github"),a(e)]),n("a",h,[t("treelib_api"),a(e)])])])}const g=s(i,[["render",k],["__file","treelib.html.vue"]]);export{g as default};
