

## 常规流中的块元素和内联元素




### 块元素
块元素是垂直布局

块元素默认有边距.
边距塌陷(margin collapseing): 如果两个块元素边距相邻, 则大的边距会吃掉小的边距, 总边距是去较大的, 而不是两者相加.

默认情况下，块元素将占用内联方向的所有空间，既水平方向填满。



### 内联元素
内联元素是水平布局
线条框(line boxe): 内联元素每一行. 无法直接定位这些框
线条框中的最高内联元素空值线条框的高度.

参考: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow


## 溢出的处理overflow


控制当内容超出元素的尺寸限制时的显示方式


1. visible（默认值）：内容会在元素框之外可见
2. hidden：内容会被裁剪，超出元素边界的部分将不可见
3. scroll：内容会被裁剪，同时会显示滚动条
4. auto：由浏览器决定如何处理溢出内容。如果内容超出元素边界，浏览器会根据需要自动显示滚动条。

参考: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout/Flow_layout_and_overflow



## 浮动BFC(block formatting context)

参考: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts



## 参考
https://developer.mozilla.org/en-US/docs/Web/CSS/display#css_flow_layout_display_block_display_inline
