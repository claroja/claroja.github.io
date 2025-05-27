# config


直接修改配置文件:
```python
from manim import config
from manim import WHITE
config.background_color = WHITE
config["background_color"] = WHITE
```
注意一些配置文件是相互关联的

```python
config.frame_height # 8.0
config.frame_y_radius = 5.0  # 更改y轴的半径, 会影响y轴的长度
config.frame_height  # 10.0  # frame_height = 2 * frame_y_radius
```


常用的一些配置项
```python

from manim import *

## 背景设置
config.background_color  # black
config.background_opacity  # 1.0

## 画布的大小

### 像素
config.pixel_height  # 1080
config.pixel_width  # 1920
config.frame_size  # 1920, 1080
### 坐标系
config.frame_height  # 8
config.frame_width  # 14.22
config.frame_x_radius  # 4
config.frame_y_radius  # 7.11
config.bottom # array([ 0., -4.,  0.])
config.left_side  # array([-7.11, 0., 0.])
config.right_side  # array([-7.11, 0., 0.])
config.top  # array([0., 4., 0.])
### 输出配置
config.assets_dir  # './'
config.media_dir  # './media'
config.images_dir  # '{media_dir}/images/{module_name}'
config.log_dir  # '{media_dir}/logs'
config.partial_movie_dir  # '{video_dir}/partial_movie_files/{scene_name}'
config.sections_dir  # '{video_dir}/sections'
config.tex_dir  # '{media_dir}/Tex'
config.text_dir  # '{media_dir}/texts'
config.video_dir  # '{media_dir}/videos/{module_name}/{quality}'
```



参考:
https://docs.manim.community/en/stable/reference/manim._config.utils.ManimConfig.html