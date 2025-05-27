# wait



## Explicit wait
显式的指定等待的条件.
因为浏览器中的网页的元素是异步加载的, 所以坑你会出现元素还没加载, 程序就需要获取的情况, 如下面的代码:

网页代码中,等整个`DOM`加载完, 才在`javascript`创建`<p>`标签,
```html
<!doctype html>
<meta charset=utf-8>
<title>Race Condition Example</title>

<script>
  var initialised = false;
  window.addEventListener("load", function() {
    var newElement = document.createElement("p");
    newElement.textContent = "Hello from JavaScript!";
    document.body.appendChild(newElement);
    initialised = true;
  });
</script>
```

当我们直接获取网页时, 就会出错, 因为`<p>`标签可能还没加载.
```python
driver.navigate("file:///race_condition.html")
el = driver.find_element(By.TAG_NAME, "p")
assert el.text == "Hello from JavaScript!"
```

可以使用`WebDriverWait`设置等待条件, 先等待3秒, 然后再获取`<p>`标签.
```python
from selenium.webdriver.support.wait import WebDriverWait

driver.navigate("file:///race_condition.html")
el = WebDriverWait(driver, timeout=3).until(lambda d: d.find_element(By.TAG_NAME,"p"))
assert el.text == "Hello from JavaScript!"
```


1. `WebDriverWait`方法第一个参数是`driver`, 第二个参数`timeout`指最大的等待时间
2. `until`传入的是一个方法, 方法的参数是`driver`, 这里用的`d`来代替. 当`until`中的方法返回为`True`时, 表示条件达成, 程序消除阻塞, 继续执行. 这里`WebDriverWait`对象将一直查找`P`标签,并静默`no such element errors`, 直到`P`标签被找到. 如果`P`标签一直不被渲染, 则会报出`timeout error`.

更多的条件可以[参考](https://www.selenium.dev/selenium/docs/api/py/webdriver_support/selenium.webdriver.support.expected_conditions.html?highlight=expected)

条件|描述
--|--
`visibility_of(element)`|DOM中element可见
`frame_to_be_available_and_switch_to_it(locator)`|frame is available to switch to, `locator`是`frame`的`id`





## Implicit wait
隐式等待是在尝试发现某个元素的时候，如果没能立刻发现，就等待固定长度的时间。默认设置是0秒。一旦设置了隐式等待时间，它的作用范围就是Webdriver对象实例的整个生命周期。

```python
driver = Firefox()
driver.implicitly_wait(10)
driver.get("http://somedomain/url_that_delays_loading")
my_dynamic_element = driver.find_element(By.ID, "myDynamicElement")
```
也就是说在执行`driver.find_element(By.ID, "myDynamicElement")`时, 会等待10秒. 超时才会报错. 而且该程序后面获得其他元素时, 也会隐式等待10秒


缺点是不智能，因为随着ajax技术的广泛应用，页面的元素往往都可以时间局部加载，也就是在整个页面没有加载完的时候，可能我们需要的元素已经加载完成了，那就么有必要再等待整个页面的加载，执行进行下一步，而隐性等待满足不了这一点.
更智能的就是使用`Explicit wait`等待, 对具体的元素进行设置.




## FluentWait
可以指定显式的指定, 等待时确认条件是否触发的频率,等
```python
driver = Firefox()
driver.get("http://somedomain/url_that_delays_loading")
wait = WebDriverWait(driver, timeout=10, poll_frequency=1, ignored_exceptions=[ElementNotVisibleException, ElementNotSelectableException])
element = wait.until(EC.element_to_be_clickable((By.XPATH, "//div")))
```


参考:
https://www.selenium.dev/documentation/webdriver/waits/