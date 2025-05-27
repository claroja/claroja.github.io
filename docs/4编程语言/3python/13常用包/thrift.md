# thrift



`test.thrift`

```python
service PingService {
    string func(),
}
service AargsPingService {
    string func(1:string func);
}
service Sleep {
    oneway void sleep(1: i32 seconds)
}
```


`client.py`
```python
## coding=utf-8
import thriftpy2
from thriftpy2.rpc import make_client
mod_thrift = thriftpy2.load("test.thrift", module_name="mod_thrift")

def main():
    client = make_client(mod_thrift.PingService, '127.0.0.1', 6000)
    print(client.func())
if __name__ == '__main__':
    main()
```


`server.py`
```python
## coding=utf-8
import thriftpy2
from thriftpy2.rpc import make_server
mod_thrift = thriftpy2.load("test.thrift", module_name="mod_thrift")

## 实现.thrift文件定义的接口
class Dispatcher(object):
    def func(self):# 在.thrift文件中定义了方法名为ping
        print("客户端调用了func方法") 
        return '服务端返回func方法返回值'

def main():
    # 定义监听的端口和服务
    server = make_server(mod_thrift.PingService, Dispatcher(), '127.0.0.1', 6000)
    print("serving...")
    server.serve()
if __name__ == '__main__':
    main()
```

参考：
https://www.cnblogs.com/shenh/p/10529073.html
https://blog.csdn.net/zw19910924/article/details/78178539