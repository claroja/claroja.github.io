# evaluate


[metrics](https://huggingface.co/docs/datasets/how_to_metrics) is de

[evaluate](https://huggingface.co/docs/evaluate/a_quick_tour) need tensorflow dependencies and GPU


## evalution

All evalution modules come with a range of useful attributes that help to use a module stored in a `EvaluationModuleInfo` object.


Attribute|Description
--|--
description|	A short description of the evaluation module.
citation|	A BibTex string for citation when available.
features|	A Features object defining the input format.
inputs_description|	This is equivalent to the modules docstring.
homepage|	The homepage of the module.
license|	The license of the module.
codebase_urls|	Link to the code behind the module.
reference_urls|	Additional reference URLs.

```python
accuracy = evaluate.load("accuracy")
accuracy.description
## Accuracy is the proportion of correct predictions among the total number of cases processed. It can be computed with:
## Accuracy = (TP + TN) / (TP + TN + FP + FN)
##  Where:
## TP: True positive
## TN: True negative
## FP: False positive
## FN: False negative
```

Before we can apply a metric or other evaluation module to a use-case, we need to know what the `input format` of the metric is:

```python
accuracy.features
{
    'predictions': Value(dtype='int32', id=None),
    'references': Value(dtype='int32', id=None)
}
```


## compute()
```python
accuracy.compute(references=[0,1,0,1], predictions=[1,0,0,1])
## {'accuracy': 0.5}
```
## add()
when for-loop, you could store the predictions in a list and at the end pass them to compute()
```python
for ref, pred in zip([0,1,0,1], [1,0,0,1]):
    accuracy.add(references=ref, predictions=pred)
accuracy.compute()
## {'accuracy': 0.5}
```

## add_batch()
When getting predictions and references in batches you can use `add_batch()`
```python
for refs, preds in zip([[0,1],[0,1]], [[1,0],[0,1]]):
    accuracy.add_batch(references=refs, predictions=preds)
accuracy.compute()
{'accuracy': 0.5}
```

refs:
https://huggingface.co/evaluate-metric
https://huggingface.co/docs/evaluate/a_quick_tour
https://huggingface.co/docs/evaluate/index