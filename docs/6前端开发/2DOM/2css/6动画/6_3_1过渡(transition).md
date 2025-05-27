# 过渡(transition)

过渡(transition)让属性变化成为一个持续一段时间的，而不是立即生效. 通常将两个状态之间的过渡称为隐式过渡，因为开始与结束之间的状态由浏览器决定.


## 最佳实践

以下 CSS 会为 backgroud-color 的变化生成一个 3 秒的过渡动画：

```css
<style>
  #color {
    transition-property: background-color;
    transition-duration: 3s;
  }
</style>

```

```htm
<button id="color">Click me</button>

<script>
  color.onclick = function() {
    this.style.backgroundColor = 'red';
  };
</script>
```




## 语法：
CSS 提供了四个属性来描述一个过渡：
```css
div {
    /*       <property> <duration> <timing-function> <delay>; */
    transition: 过渡的属性  持续时间  运动曲线  延迟时间;
}
```

1. [属性(property)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-property): 要设置动画的所有属性，如：left、margin-left、height 和 color。all 表示应用在所有属性上。注意不是所有的 CSS 属性都可以使用过渡动画。
2. [持续时间(duration)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-duration)： 单位是 秒（必须写单位） 比如 0.5s 
3. [运动曲线(timing-function)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function)：时间函数描述了动画进程在时间上的分布。它是先慢后快还是先快后慢？ 默认是 ease （可以省略）
4. [延迟时间(delay)](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-delay)：单位是 秒（必须写单位）可以设置延迟触发时间, 默认是 0s


## 参考
1. https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_transitions/Using_CSS_transitions
2. https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition
