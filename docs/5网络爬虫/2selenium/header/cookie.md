# cookie

## 添加cookie
```python
from selenium import webdriver

driver = webdriver.Chrome()

driver.get("http://www.example.com")

## Adds the cookie into current browser context
driver.add_cookie({"name": "key", "value": "value"})
```



## 获得cookie
1. 获得1个cookie
```python
from selenium import webdriver

driver = webdriver.Chrome()

## Navigate to url
driver.get("http://www.example.com")

## Adds the cookie into current browser context
driver.add_cookie({"name": "foo", "value": "bar"})

## Get cookie details with named cookie 'foo'
print(driver.get_cookie("foo"))
```

2. 获得所有cookie

```python
from selenium import webdriver

driver = webdriver.Chrome()

## Navigate to url
driver.get("http://www.example.com")

driver.add_cookie({"name": "test1", "value": "cookie1"})
driver.add_cookie({"name": "test2", "value": "cookie2"})

## Get all available cookies
print(driver.get_cookies())
```


## 删除cookie
1. 删除1个cookie
```python
from selenium import webdriver
driver = webdriver.Chrome()

## Navigate to url
driver.get("http://www.example.com")
driver.add_cookie({"name": "test1", "value": "cookie1"})
driver.add_cookie({"name": "test2", "value": "cookie2"})

## Delete a cookie with name 'test1'
driver.delete_cookie("test1")
  
```

2. 删除所有cookie

```python
from selenium import webdriver
driver = webdriver.Chrome()

## Navigate to url
driver.get("http://www.example.com")
driver.add_cookie({"name": "test1", "value": "cookie1"})
driver.add_cookie({"name": "test2", "value": "cookie2"})

##  Deletes all cookies
driver.delete_all_cookies()
  
```