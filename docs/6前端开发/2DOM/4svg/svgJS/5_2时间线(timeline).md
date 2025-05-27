# timeline







```js
import { SVG, Timeline} from '@svgdotjs/svg.js'

    var draw = SVG().addTo('#test').size(300, 300)

    var rect1 = draw.rect(20, 20).move(150, 140).fill('red')
    var rect2 = draw.rect(20, 20).move(130, 140).fill('blue')

    var timeline = new Timeline()

    rect1.timeline(timeline)
    rect2.timeline(timeline)

    rect1.animate(1000, 500, 'absolute').move(0, 140) // start at time 0 of timeline
    rect2.animate(1000, 500, 'absolute').move(280, 140) // start at time 200 of timeline
```

![alt text](时间线(timeline)/1.gif)



1. `finish()`: 完成timeline, 所有元素状态到最终状态
    
    ```js
    rect.animate().move(200, 200).animate().dmove(50,50).size(300,400)
    rect.timeline().finish() // rect at 250,250 with size 300,400
    ```

2. `pause()`: 暂停timeline

    ```js
    rect.animate().move(200, 200)
    rect.mouseover(function() { this.timeline().pause() })
    ```

3. `play()`: 启动timeline

    ```js
    rect.animate().move(200, 200)
    rect.mouseover(function() { this.timeline().pause() })
    rect.mouseout(function() { this.timeline().play() })
    ```

4. `reverse()`: 翻转timeline

    ```js
    // will run from 100,100 to rects initial position
    rect.animate(3000).move(100, 100)
    // sets direction to backwards
    rect.timeline().reverse(true)
    // sets direction to forwards
    rect.timeline().reverse(false)
    ```

5. `stop()`: 结束timeline, 回到初始状态, 和`finish()`对应

    ```js
    rect.animate().move(200, 200)
    rect.timeline().stop()
    ```

6. `speed()`: 加速timeline

    ```js
    rect.animate().move(200, 200)
    rect.timeline().speed(2)  //以2倍速度
    ```

7. `seek()`: 从指定时间开始播放

    ```js
    rect.animate(1000).move(200, 200)
    rect.timeline().seek(500) // 从500ms播放
    ```

8. `persist()`: 动画结束后, 保存runner. 默认删除runner

    ```js
    rect.animate().move(200, 200)
    rect.timeline().persist(100) // persist runner for 100ms more than their end time
    rect.timeline().persist(true) // never delete runners
    ```

9. `source()`: ?
10. `schedule()`: ?
11. `unschedule()`: ?



























