import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r,o as i,c,a as e,b as n,d as t,e as a}from"./app-XqA98pG8.js";const p={},l=e("h1",{id:"course",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#course","aria-hidden":"true"},"#"),n(" course")],-1),u={href:"https://huggingface.co/course/chapter1/1",target:"_blank",rel:"noopener noreferrer"},d={href:"https://huggingface.co/course/chapter1/4?fw=pt",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"2018年 bert出生, 2019年 DistilBERT, 相比bert, 60% faster, 40% lighter",-1),k={href:"https://huggingface.co/course/chapter2/2?fw=pt",target:"_blank",rel:"noopener noreferrer"},m=e("img",{src:"https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter2/full_nlp_pipeline.svg",alt:"",loading:"lazy"},null,-1),f=a('<p>总共分为了三步:tokenize, model, postProcessing</p><h3 id="tokenize" tabindex="-1"><a class="header-anchor" href="#tokenize" aria-hidden="true">#</a> tokenize</h3><h3 id="_2-model" tabindex="-1"><a class="header-anchor" href="#_2-model" aria-hidden="true">#</a> 2.model</h3><h2 id="postprocessing-the-output" tabindex="-1"><a class="header-anchor" href="#postprocessing-the-output" aria-hidden="true">#</a> Postprocessing the output</h2>',4),g={href:"https://huggingface.co/course/chapter2/5?fw=pt",target:"_blank",rel:"noopener noreferrer"},_=a(`<h2 id="batch" tabindex="-1"><a class="header-anchor" href="#batch" aria-hidden="true">#</a> batch</h2><p>Transformers models expect multiple sentences by default, called Batching. you’ll see that it didn’t just convert the list of input IDs into a tensor, it added a dimension on top of it:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> torch
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer<span class="token punctuation">,</span> AutoModelForSequenceClassification

checkpoint <span class="token operator">=</span> <span class="token string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span>
model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>checkpoint<span class="token punctuation">)</span>
sequence <span class="token operator">=</span> <span class="token string">&quot;I&#39;ve been waiting for a HuggingFace course my whole life.&quot;</span>

tokenized_inputs <span class="token operator">=</span> tokenizer<span class="token punctuation">(</span>sequence<span class="token punctuation">,</span> return_tensors<span class="token operator">=</span><span class="token string">&quot;pt&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>tokenized_inputs<span class="token punctuation">[</span><span class="token string">&quot;input_ids&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment">## tensor([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,</span>
<span class="token comment">##           2607,  2026,  2878,  2166,  1012,   102]])</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),v={href:"https://huggingface.co/course/chapter2/6?fw=pt",target:"_blank",rel:"noopener noreferrer"};function b(q,x){const s=r("ExternalLinkIcon");return i(),c("div",null,[l,e("p",null,[e("a",u,[n("transformers course"),t(s)])]),e("p",null,[n("transformer的历史发展轨迹 "),e("a",d,[n("Transformer intro"),t(s)])]),h,e("p",null,[e("a",k,[n("Behind the pipeline"),t(s)]),n(" 介绍了transformer的具体工作流程. "),m]),f,e("p",null,[e("a",g,[n("Handling multiple sequences"),t(s)])]),_,e("p",null,[e("a",v,[n("Putting it all together"),t(s)])])])}const w=o(p,[["render",b],["__file","transformers_course.html.vue"]]);export{w as default};
