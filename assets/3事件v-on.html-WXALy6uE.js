import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as o,o as c,c as l,b as n,d as s,e as t,a as p}from"./app-nD1Z-e8V.js";const u={},i=p(`<h1 id="事件绑定v-on" tabindex="-1"><a class="header-anchor" href="#事件绑定v-on" aria-hidden="true">#</a> 事件绑定v-on</h1><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><h3 id="直接在template中写方法体" tabindex="-1"><a class="header-anchor" href="#直接在template中写方法体" aria-hidden="true">#</a> 直接在template中写方法体</h3><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
import { ref } from &#39;vue&#39;

const counter = ref(0)
&lt;/script&gt;

&lt;template&gt;
	&lt;button @click=&quot;counter++&quot;&gt;Add 1&lt;/button&gt;
	&lt;p&gt;The button above has been clicked {{ counter }} times.&lt;/p&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在script写方法体-在template中调用" tabindex="-1"><a class="header-anchor" href="#在script写方法体-在template中调用" aria-hidden="true">#</a> 在script写方法体, 在template中调用</h3><p><code>say()</code>中的<code>event</code>参数可写, 可不写; <code>$event</code>可传, 可不传.</p><div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;script setup&gt;
	function say(message, event) {
		alert(message)
		alert(event)
	}
&lt;/script&gt;

&lt;template&gt;
	&lt;button @click=&quot;say(&#39;hello&#39;, $event)&quot;&gt;Say hello&lt;/button&gt;
&lt;/template&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="事件修饰符" tabindex="-1"><a class="header-anchor" href="#事件修饰符" aria-hidden="true">#</a> 事件修饰符</h2><p>如果在方法体中, 通过<code>$event</code>参数来控制<code>event.preventDefault()</code>等常用的事件参数会非常臃肿, 所以Vue 为 v-on 提供了事件修饰符。修饰符是用<code>.</code>表示的指令后缀，包含以下这些：</p><ol><li>.stop: <code>&lt;a @click.stop=&quot;doThis&quot;&gt;&lt;/a&gt;</code>, 单击事件将停止传递, stop阻止了冒泡, 如果没有stop, 当点击button元素时, 会弹出两次alert, 因为外层的div也会触发. 这就是冒泡, 从内层的元素向外层冒.</li><li>.prevent: <code>&lt;form @submit.prevent=&quot;onSubmit&quot;&gt;&lt;/form&gt;</code>, 阻止了默认事件: 页面跳转</li><li>.self: <code>&lt;div @click.self=&quot;doThat&quot;&gt;...&lt;/div&gt;</code>, 只有event.target是当前操作的元素时才触发事件, 点击button不会因为冒泡到外层元素时, 发现不是其自身点击触发的, 所以没有触发事件</li><li>.capture: <code>&lt;div @click.capture=&quot;doThis&quot;&gt;...&lt;/div&gt;</code>, 添加事件监听器时，使用 <code>capture</code> 捕获模式</li><li>.once: <code>&lt;a @click.once=&quot;doThis&quot;&gt;&lt;/a&gt;</code>, 点击事件最多被触发一次逆冒泡, 冒泡是由内向外, capture是由外向内. 所以每次是先触发外层的div事件, 再触发内层的div事件</li><li>.passive: <code>&lt;div @scroll.passive=&quot;onScroll&quot;&gt;...&lt;/div&gt;</code>, 直接触发事件, 而不需要等待methods()里的方法执行完毕, 滚动事件的默认行为 (scrolling) 将立即发生而非等待 <code>onScroll</code> 完成</li></ol><p>✨<code>&lt;a @click.stop.prevent=&quot;doThat&quot;&gt;&lt;/a&gt;</code>, 修饰语可以使用链式书写</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>事件修饰符<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
		<span class="token comment">&lt;!-- 引入Vue --&gt;</span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.bootcss.com/vue/2.6.10/vue.js<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
			<span class="token selector">.stop</span><span class="token punctuation">{</span>
				<span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
				<span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">.box1</span><span class="token punctuation">{</span>
				<span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
				<span class="token property">background-color</span><span class="token punctuation">:</span> skyblue<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">.box2</span><span class="token punctuation">{</span>
				<span class="token property">padding</span><span class="token punctuation">:</span> 5px<span class="token punctuation">;</span>
				<span class="token property">background-color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">.list</span><span class="token punctuation">{</span>
				<span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
				<span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
				<span class="token property">background-color</span><span class="token punctuation">:</span> peru<span class="token punctuation">;</span>
				<span class="token property">overflow</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token selector">li</span><span class="token punctuation">{</span>
				<span class="token property">height</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>root<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token comment">&lt;!-- 阻止默认事件（常用） --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.baidu.com<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click.prevent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>1. prevent 点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">/&gt;</span></span>
			<span class="token comment">&lt;!-- 阻止事件冒泡（常用） --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stop<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.stop</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>2. stop 点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">/&gt;</span></span>
			<span class="token comment">&lt;!-- 事件只触发一次（常用） --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click.once</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>3. once 点击<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">/&gt;</span></span>
			<span class="token comment">&lt;!-- 使用事件的捕获模式 --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click.capture</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showMsg(1)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				div1
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box2<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showMsg(2)<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
					div2
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">/&gt;</span></span>
			<span class="token comment">&lt;!-- 只有event.target是当前操作的元素时才触发事件； --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click.self</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>点我提示信息<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>hr</span><span class="token punctuation">/&gt;</span></span>
			<span class="token comment">&lt;!-- 事件的默认行为立即执行，无需等待事件回调执行完毕； --&gt;</span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">@wheel.passive</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>demo<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>list<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
		<span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
			<span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&#39;#root&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span>
				<span class="token function">showInfo</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token function">showMsg</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span>
				<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token function">demo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
					<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
	</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="按键修饰符" tabindex="-1"><a class="header-anchor" href="#按键修饰符" aria-hidden="true">#</a> 按键修饰符</h2><p>按键行为包含两个部分:</p>`,14),k={href:"https://developer.mozilla.org/en-US/docs/Web/API/UI_Events",target:"_blank",rel:"noopener noreferrer"},d={href:"https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_code_values",target:"_blank",rel:"noopener noreferrer"},r=n("code",null,"PageDown",-1),v=n("code",null,"page-down",-1),g=p(`<div class="language-htm line-numbers-mode" data-ext="htm"><pre class="language-htm"><code>&lt;input @keyup.page-down=&quot;func&quot; /&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2><ol><li>https://cn.vuejs.org/guide/essentials/event-handling.html</li></ol>`,3);function m(b,h){const a=o("ExternalLinkIcon");return c(),l("div",null,[i,n("ol",null,[n("li",null,[s("行为, 如keydown(按键按下), keyup(按键抬起). 详细可查询"),n("a",k,[s("UI_Events"),t(a)])]),n("li",null,[s("名称, 如enter(会车键), page-down. 详细可查询"),n("a",d,[s("Keyboard_event_code_values"),t(a)]),s(". ✨注意要把原始的驼峰格式"),r,s(", 改为横线格式"),v])]),g])}const _=e(u,[["render",m],["__file","3事件v-on.html.vue"]]);export{_ as default};
