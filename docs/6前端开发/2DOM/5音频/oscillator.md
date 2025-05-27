# 智能补全



参数|描述
--|--
[detune](https://www.javascripture.com/OscillatorNode#detune): 每个八度都有1200个cent, detune代表有多少个cent. 比如我们想提高一个八度, 那么就让detune=1200. [cents](https://en.wikipedia.org/wiki/Cent_(music))将两个半音分为100份, 每一份是一个cent
`frequency`|原始声波的频率, 默认是440, 单位`hertz`.`effectiveFrequency`是真正的输出频率(音高), 它的计算方式如下, 是根据原始的`frequency`和`detune`共同决定的. 当`detune`=0时, 就是原始音高, 当`detune`=1200时, 频率提高一倍, 就提高了一个八度.`effectiveFrequency = frequency * pow(2, detune / 1200)`
`type`|波形的类型, 有`sine`, `square`, `sawtooth`, or `triangle`

```js
var startTime = audioContext.currentTime  // 开始的时间
var endTime = startTime + duration  //duration是持续的时间
var oscillator = audioContext.createOscillator()  //创建振荡器
oscillator.connect(audioContext.destination)
oscillator.type = "sine"
oscillator.detune.value = pitch * 100  //默认frequency是440, 一个pitch是一个semitone, 用此来表示音高.而不是直接改变基础频率
oscillator.start(startTime)
oscillator.stop(endTime)
```

方法|描述
--|--
setPeriodicWave|
start|开始播放
stop|结束播放



参考:
https://www.javascripture.com/OscillatorNode