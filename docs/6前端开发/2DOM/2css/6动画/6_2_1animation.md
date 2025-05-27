
```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* two animations */
animation:
  3s linear slidein,
  3s ease-out 5s slideout;
```

1. [duration](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-duration): 动画持续时间, 如`3s`.
2. [easing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-timing-function): 运动样式, 如`ease`
3. [delay](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-delay): 从应用动画到元素, 到执行动画之间等待的时间, 如`3s`
4. [iteration-count](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-iteration-count): 重复的次数, 如`2`
5. [direction](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-direction): 正向播放, 反向播放, 正反交替播放, 如`reverse`
6. [fill-mode](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-fill-mode): 动画执行前后如何应用样式, 如`forwards`, 当动画结束后, 将结束后的样式应用到元素上
7. [play-state](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-play-state): 设置动画运行还是暂停, 如`paused`
8. [name](https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation-name): 关键帧名称











## 参考
1. https://developer.mozilla.org/zh-CN/docs/Web/CSS/animation