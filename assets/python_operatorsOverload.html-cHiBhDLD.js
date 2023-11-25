import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as d,c as r,d as s}from"./app-j3zK2x6_.js";const h={},e=s('<h1 id="operatorsoverload" tabindex="-1"><a class="header-anchor" href="#operatorsoverload" aria-hidden="true">#</a> operatorsOverload</h1><p>名词解释： rhs(right hand side)</p><h2 id="_1-算术运算符重载" tabindex="-1"><a class="header-anchor" href="#_1-算术运算符重载" aria-hidden="true">#</a> 1.算术运算符重载</h2><p>左侧为自定义类型时,右侧为内建类型进行算术运算</p><table><thead><tr><th>方法名</th><th>表达式</th><th>描述</th></tr></thead><tbody><tr><td><strong>add</strong>(self,rhs)</td><td>self + rhs</td><td>加法</td></tr><tr><td><strong>sub</strong>(self,rhs)</td><td>self - rhs</td><td>减法</td></tr><tr><td><strong>mul</strong>(self,rhs)</td><td>self * rhs</td><td>乘法</td></tr><tr><td><strong>truediv</strong>(self,rhs)</td><td>self / rhs</td><td>除法</td></tr><tr><td><strong>floordiv</strong>(self,rhs)</td><td>self //rhs</td><td>地板除</td></tr><tr><td><strong>mod</strong>(self,rhs)</td><td>self % rhs</td><td>取模(求余)</td></tr><tr><td><strong>pow</strong>(self,rhs)</td><td>self **rhs</td><td>幂运算</td></tr></tbody></table><h2 id="_2-反向运算符" tabindex="-1"><a class="header-anchor" href="#_2-反向运算符" aria-hidden="true">#</a> 2.反向运算符</h2><p>左侧为内建类型时,右侧为自定义类型进行算术运算</p><table><thead><tr><th>方法名</th><th>表达式</th><th>描述</th></tr></thead><tbody><tr><td><strong>radd</strong>(self,lhs)</td><td>lhs + self</td><td>加法</td></tr><tr><td><strong>rsub</strong>(self,lhs)</td><td>lhs - self</td><td>减法</td></tr><tr><td><strong>rmul</strong>(self,lhs)</td><td>lhs * self</td><td>乘法</td></tr><tr><td><strong>rtruediv</strong>(self,lhs)</td><td>lhs / self</td><td>除法</td></tr><tr><td><strong>rfloordiv</strong>(self,lhs)</td><td>lhs // self</td><td>地板除</td></tr><tr><td><strong>rmod</strong>(self,lhs)</td><td>lhs % self</td><td>取模(求余)</td></tr><tr><td><strong>rpow</strong>(self,lhs)</td><td>lhs ** self</td><td>幂运算</td></tr></tbody></table><h2 id="_3-复合赋值运算符" tabindex="-1"><a class="header-anchor" href="#_3-复合赋值运算符" aria-hidden="true">#</a> 3.复合赋值运算符</h2><p>以复合赋值算术运算符 x += y为例,此运算符会优先调用x.<strong>iadd</strong>(y)方法,如果没有__iadd__方法时,则会将复合赋值算术运 算拆解为:x = x + y 然后调用x = x.<strong>add</strong>(y)方法,如果再不存在__add__方法则会触发TypeError类型的错误异常</p><table><thead><tr><th>方法名</th><th>表达式</th><th>描述</th></tr></thead><tbody><tr><td><strong>iadd</strong>(self,rhs)</td><td>self += rh</td><td>加法</td></tr><tr><td><strong>isub</strong>(self,rhs)</td><td>self -= rh</td><td>减法</td></tr><tr><td><strong>imul</strong>(self,rhs)</td><td>self *= rh</td><td>乘法</td></tr><tr><td><strong>itruediv</strong>(self,rhs)</td><td>self /= rh</td><td>除法</td></tr><tr><td><strong>ifloordiv</strong>(self,rhs)</td><td>self //=rh</td><td>地板除</td></tr><tr><td><strong>imod</strong>(self,rhs)</td><td>self %= rh</td><td>取模(求余)</td></tr><tr><td><strong>ipow</strong>(self,rhs)</td><td>self **=rh</td><td>幂运算</td></tr></tbody></table><h2 id="_4-比较运算符重载" tabindex="-1"><a class="header-anchor" href="#_4-比较运算符重载" aria-hidden="true">#</a> 4.比较运算符重载</h2><table><thead><tr><th>方法名</th><th>表达式</th><th>描述</th></tr></thead><tbody><tr><td><strong>lt</strong>(self,rhs)</td><td>self &lt; rhs</td><td>小于</td></tr><tr><td><strong>le</strong>(self,rhs)</td><td>self &lt;= rhs</td><td>小于等于</td></tr><tr><td><strong>gt</strong>(self,rhs)</td><td>self &gt; rhs</td><td>大于</td></tr><tr><td><strong>ge</strong>(self,rhs)</td><td>self &gt;= rhs</td><td>大于等于</td></tr><tr><td><strong>eq</strong>(self,rhs)</td><td>self == rhs</td><td>等于</td></tr><tr><td><strong>ne</strong>(self,rhs)</td><td>self != rhs</td><td>不等于</td></tr></tbody></table><h2 id="_5-位运算符" tabindex="-1"><a class="header-anchor" href="#_5-位运算符" aria-hidden="true">#</a> 5.位运算符</h2><table><thead><tr><th>方法名</th><th>表达式</th><th>描述</th></tr></thead><tbody><tr><td><strong>and</strong>(self,rhs)</td><td>self &amp; rhs</td><td>位与</td></tr><tr><td><strong>or</strong>(self,rhs)</td><td>self</td><td>rhs</td></tr><tr><td><strong>xor</strong>(self,rhs)</td><td>self ^ rhs</td><td>位异或</td></tr><tr><td><strong>lshift</strong>(self,rhs)</td><td>self &lt;&lt;rhs</td><td>左移</td></tr><tr><td><strong>rshift</strong>(self,rhs)</td><td>self &gt;&gt;rhs</td><td>右移</td></tr></tbody></table><h2 id="_6-反向位运算符" tabindex="-1"><a class="header-anchor" href="#_6-反向位运算符" aria-hidden="true">#</a> 6.反向位运算符</h2><table><thead><tr><th>方法名</th><th>表达式</th><th>描述</th></tr></thead><tbody><tr><td><strong>and</strong>(self,lhs)</td><td>lhs &amp; rhs</td><td>位与</td></tr><tr><td><strong>or</strong>(self,lhs)</td><td>lhs</td><td>rhs</td></tr><tr><td><strong>xor</strong>(self,lhs)</td><td>lhs ^ rhs</td><td>位异或</td></tr><tr><td><strong>lshift</strong>(self,lhs)</td><td>lhs &lt;&lt;rhs</td><td>左移</td></tr><tr><td><strong>rshift</strong>(self,lhs)</td><td>lhs &gt;&gt;rhs</td><td>右移</td></tr></tbody></table><h2 id="_7-一元运算符" tabindex="-1"><a class="header-anchor" href="#_7-一元运算符" aria-hidden="true">#</a> 7.一元运算符</h2><table><thead><tr><th>方法名</th><th>表达式</th><th>描述</th></tr></thead><tbody><tr><td><strong>neg</strong>(self)</td><td>- self</td><td>负号</td></tr><tr><td><strong>pos</strong>(self)</td><td>+ self</td><td>正号</td></tr><tr><td><strong>invert</strong>(self)</td><td>~ self</td><td>取反</td></tr></tbody></table><h2 id="_8-in-not-in-运算符" tabindex="-1"><a class="header-anchor" href="#_8-in-not-in-运算符" aria-hidden="true">#</a> 8.in/not in 运算符</h2><table><thead><tr><th>方法名</th><th>表达式</th><th>描述</th></tr></thead><tbody><tr><td><strong>contains</strong></td><td>in / not in</td><td></td></tr></tbody></table><p>参考： https://blog.csdn.net/zhangshuaijun123/article/details/82149056</p>',22),o=[e];function l(n,a){return d(),r("div",null,o)}const i=t(h,[["render",l],["__file","python_operatorsOverload.html.vue"]]);export{i as default};