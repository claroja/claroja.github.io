# browsers

用来配置浏览器选项


## Options
配置浏览器选项:

```python
options = ChromeOptions()
driver = webdriver.Chrome(options=options)
```

当`driver`关闭时, 浏览器不关闭
```python
chrome_options = ChromeOptions()
chrome_options.add_experimental_option("detach", True)
```

## Arguments
```python
chrome_options = ChromeOptions()
chrome_options.add_argument("--headless=new")
```




```python
from selenium import webdriver
options = webdriver.ChromeOptions()
## 无界面模式
options.add_argument('headless')
## 指定用户客户端-模拟手机浏览
options.add_argument('user-agent="MQQBrowser/26 Mozilla/5.0 (Linux; U; Android 2.3.7; zh-cn; MB200 Build/GRJ22; CyanogenMod-7) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"')
## 禁用图片加载
options.add_argument('blink-settings=imagesEnabled=false')
## 隐身模式
options.add_argument('incognito')
## 自动打开开发者工具
options.add_argument("auto-open-devtools-for-tabs")
## 设置窗口尺寸，注意宽高之间使用逗号而不是x
options.add_argument('window-size=300,600')
## 设置窗口启动位置（左上角坐标）
options.add_argument('window-position=120,0')
## 禁用gpu渲染
options.add_argument('disable-gpu')
## 全屏启动
options.add_argument('start-fullscreen')
## 全屏启动，无地址栏
options.add_argument('kiosk') 
 # 启动时，不激活（前置）窗口
options.add_argument('no-startup-window') 
```

常用属性:

binary_location=''：指定Chrome浏览器路径
debuger_address='：指定调试路径
headless: 无界面模式
add_argument()：添加启动参数
add_extension：添加本地插件
add_experimental_option：添加实验选项
to_capablilities：将options转为标准的capablitiies格式


[属性参考](http://www.assertselenium.com/java/list-of-chrome-driver-command-line-arguments/)


driver.maximize_window()
driver.get(login_url)
elem = driver.find_element


## options
设置`pageLoadStrategy`,即页面加载会不会阻塞`WebDriver`
1. `normal` 默认选项, 等待所有资源加载完毕
2. `eager`	`DOM`加载完毕, 图片还未加载
3. `none` 任何都不会阻塞`WebDriver`

```python
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
options = Options()
options.page_load_strategy = 'normal'
driver = webdriver.Chrome(options=options)
driver.get("http://www.google.com")
driver.quit()
```


参考文章:
https://www.cnblogs.com/superhin/p/12607074.html

参考:
https://chromedriver.chromium.org/capabilities
https://www.selenium.dev/documentation/webdriver/browsers/chrome/
https://peter.sh/experiments/chromium-command-line-switches/