import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as n,a as s}from"./app-nD1Z-e8V.js";const t={},i=s(`<h1 id="预测评估及变量选择" tabindex="-1"><a class="header-anchor" href="#预测评估及变量选择" aria-hidden="true">#</a> 预测评估及变量选择</h1><h2 id="传统方法" tabindex="-1"><a class="header-anchor" href="#传统方法" aria-hidden="true">#</a> 传统方法</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> skimage<span class="token punctuation">.</span>measure <span class="token keyword">import</span> compare_ssim <span class="token keyword">as</span> ssim 
s <span class="token operator">=</span> ssim<span class="token punctuation">(</span>img1<span class="token punctuation">,</span>img2<span class="token punctuation">,</span> multichannel <span class="token operator">=</span> <span class="token boolean">True</span><span class="token punctuation">)</span>  
<span class="token comment">#Set multichannel False if black and white image. </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://www.quora.com/What-is-the-best-method-to-measure-similarity-between-two-images-using-OpenCV https://towardsdatascience.com/measuring-similarity-in-two-images-using-python-b72233eb53c6</p><h2 id="深度学习方法-faceencoder" tabindex="-1"><a class="header-anchor" href="#深度学习方法-faceencoder" aria-hidden="true">#</a> 深度学习方法 faceencoder</h2><p>参考FaceEncoding.md</p><p>https://medium.com/@ageitgey/machine-learning-is-fun-part-4-modern-face-recognition-with-deep-learning-c3cffc121d78</p>`,7),c=[i];function o(r,p){return e(),n("div",null,c)}const m=a(t,[["render",o],["__file","ImageSimilarity.html.vue"]]);export{m as default};
