# 证书

当遇到`ssl.CertificateError ...`时
我们使用verify=False参数，此时requests模块发送请求将不做CA证书的验证：verify参数能够忽略CA证书的认证

```python
import requests
url = "https://..." 
response = requests.get(url,verify=False)
```