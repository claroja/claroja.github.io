# command


## 最佳实践

使用`manim render --help`来查看所有的渲染配置


## command

命令行用来生成文件, 其中render是默认选项, 可以省略: 

`manim (render) [OPTIONS] FILE [SCENE_NAMES]`

🌰例如:

`manim -qm file.py SceneOne`等价于`manim render -qm file.py SceneOne`

这条命令将在`file.py`中寻找`SceneOne`类, 使用`-qm`参数进行渲染.



参数|描述
--|--
`-p, --preview`|preview, 预览, 当渲染完成后自动打开进行预览
`-f, --show_in_file_browser`|打开渲染文件的文件夹
`--format [png|gif|mp4|webm|mov]`|设置渲染的结果
`-q, --quality [l|m|h|p|k] `|设置渲染的质量
`--fps, --frame_rate FLOAT `|设置帧率


使用`manim render --help`来查看所有的渲染配置



## 参考:

- https://docs.manim.community/en/stable/guides/configuration.html#command-line-arguments