import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as r,c as p,a as t,b as n,d as a,e as s}from"./app-XqA98pG8.js";const d={},l=s(`<h1 id="pipeline" tabindex="-1"><a class="header-anchor" href="#pipeline" aria-hidden="true">#</a> pipeline</h1><p><code>pipeline()</code>会自动在Model Hub上加载对应<code>task</code>的<code>model</code>和<code>tokenizer</code>.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> transformers <span class="token keyword">import</span> pipeline
classifier <span class="token operator">=</span> pipeline<span class="token punctuation">(</span><span class="token string">&quot;sentiment-analysis&quot;</span><span class="token punctuation">)</span>
classifier<span class="token punctuation">(</span><span class="token string">&quot;We are very happy to show you the 🤗 Transformers library.&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;label&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;POSITIVE&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;score&#39;</span><span class="token punctuation">:</span> <span class="token number">0.9998</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以手动指定</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>model_name <span class="token operator">=</span> <span class="token string">&quot;nlptown/bert-base-multilingual-uncased-sentiment&quot;</span>
<span class="token keyword">from</span> transformers <span class="token keyword">import</span> AutoTokenizer<span class="token punctuation">,</span> AutoModelForSequenceClassification
model <span class="token operator">=</span> AutoModelForSequenceClassification<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>model_name<span class="token punctuation">)</span>
tokenizer <span class="token operator">=</span> AutoTokenizer<span class="token punctuation">.</span>from_pretrained<span class="token punctuation">(</span>model_name<span class="token punctuation">)</span>
classifier <span class="token operator">=</span> pipeline<span class="token punctuation">(</span><span class="token string">&quot;sentiment-analysis&quot;</span><span class="token punctuation">,</span> model<span class="token operator">=</span>model<span class="token punctuation">,</span> tokenizer<span class="token operator">=</span>tokenizer<span class="token punctuation">)</span>
<span class="token comment">## classifier = pipeline(&quot;sentiment-analysis&quot;, model=model_name, tokenizer=model_name) # model和tokenizer也可以直接使用字符串形式</span>
classifier<span class="token punctuation">(</span><span class="token string">&quot;Nous sommes très heureux de vous présenter la bibliothèque 🤗 Transformers.&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">[</span><span class="token punctuation">{</span><span class="token string">&#39;label&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;5 stars&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;score&#39;</span><span class="token punctuation">:</span> <span class="token number">0.7273</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h3><table><thead><tr><th>参数</th><th>描述</th></tr></thead><tbody><tr><td>task</td><td>任务的种类</td></tr><tr><td>model</td><td>PreTrainedModel对象 或 字符串</td></tr><tr><td>config</td><td>PretrainedConfig对象 或 字符串</td></tr><tr><td>tokenizer</td><td>PreTrainedTokenizer 或 字符串</td></tr></tbody></table>`,8),c={href:"https://huggingface.co/docs/transformers/v4.20.1/en/main_classes/pipelines#transformers.pipeline",target:"_blank",rel:"noopener noreferrer"},u=s('<h3 id="task" tabindex="-1"><a class="header-anchor" href="#task" aria-hidden="true">#</a> task</h3><table><thead><tr><th>字符串</th><th>对象</th><th>描述</th></tr></thead><tbody><tr><td>&quot;audio-classification&quot;</td><td>AudioClassificationPipeline</td><td>音频分类</td></tr><tr><td>&quot;automatic-speech-recognition&quot;</td><td>AutomaticSpeechRecognitionPipeline</td><td>语音识别</td></tr><tr><td>&quot;conversational&quot;</td><td>ConversationalPipeline</td><td></td></tr><tr><td>&quot;feature-extraction&quot;</td><td>FeatureExtractionPipeline</td><td></td></tr><tr><td>&quot;fill-mask&quot;</td><td>FillMaskPipeline:</td><td></td></tr><tr><td>&quot;image-classification&quot;</td><td>ImageClassificationPipeline</td><td>图像份额里</td></tr><tr><td>&quot;question-answering&quot;</td><td>QuestionAnsweringPipeline</td><td></td></tr><tr><td>&quot;table-question-answering&quot;</td><td>TableQuestionAnsweringPipeline</td><td></td></tr><tr><td>&quot;text2text-generation&quot;</td><td>Text2TextGenerationPipeline</td><td></td></tr><tr><td>&quot;text-classification&quot; (alias &quot;sentiment-analysis&quot; available)</td><td>TextClassificationPipeline</td><td>文本分类</td></tr><tr><td>&quot;text-generation&quot;</td><td>TextGenerationPipeline:</td><td>文本生成</td></tr><tr><td>&quot;token-classification&quot; (alias &quot;ner&quot; available)</td><td>TokenClassificationPipeline</td><td>命名实体识别</td></tr><tr><td>&quot;translation&quot;</td><td>TranslationPipeline</td><td>翻译</td></tr><tr><td>&quot;translation_xx_to_yy&quot;</td><td>TranslationPipeline</td><td></td></tr><tr><td>&quot;summarization&quot;</td><td>SummarizationPipeline</td><td>概括</td></tr><tr><td>&quot;zero-shot-classification&quot;</td><td>ZeroShotClassificationPipeline</td><td></td></tr></tbody></table>',2),k={href:"https://huggingface.co/docs/transformers/v4.20.1/en/main_classes/pipelines#transformers.pipeline.task",target:"_blank",rel:"noopener noreferrer"},m={href:"https://huggingface.co/docs/transformers/quicktour",target:"_blank",rel:"noopener noreferrer"},h={href:"https://huggingface.co/docs/transformers/pipeline_tutorial",target:"_blank",rel:"noopener noreferrer"},f={href:"https://huggingface.co/docs/transformers/v4.20.1/en/main_classes/pipelines",target:"_blank",rel:"noopener noreferrer"},g={href:"https://huggingface.co/models",target:"_blank",rel:"noopener noreferrer"};function q(_,b){const e=i("ExternalLinkIcon");return r(),p("div",null,[l,t("p",null,[t("a",c,[n("参考官网"),a(e)])]),u,t("p",null,[t("a",k,[n("参考官网"),a(e)])]),t("p",null,[n("参考文献: "),t("a",m,[n("quicktour"),a(e)]),t("a",h,[n("pipeline_tutorial"),a(e)]),t("a",f,[n("pipelines"),a(e)]),t("a",g,[n("models"),a(e)])])])}const y=o(d,[["render",q],["__file","transformers_pipeline.html.vue"]]);export{y as default};
