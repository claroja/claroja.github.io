有5个classes — dog, cat, giraffe, mouse and bug.


image|true label|predicted label|top3 predicted labels
--|--|--|--
1|dog|dog|dog,cat,giraffe
2|cat|dog|dog,bug,cat
3|dog|bug|bug,giraffe,mouse
4|giraffe|giraffe|giraffe,cat,mouse
5|mouse|mouse|mouse,dog,cat

Top1 accuracy — 60%
Top3 accuracy — 80%


# topn accuracy 用处

1. 模型可以通过你过去的购买记录, 比如过去购买商品的分类, 过去购买商品的价格区间, 过去购买商品的生产商, 等来推荐新的商品. 很多时候, 顾客并不是购买你推荐的top1商品, 而是在推荐列表后面的商品. 这就是准确定悖论(accuracy paradox):预测模型有合适的准确率要比有更高的准确率更有作用. 因为顾客浏览网站, 并不是寻找最好的, 而是在寻找多样的, 新颖的, 相关的, 有缘的商品.

2. 当top1 accuracy非常低时, 我们可能会认为模型并没有训练效果. 但是, 如果此时topn accuracy提升明显时, 这就意味着, 模型已经有效的进行训练, 我们只是需要进行 fine-tuning.

参考:
https://www.baeldung.com/cs/top-n-accuracy-metrics
https://medium.com/nanonets/evaluating-models-using-the-top-n-accuracy-metrics-c0355b36f91b