# ner

## 命名实体识别



```python
import spacy
​
nlp = spacy.load("en_core_web_sm")
doc = nlp("Apple is looking at buying U.K. startup for $1 billion")
​
for ent in doc.ents:
    print(ent.text, ent.start_char, ent.end_char, ent.label_)
```

TEXT|START|END|LABEL|DESCRIPTION
--|--|--|--|--
Apple|0|5|ORG|Companies, agencies, institutions.
U.K.|27|31|GPE|Geopolitical entity, i.e. countries, cities, states.
$1 billion|44|54|MONEY|Monetary values, including unit.

## 获得实体标签
```python
import spacy
​
nlp = spacy.load("en_core_web_sm")
doc = nlp("San Francisco considers banning sidewalk delivery robots")
​
## document level
ents = [(e.text, e.start_char, e.end_char, e.label_) for e in doc.ents]
print(ents)
​
## token level
ent_san = [doc[0].text, doc[0].ent_iob_, doc[0].ent_type_]
ent_francisco = [doc[1].text, doc[1].ent_iob_, doc[1].ent_type_]
print(ent_san)  # ['San', 'B', 'GPE']
print(ent_francisco)  # ['Francisco', 'I', 'GPE']
```
TEXT|ENT_IOB|ENT_IOB_|ENT_TYPE_|DESCRIPTION
--|--|--|--|--
San|3|B|"GPE"|beginning of an entity
Francisco|1|I|"GPE"|inside an entity
considers|2|O|""|outside an entity
banning|2|O|""|outside an entity
sidewalk|2|O|""|outside an entity
delivery|2|O|""|outside an entity
robots|2|O|""|outside an entity

字段说明:
B – Token is the beginning of a multi-token entity.
I – Token is inside a multi-token entity.
L – Token is the last token of a multi-token entity.
U – Token is a single-token unit entity.
O – Token is outside an entity.



https://spacy.io/usage/linguistic-features#named-entities
https://spacy.io/api/annotation#named-entities