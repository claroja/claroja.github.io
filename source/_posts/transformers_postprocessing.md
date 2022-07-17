```python
from transformers import AutoModelForSequenceClassification
checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
model = AutoModelForSequenceClassification.from_pretrained(checkpoint)
outputs = model(**inputs)
print(outputs.logits)
tensor([[-1.5607,  1.6123],
        [ 4.1692, -3.3464]], grad_fn=<AddmmBackward>)
```

Our model predicted [-1.5607, 1.6123] for the first sentence and [ 4.1692, -3.3464] for the second one. Those are not `probabilities` but `logits`, the raw, unnormalized scores outputted by the last layer of the model. To be converted to probabilities, they need to go through a SoftMax layer.

```python
import torch
predictions = torch.nn.functional.softmax(outputs.logits, dim=-1)
print(predictions)
# tensor([[4.0195e-02, 9.5980e-01],
#         [9.9946e-01, 5.4418e-04]], grad_fn=<SoftmaxBackward>)
```
Now we can see that the model predicted [0.0402, 0.9598] for the first sentence and [0.9995, 0.0005] for the second one. These are recognizable probability scores.
To get the labels corresponding to each position, we can inspect the `id2label` attribute of the model config 

```python
model.config.id2label
# {0: 'NEGATIVE', 1: 'POSITIVE'}
```

refs:
[Models](https://huggingface.co/course/chapter2/2?fw=pt#postprocessing-the-output)