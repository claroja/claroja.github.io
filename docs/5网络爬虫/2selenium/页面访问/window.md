# window

selenium不区分tab和window, 本质都是tab.

## 创建新window(tab)并跳转
一个`driver`可以对应多个`window`, 可以通过`current_window_handle`来获得当前window对象, 以便区别操作
```python
original_window = driver.current_window_handle
```
通过`window_handles`可以获得当前`driver`对应的窗口的数量
```python
driver.window_handles
```


```python
driver.switch_to.new_window('tab')  # 会在当前窗口打开tab
driver.close()
driver.switch_to.window(driver.window_handles[0])  # 关闭之后 driver要重新和window_handle绑定
```


### 创建window并跳转
```python
## 保存当前window的对象
original_window = driver.current_window_handle
## Opens a new window and switches to new window
driver.switch_to.new_window('window')  # 会创建新窗口, 本质还是tab
driver.switch_to.new_window('tab')  # 会在当前窗口打开tab
## 获得新window的对象
window1 = driver.window_handles
```


通过js打开, 并跳转
```python
driver.get("https://www.baidu.com")
print(driver.current_window_handles) # CDwindow-BF39F0A6A262522BA4A72EA1B9244D65
driver.execute_script('window.open("http://news.baidu.com/")')
print(driver.current_window_handles) # CDwindow-BF39F0A6A262522BA4A72EA1B9244D65
print("*" * 30) # *号隔开加以区分
driver.switch_to.window(driver.window_handles[1])
print(driver.current_window_handle) # CDwindow-34D81646E7A6EED9E8528EAEE5E8D117
```

通过遍历的方式

```python
## Loop through until we find a new window handle
for window_handle in driver.window_handles:
    if window_handle != original_window:
        driver.switch_to.window(window_handle)
        break
```

### 退出
#### close关闭
当不再需要新的页面后我们就将其关闭，driver.close()即可，关闭后，window_handle也就少了一个句柄。
```python
#Close the tab or window
driver.close()
```

关闭窗口后, 跳转到之前的窗口, 否则可能会触发`No Such Window Exception`

```python
## Switch back to the old tab or window
driver.switch_to.window(original_window)
```

#### quit退出
quit的作用:
1. 关闭driver关联的所有window
2. 关闭browser的进程
3. 关闭dirver后台进程

```python
driver.quit()
```

### 应用
可以分析数据接口, 这接输入数据接口, 可以直接返回数据, 而不需要点击之类的操作.

```python
from selenium import webdriver
from selenium.webdriver.common.action_chains import ActionChains
import time
from selenium.webdriver.common.keys import Keys

def setUp(self):
    # self.driver = webdriver.Firefox()
    self.driver = webdriver.Chrome()
def test_switch_tab(self):
        driver = self.driver
        driver.maximize_window()

driver.get('https://www.lambdatest.com/')
time.sleep(5)

first_tab_handle = driver.current_window_handle
print("first_tab_handle : "+str(first_tab_handle))

new_tab_link = driver.find_element_by_xpath('//a[contains(@class,"nav-link") and contains(@href,"selenium-automation")]')
action = ActionChains(driver)        
action.key_down(Keys.CONTROL).click(new_tab_link).key_up(Keys.CONTROL).perform() 

driver.switch_to.window(driver.window_handles[1])
ctrl_click_tab = driver.current_window_handle

driver.execute_script('''window.open("", "_blank");''')

for handle in driver.window_handles:
    if (handle == first_tab_handle) or (handle == ctrl_click_tab):
            print(handle)
    else:
            js_tab_handle = handle
driver.switch_to.window(js_tab_handle)
```

## window基础操作
获得和设置宽度和高度
```python
width = driver.get_window_size().get("width")
height = driver.get_window_size().get("height")
driver.set_window_size(1024, 768)
```

获得和设置位置
```python
x = driver.get_window_position().get('x')
y = driver.get_window_position().get('y')
driver.set_window_position(0, 0)
```

最大化,最小化和全屏
```python
driver.maximize_window()
driver.minimize_window()
driver.fullscreen_window()
```


## 截屏

```python
## 窗口截屏
driver.save_screenshot('./image.png')
## 元素截屏
ele = driver.find_element(By.CSS_SELECTOR, 'h1')
## Returns and base64 encoded string into image
ele.screenshot('./image.png')
```




refs:
https://www.selenium.dev/documentation/webdriver/interactions/windows/
https://www.lambdatest.com/blog/python-selenium-switch-tabs/