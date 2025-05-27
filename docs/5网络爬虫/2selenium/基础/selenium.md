# global

最佳实践是:
通过模拟行为进入登录页面,
然后通过selenium-wire获得header信息, 再发送请求(可以考虑替换requests). 当然也可以通过`get_log`方法来获取


## 安装selenium
1. 安装`selenium`, [官网](https://www.selenium.dev/documentation/webdriver/getting_started/install_library/)
2. 安装`浏览器驱动`
`浏览器驱动`是用来操作浏览器的.根据需要选择对应的`浏览器`以及`版本`. [驱动下载](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/), 浏览器驱动使用选择有两种方式:
    1. 使用`WebDriver Manager for Python`, 来自动管理驱动
    2. 手工指定驱动(建议使用, 因为不需要更多的依赖), 以下是代码:
   
        ```python
        from selenium.webdriver.chrome.service import Service
        from selenium import webdriver
        service = Service(executable_path="/path/to/chromedriver")
        driver = webdriver.Chrome(service=service)
        ```

## 使用selenium
总共的步骤, 详细可参考参考[官网](https://www.selenium.dev/documentation/webdriver/getting_started/first_script/):

1. 初始化driver
2. 打开网址
3. 设置延迟
4. 获得元素
5. 获得元素信息
6. 操作元素
7. 退出

```python
from selenium.webdriver.chrome.service import Service
from selenium import webdriver
from selenium.webdriver.common.by import By

## 初始化driver
driver = webdriver.Chrome(service=Service(executable_path="chromedriver.exe"))
## 打开网址
driver.get("https://www.selenium.dev/selenium/web/web-form.html")

## 设置延迟, 更多的延迟策略可以通过: https://www.selenium.dev/documentation/webdriver/waits/获得
driver.implicitly_wait(0.5)
## 获得元素, 更多的获得元素方法可参考: https://www.selenium.dev/documentation/webdriver/elements/
text_box = driver.find_element(by=By.NAME, value="my-text")

## 获得元素的相关信息, 更多获取信息的方法可参考: https://www.selenium.dev/documentation/webdriver/elements/information/
text_box.tag_name
## 操作元素
text_box.send_keys("Selenium")  # 在box中输入文字
## 退出
driver.quit()
```


refs:
https://www.selenium.dev/