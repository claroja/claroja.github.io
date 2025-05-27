# 绝对定位(absolute)

**绝对定位**是相对于它**祖先元素**来说的。

语法：

```css
选择器 { 
position: absolute; 
}
```

特点:
1. **完全脱标** 完全不占位置；  
2. 如果**父元素没有定位**, 则会跳过父元素,以**浏览器(document, 可以理解为body标签)**为准定位。下例中, 子元素`.son`是相对于浏览器定位的, 而不是相对于父元素`.father`定位, 因为父亲没有定位

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>绝对定位-无父亲或者父亲无定位</title>
    <style>
        .father {
            width: 500px;
            height: 500px;
            background-color: skyblue;
        }
        .son {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son"></div>
    </div>
   
</body>
</html>
```

3. 如果`父元素要有定位`, 元素将依据`最近`的已经定位（绝对、固定或相对定位）的祖先进行定位。下面的例子中, `.son`元素是根据`.yeye`元素进行定位的, 因为`.yeye`是距离它最近的有定位的祖先元素. 如果我们放开`.father`的`position: relative;`注释, 则`.son`会相对于`.father`来定位. 也就是说遵循就近原则.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>绝对定位-父级有定位</title>
    <style>
        .yeye {
            position: relative;
            width: 800px;
            height: 800px;
            background-color: hotpink;
            padding: 50px;
        }
        .father {
            /* position: relative; */
            width: 500px;
            height: 500px;
            background-color: skyblue;
        }
        .son {
            position: absolute;
            left: 30px;
            bottom: 10px;
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div class="yeye">
        <div class="father">
            <div class="son"></div>
        </div>
    </div>
</body>
</html>
```


✨注意:
1. 子级绝对定位，不会占有位置，可以放到父盒子里面的任何一个地方，不会影响其他的兄弟盒子。
2. 父盒子需要加定位限制子盒子在父盒子内显示。
3. 父盒子布局时，需要占有位置，因此父亲只能是相对定位。
这就是子绝父相的由来，所以**相对定位经常用来作为绝对定位的父级**。