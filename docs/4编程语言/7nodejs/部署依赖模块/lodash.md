# lodash

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- 引入lodash：已经封装好了防抖与节流的业务 -->
    <script src='./js/lodash.js'></script>
</head>
<body>
    <!-- 防抖场景 -->
    <div>
        <span>搜索内容(没有防抖)</span><input type="text" id="putong">
        <span>搜索内容(添加防抖)</span><input type="text" id="fangdou">
    </div>
    <!-- 节流 -->
    <button>点击我切换图片</button>
</body>
</html>
<script>
    // 没有添加防抖每次都要触发
    let input1 = document.querySelector('#putong');
    let input2 = document.querySelector('#fangdou');

    //oninput事件:当文本框中的内容发生变化的时候立即会出发的(结合表单元素一起使用)
    input1.oninput = function(){
       console.log('发起ajax请求');
    }
    //防抖：前面的所有的触发都被取消，最后一次执行在规定的时间之后才会执行，也就是说如果连续快速的触发, 只会在规定时间后执行一次
    //对于项目性能优化是极好的
    //lodash函数库对外暴露_对象
    input2.oninput = _.debounce(function(){
       console.log('发起ajax请求');
    },1000);//1s后执行最后一次操作
    //_.debounce(callBack,time) ,返回一个新的函数
    //节流：在规定的时间范围内不会重复触发回调，只有大于这个时间间隔才会触发回调，把频繁触发变为少量触发
    let button = document.querySelector('button');
    button.onclick = _.throttle(function(){
         console.log('切换图片');
    },1000); //1s内只能触发一次

</script>

```


vue中使用

```js
import throttle from 'lodash/throttle'; //按需引入import _ from 'lodash'是全部引入

    methods: {
    //用于修改组件实例身上的currentIndex的属性值
    changeIndex:throttle(function(index){
        //修改当前currentIndex索引值
        //函数节流:在20MS时间之内只能执行一次
        this.currentIndex = index;
    },20)
    },
```