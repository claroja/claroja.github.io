# jquery

对于一些使用jquery的网站, 有些`input`标签不能正常输入值, 所以直接调用jquery的方法即可.


## 基本操作
1.发送文本语法：$(css selector).val(输入值)

2.清空文本语法：$(css selector).val('') #空字符串

3.点击按钮：$(css selector).click()

## 操作select标签
比如`<select class="selector"></select>`

1、设置`value`为`pxx`的项选中, 注意`val`中的值是`<iption>`中的`value`属性
    `$(".selector").val("pxx");`
2、设置text为pxx的项选中
    `$(".selector").find("option[text='pxx']").attr("selected",true);`
3、获取当前选中项的value
    `$(".selector").val();`
4、获取当前选中项的text
    `$(".selector").find("option:selected").text();`









参考:
https://www.cnblogs.com/xiaoyujuan/p/13708627.html
https://www.cnblogs.com/hailexuexi/p/6708110.html