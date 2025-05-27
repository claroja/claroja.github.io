# matcher

类似于正则表达式, 可以添加pos,dep和ner信息.
例如, 我们希望获得三个相连的token:
1.  lowercase form matches “hello”, e.g. “Hello” or “HELLO”.
2. `is_punct` flag is set to True, i.e. any punctuation.
3. lowercase form matches “world”, e.g. “World” or “WORLD”.
```json
[{"LOWER": "hello"}, {"IS_PUNCT": True}, {"LOWER": "world"}]
```
注意, 列表中的每个字典代表一个token, 如果任何一个字典没有匹配到, 都不会有返回的结果.

```python
import spacy
from spacy.matcher import Matcher

nlp = spacy.load("en_core_web_sm")
matcher = Matcher(nlp.vocab)
## Add match ID "HelloWorld" with no callback and one pattern
pattern = [{"LOWER": "hello"}, {"IS_PUNCT": True}, {"LOWER": "world"}]
matcher.add("HelloWorld", [pattern])

doc = nlp("Hello, world! Hello world!")
matches = matcher(doc)
for match_id, start, end in matches:
    string_id = nlp.vocab.strings[match_id]  # Get string representation
    span = doc[start:end]  # The matched span
    print(match_id, string_id, start, end, span.text)
```
`matcher(doc)`返回`[(match_id, start, end)]`元组列表, 在这个例子中是`[('15578876784678163569', 0, 3)]`. 
1. `match_id`是String ID(`HelloWord`)的哈希值, 可以在`nlp.vocab.strings`中索引到字符串.
2. `start`&`end`: 通过`doc[start, end]`(`doc[0,3]`)可以获得匹配的结果.




https://spacy.io/usage/rule-based-matching
https://spacy.io/api/matcher