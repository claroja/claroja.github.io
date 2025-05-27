# DesiredCapabilities


DesiredCapabilities的具体解释.[本段参考](https://www.cnblogs.com/f1194361820/p/7419522.html)



[本段参考](https://www.jianshu.com/p/98f562597de2)

```python
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

d = DesiredCapabilities.CHROME
d['goog:loggingPrefs'] = {'browser': 'ALL'} 

driver = webdriver.Chrome(desired_capabilities=d)
driver.maximize_window()
driver.get(url='https://www.baidu.com/')

print(driver.get_log("browser"))
```

[本段参考](https://www.cnblogs.com/landhu/p/15524801.html)

```python

from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

ca = DesiredCapabilities.CHROME
ca["goog:loggingPrefs"] = {"performance": "ALL"}
driver = webdriver.Chrome(desired_capabilities=ca)
driver.get("http://xxx")
logs = driver.get_log("performance")
print(logs)
```


