# w2v




## 获得vector
```python
import spacy

nlp = spacy.load("en_core_web_md")
tokens = nlp("dog cat banana afskfsd")

for token in tokens:
    print(token.text, token.has_vector, token.vector_norm, token.is_oov)


## dog True 75.254234 False
## cat True 63.188496 False
## banana True 31.620354 False
## afskfsd False 0.0 True
```
`dog`, `cat`和`banana`都是英语中的常用词, 所以在词汇表中, 具有向量表示. 而`afskfsd`不是常用词, 不在词汇表中, 所以使用300维的0来表示.

## 相似度比较
每个`Doc`, `Span`, `Token`和`Lexeme`都具有`.similarity`方法, 可以用来和其他对象比较相似度.

```python
import spacy

nlp = spacy.load("en_core_web_md")  # make sure to use larger package!
doc1 = nlp("I like salty fries and hamburgers.")
doc2 = nlp("Fast food tastes very good.")

## Similarity of two documents
print(doc1, "<->", doc2, doc1.similarity(doc2))
## Similarity of tokens and spans
french_fries = doc1[2:4]
burgers = doc1[5]
print(french_fries, "<->", burgers, french_fries.similarity(burgers))

## I like salty fries and hamburgers. <-> Fast food tastes very good. 0.691649353055761
## salty fries <-> hamburgers 0.6938489675521851

```

参考:
https://spacy.io/usage/linguistic-features#vectors-similarity