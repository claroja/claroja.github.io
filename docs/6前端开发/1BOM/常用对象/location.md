# location

[参考官网](https://developer.mozilla.org/en-US/docs/Web/API/Location)



window 对象给我们提供了一个 location 属性用于获取或设置窗体的 URL，并且可以用于解析 URL 。 



### location对象属性
location对象属性|返回值
--|--
location.href|获取或者设置整个URL
location.host|返回主机 (域名)  www.itheima.com
location.port|返回端口号如果未写返回空字符串
location.pathname|返回路径
location.search|返回参数
location.hash|返回片段  #后面内容常见于链接锚点

以上属性, 对应了url的格式:
```
protocol://host[:port]/path/[?query]#fragment
http://www.xxx.cn/index.html?name=andy&age=18#link
```
组成|说明
--|--
protocol|通信协议常用的http,ftp,maito等
host|主机(域名)www.xxx.com
port|端口号可选,省略时使用方案的默认端口如http的默认端口为80
path|路径由零或多个/符号隔开的字符串，一般用来表示主机上的一个目录或文件地址
query|参数以键值对的形式，通过&符号分隔开来
fragment|片段#后面内容常见于链接 锚点


```html
<body>
    <button>点击</button>
    <div></div>
    <script>
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        btn.addEventListener('click', function() {
            // console.log(location.href);
            location.href = 'http://www.baidu.com';
        })
        var timer = 5;
        setInterval(function() {
            if (timer == 0) {
                location.href = 'http://www.baidu.com';
            } else {
                div.innerHTML = '您将在' + timer + '秒钟之后跳转到首页';
                timer--;
            }
        }, 1000);
    </script>
</body>
```

### location对象的方法
location对象方法|返回值
--|--
location.assign()|跟href一样,可以跳转页面(也称为重定向页面)（记录浏览历史，所以可以实现后退功能）
location.replace()|替换当前页面，因为不记录历史，所以不能后退页面
location.reload()|重新加载页面，相当于刷新按钮或者f5 如果参数为true强制刷新ctrl+f5
```html
<body>
    <button>点击</button>
    <script>
        var btn = document.querySelector('button');
        btn.addEventListener('click', function() {
            // 记录浏览历史，所以可以实现后退功能
            // location.assign('http://www.baidu.cn');
            // 不记录浏览历史，所以不可以实现后退功能
            // location.replace('http://www.baidu.cn');
            location.reload(true);
        })
    </script>
</body>
```