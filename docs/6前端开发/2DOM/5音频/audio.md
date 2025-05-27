# audio

## AudioContext

`AudioContext`的作用:
- 创建它所包含的node
- 执行音频处理
在做任何事情之前, 都要创建`AudioContext`, 所有的事情都是在`AudioContext`里面发生. 建议创建一个`AudioContext`, 重复使用, 而不是创建多个`AudioContext`.



属性|描述
--|--
currentTime|double类型的逐渐增长的硬件时间单位秒, 继承自BaseAudioContext
destination|返回一个`AudioDestinationNode`, 表示context中的目的地node, 既渲染设备(耳机,音响)
sampleRate|context内所有node使用的sample rate, float类型. 不能改变
state|当前的状态['suspended','running','closed']


方法|描述
--|--
createOscillator()|返回`OscillatorNode`对象



## OscillatorNode
`OscillatorNode`表示一个时间段的波形(waveform), 比如sine wave. 继承关系:
`OscillatorNode` -> `AudioScheduledSourceNode` -> `AudioNode`

属性|描述
--|--
frequency|震动频率, 可以直接改变音高 单位hertz, 默认440Hz, 既标准音A(standard middle-A note)
detune|另一种改变音高的方式, 使用百分比(cents), 100就是一个半音(semitone). 默认是0.
type|波形的类型, 可选`sine`, `square`, `sawtooth`, `triangle`


方法|描述
--|--
start()|开始的时间, 结合audioContext.currentTime使用
stop()|结束的时间, 结合audioContext.currentTime+period使用


```js
const audioContext = new AudioContext();
const oscillatorNode = audioContext.createOscillator();
oscillatorNode.connect(audioContext.destination);


oscillatorNode.type = 'sawtooth';
oscillatorNode.frequency.setValueAtTime(220, context.currentTime);
oscillatorNode.detune.setValueAtTime(50, context.currentTime);  //等价 oscillator.detune.value = pitch * 100

oscillatorNode.start();
// insert timer or user input
oscillatorNode.stop();


```


参考:
https://web-audio-api.firebaseapp.com/oscillator-node
https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode 





## AudioDestinationNode
`AudioDestinationNode`表示audio graph的最终的目的地, 往往是扬声器(speakers of device).
- 没有output, 既后面不能再连接`AudioNode`
- 仅有一个input.
- 输入的channels必须在[0, maxChannelCount]之间.

参考:
https://developer.mozilla.org/en-US/docs/Web/API/AudioDestinationNode