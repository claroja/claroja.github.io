# scene



- moving_camera_scene：摄像机可自由移动的场景（支持镜头平移、跟随动画对象等操作）
- section：分段视频API的基础构建模块（用于拆分视频流程、实现模块化动画）
- scene：动画的基础画布（所有几何对象、动画效果的承载容器）
- scene_file_writer：场景与ffmpeg的交互接口（负责动画渲染、视频文件输出）
- three_d_scene：适配三维对象与动画的场景（支持3D几何对象渲染、三维视角调整）
- vector_space_scene：适用于向量空间的场景（优化向量、坐标、图表等元素的展示效果）
- zoomed_scene：支持对指定区域放大的场景（可聚焦局部细节，实现缩放动画）


## [MovingCameraScene](https://docs.manim.community/en/stable/reference/manim.scene.moving_camera_scene.html)


```python
from manim import *

class MovingAndZoomingCamera(MovingCameraScene):
    def construct(self):
        s = Square(color=BLUE, fill_opacity=0.5).move_to(2 * LEFT)
        t = Triangle(color=YELLOW, fill_opacity=0.5).move_to(2 * RIGHT)
        self.add(s, t)
        self.play(self.camera.frame.animate.move_to(s).set(width=s.width*2))
        self.wait(0.3)
        self.play(self.camera.frame.animate.move_to(t).set(width=t.width*2))

        self.play(self.camera.frame.animate.move_to(ORIGIN).set(width=14))
```

## [Section](https://docs.manim.community/en/stable/reference/manim.scene.section.Section.html)

每个Scene可以被分解为多个Section


```python
def construct(self):
    # play the first animations...
    # you don't need a section in the very beginning as it gets created automatically
    self.next_section()
    # play more animations...
    self.next_section("this is an optional name that doesn't have to be unique")
    # play even more animations...
    self.next_section("this is a section without any animations, it will be removed")
```



## [Scene](https://docs.manim.community/en/stable/reference/manim.scene.scene.Scene.html)

Scene是画布(canvas). 包含了`frame`,`mobject`,`cameras`等一系列的对象.

- 用户通过重写`Scene.construct()`来控制画布.
- 通过`Scene.add()`添加Mobject, 通过`Scene.remove()`删除Mobject. 画布上所有的Mobject会保存在`Scene.mobjects`. 
- 通过`Scene.play()`开始动画.


`class Scene(renderer=None, camera_class=<class 'manim.camera.camera.Camera'>, always_update_mobjects=False, random_seed=None, skip_animations=False)`








### 属性

### 方法

方法|描述
--|--
construct|所有的操作都写在此处
add|添加`mobject`对象
bring_to_back|将`mobject`放在最后
bring_to_front|将`mobject`放在最前
clear|移除所有`mobject`
next_section|
pause|暂停
play|表演动画
remove|移除对象
wait|等待




- `add(*mobjects)`: 添加mobject
- `add_foreground_mobject(mobject)`
- `add_foreground_mobjects(*mobjects)`
- `add_sound(sound_file, time_offset=0, gain=None, **kwargs)`: 添加声音
- `add_subcaption(content, duration=1, offset=0)`: 
- `add_updater(func)`
- `begin_animations()`
- `bring_to_back(*mobjects)`: 移动mobject到后台
- `bring_to_front(*mobjects)`: 移动mobject到前台
- `clear()`: 清空`self.mobjects`和`self.foreground_mobjects`
- `compile_animation_data(*animations, **play_kwargs)`
- `compile_animations(*args, **kwargs)`
- `construct()`
- `get_attrs(*keys)`
- `get_mobject_family_members()`
- `get_moving_mobjects(*animations)`
- `get_restructured_mobject_list(mobjects, to_remove)`
- `get_run_time(animations)`
- `get_time_progression(run_time, description, n_iterations=None, override_skip_animations=False)`
- `get_top_level_mobjects()`
- `interactive_embed()`
- `is_current_animation_frozen_frame()`
- `next_section(name='unnamed', section_type=DefaultSectionType.NORMAL, skip_animations=False)`
- `pause(duration=1.0)`
- `play(*args, subcaption=None, subcaption_duration=None, subcaption_offset=0, **kwargs)`
- `play_internal(skip_rendering=False)`
- `remove(*mobjects)`
- `remove_foreground_mobject(mobject)`
- `remove_foreground_mobjects(*to_remove)`
- `remove_updater(func)`
- `render(preview=False)`
- `replace(old_mobject, new_mobject)`
- `restructure_mobjects(to_remove, mobject_list_name='mobjects', extract_families=True)`
- `setup()`
- `should_update_mobjects()`
- `tear_down()`
- `update_mobjects(dt)`
- `update_self(dt)`
- `wait(duration=1.0, stop_condition=None, frozen_frame=None)`
- `wait_until(stop_condition, max_time=60)`



## SceneFileWriter

将动画写入视频文件, 用户基本不会用到.


## ThreeDScene

3D

## vector_space_scene 

- [LinearTransformationScene](https://docs.manim.community/en/stable/reference/manim.scene.vector_space_scene.LinearTransformationScene.html)

    为线性变换专门定制




- [VectorScene](https://docs.manim.community/en/stable/reference/manim.scene.vector_space_scene.VectorScene.html)


## [ZoomedScene](https://docs.manim.community/en/stable/reference/manim.scene.zoomed_scene.html)

可以在局部放大





## 参考:

- https://docs.manim.community/en/stable/reference_index/scenes.html