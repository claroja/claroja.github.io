import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c as p,a as n,b as s,d as a,e as t}from"./app-yeyEmHfz.js";const c={},r=n("h1",{id:"global",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#global","aria-hidden":"true"},"#"),s(" global")],-1),u=n("p",null,[s("最佳实践是: 通过模拟行为进入登录页面, 然后通过selenium-wire获得header信息, 再发送请求(可以考虑替换requests). 当然也可以通过"),n("code",null,"get_log"),s("方法来获取")],-1),d=n("h2",{id:"安装selenium",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装selenium","aria-hidden":"true"},"#"),s(" 安装selenium")],-1),m=n("code",null,"selenium",-1),v={href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_library/",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"浏览器驱动",-1),b=n("code",null,"浏览器驱动",-1),h=n("code",null,"浏览器",-1),_=n("code",null,"版本",-1),w={href:"https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/",target:"_blank",rel:"noopener noreferrer"},g=t(`<ol><li><p>使用<code>WebDriver Manager for Python</code>, 来自动管理驱动</p></li><li><p>手工指定驱动(建议使用, 因为不需要更多的依赖), 以下是代码:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>service <span class="token keyword">import</span> Service
<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
service <span class="token operator">=</span> Service<span class="token punctuation">(</span>executable_path<span class="token operator">=</span><span class="token string">&quot;/path/to/chromedriver&quot;</span><span class="token punctuation">)</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>service<span class="token operator">=</span>service<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1),f=n("h2",{id:"使用selenium",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#使用selenium","aria-hidden":"true"},"#"),s(" 使用selenium")],-1),y={href:"https://www.selenium.dev/documentation/webdriver/getting_started/first_script/",target:"_blank",rel:"noopener noreferrer"},x=t(`<ol><li>初始化driver</li><li>打开网址</li><li>设置延迟</li><li>获得元素</li><li>获得元素信息</li><li>操作元素</li><li>退出</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>service <span class="token keyword">import</span> Service
<span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>common<span class="token punctuation">.</span>by <span class="token keyword">import</span> By

<span class="token comment">## 初始化driver</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>service<span class="token operator">=</span>Service<span class="token punctuation">(</span>executable_path<span class="token operator">=</span><span class="token string">&quot;chromedriver.exe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">## 打开网址</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;https://www.selenium.dev/selenium/web/web-form.html&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 设置延迟, 更多的延迟策略可以通过: https://www.selenium.dev/documentation/webdriver/waits/获得</span>
driver<span class="token punctuation">.</span>implicitly_wait<span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
<span class="token comment">## 获得元素, 更多的获得元素方法可参考: https://www.selenium.dev/documentation/webdriver/elements/</span>
text_box <span class="token operator">=</span> driver<span class="token punctuation">.</span>find_element<span class="token punctuation">(</span>by<span class="token operator">=</span>By<span class="token punctuation">.</span>NAME<span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&quot;my-text&quot;</span><span class="token punctuation">)</span>

<span class="token comment">## 获得元素的相关信息, 更多获取信息的方法可参考: https://www.selenium.dev/documentation/webdriver/elements/information/</span>
text_box<span class="token punctuation">.</span>tag_name
<span class="token comment">## 操作元素</span>
text_box<span class="token punctuation">.</span>send_keys<span class="token punctuation">(</span><span class="token string">&quot;Selenium&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># 在box中输入文字</span>
<span class="token comment">## 退出</span>
driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>refs: https://www.selenium.dev/</p>`,3);function q(S,B){const e=i("ExternalLinkIcon");return l(),p("div",null,[r,u,d,n("ol",null,[n("li",null,[s("安装"),m,s(", "),n("a",v,[s("官网"),a(e)])]),n("li",null,[s("安装"),k,b,s("是用来操作浏览器的.根据需要选择对应的"),h,s("以及"),_,s(". "),n("a",w,[s("驱动下载"),a(e)]),s(", 浏览器驱动使用选择有两种方式: "),g])]),f,n("p",null,[s("总共的步骤, 详细可参考参考"),n("a",y,[s("官网"),a(e)]),s(":")]),x])}const V=o(c,[["render",q],["__file","selenium.html.vue"]]);export{V as default};
