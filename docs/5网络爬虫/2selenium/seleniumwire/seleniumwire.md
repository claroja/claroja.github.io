# seleniumwire

[官网](https://github.com/wkeeling/selenium-wire)


```python
from seleniumwire import webdriver  # Import from seleniumwire

## Create a new instance of the Chrome driver
driver = webdriver.Chrome()

## Go to the Google home page
driver.get('https://www.baidu.com')

## Access requests via the `requests` attribute
for request in driver.requests:
    if request.response:
        print(
            request.url,
            request.response.status_code,
            request.response.headers['Content-Type']
        )
```




## 获取request
`driver.requests`可以获取页面加载时所获取的所有`request`. 需要自己过滤需要的`request`. 然后再通过`request.response`来获得`response`.

如果一些请求加载时间过长, 直接调用`driver.requests`, 可能无法获取, 可以设置阻塞:`driver.wait_for_request(pat, timeout=10)`, `pat`就是要等待的url:
```python
## Click a button that triggers a background request to https://server/api/products/12345/
button_element.click()
## Wait for the request/response to complete
request = driver.wait_for_request('/api/products/12345/')
```


### request对象
属性|描述
--|--
body|二进制
cert|SSL certificate in dictionary format
date|创建的时间
headers|请求头
host|主机
method|请求方法
param|url携带的参数
path|请求的路径
querystring|`foo=bar&spam=eggs`
url|`https://www.example.com/some/path/index.html?foo=bar&spam=eggs`
response|响应体对象



### response对象
属性|描述
--|--
body|二进制
date|创建时间
headers|响应头
reason|
status_code|




## 截取
1. 在请求前更改header
因为在header中允许重复的key(会被组合到一起), 如果是替换, 需要先删除之前的key.
```python
def interceptor(request):
    del request.headers['Referer']  # Remember to delete the header first
    request.headers['Referer'] = 'some_referer'  # Spoof the referer

driver.request_interceptor = interceptor
driver.get(...)
```

2. 添加request parameter

```python
def interceptor(request):
    params = request.params
    params['foo'] = 'bar'
    request.params = params

driver.request_interceptor = interceptor
driver.get(...)
## foo=bar will be added to all requests
```

3. 添加post json请求

```python
import json

def interceptor(request):
    if request.method == 'POST' and request.headers['Content-Type'] == 'application/json':
        # The body is in bytes so convert to a string
        body = request.body.decode('utf-8')
        # Load the JSON
        data = json.loads(body)
        # Add a new property
        data['foo'] = 'bar'
        # Set the JSON back on the request
        request.body = json.dumps(data).encode('utf-8')
        # Update the content length
        del request.headers['Content-Length']
        request.headers['Content-Length'] = str(len(request.body))

driver.request_interceptor = interceptor
driver.get(...)
```


4. 添加Basic authentication

```python
import base64

auth = (
    base64.encodebytes('my_username:my_password'.encode())
    .decode()
    .strip()
)

def interceptor(request):
    if request.host == 'host_that_needs_auth':
        request.headers['Authorization'] = f'Basic {auth}'

driver.request_interceptor = interceptor
driver.get(...)

## Credentials will be transmitted with every request to "host_that_needs_auth"
```