# dep


## Syntactic dependency relation
语法依存关系: 可以获得句子中每个词语和其他词语之间的关系

https://spacy.io/usage/linguistic-features#dependency-parse
https://spacy.io/api/annotation#dependency-parsing
https://universaldependencies.org/u/dep/


## code

```python
import spacy
from spacy.matcher import Matcher 
nlp = spacy.load('en_core_web_sm')
doc = nlp("The 22-year-old recently won ATP Challenger tournament.")
for tok in doc:
    print(tok.text, ">", tok.dep_) # 查看每个单词的词性
```

`dep_`: 是字符型的依存关系表示
`dep`: 是数字型依存关系的表示
https://spacy.io/api/token/#attributes


## Noun chunks
```python
import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("Autonomous cars shift insurance liability toward manufacturers")
for chunk in doc.noun_chunks:
    print(chunk.text, chunk.root.text, chunk.root.dep_,
            chunk.root.head.text)
```



TEXT|ROOT.TEXT|ROOT.DEP_|ROOT.HEAD.TEXT
--|--|--|--
Autonomous cars|cars|nsubj|shift
insurance liability|liability|dobj|shift
manufacturers|manufacturers|pobj|toward


### Navigating the parse tree
Spacy使用`head`和`child`并通过单项箭头来表示单词的链接.
```python
import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("Autonomous cars shift insurance liability toward manufacturers")
for token in doc:
    print(token.text, token.dep_, token.head.text, token.head.pos_,
            [child for child in token.children])
```

TEXT|DEP|HEAD TEXT|HEAD POS|CHILDREN
--|--|--|--|--
Autonomous|amod|cars|NOUN|
cars|nsubj|shift|VERB|Autonomous
shift|ROOT|shift|VERB|cars, liability, toward
insurance|compound|liability|NOUN|
liability|dobj|shift|VERB|insurance
toward|prep|shift|NOUN|manufacturers
manufacturers|pobj|toward|ADP|

[](./dep/1.png)


## scheme

### compound

####  noun compounds(compound)
名词复合
比如`phone book`, 中的`phone`是`book`的复合词
比如`ice cream flavors`, 中的`ice`, `cream`是`flavors`的复合词
比如`3 million dollar loan`, 中的`dollar`是`loan`的复合词
#### particle verbs (with the subtype compound:prt):
动词复合
比如`put up`
#### for serial verbs (with the subtype compound:svc)
...
https://universaldependencies.org/u/dep/compound.html


### adjectival modifier(amod)
形容词修饰
比如`Sam eats large hot dogs`中, `large`和`hot`都是`dogs`的`amod`
比如`There is nothing wrong with it`中, `nothing`是`wrong`的`amod`

https://universaldependencies.org/u/dep/amod.html

### adverbial modifier(advmod)
副词修饰
比如`Genetically modified food`中, `Genetically`是`modified`的`advmod`
比如`less often`中, `less`是`often`的`advmod`
https://universaldependencies.org/u/dep/advmod.html

### nominal modifier(nmod)
名词修饰
比如`the office of the chair`中的`chair`是`office`的`nmod`
比如`the chair's office`中的`chair`是`office`的`nmod`
https://universaldependencies.org/u/dep/nmod.html

### numeric modifier(nummod)
量词修饰
比如`Sam ate 3 sheep`中的`3`是`sheep`的`nummod`
比如`Sam spent $ 40`中的`40`是`$`的`numod`
https://universaldependencies.org/u/dep/nummod.html

### clausal subject(csubj)
从句主语
比如`What she said makes sence`中的`what she said`是`makes`的主语从句
比如`What she said is interesting`中的`what she said`是`interesting`的主
https://universaldependencies.org/u/dep/csubj.html


### nominal subject(nsubj)
名词主语
比如`Clinton defeated Dole`中的`Clinton`是`defeated`的`nsubj`
比如`the car is red`中的`car`是`red`的`nsubj`


### object(obj)
宾语
比如`She gave me a raise`中的`raise`是`gave`的`obj`


https://universaldependencies.org/u/dep/obj.html


### indirect object(iobj)
直接宾语
比如`She gave me a raise`中的`me`是`gave`的`iobj`
https://universaldependencies.org/u/dep/iobj.html



### determiner(det)
限定词
比如`the man is here`中的`the`是`man`的`det`
比如`which book do you prefer`中的`which`是`book`的`det`



