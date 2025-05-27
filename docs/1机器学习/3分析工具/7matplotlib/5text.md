# text


`Artist`的子类, x轴y轴的`ticklable`就是`text`.
经常使用`set`方法来改变其颜色, 字体等:
`Text.set(color="red")`

```python
import matplotlib.pyplot as plt
fig, ax = plt.subplots()
ax.set(
    xlim=(0, 4),
    ylim=(0, 4),
)
ax.text(1, 2, r'an equation: $E=mc^2$', fontsize=15)
fig.show()
```


## API
[参考官网](https://matplotlib.org/stable/api/text_api.html#matplotlib.text.Text)
```
class matplotlib.text.Text(x=0, y=0, text='', *, color=None, verticalalignment='baseline', horizontalalignment='left', multialignment=None, fontproperties=None, rotation=None, linespacing=None, rotation_mode=None, usetex=None, wrap=False, transform_rotates_text=False, parse_math=None, **kwargs)[source
```

参数|描述
--|--

