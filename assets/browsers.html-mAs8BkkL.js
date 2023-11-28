import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as t,o,c as p,a as n,b as i,d as c,e as s}from"./app-yeyEmHfz.js";const l={},r=s(`<h1 id="browsers" tabindex="-1"><a class="header-anchor" href="#browsers" aria-hidden="true">#</a> browsers</h1><p>用来配置浏览器选项</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><p>配置浏览器选项:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>options <span class="token operator">=</span> ChromeOptions<span class="token punctuation">(</span><span class="token punctuation">)</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>options<span class="token operator">=</span>options<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>当<code>driver</code>关闭时, 浏览器不关闭</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>chrome_options <span class="token operator">=</span> ChromeOptions<span class="token punctuation">(</span><span class="token punctuation">)</span>
chrome_options<span class="token punctuation">.</span>add_experimental_option<span class="token punctuation">(</span><span class="token string">&quot;detach&quot;</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments" aria-hidden="true">#</a> Arguments</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>chrome_options <span class="token operator">=</span> ChromeOptions<span class="token punctuation">(</span><span class="token punctuation">)</span>
chrome_options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&quot;--headless=new&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
options <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>ChromeOptions<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">## 无界面模式</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;headless&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 指定用户客户端-模拟手机浏览</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;user-agent=&quot;MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1&quot;&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 禁用图片加载</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;blink-settings=imagesEnabled=false&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 隐身模式</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;incognito&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 自动打开开发者工具</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&quot;auto-open-devtools-for-tabs&quot;</span><span class="token punctuation">)</span>
<span class="token comment">## 设置窗口尺寸，注意宽高之间使用逗号而不是x</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;window-size=300,600&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 设置窗口启动位置（左上角坐标）</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;window-position=120,0&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 禁用gpu渲染</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;disable-gpu&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 全屏启动</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;start-fullscreen&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## 全屏启动，无地址栏</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;kiosk&#39;</span><span class="token punctuation">)</span> 
 <span class="token comment"># 启动时，不激活（前置）窗口</span>
options<span class="token punctuation">.</span>add_argument<span class="token punctuation">(</span><span class="token string">&#39;no-startup-window&#39;</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常用属性:</p><p>binary_location=&#39;&#39;：指定Chrome浏览器路径 debuger_address=&#39;：指定调试路径 headless: 无界面模式 add_argument()：添加启动参数 add_extension：添加本地插件 add_experimental_option：添加实验选项 to_capablilities：将options转为标准的capablitiies格式</p>`,12),u={href:"http://www.assertselenium.com/java/list-of-chrome-driver-command-line-arguments/",target:"_blank",rel:"noopener noreferrer"},d=s(`<p>driver.maximize_window() driver.get(login_url) elem = driver.find_element</p><h2 id="options-1" tabindex="-1"><a class="header-anchor" href="#options-1" aria-hidden="true">#</a> options</h2><p>设置<code>pageLoadStrategy</code>,即页面加载会不会阻塞<code>WebDriver</code></p><ol><li><code>normal</code> 默认选项, 等待所有资源加载完毕</li><li><code>eager</code> <code>DOM</code>加载完毕, 图片还未加载</li><li><code>none</code> 任何都不会阻塞<code>WebDriver</code></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> selenium <span class="token keyword">import</span> webdriver
<span class="token keyword">from</span> selenium<span class="token punctuation">.</span>webdriver<span class="token punctuation">.</span>chrome<span class="token punctuation">.</span>options <span class="token keyword">import</span> Options
options <span class="token operator">=</span> Options<span class="token punctuation">(</span><span class="token punctuation">)</span>
options<span class="token punctuation">.</span>page_load_strategy <span class="token operator">=</span> <span class="token string">&#39;normal&#39;</span>
driver <span class="token operator">=</span> webdriver<span class="token punctuation">.</span>Chrome<span class="token punctuation">(</span>options<span class="token operator">=</span>options<span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&quot;http://www.google.com&quot;</span><span class="token punctuation">)</span>
driver<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考文章: https://www.cnblogs.com/superhin/p/12607074.html</p><p>参考: https://chromedriver.chromium.org/capabilities https://www.selenium.dev/documentation/webdriver/browsers/chrome/ https://peter.sh/experiments/chromium-command-line-switches/</p>`,7);function m(k,v){const a=t("ExternalLinkIcon");return o(),p("div",null,[r,n("p",null,[n("a",u,[i("属性参考"),c(a)])]),d])}const g=e(l,[["render",m],["__file","browsers.html.vue"]]);export{g as default};
