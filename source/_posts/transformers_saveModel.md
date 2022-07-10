transformers_saveModel


# 保存
```python
pt_save_directory = "./pt_save_pretrained"
tokenizer.save_pretrained(pt_save_directory)
pt_model.save_pretrained(pt_save_directory)
```

# 加载
```python
pt_model = AutoModelForSequenceClassification.from_pretrained("./pt_save_pretrained")
```