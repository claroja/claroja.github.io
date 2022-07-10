



`pipeline()`会自动在Model Hub上加载对应`task`的`model`和`tokenizer`.

```python
from transformers import pipeline
classifier = pipeline("sentiment-analysis")
classifier("We are very happy to show you the 🤗 Transformers library.")
[{'label': 'POSITIVE', 'score': 0.9998}]
```

也可以手动指定

```python
model_name = "nlptown/bert-base-multilingual-uncased-sentiment"
from transformers import AutoTokenizer, AutoModelForSequenceClassification
model = AutoModelForSequenceClassification.from_pretrained(model_name)
tokenizer = AutoTokenizer.from_pretrained(model_name)
classifier = pipeline("sentiment-analysis", model=model, tokenizer=tokenizer)
# classifier = pipeline("sentiment-analysis", model=model_name, tokenizer=model_name) # model和tokenizer也可以直接使用字符串形式
classifier("Nous sommes très heureux de vous présenter la bibliothèque 🤗 Transformers.")
[{'label': '5 stars', 'score': 0.7273}]
```

# API


## 参数
参数|描述
--|--
task|任务的种类
model|PreTrainedModel对象 或 字符串
config|PretrainedConfig对象 或 字符串
tokenizer|PreTrainedTokenizer 或 字符串

[参考官网](https://huggingface.co/docs/transformers/v4.20.1/en/main_classes/pipelines#transformers.pipeline)

## task

字符串|对象|描述
--|--|--
"audio-classification"|AudioClassificationPipeline|音频分类
"automatic-speech-recognition"|AutomaticSpeechRecognitionPipeline|语音识别
"conversational"|ConversationalPipeline|
"feature-extraction"|FeatureExtractionPipeline|
"fill-mask"|FillMaskPipeline:|
"image-classification"|ImageClassificationPipeline|图像份额里
"question-answering"|QuestionAnsweringPipeline|
"table-question-answering"|TableQuestionAnsweringPipeline|
"text2text-generation"|Text2TextGenerationPipeline|
"text-classification" (alias "sentiment-analysis" available)|TextClassificationPipeline|文本分类
"text-generation"|TextGenerationPipeline:|文本生成
"token-classification" (alias "ner" available)|TokenClassificationPipeline|命名实体识别
"translation"|TranslationPipeline|翻译
"translation_xx_to_yy"|TranslationPipeline|
"summarization"|SummarizationPipeline|概括
"zero-shot-classification"|ZeroShotClassificationPipeline|

[参考官网](https://huggingface.co/docs/transformers/v4.20.1/en/main_classes/pipelines#transformers.pipeline.task)



参考文献:
[quicktour](https://huggingface.co/docs/transformers/quicktour)
[pipeline_tutorial](https://huggingface.co/docs/transformers/pipeline_tutorial)
[pipelines](https://huggingface.co/docs/transformers/v4.20.1/en/main_classes/pipelines)
[models](https://huggingface.co/models)
