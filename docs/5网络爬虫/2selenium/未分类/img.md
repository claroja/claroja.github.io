# img

selenium下载图片


## 截图
img.screenshot("xxx.png") 


### 如果图片重叠可以考虑



将
```python
driver.execute_script("""
    tp = document.querySelector('[alt="验证码滑块"]');
    bg = document.querySelector('[alt="验证码背景"]');
    div = tp.parentElement;
    document.body.appendChild(bg);
""")
driver.execute_script("""return document.querySelector('[alt="验证码滑块"]')""").screenshot(f"./img/tp.png") 
driver.execute_script("""
    tp = document.querySelector('[alt="验证码滑块"]');
    bg = document.querySelector('[alt="验证码背景"]');
    div = tp.parentElement;
    div.removeChild(tp);
""")
driver.execute_script("""bg = tp.parentElement""")
driver.execute_script("""div.removeChild(bg)""")
```




## js发送二进制文件
```python

import base64
import os
import re
from io import BytesIO
from PIL import Image

def base64_to_image(base64_str):
    base64_data = re.sub('^data:image/.+;base64,', '', base64_str)
    byte_data = base64.b64decode(base64_data)
    image_data = BytesIO(byte_data)
    img = Image.open(image_data)
    return img

js ="""
    let c = document.createElement('canvas');
    let ctx = c.getContext('2d');
    let img = document.querySelector('[alt="验证码滑块"]');
    img.setAttribute("crossOrigin",'Anonymous');
    c.height=img.naturalHeight;
    c.width=img.naturalWidth;
    ctx.drawImage(img, 0, 0,img.naturalWidth, img.naturalHeight);
    let base64String = c.toDataURL();
    return base64String;
""" 

base64_str = driver.execute_script(js)
img = base64_to_image(base64_str)
img.save('./test.png')

```


参考:
https://www.cnblogs.com/Renyi-Fan/p/9588755.html



## selenium-wire
```python
from selenium.webdriver.chrome.options import Options
from seleniumwire.webdriver import Chrome
 
driver = Chrome(options= Options())
def get_img_path_from_url(url):
    # 自行实现
    return url
 
def response_interceptor(request, response):
    t=response.headers['Content-Type']
    if request.host=='xxx' and t and 'image' in t:
        with open(get_img_path_from_url(request.url), 'wb') as f:
            f.write(response.body)
             
driver.response_interceptor = response_interceptor
 
driver.get('...')
src=driver.find_element_by_tag_name('img').get_attribute('src')
img_path=get_img_path_from_url(src)



```

这种方法有个缺点，浏览器会自动缓存图片，如果之前已经缓存过这张图片是不会有网络请求的

```python
## 下载前先清理数据，不然请求太多
del driver.requests
driver.get('...')
src=driver.find_element_by_tag_name('img').get_attribute('src')</code>
<code>
for r in driver.iter_requests():
    if r.url==src:
        with open('img', 'wb') as f:
            f.write(r.response.body)
```



参考:
https://www.jb51.net/article/236020.htm