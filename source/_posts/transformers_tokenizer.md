transformers_tokenizer


# NLP
## Tokenize
tokenizer是将自然语言处理成模型能都理解的格式.

1. 首先tokenizer将句子分割成词语(token), 每一个模型都有不同的分割算法, 可[参考官网](https://huggingface.co/docs/transformers/tokenizer_summary). 所以tokenizer要和model保持一致
2. 然后tokenizer会将词语转换为数字, 做成模型需要的`tensor`

```python
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
encoded_input = tokenizer("Do not meddle in the affairs of wizards, for they are subtle and quick to anger.")
# {'input_ids': [101, 2079, 2025, 19960, 10362, 1999, 1996, 3821, 1997, 16657, 1010, 2005, 2027, 2024, 11259, 1998, 4248, 2000, 4963, 1012, 102], 
#  'token_type_ids': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
#  'attention_mask': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
```

返回值的解释, 可[参考官网](https://huggingface.co/docs/transformers/preprocessing)

- input_ids: 词汇表中的索引
- token_type_ids: 当有多个句子时, 表示所在的句子的编号
- atttention_mask: 哪些词语需要attention

也可以通过`decode`方法将编码的句子复原

```python
tokenizer.decode(encoded_input["input_ids"])
# '[CLS] Do not meddle in the affairs of wizards, for they are subtle and quick to anger. [SEP]'
```
返回值包含了CLS and SEP (classifier and separator), 并不是所有的模型都需要, 如果模型需要会自动添加.


## pad

## truncation

## build-tensors





# audio

参考文献:
https://huggingface.co/docs/transformers/preprocessing