# NLP

models can only process numbers, so we need to convert the raw text to numbers by using `tokenizer`.





## Tokenization

Tokenization include three steps, [Behind the pipeline](https://huggingface.co/course/chapter2/2?fw=pt)

- splitting the input into words, subwords, usually called `tokens`
- Mapping each token to an integer
- Adding additional inputs that may be useful to the model, eg:`attention_mask`

### splitting into tokens

#### word-based tokenizer

1. split sequence

    ```python
    "Jim Henson was a puppeteer".split()
    ['Jim', 'Henson', 'was', 'a', 'puppeteer']
    ```

2. get Id
Each word gets assigned an Id, starting from 0 and going up to the size of the vocabulary
unknown words
often represented as `[UNK] or ``.

#### Character-based tokenizers

split the text into characters, rather than words. this has two primary benefits:

1. the vocabulary is much smaller
2. less unknown tokens

but it's not perfect either:

1. it’s less meaningful: each character doesn’t mean a lot on its own
2. we’ll end up with a very large amount of tokens to be processed by our model

#### subword-tokenization

combines the `word-based tokenizer` and `Character-based tokenizers`

"Let’s do tokenization!"
“tokenization” was split into “token” and “ization”, two tokens that have a semantic meaning while being space-efficient (only two tokens are needed to represent a long word). 

### Mapping token to integer

```python
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
sequence = "Using a Transformer network is simple"
tokens = tokenizer.tokenize(sequence)
## ['Using', 'a', 'transform', '##er', 'network', 'is', 'simple']
```

`encoding()`: The conversion to input IDs is handled by the `convert_tokens_to_ids()` tokenizer method

```python
ids = tokenizer.convert_tokens_to_ids(tokens)
## [7993, 170, 11303, 1200, 2443, 1110, 3014]
```

`decode()` is going the other way around: from vocabulary indices, we want to get a string. 

```python
decoded_string = tokenizer.decode([7993, 170, 11303, 1200, 2443, 1110, 3014])
## 'Using a Transformer network is simple'
```
decode method not only converts the indices back to tokens, but also groups together the tokens that were part of the same words to produce a readable sentence.




### Adding additional inputs

eg: attention mask, see details in next section.


## use tokenizer

### padding

#### why padding

The following list of lists cannot be converted to a tensor:

```python
batched_ids = [
    [200, 200, 200],
    [200, 200]
]
```

In order to work around this, we’ll use padding to make our tensors have a `rectangular shape` by adding a special word called the `padding token` to the sentences with fewer values. For example, if you have 10 sentences with 10 words and 1 sentence with 20 words, padding will ensure all the sentences have 20 words.

```python
padding_id = 100

batched_ids = [
    [200, 200, 200],
    [200, 200, padding_id],
]
```

Let’s use it and send our two sentences through the model individually and batched together:

```python
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)

sequence1_ids = [[200, 200, 200]]
sequence2_ids = [[200, 200]]
batched_ids = [
    [200, 200, 200],
    [200, 200, tokenizer.pad_token_id],
]

print(model(torch.tensor(sequence1_ids)).logits)
print(model(torch.tensor(sequence2_ids)).logits)
print(model(torch.tensor(batched_ids)).logits)

## tensor([[ 1.5694, -1.3895]], grad_fn=<AddmmBackward>)
## tensor([[ 0.5803, -0.4125]], grad_fn=<AddmmBackward>)
## tensor([[ 1.5694, -1.3895],
##         [ 1.3373, -1.2163]], grad_fn=<AddmmBackward>)
```

the second row should be the same as the logits for the second sentence, but we’ve got completely different values!
Because these will take into account the padding tokens since they attend to all of the tokens of a sequence. we need to tell those attention layers to ignore the padding tokens. This is done by using an `attention mask`.


#### attention mask
`attention mask` are tensors with the exact same shape as the input IDs tensor, filled with 0s and 1s: 1s indicate the corresponding tokens should be attended to, and 0s indicate the corresponding tokens should not be attended to.

```python
batched_ids = [
    [200, 200, 200],
    [200, 200, tokenizer.pad_token_id],
]

attention_mask = [
    [1, 1, 1],
    [1, 1, 0],
]

outputs = model(torch.tensor(batched_ids), attention_mask=torch.tensor(attention_mask))
print(outputs.logits)
## tensor([[ 1.5694, -1.3895],
##         [ 0.5803, -0.4125]], grad_fn=<AddmmBackward>)
```

#### application

we can get the model suggesting `max_length` by `self.tokenizer.max_model_input_sizes` 


```python
from transformers import AutoTokenizer

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)

sequence = "I've been waiting for a HuggingFace course my whole life."

model_inputs = tokenizer(sequence)
```

`model_inputs` contains everything that’s necessary for a model to operate well. For `DistilBERT`, that includes the `input IDs` as well as the `attention mask`. Other models that accept additional inputs will also have those output by the tokenizer object.

```python
## one sequences
sequence = "I've been waiting for a HuggingFace course my whole life."
model_inputs = tokenizer(sequence)

## multiple sequences
sequences = ["I've been waiting for a HuggingFace course my whole life.", "So have I!"]
model_inputs = tokenizer(sequences)

## Will pad the sequences up to the maximum sequence length, equal to padding="true"
model_inputs = tokenizer(sequences, padding="longest")

## Will pad the sequences up to the model max length
## (512 for BERT or DistilBERT)
model_inputs = tokenizer(sequences, padding="max_length")

## Will pad the sequences up to the specified max length
model_inputs = tokenizer(sequences, padding="max_length", max_length=8)
```

### truncation
`truncation=True` 是按`max_length`参数来确定的, 而在`padding`中则是`padding='max_length'`
we can get the model suggesting `max_length` by `self.tokenizer.max_model_input_sizes`.

```python
## Will truncate the sequences that are longer than the model max length
## (512 for BERT or DistilBERT)
model_inputs = tokenizer(sequences, truncation=True)

## Will truncate the sequences that are longer than the specified max length
model_inputs = tokenizer(sequences, max_length=8, truncation=True)
```

### return

```python
## Returns PyTorch tensors
model_inputs = tokenizer(sequences, padding=True, return_tensors="pt")

## Returns TensorFlow tensors
model_inputs = tokenizer(sequences, padding=True, return_tensors="tf")

## Returns NumPy arrays
model_inputs = tokenizer(sequences, padding=True, return_tensors="np")
```

### Special tokens

The `tokenizer` added the special word [CLS] at the beginning and the special word [SEP] at the end but `tokenizer.tokenize` doesn't. Note that some models don’t add special words, or add different ones; models may also add these special words only at the beginning, or only at the end. In any case, the tokenizer knows which ones are expected and will deal with this for you.

```python
sequence = "I've been waiting for a HuggingFace course my whole life."
tokens = tokenizer.tokenize(sequence)
ids = tokenizer.convert_tokens_to_ids(tokens)
## [1045, 1005, 2310, 2042, 3403, 2005, 1037, 17662, 12172, 2607, 2026, 2878, 2166, 1012]
print(tokenizer.decode(ids))
## "i've been waiting for a huggingface course my whole life."


model_inputs = tokenizer(sequence)
print(model_inputs["input_ids"])
## [101, 1045, 1005, 2310, 2042, 3403, 2005, 1037, 17662, 12172, 2607, 2026, 2878, 2166, 1012, 102]
print(tokenizer.decode(model_inputs["input_ids"]))
## "[CLS] i've been waiting for a huggingface course my whole life. [SEP]"
```

### loading and saving

`from_pretrained()` to load and `save_pretrained()` to save.
These methods will load or save the algorithm used by the `tokenizer` (a bit like the architecture of the model) as well as its `vocabulary` (a bit like the weights of the model).

```python
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
tokenizer("Using a Transformer network is simple")
## {'input_ids': [101, 7993, 170, 11303, 1200, 2443, 1110, 3014, 102],
##  'token_type_ids': [0, 0, 0, 0, 0, 0, 0, 0, 0],
##  'attention_mask': [1, 1, 1, 1, 1, 1, 1, 1, 1]}
tokenizer.save_pretrained("directory_on_my_computer")
```



## Notice

所以tokenizer要和model保持一致[参考官网](https://huggingface.co/docs/transformers/tokenizer_summary).
返回值的解释, 可[参考官网](https://huggingface.co/docs/transformers/preprocessing)
`distilbert-base-uncased-finetuned-sst-2-english`的`tokenizer`只返回了`input_ids`和`attention_mask`.
```python
from transformers import AutoTokenizer
checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
raw_inputs = [
    "I've been waiting for a HuggingFace course my whole life.",
    "I hate this so much!",
]
inputs = tokenizer(raw_inputs, padding=True, truncation=True, return_tensors="pt")
## {
##     'input_ids': tensor([
##         [  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172, 2607,  2026,  2878,  2166,  1012,   102],
##         [  101,  1045,  5223,  2023,  2061,  2172,   999,   102,     0,     0,     0,     0,     0,     0,     0,     0]
##     ]), 
##     'attention_mask': tensor([
##         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
##         [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
##     ])
## }
```
`bert-base-cased` 则返回了`input_ids`, `token_type_ids`和`attention_mask`
```python
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
encoded_input = tokenizer("Do not meddle in the affairs of wizards, for they are subtle and quick to anger.")
## {'input_ids': [101, 2079, 2025, 19960, 10362, 1999, 1996, 3821, 1997, 16657, 1010, 2005, 2027, 2024, 11259, 1998, 4248, 2000, 4963, 1012, 102], 
##  'token_type_ids': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
##  'attention_mask': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
```


refs:
[Tokenizers](https://huggingface.co/course/chapter2/4?fw=pt)
https://huggingface.co/docs/transformers/preprocessing
[Handling multiple sequences](https://huggingface.co/course/chapter2/5?fw=pt)
[Putting it all together](https://huggingface.co/course/chapter2/6?fw=pt)