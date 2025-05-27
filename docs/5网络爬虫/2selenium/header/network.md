# network



运行不起来, [本段参考](https://www.dilatoit.com/2021/04/23/selenium-chrome-devtools-protocol.html)

```python
caps = DesiredCapabilities.CHROME
caps['loggingPrefs'] = {"performance": "ALL"}

with webdriver.Chrome(desired_capabilities=caps) as driver:
    driver.get("https://www.google.com")
    performance_list = [json.loads(log['message'])['message'] for log in driver.get_log('performance')]
    request_list = []
    response_list = []
    for log in performance_list:
        if log["method"] == "Network.requestWillBeSent":
            requestId = log["params"]["requestId"]
            response = driver.execute_cdp_cmd('Network.getResponseBody', {'requestId': requestId})
            request_list.append(log)
            response_list.append(response)

    for log in request_list:
        print(log)

    for log in response_list:
        print(log)
```



获取日志, [本段参考](https://www.cnblogs.com/superhin/p/15023302.html)

```python
from selenium import webdriver
caps = {
    'goog:loggingPrefs': {'performance': 'ALL'},   # 记录性能日志
}

driver = webdriver.Chrome(desired_capabilities=caps)
driver.get('https://www.baidu.com')
driver.get_log("performance")

```



获取接口, [本段参考](https://juejin.cn/post/7123039097706250253)

```python
from selenium import webdriver
from selenium.webdriver.chrome.service import Service

## chromedriver 路径配置
driverP = Service(r'xxxx/xxxxx/chromedriver的存放路径')

## ChromeOptions 配置相关
options = webdriver.ChromeOptions()

options.add_argument('--ignore-certificate-errors')

## 去掉开发者警告
options.add_experimental_option('useAutomationExtension', False)

## 去掉黄条
options.add_experimental_option('excludeSwitches', ['enable-automation'])

options.add_argument('--ignore-certificate-errors-spki-list')

options.add_argument('--no-sandbox')

options.add_experimental_option('perfLoggingPrefs', {'enableNetwork': True})


driver = webdriver.Chrome(options=option, service=driverP)


base_url = "https://www.ximalaya.com/sound/148249100"

driver.get(base_url)

logs = driver.get_log("performance")

for log in logs:
    logjson = json.loads(log["message"])["message"]
    if logjson['method'] == 'Network.responseReceived':
        params = logjson['params']
        try:
            requestUrl = params['response']['url']

            if "/bdsp/album/pay" in requestUrl:

                requestId = params['requestId']
                response_body = driver.execute_cdp_cmd('Network.getResponseBody', {'requestId': requestId})
                _content = json.loads(response_body["body"])
            else:
                continue
        except:
            requestUrl = "None"
            logger.info("没找到requestUrl：{}".format(requestUrl))
            continue
    else:
        continue
        
_content = "None"

driver.quit()

```


[本段参考](https://www.jianshu.com/p/7c354259657c)

```python
#!/usr/bin/python3
## -*- coding: utf-8 -*-
import os, time, json
from selenium.webdriver.common.by import By
from selenium import webdriver
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

if __name__ == '__main__':
    # 引入chromedriver
    chrome_options = webdriver.ChromeOptions()
    # chrome_options.add_argument('--headless')
    # chrome_options.add_argument('--no-sandbox')
    # chrome_options.add_argument("--disable-extensions")
    # chrome_options.add_argument("--disable-gpu")
    prefs = {
        'download.default_directory': os.getenv('OS_LOG_PATH')
    }
    chrome_options.add_experimental_option('prefs', prefs)
    # make chrome log requests
    capabilities = DesiredCapabilities.CHROME
    # caps['goog:loggingPrefs']
    capabilities["goog:loggingPrefs"] = {"performance": "ALL"}  # newer: goog:loggingPrefs
    # capabilities['acceptSslCerts'] = True
    #browser = webdriver.Chrome(executable_path=r'/opt/google/chrome/chromedriver', options=chrome_options)
    browser = webdriver.Chrome(executable_path=r'C:\Program Files (x86)\Google\Chrome\Application\chromedriver.exe', options=chrome_options,desired_capabilities=capabilities)
    browser.implicitly_wait(3)
    browser.get("https://#########")

    # 输入账号
    browser.implicitly_wait(3)
    username_inputbox = browser.find_elements(By.XPATH, '//*[@id="app"]/section/div[1]/div/div[1]/div/div[2]/form/div[1]/div/div/div/input')[0]
    username_inputbox.click()
    browser.implicitly_wait(3)
    username_inputbox.clear()
    username_inputbox.send_keys("#######")

    # 输入密码
    browser.implicitly_wait(3)
    password_inputbox = browser.find_elements(By.XPATH, '//*[@id="app"]/section/div[1]/div/div[1]/div/div[2]/form/div[2]/div/div/div/input')[0]
    password_inputbox.click()
    browser.implicitly_wait(3)
    password_inputbox.clear()
    password_inputbox.send_keys("#######")

    # 点击登录
    browser.implicitly_wait(3)
    submit_btn = browser.find_elements(By.XPATH, '//*[@id="app"]/section/div[1]/div/div[1]/div/div[2]/form/div[3]/div/button')[0]
    submit_btn.click()
    # 等待5秒
    time.sleep(5)
    #-------------------------------------------------
    base_url = "https://#########"
    browser.get(base_url)

    time.sleep(3)
    # extract requests from logs
    logs_raw = browser.get_log("performance")
    logs = [json.loads(lr["message"])["message"] for lr in logs_raw]

    def log_filter(log_):
        return (
            # is an actual response
                log_["method"] == "Network.responseReceived"
                # and json
                and "json" in log_["params"]["response"]["mimeType"]
        )

    for log in filter(log_filter, logs):
        request_id = log["params"]["requestId"]
        resp_url = log["params"]["response"]["url"]
        print(request_id)
        print(f"Caught {resp_url}")
        json_str = json.dumps(browser.execute_cdp_cmd("Network.getResponseBody", {"requestId": request_id}), indent=4)
        # 创建一个params.json文件
        with open(f'{request_id}.json', 'w') as f:
            f.write(json_str)  # 将json_str写到文件中


    browser.quit()
```



比较详细的解释, [本段参考](https://blog.csdn.net/baidu_36943075/article/details/121293316)
```python
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities

option = webdriver.ChromeOptions()
option.add_experimental_option('perfLoggingPrefs', {'enableNetwork': True})
caps = DesiredCapabilities.CHROME
caps['goog:loggingPrefs'] = {'performance': 'ALL'}
driver = webdriver.Chrome(chrome_driver_path, options=option, desired_capabilities=caps)

"""
日志的类型
['Network.loadingFailed', 'Network.loadingFinished', 'Network.resourceChangedPriority',
 'Network.requestServedFromCache', 'Network.requestWillBeSent', 'Network.requestWillBeSentExtraInfo',
 'Network.responseReceived', 'Network.responseReceivedExtraInfo', 'Network.dataReceived',
 'Page.frameAttached', 'Page.frameRequestedNavigation', 'Page.frameStoppedLoading',
 'Page.frameClearedScheduledNavigation', 'Page.loadEventFired', 'Page.frameStartedLoading',
 'Page.frameDetached', 'Page.frameScheduledNavigation', 'Page.frameNavigated', 'Page.frameResized',
 'Page.domContentEventFired']
请求的类型(待补充)
 [XHR(接口请求), Fetch(接口请求), 'Script'(.js), 'Stylesheet(.css)', 'Image'(.png等), 'Font', 'Document(文件), 'Manifest', 'Ping', 'Preflight', 'Navigation', 'other']
"""

time.sleep(2)  # 等待一下大部分请求处理完成
request_list = []  # 所有的请求
response_list = []  # 所有的返回
cache_list = []  # 所有的缓存读取记录
for responseReceived in self.driver.get_log('performance'):
    message = json.loads(responseReceived['message'])['message']
    # 获取所有请求信息(请求信息集中在requestWillBeSent)
    if message['method'] == 'Network.requestWillBeSent':
        request_id = message['params']['requestId']
        request = message['params']['request']
        try:  # 尝试获取请求body，type为浏览器开发者模式network下类型筛选（用于区分接口请求和页面请求）
            request_list.append({'id': request_id, 'type': message['params']['type'],
                                 'url': request['url'], 'method': request['method'],
                                 'req_time': responseReceived['timestamp'], 'req_headers': request['headers'],
                                 'req_body': json.loads(request['postData'])})
        except:
            request_list.append({'id': request_id, 'type': message['params']['type'],
                                 'url': request['url'], 'method': request['method'],
                                 'req_time': responseReceived['timestamp'], 'req_headers': request['headers']})
    # 获取所有返回信息(返回信息集中在responseReceived，但是其中无body信息)
    elif message['method'] == 'Network.responseReceived':
        request_id = message['params']['requestId']
        response = message['params']['response']
        try:  # responseReceived日志中无response body信息，需要额外进行获取
            resp_body = json.loads(self.driver.execute_cdp_cmd('Network.getResponseBody', {'requestId': request_id})['body'])
        except:
            resp_body = None
        try:  # 能获取到requestHeaders尽量使用，因为此处比较全
            response_list.append({'id': request_id, 'type': message['params']['type'], 'url': response['url'],
                                  'resp_time': responseReceived['timestamp'],
                                  'req_headers': response['requestHeaders'], 'resp_status': response['status'],
                                  'resp_headers': response['headers'], 'resp_body': resp_body})
        except:
            response_list.append({'id': request_id,  'type': message['params']['type'], 'url': response['url'],
                                  'resp_time': responseReceived['timestamp'], 'resp_status': response['status'],
                                  'resp_headers': response['headers'], 'resp_body': resp_body})
    # 获取是否为缓存请求(从浏览器缓存直接获取，一般为css、js文件请求)
    elif message['method'] == 'Network.requestServedFromCache':
        request_id = message['params']['requestId']
        cache_list.append({'id': request_id})
## 合并request与cache（cache必定少于等于request）
new_request_list = []
for request in request_list:
    num = 0
    for cache in cache_list:
        num += 1
        if request['id'] == cache['id']:
            new_request_list.append(dict(request, **{'req_from_cache': True}))
            break
        if num == len(cache_list) and request['id'] != cache['id']:
            new_request_list.append(dict(request, **{'req_from_cache': False}))
## 合并request与response（response必定少于等于request，原因是拉取日志的时候会有一些还没收到response的请求）
complete_request_list = []  # 完整有response的请求列表
incomplete_request_list = []  # 不完整没有response的请求列表
for request in new_request_list:
    num = 0
    for response in response_list:
        num += 1
        if request['url'] == response['url'] and request['id'] == response['id'] and request['type'] == response['type']:
            complete_request_list.append(dict(request, **response))  # response在后，因为response中的req_headers比较全
            break
        if num == len(response_list) and request['id'] != response['id']:
            incomplete_request_list.append(request)



```






其他参考:
https://www.jianshu.com/p/ed091f072087
