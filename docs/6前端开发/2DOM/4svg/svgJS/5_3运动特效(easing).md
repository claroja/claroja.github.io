# Easing

## 最佳实践

```js
var draw = SVG().addTo('#test').size(200, 20)
var runner = draw.rect(20, 20).animate(2000, 0, 'now')
runner.ease('<>').move(180,0)
```


## 参数


1. `<>`: ease in and out
1. `>`: ease out
1. `<`: ease in
1. `-`: linear
1. `a function`
1. `beziere(x1, y1, x2, y2)`
1. `step(steps, stepPosition)`


插件[svg.easing.js](https://github.com/svgdotjs/svg.easing.js)现在报错, 但是可以直接使用里面的方法, 作为ease()的参数.