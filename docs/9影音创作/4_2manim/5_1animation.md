
# [animation](https://docs.manim.community/en/stable/reference/manim.animation.animation.html)




- Add：向场景中添加 Mobjects，不通过其他任何方式对其进行动画处理
- Animation：动画
- Wait：“无操作”动画



## [Add](https://docs.manim.community/en/stable/reference/manim.animation.animation.Add.html)

将MObjec不使用动画添加到场景中, 类似于`Scene.add()`, 不同的是`Add`可以和其他动画一起使用.

```python
    self.play(
        Create(rect, run_time=3.0),
        Succession(
            Wait(1.0),
            # You can Add a Mobject in the middle of an animation...
            Add(text_1),
            Wait(1.0),
            # ...or multiple Mobjects at once!
            Add(text_2, text_3),
        ),
    )
```


## [Animation](https://docs.manim.community/en/stable/reference/manim.animation.animation.Animation.html)

animation有固定的时间宽度.


`lag_ratio`参数: 定义了submobject动画的延迟时间. 该延迟时间是算在总动画时间里的.

## [Wait](https://docs.manim.community/en/stable/reference/manim.animation.animation.Wait.html)


没有动作的动画





















