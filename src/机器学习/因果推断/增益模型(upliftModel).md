# 增益模型(upliftModel)



假设我们通过Response模型预测了两类用户的发券购买率和无券购买率:

用户|发券购买率|无券购买率
--|--|--
用户1|1.4%|0.5%
用户2|1.6%|1.3%

发券之后两类用户的购买率都有提升，并且用户2的购买率(1.6%) 高于用户1的购买率(1.4%)。如果按照这种结果，我们是否可以做出为用户2发放优惠券的决定呢？

假设用户1和用户2各有1000人，商品的原价是10元，优惠券的金额是2元，遍历所有发放方案，可以得到如下总效益情况: 

- 都不发券时，总效益是1000x0.5%×10+1000x1.3%×10=180元: 
- 都发券时，总效益是1000×1.4%×8+1000×1.6%×8=240元: 
- 当不给用户1发券，给用户2发券时，总效益是1000x0.5%×10+1000x 1.6%×8=178元；
- 当给用户1发券，不给用户2发券时，总效益是1000x1.4%×8+1000x 1.3%×10=242元。


Response模型的结果获得的补贴效益并不是最大的。Response模型无法帮助我们识别出发放优惠券与购买之间是否存在因果关系.

进行补贴的目的是通过发放优惠券，促使那些本来不会购买的用户进行购买，从而提高总效益。但是，在用户量庞大的情况下，是不可能给所有用户都发放优惠券的。那么，想要知道如何发放优惠券，首先就需要搞清楚哪一类用户对优惠券刺激最敏感，换言之，就是要通过对用户的分类来了解每一类用户的特点。具体地，可以将用户分为以下4类

- 营销敏感人群:基本上只有在发券时才会购买的人群，即优惠券敏感人群。
- 自然转化人群:无论是否发券都会购买。
- 无动于衷人群:无论是否发券都不购买，这类用户难以刺激，直接放弃。
- 反作用人群:对营销活动比较反感，不发券的时候可能会购买，但发券后不会再购买。


我们的目标人群是营销敏感人群，识别营销敏感人群也就是要识别发券与购买之间的因果关系，这就需要用到因果推断技术。在营销领域，因果推断技术主要是运用Uplift建模进行增量预估，通过增量的大小来识别营销敏感人群。


从公式的角度，Responsc模型和Uplin模型分别表示如下: 
- Rcsponse: $P(Y=1)$ 
- Uplift: $P(Y=1|X,T)$


Response模型主要用来预测用户的购买率，而Uplin模型主要用来预测添加某种干预后用户购买的概率。因果推断技术就是基于Uplift建模来预测发放优惠券这种干预所带来的效益增益。

Uplift建模是如何进行增益评估的呢？

需要应用因果效应的概念，假设有$n$个用户，$Y_i(1)$表示对用户$i$发放优惠券的结果，$Y_i(0)$表示没有对用户$i$发放优惠券的结果，那么用户$i$的因果效应就可以表示为: 

$$
\tau=Y_i(1)-Y_i(0)
$$

因果效应也就是应用场景中发放优惠券带来的增量收益，Uplift建模的目标是最大化因果效应，在实际使用时会取所有用户的因果效应期望的估计值来衡量整个用户群的效果，被称为条件平均因果效应( Conditional Average Treatment Effect, CATE)。

$$
\tau(X_i)=E[Y_i(1)|X]-E[Y_i(0)|X] 
$$

其中，X表示用户i的特征。


但是，对于同一个用户，我们不可能同时得到发放优惠券与不发放优惠券的结果，即不可能同时得到$Y_i(1)$与$Y_i(0)$,，因此将计算公式修改如下: 
$$
Y_i^{obs}=W_iY_i(1)+(1-W_i)Y_i(0) 
$$

其中，$Y_i^{obs}$表示用户可以观测到的输出结果，$W_i$为二值型变量，$W_i=1$表示对用户发放了优惠券，$W_i=0$表示对用户没发优惠券。在条件独立假设下，条件平均因果效应的期望估计值如下，最大化该值也是 Uplift 模型的目标。

$$
\tau(X_i)=E[Y_i^{obs}|X_i=x,W=1]-E[Y_i^{obs}|X_i=x,W=0]
$$

由于同一个用户不能被同时观测到发放优惠券与不发放优惠券的结果，因此$\tau(X_i)$是很难直接优化的，但通过AB实验，可以获得发放优惠券和不发放优惠券的两类人群，如果两类人群的特征分布一致，就可以通过模拟两类人群的$\tau(X_i)$得到个体用户的$\tau(X_i)$。因此，Uplift模型依赖AB实验的数据，Uplift建模的常用方法如下。

- T-Learner

    基本思想是对干预数据和无干预数据分别进行建模，将两个模型的预测结果相减，得到预估的增量，公式如下： 

    $$
    uplift = G(Y_i|X_i,T)-G(Y_i|X_i,C)
    $$

    其中，$T$表示实验组（发放优惠券）, $C$表示对照组，$G$为两组对应的预测模型。

    以优惠券发放为例，正样本表示下单用户，负样本表示未下单用户。取实验组的用户作为训练数据，并预测每个用户下单的概率；类似地，用不同的模型预测对照组中每个用户下单的概率，将两个组的用户下单概率求平均可以得到$E(Y^T|X^T)$和$E(Y^C|X^C)$。

    对用户分别使用对应的模型进行预测，相减后即可得到每个用户$i$的$\tau(X_i)$:

    $$
    \tau(X_i) = G(Y_i^T|X_i^T) - G(Y_i^C|X_i^C)
    $$

    根据$\tau(X_i)$的大小可以决定是否对用户$i$发放优惠券。


- S-Learner

    基本思想是把干预（是否发放优惠券）作为特征输入模型，在预测时，同样是将有干预的结果和无干预的结果相减，得到预估增量。和 Response 模型比较像，相当于特征里面有"是否干预"这样的特征，公式如下： 

    $$
    uplift=G(X,W,Y) \\
    \tau(X_i)=G(Y_i|X_i,W=1)-G(Y_i|X_i,W=0)
    $$

- ClassTransformationMethod （标签转化法）

    一种更严谨的可以实现实验组、对照组数据打通和模型打通的方法，可以直接优化\tau(X_i)。为了统一表示实验组和对照组都下单的情况($Y=1$)，再定义一个变量$Z$, $Z \in \{0,1\}$:
    $$
    Z
    \begin{cases}
    1, & if\ T\ and\ Y=1 \\
    1, & if\ C\ and\ Y=1 \\
    0, & \ otherwise
    \end{cases}
    $$

    则有:

    $\tau(X_i)=P^T(Y=1|X)-P^C(Y=1|X)=2P(Z=1|X)-1$




## 参考
- [营销算法炼丹笔记：一文读懂增益模型Uplift Model](https://zhuanlan.zhihu.com/p/599355166)
- [Pylift](https://www.aboutwayfair.com/data-science/2018/10/pylift-a-fast-python-package-for-uplift-modeling/)
- [一文读懂uplift model](https://zhuanlan.zhihu.com/p/100821498)
- [阿里基于渠道协同的预算分配与权益管理实践](https://zhuanlan.zhihu.com/p/605185881)
- [Story Uplift Modeling](https://pbiecek.github.io/xai_stories/story-uplift-marketing1.html)
- [How uplift modeling works](https://ambiata.com/blog/2020-07-07-uplift-modeling/)
- [智能营销与因果推断-uplift模型](https://zhuanlan.zhihu.com/p/370708460)