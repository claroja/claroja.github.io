const n=JSON.parse('{"key":"v-0f6baecd","path":"/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/lossfunction/alg_bce.html","title":"bce","lang":"zh-CN","frontmatter":{"description":"bce code implement import torch input = torch.tensor([[-0.4089,-1.2471,0.5907]]) # the logits of the net of one sample target= torch.FloatTensor([[0,1,1]]) # target includes multilabels loss = torch.nn.BCELoss()(torch.nn.Sigmoid()(input),target) tensor(0.8166)","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0/lossfunction/alg_bce.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"bce"}],["meta",{"property":"og:description","content":"bce code implement import torch input = torch.tensor([[-0.4089,-1.2471,0.5907]]) # the logits of the net of one sample target= torch.FloatTensor([[0,1,1]]) # target includes multilabels loss = torch.nn.BCELoss()(torch.nn.Sigmoid()(input),target) tensor(0.8166)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-25T13:46:58.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-25T13:46:58.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"bce\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T13:46:58.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"code implement","slug":"code-implement","link":"#code-implement","children":[]},{"level":2,"title":"Formula Derivation","slug":"formula-derivation","link":"#formula-derivation","children":[]},{"level":2,"title":"BCEWithLogitsLoss","slug":"bcewithlogitsloss","link":"#bcewithlogitsloss","children":[]}],"git":{"createdTime":1700920018000,"updatedTime":1700920018000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":0.74,"words":223},"filePathRelative":"机器学习/深度学习/lossfunction/alg_bce.md","localizedDate":"2023年11月25日","excerpt":"<h1> bce</h1>\\n<h2> code implement</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> torch\\n<span class=\\"token builtin\\">input</span> <span class=\\"token operator\\">=</span> torch<span class=\\"token punctuation\\">.</span>tensor<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">0.4089</span><span class=\\"token punctuation\\">,</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1.2471</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">0.5907</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span> <span class=\\"token comment\\"># the logits of the net of one sample</span>\\ntarget<span class=\\"token operator\\">=</span> torch<span class=\\"token punctuation\\">.</span>FloatTensor<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>  <span class=\\"token comment\\"># target includes multilabels</span>\\nloss <span class=\\"token operator\\">=</span> torch<span class=\\"token punctuation\\">.</span>nn<span class=\\"token punctuation\\">.</span>BCELoss<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">(</span>torch<span class=\\"token punctuation\\">.</span>nn<span class=\\"token punctuation\\">.</span>Sigmoid<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">input</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span>target<span class=\\"token punctuation\\">)</span>\\ntensor<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0.8166</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}');export{n as data};