
# SVG.Runner


## 最佳实践
```js
// 创建一个 SVG 画布
const draw = SVG().addTo('body').size(300, 300);
// 创建一个矩形
const rect = draw.rect(100, 100).move(50, 50).fill('#f06');
// 第一个动画：移动矩形
const firstRunner = rect.animate(1000).move(150, 150);
// 监听第一个动画的结束事件
firstRunner.after(() => {
  // 第二个动画：改变矩形的颜色
  rect.animate(1000).fill('#06f');
});
```


## 创建Runner

2. 直接创建Runner

  ```js
  // 创建runner
  var runner = new SVG.Runner(1000)
  runner.element(someElement)
  runner.move(100, 100)
  runner.step(20)
  // To animate, we need a timeline on which the runner is run
  var timeline = new SVG.Timeline()
  timeline.schedule(runner)
  ```

1. 使用元素`animate()`方法直接获得runner

  ```js
  let rect = draw.rect(100, 100)
  let runner = rect.animate()
  ```



## runner方法

1. runner.element(), 获得或设置动画绑定的元素
2. runner.timeline(), 获得或设置动画的timeline
3. runner.schedule(timeline, delay, when), 设置动画的timeline
4. runner.unschedule(), 从timeline中移除动画
5. runner.animate(), 链式调用, 第一个动画完成后调用下一个animate
6. runner.loop(times, swing, wait), 重复动画, times次, 每次相隔wait
7. runner.queue(runOnceFn, runOnEveryStepFn), runner没一步调用的方法
8. runner.during(fn)，动画每一步调用方法
9. runner.after(fn), 动画完成后调用
10. runner.time(), 动画当前的时间
11. runner.duration(), 动画的持续时间
12. runner.loops(), 跳转到指定重复次数, 如3.5表示第4次循环的一半时间
13. runner.persist(), 让动画一直保存在时间线上, 默认会清理内存
14. runner.position(), 获得动画当前的位置比例(0~1), 不包含wait时间
15. runner.progress(), 获得动画当前的位置比例(0~1), 包含wait时间
16. runner.step(dt), ?
17. runner.reset(), 到开始状态
18. runner.finish(), 到结束状态
19. runner.reverse(), 倒序播放
20. runner.ease(), 设置动画运动特效
21. runner.active(), 激活动画

