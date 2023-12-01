import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as a,e}from"./app-MTzDpLgJ.js";const r={},s=e(`<h1 id="base64" tabindex="-1"><a class="header-anchor" href="#base64" aria-hidden="true">#</a> base64</h1><p>Base64，顾名思义，就是包括小写字母a-z、大写字母A-Z、数字0-9、符号&quot;+&quot;、&quot;/&quot;一共64个字符的字符集，（另加一个“=”，实际是65个字符，至于为什么还会有一个“=&quot;，这个后面再说）。任何符号都可以转换成这个字符集中的字符，这个转换过程就叫做base64编码。</p><p>base64怎么转换 首先将字符串（图片等）转换成二进制序列，然后按每6个二进制位为一组，分成若干组，如果不足6位，则低位补0。每6位组成一个新的字节，高位补00，构成一个新的二进制序列，最后根据base64索引表中的值找到对应的字符。</p><h2 id="base64索引表" tabindex="-1"><a class="header-anchor" href="#base64索引表" aria-hidden="true">#</a> Base64索引表</h2><p>Base64的编码表可以分成四个部分:</p><ol><li>大写字母 (0-25): ABCDEFGHIJKLMNOPQRSTUVWXYZ</li><li>小写字母(26-51): abcdefghijklmnopqrstuvwxyz</li><li>数字(52-61): 0123456789</li><li>特殊字符(62-63): +/</li></ol><p>注意: 等号<code>=</code>是为了填充空白, 为了保证Base64的编码的值长度是4字节的整数倍, 它没有索引号.</p><h3 id="uppercase-letters" tabindex="-1"><a class="header-anchor" href="#uppercase-letters" aria-hidden="true">#</a> Uppercase Letters</h3><table><thead><tr><th>Index</th><th>Character</th></tr></thead><tbody><tr><td>0</td><td>A</td></tr><tr><td>1</td><td>B</td></tr><tr><td>2</td><td>C</td></tr><tr><td>3</td><td>D</td></tr><tr><td>4</td><td>E</td></tr><tr><td>5</td><td>F</td></tr><tr><td>6</td><td>G</td></tr><tr><td>7</td><td>H</td></tr><tr><td>8</td><td>I</td></tr><tr><td>9</td><td>J</td></tr><tr><td>10</td><td>K</td></tr><tr><td>11</td><td>L</td></tr><tr><td>12</td><td>M</td></tr><tr><td>13</td><td>N</td></tr><tr><td>14</td><td>O</td></tr><tr><td>15</td><td>P</td></tr><tr><td>16</td><td>Q</td></tr><tr><td>17</td><td>R</td></tr><tr><td>18</td><td>S</td></tr><tr><td>19</td><td>T</td></tr><tr><td>20</td><td>U</td></tr><tr><td>21</td><td>V</td></tr><tr><td>22</td><td>W</td></tr><tr><td>23</td><td>X</td></tr><tr><td>24</td><td>Y</td></tr><tr><td>25</td><td>Z</td></tr></tbody></table><h3 id="lowercase-letters" tabindex="-1"><a class="header-anchor" href="#lowercase-letters" aria-hidden="true">#</a> Lowercase Letters</h3><table><thead><tr><th>Index</th><th>Character</th></tr></thead><tbody><tr><td>26</td><td>a</td></tr><tr><td>27</td><td>b</td></tr><tr><td>28</td><td>c</td></tr><tr><td>29</td><td>d</td></tr><tr><td>30</td><td>e</td></tr><tr><td>31</td><td>f</td></tr><tr><td>32</td><td>g</td></tr><tr><td>33</td><td>h</td></tr><tr><td>34</td><td>i</td></tr><tr><td>35</td><td>j</td></tr><tr><td>36</td><td>k</td></tr><tr><td>37</td><td>l</td></tr><tr><td>38</td><td>m</td></tr><tr><td>39</td><td>n</td></tr><tr><td>40</td><td>o</td></tr><tr><td>41</td><td>p</td></tr><tr><td>42</td><td>q</td></tr><tr><td>43</td><td>r</td></tr><tr><td>44</td><td>s</td></tr><tr><td>45</td><td>t</td></tr><tr><td>46</td><td>u</td></tr><tr><td>47</td><td>v</td></tr><tr><td>48</td><td>w</td></tr><tr><td>49</td><td>x</td></tr><tr><td>50</td><td>y</td></tr><tr><td>51</td><td>z</td></tr></tbody></table><h3 id="digits" tabindex="-1"><a class="header-anchor" href="#digits" aria-hidden="true">#</a> Digits</h3><table><thead><tr><th>Index</th><th>Character</th></tr></thead><tbody><tr><td>52</td><td>0</td></tr><tr><td>53</td><td>1</td></tr><tr><td>54</td><td>2</td></tr><tr><td>55</td><td>3</td></tr><tr><td>56</td><td>4</td></tr><tr><td>57</td><td>5</td></tr><tr><td>58</td><td>6</td></tr><tr><td>59</td><td>7</td></tr><tr><td>60</td><td>8</td></tr><tr><td>61</td><td>9</td></tr></tbody></table><h3 id="symbols" tabindex="-1"><a class="header-anchor" href="#symbols" aria-hidden="true">#</a> Symbols</h3><table><thead><tr><th>Index</th><th>Character</th></tr></thead><tbody><tr><td>62</td><td>+</td></tr><tr><td>63</td><td>/</td></tr></tbody></table><h2 id="举例" tabindex="-1"><a class="header-anchor" href="#举例" aria-hidden="true">#</a> 举例</h2><p>以两个字节为例, 假设我们有两个字母的字符串<code>ab</code>,对应两个字节.一共16位, 按6位分为一组, 可分为三组, 在每组的高位补00, 最有一组因为只有四位, 所以在低位补00, 这时就形成了三个字节. 为了凑成四个字节, 最后一个字节用<code>=</code>代替.</p><p>注意: base64编码成的结果肯定是四字节的整数倍 因为base64编码, 是取6bit位, 然后填充2bit位. 当是三个字节(或三字节的整数倍时)都可以编码成四个字节, 而当非三个字节(或三个字节的整数倍时), 则使用<code>=</code>号来填充. 这样在解码的时候, 就可以按四个字节开取, 提升效率.</p><table><thead><tr><th>原始字符</th><th>a</th><th>b</th><th></th><th></th></tr></thead><tbody><tr><td>ascii</td><td>97</td><td>98</td><td></td><td></td></tr><tr><td>二进制</td><td>01100001</td><td>01100010</td><td></td><td></td></tr><tr><td>6位编码转换</td><td>00011000</td><td>00010110</td><td>00001000</td><td></td></tr><tr><td>base64索引</td><td>24</td><td>22</td><td>8</td><td></td></tr><tr><td>base64字符</td><td>Y</td><td>W</td><td>I</td><td>=</td></tr></tbody></table><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h2><ol><li><p>html中的图片用base64表示 某些样式中的图片不是一个资源地址，而是base64编码的字符串，这么做有什么好处呢？ 当然是减少了一次http的请求. 如果是图片的链接的话, 需要再发一次get请求, 而如果是base64编码, 则可以直接写到html中.</p></li><li><p>邮件传输 电子邮件刚问世的时候，只能传输英文，但后来随着用户的增加，中文、日文等文字的用户也有需求，但这些字符并不能被服务器或网关有效处理，因此Base64就登场了。随之，Base64在URL、Cookie、网页传输少量二进制文件中也有相应的使用。</p></li><li><p>64个可打印的字符来表示二进制的数据 在参数传输的过程中经常遇到的一种情况：使用全英文的没问题，但一旦涉及到中文就会出现乱码情况。与此类似，网络上传输的字符并不全是可打印的字符，比如二进制文件、图片等。Base64的出现就是为了解决此问题，它是基于64个可打印的字符来表示二进制的数据的一种方法。</p></li></ol><h2 id="python" tabindex="-1"><a class="header-anchor" href="#python" aria-hidden="true">#</a> python</h2><p>注意<code>b64encode</code>方法传入的参数是二进制对象<code>b</code>, 不是普通的字符串.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">## 编码</span>
base64<span class="token punctuation">.</span>b64encode<span class="token punctuation">(</span><span class="token string">b&#39;abc&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## b&#39;YWJj&#39;</span>
<span class="token comment">## 解码</span>
base64<span class="token punctuation">.</span>b64decode<span class="token punctuation">(</span><span class="token string">b&#39;YWJj&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## b&#39;abc&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url-safe" tabindex="-1"><a class="header-anchor" href="#url-safe" aria-hidden="true">#</a> url_safe</h3><p>​除了基本的base64，还有一种url safe 形式的编码方式，目的是将“+/” 替换成 “-_”， 因为标准的Base64并不适合直接放在URL里传输，URL编码器会把标准Base64中的“/”和“+”字符变为形如“%XX”的形式，而这些“%”号在存入数据库时还需要再进行转换。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>base64<span class="token punctuation">.</span>b64encode<span class="token punctuation">(</span><span class="token string">b&#39;i\\xcf\\xbf&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## b&#39;ac+/&#39;</span>
<span class="token comment">## 使用&quot;url safe&quot;的base64编码会把+/ 替换成 -_</span>
base64<span class="token punctuation">.</span>urlsafe_b64encode<span class="token punctuation">(</span><span class="token string">b&#39;i\\xcf\\xbf&#39;</span><span class="token punctuation">)</span>
<span class="token comment">## b&#39;ac-_&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参考: https://zhuanlan.zhihu.com/p/339477329 https://base64.guru/learn/base64-characters https://zhuanlan.zhihu.com/p/113483856</p>`,28),n=[s];function i(c,o){return d(),a("div",null,n)}const p=t(r,[["render",i],["__file","base64.html.vue"]]);export{p as default};