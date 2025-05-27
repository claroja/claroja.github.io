



在matplotlib中:
1. 使用rc parameters来控制figure.figsize参数
2. 或者在创建的时候指定plt.subplots(figsize=(w, h))


axes-level方法, 可以通过matplotlib中的上述方法来控制.
Figure-level方法, 只能通过height和aspect空值axes的大小, figure大小会自动调整. 

可以通过返回的ax对象或者FacetGrid对象, 来获得figure


## 参考

1. https://seaborn.pydata.org/faq.html#how-do-i-change-the-figure-size