# finders

## locator
用于定位元素, 返回的结果可作为`finders`的参数, above, Below, Left of, Right of, Near, Chaining relative locators
获得元素上面的某个元素
```python
email_locator = locate_with(By.TAG_NAME, "input").above({By.ID: "password"})
password_locator = locate_with(By.TAG_NAME, "input").below({By.ID: "email"})
cancel_locator = locate_with(By.TAG_NAME, "button").to_left_of({By.ID: "submit"})
submit_locator = locate_with(By.TAG_NAME, "button").to_right_of({By.ID: "cancel"})
email_locator = locate_with(By.TAG_NAME, "input").near({By.ID: "lbl-email"})
submit_locator = locate_with(By.TAG_NAME, "button").below({By.ID: "email"}).to_right_of({By.ID: "cancel"})
```

## finder

## 单个获取
```python
vegetable = driver.find_element(By.CLASS_NAME, "tomatoes")
fruit = driver.find_element(By.CSS_SELECTOR,"#fruits .tomatoes")
```

可以多次获取
```python
fruits = driver.find_element(By.ID, "fruits")
fruit = fruits.find_element(By.CLASS_NAME,"tomatoes")
```
## 多个获取

```python
elements = driver.find_elements(By.TAG_NAME, 'p')
for e in elements:
    print(e.text)
```


## 其他
获得聚焦(focus)的元素
```python
## Get attribute of current active element
attr = driver.switch_to.active_element.get_attribute("title")
print(attr)
```


参考:
https://www.selenium.dev/documentation/webdriver/elements/locators/
https://www.selenium.dev/documentation/webdriver/elements/finders/