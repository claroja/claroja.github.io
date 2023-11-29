const e=JSON.parse('{"key":"v-524802e0","path":"/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/numpy/math.html","title":"math","lang":"zh-CN","frontmatter":{"description":"math Trigonometric functions（三角函数） 函数 描述 sin(x, /[, out, where, casting, order, ...]) 正弦, element-wise. cos(x, /[, out, where, casting, order, ...]) 余弦 element-wise. tan(x, /[, out, where, casting, order, ...]) 正切 element-wise. arcsin(x, /[, out, where, casting, order, ...]) 反正弦, element-wise. arccos(x, /[, out, where, casting, order, ...]) 反余弦, element-wise. arctan(x, /[, out, where, casting, order, ...]) 反正切, element-wise. hypot(x1, x2, /[, out, where, casting, ...]) Given the “legs” of a right triangle, return its hypotenuse. arctan2(x1, x2, /[, out, where, casting, ...]) Element-wise arc tangent of x1/x2 choosing the quadrant correctly. degrees(x, /[, out, where, casting, order, ...]) 弧度转角度 radians(x, /[, out, where, casting, order, ...]) 角度转弧度 unwrap(p[, discont, axis]) Unwrap by changing deltas between values to 2*pi complement. deg2rad(x, /[, out, where, casting, order, ...]) Convert angles from degrees to radians. rad2deg(x, /[, out, where, casting, order, ...]) Convert angles from radians to degrees.","head":[["meta",{"property":"og:url","content":"https://claroja.github.io/%E6%95%B0%E5%AD%A6/%E5%88%86%E6%9E%90%E5%B7%A5%E5%85%B7/numpy/math.html"}],["meta",{"property":"og:site_name","content":"Claroja"}],["meta",{"property":"og:title","content":"math"}],["meta",{"property":"og:description","content":"math Trigonometric functions（三角函数） 函数 描述 sin(x, /[, out, where, casting, order, ...]) 正弦, element-wise. cos(x, /[, out, where, casting, order, ...]) 余弦 element-wise. tan(x, /[, out, where, casting, order, ...]) 正切 element-wise. arcsin(x, /[, out, where, casting, order, ...]) 反正弦, element-wise. arccos(x, /[, out, where, casting, order, ...]) 反余弦, element-wise. arctan(x, /[, out, where, casting, order, ...]) 反正切, element-wise. hypot(x1, x2, /[, out, where, casting, ...]) Given the “legs” of a right triangle, return its hypotenuse. arctan2(x1, x2, /[, out, where, casting, ...]) Element-wise arc tangent of x1/x2 choosing the quadrant correctly. degrees(x, /[, out, where, casting, order, ...]) 弧度转角度 radians(x, /[, out, where, casting, order, ...]) 角度转弧度 unwrap(p[, discont, axis]) Unwrap by changing deltas between values to 2*pi complement. deg2rad(x, /[, out, where, casting, order, ...]) Convert angles from degrees to radians. rad2deg(x, /[, out, where, casting, order, ...]) Convert angles from radians to degrees."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-27T13:17:01.000Z"}],["meta",{"property":"article:author","content":"claroja"}],["meta",{"property":"article:modified_time","content":"2023-11-27T13:17:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"math\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-27T13:17:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"claroja\\",\\"url\\":\\"https://claroja.github.io\\"}]}"]]},"headers":[{"level":2,"title":"Trigonometric functions（三角函数）","slug":"trigonometric-functions-三角函数","link":"#trigonometric-functions-三角函数","children":[]},{"level":2,"title":"Hyperbolic functions（双曲线函数）","slug":"hyperbolic-functions-双曲线函数","link":"#hyperbolic-functions-双曲线函数","children":[]},{"level":2,"title":"Rounding（约数）","slug":"rounding-约数","link":"#rounding-约数","children":[]},{"level":2,"title":"Sums, products, differences（加法，乘法，区别）","slug":"sums-products-differences-加法-乘法-区别","link":"#sums-products-differences-加法-乘法-区别","children":[]},{"level":2,"title":"Exponents and logarithms（指数和对数）","slug":"exponents-and-logarithms-指数和对数","link":"#exponents-and-logarithms-指数和对数","children":[]},{"level":2,"title":"Other special functions（其他特殊函数）","slug":"other-special-functions-其他特殊函数","link":"#other-special-functions-其他特殊函数","children":[]},{"level":2,"title":"Floating point routines（浮点路线）","slug":"floating-point-routines-浮点路线","link":"#floating-point-routines-浮点路线","children":[]},{"level":2,"title":"Arithmetic operations（数学函数）","slug":"arithmetic-operations-数学函数","link":"#arithmetic-operations-数学函数","children":[]},{"level":2,"title":"Handling complex numbers（处理复杂的数字）","slug":"handling-complex-numbers-处理复杂的数字","link":"#handling-complex-numbers-处理复杂的数字","children":[]},{"level":2,"title":"Miscellaneous（杂项）","slug":"miscellaneous-杂项","link":"#miscellaneous-杂项","children":[]}],"git":{"createdTime":1701091021000,"updatedTime":1701091021000,"contributors":[{"name":"claroja","email":"63183535@qq.com","commits":1}]},"readingTime":{"minutes":4.65,"words":1396},"filePathRelative":"数学/分析工具/numpy/math.md","localizedDate":"2023年11月27日","excerpt":"<h1> math</h1>\\n<h2> Trigonometric functions（三角函数）</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>函数</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>sin(x, /[, out, where, casting, order, ...])</td>\\n<td>正弦, element-wise.</td>\\n</tr>\\n<tr>\\n<td>cos(x, /[, out, where, casting, order, ...])</td>\\n<td>余弦 element-wise.</td>\\n</tr>\\n<tr>\\n<td>tan(x, /[, out, where, casting, order, ...])</td>\\n<td>正切 element-wise.</td>\\n</tr>\\n<tr>\\n<td>arcsin(x, /[, out, where, casting, order, ...])</td>\\n<td>反正弦, element-wise.</td>\\n</tr>\\n<tr>\\n<td>arccos(x, /[, out, where, casting, order, ...])</td>\\n<td>反余弦, element-wise.</td>\\n</tr>\\n<tr>\\n<td>arctan(x, /[, out, where, casting, order, ...])</td>\\n<td>反正切, element-wise.</td>\\n</tr>\\n<tr>\\n<td>hypot(x1, x2, /[, out, where, casting, ...])</td>\\n<td>Given the “legs” of a right triangle, return its hypotenuse.</td>\\n</tr>\\n<tr>\\n<td>arctan2(x1, x2, /[, out, where, casting, ...])</td>\\n<td>Element-wise arc tangent of x1/x2 choosing the quadrant correctly.</td>\\n</tr>\\n<tr>\\n<td>degrees(x, /[, out, where, casting, order, ...])</td>\\n<td>弧度转角度</td>\\n</tr>\\n<tr>\\n<td>radians(x, /[, out, where, casting, order, ...])</td>\\n<td>角度转弧度</td>\\n</tr>\\n<tr>\\n<td>unwrap(p[, discont, axis])</td>\\n<td>Unwrap by changing deltas between values to 2*pi complement.</td>\\n</tr>\\n<tr>\\n<td>deg2rad(x, /[, out, where, casting, order, ...])</td>\\n<td>Convert angles from degrees to radians.</td>\\n</tr>\\n<tr>\\n<td>rad2deg(x, /[, out, where, casting, order, ...])</td>\\n<td>Convert angles from radians to degrees.</td>\\n</tr>\\n</tbody>\\n</table>","copyright":{"author":"王新宇"},"autoDesc":true}');export{e as data};