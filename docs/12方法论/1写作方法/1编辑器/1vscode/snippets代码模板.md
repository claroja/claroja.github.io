# 代码模板


## 自定义snippets
1. `insert snippet`查看所有可使用的snippet
2. `sinppets: Config User Snippets`来设置



```python
// in file 'Code/User/snippets/javascript.json'
{
	"Print to console": {
		"prefix": "log",
		"body": [
			"console.log('${1:位置1}');",
			"${2|one,two,three|}",
			"console.log('${0:位置0}')"
		],
		"description": "Log output to console"
	}
}
```
1. `For Loop`是snippet的名称
2. `prefix`snippet的trigger.支持Substring matching, 所以`fc`可以匹配`for-const`
3. `body`snippet的body
4. `description` `intelliSense`会展示snippet的description
    - `${2:element}` `${1:array})`所在的位置可以使用`TAB`键来快速跳转,  `$0`是最终跳转的位置
    - `${2:element}` 中`:`后面的是默认的字符串
    - `${1|array,list|})` 可以让用户在`array`和`list`中选择
    - `$1`, `$2` for tab stops, `$0` for the final cursor position



```python
{
	"markfont": {
		"prefix": "font",
		"body": [
			"<font style=\"background: ${1|yellow,hotpink,lightgreen|}\">${2}</font>",
		],
		"description": "background color"
	}
}
```




## fencedCodeBlock

[参考](https://danielabaron.me/blog/vscode-markdown-basics-custom-fenced-languages/)


## 使用拓展
可以在`extensions`中搜索`sinppet`相关的extension

参考:
https://code.visualstudio.com/docs/editor/userdefinedsnippets