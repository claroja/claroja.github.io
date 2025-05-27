## 引入BeautifulSoup
```python
from bs4 import BeautifulSoup
```

## 搜索文档树

### find_all()
`find_all( name , attrs , recursive , string , **kwargs )`
find_all() 方法搜索当前tag的所有tag子节点,并判断是否符合过滤器的条件.这里有几个例子:

```py
soup.find_all("a") # 获得所有name为a的标签

## [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
##  <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>,
##  <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]

soup.find_all("p", class_= "title")  # 获取所有`class`为`title`的`p`标签
## [<p class="title"><b>The Dormouse's story</b></p>]
soup.find_all(attrs={'class':'primaryconsumers'}) # .通用属性获取方法`attrs`

soup.find_all(id="link2") # 获取所有`id`=`link2`的标签, 因为id是唯一的所以不需要指定标签名name
## [<a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>]

import re
soup.find_all(href=re.compile("elsie"))  # 获得`href`包含`elsie`的元素
## [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>]


soup.find(string=re.compile("sisters"))  # 内容包含sisters的
## u'Once upon a time there were three little sisters; and their names were\n'
```

#### name 参数
name 参数可以查找所有名字为 name 的tag,字符串对象会被自动忽略掉.
```py
soup.find_all("title")
## [<title>The Dormouse's story</title>]
```
#### keyword 参数
如果一个指定名字的参数不是搜索内置的参数名,搜索时会把该参数当作指定名字tag的属性来搜索,如果包含一个名字为 id 的参数,Beautiful Soup会搜索每个tag的”id”属性.

```py
soup.find_all(id='link2')
## [<a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>]
```
如果传入 href 参数,Beautiful Soup会搜索每个tag的”href”属性:

```py
soup.find_all(href=re.compile("elsie"))
## [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>]
```
使用多个指定名字的参数可以同时过滤tag的多个属性:

```py
soup.find_all(href=re.compile("elsie"), id='link1')
## [<a class="sister" href="http://example.com/elsie" id="link1">three</a>]
```

#### 按CSS搜索
按照CSS类名搜索tag的功能非常实用,但标识CSS类名的关键字 class 在Python中是保留字,使用 class 做参数会导致语法错误.从Beautiful Soup的4.1.1版本开始,可以通过 class_ 参数搜索有指定CSS类名的tag:

```py
soup.find_all("a", class_="sister")
## [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
##  <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>,
##  <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]
```

#### string 参数
通过 string 参数可以搜搜文档中的字符串内容.与 name 参数的可选值一样, string 参数接受 字符串 , 正则表达式 , 列表, True . 看例子:

```py
soup.find_all(string="Elsie")
## [u'Elsie']

soup.find_all(string=["Tillie", "Elsie", "Lacie"])
## [u'Elsie', u'Lacie', u'Tillie']

soup.find_all(string=re.compile("Dormouse"))
[u"The Dormouse's story", u"The Dormouse's story"]

def is_the_only_string_within_a_tag(s):
    ""Return True if this string is the only child of its parent tag.""
    return (s == s.parent.string)

soup.find_all(string=is_the_only_string_within_a_tag)
## [u"The Dormouse's story", u"The Dormouse's story", u'Elsie', u'Lacie', u'Tillie', u'...']
```

#### limit 参数
find_all() 方法返回全部的搜索结构,如果文档树很大那么搜索会很慢.如果我们不需要全部结果,可以使用 limit 参数限制返回结果的数量.效果与SQL中的limit关键字类似,当搜索到的结果数量达到 limit 的限制时,就停止搜索返回结果.

#### recursive 参数
调用tag的 find_all() 方法时,Beautiful Soup会检索当前tag的所有子孙节点,如果只想搜索tag的直接子节点,可以使用参数 recursive=False .

### find()
使用 find_all 方法并设置 limit=1 参数不如直接使用 find() 方法.

### find_parents() 和 find_parent()

```py
find_parents( name , attrs , recursive , string , **kwargs )
find_parent( name , attrs , recursive , string , **kwargs )
```

我们已经用了很大篇幅来介绍 find_all() 和 find() 方法,Beautiful Soup中还有10个用于搜索的API.它们中的五个用的是与 find_all() 相同的搜索参数,另外5个与 find() 方法的搜索参数类似.区别仅是它们搜索文档的不同部分.

记住: find_all() 和 find() 只搜索当前节点的所有子节点,孙子节点等. find_parents() 和 find_parent() 用来搜索当前节点的父辈节点,搜索方法与普通tag的搜索方法相同,搜索文档搜索文档包含的内容. 我们从一个文档中的一个叶子节点开始:

### find_next_siblings() 合 find_next_sibling()
find_next_siblings( name , attrs , recursive , string , **kwargs )

find_next_sibling( name , attrs , recursive , string , **kwargs )

这2个方法通过 .next_siblings 属性对当tag的所有后面解析 [5] 的兄弟tag节点进行迭代, find_next_siblings() 方法返回所有符合条件的后面的兄弟节点, find_next_sibling() 只返回符合条件的后面的第一个tag节点.


##find_previous_siblings() 和 find_previous_sibling()
find_previous_siblings( name , attrs , recursive , string , **kwargs )

find_previous_sibling( name , attrs , recursive , string , **kwargs )

这2个方法通过 .previous_siblings 属性对当前tag的前面解析 [5] 的兄弟tag节点进行迭代, find_previous_siblings() 方法返回所有符合条件的前面的兄弟节点, find_previous_sibling() 方法返回第一个符合条件的前面的兄弟节点:

###  find_all_next() 和 find_next()
find_all_next( name , attrs , recursive , string , **kwargs )

find_next( name , attrs , recursive , string , **kwargs )

这2个方法通过 .next_elements 属性对当前tag的之后的 [5] tag和字符串进行迭代, find_all_next() 方法返回所有符合条件的节点, find_next() 方法返回第一个符合条件的节点:


### find_all_previous() 和 find_previous()
find_all_previous( name , attrs , recursive , string , **kwargs )

find_previous( name , attrs , recursive , string , **kwargs )

这2个方法通过 .previous_elements 属性对当前节点前面 [5] 的tag和字符串进行迭代, find_all_previous() 方法返回所有符合条件的节点, find_previous() 方法返回第一个符合条件的节点.


## get_text()
如果只想得到tag中包含的文本内容,那么可以嗲用 get_text() 方法,这个方法获取到tag中包含的所有文版内容包括子孙tag中的内容,并将结果作为Unicode字符串返回:

```
markup = '<a href="http://example.com/">\nI linked to <i>example.com</i>\n</a>'
soup = BeautifulSoup(markup)

soup.get_text()
u'\nI linked to example.com\n'
soup.i.get_text()
u'example.com'
```


## 遍历文档树

```py
html_doc = """
<html><head><title>The Dormouse's story</title></head>
    <body>
<p class="title"><b>The Dormouse's story</b></p>

<p class="story">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1">Elsie</a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>

<p class="story">...</p>
"""
from bs4 import BeautifulSoup
soup = BeautifulSoup(html_doc, 'html.parser')
```



### 子节点获取
#### 获得特定标签的内容
<font style="background: hotpink">这样只能获取当前tag的第一个tag</font>

```py
soup.head
## <head><title>The Dormouse's story</title></head>

soup.title
## <title>The Dormouse's story</title>

soup.body.b
## <b>The Dormouse's story</b>
```

可以通过`find_all()`方法来获得所有标签
```py
soup.find_all('a')
## [<a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>,
##  <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>,
##  <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>]
```


#### `.contents` 和 `.children`
tag的 `.contents` 属性可以将tag的子节点以列表的方式输出:

```py
head_tag = soup.head
head_tag
## <head><title>The Dormouse's story</title></head>

head_tag.contents
## [<title>The Dormouse's story</title>]#获得下一级标签和内容

title_tag = head_tag.contents[0]
title_tag
## <title>The Dormouse's story</title>
title_tag.contents
## [u'The Dormouse's story'] #获得内容
```

通过tag的`.children`生成器,可以对tag的子节点进行循环:
```
for child in title_tag.children:
    print(child)
    # The Dormouse's story
```

#### .descendants
`.descendants` 属性可以对所有tag的子孙节点进行递归循环 [5] :

```py
for child in head_tag.descendants:
    print(child)
    # <title>The Dormouse's story</title>
    # The Dormouse's story
```

上面的例子中, `<head>`标签只有一个子节点,但是有2个子孙节点:`<head>`节点和`<head>`的子节点, BeautifulSoup 有一个直接子节点(`<html>`节点),却有很多子孙节点:

```py
len(list(soup.children))
## 1
len(list(soup.descendants))
## 25
```

#### .string
如果tag只有一个 NavigableString 类型子节点,那么这个tag可以使用 .string 得到子节点:

```py
title_tag.string
## u'The Dormouse's story'
```

如果一个tag仅有一个子节点,那么这个tag也可以使用 .string 方法,输出结果与当前唯一子节点的 .string 结果相同:

```py
head_tag.contents
## [<title>The Dormouse's story</title>]

head_tag.string
## u'The Dormouse's story'
```

#### .strings 和 stripped_strings
如果tag中包含多个字符串 [2] ,可以使用 .strings 来循环获取:

```py
for string in soup.strings:
    print(repr(string))
    # u"The Dormouse's story"
    # u'\n\n'
    # u"The Dormouse's story"
    # u'\n\n'
    # u'Once upon a time there were three little sisters; and their names were\n'
    # u'Elsie'
    # u',\n'
    # u'Lacie'
    # u' and\n'
    # u'Tillie'
    # u';\nand they lived at the bottom of a well.'
    # u'\n\n'
    # u'...'
    # u'\n'
```

### 父节点
#### .parent.
通过 .parent 属性来获取某个元素的父节点.在例子“爱丽丝”的文档中,`<head>`标签是`<title>`标签的父节点:

```py
title_tag = soup.title
title_tag
## <title>The Dormouse's story</title>
title_tag.parent
## <head><title>The Dormouse's story</title></head>
```
文档title的字符串也有父节点:`<title>`标签

```py
title_tag.string.parent
## <title>The Dormouse's story</title>
```

#### .parents

通过元素的 .parents 属性可以递归得到元素的所有父辈节点,下面的例子使用了 .parents 方法遍历了`<a>`标签到根节点的所有节点.

```py
link = soup.a
link
## <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>
for parent in link.parents:
    if parent is None:
        print(parent)
    else:
        print(parent.name)
## p
## body
## html
## [document]
## None
```

### 兄弟节点

#### .next_sibling 和 .previous_sibling
在文档树中,使用 .next_sibling 和 .previous_sibling 属性来查询兄弟节点:

```py
sibling_soup.b.next_sibling
## <c>text2</c>

sibling_soup.c.previous_sibling
## <b>text1</b>
```
#### .next_siblings 和 .previous_siblings
通过 .next_siblings 和 .previous_siblings 属性可以对当前节点的兄弟节点迭代输出:

```py
for sibling in soup.a.next_siblings:
    print(repr(sibling))
    # u',\n'
    # <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>
    # u' and\n'
    # <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>
    # u'; and they lived at the bottom of a well.'
    # None

for sibling in soup.find(id="link3").previous_siblings:
    print(repr(sibling))
    # ' and\n'
    # <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>
    # u',\n'
    # <a class="sister" href="http://example.com/elsie" id="link1">Elsie</a>
    # u'Once upon a time there were three little sisters; and their names were\n'
    # None
```

### 回退和前进


```py
<html><head><title>The Dormouse's story</title></head>
<p class="title"><b>The Dormouse's story</b></p>
```
HTML解析器把这段字符串转换成一连串的事件: “打开html标签”,”打开一个head标签”,”打开一个title标签”,”添加一段字符串”,”关闭title标签”,”打开p标签”,等等.Beautiful Soup提供了重现解析器初始化过程的方法.

#### .next_element 和 .previous_element
.next_element 属性指向解析过程中下一个被解析的对象(字符串或tag),结果可能与 .next_sibling 相同,但通常是不一样的.
这是“爱丽丝”文档中最后一个a标签,它的 .next_sibling 结果是一个字符串,因为当前的解析过程 [2] 因为当前的解析过程因为遇到了a标签而中断了:
```py
last_a_tag = soup.find("a", id="link3")
last_a_tag
## <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>

last_a_tag.next_sibling
## '; and they lived at the bottom of a well.'
```

#### .next_elements 和 .previous_elements
通过 .next_elements 和 .previous_elements 的迭代器就可以向前或向后访问文档的解析内容,就好像文档正在被解析一样:

```py
for element in last_a_tag.next_elements:
    print(repr(element))
## u'Tillie'
## u';\nand they lived at the bottom of a well.'
## u'\n\n'
## <p class="story">...</p>
## u'...'
## u'\n'
## None
```

## BeautifulSoup中的类
### BeautifulSoup类
#### 构建BeautifulSoup对象
```python
soup = BeautifulSoup("<html>data</html>")
```
#### 属性
可以吧BeautifulSoup对象当成一个Tag对象, 对应了整个`DOM`
```python
soup.name
## u'[document]'
```

### Tag类
#### 构建Tag对象
在`DOM`中获得子标签
```py
soup = BeautifulSoup('<b class="boldest">Extremely bold</b>')
tag = soup.b
type(tag)
## <class 'bs4.element.Tag'>
```

#### Tag属性

##### Name
其实就是标签的名字
```py
tag.name
## u'b'
```
##### Attributes
这里可以获得属性的值，在获得href类似标签的时候特别有用
一个tag可能有很多个属性. tag `<b class="boldest">` 有一个 “class” 的属性,值为 “boldest”. 
```py
tag.attrs
## {u'class': u'boldest'}
```
也可以获得指定的属性值:

```py
tag['class']
## u'boldest'
```
可能属性值是多个,则返回列表

```py
css_soup = BeautifulSoup('<p class="body strikeout"></p>')
css_soup.p['class']
## ["body", "strikeout"]
```


### NavigableString 类
NavigableString 对象支持 遍历文档树 和 搜索文档树 中定义的大部分属性, 并非全部.尤其是,一个字符串不能包含其它内容(tag能够包含字符串或是其它tag),字符串不支持 .contents 或 .string 属性或 find() 方法.
#### 构建NavigableString对象
```py
tag.string
## u'Extremely bold'
type(tag.string)
## <class 'bs4.element.NavigableString'>
```
NavigableString不可以直接编辑,可以通过replace_with来替换

```py
tag.string.replace_with("No longer bold")
tag
## <blockquote>No longer bold</blockquote>
```
可以将NavigableString转换为unicode字符串

```py
unicode_string = unicode(tag.string)
unicode_string
## u'Extremely bold'
type(unicode_string)
## <type 'unicode'>
```
#### Comment
Comment 对象是一个特殊类型的 NavigableString 对象:
```py
markup = "<b><!--Hey, buddy. Want to buy a used parser</b>"
soup = BeautifulSoup(markup)
comment = soup.b.string
type(comment)
## <class 'bs4.element.Comment'>
comment
## u'Hey, buddy. Want to buy a used parser'
```
CData , ProcessingInstruction , Declaration , Doctype .与 Comment 对象类似,这些类都是 NavigableString 的子类,只是添加了一些额外的方法的字符串独享.




## 其他

### CSS选择器
在 Tag 或 BeautifulSoup 对象的 .select() 方法中传入字符串参数, 即可使用CSS选择器的语法找到tag:

参考文献:
http://beautifulsoup.readthedocs.io/zh_CN/latest/