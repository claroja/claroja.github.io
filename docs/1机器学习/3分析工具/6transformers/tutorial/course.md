# course


[transformers course](https://huggingface.co/course/chapter1/1)


transformer的历史发展轨迹
[Transformer intro](https://huggingface.co/course/chapter1/4?fw=pt)

2018年 bert出生, 
2019年 DistilBERT, 相比bert,  60% faster, 40% lighter




[Behind the pipeline](https://huggingface.co/course/chapter2/2?fw=pt)
介绍了transformer的具体工作流程.
![](https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter2/full_nlp_pipeline.svg)

总共分为了三步:tokenize, model, postProcessing

### tokenize
### 2.model
## Postprocessing the output


[Handling multiple sequences](https://huggingface.co/course/chapter2/5?fw=pt)

## batch
Transformers models expect multiple sentences by default, called Batching. you’ll see that it didn’t just convert the list of input IDs into a tensor, it added a dimension on top of it:
```python
import torch
from transformers import AutoTokenizer, AutoModelForSequenceClassification

checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(checkpoint)
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)
sequence = "I've been waiting for a HuggingFace course my whole life."

tokenized_inputs = tokenizer(sequence, return_tensors="pt")
print(tokenized_inputs["input_ids"])
## tensor([[  101,  1045,  1005,  2310,  2042,  3403,  2005,  1037, 17662, 12172,
##           2607,  2026,  2878,  2166,  1012,   102]])
```







[Putting it all together](https://huggingface.co/course/chapter2/6?fw=pt)



