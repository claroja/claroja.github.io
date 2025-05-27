# hover

鼠标悬停时触发. 是js的`onmoseover`的快捷实现方式.

## 本元素发生变化

选取span元素，当滑鼠滑过此元素，高度会从 50px 增加到 100px

```css
span:hover {
  height: 100px;
}
```

## 相邻的元素发生变化

设定选取A元素，当滑鼠滑过A元素时, B元素会产生指定的样式变化

```css
.test3:hover + .test4 {
  background-color: pink;
}
```
## 子元素发生变化

```css
.container:hover div {
  width: 200px;
}
```






## 参考

https://ithelp.ithome.com.tw/articles/10309851