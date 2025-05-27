# xpath




```javascript
element = document.evaluate('/html/body/div/div[4]/div[2]/h2',document).iterateNext()
```
可以替代selenium的`BY.xpath`, 将所有解析html的任务都交给`javascript`



参考:
https://www.w3school.com.cn/xmldom/met_document_evaluate.asp
https://developer.mozilla.org/zh-CN/docs/Web/XPath/Introduction_to_using_XPath_in_JavaScript