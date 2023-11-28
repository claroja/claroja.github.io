import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-yeyEmHfz.js";const p={},e=t(`<h1 id="tutorial" tabindex="-1"><a class="header-anchor" href="#tutorial" aria-hidden="true">#</a> tutorial</h1><p>gpu则用gpu, 否则使用cpu.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>device <span class="token operator">=</span> <span class="token string">&#39;cuda&#39;</span> <span class="token keyword">if</span> torch<span class="token punctuation">.</span>cuda<span class="token punctuation">.</span>is_available<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">else</span> <span class="token string">&#39;cpu&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Using {} device&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>device<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="define-the-class" tabindex="-1"><a class="header-anchor" href="#define-the-class" aria-hidden="true">#</a> Define the Class</h2><ol><li>自己创建的模型要继承<code>nn.Module</code></li><li>在<code>__init__</code>方法中定义网络结构</li><li>在<code>forward(self, x)</code>方法中, 定义数据如何通过网络</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">NeuralNetwork</span><span class="token punctuation">(</span>nn<span class="token punctuation">.</span>Module<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span>NeuralNetwork<span class="token punctuation">,</span> self<span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>flatten <span class="token operator">=</span> nn<span class="token punctuation">.</span>Flatten<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>linear_relu_stack <span class="token operator">=</span> nn<span class="token punctuation">.</span>Sequential<span class="token punctuation">(</span>
            nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">28</span><span class="token operator">*</span><span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            nn<span class="token punctuation">.</span>ReLU<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">512</span><span class="token punctuation">,</span> <span class="token number">512</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            nn<span class="token punctuation">.</span>ReLU<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
            nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">512</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">forward</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        x <span class="token operator">=</span> self<span class="token punctuation">.</span>flatten<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
        logits <span class="token operator">=</span> self<span class="token punctuation">.</span>linear_relu_stack<span class="token punctuation">(</span>x<span class="token punctuation">)</span>
        <span class="token keyword">return</span> logits
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建实例, 并将其和cpu或gpu绑定.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model <span class="token operator">=</span> NeuralNetwork<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用模型进行预测</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>X <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> device<span class="token operator">=</span>device<span class="token punctuation">)</span>
logits <span class="token operator">=</span> model<span class="token punctuation">(</span>X<span class="token punctuation">)</span>
pred_probab <span class="token operator">=</span> nn<span class="token punctuation">.</span>Softmax<span class="token punctuation">(</span>dim<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">(</span>logits<span class="token punctuation">)</span>
y_pred <span class="token operator">=</span> pred_probab<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Predicted class: </span><span class="token interpolation"><span class="token punctuation">{</span>y_pred<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="model-layers" tabindex="-1"><a class="header-anchor" href="#model-layers" aria-hidden="true">#</a> Model Layers</h2><p>我们将<code>FashionMNIST</code>的模型进行拆解, 以minibatch=3, 图片大小为28*28来看数据通过每一层网络, 到底发生了什么.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>input_image <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">28</span><span class="token punctuation">,</span><span class="token number">28</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>input_image<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># torch.Size([3, 28, 28])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nn-flatten" tabindex="-1"><a class="header-anchor" href="#nn-flatten" aria-hidden="true">#</a> nn.Flatten</h3><p><code>nn.Flatten</code>层将2D的 28x28的图片转换为1D的784(28x28)数组</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>flatten <span class="token operator">=</span> nn<span class="token punctuation">.</span>Flatten<span class="token punctuation">(</span><span class="token punctuation">)</span>
flat_image <span class="token operator">=</span> flatten<span class="token punctuation">(</span>input_image<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>flat_image<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># torch.Size([3, 784])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nn-linear" tabindex="-1"><a class="header-anchor" href="#nn-linear" aria-hidden="true">#</a> nn.Linear</h3><p><code>nn.Linear</code>会使用他自己的weights and biases, 将输入做线性变换</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>layer1 <span class="token operator">=</span> nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span>in_features<span class="token operator">=</span><span class="token number">28</span><span class="token operator">*</span><span class="token number">28</span><span class="token punctuation">,</span> out_features<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">)</span> <span class="token comment">#in_f 决定了一组方程有多少个w, out_决定了有几组方程</span>
hidden1 <span class="token operator">=</span> layer1<span class="token punctuation">(</span>flat_image<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>hidden1<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment"># torch.Size([3, 20])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nn-relu" tabindex="-1"><a class="header-anchor" href="#nn-relu" aria-hidden="true">#</a> nn.ReLU</h3><p><code>nn.ReLU</code>作用是将线性变换转换非线性变换</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Before ReLU: </span><span class="token interpolation"><span class="token punctuation">{</span>hidden1<span class="token punctuation">}</span></span><span class="token string">\\n\\n&quot;</span></span><span class="token punctuation">)</span>
hidden1 <span class="token operator">=</span> nn<span class="token punctuation">.</span>ReLU<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">(</span>hidden1<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;After ReLU: </span><span class="token interpolation"><span class="token punctuation">{</span>hidden1<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nn-sequential" tabindex="-1"><a class="header-anchor" href="#nn-sequential" aria-hidden="true">#</a> nn.Sequential</h3><p><code>nn.Sequential</code>将各个layer按顺序组合起来</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>seq_modules <span class="token operator">=</span> nn<span class="token punctuation">.</span>Sequential<span class="token punctuation">(</span>
    flatten<span class="token punctuation">,</span>
    layer1<span class="token punctuation">,</span>
    nn<span class="token punctuation">.</span>ReLU<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    nn<span class="token punctuation">.</span>Linear<span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>
input_image <span class="token operator">=</span> torch<span class="token punctuation">.</span>rand<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">28</span><span class="token punctuation">,</span><span class="token number">28</span><span class="token punctuation">)</span>
logits <span class="token operator">=</span> seq_modules<span class="token punctuation">(</span>input_image<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="nn-softmax" tabindex="-1"><a class="header-anchor" href="#nn-softmax" aria-hidden="true">#</a> nn.Softmax</h3><ol><li>最后的linear layer会返回logits(正无穷和负无穷之期间的自然数), 键入输入到<code>nn.Softmax</code>中.</li><li><code>nn.Softmax</code>会将logits scale到[0,1], 来表示每个分类的可能性.</li><li><code>dim=1</code>表示dimension为1的数字求和必须为1.</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>softmax <span class="token operator">=</span> nn<span class="token punctuation">.</span>Softmax<span class="token punctuation">(</span>dim<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
pred_probab <span class="token operator">=</span> softmax<span class="token punctuation">(</span>logits<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="model-parameters" tabindex="-1"><a class="header-anchor" href="#model-parameters" aria-hidden="true">#</a> Model Parameters</h2><p>模型中的每一层都有自己的weights 和 biases, 在训练的时候会被优化.<code>nn.Module</code>会跟踪这些参数, 使用<code>parameters()</code>或<code>named_parameters()</code>来访问他们.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Model structure: &quot;</span><span class="token punctuation">,</span> model<span class="token punctuation">,</span> <span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> name<span class="token punctuation">,</span> param <span class="token keyword">in</span> model<span class="token punctuation">.</span>named_parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Layer: </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string"> | Size: </span><span class="token interpolation"><span class="token punctuation">{</span>param<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string"> | Values : </span><span class="token interpolation"><span class="token punctuation">{</span>param<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token format-spec">2]</span><span class="token punctuation">}</span></span><span class="token string"> \\n&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://pytorch.org/tutorials/beginner/basics/buildmodel_tutorial.html</p>`,32),o=[e];function c(i,l){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","tutorial.html.vue"]]);export{d as default};
