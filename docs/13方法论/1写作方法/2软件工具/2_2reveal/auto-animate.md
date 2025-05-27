# auto-animation




不同的幻灯片之间使用data-auto-animate属性, 可进行动画过渡, 而不是默认的翻页效果.



## [元素匹配](https://revealjs.com/auto-animate/#how-elements-are-matched)

### 自动匹配
默认reveal会在两个幻灯片之间通过, 
1. 文本内容(text content)
2. 节点类型(node type)
3. DOM中的顺序

等来确定匹配的元素, 如img标签, 使用src属性来匹配.


### 手动匹配

可以在元素中添加data-id属性来指定匹配


## [动画设置](https://revealjs.com/auto-animate/#animation-settings)


## [动画分组](https://revealjs.com/auto-animate/#auto-animate-id-%26-restart)


在section元素中, 使用data-auto-animate-id属性, 给动画分组. 不同分组间, 就会是默认翻页模式.












































