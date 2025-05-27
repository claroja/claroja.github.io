# cdp



获得浏览器的版本信息, [本段参考](https://python.hotexamples.com/examples/selenium.webdriver/Chrome/execute_cdp_cmd/python-chrome-execute_cdp_cmd-method-examples.html)
```python
driver = Chrome()
version_info = driver.execute_cdp_cmd('Browser.getVersion', {})
```


运行js文件, [本段参考](https://www.gaoyuanqi.cn/python-selenium-execute_cdp_cmd/)

```python
import time
from selenium.webdriver import Chrome
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument('--headless')
options.add_argument(
    'user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36')

## 如果是chrome 88 版本添加下面一行
options.add_argument("--disable-blink-features=AutomationControlled")

driver = Chrome(options=options)

## 输入 stealth.min.js 文件路径
with open('./stealth.min.js') as f:
    js = f.read()
driver.execute_cdp_cmd("Page.addScriptToEvaluateOnNewDocument", {
    "source": js
})

## 查看特征是否隐藏
driver.get('https://bot.sannysoft.com/')
time.sleep(5)
## 截图
driver.save_screenshot('./a.png')
## 保存源代码为 html
source = driver.page_source
with open('./b.html', 'w') as f:
    f.write(source)

## 退出驱动并关闭浏览器
driver.quit()
```

截图, [本段参考](https://blog.51cto.com/hanzhichao/3211231)

```python
import requests
from selenium import webdriver
from time import sleep
import base64

driver = webdriver.Chrome()
driver.get('https://www.hao123.com/')

res = driver.execute_cdp_cmd('Page.captureScreenshot', {})

with open('hao123.png', 'wb') as f:
    img = base64.b64decode(res['data'])
    f.write(img)

sleep(3)
driver.quit()
```




参考:
https://chromedevtools.github.io/devtools-protocol/
https://python.hotexamples.com/examples/selenium.webdriver/Chrome/execute_cdp_cmd/python-chrome-execute_cdp_cmd-method-examples.html
https://applitools.com/blog/selenium-chrome-devtools-protocol-cdp-how-does-it-work/