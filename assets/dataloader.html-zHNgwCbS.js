import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,e as t}from"./app-YE2Hltoy.js";const e={},o=t(`<h1 id="dataloader" tabindex="-1"><a class="header-anchor" href="#dataloader" aria-hidden="true">#</a> dataloader</h1><h2 id="torch-utils-data-dataloader" tabindex="-1"><a class="header-anchor" href="#torch-utils-data-dataloader" aria-hidden="true">#</a> torch.utils.data.DataLoader</h2><p>Dataset类只相当于一个打包工具，包含了数据的地址。真正把数据读入内存的过程是由Dataloader进行批迭代输入的时候进行的。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> torch<span class="token punctuation">.</span>utils<span class="token punctuation">.</span>data <span class="token keyword">import</span> TensorDataset<span class="token punctuation">,</span> DataLoader
Data <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
Label <span class="token operator">=</span> torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
torch_dataset <span class="token operator">=</span> TensorDataset<span class="token punctuation">(</span>Data<span class="token punctuation">,</span> Label<span class="token punctuation">)</span>
torch_dataloader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>
    dataset<span class="token operator">=</span>torch_dataset<span class="token punctuation">,</span>
    batch_size<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
    shuffle<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
    num_workers<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span>
    pin_memory<span class="token operator">=</span><span class="token boolean">True</span>
<span class="token punctuation">)</span>

<span class="token keyword">for</span> step<span class="token punctuation">,</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">)</span> <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>torch_dataloader<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>to<span class="token punctuation">(</span><span class="token string">&quot;cuda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">.</span>to<span class="token punctuation">(</span><span class="token string">&quot;cuda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>dataset</td><td>Dataset 类，决定数据从哪里读取以及如何读取</td></tr><tr><td>batchsize</td><td>批大小(一般要设置为可以被dataset的长度整除, 否则最后一个batch的元素长度不够)</td></tr><tr><td>num_works</td><td>是否多进程读取数据</td></tr><tr><td>sheuffle</td><td>每个 epoch 是否乱序</td></tr><tr><td>drop_last</td><td>当样本数不能被 batchsize 整除时，是否舍弃最后一批数据</td></tr><tr><td>pin_memory</td><td>将获得的batch放入pinned memory, 加速CPU到GPU的转换速度</td></tr></tbody></table><p>一些概念:</p><ul><li>Epoch:所有训练样本都已经输入到模型中，称为一个 Epoch</li><li>Iteration:一批样本输入到模型中，称为一个 Iteration</li><li>Batchsize:批大小，决定一个 iteration 有多少样本，也决定了一个</li><li>Epoch: 有多少个 Iteration</li><li>num_work: 当num_work=0时, 只有main process加载数据 当num_work&gt;0时, 主进程不加载数据, 全部交给子进程来做, num_work就是子进程的数量. 比如<code>num_workers=2</code>则最多有2个workers同时将数据放入内存. <code>DataLoader</code>不仅仅是获得当前所需要的batch, 而且还会决定下一步需要返回的batch. 每个batch都会被指派给一个worker, 主进程会等待, 直到期望的batch到位. 最佳的设置是: <code>num_worker = 4 * num_GPU</code></li></ul><p>注意, 将数据送入GPU并不是<code>DataLoader</code>的工作, 而是在取出batch后再进行转换.</p><ul><li>pin_memory: 默认情况下, batch是再Pageable Memory中, 如果要放入GPU, 则需要临时开辟一个Pinned Memory, 然后再传入GPU. 当设置<code>pin_memory=True</code>就会节省时间, 但是需要更大的空间 <a href="1.png">1.png</a></li></ul><p>对于 CUDA 架构而言，主机端的内存可分为两种：</p><ul><li>可分页内存(Pageable Memory): 虚拟内存(Virtual Memory), 从硬盘匀出来的用来充当内存的那部分空间</li><li>页锁定内存(Page-locked Memory)，或称固定内存(Pinned Memory): 物理内存(Physical Memor), 就是RAM(Random Access Memory)</li><li><code>collate_fn</code>默认是等于<code>default_collate</code><code>collate_fn</code>函数的输入就是一个<code>list</code>，<code>list</code>的长度是一个<code>batch_size</code>，<code>list</code>中的每个元素都是<code>DataSet</code>的<code>__getitem__</code>得到的结果。返回的是一个<code>tuple(data,label)</code>. 下面的例子是将<code>DataLoader</code>返回的batch放到GPU中.</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>loader <span class="token operator">=</span> DataLoader<span class="token punctuation">(</span>demo<span class="token punctuation">,</span> batch_size<span class="token operator">=</span><span class="token number">50</span><span class="token punctuation">,</span> shuffle<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> 
                    collate_fn<span class="token operator">=</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span>x_<span class="token punctuation">.</span>to<span class="token punctuation">(</span>device<span class="token punctuation">)</span> <span class="token keyword">for</span> x_ <span class="token keyword">in</span> default_collate<span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://stackoverflow.com/questions/53998282/how-does-the-number-of-workers-parameter-in-pytorch-dataloader-actually-work https://towardsdatascience.com/7-tips-for-squeezing-maximum-performance-from-pytorch-ca4a40951259 https://stackoverflow.com/questions/65932328/pytorch-while-loading-batched-data-using-dataloader-how-to-transfer-the-data-t</p>`,13),p=[o];function c(l,u){return n(),s("div",null,p)}const d=a(e,[["render",c],["__file","dataloader.html.vue"]]);export{d as default};