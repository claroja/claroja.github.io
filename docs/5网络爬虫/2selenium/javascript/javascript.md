# javascript


可以通过执行`javascript`代码来获得元素. 建议使用`querySelector`方法, 因为:
1. 选择器是通用的, 在`bs4`中也可以使用
2. 选择器的书写比较简单, 比写`getElementByID`这些方法简便




1. 通过`js`获得元素
```python
elem = driver.execute_script(f'return document.querySelector("p")')
df_item = pd.read_html(elem.get_attribute('outerHTML'))[0]
```

2. 可以给`execute_script`添加参数, 表示已经获得的元素.

```python
## Stores the header element
header = driver.find_element(By.CSS_SELECTOR, "h1")
## Executing JavaScript to capture innerText of header element
driver.execute_script('return arguments[0].innerText', header)
```