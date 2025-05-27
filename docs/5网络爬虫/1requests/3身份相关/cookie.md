# cookie


`cookie`是保存在`header`中的一个值, 可以通过`header`直接控制, 也可以通过requests提供的属性方法控制. 本质都是操作`header`中的cookie.



## response cookie

```python
import requests
import pandas as pd


url= "https://www.baidu.com"
res = requests.get(url)

```


### 通过headers来获得服务器返回的cookie
```python
res.headers["Set-Cookie"]
"""
'BDORZ=27315; max-age=86400; domain=.baidu.com; path=/'
"""
```

### 使用RequestsCookieJar相比header形式更容易处理cookie
```python
res.cookies
"""
<RequestsCookieJar[Cookie(version=0, name='BDORZ', value='27315', port=None, port_specified=False, domain='.baidu.com', domain_specified=True, domain_initial_dot=True, path='/', path_specified=True, secure=False, expires=1676017680, discard=False, comment=None, comment_url=None, 
rest={}, rfc2109=False)]>
"""
res.cookies["BDORZ"]
"""
'27315'
"""
res.cookies.get_dict()
"""
{'BDORZ': '27315'}
"""
```


## requests cookie

### 通过cookies参数上传cookie
1. 可以简单使用`dict`
```python
url = 'https://httpbin.org/cookies'
cookies = dict(cookies_are='working')
r = requests.get(url, cookies=cookies)
r.text
'{"cookies": {"cookies_are": "working"}}'
```

2. 也可以自己创建`cookiejar`

```python
jar = requests.cookies.RequestsCookieJar()
jar.set('tasty_cookie', 'yum', domain='httpbin.org', path='/cookies')
jar.set('gross_cookie', 'blech', domain='httpbin.org', path='/elsewhere')
url = 'https://httpbin.org/cookies'
r = requests.get(url, cookies=jar)
r.text
'{"cookies": {"tasty_cookie": "yum"}}'
```