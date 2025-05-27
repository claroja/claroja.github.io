# keyframe


## keyframe
1. 使用 @keyframes 定义动画, 该动画使一个元素从透明变成不透明

    ```css
    @keyframes slidein {
        from { /*等价于0%*/
            opacity: 0;
        }

        to { /*等价于100%*/
            opacity: 1;
        }
    }
    ```
2. 通过 animation 属性将其应用到 HTML 元素上。

    ```css
    .fade-in-element {
        animation: fadeIn 1s ease-in-out;
    }
    ```


## javascript控制动画

### JavaScript 触发 CSS 动画

JavaScript 可以用来添加或移除元素的类，从而触发或停止 CSS 动画。以下是一个例子，展示了如何使用 JavaScript 来触发之前定义的 fadeIn 动画。

```js
// 获取需要触发动画的元素
var element = document.querySelector('.element-to-fade-in');

// 使用JavaScript添加类来触发动画
element.classList.add('fade-in-element');
```

### JavaScript 控制动画的播放状态

JavaScript 还可以用来控制动画的播放状态，例如暂停、播放、反转等。以下是如何使用 Element.animate() 方法来控制动画。下例中, element.animate() 方法接受关键帧和动画选项作为参数，从而实现动画的播放。

```js
// 获取需要控制动画的元素
var element = document.querySelector('.animated-element');

// 定义动画关键帧
var keyframes = [
  { transform: 'translateX(0)' },
  { transform: 'translateX(100px)' }
];

// 定义动画选项
var options = {
  duration: 1000,
  iterations: 1
};

// 使用Element.animate()播放动画
element.animate(keyframes, options);
```


### javascript 事件监听与动画控制
1. 通过监听 animationend 和 animationstart 事件，我们可以在动画开始和结束时执行特定的逻辑，比如更新用户界面或状态提示。
    
    ```js
    // 获取需要绑定动画事件的元素
    var animatedElement = document.querySelector('.animated-element');

    // 监听动画结束事件
    animatedElement.addEventListener('animationend', function() {
    console.log('动画结束');
    });

    // 监听动画开始事件
    animatedElement.addEventListener('animationstart', function() {
    console.log('动画开始');
    });
    ```

2. 通过 Element.pause() 和 Element.play() 方法来控制动画的暂停和播放。


    ```js
    // 获取需要控制动画的元素
    var element = document.querySelector('.animated-element');

    // 暂停动画
    element.animate().pause();

    // 播放动画
    element.animate().play();

    ```


## 参考
1. https://developer.mozilla.org/zh-CN/docs/Web/CSS/@keyframes
2. https://my.oschina.net/emacs_8525177/blog/16583651

