import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as a,f as o,a as s,b as t,e as c}from"./app-XqA98pG8.js";const p="/assets/1-qENYr3uP.png",i="/assets/2-67yHmzU7.png",l="/assets/3-zXkrn3C2.png",r={},d=s("h1",{id:"process-pool",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#process-pool","aria-hidden":"true"},"#"),t(" process_pool")],-1),_=s("p",null,"常用命令： https://awscli.amazonaws.com/v2/documentation/api/latest/reference/s3/index.html",-1),u=s("p",null,"aws的s3文件存储系统, 下载接口.",-1),k=c(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> boto3<span class="token punctuation">.</span>session <span class="token keyword">import</span> Session
session <span class="token operator">=</span> Session<span class="token punctuation">(</span>aws_access_key_id<span class="token operator">=</span>s3_access_key_id<span class="token punctuation">,</span> aws_secret_access_key<span class="token operator">=</span>s3_secret_access_key<span class="token punctuation">)</span>
s3_client <span class="token operator">=</span> session<span class="token punctuation">.</span>client<span class="token punctuation">(</span>service_name<span class="token operator">=</span><span class="token string">&#39;s3&#39;</span><span class="token punctuation">,</span> region_name<span class="token operator">=</span>s3_region<span class="token punctuation">)</span>
s3_client<span class="token punctuation">.</span>download_file<span class="token punctuation">(</span>Bucket<span class="token operator">=</span>s3_bucket<span class="token punctuation">,</span> Key<span class="token operator">=</span>s3_key<span class="token punctuation">,</span> Filename<span class="token operator">=</span>local_name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>aws_access_key_id</code> 访问秘钥ID 1.png</li><li><code>s3_secret_access_key</code> 访问秘钥 1.png</li><li><code>service_name</code> 服务名, <code>s3</code>就是存储和内容分发服务 2.png</li><li><code>region_name</code> 区名, 就是服务器的物理地址, 只写英文部分 2.png</li><li><code>Bucket</code> 桶名, 有点类似HBase 2.png</li><li><code>key</code> 文件的key, 类似HBase 3.png</li><li><code>Filename</code> 保存的文件名</li></ul><p><img src="`+p+'" alt="" loading="lazy"><img src="'+i+'" alt="" loading="lazy"><img src="'+l+'" alt="" loading="lazy"></p>',3);function m(g,y){return e(),a("div",null,[d,_,u,o("more"),k])}const f=n(r,[["render",m],["__file","aws.html.vue"]]);export{f as default};
