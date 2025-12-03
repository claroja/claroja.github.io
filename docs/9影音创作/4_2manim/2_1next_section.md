

`next_section(name='unnamed', section_type=DefaultSectionType.NORMAL, skip_animations=False)`

- name (str): 章节的名称
- section_type (str)： 章节类型
- skip_animations (bool) ： 跳过该章节的动画渲染，节约时间





```python
def construct(self):
    # 第一个动画, 不需要使用next_section
    self.next_section()
    # 运行动画
    self.next_section()
    # 每个section都需要动画, 如果没有, 则会移除, 不会输出文件. 如果想输出文件, 可以使用wait(), 它本质上也是动画.
    self.wait()
    self.next_section("section1")  # 可以给section取个名字
    # 运行动画
    self.next_section(skip_animations=True)  # 可以跳过改部分的动画渲染, 为开发节省时间
    # 运行动画
```






使用参数save_sections开启分章节。这样在输出文件夹下就会独立为每个章节生成视屏。
`manim --save_sections scene.py`


输出文件夹：

```markdown
media
├── images
│   └── simple_scenes
└── videos
    └── simple_scenes
        └── 480p15
            ├── ElaborateSceneWithSections.mp4
            ├── partial_movie_files
            └── sections
                ├── ElaborateSceneWithSections_0000.mp4
                ├── ElaborateSceneWithSections_0001.mp4
                ├── ElaborateSceneWithSections_0002.mp4
                └── ElaborateSceneWithSections.json
```





## 参考
- https://docs.manim.community/en/stable/reference/manim.scene.scene.Scene.html#manim.scene.scene.Scene.next_section
- https://docs.manim.community/en/stable/tutorials/output_and_config.html
