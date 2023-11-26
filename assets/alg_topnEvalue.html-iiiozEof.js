import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as d,e}from"./app-XqA98pG8.js";const c={},o=e('<h1 id="topnevalue" tabindex="-1"><a class="header-anchor" href="#topnevalue" aria-hidden="true">#</a> topnEvalue</h1><p>有5个classes — dog, cat, giraffe, mouse and bug.</p><table><thead><tr><th>image</th><th>true label</th><th>predicted label</th><th>top3 predicted labels</th></tr></thead><tbody><tr><td>1</td><td>dog</td><td>dog</td><td>dog,cat,giraffe</td></tr><tr><td>2</td><td>cat</td><td>dog</td><td>dog,bug,cat</td></tr><tr><td>3</td><td>dog</td><td>bug</td><td>bug,giraffe,mouse</td></tr><tr><td>4</td><td>giraffe</td><td>giraffe</td><td>giraffe,cat,mouse</td></tr><tr><td>5</td><td>mouse</td><td>mouse</td><td>mouse,dog,cat</td></tr></tbody></table><p>Top1 accuracy — 60% Top3 accuracy — 80%</p><h2 id="topn-accuracy-用处" tabindex="-1"><a class="header-anchor" href="#topn-accuracy-用处" aria-hidden="true">#</a> topn accuracy 用处</h2><ol><li><p>模型可以通过你过去的购买记录, 比如过去购买商品的分类, 过去购买商品的价格区间, 过去购买商品的生产商, 等来推荐新的商品. 很多时候, 顾客并不是购买你推荐的top1商品, 而是在推荐列表后面的商品. 这就是准确定悖论(accuracy paradox):预测模型有合适的准确率要比有更高的准确率更有作用. 因为顾客浏览网站, 并不是寻找最好的, 而是在寻找多样的, 新颖的, 相关的, 有缘的商品.</p></li><li><p>当top1 accuracy非常低时, 我们可能会认为模型并没有训练效果. 但是, 如果此时topn accuracy提升明显时, 这就意味着, 模型已经有效的进行训练, 我们只是需要进行 fine-tuning.</p></li></ol><p>参考: https://www.baeldung.com/cs/top-n-accuracy-metrics https://medium.com/nanonets/evaluating-models-using-the-top-n-accuracy-metrics-c0355b36f91b</p>',7),r=[o];function n(u,i){return a(),d("div",null,r)}const s=t(c,[["render",n],["__file","alg_topnEvalue.html.vue"]]);export{s as default};