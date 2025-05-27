# keyboardEvent


## 键盘事件
键盘事件|触发条件
--|--
onkeyup|某个键盘按键被松开时触发
onkeydown|某个键盘按键被按下时触发
onkeypress(官方要废弃, 不建议使用)|某个键盘按键被按下时触发, 但是它不识别功能键 比如ctrl shift箭头等

例子:
```html
<body>
    <script>
        // 常用的键盘事件
        //1. keyup 按键弹起的时候触发 
        document.addEventListener('keyup', function() {
            console.log('我弹起了');
        })
        //3. keypress 按键按下的时候触发  不能识别功能键 比如 ctrl shift 左右箭头啊
        document.addEventListener('keypress', function() {
                console.log('我按下了press');
        })
        //2. keydown 按键按下的时候触发  能识别功能键 比如 ctrl shift 左右箭头啊
        document.addEventListener('keydown', function() {
                console.log('我按下了down');
        })
        // 4. 三个事件的执行顺序  keydown -- keypress -- keyup
    </script>
</body>
```

## 键盘事件对象
键盘事件对象属性|说明
--|--
keyCode|返回该键的ASCII值

键盘事件对象中的keyCode属性可以得到相应键的ASCII码值
1.我们的keyup 和keydown事件不区分字母大小写 a和A得到的都是65, 开发中更多使用
2.我们的keypress 事件区分字母大小写 a 97和A得到的是65


 ```html
<body>
    <script>
        // 键盘事件对象中的keyCode属性可以得到相应键的ASCII码值
        // 1. 我们的keyup 和keydown事件不区分字母大小写  a 和 A 得到的都是65
        // 2. 我们的keypress 事件 区分字母大小写  a  97 和 A 得到的是65
        document.addEventListener('keyup', function(e) {
            console.log('up:' + e.keyCode);
            // 我们可以利用keycode返回的ASCII码值来判断用户按下了那个键
            if (e.keyCode === 65) {
                alert('您按下的a键');
            } else {
                alert('您没有按下a键')
            }

        })
        document.addEventListener('keypress', function(e) {
            console.log('press:' + e.keyCode);

        })
    </script>
</body>
```