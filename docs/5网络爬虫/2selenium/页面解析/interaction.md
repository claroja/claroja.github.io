# interaction

尽量使用`driver.execute_script`来控制, 因为某些标签, 如`<input>`会对`send_keys`失效.



交互行为, 主要用来触发点击, 输入文字等事件
## Click

## Send keys
```python
SearchInput = driver.find_element(By.NAME, "q")
SearchInput.send_keys("selenium")
## Clears the entered text
SearchInput.clear()
```

## Clear 
```python
SearchInput = driver.find_element(By.NAME, "q")
SearchInput.send_keys("selenium")
    # Clears the entered text
SearchInput.clear()
```


参考:
https://www.selenium.dev/documentation/webdriver/elements/interactions/