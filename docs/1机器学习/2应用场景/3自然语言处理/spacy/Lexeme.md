# Lexeme

词位lexeme
比如eats，eating，ate，eaten，这四个词虽然词形不同，但是它们都是eat的屈折变体，因此，eat就是这四个词的词位lexeme。在词典中，这些词都被收录在eat（词位）这个词条下。

形态学(Morphology)是指单词通过增加前缀和后缀而改变了语法的作用, 但是并没有改变part-of-speech.
lemma(root form)通过一个或多个形态特征(morphological features)形成了新的单词.

CONTEXT|SURFACE|LEMMA|POS|MORPHOLOGICAL FEATURES
--|--|--|--|--
I was reading the paper|reading|read|VERB|VerbForm=Ger
I don’t watch the news, I read the paper|read|read|VERB|VerbForm=Fin, Mood=Ind, Tense=Pres
I read the paper yesterday|read|read|VERB|VerbForm=Fin, Mood=Ind, Tense=Past

形态特征存储在`Token.morph`下面的`MorphAnalysis`中:
```python
import spacy
nlp = spacy.load("en_core_web_sm")
print("Pipeline:", nlp.pipe_names)
doc = nlp("I was reading the paper.")
token = doc[0]  # 'I'
print(token.morph)  # 'Case=Nom|Number=Sing|Person=1|PronType=Prs'
print(token.morph.get("PronType"))  # ['Prs']

```


参考:
https://spacy.io/usage/linguistic-features#morphology