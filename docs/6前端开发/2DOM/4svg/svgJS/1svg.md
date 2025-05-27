

## 创建svg元素

```js
import { SVG } from '@svgdotjs/svg.js'
var draw = SVG().addTo('#test').size(300, 300)
var rect = draw.rect(100, 100).attr({ fill: '#f06' })
```
