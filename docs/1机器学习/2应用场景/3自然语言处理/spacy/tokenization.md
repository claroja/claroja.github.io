# tokenization

将一句话分割成有语义的小片段token


```python
import spacy

nlp = spacy.load("en_core_web_sm")
doc = nlp("Apple is looking at buying U.K. startup for $1 billion")
for token in doc:
    print(token.text)
````


参考:
https://spacy.io/usage/linguistic-features#tokenization