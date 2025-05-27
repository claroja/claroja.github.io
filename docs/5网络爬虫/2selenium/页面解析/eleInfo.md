# eleInfo

元素的一些属性

`Is Displayed`
check if the connected Element is displayed on a webpage.

```python
is_email_visible = driver.find_element(By.NAME, "email_input").is_displayed()
```

`Is Enabled`
check if the connected Element is enabled or disabled on a webpage. 
```python
value = driver.find_element(By.NAME, 'btnK').is_enabled()
```

`Is Selected`
determines if the referenced Element is Selected or not. 用于`Check boxes`, `radio buttons`, `input elements`, and `option elements`.

```python
value = driver.find_element(By.CSS_SELECTOR, "input[type='checkbox']:first-of-type").is_selected()
```

`Tag Name`
获得标签名
```python
attr = driver.find_element(By.CSS_SELECTOR, "h1").tag_name
```

`rect`
获得元素位置和大小
```python
res = driver.find_element(By.CSS_SELECTOR, "h1").rect
```


`css`
获得样式
```python
cssValue = driver.find_element(By.LINK_TEXT, "More information...").value_of_css_property('color')
```

Text Content
获得文本内容
```python
text = driver.find_element(By.CSS_SELECTOR, "h1").text
```


通用获得属性方法

```python
value_info = email_txt.get_attribute("value")
```