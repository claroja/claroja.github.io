
# renderer

Vex.Flow.Renderer(div,Vex.Flow.Renderer.Backends.SVG) | 渲染器
`renderer`并不参与实际的渲染, 它的主要作用是:
1. 指定生成的标签(第一个参数)
2. 渲染的方式`svg`和`canvas`(第二个参数)
3. 生成`context`对象(`getContext()`) 
4. 设置界面的大小(`resize())

## 方法
方法|描述
--|--
renderer.resize(500, 500)|设置svg大小
renderer.getContext()|获得`context`对象


# context
`context`的作用是作用是绘图(path),每个曲谱的渲染都需要`context`的协助.
下面的代码是画一个黄色的三角形
```js
context.beginPath() // start recording our pen's moves
  .moveTo(0, 0) // pickup the pen and set it down at X=0, Y=0. NOTE: Y=0 is the top of the screen.
  .lineTo(50, 0) // now add a line to the right from (0, 0) to (50, 0) to our path
  .lineTo(25, 50) // add a line to the left and down from (50, 0) to (25, 50)
  .closePath() // now add a line back to wherever the path started, in this case (0, 0), closing the triangle.
  .fill({ fill: 'yellow' }); // now fill our triangle in yellow.
```
上述的代码等价于:`M0 0L50 0L25 50Z`

绘制的上下文
renderer.getContext()

[官网](https://github.com/0xfe/vexflow/wiki/Understanding-Renderer-&-Context)
# stave
stave就是五线谱了
Vex.Flow.Stave(10, 40, 400)

方法|描述
--|--
addClef("treble")|谱号
addTimeSignature("4/4")|拍好
setContext()|设置context对象
draw()|绘制


# notes
音符
```js
var notes = [
  // A quarter-note C.
  new VF.StaveNote({clef: "treble", keys: ["c/4"], duration: "q" })
]
```
# voice
将多个notes称为一个`voice`, 多个`voice`可以形成`voiceGroup`
```js
var voice = new VF.Voice({num_beats: 4,  beat_value: 4});
voice.addTickables(notes);
voice.draw(context, stave);
```

# formatter
用来设置音符的样式
```js
var formatter = new VF.Formatter().joinVoices([voice]).format([voice], 350);
```
