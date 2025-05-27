# feature


## 层叠性
相同选择器给设置相同的样式，此时一个样式就会覆盖（层叠）另一个的样式。
层叠性原则:
- 样式冲突，遵循的原则是就近原则，哪个样式离结构近，就执行哪个样式
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS层叠性</title>
    <style>
       div {
           color: red;
       }
       div {
           color: pink;
       }
    </style>
</head>
<body>
    <div>最终显示的pink</div>
</body>
</html>
```


## 继承性 
子标签会继承父标签的某些样式，如文本颜色和字号。
(text-，font-，line-这些元素开头的可以继承，以及color属性)


下例中`<p>`标签继承了`<div>`标签的css.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS继承性</title>
    <style>
        div {
            color: pink;
            font-size: 10px;
        }
    </style>
</head>
<body>
    <div>
        <p>龙生龙</p>
    </div>
</body>
</html>
```
## 优先级
当同一个元素指定多个选择器，根据优先级来判断以哪个选择器为准。


优先级计算:
选择器|权重
--|--
继承或`*`|0,0,0,0
元素选择器|0,0,0,1
类选择器|0,0,1,0
id选择器|0,1,0,0
行内样式|1,0,0,0
`!important`|最大


优先级注意点:
1. 权重是有4组数字组成
2. 等级判断从左向右，如果某一位数值相同，则判断下一位数值。
3. 继承的权重是0， 如果该元素没有直接选中，不管父元素权重多高，子元素得到的权重都是 0。
4. 权重叠加：如果是复合选择器，则会有权重叠加，需要计算权重。
    - div ul  li   ------>      0,0,0,3
    - .nav ul li   ------>      0,0,1,2
    - a:hover      -----—>      0,0,1,1
    - .nav a       ------>      0,0,1,1

例子:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS优先级</title>
    <style>
       
        .test {
            color: red;
        }
        div {
            color: pink!important;
        }
        #demo {
            color: green;
        }
    </style>
</head>
<body>
    <div class="test" id="demo" style="color: purple">优先级测试</div>
</body>
</html>
```