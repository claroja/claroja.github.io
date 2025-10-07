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

1. [嵌套网格(Nesting grids)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#nesting_grids)

    1. grid-template-columns: repeat(3, 1fr); 子网格是重新创建的
    2. grid-template-columns: subgrid; 子网格是继承父网格, 没有重新创建

2. [网格覆盖(Overlapping)](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#layering_items_with_z-index)

    默认序号排后的网格会覆盖序号靠前的网格, 可以使用z-index来控制


## 参考
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout