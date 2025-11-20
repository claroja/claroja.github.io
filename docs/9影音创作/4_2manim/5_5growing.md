# [growing](https://docs.manim.community/en/stable/reference/manim.animation.growing.html)




4. GrowFromPoint：以某个点为起点向外扩展，呈现对象（Mobject）的引入效果
2. GrowFromCenter：从对象（Mobject）的中心向外扩展，实现对象的引入
3. GrowFromEdge：从对象（Mobject）边界框的某一条边开始扩展，完成对象的引入
1. GrowArrow：从箭头（Arrow）的起点向尖端逐步伸展，呈现箭头的引入效果
5. SpinInFromNothing：对象（Mobject）从中心旋转并同时扩大，实现从无到有的引入

![alt text](animation/Growing.gif)

```python
self.play(GrowFromPoint(square, ORIGIN))
self.play(GrowFromCenter(circle))
self.play(GrowFromEdge(triangle, DOWN))
self.play(GrowArrow(arrow))
self.play(SpinInFromNothing(star))
```



