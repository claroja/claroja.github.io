# proxies

## 应用

1）proxies来设置
```python
import requests

proxies = {
  "http": "http://10.10.1.10:3128",
  "https": "http://10.10.1.10:1080",
}

requests.get("http://example.org", proxies=proxies)
```



2）通过环境变量设置默认
```python
$ export HTTP_PROXY="http://10.10.1.10:3128"
$ export HTTPS_PROXY="http://10.10.1.10:1080"

$ python
>>> import requests
>>> requests.get("http://example.org")
```

3）使用HTTP Basic Auth进行代理
```python
proxies = {
    "http": "http://user:pass@10.10.1.10:3128/",
}
```

4）为特定的连接主机设置代理
```python
proxies = {'http://10.20.1.128': 'http://10.10.1.10:5323'}
```

## 分类

```shell
## 1)(Transparent Proxy)，通过HTTP_VIA知道此次访问时通过proxy ip，并通过HTTP_X_FORWARDED_FOR获得真实ip
REMOTE_ADDR = Proxy IP # 这个是访问他人服务器的ip
HTTP_VIA = Proxy IP # 这个指明代理ip
HTTP_X_FORWARDED_FOR = Your IP # 这个是自己的ip，可以查到
```


```shell
## 2)(Anonymous Proxy)：HTTP_X_FORWARDED_FOR被换为proxy ip 所以不能查到原始的ip
REMOTE_ADDR = proxy IP 
HTTP_VIA = proxy IP
HTTP_X_FORWARDED_FOR = proxy IP
```


```shell
## 3)(Elite proxy或High Anonymity Proxy)：HTTP_VIA和HTTP_X_FORWARDED_FOR都隐藏，所以就和没有代理一样
REMOTE_ADDR = Proxy IP
HTTP_VIA = not determined
HTTP_X_FORWARDED_FOR = not determined
```


