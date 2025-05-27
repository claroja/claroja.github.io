

```python
#installing the package
#pip install -q langchain_community

#importing the module
from langchain_community.llms import Ollama
llm = Ollama(
    model="llama3.1:8b", 
    temperature=0.7           
)

#input prompt
prompt = "tell me a poem"


result = llm(prompt)
print(result)

```



## 参考
1. https://levelup.gitconnected.com/a-comprehensive-guide-to-ollama-tutorial-8b2d69b0e6e3