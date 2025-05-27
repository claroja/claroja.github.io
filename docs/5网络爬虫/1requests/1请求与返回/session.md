# session

requests模块中的Session类能够自动处理发送请求获取响应过程中产生的cookie，自动处理cookie，即 下一次请求会带上前一次的cookie，进而达到状态保持的目的。






## 普通的requests
每次requests都需要手动设置cookie
```python
import requests
params = {'username': 'Ryan', 'password': 'password'}
r = requests.post("http://pythonscraping.com/pages/cookies/welcome.php", params) # 第一次请求获得的cookie
print("Cookie is set to:")
print(r.cookies.get_dict())
r = requests.get("http://pythonscraping.com/pages/cookies/profile.php",
cookies=r.cookies) # 用上一次的请求所获得的cookie
print(r.text)
```
## session回话保存cookie

```python
import requests
session = requests.Session() # 新建一个回话，他会保存每次访问的cookie，header等HTTP协议信息，不必每次手动提交cookie
params = {'username': 'username', 'password': 'password'}
s = session.post("http://pythonscraping.com/pages/cookies/welcome.php", params)
print("Cookie is set to:")
print(s.cookies.get_dict())
print("Going to profile page...")
s = session.get("http://pythonscraping.com/pages/cookies/profile.php")
print(s.text)
```