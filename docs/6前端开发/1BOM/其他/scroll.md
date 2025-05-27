# scroll

## scroll
`window.scrollX`属性返回页面的水平滚动距离，`window.scrollY`属性返回页面的垂直滚动距离，单位都为像素。这两个属性只读。
注意，这两个属性的返回值不是整数，而是双精度浮点数。如果页面没有滚动，它们的值就是0。
举例来说，如果用户向下拉动了垂直滚动条75像素，那么`window.scrollY`就是75左右。用户水平向右拉动水平滚动条200像素，`window.scrollX`就是200左右。
```js
if (window.scrollY < 75) {
  window.scroll(0, 75);
}
```
`window.pageXOffset`属性和`window.pageYOffset`属性，是`window.scrollX`和`window.scrollY`别名。


`window.scrollTo`方法用于将文档滚动到指定位置。它接受两个参数，表示滚动后位于窗口左上角的页面坐标。
```javascript
window.scrollTo(x-coord, y-coord)
```
它也可以接受一个配置对象作为参数。
```javascript
window.scrollTo(options)
```
配置对象options有三个属性。

- top：滚动后页面左上角的垂直坐标，即y坐标。
- left：滚动后页面左上角的水平坐标，即x坐标。
- behavior：字符串，表示滚动的方式，有三个可能值（smooth、instant、auto），默认值为auto。

```javascript
window.scrollTo({
  top: 1000,
  behavior: 'smooth'
});
```

`window.scroll()`方法是window.scrollTo()方法的别名。

`window.scrollBy()`方法用于将网页滚动指定距离（单位像素）。它接受两个参数：水平向右滚动的像素，垂直向下滚动的像素。

```javascript
window.scrollBy(0, window.innerHeight)
```
如果不是要滚动整个文档，而是要滚动某个元素，可以使用下面三个属性和方法。

- Element.scrollTop
- Element.scrollLeft
- Element.scrollIntoView()
