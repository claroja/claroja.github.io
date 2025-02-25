import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as p,o as i,c,b as s,d as n,e,a as t}from"./app-nD1Z-e8V.js";const l={},u=s("h1",{id:"nlp",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#nlp","aria-hidden":"true"},"#"),n(" NLP")],-1),r=s("p",null,[n("models can only process numbers, so we need to convert the raw text to numbers by using "),s("code",null,"tokenizer"),n(".")],-1),d=s("h2",{id:"tokenization",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tokenization","aria-hidden":"true"},"#"),n(" Tokenization")],-1),k={href:"https://huggingface.co/course/chapter2/2?fw=pt",target:"_blank",rel:"noopener noreferrer"},m=t(`<ul><li>splitting the input into words, subwords, usually called <code>tokens</code></li><li>Mapping each token to an integer</li><li>Adding additional inputs that may be useful to the model, eg:<code>attention_mask</code></li></ul><h3 id="splitting-into-tokens" tabindex="-1"><a class="header-anchor" href="#splitting-into-tokens" aria-hidden="true">#</a> splitting into tokens</h3><h4 id="word-based-tokenizer" tabindex="-1"><a class="header-anchor" href="#word-based-tokenizer" aria-hidden="true">#</a> word-based tokenizer</h4><ol><li><p>split sequence</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token string">&quot;Jim Henson was a puppeteer&quot;</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token string">&#39;Jim&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Henson&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;was&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;puppeteer&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>get Id Each word gets assigned an Id, starting from 0 and going up to the size of the vocabulary unknown words often represented as \`[UNK] or \`\`.</p></li></ol><h4 id="character-based-tokenizers" tabindex="-1"><a class="header-anchor" href="#character-based-tokenizers" aria-hidden="true">#</a> Character-based tokenizers</h4><p>split the text into characters, rather than words. this has two primary benefits:</p><ol><li>the vocabulary is much smaller</li><li>less unknown tokens</li></ol><p>but it&#39;s not perfect either:</p><ol><li>it’s less meaningful: each character doesn’t mean a lot on its own</li><li>we’ll end up with a very large amount of tokens to be processed by our model</li></ol><h4 id="subword-tokenization" tabindex="-1"><a class="header-anchor" href="#subword-tokenization" aria-hidden="true">#</a> subword-tokenization</h4><p>combines the <code>word-based tokenizer</code> and <code>Character-based tokenizers</code></p><p>&quot;Let’s do tokenization!&quot; “tokenization” was split into “token” and “ization”, two tokens that have a semantic meaning while being space-efficient (only two tokens are needed to represent a long word).</p><h3 id="mapping-token-to-integer" tabindex="-1"><a class="header-anchor" href="#mapping-token-to-integer" aria-hidden="true">#</a> Mapping token to integer</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-cased&quot;</span><span class="token punctuation">)</span>
sequence <span class="token operator">=</span> <span class="token string">&quot;Using a Transformer network is simple&quot;</span>
tokens <span class="token operator">=</span> tokenizer<span class="token punctuation">.</span>tokenize<span class="token punctuation">(</span>sequence<span class="token punctuation">)</span>
<span class="token comment">## [&#39;Using&#39;, &#39;a&#39;, &#39;transform&#39;, &#39;##er&#39;, &#39;network&#39;, &#39;is&#39;, &#39;simple&#39;]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>encoding()</code>: The conversion to input IDs is handled by the <code>convert_tokens_to_ids()</code> tokenizer method</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>ids <span class="token operator">=</span> tokenizer<span class="token punctuation">.</span>convert_tokens_to_ids<span class="token punctuation">(</span>tokens<span class="token punctuation">)</span>
<span class="token comment">## [7993, 170, 11303, 1200, 2443, 1110, 3014]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>decode()</code> is going the other way around: from vocabulary indices, we want to get a string.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>decoded_string <span class="token operator">=</span> tokenizer<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">7993</span><span class="token punctuation">,</span> <span class="token number">170</span><span class="token punctuation">,</span> <span class="token number">11303</span><span class="token punctuation">,</span> <span class="token number">1200</span><span class="token punctuation">,</span> <span class="token number">2443</span><span class="token punctuation">,</span> <span class="token number">1110</span><span class="token punctuation">,</span> <span class="token number">3014</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## &#39;Using a Transformer network is simple&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>decode method not only converts the indices back to tokens, but also groups together the tokens that were part of the same words to produce a readable sentence.</p><h3 id="adding-additional-inputs" tabindex="-1"><a class="header-anchor" href="#adding-additional-inputs" aria-hidden="true">#</a> Adding additional inputs</h3><p>eg: attention mask, see details in next section.</p><h2 id="use-tokenizer" tabindex="-1"><a class="header-anchor" href="#use-tokenizer" aria-hidden="true">#</a> use tokenizer</h2><h3 id="padding" tabindex="-1"><a class="header-anchor" href="#padding" aria-hidden="true">#</a> padding</h3><h4 id="why-padding" tabindex="-1"><a class="header-anchor" href="#why-padding" aria-hidden="true">#</a> why padding</h4><p>The following list of lists cannot be converted to a tensor:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>batched_ids <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In order to work around this, we’ll use padding to make our tensors have a <code>rectangular shape</code> by adding a special word called the <code>padding token</code> to the sentences with fewer values. For example, if you have 10 sentences with 10 words and 1 sentence with 20 words, padding will ensure all the sentences have 20 words.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>padding_id <span class="token operator">=</span> <span class="token number">100</span>

batched_ids <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> padding_id<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let’s use it and send our two sentences through the model individually and batched together:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span>

sequence1_ids <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
sequence2_ids <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
batched_ids <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> tokenizer<span class="token punctuation">.</span>pad_token_id<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">(</span>torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span>sequence1_ids<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>logits<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">(</span>torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span>sequence2_ids<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>logits<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model<span class="token punctuation">(</span>torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span>batched_ids<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>logits<span class="token punctuation">)</span>

<span class="token comment">## tensor([[ 1.5694, -1.3895]], grad_fn=&lt;AddmmBackward&gt;)</span>
<span class="token comment">## tensor([[ 0.5803, -0.4125]], grad_fn=&lt;AddmmBackward&gt;)</span>
<span class="token comment">## tensor([[ 1.5694, -1.3895],</span>
<span class="token comment">##         [ 1.3373, -1.2163]], grad_fn=&lt;AddmmBackward&gt;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>the second row should be the same as the logits for the second sentence, but we’ve got completely different values! Because these will take into account the padding tokens since they attend to all of the tokens of a sequence. we need to tell those attention layers to ignore the padding tokens. This is done by using an <code>attention mask</code>.</p><h4 id="attention-mask" tabindex="-1"><a class="header-anchor" href="#attention-mask" aria-hidden="true">#</a> attention mask</h4><p><code>attention mask</code> are tensors with the exact same shape as the input IDs tensor, filled with 0s and 1s: 1s indicate the corresponding tokens should be attended to, and 0s indicate the corresponding tokens should not be attended to.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>batched_ids <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> tokenizer<span class="token punctuation">.</span>pad_token_id<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

attention_mask <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

outputs <span class="token operator">=</span> model<span class="token punctuation">(</span>torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span>batched_ids<span class="token punctuation">)</span><span class="token punctuation">,</span> attention_mask<span class="token operator">=</span>torch<span class="token punctuation">.</span>tensor<span class="token punctuation">(</span>attention_mask<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>outputs<span class="token punctuation">.</span>logits<span class="token punctuation">)</span>
<span class="token comment">## tensor([[ 1.5694, -1.3895],</span>
<span class="token comment">##         [ 0.5803, -0.4125]], grad_fn=&lt;AddmmBackward&gt;)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="application" tabindex="-1"><a class="header-anchor" href="#application" aria-hidden="true">#</a> application</h4><p>we can get the model suggesting <code>max_length</code> by <code>self.tokenizer.max_model_input_sizes</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer

checkpoint <span class="token operator">=</span> <span class="token string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span>

sequence <span class="token operator">=</span> <span class="token string">&quot;I&#39;ve been waiting for a HuggingFace course my whole life.&quot;</span>

model_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequence<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>model_inputs</code> contains everything that’s necessary for a model to operate well. For <code>DistilBERT</code>, that includes the <code>input IDs</code> as well as the <code>attention mask</code>. Other models that accept additional inputs will also have those output by the tokenizer object.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## one sequences</span>
sequence <span class="token operator">=</span> <span class="token string">&quot;I&#39;ve been waiting for a HuggingFace course my whole life.&quot;</span>
model_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequence<span class="token punctuation">)</span>

<span class="token comment">## multiple sequences</span>
sequences <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;I&#39;ve been waiting for a HuggingFace course my whole life.&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;So have I!&quot;</span><span class="token punctuation">]</span>
model_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequences<span class="token punctuation">)</span>

<span class="token comment">## Will pad the sequences up to the maximum sequence length, equal to padding=&quot;true&quot;</span>
model_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequences<span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token string">&quot;longest&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## Will pad the sequences up to the model max length</span>
<span class="token comment">## (512 for BERT or DistilBERT)</span>
model_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequences<span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token string">&quot;max_length&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## Will pad the sequences up to the specified max length</span>
model_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequences<span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token string">&quot;max_length&quot;</span><span class="token punctuation">,</span> max_length<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="truncation" tabindex="-1"><a class="header-anchor" href="#truncation" aria-hidden="true">#</a> truncation</h3><p><code>truncation=True</code> 是按<code>max_length</code>参数来确定的, 而在<code>padding</code>中则是<code>padding=&#39;max_length&#39;</code> we can get the model suggesting <code>max_length</code> by <code>self.tokenizer.max_model_input_sizes</code>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Will truncate the sequences that are longer than the model max length</span>
<span class="token comment">## (512 for BERT or DistilBERT)</span>
model_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequences<span class="token punctuation">,</span> truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>

<span class="token comment">## Will truncate the sequences that are longer than the specified max length</span>
model_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequences<span class="token punctuation">,</span> max_length<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">,</span> truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="return" tabindex="-1"><a class="header-anchor" href="#return" aria-hidden="true">#</a> return</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## Returns PyTorch tensors</span>
model_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequences<span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> return_tensors<span class="token operator">=</span><span class="token string">&quot;pt&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## Returns TensorFlow tensors</span>
model_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequences<span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> return_tensors<span class="token operator">=</span><span class="token string">&quot;tf&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## Returns NumPy arrays</span>
model_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequences<span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> return_tensors<span class="token operator">=</span><span class="token string">&quot;np&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="special-tokens" tabindex="-1"><a class="header-anchor" href="#special-tokens" aria-hidden="true">#</a> Special tokens</h3><p>The <code>tokenizer</code> added the special word [CLS] at the beginning and the special word [SEP] at the end but <code>tokenizer.tokenize</code> doesn&#39;t. Note that some models don’t add special words, or add different ones; models may also add these special words only at the beginning, or only at the end. In any case, the tokenizer knows which ones are expected and will deal with this for you.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>sequence <span class="token operator">=</span> <span class="token string">&quot;I&#39;ve been waiting for a HuggingFace course my whole life.&quot;</span>
tokens <span class="token operator">=</span> tokenizer<span class="token punctuation">.</span>tokenize<span class="token punctuation">(</span>sequence<span class="token punctuation">)</span>
ids <span class="token operator">=</span> tokenizer<span class="token punctuation">.</span>convert_tokens_to_ids<span class="token punctuation">(</span>tokens<span class="token punctuation">)</span>
<span class="token comment">## [1045, 1005, 2310, 2042, 3403, 2005, 1037, 17662, 12172, 2607, 2026, 2878, 2166, 1012]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tokenizer<span class="token punctuation">.</span>decode<span class="token punctuation">(</span>ids<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## &quot;i&#39;ve been waiting for a huggingface course my whole life.&quot;</span>


model_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequence<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>model_inputs<span class="token punctuation">[</span><span class="token string">&quot;input_ids&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## [101, 1045, 1005, 2310, 2042, 3403, 2005, 1037, 17662, 12172, 2607, 2026, 2878, 2166, 1012, 102]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tokenizer<span class="token punctuation">.</span>decode<span class="token punctuation">(</span>model_inputs<span class="token punctuation">[</span><span class="token string">&quot;input_ids&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## &quot;[CLS] i&#39;ve been waiting for a huggingface course my whole life. [SEP]&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="loading-and-saving" tabindex="-1"><a class="header-anchor" href="#loading-and-saving" aria-hidden="true">#</a> loading and saving</h3><p><code>from_pretrained()</code> to load and <code>save_pretrained()</code> to save. These methods will load or save the algorithm used by the <code>tokenizer</code> (a bit like the architecture of the model) as well as its <code>vocabulary</code> (a bit like the weights of the model).</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-cased&quot;</span><span class="token punctuation">)</span>
tokenizer<span class="token punctuation">(</span><span class="token string">&quot;Using a Transformer network is simple&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## {&#39;input_ids&#39;: [101, 7993, 170, 11303, 1200, 2443, 1110, 3014, 102],</span>
<span class="token comment">##  &#39;token_type_ids&#39;: [0, 0, 0, 0, 0, 0, 0, 0, 0],</span>
<span class="token comment">##  &#39;attention_mask&#39;: [1, 1, 1, 1, 1, 1, 1, 1, 1]}</span>
tokenizer<span class="token punctuation">.</span>save_pretrained<span class="token punctuation">(</span><span class="token string">&quot;directory_on_my_computer&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="notice" tabindex="-1"><a class="header-anchor" href="#notice" aria-hidden="true">#</a> Notice</h2>`,51),h={href:"https://huggingface.co/docs/transformers/tokenizer_summary",target:"_blank",rel:"noopener noreferrer"},v={href:"https://huggingface.co/docs/transformers/preprocessing",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"distilbert-base-uncased-finetuned-sst-2-english",-1),g=s("code",null,"tokenizer",-1),_=s("code",null,"input_ids",-1),f=s("code",null,"attention_mask",-1),y=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
checkpoint <span class="token operator">=</span> <span class="token string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span>
raw_inputs <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;I&#39;ve been waiting for a HuggingFace course my whole life.&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;I hate this so much!&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>raw_inputs<span class="token punctuation">,</span> padding<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> truncation<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> return_tensors<span class="token operator">=</span><span class="token string">&quot;pt&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## {</span>
<span class="token comment">##     &#39;input_ids&#39;: tensor([</span>
<span class="token comment">##         [  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172, 2607,  2026,  2878,  2166,  1012,   102],</span>
<span class="token comment">##         [  101,  1045,  5223,  2023,  2061,  2172,   999,   102,     0,     0,     0,     0,     0,     0,     0,     0]</span>
<span class="token comment">##     ]), </span>
<span class="token comment">##     &#39;attention_mask&#39;: tensor([</span>
<span class="token comment">##         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],</span>
<span class="token comment">##         [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]</span>
<span class="token comment">##     ])</span>
<span class="token comment">## }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>bert-base-cased</code> 则返回了<code>input_ids</code>, <code>token_type_ids</code>和<code>attention_mask</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span><span class="token string">&quot;bert-base-cased&quot;</span><span class="token punctuation">)</span>
encoded_input <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span><span class="token string">&quot;Do not meddle in the affairs of wizards, for they are subtle and quick to anger.&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## {&#39;input_ids&#39;: [101, 2079, 2025, 19960, 10362, 1999, 1996, 3821, 1997, 16657, 1010, 2005, 2027, 2024, 11259, 1998, 4248, 2000, 4963, 1012, 102], </span>
<span class="token comment">##  &#39;token_type_ids&#39;: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], </span>
<span class="token comment">##  &#39;attention_mask&#39;: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),w={href:"https://huggingface.co/course/chapter2/4?fw=pt",target:"_blank",rel:"noopener noreferrer"},q={href:"https://huggingface.co/course/chapter2/5?fw=pt",target:"_blank",rel:"noopener noreferrer"},z={href:"https://huggingface.co/course/chapter2/6?fw=pt",target:"_blank",rel:"noopener noreferrer"};function x(T,A){const a=p("ExternalLinkIcon");return i(),c("div",null,[u,r,d,s("p",null,[n("Tokenization include three steps, "),s("a",k,[n("Behind the pipeline"),e(a)])]),m,s("p",null,[n("所以tokenizer要和model保持一致"),s("a",h,[n("参考官网"),e(a)]),n(". 返回值的解释, 可"),s("a",v,[n("参考官网"),e(a)]),b,n("的"),g,n("只返回了"),_,n("和"),f,n(".")]),y,s("p",null,[n("refs: "),s("a",w,[n("Tokenizers"),e(a)]),n(" https://huggingface.co/docs/transformers/preprocessing "),s("a",q,[n("Handling multiple sequences"),e(a)]),s("a",z,[n("Putting it all together"),e(a)])])])}const E=o(l,[["render",x],["__file","NLP.html.vue"]]);export{E as default};
