# Configuration


- _config：用于设置全局配置和日志记录器（统一管理项目核心配置参数与日志规则）
- utils：配置创建与设置工具集（提供配置相关的辅助操作，简化配置流程）
- logger_utils：日志记录器创建与设置工具集（专门用于日志相关的初始化、配置操作）


## 最佳实践

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


## utils

- [ManimConfig](https://docs.manim.community/en/stable/reference/manim._config.utils.ManimConfig.html)

    字典结构保存所有配置. 全局的`config`对象就是这个类的实例. 可以通过以下方式配置, 有顺序的配置:
    
    1. 配置文件, `manim.cfg`

        ```markdown
        [CLI]
        background_color = WHITE
        ```

    2. 命令行参数, 

        `manim scene.py -c BLUE`

    3. 代码

        ```python
        from manim import *

        config.background_color = RED
        ```

## 配置对象
方法

- copy：深度复制当前 ManimConfig 的全部内容（复制后修改不影响原配置）
- digest_args：处理命令行参数（CLI）中包含的配置选项
- digest_file：处理 .cfg 配置文件中包含的配置选项
- digest_parser：处理 ConfigParser 对象中包含的配置选项
- get_dir：解析存储目录路径的配置选项（返回规范后的目录路径）
- resolve_movie_file_extension：解析视频文件的扩展名（适配不同输出格式需求）
- update：处理另一个 ManimConfig 对象或字典中包含的配置选项（合并更新当前配置）


属性

- aspect_ratio：像素层面的宽高比（width/height），对应命令行参数 --resolution、-r
- assets_dir：视频资源查找目录（无命令行标识）
- background_color：场景背景色，对应命令行参数 -c
- background_opacity：背景透明度（取值范围 0.0 完全透明 ~ 1.0 完全不透明）
- bottom：帧底部中心的坐标值
- custom_folders：是否使用自定义文件夹输出
- disable_caching：是否禁用场景缓存
- disable_caching_warning：若需哈希的子对象过多时，是否触发警告
- dry_run：是否启用空运行模式（仅校验不实际渲染）
- enable_gui：是否启用图形界面（GUI）交互
- enable_wireframe：在 OpenGL 渲染器中是否启用线框调试模式
- ffmpeg_loglevel：ffmpeg 的日志详细程度（无命令行标识）
- flush_cache：是否删除所有缓存的部分视频文件
- force_window：使用 OpenGL 渲染器时是否强制显示窗口
- format：输出文件格式（可选值："png"、"gif"、"mp4"、"webm" 或 "mov"）
- frame_height：逻辑单位下的帧高度（无命令行标识）
- frame_rate：帧率（单位：帧/秒）
- frame_size：像素维度的帧尺寸元组（格式：(像素宽度, 像素高度)，无命令行标识）
- frame_width：逻辑单位下的帧宽度（无命令行标识）
- frame_x_radius：帧宽度的一半（无命令行标识）
- frame_y_radius：帧高度的一半（无命令行标识）
- from_animation_number：从指定动画序号开始渲染，对应命令行参数 -n
- fullscreen：是否将窗口扩展至最大可用尺寸
- gui_location：启用图形界面（GUI）交互（与 enable_gui 功能关联）
- images_dir：图片输出目录（无命令行标识）
- input_file：输入文件名
- left_side：帧左侧中间的坐标值
- log_dir：日志输出目录
- log_to_file：是否将日志保存至文件
- max_files_cached：缓存文件的最大数量限制
- media_dir：主输出目录
- media_embed：是否在 Jupyter Notebook 中嵌入视频
- media_width：Jupyter Notebook 中视频的显示宽度
- movie_file_extension：视频文件扩展名（可选值：.mp4、.webm 或 .mov）
- no_latex_cleanup：是否保留 Tex 和 MathTex 生成的 .aux、.dvi、.log 文件（避免自动删除）
- notify_outdated_version：是否提示版本更新通知
- output_file：输出文件名，对应命令行参数 -o
- partial_movie_dir：部分视频文件的输出目录（无命令行标识）
- pixel_height：像素维度的帧高度，对应命令行参数 --resolution、-r
- pixel_width：像素维度的帧宽度，对应命令行参数 --resolution、-r
- plugins：需要启用的插件列表
- preview：渲染后是否自动播放视频，对应命令行参数 -p
- preview_command：视频预览的执行命令
- progress_bar：渲染动画时是否显示进度条
- quality：视频质量，对应命令行参数 -q
- renderer：当前激活的渲染器
- right_side：帧右侧中间的坐标值
- save_as_gif：是否将渲染场景保存为 .gif 格式，对应命令行参数 -i
- save_last_frame：是否将场景最后一帧保存为图片文件，对应命令行参数 -s
- save_pngs：是否将场景所有帧保存为图片文件，对应命令行参数 -g
- save_sections：除完整视频外，是否为每个分段单独保存视频文件
- scene_names：需从文件中渲染的场景名称列表
- sections_dir：分段视频的输出目录（无命令行标识）
- show_in_file_browser：渲染后是否在文件浏览器中显示输出文件，对应命令行参数 -f
- tex_dir：Tex 相关文件的输出目录（无命令行标识）
- tex_template：渲染 Tex 时使用的模板
- tex_template_file：读取 Tex 模板的文件路径（无命令行标识）
- text_dir：文本相关文件的输出目录（无命令行标识）
- top：帧顶部中心的坐标值
- transparent：背景是否透明（即背景透明度小于 1.0），对应命令行参数 -t
- upto_animation_number：渲染至指定动画序号后停止
- use_projection_fill_shaders：是否为 OpenGLVMobject 的填充效果使用兼容变换矩阵的着色器
- use_projection_stroke_shaders：是否为 OpenGLVMobject 的描边效果使用兼容变换矩阵的着色器
- verbosity：日志详细级别（可选值："DEBUG"、"INFO"、"WARNING"、"ERROR"、"CRITICAL"），对应命令行参数 -v
- video_dir：视频输出目录（无命令行标识）
- window_monitor：用于渲染场景的显示器
- window_position：预览窗口的位置设置
- window_size：OpenGL 窗口的尺寸
- write_all：是否渲染输入文件中的所有场景，对应命令行参数 -a
- write_to_movie：是否将场景渲染为视频文件，对应命令行参数 -w
- zero_pad：PNG 图片文件名的补零位数（如 0001.png、0002.png）



























