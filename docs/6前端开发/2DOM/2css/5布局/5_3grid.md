# grid
## 最佳实践

https://www.zhangxinxu.com/wordpress/2018/11/display-grid-css-css3/comment-page-1/

1. 容器设置网格布局并指定名称
    1. grid-template-rows: 创建行
    2. grid-template-columns: 创建列(grid track)
    3. grid-template-areas: 
2. 子项使用class直接占用网格
3. 设置网格内容对齐: place-items, place-self
4. 设置网格自身对齐: align-content, justify-content

```htm
<html>
    <head>
        <style>
        .container {
        display: grid;
        grid-template-columns: auto auto;
        }
        
        .container > div {
            border: 1px solid black;
        }
        </style>
    </head>
    
    <body>

        <div class="container">
        <div>1</div>
        <div>2</div>
        <div>3</div>  
        <div>4</div>
        </div>

    </body>
</html>

```



## grid
grid是画好了框, 然后将元素填入指定框中

### [网格轨道(grid track)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_tracks)

1. grid-template-rows: 创建行
1. grid-template-columns: 创建列(grid track)
    1. 200px 200px 200px: 3列, 每列宽200px
    2. 1fr 1fr 1fr: 3列, 每列宽等分
    3. 500px 1fr 2fr: 3列, 第一列宽500px, 剩余两列平分剩余宽度
    4. repeat(3, 1fr): 3列, 每列宽等分
    5. 500px repeat(2, 1fr): 3列, 第一列宽500px, 剩余两列平分剩余宽度
    6. repeat(2, 100px 2fr): 4列, 前两列宽100px, 后两列平分剩余宽度

2. grid-auto-rows: 当子项个数超过grid-template-columns设置的值时, 会自动增加行. 该值设置自动增加行的高度.
    1. 200px: 行高200px
    2. minmax(100px, auto): 行高最小100px, 最大自动设置

### [网格线(grid lines)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_lines)
概念:
1. 如果有n行, 则有n+1个行线, 序号从线上到下
2. 如果有m列, 则有m+1个列线, 序号从左到右排

多格选择:

1. grid-row: 1 / 3; 取行线1~行线3中的2行, 等价下面详细的写法
    1. grid-row-start: 1;元素开始行线
    2. grid-row-end: 3; 元素结束行线
2. grid-column: 1 / 4; 取列线1~列线4中的3列, 等价下面的详细写法
    1. grid-column-start: 1; 元素开始列线
    2. grid-column-end: 4; 元素结束列线


单格选择:
1. grid-column: 1; 取第一行, 默认跟了grid-column-end: 2, 等价下面的详细写法:
2. grid-column-start: 1;

### [网格单元(Grid cells)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_cells)

默认每个元素会占据一个网格单元

### [网格区域(Grid areas)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#grid_areas)

通过网格线, 一个元素可以占据多个网格单元, 这样的多个网格单元被称为网格区域

1. [grid-area: 1 / 1 / 3 / 4](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_line-based_placement)
    1. grid-row-start: 1
    2. grid-column-start: 1
    3. grid-row-end: 3
    4. grid-column-end: 4


2. [给区域命名](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Grid_template_areas)

    在规划网格时, 每个网格都用区域名称填充, 子元素就可以使用class来直接引用网格名

    ```html
    .wrapper {
        display: grid;
        grid-template-columns: repeat(9, 1fr);
        grid-auto-rows: minmax(100px, auto);
        grid-template-areas:
            "hd hd hd hd   hd   hd   hd   hd   hd"
            "sd sd sd main main main main main main"
            ".  .  .  ft   ft   ft   ft   ft   ft";
    }

    <div class="wrapper">
        <div class="header">Header</div>
        <div class="sidebar">Sidebar</div>
        <div class="content">Content</div>
        <div class="footer">Footer</div>
    </div>
    ```


### [沟槽(Gutters)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters)

行与行, 列与列之间的间距

1. gap: 20px 1em; 行间距20px, 列间距1em. 等价下面的详细写法:
    1. row-gap: 20px; 行与行之间的间距
    2. column-gap: 1em; 列与列之间的间距

### [嵌套网格(Nesting grids)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#nesting_grids)

1. display: grid;
    1. grid-template-columns: repeat(3, 1fr); 子网格是重新创建的
    2. grid-template-columns: subgrid; 子网格是继承父网格, 没有重新创建

### [网格覆盖(Overlapping)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#layering_items_with_z-index)

默认序号排后的网格会覆盖序号靠前的网格, 可以使用z-index来控制



## 网格内容对齐(Box alignment)

网格有两个轴: 纵轴(block/column axis)和横轴(inline/row axis)

### [纵轴对齐](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#aligning_items_on_the_block_axis)

纵轴对齐是指在纵轴上移动, 也就是上对齐, 下对齐, 垂直居中.

1. align-items: 容器设置, 对所有子项生效
2. align-self: 子项设置, 仅对该子项生效
3. 二者可用属性有:
    1. stretch: 伸展
    2. center: 垂直居中
    3. start: 上对齐
    4. end: 下对齐

### [横轴对齐](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#justifying_items_on_the_inline_axis)

1. justify-items: 容器设置, 对所有子项生效
2. justify-self: 子项设置, 对该子项生效
    1. stretch: 伸展
    2. center: 水平居中
    3. start: 左对齐
    4. end: 右对齐


### 快捷设置


1. place-items: align-items justify-items;
2. place-self: align-self justify-self;



## 网格自身对齐(Content alignment)
如果容器分配的网格, 没有占据所有容器空间, 则可是使用
1. align-content在纵轴上对齐
2. justify-content在横轴上对齐
3. place-content同时在纵轴或横轴上对齐

### [纵轴对齐](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#aligning_the_grid_tracks_on_the_block_axis)

align-content:
1. start: 上对齐
2. end: 下对齐
3. center: 中对齐
4. space-between: 端对齐
5. space-around: 空白对齐1
6. space-evenly: 空白对齐2


### [横轴对齐](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#justifying_the_grid_tracks_on_the_inline_axis)

justify-content:
1. start: 左对齐
2. end: 右对齐
3. center: 中对齐
4. space-between: 端对齐
5. space-around: 空白对齐1
6. space-evenly: 空白对齐2



## 参考
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout