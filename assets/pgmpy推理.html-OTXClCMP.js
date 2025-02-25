const n=JSON.parse(`{"key":"v-6b568741","path":"/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/9%E8%B4%9D%E5%8F%B6%E6%96%AF/%E8%B4%9D%E5%8F%B6%E6%96%AF%E7%BD%91%E7%BB%9C/pgmpy%E6%8E%A8%E7%90%86.html","title":"array","lang":"zh-CN","frontmatter":{"description":"array Inference 使用Asia network, 来进行推理(Inference) ## Fetch the asia model from the bnlearn repository from pgmpy.utils import get_example_model asia_model = get_example_model('asia') print(\\"Nodes: \\", asia_model.nodes()) print(\\"Edges: \\", asia_model.edges()) ''' Nodes: ['asia', 'tub', 'smoke', 'lung', 'bronc', 'either', 'xray', 'dysp'] Edges: [('asia', 'tub'), ('tub', 'either'), ('smoke', 'lung'), ('smoke', 'bronc'), ('lung', 'either'), ('bronc', 'dysp'), ('either', 'xray'), ('either', 'dysp')] ''' ## Initializing the VariableElimination class from pgmpy.inference import VariableElimination asia_infer = VariableElimination(asia_model) ## Computing the probability of bronc given smoke=no. q = asia_infer.query(variables=['bronc'], evidence={'smoke': 'no'}) print(q) ## Computing the joint probability of bronc and asia given smoke=yes q = asia_infer.query(variables=['bronc', 'asia'], evidence={'smoke': 'yes'}) print(q) ## Computing the probabilities (not joint) of bronc and asia given smoke=no q = asia_infer.query(variables=['bronc', 'asia'], evidence={'smoke': 'no'}, joint=False) for factor in q.values(): print(factor) ''' +------------+--------------+ | bronc | phi(bronc) | +============+==============+ | bronc(yes) | 0.3000 | +------------+--------------+ | bronc(no) | 0.7000 | +------------+--------------+ +------------+-----------+-------------------+ | bronc | asia | phi(bronc,asia) | +============+===========+===================+ | bronc(yes) | asia(yes) | 0.0060 | +------------+-----------+-------------------+ | bronc(yes) | asia(no) | 0.5940 | +------------+-----------+-------------------+ | bronc(no) | asia(yes) | 0.0040 | +------------+-----------+-------------------+ | bronc(no) | asia(no) | 0.3960 | +------------+-----------+-------------------+ +------------+--------------+ | bronc | phi(bronc) | +============+==============+ | bronc(yes) | 0.3000 | +------------+--------------+ | bronc(no) | 0.7000 | +------------+--------------+ +-----------+-------------+ | asia | phi(asia) | +===========+=============+ | asia(yes) | 0.0100 | +-----------+-------------+ | asia(no) | 0.9900 | +-----------+-------------+ ''' ## Computing the MAP of bronc given smoke=no. q = asia_infer.map_query(variables=['bronc'], evidence={'smoke': 'no'}) print(q) ## Computing the MAP of bronc and asia given smoke=yes q = asia_infer.map_query(variables=['bronc', 'asia'], evidence={'smoke': 'yes'}) print(q) ''' {'bronc': 'no'} {'bronc': 'yes', 'asia': 'no'} ''' lung_virt_evidence = TabularCPD(variable='lung', variable_card=2, values=[[0.4], [0.6]]) ## Query with hard evidence smoke = no and virtual evidence lung = [0.4, 0.6] q = asia_infer.query(variables=['bronc'], evidence={'smoke': 'no'}, virtual_evidence=[lung_virt_evidence]) print(q) ''' +------------+--------------+ | bronc | phi(bronc) | +============+==============+ | bronc(yes) | 0.3000 | +------------+--------------+ | bronc(no) | 0.7000 | +------------+--------------+ '''","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/1%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0/1%E7%AE%97%E6%B3%95%E5%8E%9F%E7%90%86/9%E8%B4%9D%E5%8F%B6%E6%96%AF/%E8%B4%9D%E5%8F%B6%E6%96%AF%E7%BD%91%E7%BB%9C/pgmpy%E6%8E%A8%E7%90%86.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"array"}],["meta",{"property":"og:description","content":"array Inference 使用Asia network, 来进行推理(Inference) ## Fetch the asia model from the bnlearn repository from pgmpy.utils import get_example_model asia_model = get_example_model('asia') print(\\"Nodes: \\", asia_model.nodes()) print(\\"Edges: \\", asia_model.edges()) ''' Nodes: ['asia', 'tub', 'smoke', 'lung', 'bronc', 'either', 'xray', 'dysp'] Edges: [('asia', 'tub'), ('tub', 'either'), ('smoke', 'lung'), ('smoke', 'bronc'), ('lung', 'either'), ('bronc', 'dysp'), ('either', 'xray'), ('either', 'dysp')] ''' ## Initializing the VariableElimination class from pgmpy.inference import VariableElimination asia_infer = VariableElimination(asia_model) ## Computing the probability of bronc given smoke=no. q = asia_infer.query(variables=['bronc'], evidence={'smoke': 'no'}) print(q) ## Computing the joint probability of bronc and asia given smoke=yes q = asia_infer.query(variables=['bronc', 'asia'], evidence={'smoke': 'yes'}) print(q) ## Computing the probabilities (not joint) of bronc and asia given smoke=no q = asia_infer.query(variables=['bronc', 'asia'], evidence={'smoke': 'no'}, joint=False) for factor in q.values(): print(factor) ''' +------------+--------------+ | bronc | phi(bronc) | +============+==============+ | bronc(yes) | 0.3000 | +------------+--------------+ | bronc(no) | 0.7000 | +------------+--------------+ +------------+-----------+-------------------+ | bronc | asia | phi(bronc,asia) | +============+===========+===================+ | bronc(yes) | asia(yes) | 0.0060 | +------------+-----------+-------------------+ | bronc(yes) | asia(no) | 0.5940 | +------------+-----------+-------------------+ | bronc(no) | asia(yes) | 0.0040 | +------------+-----------+-------------------+ | bronc(no) | asia(no) | 0.3960 | +------------+-----------+-------------------+ +------------+--------------+ | bronc | phi(bronc) | +============+==============+ | bronc(yes) | 0.3000 | +------------+--------------+ | bronc(no) | 0.7000 | +------------+--------------+ +-----------+-------------+ | asia | phi(asia) | +===========+=============+ | asia(yes) | 0.0100 | +-----------+-------------+ | asia(no) | 0.9900 | +-----------+-------------+ ''' ## Computing the MAP of bronc given smoke=no. q = asia_infer.map_query(variables=['bronc'], evidence={'smoke': 'no'}) print(q) ## Computing the MAP of bronc and asia given smoke=yes q = asia_infer.map_query(variables=['bronc', 'asia'], evidence={'smoke': 'yes'}) print(q) ''' {'bronc': 'no'} {'bronc': 'yes', 'asia': 'no'} ''' lung_virt_evidence = TabularCPD(variable='lung', variable_card=2, values=[[0.4], [0.6]]) ## Query with hard evidence smoke = no and virtual evidence lung = [0.4, 0.6] q = asia_infer.query(variables=['bronc'], evidence={'smoke': 'no'}, virtual_evidence=[lung_virt_evidence]) print(q) ''' +------------+--------------+ | bronc | phi(bronc) | +============+==============+ | bronc(yes) | 0.3000 | +------------+--------------+ | bronc(no) | 0.7000 | +------------+--------------+ '''"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-02-25T10:13:52.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2025-02-25T10:13:52.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"array\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-25T10:13:52.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Inference","slug":"inference","link":"#inference","children":[]},{"level":2,"title":"Causal Inference","slug":"causal-inference","link":"#causal-inference","children":[]}],"git":{"createdTime":1740478432000,"updatedTime":1740478432000,"contributors":[{"name":"Claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":1.45,"words":436},"filePathRelative":"1机器学习/1算法原理/9贝叶斯/贝叶斯网络/pgmpy推理.md","localizedDate":"2025年2月25日","excerpt":"<h1> array</h1>\\n<h2> Inference</h2>\\n<p>使用<a href=\\"http://www.bnlearn.com/bnrepository/#asia\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Asia network</a>, 来进行推理(Inference)</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\">## Fetch the asia model from the bnlearn repository</span>\\n<span class=\\"token keyword\\">from</span> pgmpy<span class=\\"token punctuation\\">.</span>utils <span class=\\"token keyword\\">import</span> get_example_model\\nasia_model <span class=\\"token operator\\">=</span> get_example_model<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'asia'</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Nodes: \\"</span><span class=\\"token punctuation\\">,</span> asia_model<span class=\\"token punctuation\\">.</span>nodes<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Edges: \\"</span><span class=\\"token punctuation\\">,</span> asia_model<span class=\\"token punctuation\\">.</span>edges<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token triple-quoted-string string\\">'''\\nNodes:  ['asia', 'tub', 'smoke', 'lung', 'bronc', 'either', 'xray', 'dysp']\\nEdges:  [('asia', 'tub'), ('tub', 'either'), ('smoke', 'lung'), ('smoke', 'bronc'), ('lung', 'either'), ('bronc', 'dysp'), ('either', 'xray'), ('either', 'dysp')]\\n'''</span>\\n\\n<span class=\\"token comment\\">## Initializing the VariableElimination class</span>\\n<span class=\\"token keyword\\">from</span> pgmpy<span class=\\"token punctuation\\">.</span>inference <span class=\\"token keyword\\">import</span> VariableElimination\\nasia_infer <span class=\\"token operator\\">=</span> VariableElimination<span class=\\"token punctuation\\">(</span>asia_model<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">## Computing the probability of bronc given smoke=no.</span>\\nq <span class=\\"token operator\\">=</span> asia_infer<span class=\\"token punctuation\\">.</span>query<span class=\\"token punctuation\\">(</span>variables<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'bronc'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> evidence<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'smoke'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'no'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>q<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">## Computing the joint probability of bronc and asia given smoke=yes</span>\\nq <span class=\\"token operator\\">=</span> asia_infer<span class=\\"token punctuation\\">.</span>query<span class=\\"token punctuation\\">(</span>variables<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'bronc'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'asia'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> evidence<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'smoke'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'yes'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>q<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">## Computing the probabilities (not joint) of bronc and asia given smoke=no</span>\\nq <span class=\\"token operator\\">=</span> asia_infer<span class=\\"token punctuation\\">.</span>query<span class=\\"token punctuation\\">(</span>variables<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'bronc'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'asia'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> evidence<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'smoke'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'no'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> joint<span class=\\"token operator\\">=</span><span class=\\"token boolean\\">False</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">for</span> factor <span class=\\"token keyword\\">in</span> q<span class=\\"token punctuation\\">.</span>values<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>factor<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token triple-quoted-string string\\">'''\\n+------------+--------------+\\n| bronc      |   phi(bronc) |\\n+============+==============+\\n| bronc(yes) |       0.3000 |\\n+------------+--------------+\\n| bronc(no)  |       0.7000 |\\n+------------+--------------+\\n+------------+-----------+-------------------+\\n| bronc      | asia      |   phi(bronc,asia) |\\n+============+===========+===================+\\n| bronc(yes) | asia(yes) |            0.0060 |\\n+------------+-----------+-------------------+\\n| bronc(yes) | asia(no)  |            0.5940 |\\n+------------+-----------+-------------------+\\n| bronc(no)  | asia(yes) |            0.0040 |\\n+------------+-----------+-------------------+\\n| bronc(no)  | asia(no)  |            0.3960 |\\n+------------+-----------+-------------------+\\n+------------+--------------+\\n| bronc      |   phi(bronc) |\\n+============+==============+\\n| bronc(yes) |       0.3000 |\\n+------------+--------------+\\n| bronc(no)  |       0.7000 |\\n+------------+--------------+\\n+-----------+-------------+\\n| asia      |   phi(asia) |\\n+===========+=============+\\n| asia(yes) |      0.0100 |\\n+-----------+-------------+\\n| asia(no)  |      0.9900 |\\n+-----------+-------------+\\n'''</span>\\n\\n<span class=\\"token comment\\">## Computing the MAP of bronc given smoke=no.</span>\\nq <span class=\\"token operator\\">=</span> asia_infer<span class=\\"token punctuation\\">.</span>map_query<span class=\\"token punctuation\\">(</span>variables<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'bronc'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> evidence<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'smoke'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'no'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>q<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">## Computing the MAP of bronc and asia given smoke=yes</span>\\nq <span class=\\"token operator\\">=</span> asia_infer<span class=\\"token punctuation\\">.</span>map_query<span class=\\"token punctuation\\">(</span>variables<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'bronc'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'asia'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> evidence<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'smoke'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'yes'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>q<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token triple-quoted-string string\\">'''\\n{'bronc': 'no'}\\n{'bronc': 'yes', 'asia': 'no'}\\n'''</span>\\n\\nlung_virt_evidence <span class=\\"token operator\\">=</span> TabularCPD<span class=\\"token punctuation\\">(</span>variable<span class=\\"token operator\\">=</span><span class=\\"token string\\">'lung'</span><span class=\\"token punctuation\\">,</span> variable_card<span class=\\"token operator\\">=</span><span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> values<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0.4</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">0.6</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\">## Query with hard evidence smoke = no and virtual evidence lung = [0.4, 0.6]</span>\\nq <span class=\\"token operator\\">=</span> asia_infer<span class=\\"token punctuation\\">.</span>query<span class=\\"token punctuation\\">(</span>variables<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'bronc'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span> evidence<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">{</span><span class=\\"token string\\">'smoke'</span><span class=\\"token punctuation\\">:</span> <span class=\\"token string\\">'no'</span><span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span> virtual_evidence<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span>lung_virt_evidence<span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>q<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token triple-quoted-string string\\">'''\\n+------------+--------------+\\n| bronc      |   phi(bronc) |\\n+============+==============+\\n| bronc(yes) |       0.3000 |\\n+------------+--------------+\\n| bronc(no)  |       0.7000 |\\n+------------+--------------+\\n'''</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","copyright":{"author":"王新宇"},"autoDesc":true}`);export{n as data};
