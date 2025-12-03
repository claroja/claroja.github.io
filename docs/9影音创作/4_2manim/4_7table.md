# table


- DecimalTable：专门适配 DecimalNumber 的表格对象（Mobject），用于展示小数类型的表格数据

    ![alt text](table/DecimalTable.png)

- IntegerTable：专门适配 Integer 的表格对象（Mobject），用于展示整数类型的表格数据

    ![alt text](table/IntegerTable.png)

- MathTable：专门适配 LaTeX 的表格对象（Mobject），用于展示含数学公式（LaTeX 语法）的表格数据

    ![alt text](table/MathTable.png)

- MobjectTable：专门适配 Mobject 的表格对象（Mobject），用于展示以对象（如图形、文本）为单元格内容的表格

    ![alt text](table/MobjectTable.png)

- Table：在屏幕上显示表格的基础对象（Mobject），支持通用表格展示，是所有专用表格类的基础

    ![alt text](table/Table.png)



## table

### 参数



| 参数名称 | 类型 | 说明 |
| :--- | :--- | :--- |
| table | list[list] | 表格中显示的数据 |
| row_labels | list[VMobject] | 行标签，相当于表格的第一列 |
| col_labels | list[VMobject] | 列标签，相当于列名，表格的第一行 |
| top_left_entry | VMobject | 表格左上角显示的内容 |
| v_buff | float | 表格元素行间距 |
| h_buff | float | 表格元素列间距 |
| include_outer_lines | bool | 是否显示表格外边框 |
| add_background_rectangles_to_entries | bool | 表格背景色是否加到表格元素上 |
| entries_background_color | manim color | 表格元素的背景色 |
| include_background_rectangle | bool | 是否添加表格背景色 |
| background_rectangle_color | manim color | 表格的背景色 |
| arrange_in_grid_config | dict | 表格对齐方向的配置 |
| line_config | dict | 表格线条的配置 |



### 方法

| 名称 | 说明 |
| :--- | :--- |
| add_background_to_entries | 给表格元素添加背景 |
| add_highlighted_cell | 高亮某个单元格 |
| get_rows | 获取所有行对象 |
| get_columns | 获取所有列对象 |
| get_cell | 获取单元格 |
| get_row_labels | 获取行的标签 |
| get_col_labels | 获取列的标签 |
| get_horizontal_lines | 获取表格的横线 |
| get_vertical_lines | 获取表格的纵线 |
| scale | 缩放表格 |
| set_row_colors | 设置行颜色 |
| set_column_colors | 设置列颜色 |
| get_highlighted_cell | 获取高亮的单元格 |

---


### 实例

```python
data = [
    ["90", "100", "60"],
    ["66", "78", "83"],
]

## 默认的表格
Table(data)

cols = [
    Text("小红"),
    Text("小华"),
    Text("小明"),
]
rows = [Text("语文"), Text("数学")]
star = Star(color=RED).scale(0.5)
## 带有行列标签的表格

t = Table(
    data,
    col_labels=cols,
    row_labels=rows,
    top_left_entry=star,
)


## 行列操作

t.set_row_colors(
    BLUE, RED
)

rows = t.get_rows()
t.add(SurroundingRectangle(rows[1]))



t.set_column_colors(
    BLUE, RED, YELLOW
)

cols = t.get_columns()
t.add(SurroundingRectangle(cols[1]))


## 单元格操作

## 更改单元格颜色
cell1 = t.get_cell(pos=(2, 2))
cell1.set_color(RED)
t.add(cell1)

## 高亮 单元格

t.add_highlighted_cell(
    pos=(2, 2),
    color=GREEN,
)

## 边线操作

lines = t.get_horizontal_lines()
lines[0].set_color(RED)

lines = t.get_vertical_lines()
lines[0].set_color(RED)

```








## 参考

- https://www.cnblogs.com/wang_yb/p/18322456




