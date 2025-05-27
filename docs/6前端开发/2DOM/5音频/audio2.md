# audio

## 更改audio的样式
`audio`原生的样式过于复杂, 从左到右依次是播放, 开始时间, 结束时间, 进度条, 音量, 三个点.

<audio src="xxx.mp3" controls></audio>

我们的目标是指保留播放, 其余的控件全部去掉.


- 使用controlsList属性, 去掉三个点.

    ```htm
    <audio src="xxx.mp3" controls  controlsList="nodownload noplaybackrate"></audio>
    ```

- 控制shadow dom的样式, 去掉开始时间, 结束时间, 时间条, 音量键


    ```css
    audio::-webkit-media-controls-panel {
        background-color: #ffffff;
    }
    audio::-webkit-media-controls-current-time-display {
        display: none;
    }
    audio::-webkit-media-controls-time-remaining-display {
        display: none;
    }
    audio::-webkit-media-controls-timeline {
        display: none;
    }
    audio::-webkit-media-controls-mute-button {
        display: none;            
    }
    audio::-webkit-media-controls-volume-control-container{
        display:none;
    }
    audio {
        height: 20px;
        vertical-align: middle;
    }
    ```

> 🔴audio标签的长度扔不能修改, 如果修改width过短, 会冒出三个点. 暂时没有找解决办法, 书写时暂时只能放在语句的最后了

> 所有`-internal`开都的都不能修改, 如`pseudo="-internal-media-controls-playback-speed-button"`来控制三个点, 原因不清楚


## chrome中显示shadow
1. 点击`F12`
2. 点击`settings`按钮, 一般在右侧齿轮的样子
3. 在`Elements`组下找到`Show user agent shadow DOM`勾选



参考:
- [css-styling-the-audio-element](https://pointclearmedia.com/2020/08/27/css-styling-the-audio-element/)
- [the-html-audio-element-part-1](https://pointclearmedia.com/2020/08/25/the-html-audio-element-part-1/)
- [how-to-style-an-audio-element](https://blog.shahednasser.com/how-to-style-an-audio-element/)
- [codepen](https://codepen.io/shahednasser/pen/JjJdeqM)
- [video标签隐藏右下角的三个点](https://blog.csdn.net/qq_42374676/article/details/115379661)
- [原生 audio, video 标签 controls 的修改](https://juejin.cn/post/7202174759999766587)