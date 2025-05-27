# split

在`chrome`中可以直接复制`xpath`, 基本所有解析的包都支持`xpath`



## 1.概念

1）路径选择语法
1.斜杠
从根节点找`/`：
/html/head # 在根节点查询，只有绝对路径的body返回
在所有节点找`//`:
//head/title/text() # 在当前路径查询head，所有子节点都会返回，这里就不需要指定html了

2.点
相对位置`.`和`..`：
//body/.. # 先找到body再跳回html

3.`@`属性和
永远在末尾获得属性和文本

//head/link/@href #去link标签的href属性
4.`text()`文本
永远在末尾获得属性和文本
//head/title/text() # 取文本内容


2）节点修饰语法
1.通过索引修饰
/html/body/div[3] #选中第3个div,div[last()-1]表示选中最后一个；div[position(start,end)]区间选择
2.通过属性值修饰
/html/body/div[@id="wang"]

3.通过子节点修饰
span[i>200] # 获得所有span自己元素i的值大于200的span标签
4.包含
//div[contains(@id,"wa")] # 只要属性部分包含"wa"即可
//div[contains(text(),"wa")] # 只要内容部分包含"wa"即可


3）通配
//*[@id="wang] # 通配所有符合属性的标签

4）逻辑判断
//td/a|//h2/a # 或 //td/a 或 //h2/a


## 2.应用

```python

#coding:utf-8
from lxml import etree

text = ''' 
<div> 
    <ul> 
        <li class="item-1">
            <a href="link1.html">first item</a>
        </li> 
        <li class="item-1">
            <a href="link2.html">second item</a>
        </li> 
        <li class="item-inactive">
            <a href="link3.html">third item</a>
        </li> 
        <li class="item-1">
            <a href="link4.html">fourth item</a>
        </li> 
        <li class="item-0">
            <a href="link5.html">fifth item</a> 
    </ul> 
</div> '''

## 将html源码创建成element对象

html = etree.HTML(text)

## etree.HTML()能够自动补全html缺失的标签
print(etree.tostring(html))

## print(html)
## print(dir(html))

## print(html.xpath('//li[1]/a/text()'))
## print(html.xpath('//li[1]/a/@href'))

## text_list = html.xpath('//a/text()')
## link_list = html.xpath('//a/@href')
## print(text_list)
## print(link_list)
#
## for text,link in zip(text_list, link_list):
##     print(text,link)

## el_list = html.xpath('//a')
#
## for el in el_list:
##     # print(el.xpath('//text()')[0], el.xpath('//@href')[0])
##     print(el.xpath('./text()')[0], el.xpath('./@href')[0])
##     print(el.xpath('.//text()')[0], el.xpath('.//@href')[0])
##     # print(el.xpath('text()')[0], el.xpath('@href')[0])
```



## 3.API
XPath (XML Path Language) 是一门在 XML 文档中查找信息的语言，可用来在 XML 文档中对元素和属性进行遍历。
路径表达式
表达式|描述|示例|描述
-|-|-|-
tag|选取此节点所有子节点|div|选取div元素所有子节点
/|绝对路径,从根节点选取|/div|选取根节点下的div元素
//|相对路径,全局匹配|//div|选取页面所有div元素
.|选取当前节点||
..|选取当前节点的父节点||
@|选取属性|//div/@class|提取所有div元素的class属性


谓语
用来查找特定的节点
表达式|描述
-|-
//div[1]|选取第一个div元素
//div[last()]|选取最后一个div元素
//div[last()-1]|选取倒数第二个div元素
//div[position()<3]|选取前2个div元素
//div[@class]|选取具有class属性的div
//div[@class='title']|选取所有具有class=title属性的div元素
//div/[strong>35]|选取div元素里strong元素大于35的div元素

