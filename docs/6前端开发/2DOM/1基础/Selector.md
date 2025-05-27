# Selector


## 类型选择器
选择某一类element

语法|表示|例子
--|--|--
`*`|any element|`*#myid`等价`#myid`, 后面的写法就是常说的CSS选择器
`E`|类型为E的element|`h1`, 就是`<h1>`标签, CSS选择器中一般不带


## 属性选择器
根据element的attribute来选择
语法|表示|例子
--|--|--
`E.warning`|class为`warning`|
`E#myid`|id为`myid`|
`E[foo]`|含有`foo`属性|
`E[foo="bar"]`|`foo`属性为`bar`|
`E[foo="bar" i]`|大小写不敏感|
`E[foo="bar" s]`|大小写敏感|
`E[foo~="bar"]`|`foo`属性包含空格, 按空格分割后包含`bar`|
`E[foo^="bar"]`|`foo`属性以`bar`开头|
`E[foo$="bar"]`|`foo`属性以`bar`结尾|
`E[foo*="bar"]`|`foo`属性包含`bar`|
`E[foo|="en"]`|不理解|
`span[hello="Cleveland"][goodbye="Columbus"]`多个属性条件的写法


## tree
根据DOM Tree结构来选择

语法|表示|例子
--|--|--
`F E`|E是F的后代,孩子,孙子都可|`h1 em` `<h1>`标签下的`<em>`标签, `<em>`可能是子, 也可能是孙
`F > E`|E是F的孩子|`body > p`
`F + E`|E在F后面, 紧随|
`F ~ E`|E在F后面, 任意位置|
`E:first-child`|第一个孩子|`div > p:first-child`, `<div>`下面的第一个`<p>`
`E:last-child`|最后一个孩子|
`E:only-child`|只有一个孩子|
`E:nth-child(n [of S]?)`|选择指定位位置的子元素|`:nth-child(even)`偶数,`:nth-child(10n-1)`9,19等等
`E:nth-last-child(n [of S]?)`|和上面的相反|


## 逻辑选择器
判断是否是某一类型
语法|表示|例子
--|--|--
`E:not(s1,s2,...)`|排除`s1`,`s2`选择器标签|`*:not(div, .fancy)`除了`div`和样式为`.fancy`的所有标签
`E:is(s1, s2, …)`|是`s1`,`s2`的选择器标签|[参考](https://www.cnblogs.com/bfgis/p/11928807.html)
`E:where(s1, s2, …)`||[参考](https://www.jiangweishan.com/article/htmlcss20220904.html)
`E:has(rs1, rs2, …)`||[参考](https://www.jiangweishan.com/article/htmlcss20220904.html)



## 其他
还有其他不常用的, 需要时查找[官网](https://drafts.csswg.org/selectors/)

