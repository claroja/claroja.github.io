import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,d as t}from"./app-j3zK2x6_.js";const p={},o=t(`<h1 id="optimization-tutorial" tabindex="-1"><a class="header-anchor" href="#optimization-tutorial" aria-hidden="true">#</a> optimization_tutorial</h1><h2 id="获得数据和创建网络" tabindex="-1"><a class="header-anchor" href="#获得数据和创建网络" aria-hidden="true">#</a> 获得数据和创建网络</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">from</span> torch <span class="token keyword">import</span> nn
<span class="token keyword">from</span> torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data <span class="token keyword">import</span> DataLoader
<span class="token keyword">from</span> torchvision <span class="token keyword">import</span> datasets
<span class="token keyword">from</span> torchvision<span class="token punctuation">.</span>transforms <span class="token keyword">import</span> ToTensor<span class="token punctuation">,</span> Lambda

training_data <span class="token operator">=</span> datasets<span class="token punctuation">.</span>FashionMNIST<span class="token punctuation">(</span>
    root<span class="token operator">=</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span>
    train<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    download<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    transform<span class="token operator">=</span>ToTensor<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

test_data <span class="token operator">=</span> datasets<span class="token punctuation">.</span>FashionMNIST<span class="token punctuation">(</span>
    root<span class="token operator">=</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span>
    train<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
    download<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    transform<span class="token operator">=</span>ToTensor<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span>

train_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>training_data<span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">64</span><span class="token punctuation">)</span>
test_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>test_data<span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">64</span><span class="token punctuation">)</span>

<span class="token keyword">class</span> <span class="token class-name">NeuralNetwork</span><span class="token punctuation">(</span>nn<span class="token punctuation">.</span>Module<span class="token punctuation">)</span><span class="token punctuation">:</span>
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

model <span class="token operator">=</span> NeuralNetwork<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hyperparameters" tabindex="-1"><a class="header-anchor" href="#hyperparameters" aria-hidden="true">#</a> Hyperparameters</h2><p>Hyperparameters是用来控制模型optimization过程的.主要3个:</p><ol><li>Number of Epochs: 要遍历dataset几次</li><li>Batch Size: 每次向网络中传输多少样本</li><li>Learning Rate: 每次batch/epoch学习速率</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>learning_rate <span class="token operator">=</span> <span class="token number">1e-3</span>
batch_size <span class="token operator">=</span> <span class="token number">64</span>
epochs <span class="token operator">=</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimization-loop" tabindex="-1"><a class="header-anchor" href="#optimization-loop" aria-hidden="true">#</a> Optimization Loop</h2><p>Each iteration of the optimization loop is called an epoch. 每个epoch包含两个部分:</p><ol><li>The Train Loop: 训练集</li><li>The Validation/Test Loop: 看测试集的表现</li></ol><h2 id="loss-function" tabindex="-1"><a class="header-anchor" href="#loss-function" aria-hidden="true">#</a> Loss Function</h2><p><code>Loss function</code>用来衡量模型输出的结果和目标结果之间的差距.</p><ol><li><code>nn.MSELoss</code>(Mean Square Error): 用来做regression任务</li><li><code>nn.NLLLoss</code>(Negative Log Likelihood): 用来做classification</li><li><code>nn.CrossEntropyLoss</code>则结合了<code>nn.LogSoftmax</code>和<code>nn.NLLLoss</code></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Initialize the loss function</span>
loss_fn <span class="token operator">=</span> nn<span class="token punctuation">.</span>CrossEntropyLoss<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimizer" tabindex="-1"><a class="header-anchor" href="#optimizer" aria-hidden="true">#</a> Optimizer</h2><p>Optimizer就是调整模型的参数来减少模型的loss. 所有的优化方法都在<code>torch.optim</code>中</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>optimizer <span class="token operator">=</span> torch<span class="token punctuation">.</span>optim<span class="token punctuation">.</span>SGD<span class="token punctuation">(</span>model<span class="token punctuation">.</span>parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lr<span class="token operator">=</span>learning_rate<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在训练循环中, 优化分为三个部分:</p><ol><li>调用<code>optimizer.zero_grad()</code>, 来重置模型的参数的gradients(Gradients默认是累加的, 所以每次迭代都要重置为0)</li><li>调用<code>loss.backwards()</code>, 将loss进行反向传播.</li><li>当得到gradients后, 调用<code>optimizer.step()</code>来调整parameters.</li></ol><h2 id="完整的实现" tabindex="-1"><a class="header-anchor" href="#完整的实现" aria-hidden="true">#</a> 完整的实现</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">train_loop</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">,</span> model<span class="token punctuation">,</span> loss_fn<span class="token punctuation">,</span> optimizer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">.</span>dataset<span class="token punctuation">)</span>
    <span class="token keyword">for</span> batch<span class="token punctuation">,</span> <span class="token punctuation">(</span>X<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Compute prediction and loss</span>
        pred <span class="token operator">=</span> model<span class="token punctuation">(</span>X<span class="token punctuation">)</span>
        loss <span class="token operator">=</span> loss_fn<span class="token punctuation">(</span>pred<span class="token punctuation">,</span> y<span class="token punctuation">)</span>
        <span class="token comment"># Backpropagation</span>
        optimizer<span class="token punctuation">.</span>zero_grad<span class="token punctuation">(</span><span class="token punctuation">)</span>
        loss<span class="token punctuation">.</span>backward<span class="token punctuation">(</span><span class="token punctuation">)</span>
        optimizer<span class="token punctuation">.</span>step<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> batch <span class="token operator">%</span> <span class="token number">100</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
            loss<span class="token punctuation">,</span> current <span class="token operator">=</span> loss<span class="token punctuation">.</span>item<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> batch <span class="token operator">*</span> <span class="token builtin">len</span><span class="token punctuation">(</span>X<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;loss: </span><span class="token interpolation"><span class="token punctuation">{</span>loss<span class="token punctuation">:</span><span class="token format-spec">&gt;7f</span><span class="token punctuation">}</span></span><span class="token string">  [</span><span class="token interpolation"><span class="token punctuation">{</span>current<span class="token punctuation">:</span><span class="token format-spec">&gt;5d</span><span class="token punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token punctuation">{</span>size<span class="token punctuation">:</span><span class="token format-spec">&gt;5d</span><span class="token punctuation">}</span></span><span class="token string">]&quot;</span></span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">test_loop</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">,</span> model<span class="token punctuation">,</span> loss_fn<span class="token punctuation">)</span><span class="token punctuation">:</span>
    size <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">.</span>dataset<span class="token punctuation">)</span>
    num_batches <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>dataloader<span class="token punctuation">)</span>
    test_loss<span class="token punctuation">,</span> correct <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span>
    <span class="token keyword">with</span> torch<span class="token punctuation">.</span>no_grad<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> X<span class="token punctuation">,</span> y <span class="token keyword">in</span> dataloader<span class="token punctuation">:</span>
            pred <span class="token operator">=</span> model<span class="token punctuation">(</span>X<span class="token punctuation">)</span>
            test_loss <span class="token operator">+=</span> loss_fn<span class="token punctuation">(</span>pred<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">.</span>item<span class="token punctuation">(</span><span class="token punctuation">)</span>
            correct <span class="token operator">+=</span> <span class="token punctuation">(</span>pred<span class="token punctuation">.</span>argmax<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">==</span> y<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">type</span><span class="token punctuation">(</span>torch<span class="token punctuation">.</span><span class="token builtin">float</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>item<span class="token punctuation">(</span><span class="token punctuation">)</span>
    test_loss <span class="token operator">/=</span> num_batches
    correct <span class="token operator">/=</span> size
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Test Error: \\n Accuracy: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token operator">*</span>correct<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token format-spec">&gt;0.1f</span><span class="token punctuation">}</span></span><span class="token string">%, Avg loss: </span><span class="token interpolation"><span class="token punctuation">{</span>test_loss<span class="token punctuation">:</span><span class="token format-spec">&gt;8f</span><span class="token punctuation">}</span></span><span class="token string"> \\n&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>loss_fn <span class="token operator">=</span> nn<span class="token punctuation">.</span>CrossEntropyLoss<span class="token punctuation">(</span><span class="token punctuation">)</span>
optimizer <span class="token operator">=</span> torch<span class="token punctuation">.</span>optim<span class="token punctuation">.</span>SGD<span class="token punctuation">(</span>model<span class="token punctuation">.</span>parameters<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> lr<span class="token operator">=</span>learning_rate<span class="token punctuation">)</span>

epochs <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">for</span> t <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>epochs<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;Epoch </span><span class="token interpolation"><span class="token punctuation">{</span>t<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">}</span></span><span class="token string">\\n-------------------------------&quot;</span></span><span class="token punctuation">)</span>
    train_loop<span class="token punctuation">(</span>train_dataloader<span class="token punctuation">,</span> model<span class="token punctuation">,</span> loss_fn<span class="token punctuation">,</span> optimizer<span class="token punctuation">)</span>
    test_loop<span class="token punctuation">(</span>test_dataloader<span class="token punctuation">,</span> model<span class="token punctuation">,</span> loss_fn<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Done!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html</p>`,23),e=[o];function c(i,l){return s(),a("div",null,e)}const k=n(p,[["render",c],["__file","basics_optimization_tutorial.html.vue"]]);export{k as default};