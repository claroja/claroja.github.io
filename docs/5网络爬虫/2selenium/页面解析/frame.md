# frame

iframe主要用来展示来自不同域名的网站. selenium值关注最高等级的DOM, 所以我们需要先进入iframe, 才能操作其中的元素.

```html
<div id="modal">
  <iframe id="buttonframe" name="myframe"  src="https://seleniumhq.github.io">
   <button>Click here</button>
 </iframe>
</div>
```



## 一般写法

```python
## Store iframe web element
iframe = driver.find_element(By.CSS_SELECTOR, "#modal > iframe")

## switch to selected iframe
driver.switch_to.frame(iframe)

## Now click on button
driver.find_element(By.TAG_NAME, 'button').click()
```


## 使用name或ID
```python
## Switch frame by id
driver.switch_to.frame('buttonframe')

## Now, Click on the button
driver.find_element(By.TAG_NAME, 'button').click()
```


## 使用索引

```python
## switching to second iframe based on index
iframe = driver.find_elements(By.TAG_NAME,'iframe')[1]

## switch to selected iframe
driver.switch_to.frame(iframe)
```



## 离开frame
```python
## switch back to default content
driver.switch_to.default_content()  
```







参考:
https://www.selenium.dev/documentation/webdriver/interactions/frames/