
get pre_trained model.

```python
from transformers import AutoModel
checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
model = AutoModel.from_pretrained(checkpoint)
```
This architecture contains only the base Transformer module: given some inputs, it outputs what we’ll call `hidden states`, also known as `features`.

## input

For each model `input`, we’ll retrieve a high-dimensional vector representing the contextual understanding of that input by the Transformer model.

```python
from transformers import AutoTokenizer
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")
encoded_input = tokenizer("Do not meddle in the affairs of wizards, for they are subtle and quick to anger.")
# {'input_ids': [101, 2079, 2025, 19960, 10362, 1999, 1996, 3821, 1997, 16657, 1010, 2005, 2027, 2024, 11259, 1998, 4248, 2000, 4963, 1012, 102], 
#  'token_type_ids': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 
#  'attention_mask': [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
```


## output

output always contains:
- Batch size: The number of sequences processed at a time (2 in our example).
- Sequence length: The length of the numerical representation of the sequence (16 in our example).
- Hidden size: The vector dimension of each model input.
It is said to be `high dimensional` because of the last value. The hidden size can be very large (768 is common for smaller models, and in larger models this can reach 3072 or more).
```python
from transformers import AutoModel
checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
model = AutoModel.from_pretrained(checkpoint)
outputs = model(**inputs)
print(outputs.last_hidden_state.shape)
torch.Size([2, 16, 768])
```

## head

While these `hidden states` can be useful on their own, they’re usually inputs to another part of the model, known as the `head`.The different tasks could have been performed with the same `architecture`, but each of these tasks will have a different `head` associated with it.

![diagram](https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter2/transformer_and_head.svg)
In this diagram, the model is represented by its embeddings layer and the subsequent layers. The embeddings layer converts each input ID in the tokenized input into a vector that represents the associated token. The subsequent layers manipulate those vectors using the attention mechanism to produce the final representation of the sentences.
For our example, we will need a model with a sequence classification head (to be able to classify the sentences as positive or negative)

```python
from transformers import AutoModelForSequenceClassification
checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)
outputs = model(**inputs)
print(outputs.logits.shape)
# torch.Size([2, 2])
```

## output & head

`AutoModel`'s output is `hidden state`
`AutoModelForSequenceClassification` 's output is `head`
[ref](/transformers_bert/)




## load & save
```python
from transformers import BertConfig, BertModel
config = BertConfig()
model = BertModel(config)
```
this model will output gibberish, it needs to be trained first. it will cost a lot.
so, we should reuse models that have already been trained.

```python
from transformers import BertModel
model = BertModel.from_pretrained("bert-base-cased")
```
`BertModel` is equal `AutoModel` class.
we don't need to use `BertConfig`, instead load a pretrained mode via `bert-base-cased` identifier.

after finetuning, we can use `save_pretrained()` to save the model. it is analogous to `from_pretrained()` method.

```python
model.save_pretrained("directory_on_my_computer")
```
this method will create two file:
`config.json` : including some attributes to build the model architecture and some information about version.
`pytorch_model.bin` : known as `state dictionary`, contains all weights.

```sh
ls directory_on_my_computer
config.json pytorch_model.bin
```


## predict
when you first load pretraining model from [hub](https://huggingface.co/models):
```python
model = AutoModelForSequenceClassification.from_pretrained('mode_name')
# Some weights of the model checkpoint at ./pretraind_model/distilbert-base-uncased were not used when initializing DistilBertForSequenceClassification: ['vocab_transform.bias', 'vocab_transform.weight', 'vocab_layer_norm.bias', 'vocab_projector.bias', 'vocab_layer_norm.weight', 'vocab_projector.weight']
# - This IS expected if you are initializing DistilBertForSequenceClassification from the checkpoint of a model trained on another task or with another architecture (e.g. initializing a BertForSequenceClassification model from a BertForPreTraining model).
# - This IS NOT expected if you are initializing DistilBertForSequenceClassification from the checkpoint of a model that you expect to be exactly identical (initializing a BertForSequenceClassification model from a BertForSequenceClassification model).
# Some weights of DistilBertForSequenceClassification were not initialized from the model checkpoint at ./pretraind_model/distilbert-base-uncased and are newly initialized: ['pre_classifier.weight', 'pre_classifier.bias', 'classifier.bias', 'classifier.weight']
# You should probably TRAIN this model on a down-stream task to be able to use it for predictions and inference.
```
you will see the red warnings. It tells that the model doesn't fit your customized task, you should finetuning it before you use it. every time we load the model, the `model.classifier.weight` is random initialization. the default `num_labels` is 2, but even if you specify the `num_lables` as 8, it still randomly init.
```python
print(model.classifier.weight)
```

after you finetuning the model, and save it:
```python
model = AutoModelForSequenceClassification.from_pretrained('pretraining_model', num_labels=8)
# Assume training code here...
model.save_pretrained("./finetuning_model")
tokenizer.save_pretrained("./finetuning_model")
```

then you load the finetuning model:
```python
model = AutoModelForSequenceClassification.from_pretrained('finetuning_model')
```
Notice: this time, the console doesn't output the red warnings, because we load the finetuning(training in out task) model. 

this time, regardless how many times you load the mode, the `model.classifier.weight` is always same. and you can't change the `num_labels` from the finetuning model.huggingface is smart to tell `pretrained` model and `finetuning` model. I didn't find how huggingface do this, but it is what it is.
```python
model = AutoModelForSequenceClassification.from_pretrained('finetuning_model') #  num_labels=8
model = AutoModelForSequenceClassification.from_pretrained('finetuning_model', num_labels=8) #  num_labels=8
model = AutoModelForSequenceClassification.from_pretrained('finetuning_model', num_labels=3) #  error
```



ref:
[Behind the pipeline](https://huggingface.co/course/chapter2/2?fw=pt)
[Models](https://huggingface.co/course/chapter2/3?fw=pt)

